<template>
  <!-- <div id="app">
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
  </div> -->
  <div id="app">
    <div class="demo__boxes box-1">
      <span class="demo__tag">Box 1</span>
      <div class="demo__one box-2">
        <span class="demo__tag">Box 2</span>
        <div class="demo__two box-3">
          <span class="demo__tag">Box 3</span>
          <div v-displace="{ constrain: true }" class="moveable">Drag me</div>
        </div>
      </div>
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
.demo__boxes {
  position: relative;
  height: 400px;
  background: #ff9800;
}
.moveable {
  position: absolute;
  width: 100px;
  height: 100px;
  background: #007bff;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: move;
  z-index: 5;
  transition: transform 0.15s ease-out, background 0.15s ease-out;
}
.demo__one {
  display: inline-block;
  background: #ffb300;
  height: 330px;
  position: relative;
  top: 40px;
  width: 500px;
}
.demo__tag {
  position: absolute;
  left: 7px;
  top: 4px;
  font-size: 1.3rem;
  color: #1a1a1a;
}
.demo__two {
  display: inline-block;
  background: #ffd700;
  height: 70%;
  position: relative;
  left: 50px;
  top: 50px;
  width: 390px;
}
</style>
