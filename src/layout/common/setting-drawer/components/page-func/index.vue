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
    <SettingMenu label="滚动模式">
      <n-select
        class="w-120px"
        size="small"
        :value="theme.scrollMode"
        :options="theme.scrollModeList"
        @update:value="theme.setScrollMode"
      />
    </SettingMenu>
    <SettingMenu label="固定头部和多页签">
      <n-switch :value="theme.fixedHeaderAndTab" @update:value="theme.setIsFixedHeaderAndTab" />
    </SettingMenu>
    <SettingMenu label="顶部菜单位置">
      <n-select
        class="w-120px"
        size="small"
        :value="theme.menu.horizontalPosition"
        :options="theme.menu.horizontalPositionList"
        @update:value="theme.setHorizontalMenuPosition"
      />
    </SettingMenu>
    <SettingMenu label="头部高度">
      <n-input-number
        class="w-120px"
        size="small"
        :value="theme.header.height"
        :step="1"
        @update:value="theme.setHeaderHeight"
      />
    </SettingMenu>
    <SettingMenu label="多页签高度">
      <n-input-number
        class="w-120px"
        size="small"
        :value="theme.tab.height"
        :step="1"
        @update:value="theme.setTabHeight"
      />
    </SettingMenu>
    <SettingMenu label="多页签缓存">
      <n-switch :value="theme.tab.isCache" @update:value="theme.setTabIsCache" />
    </SettingMenu>
    <SettingMenu label="侧边栏展开宽度">
      <n-input-number
        class="w-120px"
        size="small"
        :value="theme.sider.width"
        :step="10"
        @update:value="theme.setSiderWidth"
      />
    </SettingMenu>
    <SettingMenu label="左侧混合侧边栏展开宽度">
      <n-input-number
        class="w-120px"
        size="small"
        :value="theme.sider.mixWidth"
        :step="5"
        @update:value="theme.setMixSiderWidth"
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
