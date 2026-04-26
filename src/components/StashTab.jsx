import { useState } from 'react';
import { MATERIAL_CATEGORIES } from '../data/materials';
import { CITIES } from '../data/constants';

const DEST_TYPES = ['— unassigned —', 'City', 'Resource node', 'Enemy node'];

export function StashTab({ stash, adjustStash, stonebound, setStoneboundMax, setStoneboundSlot }) {
  const [search, setSearch] = useState('');

  const cityNames = CITIES.map(c => c.name);

  function destTypeColor(type) {
    if (!type || type === '— unassigned —') return '';
    if (cityNames.some(c => c === type) || type === 'City') return 'city';
    return 'node';
  }

  return (
    <>
      {/* Stonebound */}
      <div className="card mb-3">
        <div className="flex items-center justify-between mb-2">
          <div className="font-medium" style={{ fontSize: 13 }}>Stonebound</div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted">Total cubes:</span>
            <button className="adj-btn" style={{ width: 24, height: 24, fontSize: 14 }} onClick={() => setStoneboundMax(-1)}>−</button>
            <span className="adj-val" style={{ fontSize: 14 }}>{stonebound.max}</span>
            <button className="adj-btn" style={{ width: 24, height: 24, fontSize: 14 }} onClick={() => setStoneboundMax(1)}>+</button>
          </div>
        </div>
        <div className="sb-grid">
          {stonebound.slots.map((slot, i) => {
            const typeColor = destTypeColor(slot.type || slot.destination);
            return (
              <div key={i} className="sb-slot">
                <div className="sb-slot-num">Cube {i + 1}</div>
                <input
                  className="sb-input"
                  value={slot.destination}
                  onChange={e => setStoneboundSlot(i, 'destination', e.target.value)}
                  placeholder="— unassigned —"
                  autoComplete="off"
                />
                <select
                  className="sb-type-select"
                  value={slot.type || ''}
                  onChange={e => setStoneboundSlot(i, 'type', e.target.value)}
                  style={{ color: slot.type ? (slot.type === 'City' ? 'var(--c-purple)' : 'var(--c-green)') : 'var(--c-text3)' }}
                >
                  <option value="">— type —</option>
                  <option value="City">City</option>
                  <option value="Resource node">Resource node</option>
                  <option value="Enemy node">Enemy node</option>
                </select>
              </div>
            );
          })}
        </div>
      </div>

      {/* Stash */}
      <div className="card">
        <div className="font-medium mb-2" style={{ fontSize: 13 }}>Fort Istra stash</div>
        <input
          className="stash-search"
          type="text"
          placeholder="Search materials…"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        {MATERIAL_CATEGORIES.map(cat => {
          const items = cat.items.filter(item =>
            search.length === 0 || item.toLowerCase().includes(search.toLowerCase())
          );
          if (items.length === 0) return null;
          return (
            <div key={cat.id} className="mb-3">
              <div className="sec-label">{cat.label}</div>
              <div className="stash-items">
                {items.map(item => (
                  <div key={item} className="stash-item">
                    <span className="stash-item-name">{item}</span>
                    <div className="stash-qty-row">
                      <button className="stash-qty-btn" onClick={() => adjustStash(item, -1)}>−</button>
                      <span className="stash-qty-val">{stash[item] ?? 0}</span>
                      <button className="stash-qty-btn" onClick={() => adjustStash(item, 1)}>+</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
