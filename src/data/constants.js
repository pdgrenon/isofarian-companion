export const CITIES = [
  { id: 'mir', name: 'Mir' },
  { id: 'razdor', name: 'Razdor' },
  { id: 'ryba', name: 'Ryba' },
  { id: 'silny', name: 'Silny' },
  { id: 'strofa', name: 'Strofa' },
  { id: 'vouno', name: 'Vouno' },
];

export const GUARDS = [
  'Alek', 'Grigory', 'Dasha', 'Zoya', 'Borya', 'Mila', 'Seva', 'Kira',
];

export const CHIP_TYPES = [
  { id: 'black', label: 'Black', color: 'chip-black' },
  { id: 'green', label: 'Green', color: 'chip-green' },
  { id: 'red', label: 'Red', color: 'chip-red' },
  { id: 'weaken', label: 'Weaken', color: 'chip-purple' },
  { id: 'break', label: 'Break', color: 'chip-purple' },
  { id: 'freeze', label: 'Freeze', color: 'chip-purple' },
  { id: 'poison', label: 'Poison', color: 'chip-purple' },
  { id: 'corrupt', label: 'Corrupt', color: 'chip-purple' },
];

export const SATCHEL_SIZE = 4;
export const SATCHEL_EXPANDED_SIZE = 8;
export const MAX_HP = 20;
export const MAX_AP = 5;
export const MAX_STONES = 4;
export const MAX_PRESTIGE = 3;

function makeGuard(name) {
  return {
    name,
    hp: MAX_HP,
    maxHp: MAX_HP,
    apGray: 3,
    apTemp: 0,
    expandedSatchel: false,
    satchel: Array(SATCHEL_EXPANDED_SIZE).fill(null).map(() => ({ item: '', qty: 1 })),
    equipment: { weapon: '', armor: '', accessory: '', item: '' },
    stones: Array(MAX_STONES).fill(null).map(() => ({ state: 'ready', cooldownRound: null })),
    chips: { black: 8, green: 0, red: 0, weaken: 0, break: 0, freeze: 0, poison: 0, corrupt: 0 },
    startingBlack: 8,
  };
}

function makeCity(id, name) {
  return {
    id, name,
    prestige: 0,
    puzzleQuestDone: false,
    bounty1Done: false,
    bounty2Done: false,
  };
}

export function createInitialState() {
  return {
    sil: 0,
    lux: 0,
    round: 1,
    campaign: 1,
    guards: [makeGuard('Alek'), makeGuard('Grigory')],
    cities: CITIES.map(c => makeCity(c.id, c.name)),
    stash: {},
    stonebound: { max: 4, slots: Array(4).fill(null).map(() => ({ destination: '', type: '' })) },
    log: [],
    settings: { initialized: true },
  };
}
