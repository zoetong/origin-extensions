<script setup lang="ts">
import { GlobalLogo } from '../index'
import {
  FullScreen,
  GithubSite,
  SettingButton,
  SystemMessage,
  ThemeMode,
  ToggleLang,
  UserAvatar
  ,
} from './components'

defineOptions({ name: 'GlobalHeader' })

// const theme = useThemeStore()
</script>

<template>
  <dark-mode-container class="global-header flex-y-center h-full" :inverted="false">
    <GlobalLogo :show-title="true" class="h-full w-220px" />

    <div class="flex justify-end h-full">
      <GithubSite />
      <FullScreen />
      <ThemeMode />
      <ToggleLang />
      <SystemMessage />
      <SettingButton />
      <UserAvatar />
    </div>
  </dark-mode-container>
</template>

<style scoped>
.global-header {
  box-shadow: 0 1px 2px rgb(0 21 41 / 8%);
}
</style>
