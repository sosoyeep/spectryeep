---
aliases: [Anatomy, Block diagram, Instrument overview, How OES instrument works]
tags: [instrumentation]
---

# Anatomy of a spark OES spectrometer

The signal path from solid sample to element concentrations.

```
 Sample ──► Spark stand ──► [Excitation source] ──► Plasma (in argon)
                                                       │ emits light
                                                       ▼
                        Entrance slit ──► Diffraction grating ──► Exit slits / focal plane
                                                       │
                                                       ▼
                                Detectors (PMT array or CCD/CMOS)
                                                       │ intensities
                                                       ▼
                            Software: background, IEC, calibration curves
                                                       │
                                                       ▼
                                       Element concentrations + QC
```

## The subsystems

1. **[[Spark stand and counter electrode]]** — clamps the sample over an argon-flushed gap and
   the tungsten counter-electrode; the spark fires here.
2. **[[Excitation source (spark generator)]]** — the (modern: fully digital) generator that
   produces controlled discharges and the [[Plasma formation and excitation temperature|plasma]].
3. **[[Argon supply and purity]]** — flushes the stand and (if applicable) the optics.
4. **[[Optical system - Paschen-Runge and Rowland circle]]** — collects the light through the
   entrance slit and disperses it.
5. **[[Diffraction gratings and focal length]]** — sets dispersion, resolution and wavelength
   coverage (e.g. 401 mm vs 750 mm focal length).
6. **[[Detectors - PMT vs CCD-CMOS]]** — convert each line's light into a measurable signal.
7. **[[Vacuum vs purged vs sealed optics]]** — keeps the light path transparent in the
   vacuum-UV so C, P, S, N can be measured.
8. **Electronics + software** — integrate signals, apply background and inter-element
   corrections, look up [[Calibration and certified reference materials|calibration curves]],
   run [[Quality control and SPC|QC]].

## Two architectural families
- **Paschen–Runge + PMT** — fixed exit slits/PMTs on a [[Optical system - Paschen-Runge and
  Rowland circle|Rowland circle]]; rugged, fast, classic foundry instrument (e.g. [[JB-750]]).
- **Grating + CCD/CMOS array** — solid-state pixels record a continuous spectrum; flexible,
  compact, no moving slits (e.g. [[Innovate T5]], [[Noble T7]]). See
  [[Detectors - PMT vs CCD-CMOS]].

## Related
[[Excitation source (spark generator)]] · [[Optical system - Paschen-Runge and Rowland circle]] ·
[[Detectors - PMT vs CCD-CMOS]] · [[JIEBO product line]]
