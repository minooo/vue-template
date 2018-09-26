<template>
  <div>
    <div id="search">
      搜索
    </div>
    <div class="search-full-bg" @click="handle_hide_search"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: 10
    };
  },
  props: ["search_text", "handle_hide_search"]
};
</script>

<style scoped>
.search-full-bg {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -10;
  background: rgba(0,0,0,.2);
}
</style>
