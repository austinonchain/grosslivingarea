'use client';
import { useState } from 'react';

// Square footage calculator: does the feature add to the house's GLA or not?
// counts=false: feature is reported separately (basements); the "total" line shows what listings often add up.
const fmt = (n) => Math.round(n).toLocaleString('en-US');
const parse = (v) => { const n = Number(String(v).replace(/[^0-9.]/g, '')); return Number.isFinite(n) && n > 0 ? n : 0; };

export default function Calculator({ featureLabel, counts = false, defaults = { feature: 800, house: 1800 }, separateLabel = 'below-grade finished area' }) {
  const [feature, setFeature] = useState(String(defaults.feature));
  const [house, setHouse] = useState(String(defaults.house));
  const f = parse(feature), h = parse(house);
  const gla = counts ? h + f : h;
  const total = h + f;
  const pct = h > 0 ? (f / h) * 100 : 0;
  return (
    <div className="rounded-xl border border-line bg-accent-soft/60 px-5 py-5 mb-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-[15px] font-medium">
          Square footage of the {featureLabel}
          <input inputMode="numeric" value={feature} onChange={(e) => setFeature(e.target.value)} className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-[17px] font-normal" />
        </label>
        <label className="block text-[15px] font-medium">
          Above-grade square footage of the house
          <input inputMode="numeric" value={house} onChange={(e) => setHouse(e.target.value)} className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-[17px] font-normal" />
        </label>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-3 text-[15px]">
        <div className="rounded-lg bg-white border border-line px-4 py-3">
          <div className="text-muted text-[13px]">Gross living area (ANSI)</div>
          <div className="text-[1.4rem] font-bold">{h || f ? fmt(gla) : '0'} sq ft</div>
        </div>
        <div className="rounded-lg bg-white border border-line px-4 py-3">
          <div className="text-muted text-[13px]">{counts ? 'Same as GLA' : `Reported separately as ${separateLabel}`}</div>
          <div className="text-[1.4rem] font-bold">{counts ? fmt(gla) : fmt(f)} sq ft</div>
        </div>
        <div className="rounded-lg bg-white border border-line px-4 py-3">
          <div className="text-muted text-[13px]">Total if the {featureLabel} were added</div>
          <div className="text-[1.4rem] font-bold">{fmt(total)} sq ft</div>
        </div>
      </div>
      <p className="mt-4 mb-0 text-[15px]">
        {counts
          ? <>The {featureLabel} <strong>counts</strong>, so the appraisal GLA is <strong>{fmt(gla)} square feet</strong>.</>
          : <>The {featureLabel} <strong>does not count</strong>. The appraisal GLA stays at <strong>{fmt(gla)} square feet</strong>. A listing that adds it in would show {fmt(total)}, which overstates the house by <strong>{h > 0 ? pct.toFixed(0) : '0'}%</strong>.</>}
      </p>
    </div>
  );
}
