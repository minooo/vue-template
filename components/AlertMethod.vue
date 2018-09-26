<template>
  <div v-show="show" v-clickoutside="handleClose">
    <div id="search">
      搜索
    </div>
  </div>
</template>

<script>
const clickoutside = {
  // https://cn.vuejs.org/v2/guide/custom-directive.html
  // 自定义指令的学习
  bind(el, binding, vnode) {
    function documentHandler(e) {
      // 判断点击的元素是否是本身，是则返回
      if(el.contains(e.target)) {
        return false
      }
      // 判断指令中是否绑定了函数
      if(binding.expression){
        // 如果绑定了函数，就调用，此处的binding.value就是handleClose方法
        binding.value(e);
      }
    }
    // 给当前元素绑定个私有变量，方便在unbind中解除事件监听
    el.__vueClickOutside__ = documentHandler;
    document.addEventListener("click", documentHandler);
  },
  update(){},
  unbind(el, bingding) {
    // 解除事件监听
    document.removeEventListener("click", el.__vueClickOutside__);
    delete el.__vueClickOutside__;
  }
}
export default {
  data() {
    return {
      show: true,
      type: 10
    };
  },
  directives: { clickoutside },
  props: ["search_text", "handle_hide_search"],
  methods: {
    handleClose(e) {
      this.show = false
    }
  }
};
</script>

<style scoped>
</style>
