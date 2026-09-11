import pandas as pd, numpy as np, json, re, openpyxl
REGION_NUM = {1:'Northeast',2:'Midwest',3:'South',4:'West'}
YEARS = {
  2009: dict(file='recs2009.csv', reps=None),
  2015: dict(file='recs2015.csv', reps=[f'BRRWT{i}' for i in range(1,97)]),
  2020: dict(file='recs2020.csv', reps=[f'NWEIGHT{i}' for i in range(1,61)]),
  2024: dict(file='recs2024.csv', reps=[f'NWEIGHT{i}' for i in range(1,61)]),
}
# 2009 reportable domains -> single states
cb = openpyxl.load_workbook('codebook2009.xlsx', read_only=True)['Codebook']
dom_labels = None
for r in cb.iter_rows(values_only=True):
    if r[0] and str(r[0]).strip() == 'REPORTABLE_DOMAIN':
        dom_labels = [x.strip() for x in str(r[3]).strip('\n').split('\n')]
ST = {'Massachusetts':'MA','New York':'NY','New Jersey':'NJ','Pennsylvania':'PA','Illinois':'IL','Michigan':'MI','Wisconsin':'WI','Missouri':'MO','Virginia':'VA','Georgia':'GA','North Carolina':'NC','South Carolina':'SC','Florida':'FL','Tennessee':'TN','Texas':'TX','Colorado':'CO','Arizona':'AZ','California':'CA','Washington':'WA','Oregon':'OR','Alabama':'AL','Kentucky':'KY','Mississippi':'MS'}
DOM2STATE = {i+1: ST[l] for i, l in enumerate(dom_labels) if l in ST}
print('2009 single-state domains:', sorted(DOM2STATE.values()))

def load(year):
    d = pd.read_csv(YEARS[year]['file'], low_memory=False)
    d.columns = [c.strip('"') for c in d.columns]
    if year == 2009:
        d['STORIES'] = d['STORIES'].map({10:1,20:2,31:3,32:4,40:5,50:99,-2:-2})
        d['state_postal'] = d['REPORTABLE_DOMAIN'].map(DOM2STATE)
        d['REGION'] = d['REGIONC'].map(REGION_NUM)
    elif year == 2015:
        d['STORIES'] = d['STORIES'].map({10:1,20:2,31:3,32:4,40:5,-2:-2})
        d['REGION'] = d['REGIONC'].map(REGION_NUM)
    else:
        d['REGION'] = d['REGIONC'].astype(str).str.strip().str.title()
    if 'NCOMBATH' not in d and 'NCOMBATH_PUB' in d: d['NCOMBATH'] = d['NCOMBATH_PUB']; d['NHAFBATH'] = d['NHAFBATH_PUB']
    return d

def make_est(reps):
    def est(sub, num, den_mask=None):
        den = sub if den_mask is None else sub[den_mask]
        numv = num.loc[den.index]
        def point(w):
            s = den[w].sum(); return np.nan if s == 0 else (den[w]*numv).sum()/s
        theta = point('NWEIGHT')
        if reps is None or np.isnan(theta): return theta, np.nan, len(den)
        R = len(reps); arr = np.array([point(w) for w in reps])
        se = np.sqrt(4/R * np.nansum((arr-theta)**2))
        return theta, (np.nan if theta == 0 else 100*se/abs(theta)), len(den)
    return est

def stats(sub, est):
    out = {'sample_n': int(len(sub)), 'homes_millions': round(sub['NWEIGHT'].sum()/1e6, 3)}
    has = lambda c: c in sub.columns
    def put(key, num, den=None, pct=True, digits=1):
        t, r, n = est(sub, num, den)
        if np.isnan(t) or n < 10 or (not np.isnan(r) and r > 50):
            out[key] = None; out[key+'_flag'] = 'Q' if n >= 10 else 'N'
        else:
            out[key] = round(100*t if pct else t, digits)
            if not np.isnan(r): out[key+'_rse'] = round(r, 1)
            out[key+'_n'] = n
    ok = lambda c: sub[c] >= 0
    put('avg_total_sqft', sub['TOTSQFT_EN'], pct=False, digits=0)
    put('avg_heated_sqft', sub['TOTHSQFT'], pct=False, digits=0)
    put('avg_cooled_sqft', sub['TOTCSQFT'], pct=False, digits=0)
    put('pct_single_family', sub['TYPEHUQ'].isin([2,3])); put('pct_detached', sub['TYPEHUQ'].eq(2))
    put('pct_basement', sub['CELLAR'].eq(1))
    put('pct_basement_finished_of_basements', sub['BASEFIN'].eq(1), sub['CELLAR'].eq(1) & ok('BASEFIN'))
    put('pct_finished_basement_all_homes', sub['BASEFIN'].eq(1))
    if has('BASEHEAT'): put('pct_basement_heated_of_basements', sub['BASEHEAT'].eq(1), sub['CELLAR'].eq(1) & ok('BASEHEAT'))
    if has('SQFTINCB'): put('pct_owners_count_basement_in_sqft', sub['SQFTINCB'].eq(1), sub['CELLAR'].eq(1) & ok('SQFTINCB'))
    put('pct_attic', sub['ATTIC'].eq(1))
    put('pct_attic_finished_of_attics', sub['ATTICFIN'].eq(1), sub['ATTIC'].eq(1) & ok('ATTICFIN'))
    if has('SQFTINCA'): put('pct_owners_count_attic_in_sqft', sub['SQFTINCA'].eq(1), sub['ATTIC'].eq(1) & ok('SQFTINCA'))
    put('pct_attached_garage', sub['PRKGPLC1'].eq(1))
    for k, v in [('1car',1),('2car',2),('3plus_car',3)]:
        put(f'pct_garage_{k}_of_garages', sub['SIZEOFGARAGE'].eq(v), sub['PRKGPLC1'].eq(1) & ok('SIZEOFGARAGE'))
    if has('SQFTINCG'): put('pct_owners_count_garage_in_sqft', sub['SQFTINCG'].eq(1), sub['PRKGPLC1'].eq(1) & ok('SQFTINCG'))
    for k, v in [('1',[1]),('2',[2]),('3plus',[3,4]),('split_level',[5])]:
        put(f'pct_stories_{k}', sub['STORIES'].isin(v), ok('STORIES'))
    if has('EQUIPM'):
        put('pct_heat_furnace', sub['EQUIPM'].eq(3)); put('pct_heat_central_heat_pump', sub['EQUIPM'].eq(4))
        put('pct_heat_mini_split', sub['EQUIPM'].eq(13)); put('pct_no_heating', sub['EQUIPM'].eq(-2))
    if has('NCOMBATH'):
        put('avg_full_baths', sub['NCOMBATH'], pct=False, digits=2); put('pct_2plus_full_baths', sub['NCOMBATH'].ge(2))
    return out

out = {'meta': {
  'source': 'EIA Residential Energy Consumption Survey public microdata: 2009 (12,083 homes, no replicate weights -> no RSE), 2015 (5,686, BRRWT1-96), 2020 (18,496, NWEIGHT1-60), 2024 v1 (16,676, NWEIGHT1-60; heating/AC variables not yet released, due spring 2027)',
  'universes': {'sf': 'single-family detached + attached', 'all': 'all occupied housing units'},
  'geography': 'US + 4 Census regions every year; states for 2020 and 2024 (all 50 + DC); 2009 only for the states RECS reported individually; 2015 has no state or sub-region identifiers',
  'flags': 'null + _flag Q = RSE > 50%, N = fewer than 10 sample homes. pct_owners_count_* = share of respondents WITH the feature who included it in self-reported sq ft (2020, 2024 only)',
  'computed': '2026-09-11 by recs_multi_year.py',
  'series_breaks': 'Square footage: 2020 RECS switched to respondent-reported size with a new adjustment method, so avg_*_sqft is NOT comparable 2015 -> 2020; graph 2020+ only or annotate the break. Attic presence: question wording changed after 2009 (35.9% -> 56.1% nationally), treat 2009 attic share as not comparable. Basement, finished basement, attached garage, garage size and stories are stable across all four years.'},
  'series': {}, 'states': {}}
for year, cfg in YEARS.items():
    d = load(year); est = make_est(cfg['reps']); sf_mask = d['TYPEHUQ'].isin([2,3])
    geo = {'US': d, **{r: d[d['REGION']==r] for r in REGION_NUM.values()}}
    for g, sub in geo.items():
        out['series'].setdefault(g, {})[str(year)] = {'all': stats(sub, est), 'sf': stats(sub[sf_mask.loc[sub.index]], est)}
    if 'state_postal' in d:
        for st, sub in d[d['state_postal'].notna()].groupby('state_postal'):
            out['states'].setdefault(st, {})[str(year)] = {'all': stats(sub, est), 'sf': stats(sub[sf_mask.loc[sub.index]], est)}
    print(year, 'done; regions:', sorted(d['REGION'].dropna().unique()))
json.dump(out, open('recs_state_feature_stats_multi_year.json','w'), indent=1)

# flat CSVs
def flat(block, keys):
    rows = []
    for k1, yrs in block.items():
        for y, v in yrs.items():
            r = {keys[0]: k1, 'year': int(y)}; r.update({k: x for k, x in v['sf'].items() if not k.endswith(('_rse','_n','_flag'))}); rows.append(r)
    return pd.DataFrame(rows)
flat(out['series'], ['geo']).to_csv('recs_series_us_regions_sf.csv', index=False)
flat(out['states'], ['state']).to_csv('recs_states_by_year_sf.csv', index=False)

# checks against EIA published 2024 state highlights (all homes)
def st_row(f, st):
    ws = openpyxl.load_workbook(f, read_only=True)['data']
    for r in ws.iter_rows(values_only=True):
        if r[0] and str(r[0]).strip() == st: return r
oh = out['states']['OH']['2024']['all']
print('OH 2024 mine: homes', oh['homes_millions'], 'basement%', oh['pct_basement'], 'avg sqft', oh['avg_total_sqft'], oh['avg_heated_sqft'], oh['avg_cooled_sqft'])
print('OH 2024 EIA structural row:', [x for x in st_row('STstructural_2024.xlsx','Ohio') if x is not None][:8])
print('OH 2024 EIA sqft row:', [x for x in st_row('STsquareFootage_2024.xlsx','Ohio') if x is not None])
