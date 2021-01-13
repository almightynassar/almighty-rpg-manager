import Markdown from 'src/assets/md/races/forged.md'

export default {
  id: 'forged',
  singular: 'Forged',
  adjective: 'Forged',
  plural: 'Forged',
  name: 'Forged',
  short: 'Constructed Race',
  traits: [
    { id: 'movement+9', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'size+medium', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'asi+2', quantity: 1, overwriteName: true, name: 'Ability Score Increase', overwriteDescription: true, description: 'Increase your Constitution Score by 2 (If Elder Forged, increase Intelligence by 2)', extra: null },
    { id: 'asi+1choice', quantity: 1, overwriteName: true, name: 'Ability Score Increase (Choice)', overwriteDescription: true, description: 'Increase one Ability Score other than Constituion (or Intelligence if Elder Forged) by 1', extra: null },
    { id: 'construct', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'skill+choice', quantity: 1, overwriteName: true, name: 'Purpose Built', overwriteDescription: true, description: 'You are proficient in one skill of your choice', extra: null },
    { id: 'sentry-rest', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'expertise', quantity: 1, overwriteName: true, name: 'Gauldian Experts', overwriteDescription: true, description: 'Whenever you make an Intelligence (History) check related to ancient gauldian culture, objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.', extra: null }
  ],
  ranges: {
    age: { min: 1, max: 200 },
    height: { min: 1.7, max: 2.1 },
    weight: { min: 120, max: 140 },
    names: { female: 'latinFemale', male: 'latinMale' }
  },
  markdown: Markdown
}
