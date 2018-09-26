<template>
  <div class="ptb20 plr20">
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

export default {
  components: {
    Search
  },
  data() {
    return {
      search_text: ""
    };
  },
  mounted() {
    console.log(this, "mounted");
  },
  methods: {
    clear_search_text() {
      console.log(123)
      this.search_text = "";
    }
  }
};
</script>

<style scoped>
.search-box {
  position: relative;
  z-index: 1000;
}
</style>

