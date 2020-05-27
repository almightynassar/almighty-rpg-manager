export default {
  id: 'forged',
  singular: 'Forged',
  adjective: 'Forged',
  plural: 'Forged',
  name: 'Forged (Constructed race)',
  traits: [
    { id: 'movement+9', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'size+medium', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'asi+2', quantity: 1, overwriteName: true, name: 'Ability Score Increase', overwriteDescription: true, description: 'Increase your Constitution Score by 2', extra: null },
    { id: 'asi+1choice', quantity: 1, overwriteName: true, name: 'Ability Score Increase (Choice)', overwriteDescription: true, description: 'Increase one Ability Score other than Constituion by 1', extra: null },
    { id: 'construct', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'skill+choice', quantity: 1, overwriteName: true, name: 'Purpose Built', overwriteDescription: true, description: 'You are proficient in one skill of your choice', extra: null },
    { id: 'sentry-rest', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null }
  ],
  ranges: {
    age: { min: 1, max: 200 },
    height: { min: 1.7, max: 2.1 },
    weight: { min: 120, max: 140 },
    names: { female: 'hinduFemale', male: 'hinduMale' }
  },
  fluff: [
    { title: 'Eternal Constructs', description: 'The Forged were created by the ancient Gauld to be cheap and disposable labour. But since the Forged were left behind when the Gauld passed into the Shadowrealm at the end of the Sundering, the machines left behind must now forge their own destiny.' },
    { title: 'Memory Reset', description: 'Although the Forged can live forever, they do not have the storage capacity to keep all of their memories. While a Forged is able to selectively delete memories to free up new space, this has unintended consequences to the underlying personality of the Forged. Many Forged have found it easier to do a complete system reboot, and start fresh lives in their old body.' }
  ]
}
