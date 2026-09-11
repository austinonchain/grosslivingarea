# Census new single-family homes by region, 1971 to 2025

Source: US Census Bureau Survey of Construction, "Characteristics of New
Housing" annual tables (single-family houses completed, includes built for
rent). Parsed 2026-09-11 by `soc_parse.py` from
census.gov/construction/chars/xls/<table>_cust.xls. Updated by Census each July.

Geography: US + Northeast, Midwest, South, West. No state level exists.
Values are percent of houses completed that year; `houses_completed_thousands`
is the base; `median_sqft` / `average_sqft` are floor area.

Coverage by table: foundation + parking 1971-; median/avg sq ft, bathrooms,
bedrooms, heating system, air conditioning, fireplaces 1973-; sq ft
distribution 1999-; stories, lot size, laundry location, foyer 2009-; outdoor
features (patio / porch / deck combinations, plus derived any_*) 2010-.
Table-specific caveats are in `meta.notes` in the JSON.

Price and price-per-square-foot tables were deliberately not pulled (no dollar
values on this site).

Rebuild: download the 13 `<table>_cust.xls` files listed in soc_parse.py into
this folder, then `uvx --with xlrd,pandas python soc_parse.py`.
