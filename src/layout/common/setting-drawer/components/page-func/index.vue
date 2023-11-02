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
    <SettingMenu label="头部高度">
      <n-input-number
        class="w-120px"
        size="small"
        :value="theme.header.height"
        :step="1"
        @update:value="theme.setHeaderHeight"
      />
    </SettingMenu>
    <SettingMenu label="显示底部">
      <n-switch :value="theme.footer.visible" @update:value="theme.setFooterVisible" />
    </SettingMenu>
    <SettingMenu label="固定底部">
      <n-switch :value="theme.footer.fixed" @update:value="theme.setFooterIsFixed" />
    </SettingMenu>
    <SettingMenu label="底部居右">
      <n-switch :value="theme.footer.right" @update:value="theme.setFooterIsRight" />
    </SettingMenu>
  </n-space>
</template>

<style scoped></style>
