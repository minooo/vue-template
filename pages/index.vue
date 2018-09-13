<template>
<div>
  <button @click="onBtn" class="w60 h20 bg-main mt20 mb20">click me</button>
  <button @click="showSuccessMsg" class="w60 h20 bg-main mt20 mb20">alert !!!</button>
      <div class="box" id="con" contenteditable="true" @keyup="message_input" ref="con">
              <!-- <span class="wait-at" contenteditable="false">hell12o</span>123 -->
      </div>
            <section class="container">
    <div class="flex">flex</div>
    <div>
      <app-logo/>
      <div class="font24 c-main">{{mark}}</div>
      <div><i class="i-loading c-main font24"></i></div>
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
import VueNotifications from "vue-notifications";
export default {
  data() {
    return {
      mark: "hello"
    };
  },
  notifications: {
    showSuccessMsg: {
      type: VueNotifications.types.success,
      title: "Hello there",
      message: "That's the success!"
    },
    showInfoMsg: {
      type: VueNotifications.types.info,
      title: "Hey you",
      message: "Here is some info for you"
    },
    showWarnMsg: {
      type: VueNotifications.types.warn,
      title: "Wow, man",
      message: "That's the kind of warning"
    },
    showErrorMsg: {
      type: VueNotifications.types.error,
      title: "Wow-wow",
      message: "That's the error"
    }
  },
  components: {
    AppLogo
  },
  mounted() {
    console.log(this, "mounted");
  },
  methods: {
    message_input(e) {
      console.log("con", e, e.code)
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
