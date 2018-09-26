<template>
  <div>
    <nuxt-link to="/" class="w80 h60 flex ai-center jc-center bg-main font14 c-white">todo page</nuxt-link>
    <ul>
    <li v-for="(todo, index) in todos" :key="index">
      <input type="checkbox" :checked="todo.done" @change="toggle(todo)">
      <span :class="{done: todo.done }">{{ todo.text }}</span>
      <button @click="remove(todo)">删除</button>
    </li>
    <li><input placeholder="今天你想做点啥" @keyup.enter="addTodo"></li>
  </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    todos() {
      return this.$store.state.todos.list
    }
  },
  methods: {
    addTodo(e) {
      this.$store.commit('todos/add', e.target.value)
      e.target.value = ''
    },
    ...mapMutations({
      toggle: 'todos/toggle',
      remove: 'todos/remove'
    })
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
