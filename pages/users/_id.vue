<template>
  <div>
    <p>Hi from {{ name }}</p>
    <nuxt-link to="/">users/_id.vue page</nuxt-link>
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
    title: 'user_id'
  }
}
</script>
