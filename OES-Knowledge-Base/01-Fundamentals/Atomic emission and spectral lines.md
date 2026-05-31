---
aliases: [Atomic emission, Spectral lines, Emission lines, Spectral fingerprint]
tags: [fundamentals]
---

# Atomic emission and spectral lines

OES works because **each element emits light at a unique set of wavelengths** — its spectral
fingerprint.

## Why atoms emit specific wavelengths

Electrons in an atom occupy discrete energy levels. When the
[[Plasma formation and excitation temperature|plasma]] delivers energy, electrons jump to
**higher (excited) levels**. They are
unstable there and fall back toward the ground state, releasing the energy difference as a
**photon**. Because the energy gaps are quantised and specific to each element, the emitted
photons have specific wavelengths:

$$E_{photon} = h\nu = \frac{hc}{\lambda}$$

A larger energy drop → shorter wavelength. The set of allowed transitions produces the line
spectrum we measure.

## From line intensity to concentration

The **number of photons** emitted at a given line scales with the **number of excited atoms**,
which (within the working range, after correcting for self-absorption) scales with the
**concentration** of that element in the sample. OES therefore measures *intensity* and
converts it to *concentration* using a calibration curve built from
[[Calibration and certified reference materials|certified reference materials]].

To suppress run-to-run variation in how much material is sparked, intensity is taken as a
**ratio to an internal-standard line** (usually the matrix element — Fe for steel, Al for
aluminium). See [[Calibration and certified reference materials]].

## Analytical line selection

Each element has many lines; the analyst picks lines that are **sensitive**, **free of
interference**, and within the instrument's [[Diffraction gratings and focal length|wavelength range]]. Many key lines for C, P, S, N sit in the **vacuum ultraviolet (<200 nm)**, which is
why instruments need [[Vacuum vs purged vs sealed optics|vacuum or argon-purged optics]].
A working list lives in [[Key spectral lines (analytical wavelengths)]].

## Complications
- **Self-absorption** flattens calibration curves at high concentration.
- **Line overlaps / interferences** between elements — see [[Spectral interferences and matrix effects]].

## Related
[[Plasma formation and excitation temperature]] · [[Key spectral lines (analytical wavelengths)]] ·
[[Spectral interferences and matrix effects]] · [[Diffraction gratings and focal length]]
