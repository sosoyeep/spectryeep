---
aliases: [Interferences, Matrix effects, Spectral interference, Line overlap, Self-absorption]
tags: [fundamentals]
---

# Spectral interferences and matrix effects

The two main reasons a raw line intensity is *not* directly the concentration — and how OES
software corrects for them.

## Spectral interferences

- **Line overlap (direct spectral interference).** A line of element B sits on or near the
  analytical line of element A. Example: many transition metals crowd the same UV region.
  Corrected with **inter-element correction factors** measured during calibration, and avoided
  by choosing well-separated lines and adequate optical
  [[Diffraction gratings and focal length|resolution]] (longer focal length helps).
- **Background / continuum.** Plasma continuum and stray light raise the baseline; corrected by
  measuring background near the line and subtracting it.
- **Self-absorption.** At high concentration, emitted photons are reabsorbed by cooler atoms of
  the same element, bending the calibration curve. Handled by using **curved calibration
  functions** and, where possible, less-sensitive lines for major elements.

## Matrix effects

The **matrix** (the bulk element and overall composition) changes how the sample ablates and
how the plasma excites — so the *same* concentration of an element can give a *different*
intensity in steel vs aluminium vs copper. Consequences:

- Calibrations are **matrix-specific**. You cannot use a steel curve on aluminium.
- Within a matrix, sub-programs (e.g. low-alloy vs high-alloy steel, or different aluminium
  series) handle wider compositional ranges.
- **Inter-element corrections** account for third-element influence inside a matrix.

## How instruments cope
1. **Internal standardisation** — ratio every line to a matrix-element line to cancel drift in
   ablated amount.
2. **Matrix-matched CRMs** — calibrate with [[Calibration and certified reference materials| reference materials of the same alloy family]].
3. **Inter-element correction terms** in the calibration model.
4. **Type standardisation** to keep curves valid over time
   ([[Type standardization and drift correction]]).

## Related
[[Atomic emission and spectral lines]] · [[Calibration and certified reference materials]] ·
[[Diffraction gratings and focal length]] · [[Detection limits, precision and accuracy]]
