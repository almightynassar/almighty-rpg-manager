export default {
  id: 'locanth',
  singular: 'Locanth',
  adjective: 'Locanth',
  plural: 'Locanth',
  name: 'Locanth (Fishfolk)',
  traits: [
    { id: 'movement+7.5', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'swim+9', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'size+medium', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'language+1', quantity: 1, overwriteName: false, name: '', overwriteDescription: true, description: 'You speak Aquan, in addition to Common', extra: null },
    { id: 'asi+3', quantity: 1, overwriteName: true, name: 'Ability Score Increase', overwriteDescription: true, description: 'Increase your Wisdom Score by 2, and your Dexterity Score by 1', extra: null },
    { id: 'amphibious', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'darkvision+18', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'resistance+uncommon', quantity: 1, overwriteName: true, name: 'Cold Resistance', overwriteDescription: false, description: '', extra: 'You can also withstand an deep sea environment.' },
    { id: 'armour+13', quantity: 1, overwriteName: true, name: 'Thick Scales', overwriteDescription: false, description: '', extra: null }
  ],
  ranges: {
    age: { min: 3, max: 50 },
    height: { min: 0.8, max: 1 },
    weight: { min: 15, max: 25 },
    names: { female: 'chineseFemale', male: 'chineseMale' }
  },
  fluff: [
    { title: 'Deep Sea Fishfolk', description: 'Locanths were created when Baltha, in the form of different fish, coupled with humans in a competition with Artra. The Locanth look more fish-like than their bretheren, and inherited the ability to survive the ocean depths. The Locanth city of Ocearus is the only underwater city in the world.' },
    { title: 'Conformists', description: 'The Locanth are noted to be generally conformist and do not go out of their way to cause a fuss. Both the Mermen and Dwarves employ Locanth on their trading ships as reliable labour.' },
    { title: 'Tireless Navigators', description: '"A Locanth is never lost" is a common saying on Terrea. The city of Ocearus is known to have countless navigational and star charts, and many Locanth claim that they were the first to circumnavigate the globe.' }
  ]
}
