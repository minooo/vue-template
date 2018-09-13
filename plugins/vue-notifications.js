// 在这里定义可以使我们，程序运行前配置好这个插件
// plugins 属性配置的所有插件会在 Nuxt.js 应用初始化之前被加载导入。
import Vue from 'vue'
import VueNotifications from 'vue-notifications'
import swal from 'sweetalert'// https://github.com/t4t5/sweetalert

function toast ({title, message, type, timeout, cb}) {
  if (type === VueNotifications.types.warn) type = 'warning'
  return swal(title, message, type)
}

const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
}

Vue.use(VueNotifications, options)
