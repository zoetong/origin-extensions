<script setup lang="ts">
import { useAppStore, useThemeStore } from '@/store'

defineOptions({ name: 'SettingButton' })

const app = useAppStore()
const theme = useThemeStore()
</script>

<template>
  <hover-container
    class="w-40px h-full"
    tooltip-content="主题配置"
    :inverted="theme.header.inverted"
    :in-dark="theme.darkMode"
    @click="app.toggleSettingDrawerVisible"
  >
    <icon-ant-design-setting-outlined class="text-20px" />
  </hover-container>
</template>

<style scoped></style>
