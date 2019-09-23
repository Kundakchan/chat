<template>
  <aside class="uk-card uk-card-body uk-card-default uk-card-hover" uk-height-viewport="offset-top: true" uk-sticky="offset: 80">
    <ul class="uk-nav uk-nav-default uk-margin-xlarge-top">
      <li>
        <router-link :to="{name: 'profile'}">
          <icon class="uk-margin-small-right" :icon="['fas','user']"></icon>
            Мой профиль
        </router-link>
      </li>
      <li class="uk-nav-divider"></li>
      <li>
        <router-link :to="{name: item.path}" v-for="(item, index) in listNav" :key="index">
          <icon class="uk-margin-small-right" :icon="['fas',item.icon]"></icon>
          {{ item.name }}
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  data () {
    return {
      listNav: [
        {
          path: 'scroll',
          name: 'Лента',
          icon: 'scroll'
        },
        {
          path: 'friends',
          name: 'Подписки',
          icon: 'user-friends'
        },
        {
          path: 'comment',
          name: 'Сообщения',
          icon: 'comment'
        },
        {
          path: 'camera',
          name: 'Фото',
          icon: 'camera'
        },
        {
          path: 'video',
          name: 'Видио',
          icon: 'video'
        }
      ]
    }
  }
}
</script>
