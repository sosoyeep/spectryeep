---
aliases: [Plasma, Excitation temperature, Discharge plasma, Argon plasma]
tags: [fundamentals]
---

# Plasma formation and excitation temperature

Between the [[Spark stand and counter electrode|counter-electrode]] and the sample, each
discharge creates a short-lived **plasma** — a hot, partially ionised gas — in the
[[Argon supply and purity|argon]] atmosphere.

## What happens in a discharge

1. The high-voltage breakdown ionises the argon gap, forming a conductive channel.
2. Current flows; the channel heats to roughly **10,000 K** (order of magnitude).
3. The hot channel **ablates** a microscopic amount of the sample surface.
4. Ablated atoms enter the plasma, are **excited** (and partly ionised), then emit their
   characteristic light as they relax (see [[Atomic emission and spectral lines]]).

## Why argon

The discharge runs in flowing **argon** because argon:
- is **inert** (won't react with the hot sample),
- is **transparent in the UV/VUV** so it doesn't absorb the analytical light, and
- supports a **stable, reproducible plasma**.

Oxygen and nitrogen from air would absorb UV lines, quench the plasma and oxidise the spot —
hence the demand for high argon **purity** (see [[Argon supply and purity]]).

## Excitation temperature & the working "window"

The **excitation temperature** sets how atoms are distributed across energy levels (Boltzmann
distribution) and therefore how bright each line is. Stable excitation is what makes OES
**repeatable**; the [[Excitation source (spark generator)|source]] is engineered to reproduce
the same plasma conditions discharge after discharge. Calibration implicitly assumes the same
plasma conditions as when the [[Calibration and certified reference materials|reference
materials]] were measured — which is why [[Type standardization and drift correction|type
standardisation]] is needed when conditions drift.

## Matrix dependence
Different matrices (steel vs aluminium vs copper) ablate and excite differently, so each needs
its **own excitation parameter set and calibration** — see [[Spectral interferences and matrix
effects]].

## Related
[[Spark and arc excitation]] · [[Argon supply and purity]] · [[Atomic emission and spectral lines]] ·
[[Spark stand and counter electrode]]
