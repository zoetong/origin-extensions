<script lang="ts" setup>
import SettingMenu from '../setting-menu/index.vue'
import { useThemeStore } from '@/store'

defineOptions({ name: 'DarkMode' })

const theme = useThemeStore()
</script>

<template>
  <n-divider title-placement="center">
    主题模式
  </n-divider>
  <n-space vertical size="large">
    <SettingMenu label="深色主题">
      <n-switch :value="theme.darkMode" @update:value="theme.setDarkMode">
        <template #checked>
          <icon-mdi-white-balance-sunny class="text-14px text-white" />
        </template>
        <template #unchecked>
          <icon-mdi-moon-waning-crescent class="text-14px text-white" />
        </template>
      </n-switch>
    </SettingMenu>
    <SettingMenu label="跟随系统">
      <n-switch :value="theme.followSystemTheme" @update:value="theme.setFollowSystemTheme">
        <template #checked>
          <icon-ic-baseline-do-not-disturb class="text-14px text-white" />
        </template>
        <template #unchecked>
          <icon-ic-round-hdr-auto class="text-14px text-white" />
        </template>
      </n-switch>
    </SettingMenu>
    <SettingMenu label="自定义暗黑主题动画过渡">
      <n-switch :value="theme.isCustomizeDarkModeTransition" @update:value="theme.setIsCustomizeDarkModeTransition">
        <template #checked>
          <icon-ic-baseline-do-not-disturb class="text-14px text-white" />
        </template>
        <template #unchecked>
          <icon-ic-round-hdr-auto class="text-14px text-white" />
        </template>
      </n-switch>
    </SettingMenu>
    <SettingMenu label="侧边栏深色">
      <n-switch :value="theme.sider.inverted" @update:value="theme.setSiderInverted" />
    </SettingMenu>
    <SettingMenu label="头部深色">
      <n-switch :value="theme.header.inverted" @update:value="theme.setHeaderInverted" />
    </SettingMenu>
    <SettingMenu label="底部深色">
      <n-switch :value="theme.footer.inverted" @update:value="theme.setFooterInverted" />
    </SettingMenu>
  </n-space>
</template>

<style scoped></style>
