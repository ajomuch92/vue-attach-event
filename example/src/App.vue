<template>
  <div id="app">
    <button v-attach-event="config1" @click="originalHandler" @my-event="customHandler">Button</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    config1: {
      on: 'click',
      newEvent: 'my-event'
    }
  }),
  methods: {
    originalHandler() {
      console.log('Original event');
    },
    customHandler() {
      console.log('Custom event');
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
