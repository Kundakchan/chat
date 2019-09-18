<template>
  <section class="uk-container uk-container-xsmall uk-margin-xlarge-top">
    <form @submit.prevent="onSubmit" novalidate>
      <fieldset class="uk-fieldset">
        <div class="uk-margin">
          <div class="uk-inline uk-display-inline">
            <span class="uk-form-icon">
              <icon :icon="['fas', 'envelope']"></icon>
            </span>
            <input type="text" class="uk-input" placeholder="Email" v-model="email">
          </div>
        </div>
        <div class="uk-margin">
          <div class="uk-inline uk-display-inline">
            <span class="uk-form-icon">
              <icon :icon="['fas', 'lock']"></icon>
            </span>
            <input type="password" class="uk-input" placeholder="Пароль" v-model="password">
          </div>
        </div>
      </fieldset>
      <div class="uk-margin">
        <button class="uk-button uk-button-secondary uk-width-1-1">Авторизация</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    onSubmit () {
      const user = {
        email: this.email.toLocaleLowerCase(),
        password: this.password.toLocaleLowerCase()
      }
      try {
        this.$store.dispatch('SIGN_IN', user)
          .then(() => {
            this.$router.push('/chat')
          })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
