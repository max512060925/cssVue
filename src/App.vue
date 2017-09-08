<template>
  <div id="app">
    <v-header :classMap="classMap"></v-header>
    <v-tab></v-tab>
    <router-view :classMap="classMap"></router-view>
  </div>
</template>

<script>
import tab from '@/components/tab/tab'
import header from '@/components/header/header'
export default {
  name: 'app',
  data()	{
      return	{
          classMap: ['decrease','discount','guarantee','invoice','special']
      }
  },
  components: {
    'v-tab': tab,
    'v-header': header
  }
}
</script>
<style>
@import "./common/index.css";
</style>
