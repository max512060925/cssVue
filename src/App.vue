<template>
  <div id="app">
    <v-header></v-header>
    <v-tab></v-tab>
    <router-view></router-view>
  </div>
</template>

<script>
import tab from '@/components/tab/tab'
import header from '@/components/header/header'
export default {
  name: 'app',
  components: {
    'v-tab': tab,
    'v-header': header
  }
}
</script>
<style>
@import "./common/index.css";
</style>
