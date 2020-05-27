export default {
  id: 'orcs',
  singular: 'Orc',
  adjective: 'Orcish',
  plural: 'Orcs',
  name: 'Orcs',
  traits: [
    { id: 'movement+9', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'size+medium', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'language+1', quantity: 1, overwriteName: false, name: '', overwriteDescription: true, description: 'You speak Orcish, in addition to Common', extra: null },
    { id: 'asi+3', quantity: 1, overwriteName: true, name: 'Ability Score Increase', overwriteDescription: true, description: 'Increase your Strength Score by 2, and your Constitution Score by 1', extra: null },
    { id: 'aggressive', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'darkvision+18', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'relentless-endurance', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null },
    { id: 'savage-attacks', quantity: 1, overwriteName: false, name: '', overwriteDescription: false, description: '', extra: null }
  ],
  ranges: {
    age: { min: 12, max: 50 },
    height: { min: 1.6, max: 2 },
    weight: { min: 80, max: 150 },
    names: { female: 'scandinavianFemale', male: 'scandinavianMale' }
  },
  fluff: [
    { title: 'Warrior Culture', description: 'Orcish culture revers battle and strength, and see not being able to protect what you own is a unforgivable weakness. Orc warriors are not any more bloodthirsty than the other races, but their penchant for raiding and plunder means that they are painted as bloodthirsty barbarians.' },
    { title: 'Tribal Culture', description: 'Orcish generally live in familial tribes that constantly migrate, following where there is plentiful food and plunder. The only settlement the Orcs acknowledge is goblinoid city of Angarth, where the orcish tribes will travel too every year and participate in the Moot. All inter-clan disputes are settled and voted on (or, more commonly, by arena combat).' },
    { title: 'Friends of Goblins', description: 'The Orcs share the Shattered Isles with the goblinoid races. The Orcs roam the countryside and live of the land, while the goblins build settlements and the goods that the orcs use for their raiding.' }
  ]
}
