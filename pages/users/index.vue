<template>
  <div>
    <p>Hi from {{ name }}</p>
    <nuxt-link to="/">users/index.vue page</nuxt-link>
  </div>
</template>

<script>
export default {
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
