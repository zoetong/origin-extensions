<script lang="ts" setup>
import SettingMenu from '../setting-menu/index.vue'
import { useThemeStore } from '@/store'

defineOptions({ name: 'PageView' })

const theme = useThemeStore()
</script>

<template>
  <n-divider title-placement="center">
    界面显示
  </n-divider>
  <n-space vertical size="large">
    <SettingMenu label="面包屑">
      <n-switch :value="theme.header.crumb.visible" @update:value="theme.setHeaderCrumbVisible" />
    </SettingMenu>
    <SettingMenu label="面包屑图标">
      <n-switch :value="theme.header.crumb.showIcon" @update:value="theme.setHeaderCrumbIconVisible" />
    </SettingMenu>
    <SettingMenu label="多页签">
      <n-switch :value="theme.tab.visible" @update:value="theme.setTabVisible" />
    </SettingMenu>
    <SettingMenu label="多页签风格">
      <n-select
        class="w-120px"
        size="small"
        :value="theme.tab.mode"
        :options="theme.tab.modeList"
        @update:value="theme.setTabMode"
      />
    </SettingMenu>
    <SettingMenu label="页面切换动画">
      <n-switch :value="theme.page.animate" @update:value="theme.setPageIsAnimate" />
    </SettingMenu>
    <SettingMenu label="页面切换动画类型">
      <n-select
        class="w-120px"
        size="small"
        :value="theme.page.animateMode"
        :options="theme.page.animateModeList"
        @update:value="theme.setPageAnimateMode"
      />
    </SettingMenu>
  </n-space>
</template>

<style scoped></style>
