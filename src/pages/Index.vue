<template>
  <div class="q-pa-md">
    <q-tabs
      v-model="tab"
      dense
      class="text-grey"
      active-color="primary"
      indicator-color="primary"
      align="justify"
      narrow-indicator
    >
      <q-tab name="home" icon="home" label="Introduction" />
      <q-tab name="settings" icon="settings" label="Settings &amp; Tools" />
      <q-tab name="credits" icon="help" label="About" />
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="home">
        <div class="text-h4 q-mb-md text-primary">Welcome to Terrea</div>
        <p>
          Terrea is a low-magic world that is split into three overlapping realms known as the <a href="/#/world?world=realms&realm=aether">Aether</a>,
          <a href="/#/world?world=realms&realm=nether">Nether</a>, and <a href="/#/world?world=realms&realm=midrealm">Mid-Realm</a>. Each realm is ruled
          over by a temperamental and fickle <a href="/#/world?world=deities">God</a>, who are constantly bickering with each other. The Gods are not
          bound by mortal ethics and morality, and are solely concerned with protecting their realms and their power.
        </p>
        <p>
          The first sentient peoples were the ancient Gauld, and they were intelligent and cunning. They flourished all across Mid-Realm by creating many
          wonders and reaching cultural heights that drew the attention of the immortal <a href="/#/world?world=deities&deity=primus">Primus</a>, the
          creator and source of magical Essence. Primus and the Gauld eventually rose up against the Gods, and the Gods retaliated by birthing the monsters
          that are now endemic to Terrea. The Gods eventually triumphed, and they banished the Gauld and Primus to the
          <a href="/#/world?world=realms&realm=shadowrealm">Shadow Realm</a>. The ruins and technology of the Gauld remained behind, reminders of what once was.
        </p>
        <p>
          As adventurers in Terrea you can choose to fight back against the monstrous terrors that plague the good and honest citizens, or delve deep into
          ancient ruins and plunder their powerful secrets. You can take part in the politics of the day, making sure that the people are well-looked after
          or bowing down in servitude to their betters. You can join the struggle alongside <a href="/#/world?world=nations&nation=partisans">freedom fighters</a>,
          stand firm with the <a href="/#/world?world=nations&nation=hentergrey">Hentergrey Empire</a> to maintain order, or go plundering with Orcish raiders.
          And if that all seems too grand for you, simply try to make an honest living as a humble adventurer that will eventually settle down with family
          and friends.
        </p>

        <q-separator />

        <div class="text-h4 q-mb-md text-primary">FAQ</div>
        <p class="text-primary"><strong>1. What's the deal with religion on Terrea?</strong></p>
        <p>
          The <a href="/#/world?world=deities">Gods</a> of Terrea act based on their whims, and are less concerned with morality or concepts of good and evil.
          Mortals simply try to appease the Gods to avoid their ire, and occassionally petition their favour for a good harvest or some other boon.
        </p>
        <p>
          For the Clerics and Paladins of Terrea, this means that their power does not come directly from the Gods. Instead from their steadfast faith and
          belief in a singular cause. Their faith is so true that it allows them to manipulate the aether directly and bend reality to their will.
        </p>

        <p class="text-primary"><strong>2. What about magic?</strong></p>
        <p>There are three forms of magic on Terrea: Primordial (powers ancient Gauldian and modern technological devices), Spectral (the most common form of magic), and Natural (use the primordial essence found in living things). In terms of D&amp;D Mechanics, these distinctions are just for flavour.</p>
        <p>On Terrea, Primordial magic is sometimes called Elemental magic.</p>
        <p>Sorcerers, Warlocks, and Wizards are not available as playable classes on Terrea. Mystics from Unearther Arcana is used to mimic Spectral abilities. Artificers use Primordial essence to power their magic-like technology.</p>

        <p class="text-primary"><strong>3. Where can we go to buy equipment?</strong></p>
        <p>Most mundane piecies of equipment are available at settlements as long as an appropriate trade building is available (for example, weapons and armour require a blacksmith). The Gear list in the Shopping section will give you an idea of an average price for an item, but it may change depending on local factors.</p>
        <p>For magical or technological equipment, you will only find (or sell) them in the larger settlements such as cities. You may be able to find buyers that are rich enough outside of these locations, but there is no guarantee that they will be interested in the piece that you have to offer.</p>

        <p class="text-primary"><strong>4. Where can we go to get armour custom fitted for this monster or beast I just befriended?</strong></p>
        <p>You can't use any old blacksmith for highly custom pieces. You will need to seek out a master of the craft, which can usually be found in the larger settlements. The <a href="/#/world?world=nations&nation=federation">Federation of Guilds</a> in the land of Bounty are especially known for their high quality and masterwork gear.</p>

        <p class="text-primary"><strong>5. Where can we go for healing?</strong></p>
        <p>Most settlements will have a healer (or someone who does healing part-time), but for more serious injuries you will either need to send for an experienced doctor or transport the patient to them. Most local healers should be able to deal with most common versions of poisons and dieseases. Take a look at the <a href="/#/shopping?shopping=service&service=healing">healing services</a> for a rough guide on what is available.</p>

        <p class="text-primary"><strong>6. Is resurrection possible?</strong></p>
        <p>Yes, although it will draw the attention and ire of <a href="/#/world?world=deities&deity=baltha">Baltha</a>. The God does not appreciate when a soul is taken from their domain. Because of this, people with the knowledge of how to resurrect the dead either need a very good reason or be very well compensated.</p>

        <p class="text-primary"><strong>7. Is there a cure for undeath (zombies, ghouls and vampires)?</strong></p>
        <p>Yes, but again it will involve taking a soul back from the nether and therefore draw Baltha's attention. Baltha does not care for the undead themselves, and they can be destroyed without drawing the attention of the God.</p>

        <p class="text-primary"><strong>8. Are there any places where swords are illegal, magic is outlawed, or other notable hassles from the law?</strong></p>
        <p>Most large settlements frown on or restrict the open-carry of weapons while inside the settlement. But the only major thing is to not go into debt with a dwarf; the <a href="/#/world?world=nations&nation=federation">Federation of Guilds</a> in the land of Bounty have legalised slavery as an acceptable form of debt-recovery.</p>

        <p class="text-primary"><strong>9. What monsters are terrorizing the countryside sufficiently that if I kill them I will become famous?</strong></p>
        <p>There are monsters everywhere on Terrea, but of particular note are: Aboleths, Dragons, Giants, Krakens, Remorhazes', Vampires</p>

        <p class="text-primary"><strong>10. Are there any wars we can fight in?</strong></p>
        <p>The <a href="/#/world?world=nations&nation=partisans">Partisans</a> are freedom fighters trying to liberate the nations of the Lefantia, Teztec, and Azia from the expansionist <a href="/#/world?world=nations&nation=hentergrey">Hentergrey Empire</a>. The Orcs are currently raiding both the Mermen of <a href="/#/world?world=nations&nation=myrmiddon">Myrmiddon</a> and the <a href="/#/world?world=nations&nation=snvert">Snvert</a>, but it is not a war of conquest.</p>

        <p class="text-primary"><strong>11. How about gladitorial arenas to compete in and with glory and fabulous prizes?</strong></p>
        <p>The Orc Tribes and Goblin city-states love their combat games (especially those that go to the death), while the Hentergrey Empire indulges in formalised tournaments. The other nations may sometimes dabble in combat-based entertainment, but it is not a regular part of their culture.</p>

        <p class="text-primary"><strong>12. Where can I hire mercenaries? Or find sages and other knowledge specialists?</strong></p>
        <p>Mercenaries can be found almost anywhere, since wandering monsters are a constant threat. Orcish pirates also terrorize the seas. As for knowledge experts, it will depend on the rarity of the knowledge. But it should be safe to assume that nation capitals are sufficiently large enough to support these types of experts.</p>

        <p class="text-primary"><strong>13. Is there any magic guilds or orders that we can join to get more spells/artifacts?</strong></p>
        <p>The Academy is the most pervasive institution in Terrea, as it is decentralised and focuses on sharing knowledge. Members of the academy constantly submit papers on magic theory (whether it is spectral-, primordial-, or nature-based) and try to increase the shared knowledge pool.</p>
        <p>For spectral-based magic there are some scattered schools that teach a specific form of harnessing spectral powers, but they guard their secrets zealously. To gain their knowledge, you will need to earn their trust and keep secret any knowledge gained. These schools are generally reclusive and avoided by the general populace because of the rumours surrounding the initiation to become a spectre-user.</p>
        <p>The S.N.V.E.R.T (Snvert New Viable Elemental Retrieval Team) are an expedition force that seeks out primordial shards and new Gauld technology to bring back for the benefit of all Snvert. They wish to avoid the economic disaster facing the Snvert peoples, and also rid their lands of the Orc menance.</p>

        <p class="text-primary"><strong>14. Are there any secret societies that I could join or fight?</strong></p>
        <p>Secret societies are secret for a reason, but there are some rumours and conspiracies that continue to stay alive. These include:</p>
        <ul>
          <li>The Collectors are specters that are hoarding any and all secrets related to specter powers, as they deem that mortals are not worthy of the power. They are rumoured to be based around the ruins of Trellisanthe, and are supposedly behind the tragic "accidents" that befall any expedition to the ruins.</li>
          <li>The nation of Illumi Naati are rumoured to have special agents placed throughout all levels of government in Terrea. These agents use a silver-tongue to beguile those in power, and are backed by heavy hitting special force. No one knows what their agenda is, but rumours are that they are working with the Collectors.</li>
          <li>There are ongoing rumours that the rulers of the Hentergrey Empire, the Perlio dynasty, have gone mad and have a dark pact with Primus, ruler of the Shadowrealm. The expansion of the Empire is seen as a way to cover mass sacrifices that give Primus the power they need to leave the Shadowrealm and defeat the Gods once and for all.</li>
          <li>The Dragons of the Citadel covet rulership over all of Terrea, but are too focused on internal power struggles. But there is a constant fear that some dragons are making shadowy moves to consolidate power among mortals, and eventually take control.</li>
        </ul>

        <p class="text-primary"><strong>15. What food is there to eat?</strong></p>
        <p>Most modern food exist in Terrea, and are traded widely. It shouldn't be hard to find your favourite dish, although substitute ingredients may be used.</p>
        <q-markup-table flat dense wrap-cells>
          <thead>
            <th>Region</th>
            <th>Foods</th>
            <th>Meats</th>
          </thead>
          <tbody>
            <tr>
              <td style="width: 10%"><strong class="text-primary">World Center</strong></td>
              <td>
                <ul>
                  <li>Apples</li>
                  <li>Artichokes</li>
                  <li>Asparagus</li>
                  <li>Cabbages</li>
                  <li>Carrots</li>
                  <li>Clover</li>
                  <li>Figs</li>
                  <li>Hazelnuts</li>
                  <li>Honey</li>
                  <li>Hops</li>
                  <li>Leeks</li>
                  <li>Lettuce</li>
                  <li>Mustard SeedM</li>
                  <li>Peas</li>
                  <li>Sugar Beets</li>
                  <li>Wheat</li>
                </ul>
              <td>
                <ul>
                  <li>Beef</li>
                  <li>Fish</li>
                  <li>Game (Boar, Deer, Rabbit, Pheasant, Quail)</li>
                  <li>Lamb</li>
                  <li>Pork</li>
                  <li>Poultry (Chicken &amp; Duck)</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td style="width: 10%"><strong class="text-primary">The Levengeti</strong></td>
              <td>
                <ul>
                  <li>Aniseed</li>
                  <li>Barley</li>
                  <li>Cabbages</li>
                  <li>Chickpeas</li>
                  <li>Coffee</li>
                  <li>Cumin</li>
                  <li>Dates</li>
                  <li>Grapes</li>
                  <li>Hops</li>
                  <li>Olives</li>
                  <li>Parsely</li>
                  <li>Rye</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Beef</li>
                  <li>Fish</li>
                  <li>Game (Antelope, Impala, Ostrich)</li>
                  <li>Lamb</li>
                  <li>Poultry (Chicken)</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td style="width: 10%"><strong class="text-primary">Tezonian Jungle</strong></td>
              <td>
                <ul>
                  <li>Cacao (Cocoa beans)</li>
                  <li>Cassava</li>
                  <li>Chilli peppers</li>
                  <li>Corn (Maize)</li>
                  <li>Papaya</li>
                  <li>Peanuts</li>
                  <li>Pineapple</li>
                  <li>Pumpkin</li>
                  <li>Sweet Potato</li>
                  <li>Vanilla</li>
                  <li>Yams</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Fish</li>
                  <li>Game (Fowl, Crayfish, Gophers)</li>
                  <li>Poultry (Turkey &amp; Duck)</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td style="width: 10%"><strong class="text-primary">Azia Desert</strong></td>
              <td>
                <ul>
                  <li>Olives</li>
                  <li>Peas</li>
                  <li>Peppercorn</li>
                  <li>Sesame</li>
                  <li>Sorghum</li>
                  <li>Sumac</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Fish</li>
                  <li>Game (Camel)</li>
                  <li>Goat</li>
                  <li>Lamb</li>
                  <li>Poultry (Chicken)</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td style="width: 10%"><strong class="text-primary">Naati Badlands</strong></td>
              <td>
                <ul>
                  <li>Alfafa</li>
                  <li>Almonds</li>
                  <li>Asparagus</li>
                  <li>Cherries</li>
                  <li>Clover</li>
                  <li>Garlic</li>
                  <li>Hazelnuts</li>
                  <li>Hops</li>
                  <li>Lettuce</li>
                  <li>Onions</li>
                  <li>Rye</li>
                  <li>Spinach</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Fish</li>
                  <li>Game (Camel)</li>
                  <li>Goat</li>
                  <li>Lamb</li>
                  <li>Poultry (Chicken)</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td style="width: 10%"><strong class="text-primary">Tauria</strong></td>
              <td>
                <ul>
                  <li>Alfafa</li>
                  <li>Almonds</li>
                  <li>Asparagus</li>
                  <li>Barley</li>
                  <li>Carrots</li>
                  <li>Cherries</li>
                  <li>Chickpeas</li>
                  <li>Clover</li>
                  <li>Fava Beans</li>
                  <li>Hazelnuts</li>
                  <li>Hops</li>
                  <li>Lentils</li>
                  <li>Onions</li>
                  <li>Peas</li>
                  <li>Rye</li>
                  <li>Spinach</li>
                  <li>Wheat</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Beef</li>
                  <li>Fish</li>
                  <li>Game (Boar, Deer, Rabbit, Pheasant, Quail)</li>
                  <li>Lamb</li>
                  <li>Pork</li>
                  <li>Poultry (Chicken &amp; Duck)</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td style="width: 10%"><strong class="text-primary">Snvert Icelands</strong></td>
              <td>
                <ul>
                  <li>Cabbage</li>
                  <li>Mushrooms</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Fish</li>
                  <li>Game (Seabirds, Reindeer, Seals)</li>
                  <li>Goats</li>
                  <li>Poultry (Chicken)</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td style="width: 10%"><strong class="text-primary">Shattered Isles</strong></td>
              <td>
                <ul>
                  <li>Apricots</li>
                  <li>Cabbages</li>
                  <li>Cinnamon</li>
                  <li>Cucumber</li>
                  <li>Eggplant</li>
                  <li>Grapefruit</li>
                  <li>Grapers</li>
                  <li>Hops</li>
                  <li>Lemon</li>
                  <li>Melons</li>
                  <li>Oranges</li>
                  <li>Peaches</li>
                  <li>Rice</li>
                  <li>Soyabean</li>
                  <li>Taro root</li>
                  <li>Tea</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Fish</li>
                  <li>Game (Deer)</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td style="width: 10%"><strong class="text-primary">Treasure Islands</strong></td>
              <td>
                <ul>
                  <li>Bananas</li>
                  <li>Chickpeas</li>
                  <li>Cinnamon</li>
                  <li>Clover</li>
                  <li>Coconuts</li>
                  <li>Cucumber</li>
                  <li>Dates</li>
                  <li>Eggplant</li>
                  <li>Ginger</li>
                  <li>Mangos</li>
                  <li>Melons</li>
                  <li>Pigeonpeas</li>
                  <li>Rice</li>
                  <li>Sugarcane</li>
                  <li>Tea</li>
                  <li>Yams</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Fish</li>
                  <li>Game (Deer)</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td style="width: 10%"><strong class="text-primary">Bounty</strong></td>
              <td>
                <ul>
                  <li>Fungi</li>
                  <li>Moss</li>
                  <li>Mushrooms</li>
                  <li>Sorghum</li>
                  <li>Watermelon</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Fish</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td style="width: 10%"><strong class="text-primary">Orland</strong></td>
              <td>
                <ul>
                  <li>Avacado</li>
                  <li>Beans</li>
                  <li>Blueberries</li>
                  <li>Cacao (Cocoa Beans)</li>
                  <li>Corn (Maize)</li>
                  <li>Cranberries</li>
                  <li>Papayas</li>
                  <li>Pumpkin</li>
                  <li>Strawberries</li>
                  <li>Vanilla</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Beef</li>
                  <li>Fish</li>
                  <li>Game (Bison, Deer)</li>
                  <li>Lamb</li>
                  <li>Poultry (Chicken)</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td style="width: 10%"><strong class="text-primary">Crystalis</strong></td>
              <td>
                <ul>
                  <li>Fungi</li>
                  <li>Moss</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Fish</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </q-markup-table>
        <br />

        <p class="text-primary"><strong>16. Who is the most powerful person? The greatest warrior? The richest person?</strong></p>
        <p>The Hentergrey Emperor is the most politically powerful person in Terrea, commanding the largest continent, the largest armies, and the largest cities.</p>
        <p>The richest person is an ongoing competition between the Mermen and the Dwarves. Currently the fortunes of the Mermen are waning as the Orcs raid their trade fleets, but this has also disrupted the trade routes of the Dwarves.</p>
        <p>The greatest warriors are to be found among the Hentergrey Empire's troops, although the Partisans have many warriors that have gain reknown by standing against the Empire. The Orcs can also lay claim to the title, as their constant raiding provides fertile ground for warrior training.</p>
        <p>The most powerful specter user is unknown, since many of the schools are secretive and avoid displaying their prowess so that their enemies cannot learn their secrets.</p>

      </q-tab-panel>
      <q-tab-panel name="settings">
        <settings></settings>
      </q-tab-panel>
      <q-tab-panel name="credits">
        <div class="text-h4 q-mb-md text-primary">About &amp; Resources</div>
        <p>You are using version {{ version }}. You can see the available version at the <a href="https://github.com/almightynassar/almighty-rpg-manager/releases">releases page</a></p>
        <div class="text-h6 text-primary">Rules, References &amp; Resources</div>
        <ul>
          <li>D&amp;D 5E System Reference Document (<a target="_blank" href="https://open5e.com/">open5e</a> &amp; <a target="_blank" href="https://www.5esrd.com/">5esrd</a>)</li>
          <li><a target="_blank" href="https://www.dnd-compendium.com/">The D&amp;D Compendium</a>, a collection of tabletop RPG resources across the web</li>
          <li>An easy to use <a target="_blank" href="https://crobi.github.io/dnd5e-quickref/preview/quickref.html">Player Reference</a></li>
          <li><a target="_blank" href="https://www.dndbeyond.com/">D&amp;D Beyond</a>, the official online resource for D&amp;D</li>
        </ul>
        <div class="text-h6 text-primary">Game Tools &amp; Generators</div>
        <ul>
          <li><a target="_blank" href="https://donjon.bin.sh/">donjon.sh</a>, the premier source of random generators and other DM tools</li>
          <li><a target="_blank" href="http://chaoticshiny.com/">Chaotic Shiny</a> has a whole heap of narrative focused generators</li>
          <li><a target="_blank" href="http://autorolltables.github.io/#">Autorolltables</a> is a flexible roll-table that covers a lot of bases</li>
          <li><a target="_blank" href="https://kobold.club/fight/#">Kobold Fight Club</a> is an Encounter Generator &amp; Initiative Tracker</li>
          <li><a target="_blank" href="http://rolladvantage.com/tokenstamp/">Token Maker</a> that can be used for Roll20 and other tools</li>
          <li><a target="_blank" href="http://rpgtinker.com/">RPG Tinker</a> generates NPCs on the fly</li>
        </ul>
        <div class="text-h6 text-primary">Mapping</div>
        <ul>
          <li><a target="_blank" href="https://inkarnate.com/login/">Inkarnate</a> is a really nice world &amp; regional map maker</li>
          <li><a target="_blank" href="https://davesmapper.com/">Dave's mapper</a>, a simple to use battle-map generator</li>
          <li><a target="_blank" href="https://azgaar.github.io/Fantasy-Map-Generator/">Fantasy world map generator</a> for quickly creating a fantasy world</li>
          <li><a target="_blank" href="http://pyromancers.com/">Dungeon map maker</a> is a tool for creating nice looking battle-maps</li>
          <li><a target="_blank" href="https://watabou.itch.io/medieval-fantasy-city-generator">City generator software</a> by watabou</li>
        </ul>
        <div class="text-h6 text-primary">Homebrew</div>
        <ul>
          <li><a target="_blank" href="https://homebrewery.naturalcrit.com/">Homebrewery</a>, where you can make your homebrew look official</li>
          <li><a target="_blank" href="https://drive.google.com/file/d/0B3jTpp41Jz9VbUZZa29YcVYwLU0/view">Monster Harvesting Rules</a></li>
          <li><a target="_blank" href="https://drive.google.com/file/d/0B8XAiXpOfz9cMWt1RTBicmpmUDg/view">Sane Magical Prices</a></li>
        </ul>
        <div class="text-h6 text-primary">Worldbuilding</div>
        <ul>
          <li><a target="_blank" href="http://kennethjorgensen.com/worldbuilding/resources">A big Worldbuilding resource</a> compiled by Kenneth Jorgensen</li>
          <li><a target="_blank" href="http://n.bellok.de/wikibox/">Wikibox</a> makes wikipedia style battle summaries</li>
          <li>"Grain into Gold - A Fantasy World Economy" by Board Enterprises. <a target="_blank" href="http://www.warehouse23.com/products/BEN3610">Purchase Here</a></li>
        </ul>
        <div class="text-h6 test-primary">Other</div>
        <ul>
          <li><a target="_blank" href="https://www.youtube.com/channel/UCDed9jQ1Y1gKeyjvkyFGkCA">Michael Ghelfi - RPG Ambiences &amp; Music</a></li>
        </ul>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
import { version } from '../../package.json'
import Settings from './Settings'

export default {
  name: 'PageIndex',
  components: {
    Settings
  },
  data: function () {
    return {
      tab: 'home',
      tag: null,
      version: 'v' + version
    }
  },
  mounted () {
    this.$axios.get('https://api.github.com/repos/almightynassar/almighty-rpg-manager/releases/latest')
      .then((response) => {
        this.tag = response.data.tag_name
      })
      .finally(() => {
        if (this.tag) {
          if (this.tag !== this.version) {
            this.$q.notify({
              position: 'top',
              timeout: 20000,
              color: 'negative',
              caption: 'Your version is ' + this.version + ', while the latest version is ' + this.tag + '. Please check the "About & Resources" tab for a link to the releases page.',
              icon: 'report_problem',
              message: 'Warning: Version does not match'
            })
          }
        } else {
          this.$q.notify({
            position: 'top',
            timeout: 20000,
            color: 'negative',
            caption: 'Could not get the latest version number; Is your internet on?',
            icon: 'report_problem',
            message: 'Error: Version Number'
          })
        }
      })
  }
}
</script>
