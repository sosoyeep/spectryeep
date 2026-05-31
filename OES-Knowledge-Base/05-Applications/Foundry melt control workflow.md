---
aliases: [Melt control, Foundry workflow, Pre-pour analysis, Furnace control, Melt deck]
tags: [application]
---

# Foundry melt control workflow

OES under time pressure: confirm the melt is on-spec **before** it's poured, when minutes and
furnace energy are on the line.

## The loop

1. **Sample the melt.** Pour a chill/disc sample (or a chilled coin for cast iron) from the
   furnace/ladle. For cast iron, the chilled sample is **mandatory** for carbon
   ([[Cast iron and carbon equivalent]]).
2. **Prepare fast & correctly.** Grind (steel/iron) or mill (Al/Cu) the face
   ([[Surface grinding and milling]]); analyse fresh.
3. **Spark on the lab/deck OES.** A few-second burn returns full chemistry.
4. **Compare to aim & limits.** Software flags out-of-spec elements vs the grade window.
5. **Calculate corrections.** Add ferroalloys/master alloys (or dilute) to hit aim — many
   systems compute the **charge correction** automatically (incl. **carbon equivalent** for
   iron).
6. **Re-sample & re-check** after additions; pour when in-spec.

## What makes it reliable under pressure

- **Daily standardisation + control sample** before the first heat
  ([[Type standardization and drift correction]], [[Quality control and SPC]]).
- **Robust, sealed [[Spark stand and counter electrode|spark stand]]** and clean
  [[Argon supply and purity|argon]] — the deck is dusty and hot.
- A **rugged instrument** sited near (but protected from) the furnace
  ([[Stationary vs mobile vs portable OES]]).
- Good **sample prep discipline** — the loop is only as fast as it is *trustworthy*.

## Speed-vs-precision tools at the furnace
- **Thermal analysis** (cup) — instant CE/C/Si estimate, lower precision.
- **OES (chilled/disc sample)** — full chemistry in seconds, high precision → the decision tool.
- **Combustion C/S** — reference confirmation when it matters
  ([[Carbon-sulfur combustion analysis]]).

## JIEBO fit
Deck OES: [[Innovate T5]], [[Noble T7]], [[Exquis T4]]; on-site/large-part: [[Surpass F1]];
reference C/S: [[CS2020]] / [[CS996]].

## Related
[[Cast iron and carbon equivalent]] · [[Iron and steel analysis]] · [[Quality control and SPC]] ·
[[Stationary vs mobile vs portable OES]]
