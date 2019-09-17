<template>
  <nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">
      <a href="#" class="uk-navbar-item uk-logo uk-margin-right uk-margin-left">
        <icon :icon="['fas', 'comment-dots']" size='2x'></icon>
      </a>
      <ul class="uk-navbar-nav">
        <li v-for="(item, index) in links" :key="index">
          <router-link :to="item.path">{{ item.name }}</router-link>
        </li>
      </ul>
    </div>
    <div class="uk-navbar-right">
      <div class="uk-navbar-item">
        <button class="uk-button uk-button-default">
          <span class="uk-margin-small-right">ВЫЙТИ</span>
          <icon :icon="['fas', 'sign-out-alt']" size="1x"></icon>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      links: [
        {
          name: 'главная'.toUpperCase(),
          path: '/'
        },
        {
          name: 'Документацыя'.toUpperCase(),
          path: '/docs'
        },
        {
          name: 'Авторизацыя'.toUpperCase(),
          path: '/signIn'
        },
        {
          name: 'Регистрацыя'.toUpperCase(),
          path: '/signUp'
        },
        {
          name: 'Чат'.toUpperCase(),
          path: 'chat'
        }
      ]
    }
  }
}
</script>
