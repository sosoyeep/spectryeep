---
aliases: [Quality control, QC, SPC, Control samples, Control charts, QA]
tags: [calibration]
---

# Quality control and SPC

The discipline that proves your numbers are still trustworthy — and catches problems before they
reach a certificate or a melt.

## Control samples & control charts

- Run an **independent control sample** (a CRM *not* used in calibration) at defined intervals —
  start of shift, every N analyses, after any change.
- Plot each element's result on a **control chart** (Shewhart / SPC): centre line = certified
  value; **warning (±2σ)** and **action (±3σ)** limits from your demonstrated precision.
- **In control** → keep analysing. **Out of action limits** → stop, investigate, re-standardise
  ([[Type standardization and drift correction]]), re-verify.

## Reading the chart (Western-Electric-style rules)

- One point beyond ±3σ → act now.
- Trends/runs (e.g. 7 points one side, or steadily climbing) → drift building → standardise.
- Sudden jump right after a change → suspect that change (gas, electrode, prep, profiling).

## Method validation & MU

- Establish **repeatability and reproducibility** ([[Detection limits, precision and accuracy]])
  for each element/grade before trusting the method.
- Estimate **measurement uncertainty (MU)** for reported figures; compare against the
  **spec tolerance** — a result near a grade limit needs uncertainty considered, not just the
  point value.

## Records & traceability
Keep: calibration history, CRM certificates, standardisation logs, control charts, maintenance
log, operator and instrument IDs. This is what an **ISO/IEC 17025** lab audit (and your customer)
expects. See [[Standards overview]].

## Where this lives in practice
- The fast version on the melt deck → [[Foundry melt control workflow]].
- Incoming inspection & certification → [[Iron and steel analysis]], [[Aluminum alloy analysis]].

## Related
[[Calibration and certified reference materials]] · [[Type standardization and drift correction]] ·
[[Detection limits, precision and accuracy]] · [[Standards overview]] · [[Foundry melt control workflow]]
