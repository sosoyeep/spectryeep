---
aliases: [Argon, Argon purity, Working gas, Shielding gas, 氩气, Argon flush]
tags: [instrumentation, maintenance]
---

# Argon supply and purity

Spark OES runs the discharge in flowing **argon**. Gas quality is a frequent, under-appreciated
cause of poor results.

## Why argon, and why pure

Argon is **inert**, **UV-transparent**, and supports a **stable plasma**
([[Plasma formation and excitation temperature]]). Any **oxygen, nitrogen, water or
hydrocarbons** present will:

- **absorb UV/VUV light** — directly attacking C, P, S, N lines below 200 nm,
- **oxidise the sparked spot** and **quench/destabilise** the plasma,
- raise blanks and worsen [[Detection limits, precision and accuracy|detection limits]].

## Purity grades

- **≥ 99.99 % (4N)** is a common minimum for general work.
- **≥ 99.999 % (5N)** is preferred/required for low-level light-element work; JIEBO's
  [[Surpass F1]] specifies **purity > 99.999 %**.
- Spec the **O₂, H₂O and total hydrocarbon** limits, not just the headline percentage.

## Good gas practice

- **Two-stage regulator**; dedicated **argon-cleaning getter/purifier** for trace work.
- **Clean, leak-tight stainless/copper lines** — *no* PTFE-tape shedding, *no* rubber hose
  (permeable to air/moisture). Leak-check fittings.
- Adequate, stable **flow**: a higher "flush" flow between burns clears the stand; a steady
  "analysis" flow during the burn. Follow the instrument's flow spec.
- Watch cylinder pressure — never run a cylinder to empty (impurities concentrate at the bottom).
- **Purge after idle**: flush the stand/optics before the first analysis of the day.

## Symptoms of bad argon
Drifting or low UV elements (C/S/P), rising RSD, dark/oxidised burn marks, failing
[[Quality control and SPC|control samples]] right after a cylinder change → suspect gas/leaks
first. See [[Troubleshooting common problems]].

## Related
[[Plasma formation and excitation temperature]] · [[Vacuum vs purged vs sealed optics]] ·
[[Troubleshooting common problems]] · [[Total cost of ownership and consumables]]
