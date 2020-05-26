export default {
  name: 'Avians',
  traits: [
    { id: 'movement+9', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'size+medium', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'language+1', quantity: 1, overwriteName: false, name: '', overwriteDescription: true, description: 'You speak Auran, in addition to Common', extra: null },
    { id: 'language+choice', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'asi+3', quantity: 1, overwriteName: true, name: 'Ability Score Increase', overwriteDescription: true, description: 'Increase your Dexterity Score by 2, and your Wisdom Score by 1', extra: null },
    { id: 'darkvision+18', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'enhanced-agility', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'mimicry', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'strike+unarmed1d4', quantity: 1, overwriteName: true, name: 'Talons', overwriteDescription: false, description: '', extra: 'The damage type is Slashing' }
  ],
  ranges: {
    age: { min: 12, max: 60 },
    height: { min: 1.3, max: 1.7 },
    weight: { min: 25, max: 65 },
    names: { female: 'italian-female', male: 'italian-male' }
  },
  fluff: [
    { title: 'Flightless Birdfolk', description: 'Avians were created when Artra, in the form of different birds, coupled with humans. Although the Avians did not inherit the ability to fly, their lighter bones and muscles mean that Avians have an incredible burst speed.' },
    { title: 'Fashionistas', description: 'Avians have a love for shiny objects, and endeavour to cover themselves in trinkets and colours. They especially love to wear the crystals mined from Crystalis as a fashion statement, much to the ire of the Locanth peoples who claim the crystal caverns as home and sacred. They also love music and poetry, and display a remarkable ability to mimic any sound that they have heard.' },
    { title: 'Desert Dwellers', description: 'While Avians can be found throughout the world, they are mainly centered around the Azia Desert. They hunt at night, due to being able to see in the dark and being excellent ambushers.' }
  ]
}
