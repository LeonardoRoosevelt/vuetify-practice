<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import _ from 'lodash'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  created () {
    this.lodashTest()
  },
  methods: {
    lodashTest () {
      const result = _.compact([0, 1, false, 2, '', 3])
      console.log(result)
    }
  }
}
</script>
