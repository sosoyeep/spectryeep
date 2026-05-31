---
aliases: [Detectors, PMT, CCD, CMOS, Photomultiplier, Detector comparison, PMT vs CMOS]
tags: [instrumentation]
---

# Detectors — PMT vs CCD/CMOS

Detectors turn the dispersed light into electrical signal. Two families dominate, and the choice
shapes the whole instrument.

## Photomultiplier tubes (PMT)

A vacuum tube: a photon hits the photocathode, the freed electron is multiplied through dynodes
into a large, low-noise current. One PMT sits behind each **fixed exit slit** in a
[[Optical system - Paschen-Runge and Rowland circle|Paschen–Runge]] mount.

- **Strengths:** very **high sensitivity** and dynamic range, low noise, excellent UV response,
  mature and rugged → outstanding **detection limits**. The flagship [[JB-750]] is PMT-based.
- **Limits:** **one tube per line** — the channel set is fixed in hardware; adding an element
  means physically adding a channel. Bulkier, higher voltage, more costly per channel.

## CCD / CMOS solid-state arrays

A linear/area array of light-sensitive pixels records a **continuous spectrum**.

- **Strengths:** capture **whole spectral regions at once**, so lines/elements can be added or
  re-selected **in software**; compact, no per-line tubes; CMOS adds low power, fast readout,
  on-chip electronics. JIEBO's [[Innovate T5]], [[Noble T7]] and [[Exquis T4]] use **CMOS**
  detectors (Noble T7: "scientific-research-grade" CMOS).
- **Limits:** historically lower UV sensitivity / higher read noise than PMT, though modern
  back-thinned, cooled, low-noise CMOS has largely closed the gap for routine work.

## Quick comparison

| | **PMT** | **CCD/CMOS** |
|---|---|---|
| Reads | One line per tube | Continuous spectrum |
| Flexibility | Fixed channels (hardware) | Add lines in software |
| Sensitivity / LOD | Excellent, esp. UV | Very good (modern), improving |
| Size / cost | Larger, per-channel cost | Compact, integrated |
| Best for | Highest performance, fixed program | Flexible multi-matrix, compact labs |

## Choosing
For a defined, demanding program (high-alloy steel certification) PMT still leads on raw
performance; for a **flexible, multi-matrix, compact** lab, modern CMOS is the pragmatic choice.
See [[How to choose an OES spectrometer]].

## Related
[[Optical system - Paschen-Runge and Rowland circle]] · [[Diffraction gratings and focal length]] ·
[[Detection limits, precision and accuracy]] · [[How to choose an OES spectrometer]]
