import type { VoiceRule, VoiceRuleKind } from "./types";

export interface PillarDefinition {
  kind: VoiceRuleKind;
  numeral: string;
  label: string;
  description: string;
  itemsLabel: string;
  itemPlaceholder: string;
  defaults: { description: string; items: string[] };
}

export const PILLARS: Record<VoiceRuleKind, PillarDefinition> = {
  plain_english: {
    kind: "plain_english",
    numeral: "I",
    label: "Plain English",
    description:
      "Cut every unnecessary word. Short over long. Saxon over Latinate. Jargon earns no passage.",
    itemsLabel: "Directives",
    itemPlaceholder: "add directive…",
    defaults: {
      description:
        "Cut every unnecessary word. Short over long. Saxon over Latinate. Jargon earns no passage.",
      items: [
        "no word over four syllables unless technical",
        "cut adverbs ending in -ly that are not load-bearing",
        "no clichés, no metaphor the writer would not dare aloud",
      ],
    },
  },
  banned_terms: {
    kind: "banned_terms",
    numeral: "II",
    label: "Lexicon — Banned terms",
    description:
      "Corporate jargon and buzzwords are struck out on sight. The list is house law.",
    itemsLabel: "Banned terms",
    itemPlaceholder: "add banned term…",
    defaults: {
      description:
        "Corporate jargon and buzzwords are struck out on sight. The list is house law.",
      items: [
        "synergy",
        "leverage",
        "ecosystem",
        "disrupt",
        "innovate",
        "stakeholder",
        "value-add",
        "in the … space",
      ],
    },
  },
  active_voice: {
    kind: "active_voice",
    numeral: "III",
    label: "Active voice",
    description:
      "Active verbs. Flag be-verb passives. Exceptions are the editor's to name.",
    itemsLabel: "Exceptions",
    itemPlaceholder: "add exception…",
    defaults: {
      description:
        "Active verbs. Flag be-verb passives. Exceptions are the editor's to name.",
      items: ["direct quotations", "agent genuinely unknown"],
    },
  },
  perspective: {
    kind: "perspective",
    numeral: "IV",
    label: "Perspective",
    description:
      "First-person-plural when a collective view is implied. No parochial references. No 'I'.",
    itemsLabel: "Directives",
    itemPlaceholder: "add directive…",
    defaults: {
      description:
        "First-person-plural when a collective view is implied. No parochial references. No 'I'.",
      items: [
        "use 'we' for the paper's collective stance",
        "no first-person singular ('I', 'me', 'my')",
        "name the city or country, not 'here' or 'this country'",
      ],
    },
  },
  register: {
    kind: "register",
    numeral: "V",
    label: "Register",
    description:
      "Deadpan. No exclamation. No hedging. No marketing prose. If a sentence sounds sold, it is wrong.",
    itemsLabel: "Directives",
    itemPlaceholder: "add directive…",
    defaults: {
      description:
        "Deadpan. No exclamation. No hedging. No marketing prose. If a sentence sounds sold, it is wrong.",
      items: [
        "no exclamation marks",
        "no hedging ('arguably', 'perhaps', 'it could be argued')",
        "no marketing register ('revolutionary', 'exciting', 'game-changing', 'seamless')",
        "no rule-of-three padding",
      ],
    },
  },
  custom: {
    kind: "custom",
    numeral: "✎",
    label: "Custom rule",
    description: "Whatever the house insists on that the preset does not cover.",
    itemsLabel: "Items",
    itemPlaceholder: "add item…",
    defaults: {
      description: "",
      items: [],
    },
  },
};

const nid = () => Math.random().toString(36).slice(2, 10);

export function createRule(kind: VoiceRuleKind): VoiceRule {
  const p = PILLARS[kind];
  return {
    id: nid(),
    kind,
    label: p.label,
    description: p.defaults.description,
    items: [...p.defaults.items],
    enabled: true,
  };
}

export const ECONOMIST_DEFAULTS: VoiceRule[] = [
  createRule("plain_english"),
  createRule("banned_terms"),
  createRule("active_voice"),
  createRule("perspective"),
  createRule("register"),
];
