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
        <p>As adventurers in Terrea you can choose to fight back against the monstrous terrors that plague the good and honest citizens, or delve deep into ancient ruins and plunder their powerful secrets. You can take part in the politics of the day, making sure that the people are well-looked after or bowing down in servitude to their betters. You can join the struggle alongside freedom fighters, stand firm with the Hentergrey Empire to maintain order, or go plundering with Orcish raiders. And if that all seems too grand for you, simply try to make an honest living as a humble adventurere that will eventually settle down with family and friends.</p>
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
