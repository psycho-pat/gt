<template>
  <section class="card" :style="style">
    <Avatar class="avatar" :g="g" :indicator="indicator" :first="place === 1"/>
    <Place :place="place" />
    <div class="name">{{ g.name }}</div>
    <Indicator class="indicator" :indicator="indicator" />
    <div class="score">
      <span class="total">+{{ diff }}</span>
    </div>
  </section>
</template>

<script>
import { Gentleman } from "@/gt";
import Avatar from "@/components/Avatar.vue";
import Indicator from "@/components/Indicator.vue";
import Place from "@/components/Place.vue";

export default {
  name: "CardRB",
  props: {
    g: { type: Gentleman },
    place: { type: Number },
    round: { type: Number, default: 0 },
    comp: { type: [Number, null], default: 0 },
    indicator: { type: Number, default: 0 },
  },
  components: { Avatar, Indicator, Place },
  computed: {
    score() {
      return this.g.total(this.round);
    },
    diff() {
      return this.g.diff(this.round, this.round );
    },
    style () {
      if (this.place == 1){
        return 'border-color: ' + '#d6af36';
      }
      else if (this.place == 2){
        return 'border-color: ' + '#a7a7ad';
      }
      else if (this.place == 3){
        return 'border-color: ' + '#a77044';
      }
      else{
        return 'border-color: ' + 'black';
      }
    },
  },
};
</script>

<style scoped>
.card{
  margin: 0.5em;
  background-color: rgba(0, 0, 0, 0.1);
  max-width: max-content;
  border: solid 0.4em;
  border-color: rgba(0, 0, 0, 1);
  border-radius: 0.3em;
}
img.avatar {
  width: 10em;
  height: 10em;
  grid-row: 1 / 3;
}
.indicator {
  width: 3em;
  height: 3em;
  justify-self: center;
  align-self: center;
  margin-left: 2em;
}
.card {
  display: grid;
  grid-template-columns: 10em 5em 20em;
}
.name {
  font-size: 2em;
  justify-self: center;
  align-self: center;
  font-weight: bolder;
}
.place {
  justify-self: center;
  align-self: center;
  margin-left: 2em;
}
.score {
  font-size: 2em;
  justify-self: center;
  align-self: center;
}
.total {
  font-weight: bold;
}
</style>
