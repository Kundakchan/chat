<template>
  <nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">
      <a href="#" class="uk-navbar-item uk-logo uk-margin-right uk-margin-left">
        <icon :icon="['fas', 'comment-dots']" size='2x'></icon>
      </a>
      <ul v-if="!getProcessing" class="uk-navbar-nav">
        <li v-for="(item, index) in links" :key="index">
          <router-link :to="item.path">{{ item.name }}</router-link>
        </li>
      </ul>
    </div>
    <div class="uk-navbar-right">
      <div class="uk-navbar-item">
        <button v-if="getUser" @click.prevent="logOut" class="uk-button uk-button-default">
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
    return {}
  },
  methods: {
    logOut () {
      this.$store.dispatch('LOG_OUT')
        .then(() => {
          this.$router.push('/signIn')
        })
    }
  },
  computed: {
    user () {
      return this.$store.getters.getUser
    },
    links () {
      if (this.$store.getters.getUser) {
        return [
          {
            name: 'главная'.toUpperCase(),
            path: '/'
          },
          {
            name: 'Документацыя'.toUpperCase(),
            path: '/docs'
          },
          {
            name: 'Чат'.toUpperCase(),
            path: 'chat'
          }
        ]
      } else {
        return [
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
          }
        ]
      }
    },
    getUser () {
      return this.$store.getters.getUser
    },
    getProcessing () {
      return this.$store.getters.getProcessing
    }
  }
}
</script>
