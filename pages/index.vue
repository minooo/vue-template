<template>
  <div>
    <nuxt-link to="/todos" class="w80 h60 flex ai-center jc-center bg-main font14 c-white">todo page</nuxt-link><br>
    <button class="w60 h20 bg-main mt20 mb20" @click="onBtn">click me</button>
    <button class="w60 h20 bg-main mt20 mb20" @click="showSuccessMsg">alert !!!</button>
    <div id="con" ref="con" class="box" contenteditable="true" @keyup="message_input">
      <!-- <span class="wait-at" contenteditable="false">hell12o</span>123 -->
    </div>
    <section class="container">
      <div class="flex">flex</div>
      <div>
        <app-logo />
        <div class="font24 c-main">{{ mark }}</div>
        <div><i class="i-loading c-main font24" /></div>
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
import VueNotifications from "vue-notifications";
export default {
  components: {
    AppLogo
  },
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
  mounted() {
    console.log(this, "mounted");
    // document.querySelector("#con").addEventListener("paste", this.conListen);
    document.removeEventListener("paste", this.docListener, false);
    document.addEventListener("paste", this.docListener, false);
  },
  methods: {
    conListen(e) {
      if (event.clipboardData || event.originalEvent) {
        const clipboardData =
          event.clipboardData || event.originalEvent.clipboardData;
        if (clipboardData.items) {
          console.log(
            "clipboardData.items",
            clipboardData.items,
            clipboardData.items.length,
            clipboardData.items[0]
          );
        }
      }
    },
    docListener (e) {
    var cbd = e.clipboardData || e.originalEvent.clipboardData;;

    var ua = window.navigator.userAgent;

    // // 如果是 Safari 直接 return
    // if ( !(e.clipboardData && e.clipboardData.items) ) {
    //     return;
    // }

    // // Mac平台下Chrome49版本以下 复制Finder中的文件的Bug Hack掉
    // if(cbd.items && cbd.items.length === 2 && cbd.items[0].kind === "string" && cbd.items[1].kind === "file" &&
    //     cbd.types && cbd.types.length === 2 && cbd.types[0] === "text/plain" && cbd.types[1] === "Files" &&
    //     ua.match(/Macintosh/i) && Number(ua.match(/Chrome\/(\d{2})/i)[1]) < 49){
    //     return;
    // }

    console.log("cbd", cbd)
    console.log("cbd.items", cbd.items)
    const div = document.createElement("div")
    div.innerText = "hehe"
    document.body.appendChild(div)
    for(var i = 0; i < cbd.items.length; i++) {
        var item = cbd.items[i];
        console.log("item", item)
        if(item.kind == "file"){
            var blob = item.getAsFile();
            if (blob.size === 0) {
                return;
            }

            var reader = new FileReader();
            reader.onload=function(eve){
                        //判断文件是否读取完成
                         if(eve.target.readyState==FileReader.DONE)
                         {
            //读取文件完成后，创建img标签来显示服务端传来的字节数//组
                            var img =document.createElement("img");
                //读取文件完成后内容放在this===当前
            //fileReader对象的result属性中，将该内容赋值img标签//浏览器就可以自动解析内容格式并且渲染在浏览器中
                            img.src=this.result;
                        //将标签添加到id为show的div中否则，即便是有img也看不见
                            document.body.appendChild(img);
                         }
                     };
                       reader.readAsDataURL(blob);


        }
    }
},
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
