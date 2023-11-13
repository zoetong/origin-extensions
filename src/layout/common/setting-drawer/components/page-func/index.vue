<script lang="ts" setup>
import SettingMenu from '../setting-menu/index.vue'
import { useThemeStore } from '@/store'

defineOptions({ name: 'PageFunc' })

const theme = useThemeStore()
</script>

<template>
  <n-divider title-placement="center">
    界面功能
  </n-divider>
  <n-space vertical size="large">
    <!-- <SettingMenu label="头部透明">
      <n-switch :value="theme.header.inverted" @update:value="theme.setHeaderInverted" />
    </SettingMenu> -->
    <SettingMenu label="显示底部">
      <n-switch :value="theme.footer.visible" @update:value="theme.setFooterVisible" />
    </SettingMenu>
    <!-- <SettingMenu label="底部透明">
      <n-switch :value="theme.footer.inverted" @update:value="theme.setFooterInverted" />
    </SettingMenu> -->
  </n-space>
</template>

<style scoped></style>
