<template>
  <h1 v-if="loading">Loading …</h1>
  <main v-else class="Table">
    <header>
      <h1>
        Gentlemen Tournament 2021 - Challenge {{ score.last }}:
        {{ score.rounds[score.last].name }}
      </h1>
    </header>
    <Table class="table" :score="score" :comp="comp" :round="round" />
    <footer>
      <nav>
        <label for="comp">Ref:</label>
        <select id="comp" v-model="comp">
          <option :value="null" selected> - </option>
          <option
            v-for="round of score.rounds.slice(0, score.last)"
            :key="round.idx"
            :value="round.idx"
          >
            {{ round.name }}
          </option>
        </select>
        <label for="round">Round:</label>
        <select id="round" v-model="round">
          <option :value="null" selected> - </option>
          <option
            v-for="round of score.rounds.slice(0, score.last)"
            :key="round.idx"
            :value="round.idx"
          >
            {{ round.name }}
          </option>
        </select>
      </nav>
    </footer>
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
  async mounted() {
    this.score = await update();
    this.loading = false;
    setInterval(async () => {
      this.loading = true;
      this.score = await update();
      this.loading = false;
    }, 60000);
  },
  data() {
    return {
      loading: true,
      score: null,
      comp: null,
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
}
footer label {
  padding-right: 1em;
  padding-left: 2em;
}
</style>
