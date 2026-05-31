---
aliases: [OES vs XRF, OES vs LIBS, XRF vs LIBS, Technique comparison, OES XRF LIBS]
tags: [comparison]
---

# OES vs XRF vs LIBS

The three workhorses of metals elemental analysis. Each has a distinct sweet spot.

## At a glance

| | **Spark OES** | **XRF** | **LIBS** |
|---|---|---|---|
| Excitation | Electrical spark/arc | X-ray tube | Focused laser pulse |
| **Light elements (C,P,S,B)** | **Excellent** (esp. C) | Poor — can't do C | Moderate (better than XRF) |
| Detection limits | **Lowest** (ppm) | Good (heavier elem.) | Higher than lab OES |
| Accuracy/precision | **Highest** | Good | Moderate, surface-sensitive |
| Form factor | Bench/stationary (+ mobile) | **Handheld** & bench | **Handheld** & bench |
| Sample prep | Grind/mill, flat, clean | **Minimal** | Minimal |
| Destructive? | Yes (small burn) | Non-destructive | Tiny mark |
| Speed | Few seconds | Seconds | **<1–2 s** |
| Best at | Lab certification, **carbon**, foundry melt control | Sorting, PMI, coatings, heavy elements | Fast field carbon-equivalent sorting |

## How to choose

- **Need carbon, or certification-grade accuracy?** → **OES**. The reason foundries and mills run
  it: C, P, S, B, N directly, lowest [[Detection limits, precision and accuracy|detection
  limits]]. (JIEBO: [[Innovate T5]], [[Noble T7]], [[JB-750]] …)
- **Need fast, non-destructive sorting / PMI of heavier elements in the field, no prep?** →
  **XRF** (handheld). Can't measure carbon reliably. (JIEBO: [[F6000 Pro]])
- **Need handheld carbon-equivalent sorting / scrap, light-element capability portable?** →
  **LIBS**. Faster and lighter than portable OES, light-element capable, but higher detection
  limits and more surface/matrix sensitivity than lab OES. (JIEBO: [[F7000 Pro]])

## They're complementary, not rivals
A typical metals operation runs **lab OES** for certification + **handheld XRF/LIBS** for
incoming sorting and PMI on installed parts. For C/S beyond OES range, add
[[Carbon-sulfur combustion analysis|combustion]]; for gases, [[ONH inert gas fusion analysis]].

## Why XRF can't do carbon (one line)
Carbon's characteristic X-rays are extremely low-energy and easily absorbed; light-element XRF is
impractical for routine bulk carbon — whereas OES excites carbon's UV **emission** line directly
([[Vacuum vs purged vs sealed optics]]).

## Related
[[Optical Emission Spectrometry (OES)]] · [[Stationary vs mobile vs portable OES]] ·
[[F6000 Pro]] · [[F7000 Pro]] · [[How to choose an OES spectrometer]]
