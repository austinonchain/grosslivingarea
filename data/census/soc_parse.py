import xlrd, json, math, pandas as pd
GEOS = ['United States','Northeast','Midwest','South','West']
GEOKEY = {'United States':'US'}
TABLES = {  # file -> (pct column labels, in order, = last N columns of the sheet)
 'squarefeet': ['sqft_under_1400','sqft_1400_1799','sqft_1800_2399','sqft_2400_2999','sqft_3000_3999','sqft_4000_plus'],
 'stories': ['stories_1','stories_2','stories_3_plus'],
 'parking': ['garage_1_car','garage_2_car','garage_3_plus_car','carport','no_garage_or_carport'],
 'outdoorfeatures': ['patio_only','porch_only','deck_only','patio_and_porch','porch_and_deck','patio_and_deck','patio_porch_and_deck','no_outdoor_feature'],
 'foundation': ['basement_full_or_partial','slab_or_other','crawl_space'],
 'bathrooms': ['baths_1_5_or_less','baths_2','baths_2_5','baths_3_plus'],
 'bedrooms': ['bedrooms_2_or_less','bedrooms_3','bedrooms_4_plus'],
 'heatsystem': ['heat_forced_air_furnace','heat_pump_total','heat_pump_air_source','heat_pump_ground_source','heat_hot_water_or_steam','heat_other_or_none'],
 'aircond': ['with_ac','without_ac'],
 'fireplace': ['no_fireplace','fireplace_1','fireplace_2_plus'],
 'lotsize': ['lot_under_7000','lot_7000_8999','lot_9000_10999','lot_11000_21999','lot_22000_plus'],
 'laundry': ['with_basement_total','laundry_in_basement','with_basement_laundry_first_floor','with_basement_laundry_higher_floor','without_basement_total','without_basement_laundry_first_floor','without_basement_laundry_higher_floor'],
 'foyer': ['with_foyer_total','with_foyer_2_stories','with_foyer_3_plus','without_foyer_total','without_foyer_2_stories','without_foyer_3_plus'],
}
def num(v):
    if isinstance(v, float): return None if math.isnan(v) else v
    return None  # (NA) (S) (Z) etc
out = {'meta': {
  'source': 'US Census Bureau, Survey of Construction, Characteristics of New Housing (annual, single-family houses COMPLETED, includes built-for-rent). Downloaded 2026-09-11 from census.gov/construction/chars/xls/<table>_cust.xls. Values are percent of houses completed that year unless noted; houses_completed_thousands is the base.',
  'geography': 'US + 4 Census regions (Northeast, Midwest, South, West). No state level exists.',
  'coverage': {}, 'notes': {
    'parking': 'Before 1992 the 2-car column includes 3+ car garages.',
    'bathrooms': '2.5-bath column includes 2.5+ for 1986 and earlier; 3+ column starts 1987.',
    'stories': '1-story includes 1.5-story and split-level; 2-story includes 2.5-story.',
    'foyer': 'Foyer table cross-tabs by stories; 1-story houses are in the without_foyer_total column.',
    'laundry': 'with/without basement totals include garage or multiple laundry locations.',
    'median_avg_sqft': 'Median and average floor area of new single-family houses completed, 1973-2025.',
    'outdoorfeatures': 'any_patio / any_porch / any_deck are derived sums of the combination columns.'}},
  'series': {}}
def add(tbl, geo, year, key, val):
    out['series'].setdefault(GEOKEY.get(geo, geo), {}).setdefault(str(int(year)), {})[key] = val
for tbl, labels in TABLES.items():
    s = xlrd.open_workbook(f'{tbl}.xls').sheet_by_index(0)
    n = len(labels); geo = None; yrs = []
    for r in range(s.nrows):
        c0, c1 = s.cell_value(r,0), str(s.cell_value(r,1)).strip()
        if c0 == '' and c1 in GEOS: geo = c1; continue
        if isinstance(c0, float) and geo:
            yrs.append(c0)
            add(tbl, geo, c0, f'houses_completed_thousands', num(s.cell_value(r,1)))
            for i, lab in enumerate(labels): add(tbl, geo, c0, lab, num(s.cell_value(r, s.ncols-n+i)))
            if tbl == 'outdoorfeatures':
                v = {lab: num(s.cell_value(r, s.ncols-n+i)) for i, lab in enumerate(labels)}
                f = lambda ks: None if any(v[k] is None for k in ks) else round(sum(v[k] for k in ks),1)
                add(tbl, geo, c0, 'any_patio', f(['patio_only','patio_and_porch','patio_and_deck','patio_porch_and_deck']))
                add(tbl, geo, c0, 'any_porch', f(['porch_only','patio_and_porch','porch_and_deck','patio_porch_and_deck']))
                add(tbl, geo, c0, 'any_deck', f(['deck_only','porch_and_deck','patio_and_deck','patio_porch_and_deck']))
            if tbl == 'parking':
                cp, ng = num(s.cell_value(r, s.ncols-2)), num(s.cell_value(r, s.ncols-1))
                add(tbl, geo, c0, 'any_garage', None if cp is None or ng is None else round(100-cp-ng,1))
    out['meta']['coverage'][tbl] = f'{int(min(yrs))}-{int(max(yrs))}'
# median / average sq ft sheet: cols 1-5 median (US,NE,MW,S,W), 6-10 average
s = xlrd.open_workbook('squarefeet.xls').sheet_by_name('SFTotalMedAvgSqFt')
for r in range(s.nrows):
    c0 = s.cell_value(r,0)
    if isinstance(c0, float):
        for i, g in enumerate(GEOS):
            add('sqft', g, c0, 'median_sqft', num(s.cell_value(r,1+i))); add('sqft', g, c0, 'average_sqft', num(s.cell_value(r,6+i)))
out['meta']['coverage']['median_avg_sqft'] = '1973-2025'
json.dump(out, open('census_soc_new_homes_by_region.json','w'), indent=1)
rows = [dict(geo=g, year=int(y), **v) for g, ys in out['series'].items() for y, v in ys.items()]
df = pd.DataFrame(rows).sort_values(['geo','year']); df.to_csv('census_soc_new_homes_by_region.csv', index=False)
print(json.dumps(out['meta']['coverage']))
pd.set_option('display.width',250)
print(df[df.geo=='US'][['year','median_sqft','average_sqft','basement_full_or_partial','any_garage','garage_2_car','carport','any_porch','any_deck','stories_2','with_ac','laundry_in_basement']].iloc[::4].to_string(index=False))
print(df[(df.year==2025)][['geo','median_sqft','basement_full_or_partial','any_garage','any_porch','any_patio','any_deck','stories_2','baths_3_plus']].to_string(index=False))
