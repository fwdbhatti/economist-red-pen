"use client";

import { Check, Plus, RotateCcw, Trash2, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/cn";
import type { VoiceRule, VoiceRuleKind } from "@/lib/types";
import {
  createRule,
  ECONOMIST_DEFAULTS,
  PILLARS,
} from "@/lib/voicePresets";

interface RulesEditorProps {
  rules: VoiceRule[];
  onChange: (rules: VoiceRule[]) => void;
}

export function RulesEditor({ rules, onChange }: RulesEditorProps) {
  const [adding, setAdding] = useState(false);

  const activeCount = rules.filter((r) => r.enabled).length;

  const updateRule = (id: string, patch: Partial<VoiceRule>) =>
    onChange(rules.map((r) => (r.id === id ? { ...r, ...patch } : r)));

  const removeRule = (id: string) =>
    onChange(rules.filter((r) => r.id !== id));

  const addRule = (kind: VoiceRuleKind) => {
    onChange([...rules, createRule(kind)]);
    setAdding(false);
  };

  const resetToDefaults = () => onChange(ECONOMIST_DEFAULTS.map((r) => ({ ...r, id: createRule(r.kind).id })));

  const addItem = (id: string, value: string) => {
    const v = value.trim();
    if (!v) return;
    updateRule(id, {
      items: [...(rules.find((r) => r.id === id)?.items ?? []), v],
    });
  };

  const removeItem = (id: string, idx: number) =>
    updateRule(id, {
      items: (rules.find((r) => r.id === id)?.items ?? []).filter(
        (_, i) => i !== idx,
      ),
    });

  const availableKinds = (
    ["plain_english", "banned_terms", "active_voice", "perspective", "register", "custom"] as VoiceRuleKind[]
  ).filter(
    (k) => k === "custom" || !rules.some((r) => r.kind === k),
  );

  return (
    <section>
      <div className="mb-3 flex flex-wrap items-baseline justify-between gap-3">
        <div className="flex items-baseline gap-3">
          <h3 className="section-label">Voice configuration</h3>
          <span className="font-ui text-xs small-caps text-ink-2">
            House preset · The Economist · {activeCount}/{rules.length} pillars
            active
          </span>
        </div>
        <button
          type="button"
          onClick={resetToDefaults}
          className="flex cursor-pointer items-center gap-1.5 font-ui text-xs small-caps text-ink-2 underline-offset-4 hover:text-econ-red hover:underline"
        >
          <RotateCcw className="h-3.5 w-3.5" strokeWidth={1.5} />
          Reset to preset
        </button>
      </div>
      <div className="mb-5 border-t border-rule" />

      <p className="mb-5 max-w-prose font-editorial text-sm italic text-ink-2">
        Five pillars of Economist editorial voice. Each pillar is a set of
        directives the style editor will enforce. Toggle a pillar to turn it
        off for this audit; edit its items to tailor it to your house.
      </p>

      <ul className="space-y-4">
        {rules.map((rule) => {
          const pillar = PILLARS[rule.kind];
          const items = rule.items ?? [];
          return (
            <li
              key={rule.id}
              className={cn(
                "group relative border p-5 transition-colors",
                rule.enabled
                  ? "border-rule bg-white/60 dark:bg-paper-deep"
                  : "border-dashed border-rule bg-paper-deep/40 opacity-70",
              )}
            >
              <div className="flex items-start gap-4">
                <PillarToggle
                  numeral={pillar.numeral}
                  enabled={rule.enabled}
                  onToggle={() =>
                    updateRule(rule.id, { enabled: !rule.enabled })
                  }
                />
                <div className="flex-1">
                  <input
                    value={rule.label}
                    onChange={(e) =>
                      updateRule(rule.id, { label: e.target.value })
                    }
                    className="w-full border-0 bg-transparent font-editorial text-lg font-bold text-ink outline-none focus:border-b focus:border-ink"
                  />
                  <textarea
                    value={rule.description ?? ""}
                    onChange={(e) =>
                      updateRule(rule.id, { description: e.target.value })
                    }
                    rows={2}
                    placeholder="One-line description of the pillar."
                    className="mt-1 w-full resize-none border-0 bg-transparent font-editorial text-sm italic text-ink outline-none placeholder:text-ink-3"
                  />
                </div>
                <button
                  onClick={() => removeRule(rule.id)}
                  aria-label={`Remove pillar: ${rule.label}`}
                  className="flex-shrink-0 cursor-pointer rounded-full p-1.5 text-ink-3 opacity-0 transition-all group-hover:opacity-100 hover:bg-paper-edge hover:text-econ-red focus-visible:opacity-100"
                >
                  <Trash2 className="h-4 w-4" strokeWidth={1.5} />
                </button>
              </div>

              <ItemsList
                pillar={pillar}
                items={items}
                disabled={!rule.enabled}
                onAdd={(v) => addItem(rule.id, v)}
                onRemove={(i) => removeItem(rule.id, i)}
              />
            </li>
          );
        })}
      </ul>

      <div className="mt-5">
        {!adding ? (
          <button
            onClick={() => setAdding(true)}
            disabled={availableKinds.length === 0}
            className="flex cursor-pointer items-center gap-2 border border-rule bg-paper px-4 py-2 font-ui text-sm font-semibold small-caps text-ink transition-colors hover:border-econ-red hover:text-econ-red disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Plus className="h-4 w-4" strokeWidth={2} />
            Add pillar
          </button>
        ) : (
          <div className="border border-ink bg-white/60 p-4 dark:bg-paper-deep">
            <div className="flex items-center justify-between">
              <p className="font-ui text-xs small-caps text-ink-2">
                Choose a pillar
              </p>
              <button
                onClick={() => setAdding(false)}
                aria-label="Cancel"
                className="cursor-pointer rounded-full p-1 text-ink-3 hover:bg-paper-edge hover:text-ink"
              >
                <X className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>
            <div className="mt-3 flex flex-col gap-2">
              {availableKinds.map((kind) => {
                const p = PILLARS[kind];
                return (
                  <button
                    key={kind}
                    onClick={() => addRule(kind)}
                    className="flex cursor-pointer items-start gap-3 border border-rule bg-paper px-4 py-3 text-left transition-colors hover:border-econ-red hover:bg-white"
                  >
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center border border-ink font-display text-xs font-bold text-ink">
                      {p.numeral}
                    </span>
                    <div>
                      <div className="font-editorial text-base font-bold text-ink">
                        {p.label}
                      </div>
                      <div className="mt-0.5 font-editorial text-xs italic text-ink-2">
                        {p.description}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function PillarToggle({
  numeral,
  enabled,
  onToggle,
}: {
  numeral: string;
  enabled: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={enabled}
      aria-label={enabled ? "Disable this pillar" : "Enable this pillar"}
      className={cn(
        "group/toggle flex h-10 w-10 flex-shrink-0 items-center justify-center border-2 font-display text-sm font-bold transition-all",
        enabled
          ? "border-econ-red bg-econ-red text-white"
          : "border-rule bg-paper text-ink-3 hover:border-ink hover:text-ink",
      )}
    >
      {enabled ? (
        <span className="flex items-center gap-0.5">
          <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
        </span>
      ) : (
        <span>{numeral}</span>
      )}
    </button>
  );
}

function ItemsList({
  pillar,
  items,
  disabled,
  onAdd,
  onRemove,
}: {
  pillar: (typeof PILLARS)[VoiceRuleKind];
  items: string[];
  disabled: boolean;
  onAdd: (v: string) => void;
  onRemove: (i: number) => void;
}) {
  const [draft, setDraft] = useState("");

  return (
    <div className="mt-4 border-t border-rule pt-3">
      <div className="mb-2 font-ui text-xs font-semibold small-caps text-ink-2">
        {pillar.itemsLabel}
      </div>
      {items.length > 0 && (
        <ul className="flex flex-wrap gap-2">
          {items.map((item, i) => (
            <li
              key={`${item}-${i}`}
              className="inline-flex items-center gap-1.5 border border-rule bg-paper px-2.5 py-1 font-mono text-xs text-ink"
            >
              <span>{item}</span>
              <button
                onClick={() => onRemove(i)}
                aria-label={`Remove ${item}`}
                disabled={disabled}
                className="cursor-pointer text-ink-3 hover:text-econ-red disabled:cursor-not-allowed"
              >
                <X className="h-3.5 w-3.5" strokeWidth={1.5} />
              </button>
            </li>
          ))}
        </ul>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (disabled) return;
          onAdd(draft);
          setDraft("");
        }}
        className="mt-3 flex items-center gap-2"
      >
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder={pillar.itemPlaceholder}
          disabled={disabled}
          className="flex-1 border-0 border-b border-rule bg-transparent py-1 font-ui text-sm text-ink outline-none placeholder:text-ink-3 focus:border-ink disabled:cursor-not-allowed"
        />
        <button
          type="submit"
          disabled={disabled || !draft.trim()}
          className="cursor-pointer font-ui text-xs small-caps text-ink-2 hover:text-econ-red disabled:cursor-not-allowed disabled:text-ink-3"
        >
          + Add
        </button>
      </form>
    </div>
  );
}
