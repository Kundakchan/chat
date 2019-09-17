<template>
  <div id="app">
    <header>
      <app-header></app-header>
    </header>
    <main class="uk-margin-top">
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
