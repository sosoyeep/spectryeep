---
aliases: [Type standardization, Standardization, Recalibration, Drift correction, SUS, Re-standardization]
tags: [calibration]
---

# Type standardization and drift correction

Full [[Calibration and certified reference materials|calibration]] from scratch is slow and
CRM-hungry. **Type standardisation** (a.k.a. *standardisation* or *recalibration*) keeps those
master curves valid over time with just a couple of samples.

## The idea

The shape of a calibration curve is stable, but it **shifts and tilts** slowly as plasma,
optics, electrode and gas drift. Type standardisation measures **two recalibration samples**
(typically a **high** and a **low** standard for each element/program) and computes a simple
**linear correction (slope + offset)** that maps today's intensities back onto the original
master curve.

## Workflow

1. Run the **standardisation (recal) samples** for the active program.
2. Software calculates the **drift correction** and applies it to all curves.
3. **Verify** with an independent **control sample** ([[Quality control and SPC]]).
4. Resume analysis.

## When to standardise

- **On a schedule** (start of shift / day) per your QC procedure.
- After a **control sample fails** its limits.
- After **electrode change, gas-cylinder change, optics profiling, warm-up**, or any maintenance.
- When ambient conditions change significantly (temperature).

> [!tip] Standardisation corrects *drift*. It cannot fix a *wrong calibration*, *bad sample
> prep*, *air leaks*, or *contaminated argon* — investigate those if standardisation won't bring
> a control sample into range.

## Profiling vs standardising
**Profiling** re-aligns the spectrum onto the slits/pixels (optical/wavelength alignment);
**standardising** corrects intensity drift. CCD/CMOS array instruments profile against a
reference line; do it per the maker's schedule before standardising.

## Related
[[Calibration and certified reference materials]] · [[Quality control and SPC]] ·
[[Argon supply and purity]] · [[Routine maintenance]] · [[Optical system - Paschen-Runge and Rowland circle]]
