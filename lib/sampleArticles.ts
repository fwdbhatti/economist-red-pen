export interface SampleDoc {
  name: string;
  text: string;
}

export interface SamplePack {
  id: string;
  label: string;
  blurb: string;
  draft: SampleDoc;
  sources: SampleDoc[];
}

const ECONOMY_DRAFT = `Britain's economy has turned a corner. Inflation fell to 2.1% in March, the lowest in a decade, and the chancellor hailed the result as vindication of her fiscal plan.

The Bank of England, which had warned throughout 2025 that price pressures would linger, now faces pressure to cut rates as early as May. Most economists now agree that a soft landing has been achieved.

Analysts say the recovery is being driven by a surge in consumer confidence. The leveraging of digital tools and the ecosystem of fintech innovation have also played a role in revitalising the high street. Synergies between the public and private sectors have unlocked productivity gains not seen since the 1990s.

Critics of the government's approach have been silenced by the data.`;

const ECONOMY_SOURCE = `Office for National Statistics, Consumer Prices Index, March 2026 release:

CPI annual inflation rate was 2.1% in March 2026, down from 2.4% in February 2026. This is the lowest rate since the series began its current methodology in 2018.

Bank of England Monetary Policy Committee minutes, March 2026:
"The Committee remains cautious. While headline inflation has moderated, services inflation remains elevated at 4.2%, and wage growth is still running above levels consistent with the 2% target over the medium term. The Committee voted 7-2 to hold Bank Rate at 4.5%."

HM Treasury press release, 15 March 2026:
The Chancellor welcomed the ONS figures but cautioned that "inflation can be volatile" and declined to speculate on the timing of future rate decisions.`;

const AI_HIRE_DRAFT = `# AI vs. Hiring Another Sales Rep: The Maths Your CFO Needs to See

You're sitting in a board meeting. The sales director is pushing for another hire to hit next year's targets. Your CFO is sceptical. The recruitment agency has quoted somewhere around £11k-£17k to find someone. The salary band is £45k-£80k depending on experience. Everyone's looking at you for the call.

Here's what most boards miss: the conversation you should be having isn't "hire or not hire." It's "what does this hire actually cost us in Year 1, once commission and OTE kick in, and what do they actually bring back?" When you do that maths honestly, a typical mid-market UK industrial sales hire loses money in Year 1. And the CFO is about to be proven more right than they knew.

This isn't a technology pitch. It's a cost-and-output comparison. By the end you'll have the numbers to present to your CFO, your board, and yourself — with every source linked.

## Part 1: The visible cost — £93k before they've sold a thing

Most finance directors see £65,000 on the offer letter and think that's the cost. It isn't. Not even close. Before commission ever pays out, you've already committed to this stack using 2026 UK rates:

- Base salary: £65,000.
- Employer National Insurance: £9,000. The rate rose to 15% from April 2025, with the secondary threshold dropping to £5,000. Liability = (£65,000 − £5,000) × 15%.
- Pension: £1,320 at the legal minimum. Auto-enrolment requires 3% employer contribution on qualifying earnings only (£6,240-£50,270) — that's £1,320, not £3,900. Paying 6% on full salary is a voluntary perk; state the assumption if you do.
- Recruitment fee (on base): £11,700. 18% contingency on £65k. We'll see in a moment why this is actually understated.
- Laptop, CRM licence, workspace, comms: ≈£3,000.
- Management overhead (onboarding, 1:1s, coaching time): ≈£3,000.

Fixed Year 1 total: ≈£93,000. This is the bill regardless of whether they sell a single thing.

## Part 2: The commission reveal — the real number is £135k

Here's what every pitch deck leaves out. The £93k above uses recruitment on base salary and assumes no commission is paid. Neither assumption holds up in real UK industrial field sales.

First: recruitment agencies charge on OTE, not base. For a UK industrial rep on a 70/30 base-to-OTE split (the most common structure in manufacturing per Iris AI / Sybill benchmarks), £65k base means OTE of £92,857. Contingency search at 18% of OTE = £16,714, not £11,700.

Second: commission is real cost. If the rep hits target, you pay the £27,857 commission component of OTE. You also pay employer NI on that commission at 15% = £4,178. Plus you typically add a modest training/onboarding budget of around £2,000.

Add the delta to the £93k fixed base, using UK industrial benchmarks:

- Commission at target (30% of OTE): £27,857. 5-7% is the typical industrial commission rate on revenue at £400k-£550k quota.
- Employer NI on commission: £4,178 (15% × £27,857).
- Recruitment delta (OTE instead of base): +£5,014.
- Training & onboarding: £2,000.

The real Year 1 number: ≈£135,069. Not £93k.

## Part 3: What they actually bring back

Now the revenue side. At UK industrial mid-market you're typically setting a £500k annual quota. Year 1 attainment benchmarks sit at 60% during ramp (a rep doesn't hit full stride until month 7 per Bridge Group / Alba Talent 2026 UK ramp data). That produces:

- Revenue: £300,000 (60% × £500k)
- Gross margin at 30%: £90,000 contribution

Set that against £135,069 of fully loaded cost and you get a Year 1 net of -£45,069. The hire only becomes net-positive if they survive into Year 2, hit full quota, and no recruitment fee repeats.

## The AI alternative: what an agentic AI deployment actually costs

Industry pricing for mid-market agentic AI deployments covering sales workflows (lead qualification, outreach, quote turnaround, pipeline progression) runs roughly £50k-£170k Year 1 all-in — build, integration, and 12 months of operation, per Gravitee's agentic AI pricing guide. Mid-market manufacturers typically land £95k-£150k depending on lead volume, integration complexity, and supervision model. Use £125k as a working figure and refine against two or three real quotes.

What that buys:

- Zero ramp. Productive from day one. No 5.8-month learning curve.
- 24/7 operation, no holiday, no sickness, no attrition.
- Higher throughput on repeatable tasks. A single AI SDR workflow typically processes 240-300 qualified leads per month vs 50-90 for a human field sales rep in manufacturing verticals, per Landbase 2026.
- Lower cost per qualified lead. Benchmarks put manual lead qualification at roughly £200-£400 per qualified lead and AI-driven qualification at £30-£40 — an 85% reduction.

ROI, honestly. No credible study puts AI sales ROI at "317% vs 72% manual" — that number is marketing noise. The defensible stat: 86% of sales teams using AI report positive ROI within Year 1, and 76% report measurable win-rate improvements.

## About that "35% turnover" number

You'll see "35% annual turnover" quoted everywhere. That's HubSpot US field sales data. The closest defensible UK benchmark is Make UK's 2025 Labour Turnover Report: voluntary turnover in UK manufacturing sits around 10.85%. Field sales roles typically run hotter than the manufacturing average but no-one publishes clean UK field-sales-specific data. Plan for 15-25% annual attrition as a reasonable UK working assumption.

## So — hire, automate, or both?

- Capacity (more leads, pipeline, conversations): AI wins. 3-6x the qualification volume at a fifth of the cost per lead, zero ramp.
- Capability (negotiation, relationships, complex deal management): humans win. But don't hire them to do admin — deploy AI to handle the admin first.

The mistake most boards make is treating this as either/or. It isn't. Deploy AI first as the capacity engine, then hire a closer against the pipeline AI generates. Salesforce's State of Sales puts the industry average at 72% of the week on non-selling work — that's where the hybrid model's value comes from.`;

const AI_HIRE_LANDBASE = `# Landbase — The Real Cost of Manual Lead Qualification (2026 Analysis)

Published April 2026. Daniel Saks, CEO.

## Headline numbers

Manual qualification costs the average B2B team between $50 and $500 per qualified lead and consumes 40-60% of SDR time. For a 10-rep team, that translates to $200,000-$500,000 in wasted capacity per year.

Reps spend 70% of their time on non-selling tasks — research, data entry, qualification.

Teams using AI for qualification report 50% better ICP accuracy and recoup 30-40% of rep time.

## Time per lead

Typical B2B manual qualification: 5-15 minutes per lead. At 50 leads per day, an SDR spends 4-12 hours every day on qualification — 50-100% of available time.

## Direct cost stack (USD, mid-market B2B)

- SDR fully loaded cost: $90,000-$120,000/year
- Tooling per SDR: $5,000-$15,000/year
- Management overhead: $20,000-$30,000/year per rep allocated

Total per SDR: $115,000-$165,000/year. At 1,000 leads/year, direct cost-per-qualified-lead is $115-$165.

## Opportunity cost

If an SDR who could be booking meetings spends 60% of their time on qualification, you lose 60% of those potential meetings. A 10-SDR team at 1 booked meeting/hour of selling, 25% close rate, $30k average deal size = $9M lost annual revenue.

## AI throughput

An AI agent qualifies in seconds per lead with consistent criteria. Modern AI qualification accuracy: 85-95% with clear ICPs. Manual: 60-75% consistency across reps.

## Salesforce reference (cited inside Landbase)

Per Salesforce's 2026 State of Sales: 54% of sellers have used AI agents; 83% of teams using AI in past year saw revenue growth vs 66% of teams that did not.

## ROI math (10-person SDR team, USD)

- Time recovered per SDR: 30-40%
- Pipeline impact: 30-40% more meetings
- Revenue impact: $1.5M-$3M additional pipeline annually
- Tool cost: $30k-$100k/year
- Net ROI: 15x-30x

## What is NOT in this article

- No monthly per-rep throughput comparison (e.g. "240-300 vs 50-90 qualified leads/month").
- No GBP figures. All cost figures USD.
- No UK-specific benchmarks. No manufacturing-vertical-specific benchmarks.
- No claim of "85% reduction" in cost-per-qualified-lead.`;

const AI_HIRE_GRAVITEE = `# Gravitee — Cost Guide: Agentic AI Deployment Pricing and Planning

## What this article actually covers

This Gravitee guide is about the cost of building a developer portal for an agentic AI deployment — the API gateway, documentation, and authentication layer that fronts an AI mesh. It is not a cost guide for the AI agents themselves, nor a cost guide for sales-AI deployments specifically.

## Cost figures published (USD)

### Building a developer portal in-house

- Engineering: 3 to 6 full-time engineers
- Time to market: 6 to 12 months
- Estimated upfront: $300,000 to $600,000
- Infrastructure & hosting: $5,000 to $15,000 monthly
- Maintenance: 1-2 FTE engineers, $120,000 to $200,000 annually
- Security & compliance: $50,000+ annually

### Build vs Gravitee — published 3-year TCO

| Category | Build In-House | Gravitee |
|----------|----------------|----------|
| Initial Development | $300,000 - $600,000 | Included |
| Time to Market | 9 to 12 months | Immediate |
| Maintenance | $120,000 - $200,000/yr | Included |
| Security & Compliance | $50,000+/yr | Included |
| Total 3-Year TCO | $1M+ | 60-70% lower |

## Hidden budget items called out

Documentation drift, custom integrations, support burden, scaling complexity, ecosystem management.

## What is NOT in this article

- No figures for sales-AI deployment specifically.
- No "£50k-£170k Year 1 all-in for mid-market sales AI" claim.
- No GBP figures. No UK-specific figures.
- No mention of lead qualification, outreach, quote turnaround, or pipeline progression as cost categories.
- This is vendor marketing for a developer-portal product, not a third-party benchmark of sales-AI pricing.`;

const AI_HIRE_SYBILL = `# Sybill — Sales Commission Percentages

## Industry commission benchmarks (verbatim ranges)

- Technology and SaaS: 10% on new ARR (range 5-20%)
- Financial Services: 7-15%; insurance/wealth 20-40% first year, 5-10% trail
- Manufacturing and Industrial Sales: 5-12%, typically with longer sales cycles
- Real Estate: 5-6% residential, 4-8% commercial
- Pharma & Medical Device: 5-10%; medical devices 8-15% capital, 5-10% consumables
- Retail & Consumer Goods: 3-8%

## OTE and base/variable splits

- Entry-Level AE (0-2 years): $80,000-$120,000 OTE, typically 60/40 or 50/50 base-to-variable
- Mid-Level AE (2-5 years): $120,000-$180,000 OTE, often 50/50, sometimes 40/60 for new business hunters
- Senior AE / Enterprise AE (5+ years): $180,000-$300,000+ OTE, 40/60 to 30/70 base-to-commission
- Quota-to-OTE ratio: typically 4-6x

## Role-specific commission rates

- New Business AEs (Hunters): 10-15%
- AE with Account Management: 8-12% new business, 5-8% expansion
- Territory AEs: 7-10%
- Channel AEs: 5-8%

## Key performance datapoint

"Only 33% of sales professionals expect to hit quota."

## What is NOT in this article

- No 70/30 base-to-OTE split anywhere. Splits run from 60/40 (entry) down to 30/70 (senior).
- No UK-specific OTE-split benchmark.
- No manufacturing-specific OTE-split benchmark (only manufacturing commission rate, 5-12%).
- All figures USD. No GBP figures.
- No Year-1 ramp attainment data. No "60% Year 1" benchmark.`;

const HOLLOW_MIDDLE_DRAFT = `# The Hollow Middle: What Happens When 5.5 Million SMEs Can't Adopt AI

Everyone talks about the AI revolution. For 5.5 million UK businesses, it's happening to them, not for them.

The productivity gains are real. Generative AI tools improve workplace performance by 20-40% on specific tasks. But these wins are concentrated. They're clustering in large corporations, venture-backed startups, and financial institutions that can afford the full stack: the people, the data infrastructure, the money to survive implementation dips. The vast middle of the economy — the manufacturers in the Midlands, the logistics firms managing regional distribution, the construction companies juggling five-site operations — is stuck watching the future happen elsewhere.

## The scale of the problem

5.5 million UK SMEs employ 61% of the private sector workforce. If this segment can't adopt AI, the majority of the UK workforce never encounters it professionally — and the productivity gap compounds decade over decade.

## The three walls

### Wall 1: People

You need someone who understands your operations well enough to define what problems AI could solve, and someone with the technical depth to implement and maintain it. ML engineers command £80,000-£150,000+ in London. An SME with £20M revenue and 100 staff cannot compete.

67% of UK SMEs cite lack of internal expertise as the primary AI barrier (Compare the Cloud 2025).

### Wall 2: Data

To use AI, you first have to do the prerequisite work: aggregate everything, cleanse it, structure it, digitise it. That work costs money and time. Often, the cost of preparing your data for AI exceeds the cost of the AI software itself. SMEs generate lower volumes of data; train complex ML models on limited historical data and you get overfitting.

### Wall 3: Money

Beyond the licensing fee, you're paying for continuous cloud compute, data storage, cybersecurity, algorithmic retraining. Implementation dips are real — your efficiency actually gets worse before it gets better. A large enterprise has cash reserves to absorb a quarter or two of operational decline. Most SMEs don't have that runway.

## The productivity bifurcation

Large enterprises and AI-enabled firms are growing productivity at 2.8% annually in the EU and 3.2% in the US, according to OECD data. That's compounding.

Over the next ten years, you will see a hollow middle. Mid-sized firms will either be acquired by tech-enabled giants or driven to inefficiency so severe that bankruptcy is the only exit. The market will polarise: at the top, hyper-efficient conglomerates; at the bottom, hyper-local micro-businesses. The middle gets hollowed out.

## Supply chain fragility

A tier-one manufacturer has built AI-driven supply chain resilience. But that manufacturer's supply chain depends on six tier-two suppliers and 40 tier-three component makers. Most of them are SMEs running on spreadsheets. The fortress has walls. But the supply routes feeding the fortress are exposed.

## The vicious cycle

SMEs can't adopt AI because they can't find skilled workers. Workers can't acquire AI skills because their SME employers don't use AI. The skill stagnation is locked in.

## What needs to change

This requires intervention. Not subsidies. Not hand-holding. But deliberate infrastructure: hyper-specific low-cost AI modules designed for SME constraints, state-subsidised data infrastructure, safe-harbour regulatory frameworks, and targeted upskilling that's sector-specific. The infrastructure exists in large enterprises — it just needs to be adapted and opened to the SME layer.`;

const HOLLOW_MIDDLE_CTC = `# Compare the Cloud — The AI Reality Check: State of UK SME Adoption in 2025

## Current adoption statistics

15% of UK SMEs have integrated at least one AI application into their operations, according to the UK Business Data Survey 2024. This represents a doubling from just 7% in 2022.

Adoption rates vary dramatically by sector:
- Professional services and financial sectors: 28%
- Construction and traditional manufacturing: 6%

## Key barriers to adoption

The primary obstacle isn't cost — it's knowledge. Three main barriers identified:

1. Lack of in-house expertise: 67%
2. Perceived high costs: 54%
3. Concerns about reliability: 48%

"Over 60% of SME decision-makers cite insufficient understanding of AI capabilities" as their primary concern.

## Cost reality

Cloud-based AI services now offer flexible pricing models starting from £50 per month, though many effective tools range from £20-100 monthly through subscription models.

## Success metrics from early adopters

- Manchester e-commerce company (45 employees): 40% reduction in response times and 25% decrease in support ticket volume within six months.
- Birmingham manufacturing SME: 35% decrease in equipment downtime, ≈£180,000 in annual savings.

## Future projections

Industry analysts project SME AI adoption will reach 35% by 2027.

## Fast facts

- 5.5 million UK SMEs could benefit from AI integration
- 40% average efficiency gain reported by early adopters

## Notes on this source vs. the draft article

- The draft cites this source as "Compare the Cloud 2025" for the wall-1 stat. The 67% expertise blocker IS in this source — that part is well-grounded.
- The draft says "Generative AI tools improve workplace performance by 20-40% on specific tasks" — Compare the Cloud states "40% average efficiency gain reported by early adopters", a narrower and SME-specific figure.
- The draft's "5.5 million UK SMEs ... 61% of the private sector workforce" — the 5.5M figure appears here; the 61% workforce share does not.
- The draft attributes "2.8% EU / 3.2% US AI-enabled productivity growth" to OECD; that figure is NOT in this Compare the Cloud article.
- The Birmingham/Manchester case studies in this source do NOT appear in the draft — meaning concrete success data was available but wasn't used.`;

const CRM_DRAFT = `# Why Field Sales Teams Won't Use the CRM (And What Actually Fixes It)

Your reps aren't avoiding the CRM because they're lazy. They're avoiding it because it was built for someone sitting at a desk, and they work from a van.

## UK field sales CRM adoption: the numbers are worse than you think

SPOTIO's 2026 Field Sales Report surveyed thousands of field reps. The findings are uncomfortable.

71% of field sales reps spend five or more hours per week on manual CRM data entry. That's five hours of typing instead of selling, every single week.

25% spend eleven hours or more. A quarter of your team is losing an entire working day to data entry.

Only 3% of field sales teams have fully automated their CRM data entry. 15% have zero automation of any kind.

## 79% of opportunity data never enters the CRM

Not delayed. Not incomplete. Never captured. The conversation about the competitor's pricing? Gone. The buying signal from the customer bringing their finance director to the meeting? Gone. The spec change mentioned during the site walk? Gone by Friday.

Of the 21% that does make it in, only 23% is considered accurate and complete.

## Why the obvious fixes don't work

"Make it mandatory." Forrester found that 49% of CRM projects fail outright. Less than 40% achieve 90% or higher user adoption.

"Simplify the interface." HubSpot found that 66% of sales professionals feel overwhelmed by the number of tools they're expected to use.

"Train them harder." XANT research found that reps spend just 18% of their time actually using the CRM.

## The cost nobody calculates

For a typical mid-market company with 10 field reps on £60,000 average salary (loaded cost £75,000):

Direct admin cost: 7 hours/week × 52 weeks × 10 reps × £37/hr loaded = £134,680/year for data entry performed by people you hired to sell.

Validity's research found that 44% of companies lose more than 10% of annual revenue to poor CRM data quality. For a £20M company, that's £2M.

Total cost of poor CRM adoption for a £20M company with 10 field reps: £500,000-£2.5M per year.

## What actually fixes CRM adoption

The companies that have cracked this stopped asking reps to do data entry. Not reduced it. Removed it.

- Voice capture: rep finishes a meeting, gets in the van, talks. AI transcribes, extracts structured data, routes it to the right CRM fields. Done in 15 seconds.
- Signal-based pipeline updates: infer deal stages from what's actually happening (proposals sent, opens, follow-ups booked) rather than self-reported dropdowns.
- Ambient capture: email sync, calendar integration, GPS-based visit confirmation.

The principle: data capture should be a byproduct of selling, not a separate task that competes with selling.`;

const CRM_SPOTIO = `# SPOTIO — 2026 State of Field Sales AI Survey (key statistics)

## AI adoption data

- 33% of field sales teams are not using AI at all
- Automated email/message personalisation: 30% of teams
- Conversation intelligence and call analysis: 28% of teams
- Content generation for proposals/presentations: 26% of teams
- Automated CRM data entry: 24% of teams
- Predictive analytics for deal forecasting: 20% of teams
- Customer behaviour analysis: 20% of teams
- Lead scoring and prioritisation: 18% of teams
- Planning to implement AI within 6 months: 10% of teams

## Key findings

"Adoption is clustered at the surface level" with email personalisation and call recording the most common entry points; "fewer teams are using the more strategic capabilities: scoring, forecasting, and behaviour analysis."

"Most field teams are not yet working with a coherent AI stack" — a competitive gap for teams that establish integrated AI systems in 2026.

## What is NOT in this source

- No "71% of field sales reps spend 5+ hours/week on CRM data entry."
- No "25% spend 11+ hours/week."
- No "79% of opportunity data never enters the CRM."
- No "3% fully automated CRM data entry" (the closest figure is "24% of teams use automated CRM data entry" — a different framing).
- No "21% / 23% accurate and complete" data quality stat.

The draft article attributes these specific time-on-task and data-loss figures to "SPOTIO's 2026 Field Sales Report." This SPOTIO 2026 survey is about AI tool adoption rates, not field rep time accounting.`;

const CRM_VALIDITY = `# Validity — homepage and product positioning

## What is on this page

Validity markets BriteVerify (email verification), DemandTools (Salesforce data quality), Litmus (email design/preview), and Validity Engage (deliverability). The page features customer testimonials and product positioning copy.

## What is NOT on this page

- No "44% of companies lose more than 10% of annual revenue to poor CRM data quality" statistic.
- No CRM data accuracy/completeness percentages.
- No quantitative claim about revenue impact of bad data.

The draft article cites Validity's research for the 44% / 10% revenue loss figure. That figure is not findable on Validity's homepage. It may live in a downloadable report behind a form, but a reader following the link in the article will not see the supporting data.`;

const WARSH_DRAFT = `# Will Kevin Warsh Trumpify the Federal Reserve?

The incoming Fed chair says he wants regime change. But a revolution is unlikely.

POLITICIANS HAVE usually let America's central bank be. Few voters pay direct attention to monetary policy, and when they notice inflation, it can be helpful to have someone else to blame. Donald Trump is not a usual politician. So in his second term the president, who believes interest rates are too high, has assailed the Federal Reserve with angry lawsuits, fulminated on social media about its chair, Jerome "too late" Powell, and launched a bogus criminal probe into Mr Powell to browbeat him.

So far presidential haranguing has not had the desired effect. It may even have backfired, by stiffening the spines of the Fed's defenders. The Supreme Court looks poised to deny Mr Trump the right to fire Lisa Cook, a Fed governor. A ploy by Thom Tillis, a retiring Republican senator, to hold up the confirmation of Kevin Warsh, Mr Trump's pick to succeed Mr Powell, probably played a role in the decision by the Department of Justice (DoJ) on April 24th to drop its case against the Fed chair. Markets now shrug off Mr Trump's regular Fed-bashing.

Could Mr Warsh, whose path to the top job has been all but cleared by the DoJ's climbdown, reshape the Fed into a Trumpier mould? He certainly comes across as more pliable than his steadfast predecessor. He secured the nomination by abandoning a lifetime of inflation hawkishness and aligning his position with the dove-in-chief at the White House. In his mostly dull Senate confirmation hearing on April 21st he passed the MAGA purity test by refusing to say outright that Mr Trump lost the 2020 election to Joe Biden. And he has, in what is "YMCA" to Mr Trump's ears, called for a "regime change" at the central bank.

However, a closer look at what Mr Warsh wants to do at the Fed—and what he can realistically achieve—hints at a much more modest project. That is because his ideas are either marginal, irrelevant or beyond the power of a Fed chair alone to deliver.

Start with what Mr Warsh is not planning to do. Fed insiders have worried that the regime he wants to change is literally the Fed's personnel. The main fear was that he would try to sack the presidents of the regional branches, five of whom vote on monetary policy, and replace them with Trump toadies. Many minds were put at ease when he appeared to rule this out in the Senate hearing. When asked directly whether "regime change" amounted to a purge of branch presidents, Mr Warsh said: "I meant policy regime change".

That is reassuring. For when it comes to policy, Mr Warsh is often a marginal revolutionary. Like a proper wonk, he often gets most exercised by the smallest of details. One of his biggest bugbears is rate-setters paying too much attention to "core" inflation, which excludes only volatile food and fuel prices, and too little to "trimmed-mean" measures, which drop whichever prices have risen or fallen the most each month. Trimmed-mean inflation can be lower than the core measure and so justify lower rates. But most of the time, including now, the two are almost indistinguishable.

Others of Mr Warsh's most cherished ideas would make similarly little difference in practice because they are out of date. He wants to get monetary policymaking out of politically charged terrain such as climate change and social justice. The Fed has, sensibly, done this already. He is wary of expansive readings of the central bank's mandate to promote employment, which during the covid-19 pandemic may have undercut its other job of maintaining price stability. The Fed has already closed the book on those, too.

Mr Warsh has essentially two substantive ideas for meaningful reform. One is his desire to trim the Fed's balance-sheet in short order. Many observers agree that, at $7trn, it is bloated. Although Mr Warsh has signalled he does not favour shrinking the central bank's bond holdings at breakneck pace, any movement in that direction goes directly against the Fed's recent decision to end "quantitative tightening". The effect of bond sales could be to lower their prices and, since the two move inversely, push up yields. To offset those rising yields, Mr Warsh would cut short-term rates. But since the effect of the Fed's bond sales on yields is uncertain, the exercise could blow up if not handled deftly.

The second of Mr Warsh's big ideas is his scepticism of "forward guidance". Setting out a future path of monetary policy has been the norm at the world's central banks since the global financial crisis of 2007-09. Mr Warsh frets that the practice does more harm than good by making policymakers dig in their heels and ignore new information that proves them wrong. Most Fed-watchers think the trade-off is worth it.

Scrapping forward guidance and rapidly shrinking the balance-sheet would be meaningful changes for the Fed. They are not, though, in Mr Warsh's individual gift. Most relevant decisions require a majority of the seven-member board of governors. In both cases Mr Warsh will, as chair, have the bully pulpit but still cast only one vote.

He is no less constrained when it comes to the regular business of setting interest rates. Rate-setting decisions need the support of at least seven of the 12 voting members of the Federal Open Market Committee (FOMC). Before the war with Iran, the market assumed several rate cuts this year. Now the conflict is pushing up energy and food prices, which could in time spill over into broader inflationary pressure. As a result, the expectation is for the FOMC to hold rates steady at 3.5-3.75%.

The constraints on Mr Warsh make it unlikely that he will radically transform the Fed. But this does not make him harmless. That is because, as Peter Conti-Brown, a Fed historian at the Wharton School of the University of Pennsylvania, points out, he and those closest to him "are taking way too seriously the false notion that the Fed is in crisis".

Indeed, Mr Warsh himself has, like many of Mr Trump's cabinet secretaries, developed a habit of getting carried away when criticising the institution he is about to lead. In the past year he has called the broad conduct of monetary policy "broken for quite a long time". If in office Mr Warsh cannot deliver what Mr Trump wants, blaming his colleagues may be a way to keep the president from turning on him. But having both a president and a sitting Fed chair fulminating against monetary policy would be unprecedented, and would worsen the politicisation of America's central bank.`;

const WARSH_MJE = `# Michigan Journal of Economics — "Can the Federal Reserve Remain Independent? Institutional Safeguards in a Politicized Era" (April 13, 2026)

## Background on the Cook case

Lisa Cook was appointed to the Fed Board of Governors by President Biden in 2022. In 2025, the Trump administration sought to remove her on the basis of mortgage-related allegations dating from before her appointment. Cook filed suit (Cook v. Trump); the administration counter-petitioned (Trump v. Cook).

The Federal Reserve Act permits removal of governors only "for cause." Federal district and appellate courts blocked the removal pending review. The Supreme Court declined to lift the lower-court stay, allowing Cook to remain on the Board while litigation proceeds. Oral argument is scheduled and a ruling is expected in the current term.

The article notes the Court has not yet ruled on the merits and that observers reading the stay as a signal of likely outcome are interpreting tea leaves.

## Background on the Powell investigation

The Department of Justice opened an investigation into Chair Powell in late 2025 concerning testimony given to Congress about Fed building renovation costs. Legal scholars described the probe as without precedent for a sitting Fed chair. The DoJ closed the matter on April 24, 2026, without filing charges.

## Composition of the FOMC

The FOMC has 12 voting members: 7 Board governors plus 5 of the 12 regional Reserve Bank presidents on a rotating basis (the New York Fed president holds a permanent seat).

Regional Reserve Bank presidents are appointed by the boards of directors of each regional bank, subject to approval by the Fed Board of Governors. They are not appointed by the President of the United States and cannot be removed by the President.

## What is NOT in this article

- No claim that the Supreme Court has already ruled on the Cook removal.
- No claim that "five" regional bank presidents vote at any given time other than as a rotating subset of the 12.
- No quote attributed to Peter Conti-Brown.
- No discussion of Warsh's "regime change" comments or Senate hearing.`;

const WARSH_HOOVER = `# Kevin Warsh — "Rethinking Macro: Reassessing Micro-Foundations" (Hoover Institution working paper, 2014)

## Core argument

Warsh argues that post-2008 monetary policy — large-scale asset purchases, forward guidance, near-zero rates sustained for years — constituted a structural break from prior practice. He uses the phrase "regime change" to describe this shift in the policy framework, not in personnel.

## Key positions in the paper

- Quantitative easing distorted price signals and weakened the link between monetary policy and the real economy's micro-foundations.
- Forward guidance, by committing central banks to future paths, reduces optionality and makes policy slower to respond to incoming data.
- The Fed's balance sheet should be smaller and held primarily in shorter-duration Treasuries.
- The dual mandate has been over-extended in practice toward employment objectives at the expense of price stability.

## Tone and stance at time of writing (2014)

Warsh writes as an inflation hawk. He warned that easy monetary policy risked future inflation and asset-price distortions. He criticized the Fed's communications strategy as excessively activist.

## What is NOT in this paper

- No call for personnel changes at the Fed or its regional banks.
- No discussion of "trimmed-mean" vs "core" inflation measures.
- No specific dollar figure for an appropriate Fed balance sheet.
- No mention of climate change or social justice as Fed concerns (those debates postdate this paper).
- No endorsement of rate cuts. The 2014 Warsh is a hawk; the draft article asserts he has since "abandoned a lifetime of inflation hawkishness" — that pivot is not in this source and would need separate documentation.`;

const WARSH_DALLAS_FED = `# Federal Reserve Bank of Dallas — Trimmed Mean PCE Inflation Rate (research page)

## What the index measures

The Trimmed Mean PCE inflation rate is an alternative measure of core inflation produced by the Dallas Fed. Each month, the components of PCE inflation showing the most extreme price changes (both highest and lowest) are excluded; the remaining components are averaged. This differs from "core" PCE, which mechanically excludes food and energy regardless of their behavior in a given month.

## Recent readings (12-month rate, monthly observations)

The Trimmed Mean and core PCE measures track each other closely over long horizons but can diverge in individual months. Over the 24 months ending February 2026, the gap between the two measures averaged 0.2 percentage points, with the Trimmed Mean running slightly below core PCE in most months.

## Stated purpose

Dallas Fed researchers describe the Trimmed Mean as a measure of "underlying" inflation less subject to noise from idiosyncratic price movements in any single category. It is published as a complement to, not a replacement for, headline and core PCE.

## What is NOT on this page

- No statement that the Trimmed Mean is "lower" than core inflation in general — the divergence varies month to month and historically has gone in both directions.
- No endorsement by the Dallas Fed of using Trimmed Mean as the primary policy target.
- No reference to Kevin Warsh or his policy preferences.`;

const WARSH_SCOTUS = `# Trump v. Cook — Supreme Court application materials (2026)

## Procedural posture

The Trump administration filed an emergency application asking the Supreme Court to lift a lower-court injunction that prevented the removal of Federal Reserve Governor Lisa Cook. The application was denied; Cook remains on the Board pending full review.

The denial of the stay does not constitute a ruling on the merits. The Court has agreed to hear the case in full and a decision is pending.

## Legal question

Whether the President's removal power, as articulated in Seila Law and Collins v. Yellen, reaches Federal Reserve governors despite the "for cause" protection in the Federal Reserve Act. The administration argues the Fed's structure is unconstitutional under separation-of-powers principles. Cook argues the Fed's independence, repeatedly affirmed in dicta by the Court (Humphrey's Executor; Seila Law footnote 8), places it in a distinct constitutional category.

## What is NOT in these materials

- No final ruling on whether Cook can be removed.
- No statement by the Court about its likely disposition.
- No reference to Kevin Warsh, Jerome Powell, or the DoJ probe.
- No characterization of the Court as "poised" in any direction — that is editorial inference, not a finding in the docket.`;

export const SAMPLES: SamplePack[] = [
  {
    id: "warsh-fed",
    label: "Will Warsh Trumpify the Fed?",
    blurb:
      "The Economist's April 2026 piece on Kevin Warsh's incoming Fed chairmanship. Audited against four sources: a Michigan Journal of Economics survey of Fed independence, Warsh's 2014 Hoover paper, the Dallas Fed Trimmed-Mean PCE page, and the Trump v. Cook SCOTUS docket.",
    draft: { name: "warsh-fed-draft.md", text: WARSH_DRAFT },
    sources: [
      { name: "source-michigan-journal.md", text: WARSH_MJE },
      { name: "source-warsh-hoover-2014.md", text: WARSH_HOOVER },
      { name: "source-dallas-fed-pce.md", text: WARSH_DALLAS_FED },
      { name: "source-scotus-trump-v-cook.md", text: WARSH_SCOTUS },
    ],
  },
  {
    id: "ai-vs-hiring",
    label: "AI vs. Hiring a Sales Rep",
    blurb:
      "ELL Advisory blog post on the cost of hiring a UK industrial sales rep vs deploying agentic AI, audited against three of its cited sources (Landbase, Gravitee, Sybill).",
    draft: { name: "ai-vs-hiring-draft.md", text: AI_HIRE_DRAFT },
    sources: [
      { name: "source-landbase.md", text: AI_HIRE_LANDBASE },
      { name: "source-gravitee.md", text: AI_HIRE_GRAVITEE },
      { name: "source-sybill.md", text: AI_HIRE_SYBILL },
    ],
  },
  {
    id: "hollow-middle",
    label: "The Hollow Middle (SME AI adoption)",
    blurb:
      "ELL Advisory essay on why 5.5M UK SMEs can't adopt AI and the resulting market polarisation. Audited against Compare the Cloud's 2025 SME adoption data — most stats line up; some don't.",
    draft: { name: "hollow-middle-draft.md", text: HOLLOW_MIDDLE_DRAFT },
    sources: [
      { name: "source-compare-the-cloud.md", text: HOLLOW_MIDDLE_CTC },
    ],
  },
  {
    id: "crm-adoption",
    label: "Field Sales CRM Adoption",
    blurb:
      "ELL Advisory analysis of why field reps don't use the CRM. Several headline stats are attributed to SPOTIO and Validity; this pack pulls in those sources so the graph can flag where the citations don't actually match.",
    draft: { name: "crm-adoption-draft.md", text: CRM_DRAFT },
    sources: [
      { name: "source-spotio.md", text: CRM_SPOTIO },
      { name: "source-validity.md", text: CRM_VALIDITY },
    ],
  },
  {
    id: "uk-soft-landing",
    label: "UK economy: soft landing",
    blurb:
      "Short opinion piece claiming the BoE will cut rates and that critics have been silenced. Source pack: ONS CPI release, BoE MPC minutes, HMT press release.",
    draft: { name: "sample-draft.md", text: ECONOMY_DRAFT },
    sources: [{ name: "sample-sources.md", text: ECONOMY_SOURCE }],
  },
];

export function packToFiles(pack: SamplePack): { draft: File; sources: File[] } {
  const draft = new File([pack.draft.text], pack.draft.name, {
    type: "text/markdown",
  });
  const sources = pack.sources.map(
    (s) => new File([s.text], s.name, { type: "text/markdown" }),
  );
  return { draft, sources };
}
