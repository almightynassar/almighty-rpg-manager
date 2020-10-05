export default {
  id: 'elderforged',
  singular: 'Elder Forged',
  adjective: 'Elder Forged',
  plural: 'Elder Forged',
  name: 'Elder Forged (Constructed race)',
  traits: [
    { id: 'movement+9', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'size+medium', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'asi+3', quantity: 1, overwriteName: true, name: 'Ability Score Increase', overwriteDescription: true, description: 'Increase your Intelligence Score by 2, and your Constitution Score by 1', extra: null },
    { id: 'construct', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'expertise', quantity: 1, overwriteName: true, name: 'Gauldian Experts', overwriteDescription: true, description: 'Whenever you make an Intelligence (History) check related to ancient gauldian culture, objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.', extra: null },
    { id: 'skill+choice', quantity: 1, overwriteName: true, name: 'Purpose Built', overwriteDescription: true, description: 'You are proficient in one skill of your choice', extra: null },
    { id: 'sentry-rest', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null }
  ],
  ranges: {
    age: { min: 1, max: 500 },
    height: { min: 1.7, max: 2.1 },
    weight: { min: 120, max: 140 },
    names: { female: 'latinFemale', male: 'latinMale' }
  },
  fluff: [
    { title: 'Creations of Sesom', description: 'Sesom the Wanderer, last of the Gauld, made a journey to Phalanxis in a hope to revive his lost brothers and sisters. Instead, all he found was more questions and the forged. In an attempt to continue his quest, Sesom modified many of the Forged to have increased memory storage and data processing capacity. These changes mean that the Elder Forged "live" for longer, and many continue searching for answers on how to bring the Gauld back.' },
    { title: 'Memory Reset', description: 'Although the Forged can live forever, they do not have the storage capacity to keep all of their memories. While a Forged is able to selectively delete memories to free up new space, this has unintended consequences to the underlying personality of the Forged. Many Forged have found it easier to do a complete system reboot, and start fresh lives in their old body.' }
  ]
}
