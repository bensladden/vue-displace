import displace from "./directive/displace";

export default {
  install(Vue) {
    Vue.directive("displace", displace);
  }
};

export { displace };
