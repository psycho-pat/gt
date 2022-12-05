<template>
  <h1 v-if="loading">Loading …</h1>
  <main v-else class="Table">
    <header>
      <h1>
        Gentlemen Tournament 2022 - Challenge {{ score.last }}:
        {{ score.rounds[score.last].name }}
      </h1>
    </header>
    <TableRB class="table" :score="score" :comp="comp" :round="round" />
    <footer>
      <nav>
        <label for="round">Round:</label>
        <select id="round" v-model="round">
          <option :value="null" selected> latest </option>
          <option
            v-for="round of score.rounds.slice(0, score.last)"
            :key="round.idx"
            :value="round.idx"
          >
            {{ round.idx }} - {{ round.name }}
          </option>
        </select>
      </nav>
    </footer>
  </main>
</template>

<script>
import TableRB from "@/components/Table_rb.vue";
import { updateRB } from "@/gt";

export default {
  name: "Board",
  components: {
    TableRB,
  },
  async mounted() {
    this.score = await updateRB();
    this.loading = false;
    setInterval(async () => {
      this.loading = true;
      this.score = await updateRB();
      this.loading = false;
    }, 60000);
  },
  data() {
    return {
      loading: true,
      score: null,
      round: null,
    };
  },
};
</script>

<style scoped>
h1,
h2,
h3,
nav {
  display: inline;
  margin: 0;
  padding: 0;
}
h1 {
  font-size: 3em;
  font-weight: bolder;
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
header,
footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
footer {
  margin-top: 1em;
  /*visibility: hidden;*/
}
footer label {
  padding-right: 1em;
  padding-left: 2em;
}
</style>
