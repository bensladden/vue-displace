let displace = require("displacejs");
var d = [];
function bind(el, binding, vnode) {
  let options = {};
  if (binding.value) {
    options = binding.value;
  }
  let index = d.findIndex(i => {
    i.id == el.id;
  });
  if (index >= 0) {
    throw "element id must be unique";
  }
  options.onMouseDown = (el, e) => {
    if (vnode.componentInstance) {
      vnode.componentInstance.$emit("onMouseDown", {
        detail: { element: el, event: e }
      });
    } else {
      vnode.elm.dispatchEvent(
        new CustomEvent("onMouseDown", { detail: { element: el, event: e } })
      );
    }
  };
  options.onMouseMove = (el, e) => {
    if (vnode.componentInstance) {
      vnode.componentInstance.$emit("onMouseMove", {
        detail: { element: el, event: e }
      });
    } else {
      vnode.elm.dispatchEvent(
        new CustomEvent("onMouseMove", { detail: { element: el, event: e } })
      );
    }
  };
  options.onMouseUp = (el, e) => {
    if (vnode.componentInstance) {
      vnode.componentInstance.$emit("onMouseUp", {
        detail: { element: el, event: e }
      });
    } else {
      vnode.elm.dispatchEvent(
        new CustomEvent("onMouseUp", { detail: { element: el, event: e } })
      );
    }
  };
  options.onTouchStart = (el, e) => {
    if (vnode.componentInstance) {
      vnode.componentInstance.$emit("onTouchStart", {
        detail: { element: el, event: e }
      });
    } else {
      vnode.elm.dispatchEvent(
        new CustomEvent("onTouchStart", { detail: { element: el, event: e } })
      );
    }
  };
  options.onTouchMove = (el, e) => {
    if (vnode.componentInstance) {
      vnode.componentInstance.$emit("onTouchMove", {
        detail: { element: el, event: e }
      });
    } else {
      vnode.elm.dispatchEvent(
        new CustomEvent("onTouchMove", { detail: { element: el, event: e } })
      );
    }
  };
  options.onTouchStop = (el, e) => {
    if (vnode.componentInstance) {
      vnode.componentInstance.$emit("onTouchStop", {
        detail: { element: el, event: e }
      });
    } else {
      vnode.elm.dispatchEvent(
        new CustomEvent("onTouchStop", { detail: { element: el, event: e } })
      );
    }
  };
  //https://github.com/vuejs/vue/issues/2887
  vnode.context.$nextTick(() => {
    d.push({ id: el.id, disp: displace(el, options) });
  });
}

function unbind(el) {
  let index = d.findIndex(i => {
    return i.id === el.id;
  });
  if (index >= 0) {
    let instance = d[index].disp;
    instance.destroy();
    d.splice(index, 1);
  }
}

export default {
  bind,
  unbind
};
