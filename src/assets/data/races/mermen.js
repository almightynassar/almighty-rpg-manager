export default {
  id: 'mermen',
  singular: 'Merman',
  adjective: 'Mermen',
  plural: 'Mermen',
  name: 'Mermen',
  traits: [
    { id: 'movement+9', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'swim+9', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'size+medium', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'language+1', quantity: 1, overwriteName: false, name: '', overwriteDescription: true, description: 'You speak Aquan, in addition to Common', extra: null },
    { id: 'asi+3', quantity: 1, overwriteName: true, name: 'Ability Score Increase', overwriteDescription: true, description: 'Increase your Constitution, Intelligence, and Charisma Scores by 1', extra: null },
    { id: 'amphibious', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'advantage+common', quantity: 1, overwriteName: true, name: 'Mental Discipline', overwriteDescription: true, description: 'You have advantage on saving throws against being charmed or frightened.', extra: null },
    { id: 'skill+choice', quantity: 1, overwriteName: true, name: 'Talented', overwriteDescription: true, description: 'You are proficient in one skill of your choice', extra: null }
  ],
  ranges: {
    age: { min: 20, max: 90 },
    height: { min: 1.3, max: 1.8 },
    weight: { min: 40, max: 110 },
    names: { female: 'japaneseFemale', male: 'japaneseMale' }
  },
  fluff: [
    { title: 'Men of the Sea', description: 'Mermen were created when Artra, in the form of different cetaceans, coupled with humans in a competition with Baltha. Mermen look like scaly skinned humans with gills.' },
    { title: 'Equality on the Waves', description: 'Mermen believe that every being should have an equal opportunity for success, just like how the ocean is available equally to everyone. And like how the ocean rewards those who strive to tame the waves, Mermen believe that an individuals deserves the outcome of their efforts.' },
    { title: 'Master Traders', description: 'Mermen compete with the Dwarves for trade on Terrea. Where the Dwarves entice deals with their industrial output, Mermen have mastered the art of the deal. Mermen were the first to introduce coinage, and the Mermen standard is used all throughout Terrea' }
  ]
}
