<template>
  <ol>
    <li v-for="[i, place] of sorted" :key="i">
      <CardRB
        :g="score.gents[i]"
        :round="roundMode ? round : score.last"
        :comp="compMode ? comp : null"
        :place="place"
        :indicator="previous.get(i) - place"
      />
    </li>
  </ol>
</template>

<script>
import CardRB from "@/components/Card_rb";
import { Score } from "@/gt";

export default {
  name: "TableRB",
  components: {
    CardRB,
  },
  props: {
    score: Score,
    comp: [Number, null],
    round: [Number, null],
  },
  computed: {
    roundMode() {
      return Number.isFinite(this.round);
    },
    compMode() {
      return !this.roundMode && Number.isFinite(this.comp);
    },
    sorted() {
      const ref = this.roundMode ? this.round : this.score.last;
      //const scores = this.score.gents.map(g => [g.total(ref), g.idx]);
      const scores = this.score.gents.map(g => [g.diff(ref,ref), g.idx]);
      scores.sort(([a], [b]) => b - a);
      console.log(scores,ref);
      const places = [];
      let lastScore = -1;
      let place = 0;

      for (let i = 0; i < scores.length; i += 1) {
        const [score, idx] = scores[i];
        if (lastScore !== score) {
          place = i + 1;
        }
        lastScore = score;
        places.push([idx, place]);
      }
      //console.log(places);
      return places;
    },
    previous() {
      let ref = this.score.last - 1;
      if (this.compMode) {
        ref = this.comp;
      }
      if (this.roundMode) {
        ref = this.round - 1;
      }
      if (ref >= 0) {
        //const scores = this.score.gents.map(g => [g.total(ref), g.idx]);
        const scores = this.score.gents.map(g => [g.diff(ref,ref), g.idx]);
        scores.sort(([a], [b]) => b - a);
        const places = new Map();
        let lastScore = -1;
        let place = 0;

        for (let i = 0; i < scores.length; i += 1) {
          const [score, idx] = scores[i];
          if (lastScore !== score) {
            place = i + 1;
          }
          lastScore = score;
          places.set(idx, place);
        }
        return places;
      } else {
        return new Map(this.sorted);
      }
    },
  },
};
</script>

<style scoped>
ol {
  list-style-type: none;
  display: grid;
  max-height: 90vh;
  padding: 0;
  margin: 0;
  grid-auto-flow: column;
  grid-template-rows: 1fr 1fr 1fr 1fr;
}
@media (max-width: 50em) {
  ol {
    list-style-type: none;
    display: grid;
    padding: 0;
    margin: 0;
    grid-auto-flow: row;
    grid-template-columns: 1fr;
  max-height: initial;
  }
}
</style>
