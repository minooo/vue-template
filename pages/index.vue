<template>
  <div class="ptb20 plr20">
    <el-button
      icon="el-icon-error"
      @click="onReqPath"
    >改变{{ reqPath }}</el-button>
    <div class="flex" style="height: 250px">
      <scroll-load :reqPath="reqPath"></scroll-load>
    </div>

    <div class="search-box">
      <input
        type="text"
        class="form-control"
        v-model.trim="search_text"
      />
      <el-button
        icon="el-icon-error"
        v-if="search_text"
        @click="clear_search_text"
      >清空</el-button>
    </div>
    <search
      v-if="search_text"
      :search_text="search_text"
    />
  </div>
</template>

<script>
import Search from "~/components/Search.vue";
import ScrollLoad from "~/components/ScrollLoad.vue"

export default {
  components: {
    Search,
    ScrollLoad
  },
  data() {
    return {
      reqPath: "/api/bar",
      search_text: ""
    };
  },
  mounted() {
    console.log(this, "mounted");
  },
  methods: {
    onReqPath () {
      this.reqPath = this.reqPath === "/api/foo" ? "/api/bar" : "/api/foo"
    },
    clear_search_text() {
      console.log(123)
      this.search_text = "";
    }
  }
};
</script>

<style scoped>
.flex {
  display: flex
}
.search-box {
  position: relative;
  z-index: 1000;
}
</style>

