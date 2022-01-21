<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Nav from './components/Nav.vue'
import List from './components/List.vue'
</script>

<template>
  <Nav />
  <main id="content">
    <List />
  </main>
</template>

<style>
#app {
  @apply 
    h-full
    flex justify-evenly
  ;
}
#content {
  width: 70%;
}
</style>
