<template>
  <v-system-bar app window style="-webkit-app-region: drag" dark>
    <v-spacer />
    Electron Vuetify
    <v-spacer />
    <v-btn text @click="minimize" style="-webkit-app-region: no-drag">
      <v-icon class="ma-0">mdi-minus</v-icon>
    </v-btn>
    <v-btn text @click="maximize" style="-webkit-app-region: no-drag">
      <v-icon class="ma-0">mdi-plus</v-icon>
    </v-btn>
    <v-btn
      text
      @click="close"
      style="-webkit-app-region: no-drag"
      color="error"
    >
      <v-icon class="ma-0">mdi-close</v-icon>
    </v-btn>
  </v-system-bar>
</template>

<script lang="ts">
import Vue from 'vue'
import { ipcRenderer } from 'electron'

export default Vue.extend({
  name: 'AppSystemBar',
  methods: {
    minimize() {
      ipcRenderer.invoke('minimize')
    },
    maximize() {
      ipcRenderer.invoke('maximize')
    },
    close() {
      ipcRenderer.invoke('close')
    }
  }
})
</script>