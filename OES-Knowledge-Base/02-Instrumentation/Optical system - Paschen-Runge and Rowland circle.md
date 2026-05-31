---
aliases: [Paschen-Runge, Rowland circle, Optical system, Polychromator, Spectrometer mount, Czerny-Turner]
tags: [instrumentation]
---

# Optical system — Paschen–Runge and the Rowland circle

The optical system collects the plasma light at the **entrance slit**, disperses it with a
[[Diffraction gratings and focal length|concave grating]], and presents the separated
wavelengths to the [[Detectors - PMT vs CCD-CMOS|detectors]].

## The Rowland circle

A **concave diffraction grating** both disperses *and* focuses light. Rowland showed that if the
grating and slits lie on a circle whose diameter equals the grating's radius of curvature (the
**Rowland circle**), every wavelength comes to focus on that circle. This geometry underpins the
classic polychromator.

## Paschen–Runge mounting

The **Paschen–Runge** mounting places the **entrance slit and many fixed exit slits around the
Rowland circle**, each exit slit + detector dedicated to one analytical line. Characteristics:

- **Simultaneous** multi-element readout — all channels measured at once.
- **Rugged and stable** — no moving optics during measurement; ideal for the foundry floor.
- Channel set is **factory-defined** (one slit/PMT per line). JIEBO uses Paschen–Runge across
  its OES line; [[JB-750]] is a PMT Paschen–Runge instrument.

## CCD/CMOS variants

Solid-state instruments may use a **Paschen–Runge layout with CMOS arrays** instead of discrete
PMTs (e.g. [[Innovate T5]], [[Noble T7]]), or a **Czerny–Turner** mount for a compact
array spectrometer. Arrays capture a **continuous spectrum**, so lines can be added in software
without new hardware. See [[Detectors - PMT vs CCD-CMOS]].

## Thermal & vacuum stability

The mount must hold slit-to-grating geometry to sub-micron stability, so high-end optics are
**temperature-controlled** (Noble T7 cites a constant-temperature chamber ±0.1 °C) and the path
is **evacuated or argon-purged** ([[Vacuum vs purged vs sealed optics]]) to reach the
vacuum-UV lines. **Profiling / wavelength alignment** routines re-peak the spectrum onto the
slits periodically.

## Related
[[Diffraction gratings and focal length]] · [[Detectors - PMT vs CCD-CMOS]] ·
[[Vacuum vs purged vs sealed optics]] · [[Anatomy of a spark OES spectrometer]]
