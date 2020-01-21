<template>
  <div id="app">
    <div :id="55" v-displace @onMouseDown="log" class="item">
      im a div please drag me
    </div>

    <div
      v-if="!showHide"
      :id="2"
      v-displace="{ customMove }"
      @onMouseDown="log"
      class="item"
    >
      im a div with custom move please drag me
    </div>
    <div class="item">
      im a not draggable
    </div>
    <button @click="showHide = !showHide">Toggle</button>
  </div>
</template>

<script>
import { displace } from "./index";

export default {
  name: "app",
  directives: {
    displace
  },
  data() {
    return {
      showHide: true
    };
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
