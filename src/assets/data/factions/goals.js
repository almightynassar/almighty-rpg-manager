export default [
  { id: 'blood', name: 'Blood the Enemy', description: 'Inflict a number of hit points of damage on enemy faction assets or bases equal to your faction’s total Force, Cunning, and Resource ratings. Difficulty 2.' },
  { id: 'conquest', name: 'Military Conquent', description: 'Destroy a number of Force assets of rival factions equal to your faction’s Force rating. Difficulty is 1/2 number of assets destroyed.' },
  { id: 'coup', name: 'Intelligence Coup', description: 'Destroy a number of Cunning assets of rival factions equal to your faction’s Cunning rating. Difficulty is 1/2 number of assets destroyed.' },
  { id: 'destroy', name: 'Destroy the Foe', description: 'Destroy a rival faction. Difficulty equal to 1 plus the average of the faction’s Force, Cunning, and Resource ratings.' },
  { id: 'expansion', name: 'Trade Expansion', description: 'Destroy a number of Resource assets of rival factions equal to your faction’s Resource rating. Difficulty is 1/2 number of assets destroyed.' },
  { id: 'influence', name: 'Expand Influence', description: 'Plant a Base of Influence in a new settlement. Difficulty 1, +1 if the attempt is contested by a rival faction.' },
  { id: 'inside', name: 'Inside Enemy Territory', description: 'Have a number of stealthed assets in settlements with other governments equal to your Cunning score. Units that are already stealthed when this goal is adopted do not count. Difficulty 2.' },
  { id: 'invincible', name: 'Invincible Valor', description: 'Destroy a Force asset with a minimum purchase rating higher than your faction’s Force rating. Thus, if your Force is 3, you need to destroy a unit that requires Force 4 or higher to purchase. Difficulty 2.' },
  { id: 'peace', name: 'Peaceable Kingdom', description: 'Don’t take an Attack action for four turns. Difficulty 1.' },
  { id: 'seizure', name: 'Settlement Seizure', description: 'Take control of a settlement, becoming the legitimate government. Difficulty equal to half the average of the current ruling faction’s Force, Cunning, and Resource ratings. If the planet somehow lacks any opposing faction to resist the seizure, it counts as Difficulty 1.' },
  { id: 'wealth', name: 'Wealth of Worlds', description: 'Spend Credits equal to four times your faction’s Resource rating on bribes and influence. This money is effectively lost, but the goal is then considered accomplished. The faction’s Resource rating must increase before this goal can be selected again. Difficulty 2.' }
]
