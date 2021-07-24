<template>
  <div id="app">
    Home1
  </div>
</template>

<script>
import alertify from 'alertify.js'

/* eslint-disable */
export default {
  name: 'App',

  data() {
    return {
      registration: null
    }
  },

  created() {
    console.log('页面 created ～')
    document.addEventListener('serviceWorkerUpdateEvent', this.appUpdateUI, {
      once: true
    })
  },

  methods: {
    appUpdateUI(e) {
      this.registration = e.detail
      console.log(e.detail, 222222, 111)
      alertify.confirm('APP UPDATE UI', () => {
        this.registration.waiting.postMessage({ type: 'SKIP_WAITING' })
      })
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
