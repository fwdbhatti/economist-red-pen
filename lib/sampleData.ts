export const SAMPLE_DRAFT = `Britain's economy has turned a corner. Inflation fell to 2.1% in March, the lowest in a decade, and the chancellor hailed the result as vindication of her fiscal plan.

The Bank of England, which had warned throughout 2025 that price pressures would linger, now faces pressure to cut rates as early as May. Most economists now agree that a soft landing has been achieved.

Analysts say the recovery is being driven by a surge in consumer confidence. The leveraging of digital tools and the ecosystem of fintech innovation have also played a role in revitalising the high street. Synergies between the public and private sectors have unlocked productivity gains not seen since the 1990s.

Critics of the government's approach have been silenced by the data.`;

export const SAMPLE_SOURCE = `Office for National Statistics, Consumer Prices Index, March 2026 release:

CPI annual inflation rate was 2.1% in March 2026, down from 2.4% in February 2026. This is the lowest rate since the series began its current methodology in 2018.

Bank of England Monetary Policy Committee minutes, March 2026:
"The Committee remains cautious. While headline inflation has moderated, services inflation remains elevated at 4.2%, and wage growth is still running above levels consistent with the 2% target over the medium term. The Committee voted 7-2 to hold Bank Rate at 4.5%."

HM Treasury press release, 15 March 2026:
The Chancellor welcomed the ONS figures but cautioned that "inflation can be volatile" and declined to speculate on the timing of future rate decisions.`;

export function makeSampleFiles(): { draft: File; source: File } {
  const draft = new File([SAMPLE_DRAFT], "sample-draft.md", {
    type: "text/markdown",
  });
  const source = new File([SAMPLE_SOURCE], "sample-sources.md", {
    type: "text/markdown",
  });
  return { draft, source };
}
