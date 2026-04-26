function Checkmark() {
  return (
    <svg className="quest-check" viewBox="0 0 10 10" fill="none" stroke="white" strokeWidth="1.5">
      <polyline points="1.5,5 4,7.5 8.5,2.5" />
    </svg>
  );
}

export function CitiesTab({ cities, toggleCityQuest }) {
  return (
    <div className="cities-grid">
      {cities.map((city, idx) => {
        const prestige = [city.puzzleQuestDone, city.bounty1Done, city.bounty2Done].filter(Boolean).length;
        return (
          <div key={city.id} className="city-card">
            <div className="flex items-center justify-between mb-2">
              <div className="city-name" style={{ marginBottom: 0 }}>{city.name}</div>
              <div className="flex items-center gap-1">
                <span className="text-xs text-muted" style={{ marginRight: 2 }}>Prestige</span>
                <div className="prestige-pips">
                  {Array(3).fill(0).map((_, pi) => (
                    <div key={pi} className={`prestige-pip ${pi < prestige ? 'filled' : ''}`} />
                  ))}
                </div>
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
        );
      })}
    </div>
  );
}
