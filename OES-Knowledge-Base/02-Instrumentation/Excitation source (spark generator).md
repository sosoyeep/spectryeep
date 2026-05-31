---
aliases: [Excitation source, Spark generator, Spark source, Digital source, HEPS, Light source]
tags: [instrumentation]
---

# Excitation source (spark generator)

The electronic generator that produces the discharges and therefore the
[[Plasma formation and excitation temperature|plasma]]. It is the heart of analytical
performance: a stable, controllable source is what gives OES its **precision**.

## From classical to all-digital

- **Classical capacitive sources** set energy via fixed capacitor/inductor networks — limited,
  matrix-by-matrix tuning.
- **Modern all-digital / solid-state sources** synthesise the discharge waveform electronically.
  They can change **energy, frequency, polarity and shape per element/matrix on the fly**,
  delivering:
  - better **stability** and lower detection limits,
  - flexible **multi-mode** operation (a gentle mode for one element, a hot mode for another in
    the same program),
  - cleaner **pre-spark** and the data stream needed for [[Single spark evaluation (PDA-SDA)]].

JIEBO describes the [[Innovate T5]] and [[Noble T7]] as using an **all-digital excitation
source**; the [[JB-750]] pairs a source with a PMT optic and *single-spark pulse-integral*
analysis.

## Key parameters
- **Discharge energy** — more energy → more ablation/sensitivity, but more heating and possible
  re-deposition.
- **Repetition frequency** — typically a few hundred Hz; more discharges average out noise.
- **Pre-spark vs integration phases** — see [[Spark and arc excitation]].
- **Mode per matrix** — encoded in the calibration program; never reuse a steel mode on
  aluminium.

## Practical notes
- The source feeds the [[Spark stand and counter electrode]]; gap geometry and argon flow are
  part of the same tuned system.
- Source stability is verified through [[Quality control and SPC|control samples]]; instability
  shows up as rising RSD.

## Related
[[Spark and arc excitation]] · [[Plasma formation and excitation temperature]] ·
[[Spark stand and counter electrode]] · [[Single spark evaluation (PDA-SDA)]]
