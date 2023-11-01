<script setup lang="ts">
import { DarkMode, DrawerButton, LayoutMode, PageFunc, PageView, ThemeColorSelect } from './components'
import { useAppStore } from '@/store'

defineOptions({ name: 'SettingDrawer' })

const app = useAppStore()
</script>

<template>
  <n-drawer :show="app.settingDrawerVisible" display-directive="show" :width="330" @mask-click="app.closeSettingDrawer">
    <n-drawer-content title="主题配置" :native-scrollbar="false">
      <DarkMode />
      <LayoutMode />
      <ThemeColorSelect />
      <PageFunc />
      <PageView />
    </n-drawer-content>
  </n-drawer>
  <DrawerButton />
</template>

<style scoped></style>
