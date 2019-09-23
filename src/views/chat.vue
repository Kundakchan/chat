<template>
  <section class="uk-container uk-container-expand uk-child-width-expand" uk-grid>
    <div class="uk-width-1-6">
      <side-bar-left></side-bar-left>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
import sideBarLeft from '@/components/sideBarLeft.vue'
export default {
  components: {
    'side-bar-left': sideBarLeft
  }
}
</script>
