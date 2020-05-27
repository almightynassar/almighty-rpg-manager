export default {
  id: 'lacinum',
  singular: 'Lacin',
  adjective: 'Lacinum',
  plural: 'Lacinum',
  name: 'Lacinum (Eugenic Lizardfolk)',
  traits: [
    { id: 'movement+9', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'swim+7.5', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'size+medium', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'language+1', quantity: 1, overwriteName: false, name: '', overwriteDescription: true, description: 'You speak Draconian, in addition to Common', extra: null },
    { id: 'language+choice', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'asi+3', quantity: 1, overwriteName: true, name: 'Ability Score Increase', overwriteDescription: true, description: 'Increase your Charisma Score by 2, and your Strength Score by 1', extra: null },
    { id: 'breath+15', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'skill+choice', quantity: 2, overwriteName: true, name: 'Ingenuity', overwriteDescription: true, description: 'You are proficient in two skills of your choice', extra: null },
    { id: 'extra-appendage', quantity: 1, overwriteName: true, name: 'Tail', overwriteDescription: false, description: '', extra: null },
    { id: 'tool', quantity: 1, overwriteName: false, name: '', overwriteDescription: true, description: 'You are proficient in a tool of your choice', extra: null }
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
