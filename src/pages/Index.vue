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
      <q-tab name="credits" icon="settings" label="About &amp; Resources" />
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="home">
        <div class="text-h4 q-mb-md text-primary">Welcome to Terrea</div>
        <p>Terrea is a low-magic world that is split into multiple overlapping realms. The Gods of these realms are temperamental and fickle, but are united against threats to the standing order. The Shadow Realm stands as a refuge for the last peoples to rise up against the Gods, and their magic-powered technological wonders are still scattered in decaying ruins across the world. The uprising also left behind the terrible monsters that the Gods used to fight against the mortals.</p>
        <p>As adventurers in Terrea you can choose to fight back against the monstrous terrors that plague the good and honest citizens, or delve deep into ancient ruins and plunder their powerful secrets. You can take part in the politics of the day, making sure that the people are well-looked after or bowing down in servitude to their betters. You can join the struggle alongside freedom fighters, stand firm with the Hentergrey Empire to maintain order, or go plundering with Orcish raiders. And if that all seems too grand for you, simply try to make an honest living as a humble adventurer that will eventually settle down with family and friends.</p>
        <q-separator />
        <div class="text-h4 q-mb-md text-primary">FAQ</div>
        <p class="text-primary"><strong>1. What's the deal with religion on Terrea?</strong></p>
        <p>The Gods of Terrea act based on their whims, and are less concerned with morality or concepts of good and evil. Artra's domain is Creation which includes the birth of new life, but also equally the conception and realization of the terrible weapons, devices and monsters designed to end that life. Baltha represents Entropy which includes death, but also equally the resolution of terrible conflicts that allow peace to finally reign. Mortals simply try to appease the Gods to avoid their ire, and occassionally petition their favour for a good harvest or some other boon. For the Clerics and Paladins of Terrea, this means that their power does not come directly from the Gods but instead from their steadfast faith and belief. Their faith is so true that it allows the Cleric or Paladin to manipulate the aether directly and bend reality to their will.</p>
        <p class="text-primary"><strong>2. Where can we go to buy equipment?</strong></p>
        <p>Most mundane piecies of equipment are available at settlements as long as an approriate trade building is available (for example, weapons and armour require a blacksmith). The Gear list in the Shopping section will give you an idea of an average price for an item, but it may change depending on local factors.</p>
        <p>For magical or technological equipment, you will only find (or sell) them in the larger settlements such as cities. You may be able to find buyers that are rich enough outside of these locations, but there is no guarantee that they will be interested in the piece that you have to offer.</p>
        <p class="text-primary"><strong>3. Where can we go to get armour custom fitted for this monster or beast I just befriended?</strong></p>
        <p>You can't use any old blacksmith for highly custom pieces. You will need to seek out a master of the craft, which can usually be found in the larger settlements. The Federation of Guilds in the land of Bounty are especially known for their high quality and masterwork gear.</p>
        <p class="text-primary"><strong>4. Where can we go for healing?</strong></p>
        <p>Most settlements will have a healer (or someone who does healing part-time), but for more serious injuries you will either need to send for experienced doctors or transport the patient to them. Most local healers should be able to deal with most common versions of poisons and dieseases.</p>
        <p class="text-primary"><strong>5. Is resurrection possible?</strong></p>
        <p>Yes, although it will draw the attention and ire of Baltha. Because of this, people with the knowledge of how to resurrect the dead either need a very good reason or be very well compensated.</p>
        <p class="text-primary"><strong>6. Is there a cure for undeath (zombies, ghouls and vampires)?</strong></p>
        <p>Yes, but again it will involve taking a soul back from the nether and therefore draw Baltha's attention. Baltha does not care for the undead themselves, and they can be destroyed with impunity.</p>
        <p class="text-primary"><strong>7. Are there any places where swords are illegal, magic is outlawed, or other notable hassles from the law?</strong></p>
        <p>Most large settlements frown on or restrict the open-carry of weapons while inside the settlement. But the only major thing is to not go into debt with a dwarf; the Federation of Guilds in the land of Bounty have legalised slavery as an acceptable form of debt-recovery.</p>
        <p class="text-primary"><strong>8. What monsters are terrorizing the countryside sufficiently that if I kill them I will become famous?</strong></p>
        <p>There are monsters everywhere on Terrea, but of particular note are: Aboleths, Dragons, Giants, Krakens, Remorhazes', Vampires</p>
        <p class="text-primary"><strong>9. Are there any wars we can fight in?</strong></p>
        <p>The Partisans are freedom fighters trying to liberate the nations of the Lefantia, Teztec, and Azia from the expansionist Hentergrey Empire. The Orcs are currently raiding both the Mermen and the Snvert, but it is not a war of conquest.</p>
        <p class="text-primary"><strong>10. How about gladitorial arenas to compete in and with glory and fabulous prizes?</strong></p>
        <p>The Orc Tribes and Goblin city-states love their combat games (especially those that go to the death), while the Hentergrey Empire indulges in formalised tournaments. The other nations may sometimes dabble in combat-based entertainment, but it is not a regular part of their culture.</p>
        <p class="text-primary"><strong>11. Where can I hire mercenaries? Or find sages or knowledge specialists?</strong></p>
        <p>Mercenaries can be found almost anywhere, since wandering monsters are a constant threat. Orcish pirates also terrorize the seas. As for knowledge experts, it will depend on the rarity of th knowledge. But it should be safe to assume that nation capitals are sufficiently large enough to support these types of experts.</p>
        <p class="text-primary"><strong>12. Is there any magic guilds or orders that we can join to get more spells/artifacts?</strong></p>
        <p>The Academy is the most pervasive institution in Terrea, as it is decentralised and focuses on sharing knowledge. Members of the academy constantly submit papers on magic theory (whether it is spectral-, primordial-, or nature-based) and try to increase the shared knowledge pool.</p>
        <p>For spectral-based magic there are some scattered schools that teach a specific form of harnessing spectral powers, but they guard their secrets zealously. To gain their knowledge, you will need to earn their trust and keep secret any knowledge gained. These schools are generally reclusive and avoided by the general populace because of the rumours surrounding the initiation to become a spectre-user.</p>
        <p>The S.N.V.E.R.T (Snvert New Viable Elemental Retrieval Team) are an expedition force that seeks out primordial shards and new Gauld technology to bring back for the benefit of all Snvert. They wish to avoid the economic disaster facing the Snvert peoples, and also rid their lands of the Orc menance.</p>
        <p class="text-primary"><strong>13. Are there any secret societies that I could join or fight?</strong></p>
        <p>Secret societies are secret for a reason, but there are some rumours and conspiracies that continue to stay alive. These include:</p>
        <ul>
          <li>The Collectors are specters that are hoarding any and all secrets related to specter powers, as they deem that mortals are not worthy of the power. They are rumoured to be based around the ruins of Trellisanthe, and are supposedly behind the tragic "accidents" that befall any expedition to the ruins.</li>
          <li>The nation of Illumi Naati are rumoured to have special agents placed throughout all levels of government, and are the secret rulers of Terrea. These agents use a silver-tongue to beguile those in powers, and are backed by heavy hitting special force. No one knows what their agenda is, but rumours are that they are working with the Collectors.</li>
          <li>There are ongoing rumours that the rulers of the Hentergrey Empire, the Perlio dynasty, have gone mad and have a dark pact with Primus, ruler of the Shadowrealm. The expansion of the Empire is seen as a way to cover mass sacrifices that give Primus the power they need to leave the Shadowrealm and defeat the Gods once and for all.</li>
          <li>The Dragons of the Citadel covet rulership over all of Terrea, but are too focused on internal power struggles. But there is a constant fear that one dragon or another are making shadowy moves to consolidate power among mortals, and eventually take control.</li>
        </ul>
        <p class="text-primary"><strong>14. Who is the most powerful person? The greatest warrior? The richest person?</strong></p>
        <p>The Hentergrey Emperor is the most politically powerful person in Terrea, commanding the largest continent, the largest armies, and the largest cities.</p>
        <p>The richest person is an ongoing competition between the Mermen and the Dwarves. Currently the fortunes of the Mermen are waning as the Orcs raid their trade fleets, but this has also disrupted the trade routes of the Dwarves.</p>
        <p>The greatest warriors are to be found among the Hentergrey Empire's troops, although the Partisans have many warriors that have gain reknown by standing against the Empire.</p>
        <p>The most powerful specter user is unknown, since many of the schools are secretive and avoid displaying their prowess so that their enemies cannot learn their secrets.</p>
        <p class="text-primary"><strong>15. What food is there to eat?</strong></p>
        <p>Most modern food exist in Terrea, and are traded widely. It shouldn't be hard to find your favourite dish.</p>
      </q-tab-panel>

      <q-tab-panel name="credits">
        <div class="text-h4 q-mb-md text-primary">About &amp; Resources</div>
        <p>This is an RPG Management App. It is geared for D&amp;D5E and a homebrew campaign, but can be edited via the files located in <span class="text-primary">src/assets/data</span> on the <a target="_blank" href="https://github.com/almightynassar/almighty-rpg-manager">GitHub page</a>.
        <div class="text-h6 text-primary">Rules Reference</div>
        <ul>
          <li><a target="_blank" href="https://crobi.github.io/dnd5e-quickref/preview/quickref.html">A easy to use Player reference webpage</a></li>
          <li><a target="_blank" href="https://www.dnd-compendium.com/">The D&amp;D Compendium, a massive resource</a></li>
          <li><a target="_blank" href="https://5e.tools/">5E tools, which is this manager but more comprehensive. Not sure about the legality, though... Use at your own risk</a></li>
        </ul>
        <div class="text-h6 text-primary">Game Tools &amp; Generators</div>
        <ul>
          <li><a target="_blank" href="https://donjon.bin.sh/">donjon.sh, a premier source of random generators and DM resources</a></li>
          <li><a target="_blank" href="http://autorolltables.github.io/#">A flexible roll-table that covers a lot of bases</a></li>
          <li><a target="_blank" href="https://kobold.club/fight/#">Kobold Fight Club, Encounter Generator &amp; Initiative Tracker</a></li>
          <li><a target="_blank" href="http://rolladvantage.com/tokenstamp/">Token Maker</a></li>
        </ul>
        <div class="text-h6 text-primary">Mapping</div>
        <ul>
          <li><a target="_blank" href="https://inkarnate.com/login/">Inkarnate, a really nice world &amp; regional map maker</a></li>
          <li><a target="_blank" href="https://davesmapper.com/">Dave's mapper, a simple to use battle-map generator</a></li>
          <li><a target="_blank" href="https://azgaar.github.io/Fantasy-Map-Generator/">Fantasy world map generator</a></li>
          <li><a target="_blank" href="http://pyromancers.com/">Dungeon map maker</a></li>
        </ul>
        <div class="text-h6 text-primary">Homebrew &amp; Worldbuilding</div>
        <ul>
          <li><a target="_blank" href="https://homebrewery.naturalcrit.com/">Homebrewery, where you can make your homebrew look official</a></li>
          <li><a target="_blank" href="http://n.bellok.de/wikibox/">Wikibox, which makes wikipedia style battle summaries</a></li>
          <li><a target="_blank" href="http://kennethjorgensen.com/worldbuilding/resources">A big Worldbuilding resource compiled by Kenneth Jorgensen</a></li>
          <li><a target="_blank" href="https://watabou.itch.io/medieval-fantasy-city-generator/devlog/85275/070-districts">City generator software</a></li>
          <li><a target="_blank" href="https://drive.google.com/file/d/0B3jTpp41Jz9VbUZZa29YcVYwLU0/view">Homebrew Monster Harvesting Rules</a></li>
          <li><a target="_blank" href="https://drive.google.com/file/d/0B8XAiXpOfz9cMWt1RTBicmpmUDg/view">Homebrew Sane Magical Prices</a></li>
        </ul>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
export default {
  name: 'PageIndex',
  data: function () {
    return {
      tab: 'home'
    }
  }
}
</script>
