---
aliases: [Single spark evaluation, PDA, SDA, Single spark, Pulse distribution analysis, Inclusion analysis]
tags: [calibration, application]
---

# Single spark evaluation (PDA / SDA)

Beyond the averaged bulk result, **each individual discharge** carries information about the
sample's **homogeneity**. Reading that stream is called **single-spark evaluation** —
*Pulse Distribution Analysis (PDA)* / *Single-spark Distribution Analysis (SDA)* /
*single-spark pulse-integral analysis* (JIEBO's term for the [[JB-750]]).

## The principle

A normal burn fires hundreds of discharges. If an element is **dissolved uniformly**, each
single-spark intensity clusters tightly around the mean. If the element is partly tied up in
**inclusions or segregated phases**, occasional sparks hitting those features produce
**intensity spikes** — outliers that stand out from the dissolved baseline.

By histogramming single-spark intensities, software can separate:

- the **dissolved (soluble) fraction** of an element, from
- the **particle-bound (insoluble) fraction** in inclusions.

## What it reveals

- **Cleanliness / inclusions** — e.g. Al as dissolved Al vs Al₂O₃ inclusions in steel; Ca
  treatment effectiveness; oxide/nitride content.
- **Segregation & homogeneity** — flags samples that aren't representative (prompting more burns
  or better [[Sample preparation overview|prep]]).
- **Soluble vs total** values for elements that exist in both forms.

## Practical use

- A **research / high-end feature** (cleanliness work, R&D, premium QC); requires a fast
  [[Excitation source (spark generator)|digital source]] and detector readout that records
  per-discharge data.
- Complements, not replaces, dedicated cleanliness methods (microscopy, [[ONH inert gas fusion
  analysis|fusion for O/N]]).

## Related
[[Spark and arc excitation]] · [[Excitation source (spark generator)]] ·
[[Nickel cobalt and superalloys]] · [[Iron and steel analysis]] · [[JB-750]]
