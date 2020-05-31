export default [
  { id: 'advantage+common', name: 'Advantage on a common roll', score: 1.25, description: 'You have advantage on saving throws against or ability checks for this situation' },
  { id: 'advantage+situational', name: 'Advantage on a situational roll', score: 0.5, description: 'See Halfling Brave. You have advantage on saving throws against or ability checks for this situation' },
  { id: 'aggressive', name: 'Aggressive', score: 1, description: 'As a bonus action, you can move up to your movement speed toward a hostile creature you can see or hear. You must end this move closer to the enemy than you started.' },
  { id: 'ambusher', name: 'Ambusher', score: 1, description: 'On your first turn in combat, you do not provoke opportunity attacks and have advantage on attack rolls against creatures who have not yet acted.' },
  { id: 'amphibious', name: 'Amphibious', score: 0.25, description: 'You can breathe air and water.' },
  { id: 'armour+11', name: 'Natural Armour (11+Dex)', score: 0.25, description: 'When you are not wearing armor, your AC is 11 + your Dexterity modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield will benefit as normal while you use your natural armor.' },
  { id: 'armour+12', name: 'Natural Armour (12+Dex)', score: 0.5, description: 'When you are not wearing armor, your AC is 12 + your Dexterity modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield will benefit as normal while you use your natural armor.' },
  { id: 'armour+13', name: 'Natural Armour (13+Dex)', score: 1, description: 'When you are not wearing armor, your AC is 13 + your Dexterity modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield will benefit as normal while you use your natural armor.' },
  { id: 'armour+13', name: 'Natural Armour (14+Dex)', score: 2, description: 'When you are not wearing armor, your AC is 14 + your Dexterity modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield will benefit as normal while you use your natural armor.' },
  { id: 'armour+16', name: 'Natural Armour (16)', score: 2.25, description: 'Your AC is 16 (your Dexterity does not affect this number). You do not gain any benefit from wearing armour. A shield will benefit as normal while you use your natural armor.' },
  { id: 'armour+17', name: 'Natural Armour (17)', score: 2.5, description: 'Your AC is 17 (your Dexterity does not affect this number). You do not gain any benefit from wearing armour. A shield will benefit as normal while you use your natural armor.' },
  { id: 'asi+1', name: 'ASI +1', score: 1, description: 'Choose to increase one Ability Score' },
  { id: 'asi+1all', name: 'All ASI +1', score: 4.5, description: 'All ability scores are increased by +1' },
  { id: 'asi+1choice', name: 'Choice of ASI +1', score: 1.25, description: 'The choice of which ability score to increase is likely to be better, because of optimization.' },
  { id: 'asi+2', name: 'ASI +2', score: 2, description: 'Either +2 or +1/+1 increase to Ability Score/s' },
  { id: 'asi+3', name: 'ASI +3', score: 3, description: 'Either +2/+1 or +1/+1/+1 increase to Ability Score/s. Never +3 to one Score' },
  { id: 'asi+4', name: 'ASI +4', score: 4, description: 'Either +2/+2 or +2/+1/+1 increase to Ability Score/s. Never +3 or more to one Score' },
  { id: 'breath+15', name: 'Hold Breath (15 mins)', score: 0.25, description: 'You can hold your breath for up to 15 minutes at a time.' },
  { id: 'breath+60', name: 'Hold Breath (60 mins)', score: 0.25, description: 'You can hold your breath for up to 60 minutes at a time.' },
  { id: 'bull-rush', name: 'Bull Rush', score: 1, description: 'Immediately after you use the Dash action on your turn and move at least 6m, you can make one melee attack with your horns (or other natural unarmed strike) as a bonus action.' },
  { id: 'climb+6', name: 'Climb speed (6m)', score: 0.5, description: 'Can climb up to this speed without penalty (Default penalty is double cost to movement)' },
  { id: 'climb+7.5', name: 'Climb speed (7.5m)', score: 1, description: 'Can climb up to this speed without penalty (Default penalty is double cost to movement)' },
  { id: 'climb+9', name: 'Climb speed (9m)', score: 1.5, description: 'Can climb up to this speed without penalty (Default penalty is double cost to movement)' },
  { id: 'construct', name: 'Construct', score: 2.25, description: 'You gain the Construct type instead of Humanoid. You have advantage on saving throws against being poisoned, and you have resistance to poison damage. You do not need to eat, drink, or breathe. You are immune to disease. You do not need to sleep, and magic can not put you to sleep.' },
  { id: 'darkvision+18', name: 'Darkvision (18m)', score: 1, description: 'Darkvision means that races looking into the dark with darkvision see it as dim light, having disadvantage on perception checks, and thus -5 to their passive perception.' },
  { id: 'darkvision+36', name: 'Darkvision (36m)', score: 1.5, description: 'Darkvision means that races looking into the dark with darkvision see it as dim light, having disadvantage on perception checks, and thus -5 to their passive perception.' },
  { id: 'darkvision+9', name: 'Darkvision (9m)', score: 0.5, description: 'Darkvision means that races looking into the dark with darkvision see it as dim light, having disadvantage on perception checks, and thus -5 to their passive perception.' },
  { id: 'enhanced-agility', name: 'Enhanced Agility', score: 1.5, description: 'Your reflexes and agility allow you to move with a burst of speed. When you move on your turn in combat, you can double your speed until the end of the turn. Once you use this trait, you cannot use it again until you move 0 feet on one of your turns.' },
  { id: 'expertise', name: 'Expertise on rare subset of skill', score: 0.25, description: 'When you make an Skill check related to the area of Expertise, you can add twice your proficiency bonus instead of any proficiency bonus you normally apply.' },
  { id: 'extra-appendage', name: 'Extra Appendage', score: 0.25, description: 'It has a reach of 1.5m, and it can lift a number of kg equal to two and a half times your Strength score (rounded down). You can use it to lift, drop, hold, push, grapple, open or close. Your appendage cannot wield weapons or shields or do anything that requires manual precision, such as using tools or magic items or performing the somatic components of a spell.' },
  { id: 'feat', name: 'Choice of Feat', score: 2.5, description: 'You gain one feat of your choice.' },
  { id: 'flight+6', name: 'Flight speed (6m)', score: 1.5, description: 'Can fly up to this speed. To use this speed, you cannot be wearing medium or heavy armour.' },
  { id: 'flight+9', name: 'Flight speed (9m)', score: 2.5, description: 'Can fly up to this speed. To use this speed, you cannot be wearing medium or heavy armour.' },
  { id: 'hungry-jaws', name: 'Hungry Jaws', score: 1.25, description: 'As a bonus action, you can make a special attack with your bite. If the attack hits, it deals its normal damage, and you gain temporary hit points (minimum of 1) equal to your CON modifier, and you cannot use this trait again until you finish a short or long rest.' },
  { id: 'integrated-protection', name: 'Integrated Protection', score: 1.5, description: 'You gain a +1 bonus to your AC' },
  { id: 'language+1', name: 'Language', score: 0, description: 'The race speaks a specific language other than common' },
  { id: 'language+2', name: 'Languages (2)', score: 0.25, description: 'The race speaks 2 specific languages other than common' },
  { id: 'language+choice', name: 'Choice of language', score: 0.25, description: 'The player is able to choose a language other than common' },
  { id: 'language+small-beast', name: 'Speak with Small Beasts', score: 0.25, description: 'Through sound and gestures, you may communicate simple ideas with Small or smaller beasts.' },
  { id: 'lucky', name: 'Lucky', score: 1, description: 'When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.' },
  { id: 'mimicry', name: 'Mimicry', score: 1, description: 'You can mimic sounds you have heard, including voices. A creature that hears the sounds can tell they are imitations with a successful Wisdom (Insight) check opposed by your Charisma (Deception) check.' },
  { id: 'movement+10.5', name: 'Movement speed (10.5m)', score: 0.5, description: 'Base movement speed is 10.5m (Default is 9m)' },
  { id: 'movement+12', name: 'Movement speed (12m)', score: 1.5, description: 'Base movement speed is 12m (Default is 9m)' },
  { id: 'movement+6', name: 'Movement speed (6m)', score: -1, description: 'Base movement speed is 6m (Default is 9m)' },
  { id: 'movement+7.5', name: 'Movement speed (7.5m)', score: -0.5, description: 'Base movement speed is 7.5m (Default is 9m)' },
  { id: 'movement+9', name: 'Movement speed (9m)', score: 0, description: 'Base movement speed is 9m' },
  { id: 'natural+1d10', name: 'Natural Weapon (1d10 + STR)', score: 1.75, description: 'Any strike that can be made without a free hand, such as a tail or bite' },
  { id: 'natural+1d4', name: 'Natural Weapon (1d4 + STR)', score: 0.5, description: 'Any strike that can be made without a free hand, such as a tail or bite' },
  { id: 'natural+1d6', name: 'Natural Weapon (1d6 + STR)', score: 0.75, description: 'Any strike that can be made without a free hand, such as a tail or bite' },
  { id: 'natural+1d8', name: 'Natural Weapon (1d8 + STR)', score: 1.25, description: 'Any strike that can be made without a free hand, such as a tail or bite' },
  { id: 'nimble-escape', name: 'Nimble Escape', score: 2.5, description: 'You can take the Disengage or Hide action as a bonus action on each of your turns.' },
  { id: 'nimbleness', name: 'Nimbleness', score: 0.5, description: 'You can move through the space of any creature that is of a size larger than yours.' },
  { id: 'not-slowed-armour', name: 'Not slowed by Armour', score: 0.25, description: 'Your speed is not reduced by wearing heavy armor.' },
  { id: 'pack-tactics', name: 'Pack Tactics', score: 2.5, description: 'You have advantage on an attack roll against a creature if at least one of your allies is within 1.5m of the creature and the ally is not incapacitated.' },
  { id: 'powerful-build', name: 'Powerful Build', score: 0.25, description: 'You count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift.' },
  { id: 'reach', name: 'Reach', score: 1.5, description: 'The race gains an additional 1.5m of reach for melee attacks' },
  { id: 'relentless-endurance', name: 'Relentless Endurance', score: 1.5, description: 'When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You cannot use this feature again until you finish a long rest.' },
  { id: 'resistance+edged', name: 'One Edged-weapon Resistance (Bludgeoning, Slashing or Piercing)', score: 1.5, description: 'Damage of this type is halved for you' },
  { id: 'resistance+rare', name: 'One Rare Resistance (Radiant, Necrotic, Psychic or Thunder)', score: 0.5, description: 'Damage of this type is halved for you' },
  { id: 'resistance+common', name: 'One Common Resistance (Cold, Lightning, Poison, Fire, or Acid)', score: 0.75, description: 'Damage of this type is halved for you' },
  { id: 'rough-terrain', name: 'Ignore Rough Terrain', score: 1, description: 'You can move across difficult terrain without expending extra movement.' },
  { id: 'rough-terrain-type', name: 'Ignore type of Rough Terrain', score: 0.25, description: 'See Genasi Earth Walk. You can move across difficult terrain made of this type without expending extra movement.' },
  { id: 'savage-attacks', name: 'Savage Attacks', score: 0.5, description: 'When you score a critical hit with a melee weapon attack, you can roll one of the damage dice one additional time and add it to the extra damage of the critical hit.' },
  { id: 'sensitive-sunlight', name: 'Sunlight Sensitivity', score: -1.5, description: 'You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight.' },
  { id: 'sentry-rest', name: 'Sentry Rest', score: 0.25, description: 'You do not need to sleep. Instead, you meditate deeply or become inactive, for 6 hours a day. While in this state, you can see and hear as normal. After resting in this way, you gain the same benefit that others do from 8 hours of sleep.' },
  { id: 'shell-defence', name: 'Shell Defence', score: 0.5, description: 'You can withdraw into your shell as an action. Until you emerge, you gain a +4 bonus to AC, and you have advantage on Strength and Constitution saving throws. While in your shell, you are prone, your speed is 0 and cannot increase, you have disadvantage on Dexterity saving throws, you cannot take reactions, and the only action you can take is a bonus action to emerge from your shell.' },
  { id: 'size+medium', name: 'Size (Medium)', score: 0, description: 'Your size is Medium.' },
  { id: 'size+small', name: 'Size (Small)', score: 0, description: 'Your size is Small. You have disadvantage to attack with heavy weapons' },
  { id: 'skill', name: 'Skill proficiency', score: 0.5, description: 'You are proficient in a specific skill' },
  { id: 'skill+choice', name: 'Choice of Skill proficiency', score: 0.75, description: 'You are proficient in a skill of your choice' },
  { id: 'skill+limited', name: 'Limited choice of Skill proficiency', score: 0.5, description: 'You are proficient in a skill that is chosen from a list' },
  { id: 'small-fury', name: 'Fury of the Small', score: 0.75, description: 'When you damage a creature that is a size larger than yours, you can cause extra damage to the creature. The extra damage equals your level. Once you use this trait, you cannot use it again until you finish a short or long rest.' },
  { id: 'stealthy', name: 'Naturally Stealthy', score: 1.5, description: 'You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.' },
  { id: 'stone-endurance', name: 'Stone Endurance', score: 1.75, description: 'When you take damage, you can use your reaction to roll a d12. Add your Constitution modifier to the number rolled, and reduce the damage by that total. After you use this trait, you cannot use it again until you finish a short or long rest.' },
  { id: 'strike+unarmed1d4', name: 'Unarmed Strike (1d4 + STR)', score: 0.25, description: 'You have a natural weapon that can be used to make an unarmed strike with. On a hit, deal 1d4 + Strength Mod damage' },
  { id: 'strike+unarmed1d6', name: 'Unarmed Strike (1d6 + STR)', score: 0.5, description: 'You have a natural weapon that can be used to make an unarmed strike with. On a hit, deal 1d6 + Strength Mod damage' },
  { id: 'strike+unarmed1d8', name: 'Unarmed Strike (1d8 + STR)', score: 1, description: 'You have a natural weapon that can be used to make an unarmed strike with. On a hit, deal 1d8 + Strength Mod damage' },
  { id: 'strike+unarmed1d10', name: 'Unarmed Strike (1d10 + STR)', score: 1.5, description: 'You have a natural weapon that can be used to make an unarmed strike with. On a hit, deal 1d10 + Strength Mod damage' },
  { id: 'surprise-attack', name: 'Surprise Attack', score: 0.5, description: 'If you surprise a creature and hit it with an attack, the attack deals an extra 2d6 damage to it.' },
  { id: 'swim+7.5', name: 'Swim speed (7.5m)', score: 0.25, description: 'Can swim up to this speed without penalty (Default penalty is double cost to movement)' },
  { id: 'swim+9', name: 'Swim speed (9m)', score: 0.5, description: 'Can swim up to this speed without penalty (Default penalty is double cost to movement)' },
  { id: 'swim+12', name: 'Swim speed (12m)', score: 1, description: 'Can swim up to this speed without penalty (Default penalty is double cost to movement)' },
  { id: 'telepathy', name: 'Telepathy (9m)', score: 0.5, description: 'You can telepathically speak to any creature you can see within 9m of you. You do not need to share a language with the creature for it to understand your telepathy, but it must be able to understand at least one language. This process of communication is slow and limited, allowing you to transmit and receive only simple ideas and straightforward concepts.' },
  { id: 'tenacity', name: 'Tenacity', score: 1.25, description: 'When you make an ability check, attack roll, or saving throw and have disadvantage on the roll, you can cancel the disadvantage from one source for that roll. Once you use this trait, you cannot use it again until you finish a short or long rest.' },
  { id: 'tool', name: 'Tool proficiency', score: 0.25, description: 'You are proficient in a specific tool' },
  { id: 'tool+choice', name: 'Choice of Tool proficiency', score: 0.5, description: 'You can choose from a list of tools' },
  { id: 'toughness', name: 'Toughness', score: 1, description: 'Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.' },
  { id: 'trance', name: 'Trance', score: 0.25, description: 'The race does not need to sleep. Instead, they meditate deeply or become inactive, remaining semiconscious, for 4 hours a day. While in this state, you can dream after a fashion. After resting in this way, you gain the same benefit that others do from 8 hours of sleep.' },
  { id: 'vulnerability+rare', name: 'One Rare Vulnerability (Radiant, Necrotic, Psychic or Thunder)', score: -1, description: 'Damage of that type is doubled against this race' },
  { id: 'vulnerability+common', name: 'One Common Vulnerability (Cold, Lightning, Poison, Fire, or Acid)', score: -1.5, description: 'Damage of that type is doubled against this race' },
  { id: 'weapon+training', name: 'Weapon Training', score: 0.25, description: '3 or 4 weapons that the race are known for (up to 3 martial weapons max)' }
]
