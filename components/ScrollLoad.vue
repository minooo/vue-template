<template>
  <div class="overflow-y equal" @scroll="scroll" ref="scrollEle">
    <div v-if="isLoading">123</div>
    <div style="height: 500px; background: red"></div>
  </div>
</template>

<script>
import debounce from "lodash/debounce"

export default {
  data() {
    return {
      listData: [],
      dataNoMore: false,
      isLoading: false,
      netBad: false
    };
  },
  props: ["search_text", "reqPath", "reqParam"],
  computed: {

  },
  methods: {
    scroll: debounce(function(e){
      const app = this
      if (app.isLoading || app.dataNoMore) return;

      const { scrollHeight, scrollTop, clientHeight } = e.target
      const scrollPercent = Math.floor(scrollHeight - scrollTop - clientHeight)
      if (scrollPercent < 100) {
        app.loadMore()
      }
    }, 200),
    loadMore (isNewStart) {
      console.log("触发loadmore", isNewStart)
      const app = this
      const scrollEle = app.$refs
      if (!app.isNewStart && (app.isLoading || app.dataNoMore)) return;
      if (isNewStart) {
        scrollEle.scrollTop = 0;
      }
      app.isLoading = true;
      const offset = isNewStart ? 0 : listData.length


    }
  },
  watch: {
    search_text: {
      immediate: true,
      handler: function(){
        console.log("变化了。。")
        this.loadMore(true)
      }
    },
    reqPath: {
      immediate: true,
      handler: function(){
        console.log("变化了。。")
        this.loadMore(true)
      }
    }
  },
  mounted () {

  }
};
</script>

<style scoped>
.equal {
  flex: 1
}
.overflow-y {
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  transform: translate3d(0, 0, 0);
}
</style>
