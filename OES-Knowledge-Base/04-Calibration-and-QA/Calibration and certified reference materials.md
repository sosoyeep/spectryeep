---
aliases: [Calibration, CRM, Certified reference materials, Reference materials, Calibration curve, Internal standard]
tags: [calibration]
---

# Calibration and certified reference materials

Calibration is what converts measured **intensity** into **concentration**. It is only as good
as the **certified reference materials (CRMs)** behind it.

## Building a calibration

1. **Choose matrix-matched CRMs.** A set of certified samples of the *same alloy family*
   spanning the concentration range of every element (e.g. a suite of low-alloy steel CRMs).
   Matrix match is essential — see [[Spectral interferences and matrix effects]].
2. **Measure each CRM** (properly prepared — [[Sample preparation overview]]).
3. **Plot intensity ratio vs concentration.** Intensity is taken **relative to an
   internal-standard line** (the matrix element — Fe, Al, Cu …) to cancel variation in how much
   material was sparked.
4. **Fit the calibration function** (often curved for self-absorption) and add **inter-element
   correction (IEC)** terms for known interferences.
5. **Validate** against CRMs *not* used to build the curve.

## Types of reference material

- **Calibration / setting-up samples (SUS)** — define the master curves.
- **Recalibration / standardisation samples** — a small subset used routinely to correct drift
  (see [[Type standardization and drift correction]]).
- **Control / check samples** — independent CRMs run to *verify* accuracy day to day
  ([[Quality control and SPC]]).
- **Type standards** — known production samples used to fine-tune a curve to a specific grade.

## CRM sources & traceability
Use CRMs traceable to recognised bodies (NIST, BAM, IARM/Brammer, EURONORM/ECRM, China GBW/GSB,
JSS, BCS/BAS …). Track **certificate values, uncertainties and expiry**; keep certificates with
the method record. Matrix and grade coverage drives CRM purchasing cost
([[Total cost of ownership and consumables]]).

## Why it eventually drifts
Plasma conditions, optics temperature, electrode wear and gas all shift slowly, moving
intensities off the original curve. Rather than rebuild full curves, you **type-standardise** —
next note.

## Related
[[Type standardization and drift correction]] · [[Quality control and SPC]] ·
[[Spectral interferences and matrix effects]] · [[Standards overview]] · [[Sample preparation overview]]
