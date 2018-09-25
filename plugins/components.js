// 在这里定义可以使我们，程序运行前配置好这个插件
// plugins 属性配置的所有插件会在 Nuxt.js 应用初始化之前被加载导入。
import Vue from 'vue'
import ElementUI from 'element-ui'

// 主题改变
// https://elementui.github.io/theme-chalk-preview/#/zh-CN
// import '~/assets/styles/element-style/index.css';
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI, { size: 'small', zIndex: 3000 })


