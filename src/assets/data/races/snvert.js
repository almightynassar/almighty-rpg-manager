export default {
  id: 'snvert',
  singular: 'Snvert',
  adjective: 'Snvert',
  plural: 'Snvert',
  name: 'Snvert (Ice Gnomes)',
  traits: [
    { id: 'movement+7.5', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'climb+7.5', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'size+small', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'language+1', quantity: 1, overwriteName: false, name: '', overwriteDescription: true, description: 'You speak Snvert, in addition to Common', extra: null },
    { id: 'asi+3', quantity: 1, overwriteName: true, name: 'Ability Score Increase', overwriteDescription: true, description: 'Increase your Intelligence Score by 2, and your Dexterity Score by 1', extra: null },
    { id: 'expertise', quantity: 1, overwriteName: true, name: 'Artificer Lore', overwriteDescription: true, description: 'Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.', extra: null },
    { id: 'advantage+common', quantity: 2, overwriteName: true, name: 'Cunning', overwriteDescription: true, description: 'You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.', extra: null },
    { id: 'darkvision+18', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'tool', quantity: 1, overwriteName: false, name: '', overwriteDescription: true, description: 'You are proficient in a tool of your choice', extra: null }
  ],
  ranges: {
    age: { min: 40, max: 400 },
    height: { min: 0.8, max: 1.1 },
    weight: { min: 15, max: 20 },
    names: { female: 'welshFemale', male: 'welshMale' }
  },
  fluff: [
    { title: 'Home among the Ice', description: 'The icy continent of Snvert is where the Snvert race calls home. They learned how to hide from the dangerous Frost Trolls and the Orc raids, and created an incredible techological city of Snvert among the base of the mountains.' },
    { title: 'Technologists', description: 'The Snvert discovered the Primordial ruin of Berylnn among the ice, and instantly the Snvert learned all they could about the technological wonders held within. They built their whole society around these devices, to the point that many Snvert worry about what will happen if the elemental essence ever runs out.' }
  ]
}
