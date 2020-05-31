export default {
  id: 'lacinum',
  singular: 'Lacin',
  adjective: 'Lacinum',
  plural: 'Lacinum',
  name: 'Lacinum (Eugenic Lizardfolk)',
  traits: [
    { id: 'movement+9', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'swim+9', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'size+medium', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'language+1', quantity: 1, overwriteName: false, name: '', overwriteDescription: true, description: 'You speak Draconian, in addition to Common', extra: null },
    { id: 'language+choice', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'asi+3', quantity: 1, overwriteName: true, name: 'Ability Score Increase', overwriteDescription: true, description: 'Increase your Charisma Score by 2, and your Strength Score by 1', extra: null },
    { id: 'breath+15', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'expertise', quantity: 1, overwriteName: true, name: 'Lie Detector', overwriteDescription: true, description: 'Whenever you make an Wisdom (Insight) check related to determining whether a character is lying to you, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.', extra: null },
    { id: 'armour+12', quantity: 1, overwriteName: true, name: 'Scaly Skin', overwriteDescription: false, description: '', extra: null },
    { id: 'skill+choice', quantity: 1, overwriteName: true, name: 'Skill Diversity', overwriteDescription: true, description: 'You can choose a skill that is not on the Trained Diplomat skill list', extra: null },
    { id: 'skill+limited', quantity: 1, overwriteName: true, name: 'Trained Diplomat', overwriteDescription: true, description: 'You are proficient in a skill of your choice from the following: Deception, Insight, Intimidation, Investigation, Performance, Persuasion', extra: null },
    { id: 'tool+choice', quantity: 1, overwriteName: true, name: 'Tool Diversity', overwriteDescription: false, description: '', extra: null }
  ],
  ranges: {
    age: { min: 20, max: 90 },
    height: { min: 1.4, max: 1.9 },
    weight: { min: 50, max: 125 },
    names: { female: 'akkadian', male: 'akkadian' }
  },
  fluff: [
    { title: 'Eugenic Perfection', description: 'The Lacerti and Humans that settled on the Naati badlands thought they could create a superior races, and the result of their targeted breeding was the Lacinum. The goal is to perfectly blend human ingenuity with lacertan physicality, and any individual that is deemed to be close to this goal become highly revered.' },
    { title: 'Trained from birth', description: 'When a Lacin is born, they immediately begin their education at the College of Speechcraft. There they learn about rhetoric, philosophy, and conflict resolution. Once they graduate, gifted Lacinum are posted all over Terrea with the goal of becoming diplomats and influencers.' }
  ]
}
