export default [
  { name: 'Arrows', type: 'Ammunition', services: [], cost: 5, weight: 0.01, properties: [], acdamage: '', effects: [], requirements: [], description: 'Used for bows' },
  { name: 'Battleaxe', type: 'Melee - Martial', services: [], cost: 1000, weight: 2, properties: ['Versatile'], acdamage: '1d8 (1d10) slashing', effects: [], requirements: [], description: 'An axe designed for war' },
  { name: 'Blowgun', type: 'Ranged - Martial', services: [], cost: 1000, weight: 0.5, properties: ['Loading'], acdamage: '1 piercing', effects: ['When fired, has a range of 7.5m/30m (5/20 squares).'], requirements: ['Needle ammunition'], description: 'A simple pipe to blow needles from' },
  { name: 'Breastplate', type: 'Armour - Medium', services: ['armourer'], cost: 40000, weight: 10, properties: [], acdamage: '14 + Dex (Max. 2)', effects: [], requirements: [], description: 'This armour consists of a fitted metal chest piece worn with supple leather.' },
  { name: 'Buckler', type: 'Shield', services: [], cost: 500, weight: 1, properties: [], acdamage: '+1', effects: [], requirements: [], description: 'A small metal or wooden shield heald in a fist grip. You can benefit from only one shield at a time' },
  { name: 'Chain Mail', type: 'Armour - Heavy', services: [], cost: 7500, weight: 27.5, properties: ['Stealth Disadvantage'], acdamage: '16', effects: [], requirements: ['STR 13'], description: 'Made of interlocking metal rings, with a layer of quilted fabric underneath' },
  { name: 'Chain Shirt', type: 'Armour - Medium', services: [], cost: 5000, weight: 10, properties: [], acdamage: '13 + Dex (Max. 2)', effects: [], requirements: [], description: 'Made of interlocking metal rings, a chain shirt is worn between layers of clothing or leather. ' },
  { name: 'Club', type: 'Melee - Simple', services: [], cost: 10, weight: 1, properties: ['Light'], acdamage: '1d4 bludgeoning', effects: [], requirements: [], description: 'A solid piece of material that is easy to handle' },
  { name: 'Crossbow Bolts', type: 'Ammunition', services: [], cost: 5, weight: 0.01, properties: [], acdamage: '', effects: [], requirements: [], description: 'Used for crossbows' },
  { name: 'Dagger', type: 'Melee - Simple', services: [], cost: 200, weight: 0.5, properties: ['Finesse', 'Light', 'Thrown'], acdamage: '1d4 piercing', effects: ['When thrown, has a range of 6m/18m (4/12 squares).'], requirements: [], description: 'A small blade that is easily concealed' },
  { name: 'Double-Bladed Scimitar', type: 'Melee - Martial', services: [], cost: 10000, weight: 3, properties: ['Two-Handed'], acdamage: '2d4 slashing', effects: ['If you attack with a double-bladed scimitar as part of the Attack action on your turn, you can use a bonus action immediately after to make a melee attack with it. This attack deals 1d4 slashing damage on a hit, instead of 2d4.'], requirements: [], description: 'A curved sword with two edges' },
  { name: 'Glaive', type: 'Melee - Martial', services: [], cost: 2000, weight: 3, properties: ['Heavy', 'Reach', 'Two-Handed'], acdamage: '1d10 slashing', effects: [], requirements: [], description: 'A spear with a heavy blade at the tip' },
  { name: 'Halberd', type: 'Melee - Martial', services: [], cost: 2000, weight: 3, properties: ['Heavy', 'Reach', 'Two-Handed'], acdamage: '1d10 slashing', effects: [], requirements: [], description: 'A spear with a heavy blade at the tip' },
  { name: 'Half Plate Armour', type: 'Armour - Medium', services: [], cost: 75000, weight: 20, properties: ['Stealth Disadvantage'], acdamage: '15 + Dex (Max. 2)', effects: [], requirements: [], description: 'Half plate consists of shaped metal plates that cover most of the body. ' },
  { name: 'Hand Crossbow', type: 'Ranged - Martial', services: [], cost: 7500, weight: 1.5, properties: ['Light', 'Loading'], acdamage: '1d6 piercing', effects: ['When fired, has a range of 9m/36m (6/24 squares).'], requirements: ['Crossbow Bolt ammunition'], description: 'A small crossbow that can be weilded one-handed' },
  { name: 'Handaxe', type: 'Melee - Simple', services: [], cost: 500, weight: 1, properties: ['Light', 'Thrown'], acdamage: '1d6 slashing', effects: ['When thrown, has a range of 6m/18m (4/12 squares).'], requirements: [], description: 'A small axe that can be thrown' },
  { name: 'Heavy Crossbow', type: 'Ranged - Martial', services: [], cost: 5000, weight: 9, properties: ['Heavy', 'Loading', 'Two-Handed'], acdamage: '1d10 piercing', effects: ['When fired, has a range of 9m/36m (6/24 squares).'], requirements: ['Crossbow Bolt ammunition'], description: 'A large, heavy crossbow that is built to damage opponents' },
  { name: 'Hide Armour', type: 'Armour - Medium', services: [], cost: 1000, weight: 6, properties: [], acdamage: '12 + Dex (Max. 2)', effects: [], requirements: [], description: 'This crude armour consists of thick furs and pelts.' },
  { name: 'Javelin', type: 'Melee - Simple', services: [], cost: 50, weight: 1, properties: ['Thrown'], acdamage: '1d6 piercing', effects: ['When thrown, has a range of 9m/36m (6/25 squares).'], requirements: [], description: 'A sharpened stick designed to be thrown' },
  { name: 'Leather Armour', type: 'Armour - Light', services: [], cost: 1000, weight: 5, properties: [], acdamage: '11 + Dex', effects: [], requirements: [], description: 'The breastplate and shoulder protectors of this armour are made of leather that has been stiffened by being boiled in oil. The rest of the armour is made of softer and more flexible materials.' },
  { name: 'Light Crossbow', type: 'Ranged - Simple', services: [], cost: 2500, weight: 2.5, properties: ['Loading', 'Two-Handed'], acdamage: '1d8 piercing', effects: ['When fired, has a range of 24m/96m (16/64 squares).'], requirements: ['Crossbow Bolt ammunition'], description: 'A crossbow' },
  { name: 'Longbow', type: 'Ranged - Martial', services: [], cost: 5000, weight: 1, properties: ['Heavy', 'Two-Handed'], acdamage: '1d8 piercing', effects: ['When fired, has a range of 45m/180m (30/120 squares).'], requirements: ['Arrows ammunition'], description: 'A large warbow that requires strength and training to pull, but quick reflexes to adjust aim on the fly' },
  { name: 'Longsword', type: 'Melee - Martial', services: [], cost: 1500, weight: 1.5, properties: ['Versatile'], acdamage: '1d8 (1d10) slashing', effects: [], requirements: [], description: 'An sword designed for war' },
  { name: 'Needles', type: 'Ammunition', services: [], cost: 2, weight: 0.01, properties: [], acdamage: '', effects: [], requirements: [], description: 'Used for blowguns' },
  { name: 'Padded Armour', type: 'Armour - Light', services: [], cost: 500, weight: 4, properties: ['Stealth Disadvantage'], acdamage: '11 + Dex', effects: [], requirements: [], description: 'Padded armor consists of quilted layers of cloth and batting.' },
  { name: 'Plate Armour', type: 'Armour - Heavy', services: [], cost: 150000, weight: 30, properties: ['Stealth Disadvantage'], acdamage: '18', effects: [], requirements: ['STR 15'], description: 'Consists of shaped, interlocking metal plates to cover the entire body. A suit of plate includes gauntlets, boots, visored helmet, and paddings underneath the armour' },
  { name: 'Rapier', type: 'Melee - Martial', services: [], cost: 2500, weight: 1, properties: ['Finesse'], acdamage: '1d8 (1d10) piercing', effects: [], requirements: [], description: 'An sword designed to get the first hit on an opponent' },
  { name: 'Ring Armour', type: 'Armour - Heavy', services: [], cost: 3000, weight: 20, properties: ['Stealth Disadvantage'], acdamage: '14', effects: [], requirements: [], description: 'Leather armour with heavy metal rings sewn into it. The rings help reinfoce the armour against blows' },
  { name: 'Scale Armour', type: 'Armour - Medium', services: [], cost: 5000, weight: 22.5, properties: ['Stealth Disadvantage'], acdamage: '14 + Dex (Max. 2)', effects: [], requirements: [], description: 'TThis armor consists of a coat and leggings (and perhaps a separate skirt) of leather covered with overlapping pieces of metal, much like the scales of a fish.' },
  { name: 'Scimitar', type: 'Melee - Martial', services: [], cost: 2500, weight: 1.5, properties: ['Light', 'Finesse'], acdamage: '1d6 slashing', effects: [], requirements: [], description: 'An curved sword designed for war' },
  { name: 'Shield', type: 'Shield', services: [], cost: 1000, weight: 3, properties: [], acdamage: '+2', effects: [], requirements: [], description: 'A wooden or metal shield that is carried in one hand. You can benefit from only one shield at a time' },
  { name: 'Shortbow', type: 'Ranged - Simple', services: [], cost: 2500, weight: 1, properties: ['Two-Handed'], acdamage: '1d6 piercing', effects: ['When fired, has a range of 24m/96m (16/64 squares).'], requirements: ['Arrows ammunition'], description: 'A bow that requires training to pull, but quick reflexes to adjust aim on the fly' },
  { name: 'Shortsword', type: 'Melee - Martial', services: [], cost: 1000, weight: 1, properties: ['Light', 'Finesse'], acdamage: '1d6 piercing', effects: [], requirements: [], description: 'A metal blade attached to a standard hilt.' },
  { name: 'Sling Bullet (5)', type: 'Ammunition', services: [], cost: 1, weight: 0.01, properties: [], acdamage: '', effects: [], requirements: [], description: 'Smoothed stones for slings' },
  { name: 'Spear', type: 'Melee - Simple', services: [], cost: 100, weight: 1.5, properties: ['Thrown', 'Versatile'], acdamage: '1d6 piercing (1d8)', effects: ['When thrown, has a range of 6m/18m (4/12 squares).'], requirements: [], description: 'A wooden long shaft with a pointed metal tip' },
  { name: 'Spiked Armour', type: 'Armour - Medium', services: [], cost: 7500, weight: 6, properties: ['Stealth Disadvantage'], acdamage: '14 + Dex (Max. 2)', effects: [], requirements: [], description: 'It consists of a leather coat and leggings covered with spikes that are usually made of metal.' },
  { name: 'Splint Armour', type: 'Armour - Heavy', services: [], cost: 20000, weight: 32.5, properties: ['Stealth Disadvantage'], acdamage: '17', effects: [], requirements: ['STR 15'], description: 'Made of narrow vertical strips of metal riveted to a backing of leather that is word over cloth padding. Flexible shain mail protects the joints' },
  { name: 'Studded Leather Armor', type: 'Armour - Light', services: [], cost: 4500, weight: 6.5, properties: [], acdamage: '12 + Dex', effects: [], requirements: [], description: 'Made from tough but flexible leather, studded leather is reinforced with close-set rivets or spikes.' },
  { name: 'Tower Shield', type: 'Shield', services: [], cost: 3000, weight: 20, properties: ['Stealth Disadvantage'], acdamage: '+2', effects: [], requirements: ['STR 15'], description: 'A massive shield that covers part of the user. You can spend an amount of movement equal to half your speed to gain half cover until the start of your next turn (bonuses apply)' }
]
