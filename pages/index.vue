<template>
  <div>
    <el-button type="primary" icon="el-icon-edit">123</el-button>
    <nuxt-link to="/todos" class="w80 h60 flex ai-center jc-center bg-main font14 c-white">todo page</nuxt-link><br>
    <button class="w60 h20 bg-main mt20 mb20" @click="onBtn">click me</button>
    <div id="con" ref="con" class="box" contenteditable="true" @keyup="message_input">
      <!-- <span class="wait-at" contenteditable="false">hell12o</span>123 -->
    </div>
    <section class="container">
      <div class="flex">flex</div>
      <div>
        <app-logo />
        <div class="font24 c-main">{{ mark }}</div>
        <div>
          <i class="i-loading c-main font24" /></div>
        <input
          v-model="mark"
          type="text"
          @keyup.enter="show()"
          @keyup.delete="onKeyup"
          @blur="blur"
        >
      </div>
    </section>
  </div>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";

export default {
  components: {
    AppLogo
  },
  data() {
    return {
      mark: "hello"
    };
  },
  mounted() {
    console.log(this, "mounted");
    // document.querySelector("#con").addEventListener("paste", this.conListen);
    // document.removeEventListener("paste", this.docListener, false);
    // document.addEventListener("paste", this.docListener, false);
  },
  methods: {
    message_input(e) {
      // console.log("con", e, e.code);
    },
    onBtn() {
      const ele = document.getElementById("con");
      ele.innerHTML =
        ele.innerHTML +
        `<span class="wait-at" contenteditable="false">lalala</span>`;
    },
    show() {
      alert("enter!!!!!");
    },
    onFocus() {
      alert("focus");
    },
    onKeyup(e) {
      console.log(e, "up");
    },
    blur() {
      console.log("blur");
    }
  }
};
</script>

<style>
.box {
  width: 500px;
  height: 300px;
  padding: 10px;
  background: #f2f2f2;
}
.wait-at {
  background: tomato;
  padding: 5px;
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
}
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
}
</style>
