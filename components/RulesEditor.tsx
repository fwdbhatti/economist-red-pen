"use client";

import { Plus, Trash2, X } from "lucide-react";
import { useState } from "react";
import type { VoiceRule } from "@/lib/types";

interface RulesEditorProps {
  rules: VoiceRule[];
  onChange: (rules: VoiceRule[]) => void;
}

const nid = () => Math.random().toString(36).slice(2, 10);

const RULE_TEMPLATES: Record<VoiceRule["kind"], VoiceRule> = {
  banned_terms: {
    id: "",
    kind: "banned_terms",
    label: "Lexicon — Banned terms",
    description: "Reject corporate jargon outright.",
    items: [],
  },
  passive_voice: {
    id: "",
    kind: "passive_voice",
    label: "Voice — Passive",
    description: "Active constructions only; flag be-verb passives.",
    items: [],
  },
  custom: {
    id: "",
    kind: "custom",
    label: "Custom rule",
    description: "",
    items: [],
  },
};

const TEMPLATE_PROMPTS: Record<VoiceRule["kind"], string> = {
  banned_terms: "Add a lexicon rule — ban specific words and phrases",
  passive_voice: "Add a voice rule — flag passive constructions",
  custom: "Add a custom rule — define your own constraint",
};

export function RulesEditor({ rules, onChange }: RulesEditorProps) {
  const [adding, setAdding] = useState(false);

  const addRule = (kind: VoiceRule["kind"]) => {
    onChange([...rules, { ...RULE_TEMPLATES[kind], id: nid() }]);
    setAdding(false);
  };

  const updateRule = (id: string, patch: Partial<VoiceRule>) => {
    onChange(rules.map((r) => (r.id === id ? { ...r, ...patch } : r)));
  };

  const removeRule = (id: string) => {
    onChange(rules.filter((r) => r.id !== id));
  };

  const addItem = (id: string, value: string) => {
    const v = value.trim();
    if (!v) return;
    onChange(
      rules.map((r) =>
        r.id === id ? { ...r, items: [...(r.items ?? []), v] } : r,
      ),
    );
  };

  const removeItem = (id: string, idx: number) => {
    onChange(
      rules.map((r) =>
        r.id === id
          ? { ...r, items: (r.items ?? []).filter((_, i) => i !== idx) }
          : r,
      ),
    );
  };

  return (
    <section>
      <div className="mb-3 flex items-baseline justify-between">
        <h3 className="section-label">Voice configuration</h3>
        <span className="font-ui text-xs small-caps text-ink-3">
          {rules.length} {rules.length === 1 ? "rule" : "rules"}
        </span>
      </div>
      <div className="mb-5 border-t border-rule" />

      <ul className="space-y-4">
        {rules.map((rule) => (
          <li
            key={rule.id}
            className="group relative border border-rule bg-white/40 p-5 transition-colors hover:border-ink dark:bg-paper-deep"
          >
            <button
              onClick={() => removeRule(rule.id)}
              aria-label={`Remove rule: ${rule.label}`}
              className="absolute right-3 top-3 cursor-pointer rounded-full p-1.5 text-ink-3 opacity-0 transition-all group-hover:opacity-100 hover:bg-paper-deep hover:text-econ-red focus-visible:opacity-100"
            >
              <Trash2 className="h-4 w-4" strokeWidth={1.5} />
            </button>

            <div className="pr-10">
              <input
                value={rule.label}
                onChange={(e) =>
                  updateRule(rule.id, { label: e.target.value })
                }
                className="w-full border-0 bg-transparent font-editorial text-lg font-semibold text-ink outline-none focus:border-b focus:border-ink"
              />
              <textarea
                value={rule.description ?? ""}
                onChange={(e) =>
                  updateRule(rule.id, { description: e.target.value })
                }
                rows={1}
                placeholder="Describe the rule in one line."
                className="mt-1 w-full resize-none border-0 bg-transparent font-editorial text-sm italic text-ink-2 outline-none placeholder:text-ink-3"
              />
            </div>

            <ItemsList
              rule={rule}
              onAdd={(v) => addItem(rule.id, v)}
              onRemove={(i) => removeItem(rule.id, i)}
            />
          </li>
        ))}
      </ul>

      <div className="mt-5">
        {!adding ? (
          <button
            onClick={() => setAdding(true)}
            className="flex cursor-pointer items-center gap-2 border border-rule bg-paper px-4 py-2 font-ui text-sm font-semibold small-caps text-ink transition-colors hover:border-econ-red hover:text-econ-red"
          >
            <Plus className="h-4 w-4" strokeWidth={2} />
            Add rule
          </button>
        ) : (
          <div className="border border-ink bg-white/50 p-4 dark:bg-paper-deep">
            <div className="flex items-center justify-between">
              <p className="font-ui text-xs small-caps text-ink-2">
                Choose a rule type
              </p>
              <button
                onClick={() => setAdding(false)}
                aria-label="Cancel"
                className="cursor-pointer rounded-full p-1 text-ink-3 hover:bg-paper-deep hover:text-ink"
              >
                <X className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>
            <div className="mt-3 flex flex-col gap-2">
              {(["banned_terms", "passive_voice", "custom"] as const).map(
                (kind) => (
                  <button
                    key={kind}
                    onClick={() => addRule(kind)}
                    className="cursor-pointer border border-rule bg-paper px-4 py-3 text-left transition-colors hover:border-econ-red hover:bg-white"
                  >
                    <div className="font-editorial text-base font-semibold text-ink">
                      {RULE_TEMPLATES[kind].label}
                    </div>
                    <div className="mt-0.5 font-ui text-xs text-ink-2">
                      {TEMPLATE_PROMPTS[kind]}
                    </div>
                  </button>
                ),
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function ItemsList({
  rule,
  onAdd,
  onRemove,
}: {
  rule: VoiceRule;
  onAdd: (v: string) => void;
  onRemove: (i: number) => void;
}) {
  const [draft, setDraft] = useState("");

  const items = rule.items ?? [];

  return (
    <div className="mt-4 border-t border-rule pt-3">
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
                className="cursor-pointer text-ink-3 hover:text-econ-red"
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
          onAdd(draft);
          setDraft("");
        }}
        className="mt-3 flex items-center gap-2"
      >
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder={
            rule.kind === "banned_terms"
              ? "add banned term…"
              : rule.kind === "passive_voice"
                ? "add exception…"
                : "add item…"
          }
          className="flex-1 border-0 border-b border-rule bg-transparent py-1 font-ui text-sm text-ink outline-none placeholder:text-ink-3 focus:border-ink"
        />
        <button
          type="submit"
          disabled={!draft.trim()}
          className="cursor-pointer font-ui text-xs small-caps text-ink-2 hover:text-econ-red disabled:cursor-not-allowed disabled:text-ink-3"
        >
          + Add
        </button>
      </form>
    </div>
  );
}
