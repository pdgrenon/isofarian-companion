export const MATERIAL_CATEGORIES = [
  {
    id: 'ores',
    label: 'Ores',
    items: [
      'Iron Ore', 'Copper Ore', 'Silver Ore', 'Gold Ore',
      'Darkstone', 'Moonstone', 'Sunstone', 'Crystal Shard',
    ],
  },
  {
    id: 'timber',
    label: 'Timber',
    items: [
      'Pine', 'Oak', 'Birch', 'Ash', 'Ironwood', 'Ebonwood',
    ],
  },
  {
    id: 'animal',
    label: 'Animal drops',
    items: [
      'Bone Fragments', 'Claw', 'Rough Leather', 'Animal Hide',
      'Bear Pelt', 'Horn', 'Fang', 'Scale', 'Feather', 'Chitin',
      'Silk Thread', 'Venom Gland',
    ],
  },
  {
    id: 'tenebris',
    label: 'Tenebris drops',
    items: [
      'Tenebris Shards', 'Tenebris Skull', 'Tenebris Dust',
      'Corrupted Essence', 'Void Crystal',
    ],
  },
  {
    id: 'fish',
    label: 'Fish',
    items: [
      'Dusk Tuna', 'Emerald Koi', 'Foxtail Carp',
      'Ironscale Bass', 'Ghostfin',
    ],
  },
  {
    id: 'consumables',
    label: 'Consumables & misc',
    items: [
      'Health Potion', 'Tent', 'Golden Potato',
      'Antidote', 'Smoke Bomb', 'Rope', 'Torch',
    ],
  },
];

export const ALL_MATERIALS = MATERIAL_CATEGORIES.flatMap(c => c.items).sort();
