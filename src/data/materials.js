export const MATERIAL_CATEGORIES = [
  {
    id: 'ores',
    label: 'Ores',
    items: ['Iron', 'Silver', 'Gold', 'Agate', 'Crystal', 'Diamond'],
  },
  {
    id: 'timber',
    label: 'Timber',
    items: ['Pine', 'Rosewood', 'Ash', 'Autumn Blaze', 'Dogwood', 'Cedar', 'Cherry', 'Ancient Oak'],
  },
  {
    id: 'animal',
    label: 'Animal drops',
    items: [
      'Metal Frag.', 'Bone Frag.', 'Feathers', 'Wolf Pelt', 'Rough Leather',
      'Animal Hide', 'Claw', 'Bear Pelt', 'Horn', 'Spines', 'Scales', 'Carapace',
    ],
  },
  {
    id: 'tenebris',
    label: 'Tenebris drops',
    items: ['Tenebris Shards', 'Tenebris Skull', 'Tenebris Essence'],
  },
  {
    id: 'fish',
    label: 'Fish & food',
    items: [
      'Dusk Tuna', 'Emerald Koi', 'Foxtail Carp', 'Amethyst Trout',
      'Ryba Blue Fins', 'Golden Potato', 'Clayhorn Steak', 'Mir Bread',
    ],
  },
  {
    id: 'market',
    label: 'Market & misc',
    items: ['Health Potion', 'Tent'],
  },
  {
    id: 'special',
    label: 'Special ingredients',
    items: [
      'Coastal Bluecaps', 'Midnight Hydrangea', 'Falmundia Rosehips',
      'Purifying Seed', 'Ancient Roots', 'Jade', 'Onyx', 'Black Diamond',
    ],
  },
];

export const ALL_MATERIALS = MATERIAL_CATEGORIES.flatMap(c => c.items).sort();

export const WEAPONS = [
  'Alloy Driver', 'Alloy Hand Axes', 'Alloy Short Sword', 'Argent Blade',
  'Bleeding Heart Dagger', 'Cerulean Pike', 'Cerulean Staff', 'Contorted Staff',
  'Dangerous Duo', 'Drakonbow', 'Euphonic Edge', 'Falmundian Bow', 'Final Wish',
  "Forteller's Staff", 'Glorious', 'Golden Mallet', 'Golden Scythe', 'Ground Shaker',
  'Guardian Lance', "Hunter's Pride", "Hunter's Spear", 'Jade Sword', 'Lapis Blade',
  "Magi's Command", 'Ornate Cleavers', 'Partisan', 'Radiance', 'Reckoning Tides',
  'Relic Glove', 'Revelation', 'Rosewind Staff', 'Ryban Glaive', 'Scaled Dagger',
  'Silver Bow', 'Silver Flame', 'Silver Hammer', 'Sky Splitter', 'Star Blade',
  'Swift Gale', 'Sword of Isofar', 'Sword of Truth', "Vanguard's Promise",
  'Volk Blade', 'Wind Cutters',
];

export const ARMOR = [
  "Adventurer's Garb", 'Bear Tunic', 'Bone Armor', 'Brigandine',
  "Brother's Keeper", 'Crimson Vest', 'Drakondor Armor', "Guard's Armor",
  "Guard's Tunic", 'Guild Cuirass', "Hero's Armor", 'Horned Cuirass',
  "Hunter's Tunic", 'Journey Attire', "Prophet's Jacket", 'Raiding Armor',
  'Red Scale Armor', 'Reinforced Tunic', "Scholar's Tunic", 'Stardust Jacket',
  'Tenebris Scale', 'Tunic of the Wild', "Veteran's Coat", 'Volkrok Tunic',
  'Wanderer of the Fields', 'Woven Spine Armor', "Zephyr's Tunic",
];

export const ACCESSORIES = [
  'Aegis Shield', 'Carapace Helmet', 'Chrono Locket', 'Chronos Boots',
  'Cleansing Amulet', 'Concealing Cloak', 'Feathered Mantle', 'Goat Skull Mask',
  'Leather Gauntlets', "Nomad's Trap", 'Pendant of Wisdom', 'Power Belt',
  'Scale Shield', 'Stonebound Talisman', 'Traveling Boots', 'Twilight Guantlet',
  'Wolf Head Tunic', 'Wolf Tooth Ring',
];

export const ITEMS = [
  'Barrier Tonic', 'Bottled Courage', 'Expanded Satchel', 'Invigorating Potion',
  'Purifying Dust', 'Ruinous Dust', 'Smoke Bomb', 'Tent', "Zoya's Elixir",
];
