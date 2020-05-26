export default {
  id: 'lefantians',
  singular: 'Lefantian',
  adjective: 'Lefantian',
  plural: 'Lefantians',
  name: 'Lefantians (Elephantfolk)',
  traits: [
    { id: 'movement+9', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'size+medium', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'language+choice', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'asi+3', quantity: 1, overwriteName: true, name: 'Ability Score Increase', overwriteDescription: true, description: 'Increase your Constitution Score by 2, and your Wisdom Score by 1', extra: null },
    { id: 'expertise+rare', quantity: 1, overwriteName: true, name: 'Keen Smell', overwriteDescription: true, description: 'Thanks to your sensitive trunk, you have advantage on Wisdom (Perception), Wisdom (Survival), and Intelligence (Investigation) checks that involve smell.', extra: null },
    { id: 'powerful-build', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'advantage+common', quantity: 1, overwriteName: true, name: 'Serenity', overwriteDescription: true, description: 'You have advantage on saving throws against being charmed or frightened.', extra: null },
    { id: 'armour+13', quantity: 1, overwriteName: true, name: 'Thick Hide', overwriteDescription: false, description: '', extra: null },
    { id: 'extra-appendage', quantity: 1, overwriteName: true, name: 'Trunk', overwriteDescription: false, description: '', extra: 'You can use your trunk as a snorkel. ' }
  ],
  ranges: {
    age: { min: 17, max: 80 },
    height: { min: 2, max: 2.5 },
    weight: { min: 130, max: 170 },
    names: { female: 'dutchFemale', male: 'dutchMale' }
  },
  fluff: [
    { title: 'Kings of the Savannah', description: 'Lefantians were created when Artra, in the form of different elephants, coupled with humans. Like their beastial bretheren, the Lefantia rule over the Savannahs of Middle Girth.' },
    { title: 'Long Memories', description: '"A Lefantian never forgets" is a common saying on Terrea, and for good reason. The Lefantians have always had a keen interest in the ancient Gauldian ruins of Phalanxis and the Forged that dwell there, and have a strong oral tradition that preserves knowledge uncovered in the study of the ruins.' },
    { title: 'Gentle Giants', description: 'The largest of the sentient mortal races, the Lefantians prefer to work our peaceful resolutions to conflict. But if slighted or wronged, a Lefantian is known to hold a grudge for decades.' }
  ]
}
