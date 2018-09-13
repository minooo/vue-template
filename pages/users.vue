<template>
  <div>
    <nuxt-child />
    <p>Hi from {{ name }}</p>
    <nuxt-link to="/">Users.vue  page</nuxt-link>
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
    title: 'user'
  }
}
</script>
