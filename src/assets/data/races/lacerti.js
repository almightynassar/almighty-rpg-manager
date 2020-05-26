export default {
  id: 'lacerti',
  singular: 'Lacertian',
  adjective: 'Lacertian',
  plural: 'Lacerti',
  name: 'Lacerti (Lizardfolk)',
  traits: [
    { id: 'movement+9', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'swim+9', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'size+medium', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'language+1', quantity: 1, overwriteName: false, name: '', overwriteDescription: true, description: 'You speak Draconian, in addition to Common', extra: null },
    { id: 'asi+3', quantity: 1, overwriteName: true, name: 'Ability Score Increase', overwriteDescription: true, description: 'Increase your Strength Score by 2, and your Dexterity Score by 1', extra: null },
    { id: 'strike+unarmed1d6', quantity: 1, overwriteName: true, name: 'Bite', overwriteDescription: false, description: '', extra: 'The damage type is Piercing' },
    { id: 'breath+15', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'hungry-jaws', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'armour+13', quantity: 1, overwriteName: true, name: 'Scaly Skin', overwriteDescription: false, description: '', extra: null },
    { id: 'extra-appendage', quantity: 1, overwriteName: true, name: 'Tail', overwriteDescription: false, description: '', extra: null }
  ],
  ranges: {
    age: { min: 14, max: 60 },
    height: { min: 1.5, max: 2 },
    weight: { min: 55, max: 160 },
    names: { female: 'akkadian', male: 'akkadian' }
  },
  fluff: [
    { title: 'Badland Wanderers', description: 'The Lacerti were created when Artra, in the form of different reptiles, coupled with humans. Lacertian thoughts are alien to the other races, and caused widespread unease. Eventually, many Lacerti decided to find a land of their own and underwent a pilgrammage that took them past Phalanxis and Al-Khaleeri. They eventually settled on the hot plains of the Naati Badlands.' },
    { title: 'Competent Warriors', description: 'The Lacerti are a competitive race, and make capable warriors and hunters. Their win-at-all-cost attitude has often put them at odds with the other races' },
    { title: 'Caste-based society', description: 'The nation of Illumi Naati was formed by humans and lacerti, and is segregated into different castes. Pure humans and lacerti are the lowest caste, while the lacinum are the highest.' }
  ]
}
