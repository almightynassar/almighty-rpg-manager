export default [
  { id: 'colonists', name: 'Colonists', description: 'Faction runs a fresh colonial settlement. It consists of brave pioneers that will tame the wilderness.', effect: 'The faction has all the benefits of the Government tag for the settlement. The faction can also treat the settlement as if it had a support value of 3000 for the sake of goods & services' },
  { id: 'deep_rooted', name: 'Deep Rooted', description: 'Faction has been part of the local region for a substantial period of time. The traditional prerogatives and dignities of the faction are instintively respective', effect: 'This faction can roll one additional d10 when defending against attacks on assets in their headquarters. If the faction ever changes headquarters, this tag is lost' },
  { id: 'brainwashing_cultists', name: 'Brainwashing Cultists', description: 'The faction employs forbidden techniques to brainwash recruits. These recruits become essentially mindless slaves.', effect: 'Can buy the Mindless Slave asset. The asset requires Force 1 and 2 Credits. The statistics are 6 HP and an Attack of Force vs Force with 1d6 damage and 1d4 counter-damage. Once per turn, the Cult can roll an extra d10 on an attack or defense by a Mindless Slave asset, regardless of the stat being used. The Mindless Slave asset can either be a Military Unit or Special Forces, determined when the cult first creates the assset' },
  { id: 'consulate', name: 'Consulate', description: 'The faction is run by or has close ties to bankers and diplomats.', effect: 'When the faction completes a "Peaceable Kingdom" Goal, they may roll a d6; on a 4+, they gain a bonus experience point. Once per turn, the faction may roll an extra d10 when defending against a Wealth attack' },
  { id: 'fanatical', name: 'Fanatical', description: 'The members of this faction just do not know when to quit. No matter how overmatched, they will keep fighting to the bitter end.', effect: 'The faction always rerolls any dice that come up as 1. However, they always lose ties during attacks' },
  { id: 'imperialists', name: 'Imperialists', description: 'This faction nurses wild dreams of controlling the region. They excel at defeating settlement defenses and standing armies', effect: 'This faction may roll an extra d10 for attacks made as part of a Seize Settlement action' },
  { id: 'machiavellian', name: 'Machiavellian', description: 'This faction loves intrigue.', effect: 'Once per turn, this faction can roll an additional d10 when making a Cunning attack' },
  { id: 'mercenary', name: 'Mercenary', description: 'This faction sells its services to the highest bidder, and is an extremely mobile organization', effect: 'All faction assets gain the following special ability: As an action, the asset may move itself to any region within one hex' },
  { id: 'pirates', name: 'Pirates', description: 'The scourge of trade and merchants. They steal and refit equipment with vicious ingenuity.', effect: 'ANy movement of an asset into a region that has a Base of Influence for this faction costs one extra FacCred, paid to this faction' },
  { id: 'government', name: 'Government', description: 'This faction is a legitimate government for a region or settlement.', effect: 'Other factions must request permission from this faction when they wish to build assets that are marked as requiring permission' },
  { id: 'plutocratic', name: 'Plutocratic', description: 'This faction prizes wealth.', effect: 'Once per turn, this faction can roll an additional d10 when making a Wealth attack' },
  { id: 'scavengers', name: 'Scavengers', description: 'They survive by scavenging and raiding others', effect: 'Whenever the faction destroys an asset or has one of their assets destroyed, they gain 1 Credit.' },
  { id: 'secretive', name: 'Secretive', description: 'This faction desires to remain unknown to the general populace', effect: 'All assets purchased by this faction automatically begin Stealthed. See the list of Cunning assets for details on Stealth.' },
  { id: 'theocratic', name: 'Theocratic', description: 'They have a fierce certainity in their beliefs, making it hard to infiltrate or subvert', effect: 'Once per turn, this faction can roll an extra d10 when defending against a Cunning attack' },
  { id: 'warlike', name: 'Warlike', description: 'This faction lives for battle', effect: 'Once per turn, this faction can roll an additional d10 when making a Force attack.' }
]
