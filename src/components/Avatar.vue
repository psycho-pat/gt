<template>
  <img :src="avatar" />
</template>

<script>
import { Gentleman } from "@/gt";

export default {
  name: "Avatar",
  props: {
    g: Gentleman,
    indicator: { type: Number, default: 0 },
    first: { type: Boolean, default: false },
  },
  computed: {
    avatar() {
      if (this.indicator > 0 || this.first) {
        return this.g.winner;
      } else if (this.indicator < 0) {
        return this.g.loser;
      }
      return this.g.neutral;
    },
  },
};
</script>
