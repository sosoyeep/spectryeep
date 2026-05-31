---
aliases: [Troubleshooting, OES problems, Fault finding, Diagnostics, Common problems]
tags: [maintenance]
---

# Troubleshooting common problems

Symptom → likely cause → fix. Always start by **re-running a [[Quality control and SPC|control sample]]** to localise the problem, and change **one thing at a time**.

## Control sample fails / results biased

| First suspect | Why | Action |
|---|---|---|
| **Sample prep** | #1 error source | Re-prep properly ([[Sample preparation overview]]), re-run |
| **Drift** | Conditions moved | **Type-standardise** ([[Type standardization and drift correction]]) |
| **Argon / leaks** | Air in plasma | Check purity/flow/fittings ([[Argon supply and purity]]) |
| **Electrode/gap/stand** | Plasma changed | Clean electrode, reset gap, vacuum dust ([[Spark stand and counter electrode]]) |
| **Wrong program** | Matrix mismatch | Select correct matrix/grade program |

## Light elements (C, P, S, N) low / drifting specifically
→ Points to the **VUV path**: impure/low argon, a leak, or optics not evacuated/purged.
Check [[Argon supply and purity]] and [[Vacuum vs purged vs sealed optics]]; verify vacuum level
or purge; leak-check the stand seal (sample must fully cover the aperture).

## High RSD / poor repeatability
- **Inhomogeneous sample / inclusions** → more burns, [[Single spark evaluation (PDA-SDA)]].
- **Unstable source / dirty stand / worn electrode** → clean & reset
  ([[Spark stand and counter electrode]]).
- **Poor seal** (small/curved sample) → adapter ([[Small samples, chips and remelting]]).

## Oxidised / black burn marks
Air reaching the spot → **bad seal or argon problem**. Re-flush, leak-check, ensure the sample
covers the aperture, verify flow.

## After a change, everything shifted
Recent **cylinder change, electrode change, profiling, warm-up, ambient temp swing** → expected
drift → **standardise + verify**. If standardisation won't bring it in, suspect a real fault
(leak, contaminated CRM, failing detector) — escalate to service.

## Won't standardise / spectrum off the slits
→ **Profile** (wavelength-align) first, then standardise
([[Optical system - Paschen-Runge and Rowland circle]]).

## Related
[[Routine maintenance]] · [[Quality control and SPC]] · [[Argon supply and purity]] ·
[[Spark stand and counter electrode]] · [[Sample preparation overview]]
