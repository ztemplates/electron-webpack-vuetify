<template>
  <v-app>
    <app-system-bar />
    <v-app-bar app dark>
      <v-app-bar-nav-icon @click="nav = !nav" />
      <v-spacer />
    </v-app-bar>
    <v-navigation-drawer app v-model="nav">
      <v-list nav>
        <v-list-item to="/">
          <v-list-item-avatar tile size="24">
            <v-icon>mdi-home</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import AppSystemBar from 'renderer/components/app/SystemBar.vue'

export default Vue.extend({
  name: 'App',
  components: { AppSystemBar },
  data: () => ({
    nav: null
  })
})
</script>