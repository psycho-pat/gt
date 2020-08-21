<template>
  <svg height="100" width="100" viewBox="0 0 100 100">
    <polygon
      v-if="indicator > 0"
      points="50,25 90,75 10,75"
      style="fill:green;stroke-width:0"
    />
    <polygon
      v-else-if="indicator < 0"
      points="10,25 90,25 50,75"
      style="fill:red;stroke-width:0"
    />
    <polygon
      v-else
      points="10,25 90,25 90,75 10,75"
      style="fill:grey;stroke-width:0"
    />
  </svg>
</template>

<script>
export default {
  name: "Indicator",
  props: { indicator: { type: Number, default: 0 } },
};
</script>
