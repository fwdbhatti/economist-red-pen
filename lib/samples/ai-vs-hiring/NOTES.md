# Sample 2: ELL Advisory — AI vs. Hiring

**Source URL:** https://elladvisory.com/blog/ai-vs-hiring-sales-rep-cost-comparison

## Files

- `draft.md` — the article (cleaned, no internal CTAs/footers)
- `source-landbase.md` — Landbase 2026 lead-qualification cost article
- `source-gravitee.md` — Gravitee agentic-AI deployment cost guide
- `source-sybill.md` — Sybill commission structures article

## Why this is a great demo for the concept graph

Three of the article's load-bearing citations don't actually back up the claim they're attached to. The graph view should surface these as **contradicts** edges between the article's concepts and the source's concepts:

1. **Article claim:** "mid-market agentic AI deployments covering sales workflows runs roughly £50k-£170k Year 1 all-in" *(cites Gravitee)*.
   **Source reality:** Gravitee's cost figures are about developer portals, not sales-AI deployments. Different cost category, different currency, different unit of analysis.

2. **Article claim:** "70/30 base-to-OTE split (the most common structure in manufacturing per Iris AI / Sybill benchmarks)" *(cites Sybill)*.
   **Source reality:** Sybill publishes 50/50, 40/60 and 30/70 splits — never 70/30. The Sybill article doesn't make a UK or manufacturing-specific OTE-split claim at all.

3. **Article claim:** "AI SDR workflow typically processes 240-300 qualified leads per month vs 50-90 for a human field sales rep" *(cites Landbase)*.
   **Source reality:** Landbase publishes time-per-lead (5-15 min) and cost-per-lead ($50-$500 / AI cents-on-the-dollar) but no monthly throughput comparison in those specific numbers.

## Sources we couldn't fetch

- **Salesforce State of Sales** — returned HTTP 403. The article cites "72% non-selling work" from this source. Landbase quotes a related but different figure (70%).
- **Make UK 2025 Labour Turnover Report** — paywalled (£99 / member-only). The article cites "10.85% voluntary turnover".
- The remaining citations (Accace, Pensions Regulator, Kennect, Fullcast, Autobound, Sopro) are lower-priority — most are linked but only directionally.

## Suggested ingest pattern in the app

```
Draft:   draft.md
Sources: source-landbase.md, source-gravitee.md, source-sybill.md
```

Three sources is enough for the graph to be visually rich without overwhelming the canvas.
