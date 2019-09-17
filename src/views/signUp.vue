<template>
  <section class="uk-container uk-container-xsmall uk-margin-xlarge-top">
    <form @submit.prevent="">
      <fieldset class="uk-fieldset">
        <div class="uk-margin">
          <div class="uk-inline uk-display-inline">
            <span class="uk-form-icon">
              <icon :icon="['fas', 'envelope']"></icon>
            </span>
            <input type="text" class="uk-input" placeholder="Email">
          </div>
        </div>
        <div class="uk-margin">
          <div class="uk-inline uk-display-inline">
            <span class="uk-form-icon">
              <icon :icon="['fas', 'lock']" ></icon>
            </span>
            <input type="password" class="uk-input" placeholder="Пароль">
          </div>
        </div>
        <div class="uk-margin">
          <div class="uk-inline uk-display-inline">
            <span class="uk-form-icon">
              <icon :icon="['fas', 'lock']" ></icon>
            </span>
            <input type="password" class="uk-input" placeholder="Повторите пароль">
          </div>
        </div>
      </fieldset>
      <div class="uk-margin">
        <button class="uk-button uk-button-secondary uk-width-1-1">Регистрацыя</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>
