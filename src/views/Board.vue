<template>
  <main class="Table">
    <h1>Table</h1>
    <select id="comp" v-model="comp">
      <option :value="null" selected> - </option>
      <option v-for="round of score.rounds" :key="round.idx" :value="round.idx">
        {{ round.name }}
      </option>
    </select>
    <Table :score="score" :comp="comp" />
  </main>
</template>

<script>
import Table from "@/components/Table.vue";
import { update } from "@/gt";

export default {
  name: "Board",
  components: {
    Table,
  },
  data() {
    const score = update();
    return {
      score,
      comp: null,
    };
  },
};
</script>
