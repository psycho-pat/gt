<template>
  <ol>
    <li v-for="([i, place], idx) of sorted" :key="i">
      <Card
        :g="score.gents[i]"
        :round="score.last"
        :comp="comp"
        :place="place"
        :indicator="previous[idx] - i"
      />
    </li>
  </ol>
</template>

<script>
import Card from "@/components/Card";
import { Score } from "@/gt";

export default {
  name: "Table",
  components: {
    Card,
  },
  props: {
    score: Score,
    comp: [Number, null],
  },
  computed: {
    sorted() {
      const scores = this.score.gents.map(g => [
        g.total(this.score.last),
        g.idx,
      ]);
      scores.sort(([a], [b]) => b - a);
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
      return places;
    },
    previous() {
      if (this.score.last > 0) {
        const scores = this.score.gents.map(g => [
          g.total(this.score.last - 1),
          g.idx,
        ]);
        scores.sort(([a], [b]) => b - a);
        return scores.map(([, idx]) => idx);
      } else {
        return this.sorted;
      }
    },
  },
};
</script>

<style scoped>
ol {
  list-style-type: none;
  display: flex;
  flex-direction: column;
}
</style>
