<template>
  <div>
    <p>Hi from {{ name }}</p>
    <nuxt-link to="/">Blog 页面的设置</nuxt-link>
  </div>
</template>

<script>
export default {
  layout: 'blog',
  asyncData() {
    return {
      name: process.static ? 'static' : (process.server ? 'server' : 'client')
    }
  },
  head: {
    title: 'About page'
  }
}
</script>
