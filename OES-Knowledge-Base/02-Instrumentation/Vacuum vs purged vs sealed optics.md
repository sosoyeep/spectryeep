---
aliases: [Vacuum optics, Purged optics, Sealed optics, Vacuum UV, VUV, Optical chamber, 光室]
tags: [instrumentation]
---

# Vacuum vs purged vs sealed optics

To measure the **light elements**, the analytical light must reach the detector unabsorbed —
including lines in the **vacuum-ultraviolet (VUV, <200 nm)**: C ~193 nm, P ~178 nm, S ~180 nm,
N ~174 nm, sometimes O. Air (its O₂ and H₂O) strongly absorbs there, so the optical path must be
conditioned. Three approaches:

## 1. Vacuum optics
The polychromator chamber is **evacuated** with a pump. Removes all absorbing gas → best,
most stable VUV transmission and lowest [[Detection limits, precision and accuracy|detection
limits]] for C, P, S, N. Needs a vacuum pump and good seals; standard on performance lab units —
JIEBO's [[Innovate T5]] and [[JB-750]] use a **vacuum optical chamber**.

## 2. Argon-purged optics
The chamber is continuously **flushed with high-purity argon** to displace air. Simpler than a
vacuum (no pump), good VUV performance if argon is pure and flow is maintained — but consumes
gas and is sensitive to [[Argon supply and purity|gas quality]].

## 3. Sealed / sealed-cycle optics
A **permanently sealed, gas-filled** chamber (often argon), sometimes with a small recirculation
getter to keep it clean — *"sealed-cycle optical chamber"*. Low maintenance, no pump, no ongoing
purge gas; JIEBO's [[Exquis T4]] uses this. Range may be slightly narrower than a hard vacuum at
the extreme VUV.

## Choosing
| Approach | VUV reach | Maintenance | Running cost | Typical use |
|---|---|---|---|---|
| **Vacuum** | Best | Pump upkeep | Low gas | Performance lab, full C/P/S/N |
| **Purged** | Very good | Moderate | Argon | Flexible labs |
| **Sealed** | Good | Lowest | Lowest | Compact / entry, lower upkeep |

Thermal control of the chamber matters too — see
[[Optical system - Paschen-Runge and Rowland circle]] (Noble T7's ±0.1 °C constant-temperature
chamber).

## Related
[[Diffraction gratings and focal length]] · [[Argon supply and purity]] ·
[[Key spectral lines (analytical wavelengths)]] · [[Optical system - Paschen-Runge and Rowland circle]]
