<template>
  <div class="q-pa-md">
    <p>There are plenty of ancient Gauldian and modern technical artifacts lying around to find and use. Because these artifacts are not commonly found, it is difficult to assign them a price tag. Use the following table as a rough, inaccurate guide of how much the item is worth:</p>
    <q-markup-table>
      <thead>
        <tr>
          <th>Rarity</th>
          <th>Price</th>
          <th>Relative Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Common</td>
          <td>10,000 cp</td>
          <td>0.25 years wages for a middle class worker</td>
        </tr>
        <tr>
          <td>Uncommon</td>
          <td>50,000 cp</td>
          <td>Just over a years wages for a middle class worker</td>
        </tr>
        <tr>
          <td>Rare</td>
          <td>500,000 cp</td>
          <td>12 years wages for a middle class worker</td>
        </tr>
        <tr>
          <td>Very Rare</td>
          <td>5,000,000 cp</td>
          <td>120 years wages for a middle class worker</td>
        </tr>
        <tr>
          <td>Legendary</td>
          <td>50,000,000 cp</td>
          <td>1,200 years wages for a middle class worker</td>
        </tr>
      </tbody>
    </q-markup-table>
    <br />
    <q-separator />
    <div v-for="(markdown,i) in tech" :key="i">
      <q-markdown :src="markdown" no-heading-anchor-links></q-markdown>
      <q-separator />
    </div>
  </div>
</template>

<script>
import ACG from 'src/assets/md/items/active-camo-gear.md'
import ADH from 'src/assets/md/items/amulet-of-dragon-hunting.md'
import BN from 'src/assets/md/items/binoculars.md'
import BA from 'src/assets/md/items/bracers-of-archery.md'
import CF from 'src/assets/md/items/charming-fedora.md'
import DM from 'src/assets/md/items/diving-mask.md'
import DG from 'src/assets/md/items/dragonguard.md'
import DS from 'src/assets/md/items/dragons-stake.md'
import EC from 'src/assets/md/items/earpiece-communicator.md'
import EL from 'src/assets/md/items/everlasting-lantern.md'
import GR from 'src/assets/md/items/gauld-rifle.md'
import MT from 'src/assets/md/items/multipurpose-tools.md'
import NG from 'src/assets/md/items/nightvision-goggles.md'
import PGB from 'src/assets/md/items/power-gauntlets-blasting.md'
import RP from 'src/assets/md/items/replicator.md'
import RL from 'src/assets/md/items/rocket-launcher.md'
import SB from 'src/assets/md/items/silent-boots.md'
import SLB from 'src/assets/md/items/springloaded-boots.md'
import SG from 'src/assets/md/items/stun-gun.md'
import UT from 'src/assets/md/items/universal-translator.md'

export default {
  name: 'Tech',
  data: function () {
    return {
      tech: [
        ACG,
        ADH,
        BN,
        BA,
        CF,
        DM,
        DG,
        DS,
        EC,
        EL,
        GR,
        MT,
        NG,
        PGB,
        RP,
        RL,
        SB,
        SLB,
        SG,
        UT
      ]
    }
  }
}
</script>
