# RECS feature statistics, 2009 to 2024

Source: EIA Residential Energy Consumption Survey public microdata, four survey
years: 2009 (12,083 homes), 2015 (5,686), 2020 (18,496), 2024 v1 (16,676).
Computed 2026-09-11 by `recs_multi_year.py`. NWEIGHT point estimates; RSE via
Fay BRR (2015: 96 replicates, 2020/2024: 60). 2009 has no replicate weights in
the main file, so no RSE that year.

Files
- `recs_state_feature_stats_multi_year.json`: `series[US|Northeast|Midwest|South|West][year]`
  and `states[XX][year]`, each with `all` (all occupied units) and `sf`
  (single-family detached + attached). Stats carry `_rse` and `_n`; null +
  `_flag` Q (RSE > 50%) or N (n < 10). `meta.series_breaks` lists what is and
  is not comparable across years.
- `recs_series_us_regions_sf.csv`: US + 4 regions x 4 years, single-family, for charts.
- `recs_states_by_year_sf.csv`: all 50 states + DC for 2020 and 2024; 16 states
  also have 2009 (AZ CA CO FL GA IL MA MI MO NJ NY PA TN TX VA WI). 2015 has no
  state identifiers.

Stats: avg total/heated/cooled sq ft, basement / finished / heated, attic /
finished, attached garage + size, stories, heating equipment (not in 2024 v1;
EIA releases it spring 2027), baths, and `pct_owners_count_{basement,attic,garage}_in_sqft`
= share of respondents WITH the feature who included it in their self-reported
square footage (2020 and 2024 only).

Comparability: basement, finished basement, garage, garage size and stories are
stable 2009-2024. Square footage is NOT comparable before 2020 (method change).
Attic presence is not comparable before 2015 (wording change).

Validation: Ohio all-homes matches EIA's published state highlights exactly for
2020 (4.739M, 60.3% basement, 2013/1843/1540 sq ft) and 2024 (4.93M, 57.8%,
1942/1723/1426).

Older surveys (2005, 2001, 1997, 1993) exist as fixed-width multi-file text
layouts; not parsed. Rebuild: download recs{2009,2015,2020,2024}_public*.csv and
the 2009 codebook xlsx into this folder, then
`uvx --with pandas,openpyxl,numpy python recs_multi_year.py`.
