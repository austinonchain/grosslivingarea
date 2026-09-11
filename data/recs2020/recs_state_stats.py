import pandas as pd, numpy as np, json
df = pd.read_csv('recs2020.csv')
REP = [f'NWEIGHT{i}' for i in range(1,61)]
assert all(c in df.columns for c in REP)

def est(sub, mask_num, mask_den=None):
    """weighted proportion (or mean if mask_num is a value series) with Fay BRR RSE."""
    den = sub if mask_den is None else sub[mask_den]
    num_mask = mask_num.loc[den.index]
    def point(w):
        d = den[w].sum()
        return np.nan if d == 0 else (den[w] * num_mask).sum() / d
    theta = point('NWEIGHT')
    reps = np.array([point(w) for w in REP])
    se = np.sqrt(4/60 * np.nansum((reps - theta)**2))   # Fay's k=0.5, R=60
    rse = np.nan if (theta == 0 or np.isnan(theta)) else 100*se/abs(theta)
    return theta, rse, int(len(den))

def wmedian(sub, col):
    s = sub[[col,'NWEIGHT']].sort_values(col)
    c = s['NWEIGHT'].cumsum(); return float(s[col][c >= c.iloc[-1]/2].iloc[0])

def stats(sub):
    out = {}
    out['sample_n'] = int(len(sub))
    out['homes_millions'] = round(sub['NWEIGHT'].sum()/1e6, 3)
    def put(key, mask_num, mask_den=None, pct=True, digits=1):
        t, r, n = est(sub, mask_num, mask_den)
        if np.isnan(t) or n < 10 or (not np.isnan(r) and r > 50):
            out[key] = None; out[key+'_flag'] = 'Q' if n >= 10 else 'N'
        else:
            out[key] = round(100*t if pct else t, digits); out[key+'_rse'] = round(r,1); out[key+'_n'] = n
    ok = lambda c: (sub[c] >= 0)
    # sizes
    put('avg_total_sqft', sub['TOTSQFT_EN'], pct=False, digits=0)
    put('avg_heated_sqft', sub['TOTHSQFT'], pct=False, digits=0)
    put('avg_cooled_sqft', sub['TOTCSQFT'], pct=False, digits=0)
    out['median_total_sqft'] = wmedian(sub, 'TOTSQFT_EN')
    put('pct_single_family', sub['TYPEHUQ'].isin([2,3]))
    put('pct_detached', sub['TYPEHUQ'].eq(2))
    # basement
    put('pct_basement', sub['CELLAR'].eq(1))
    put('pct_basement_finished_of_basements', sub['BASEFIN'].eq(1), sub['CELLAR'].eq(1) & ok('BASEFIN'))
    put('pct_basement_heated_of_basements', sub['BASEHEAT'].eq(1), sub['CELLAR'].eq(1) & ok('BASEHEAT'))
    put('pct_basement_cooled_of_basements', sub['BASECOOL'].eq(1), sub['CELLAR'].eq(1) & ok('BASECOOL'))
    put('pct_finished_basement_all_homes', sub['BASEFIN'].eq(1))
    put('pct_owners_count_basement_in_sqft', sub['SQFTINCB'].eq(1), sub['CELLAR'].eq(1) & ok('SQFTINCB'))
    # attic
    put('pct_attic', sub['ATTIC'].eq(1))
    put('pct_attic_finished_of_attics', sub['ATTICFIN'].eq(1), sub['ATTIC'].eq(1) & ok('ATTICFIN'))
    put('pct_attic_heated_of_attics', sub['ATTCHEAT'].eq(1), sub['ATTIC'].eq(1) & ok('ATTCHEAT'))
    put('pct_owners_count_attic_in_sqft', sub['SQFTINCA'].eq(1), sub['ATTIC'].eq(1) & ok('SQFTINCA'))
    # garage
    put('pct_attached_garage', sub['PRKGPLC1'].eq(1))
    for k,v in [('1car',1),('2car',2),('3plus_car',3)]:
        put(f'pct_garage_{k}_of_garages', sub['SIZEOFGARAGE'].eq(v), sub['PRKGPLC1'].eq(1) & ok('SIZEOFGARAGE'))
    put('pct_owners_count_garage_in_sqft', sub['SQFTINCG'].eq(1), sub['PRKGPLC1'].eq(1) & ok('SQFTINCG'))
    # stories
    for k,v in [('1',[1]),('2',[2]),('3plus',[3,4]),('split_level',[5])]:
        put(f'pct_stories_{k}', sub['STORIES'].isin(v), ok('STORIES'))
    # heating / cooling
    put('pct_heat_furnace', sub['EQUIPM'].eq(3), ); put('pct_heat_central_heat_pump', sub['EQUIPM'].eq(4))
    put('pct_heat_mini_split', sub['EQUIPM'].eq(13)); put('pct_heat_boiler', sub['EQUIPM'].eq(2))
    put('pct_heat_electric_baseboard', sub['EQUIPM'].eq(5)); put('pct_no_heating', sub['EQUIPM'].eq(-2))
    put('pct_ac_central', sub['ACEQUIPM_PUB'].eq(1)); put('pct_ac_mini_split', sub['ACEQUIPM_PUB'].eq(3))
    put('pct_ac_window', sub['ACEQUIPM_PUB'].eq(4)); put('pct_no_ac', sub['ACEQUIPM_PUB'].eq(-2))
    # baths
    put('avg_full_baths', sub['NCOMBATH'], pct=False, digits=2)
    put('avg_half_baths', sub['NHAFBATH'], pct=False, digits=2)
    put('pct_2plus_full_baths', sub['NCOMBATH'].ge(2))
    # age
    put('pct_built_2000_or_later', sub['YEARMADERANGE'].ge(7))
    put('pct_built_before_1950', sub['YEARMADERANGE'].eq(1))
    # climate
    w = sub.groupby('BA_climate')['NWEIGHT'].sum(); out['climate_zone_main'] = w.idxmax(); out['climate_zone_main_pct'] = round(100*w.max()/w.sum(),1)
    w = sub.groupby('IECC_climate_code')['NWEIGHT'].sum(); out['iecc_zone_main'] = w.idxmax()
    return out

names = pd.read_excel('codebook.xlsx', sheet_name='state_dictionary', header=None)
result = {'meta': {
    'source': 'EIA Residential Energy Consumption Survey 2020, public microdata v7 (18,496 homes), Fay BRR (k=0.5, 60 replicates) for RSE',
    'universes': {'sf': 'single-family homes (detached + attached)', 'all': 'all occupied housing units'},
    'flags': 'null + _flag Q = RSE>50%, N = fewer than 10 sample homes; pct_owners_count_* = share of respondents WITH that feature who included it in their reported square footage',
}, 'states': {}}
sf = df[df['TYPEHUQ'].isin([2,3])]
result['US'] = {'all': stats(df), 'sf': stats(sf)}
for st, g in df.groupby('state_postal'):
    result['states'][st] = {'all': stats(g), 'sf': stats(sf[sf['state_postal']==st])}
json.dump(result, open('recs2020_state_feature_stats.json','w'), indent=1)
# flat CSV of single-family universe
rows = []
for st, v in [('US', result['US'])] + list(result['states'].items()):
    r = {'state': st}; r.update({k: x for k, x in v['sf'].items() if not k.endswith(('_rse','_n','_flag'))}); rows.append(r)
pd.DataFrame(rows).to_csv('recs2020_state_feature_stats_sf.csv', index=False)
oh = result['states']['OH']['all']
print('OHIO all-homes check vs EIA published (4.74M homes, 60% basement, avg 2013 total / 1843 heated / 1540 cooled):')
print(oh['homes_millions'], oh['pct_basement'], oh['avg_total_sqft'], oh['avg_heated_sqft'], oh['avg_cooled_sqft'])
print('states:', len(result['states']))
