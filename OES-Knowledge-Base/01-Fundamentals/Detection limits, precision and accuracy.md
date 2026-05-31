---
aliases: [Detection limits, LOD, Precision, Accuracy, Repeatability, Reproducibility, RSD]
tags: [fundamentals]
---

# Detection limits, precision and accuracy

How to read — and not over-read — an OES result.

## Definitions

- **Limit of detection (LOD).** Smallest concentration distinguishable from background, often
  taken as **3σ** of the blank/background signal. **Limit of quantification (LOQ) ≈ 10σ.**
- **Precision** — agreement among repeated measurements.
  - **Repeatability**: same operator, same instrument, short interval.
  - **Reproducibility**: different operators / instruments / days.
  - Usually expressed as **standard deviation (SD)** or **relative SD (RSD, %)**.
- **Accuracy / trueness** — closeness to the true (certified) value; assessed against CRMs.
- **Bias** — systematic offset; corrected by recalibration / type standardisation.

## Typical performance of lab spark OES

- **Detection limits** down to **single-digit ppm** for many elements (matrix and line
  dependent; vacuum/UV optics extend this to C, P, S, N).
- **Precision** of a few **percent relative** or better for major/minor elements under good
  [[Sample preparation overview|sample preparation]] and calibration.
- Accuracy ultimately limited by the **CRMs**, the **sample**, and **stability**, not the
  detector alone.

## What actually limits real-world results

1. **Sample preparation** — the single biggest error source. See [[Sample preparation overview]].
2. **Calibration quality & matrix match** — [[Calibration and certified reference materials]].
3. **Drift** since last standardisation — [[Type standardization and drift correction]].
4. **Homogeneity** of the sample — [[Single spark evaluation (PDA-SDA)]].
5. **Interferences** — [[Spectral interferences and matrix effects]].

> [!warning] A four-decimal readout is not four-decimal accuracy. Trust a result only within the
> precision demonstrated by your **control samples** ([[Quality control and SPC]]).

## Related
[[Spectral interferences and matrix effects]] · [[Calibration and certified reference materials]] ·
[[Quality control and SPC]] · [[Sample preparation overview]]
