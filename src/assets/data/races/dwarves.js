export default {
  id: 'dwarves',
  singular: 'Dwarf',
  adjective: 'Dwarven',
  plural: 'Dwarves',
  name: 'Dwarves',
  traits: [
    { id: 'movement+7.5', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'size+medium', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'language+1', quantity: 1, overwriteName: false, name: '', overwriteDescription: true, description: 'You speak Dwarvish, in addition to Common', extra: null },
    { id: 'asi+3', quantity: 1, overwriteName: true, name: 'Ability Score Increase', overwriteDescription: true, description: 'Increase your Constitution Score by 2, and your Strength Score by 1', extra: null },
    { id: 'darkvision+18', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'tool+choice', quantity: 1, overwriteName: true, name: 'Industrialists', overwriteDescription: true, description: 'You are proficient in a tool of your choice', extra: null },
    { id: 'not-slowed-armour', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'resistance+common', quantity: 1, overwriteName: true, name: 'Poison Resistance', overwriteDescription: false, description: '', extra: null },
    { id: 'advantage+situational', quantity: 1, overwriteName: true, name: 'Poison Saving Throws', overwriteDescription: true, description: 'You have advantage on saving throws against Poison', extra: null },
    { id: 'toughness', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null }
  ],
  ranges: {
    age: { min: 50, max: 350 },
    height: { min: 1.1, max: 1.4 },
    weight: { min: 60, max: 105 },
    names: { female: 'scottishFemale', male: 'scottishMale' }
  },
  fluff: [
    {
      title: 'Avaracious Traders',
      description: "Dwarven culture equates an individual's self-worth with the value of their treasures. The more rare and exotic a piece is, the more valuable it is to a Dwarf. Dwarves will go to great lengths to own something special, and will dig deep into the Bounty mountains and travel the three seas to find them."
    },
    {
      title: 'A Hardy People',
      description: 'Dwarves live among the volcanos of Bounty, and in some places the air and water is tainted with sulfur. The Dwarves have adapted to this, and have iron stomachs that can withstand the hazards of the Bounty mountains.'
    },
    {
      title: 'Industrialists',
      description: 'The riches of Bounty allow the Dwarves to produce some of the best metal and stone goods on Terrea. Dwarven wares are highly sort for their quality and workmanship.'
    }
  ]
}
