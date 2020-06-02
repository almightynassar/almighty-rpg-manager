export default {
  id: 'shifter-avians',
  singular: 'Shifter',
  adjective: 'Shifter',
  plural: 'Shifters',
  name: 'Shifters (Avians)',
  traits: [
    { id: 'movement+9', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'size+medium', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'language+choice', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'asi+2', quantity: 1, overwriteName: true, name: 'Ability Score Increase', overwriteDescription: true, description: 'Increase your Dexterity Score by 2', extra: null },
    { id: 'asi+1choice', quantity: 1, overwriteName: true, name: 'ASI Choice', overwriteDescription: true, description: 'Increase one Ability Score of your choice (other than Dexterity) by 1', extra: null },
    { id: 'enhanced-agility', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'skill+choice', quantity: 1, overwriteName: true, name: 'Skill Choice', overwriteDescription: true, description: 'You are proficient in one skill of your choice (other than the skills listed in Skilled Ambusher)', extra: null },
    { id: 'skill+limited', quantity: 1, overwriteName: true, name: 'Skilled ambusher', overwriteDescription: true, description: 'You can choose one of the following skills: acrobatics, deception, persuasion, stealth', extra: null }
  ],
  ranges: {
    age: { min: 15, max: 80 },
    height: { min: 1.3, max: 1.8 },
    weight: { min: 40, max: 80 },
    names: { female: 'frenchFemale', male: 'frenchMale' }
  },
  fluff: [
    { title: 'Hybrid', description: 'The offspring of a Human and an Avian.' }
  ]
}
