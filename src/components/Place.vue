<template>
  <div class="place">
    <span class="num">{{ place }}</span
    ><span class="suf"> {{ ordinalSuffix(place) }}</span>
  </div>
</template>

<script>
export default {
  name: "Place",
  props: { place: { type: Number, default: 0 } },
  methods: {
    ordinalSuffix(i) {
      const j = i % 10;
      const k = i % 100;
      if (j == 1 && k != 11) {
        return "st";
      }
      if (j == 2 && k != 12) {
        return "nd";
      }
      if (j == 3 && k != 13) {
        return "rd";
      }
      return "th";
    },
  },
};
</script>

<style scoped>
.num {
  font-size: 4em;
  font-weight: bolder;
}
.suf {
  font-size: 1em;
  padding-bottom: 2em;
  padding-top: 1em;
}
.place {
  display: flex;
}
</style>
