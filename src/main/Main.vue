<script setup lang="ts">
import { dateZhCN, zhCN } from 'naive-ui'
import BasicLayout from '@/layout/index.vue'
import { subscribeStore, useThemeStore } from '@/store'

const theme = useThemeStore()

type PageType = 'setting' | 'normal'

const pageType = ref<PageType>('normal')

function init() {
  pageType.value = window.location.hash.replace('#/', '') as PageType
  subscribeStore()
}
onMounted(() => {
  init()
})
</script>

<template>
  <n-config-provider
    :theme="theme.naiveTheme"
    :theme-overrides="theme.naiveThemeOverrides"
    :locale="zhCN"
    :date-locale="dateZhCN"
    class="h-full"
  >
    <naive-provider>
      <BasicLayout />
    </naive-provider>
  </n-config-provider>
</template>
