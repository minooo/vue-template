<template>
<div>
  <button @click="onBtn" class="w60 h20 bg-main mt20 mb20">click me</button>
      <div class="box" id="con" contenteditable="true">
        <span class="wait-at" contenteditable="false">hell12o</span>123
      </div>
      <section class="container">
    <div class="flex">flex</div>
    <div>
      <app-logo/>
      <h1 class="title">
        {{ name }}
      </h1>
      <h2 class="subtitle">
        {{ description }}
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
      <div>{{mark}}</div>

      <input
        type="text"
        v-model="mark"
        @keyup.enter="show()"
        @keyup.delete="onKeyup"
        v-on:blur="blur"
      />
    </div>
  </section>
</div>

</template>

<script>
import AppLogo from "~/components/AppLogo.vue";
export default {
  data() {
    return {
      name: "Hello Vue",
      description: "lala",
      mark: "hello"
    };
  },
  components: {
    AppLogo
  },
  mounted() {
    console.log(this, "mounted");
  },
  methods: {
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
