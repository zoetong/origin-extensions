<script lang="ts" setup>
import { useThemeStore } from '@/store'

defineOptions({ name: 'ThemeMode' })

const theme = useThemeStore()
</script>

<template>
  <hover-container class="w-40px" :inverted="theme.header.inverted" :in-dark="theme.darkMode" tooltip-content="主题模式">
    <dark-mode-switch
      :dark="theme.darkMode"
      class="wh-full"
      @update:dark="theme.setDarkMode"
    />
  </hover-container>
</template>

<style scoped></style>
