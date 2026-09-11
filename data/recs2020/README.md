# RECS 2020 state x feature statistics

Source: EIA Residential Energy Consumption Survey 2020, public microdata v7
(18,496 homes, 51 states incl. DC). Computed 2026-09-11 by `recs_state_stats.py`
with NWEIGHT point estimates and Fay BRR (k=0.5, 60 replicate weights) for RSE.

- `recs2020_state_feature_stats.json`: `US` + `states[XX]`, each with `all`
  (all occupied units) and `sf` (single-family detached + attached) universes.
  Every stat has `_rse` and `_n`; null + `_flag` Q (RSE > 50%) or N (n < 10).
- `recs2020_state_feature_stats_sf.csv`: flat single-family view for eyeballing.
- `pct_owners_count_*_in_sqft` = share of respondents WITH that feature who
  included it in their self-reported square footage (the misconception rate).

Sanity check: Ohio all-homes = 4.739M homes, 60.3% basement, 2013 / 1843 / 1540
avg total / heated / cooled sq ft, matching EIA's published state highlights.

Rebuild: download recs2020_public_v7.csv + the codebook xlsx from
eia.gov/consumption/residential/data/2020 into this folder, then
`uvx --with pandas,openpyxl,numpy python recs_state_stats.py`.
