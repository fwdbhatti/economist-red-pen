"use client";

import { useState } from "react";
import type { VoiceRule } from "@/lib/types";

interface RulesEditorProps {
  rules: VoiceRule[];
  onChange: (rules: VoiceRule[]) => void;
}

const nid = () => Math.random().toString(36).slice(2, 10);

export function RulesEditor({ rules, onChange }: RulesEditorProps) {
  const [adding, setAdding] = useState(false);

  const addRule = (kind: VoiceRule["kind"]) => {
    const defaults: Record<VoiceRule["kind"], VoiceRule> = {
      banned_terms: {
        id: nid(),
        kind: "banned_terms",
        label: "Lexicon — Banned terms",
        description: "Reject corporate jargon outright.",
        items: [],
      },
      passive_voice: {
        id: nid(),
        kind: "passive_voice",
        label: "Voice — Passive",
        description: "Active constructions only; flag be-verb passives.",
        items: [],
      },
      custom: {
        id: nid(),
        kind: "custom",
        label: "Custom rule",
        description: "",
        items: [],
      },
    };
    onChange([...rules, defaults[kind]]);
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
      <h3 className="font-display text-xs font-semibold small-caps text-ink">
        Voice configuration
      </h3>
      <div className="mt-2 border-t border-rule" />

      <ul className="mt-4 space-y-6">
        {rules.map((rule, i) => (
          <li
            key={rule.id}
            className="border-l-[3px] border-econ-red pl-4"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-baseline gap-2">
                  <span className="font-ui text-xs small-caps text-ink-3">
                    Rule {i + 1}
                  </span>
                  <input
                    value={rule.label}
                    onChange={(e) =>
                      updateRule(rule.id, { label: e.target.value })
                    }
                    className="flex-1 border-0 bg-transparent font-editorial text-md font-semibold text-ink outline-none focus:border-b focus:border-ink"
                  />
                </div>
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
              <button
                onClick={() => removeRule(rule.id)}
                className="cursor-pointer font-ui text-xs small-caps text-ink-3 hover:text-econ-red"
              >
                Remove
              </button>
            </div>

            {(rule.kind === "banned_terms" ||
              rule.kind === "passive_voice" ||
              rule.kind === "custom") && (
              <ItemsList
                rule={rule}
                onAdd={(v) => addItem(rule.id, v)}
                onRemove={(i) => removeItem(rule.id, i)}
              />
            )}
          </li>
        ))}
      </ul>

      <div className="mt-6">
        {!adding ? (
          <button
            onClick={() => setAdding(true)}
            className="cursor-pointer font-ui text-sm small-caps text-ink underline underline-offset-4 hover:text-econ-red"
          >
            + Add rule
          </button>
        ) : (
          <div className="flex gap-3 border border-rule p-3">
            <button
              onClick={() => addRule("banned_terms")}
              className="cursor-pointer font-ui text-sm small-caps text-ink hover:text-econ-red"
            >
              Banned terms
            </button>
            <span className="text-ink-3">·</span>
            <button
              onClick={() => addRule("passive_voice")}
              className="cursor-pointer font-ui text-sm small-caps text-ink hover:text-econ-red"
            >
              Passive voice
            </button>
            <span className="text-ink-3">·</span>
            <button
              onClick={() => addRule("custom")}
              className="cursor-pointer font-ui text-sm small-caps text-ink hover:text-econ-red"
            >
              Custom
            </button>
            <button
              onClick={() => setAdding(false)}
              className="ml-auto cursor-pointer font-ui text-xs small-caps text-ink-3"
            >
              Cancel
            </button>
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

  return (
    <div className="mt-3 border-l border-rule pl-4">
      <ul className="space-y-1">
        {(rule.items ?? []).map((item, i) => (
          <li
            key={`${item}-${i}`}
            className="group flex items-center justify-between gap-3 font-editorial text-sm text-ink"
          >
            <span>{item}</span>
            <button
              onClick={() => onRemove(i)}
              className="cursor-pointer font-mono text-ink-3 opacity-0 transition-opacity group-hover:opacity-100 hover:text-econ-red"
              aria-label={`Remove ${item}`}
            >
              ×
            </button>
          </li>
        ))}
      </ul>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onAdd(draft);
          setDraft("");
        }}
        className="mt-2 flex items-center gap-2"
      >
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder={
            rule.kind === "banned_terms"
              ? "add term…"
              : rule.kind === "passive_voice"
                ? "add exception…"
                : "add item…"
          }
          className="flex-1 border-0 border-b border-rule bg-transparent font-ui text-sm text-ink outline-none focus:border-ink"
        />
        <button
          type="submit"
          className="cursor-pointer font-ui text-xs small-caps text-ink-3 hover:text-econ-red"
        >
          Add
        </button>
      </form>
    </div>
  );
}
