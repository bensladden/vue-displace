# vue-displace

Vue Directive to allow dragging elements or components. Uses [displacejs](https://github.com/catc/displace) under the hood

<p align="center">
	<img src="https://flat.badgen.net/github/branches/bensladden/vue-displace" alt="branches">
	<img src="https://flat.badgen.net/github/releases/bensladden/vue-displace" alt="releases">
	<img src="https://flat.badgen.net/github/open-issues/bensladden/vue-displace" alt="openIssues">
	<img src="https://flat.badgen.net/github/last-commit/bensladden/vue-displace" alt="lastCommit">
	<img src="https://flat.badgen.net/github/license/bensladden/vue-displace" alt="license">
</p>

## ⚙️ Installation
```sh
$ npm install vue-displace
```
## 📄 Documents
[Example](https://codesandbox.io/s/vue-displace-myxdb)

[displacejs](https://github.com/catc/displace)

## 🚀 How to use in Vue

In main.js
```vue
import displace from "vue-displace";

Vue.use(displace)
```

```vue
<template>
  <div id="app">
        <div :id="55" v-displace @onMouseDown="log" @onMouseMove="log" @onMouseUp="log" class="item">
      im a div please drag me
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    log(e) {
      console.log(e);
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

```

Events emitted:
onMouseDown
onMouseMove
onMouseUp
onTouchStart
onTouchMove
onToughStop

customMove and ignoreFn are passed as follows:

```vue
v-displace="{customMove:someMethodHere, ignoreFn:someOtherMethodHere}"
```

## ⭐️ Show Your Support
Please give a ⭐️ if this project helped you!


## 👏 Contributing

If you have any questions or requests or want to contribute to `vue-displace` or other packages, please write the [issue](https://github.com/bensladden/vue-displace/issues) or give me a Pull Request freely.

## 🐞 Bug Report

If you find a bug, please report to us opening a new [Issue](https://github.com/bensladden/vue-displace/issues) on GitHub.

## ⚙️ Development
### `npm run serve`

Runs the app in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.