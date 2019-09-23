<template>
  <div id="app">
    <header>
      <app-header></app-header>
    </header>
    <main>
      <router-view/>
    </main>
    <footer></footer>
  </div>
</template>

<script>
import header from '@/components/header.vue'
export default {
  components: {
    'app-header': header
  }
}
</script>
