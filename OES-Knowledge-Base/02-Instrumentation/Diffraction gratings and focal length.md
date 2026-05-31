---
aliases: [Diffraction grating, Grating, Focal length, Resolution, Dispersion, Groove density, 焦距, 光栅]
tags: [instrumentation]
---

# Diffraction gratings and focal length

The **diffraction grating** is the dispersing element — a mirror ruled (or holographically
formed) with many fine, parallel grooves that bend each wavelength to a slightly different
angle, per the grating equation:

$$d(\sin\alpha + \sin\beta) = m\lambda$$

where *d* = groove spacing, *m* = diffraction order, α/β = incidence/diffraction angles.

## The three numbers that matter

- **Groove density** (lines/mm, e.g. **2400 l/mm**) — higher density → greater angular
  dispersion → finer separation of close lines.
- **Focal length** (e.g. **401 mm** vs **750 mm**) — longer focal length spreads the spectrum
  over more distance on the focal plane → **higher resolution and lower line overlap** (helps
  with [[Spectral interferences and matrix effects|interferences]]) — at the cost of a larger,
  heavier, pricier instrument.
- **Linear dispersion** (nm/mm, e.g. *0.7 nm/mm* on [[Surpass F1]]) — how many nm fall per mm on
  the detector; smaller is better resolution.

> Rule of thumb: **750 mm** (e.g. [[JB-750]]) = top resolution / complex high-alloy work;
> **401 mm** (e.g. [[Innovate T5]], [[Noble T7]], [[Exquis T4]]) = excellent
> resolution in a more compact, affordable package.

## Wavelength range & order

Instruments cover roughly **120–800 nm**. Reaching the short end (**vacuum-UV, <200 nm**) for
C (193 nm), P (~178 nm), S (~180 nm), N (~174 nm) requires
[[Vacuum vs purged vs sealed optics|vacuum or purged optics]]. Some designs use **two gratings /
two focal lengths** to optimise both UV and visible (e.g. [[Surpass F1]]: UV 350 mm + visible
401 mm).

## Resolution vs throughput trade-off
Finer dispersion separates lines but spreads light thinner (lower signal per pixel/slit). Good
design balances **groove density, focal length, slit widths and detector pixel size** to resolve
the needed lines while keeping enough light for low [[Detection limits, precision and accuracy|
detection limits]].

## Related
[[Optical system - Paschen-Runge and Rowland circle]] · [[Detectors - PMT vs CCD-CMOS]] ·
[[Vacuum vs purged vs sealed optics]] · [[Key spectral lines (analytical wavelengths)]]
