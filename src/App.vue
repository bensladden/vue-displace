<template>
  <div id="app">
    <div :id="55" v-displace @onMouseDown="log" class="item">
      im a div please drag me
    </div>

    <div :id="2" v-displace="{ customMove }" @onMouseDown="log" class="item">
      im a div with custom move please drag me
    </div>
  </div>
</template>

<script>
import { displace } from "./index";

export default {
  name: "app",
  directives: {
    displace
  },
  methods: {
    log(e) {
      console.log(e);
    },
    customMove(el, x, y) {
      console.log("customMove", x, y);
      el.style.left = x + "px";
      el.style.top = y + "px";
    }
  }
};
</script>

<style>
.item {
  width: 200px;
  height: 200px;
  background: red;
}
</style>
