<template>
  <div class="q-pa-md">
    <div class="text-h4 q-mb-md text-primary">Lifestyle</div>
    <p>The class table provided should give a better understanding of the lifestyle of each hireling (if an adventurer wishes to life at the class describes, they will pay the listed income as a cost).</p>
    <q-markup-table flat wrap-cells>
      <thead>
        <th>Class</th>
        <th>Min. Income / day</th>
        <th>Description</th>
      </thead>
      <tbody>
        <tr>
          <td>Squalid</td>
          <td>10 CP</td>
          <td>People in this class have shelter from the elements, but live in a desperate and stressful environment. They often find themselves going hungry.</td>
        </tr>
        <tr>
          <td>Poor</td>
          <td>20 CP</td>
          <td>This class has access to simple lodgings and food, and do without some comforts.</td>
        </tr>
        <tr>
          <td>Working Class</td>
          <td>60 CP</td>
          <td>The working class no longer have to struggle to survive, but they are not wholly comfortable.</td>
        </tr>
        <tr>
          <td>Middle class</td>
          <td>120 CP</td>
          <td>People in this class have access to decent accomodation and food, can maintain expensive equipment, and still save enough for a modest retirement.</td>
        </tr>
        <tr>
          <td>Upper Middle class</td>
          <td>200 CP</td>
          <td>This class bridges the average citizen and the weathly. They have enough disposable income to spend on and maintain a few luxuries.</td>
        </tr>
        <tr>
          <td>Wealthy</td>
          <td>400 CP</td>
          <td>This class has enough wealth that they can hire servants to do chores for them, and begin to purchase power in other forms.</td>
        </tr>
        <tr>
          <td>Aristocratic</td>
          <td>1000 CP</td>
          <td>This class generally do not experience hardship of any kind, and generally consists of the most powerful people in society.</td>
        </tr>
      </tbody>
    </q-markup-table>
    <br />
    <q-separator />
    <div class="text-h4 q-mb-md text-primary">Healing Services</div>
    <q-markup-table flat wrap-cells>
      <thead>
        <th>Service</th>
        <th>Cost</th>
        <th>Description</th>
      </thead>
      <tbody>
        <tr>
          <td>Minor nonmagical care</td>
          <td>30 CP per use of the Medicine skill</td>
          <td>Expert diagnosis, as well as treatment of minor ailments.</td>
        </tr>
        <tr>
          <td>Major nonmagical care</td>
          <td>100 CP</td>
          <td>Recovery that requires an overnight stay.</td>
        </tr>
        <tr>
          <td>Cure Wounds (magic-based)</td>
          <td>2500 CP per level</td>
          <td>A creature the hireling touches regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs. Increase healing to 1d8 for each level higher.</td>
        </tr>
        <tr>
          <td>Lesser Restoration (magic-based)</td>
          <td>5000 CP</td>
          <td>The hireling touch a creature and can end either one disease or one condition afflicting it. The condition can be blinded, deafened, paralyzed, or poisoned.</td>
        </tr>
        <tr>
          <td>Greater Restoration</td>
          <td>15000 CP</td>
          <td>The hireling imbues a creature they touch with positive energy to undo a debilitating effect. You can reduce the target's exhaustion level by one, or end one of the following effects on the target: One effect that charmed or petrified the target; One curse, including the target's attunement to a cursed magic item; Any reduction to one of the target's ability scores; One effect reducing the target's hit point maximum</td>
        </tr>
      </tbody>
    </q-markup-table>
    <br />
    <q-separator />
    <div class="text-h4 q-mb-md text-primary">Lodging</div>
    <p>See the Lifestyle description for more information about what each tier of lodging offers.</p>
    <p>Lodging may include breakfast, laundry, and access to facilities such as a bathroom.</p>
    <q-markup-table flat wrap-cells>
      <thead>
        <th>Lodging</th>
        <th>Cost per day</th>
      </thead>
      <tbody>
        <tr>
          <td>Squalid</td>
          <td>7 CP</td>
          <td>People in this class have shelter from the elements, but live in a desperate and stressful environment. They often find themselves going hungry.</td>
        </tr>
        <tr>
          <td>Poor</td>
          <td>10 CP</td>
        </tr>
        <tr>
          <td>Working Class</td>
          <td>30 CP</td>
        </tr>
        <tr>
          <td>Middle class</td>
          <td>50 CP</td>
          <td>People in this class have access to decent accomodation and food, can maintain expensive equipment, and still save enough for a modest retirement.</td>
        </tr>
        <tr>
          <td>Upper Middle class</td>
          <td>80 CP</td>
          <td>This class bridges the average citizen and the weathly. They have enough disposable income to spend on and maintain a few luxuries.</td>
        </tr>
        <tr>
          <td>Wealthy</td>
          <td>200 CP</td>
          <td>This class has enough wealth that they can hire servants to do chores for them, and begin to purchase power in other forms.</td>
        </tr>
        <tr>
          <td>Aristocratic</td>
          <td>400 CP</td>
          <td>This class generally do not experience hardship of any kind, and generally consists of the most powerful people in society.</td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script>
export default {
  name: 'ServiceList',
  data: function () {
    return {}
  }
}
</script>
