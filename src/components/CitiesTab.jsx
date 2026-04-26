import { MAX_PRESTIGE } from '../data/constants';

function Checkmark() {
  return (
    <svg className="quest-check" viewBox="0 0 10 10" fill="none" stroke="white" strokeWidth="1.5">
      <polyline points="1.5,5 4,7.5 8.5,2.5" />
    </svg>
  );
}

export function CitiesTab({ cities, setCityPrestige, toggleCityQuest }) {
  return (
    <div className="cities-grid">
      {cities.map((city, idx) => (
        <div key={city.id} className="city-card">
          <div className="city-name">{city.name}</div>

          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs text-muted">Prestige</span>
            <div className="prestige-pips">
              {Array(MAX_PRESTIGE).fill(0).map((_, pi) => (
                <div
                  key={pi}
                  className={`prestige-pip ${pi < city.prestige ? 'filled' : ''}`}
                  onClick={() => {
                    const newVal = pi < city.prestige ? pi : pi + 1;
                    setCityPrestige(idx, newVal - city.prestige);
                  }}
                />
              ))}
            </div>
          </div>

          {[
            { field: 'puzzleQuestDone', label: 'Puzzle quest' },
            { field: 'bounty1Done', label: 'Bounty 1' },
            { field: 'bounty2Done', label: 'Bounty 2' },
          ].map(({ field, label }) => (
            <div key={field} className="quest-row" onClick={() => toggleCityQuest(idx, field)}>
              <div className={`quest-box ${city[field] ? 'done' : ''}`}>
                {city[field] && <Checkmark />}
              </div>
              <span className={`quest-lbl ${city[field] ? 'done' : ''}`}>{label}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
