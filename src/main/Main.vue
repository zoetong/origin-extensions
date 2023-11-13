<script setup lang="ts">
// import { useI18n } from 'vue-i18n'
import { dateZhCN, zhCN } from 'naive-ui'
import BasicLayout from '@/layout/index.vue'
import { subscribeStore, useThemeStore } from '@/store'
// import { localStg } from '@/utils'

const theme = useThemeStore()
// const { locale } = useI18n()

type PageType = 'setting' | 'normal'

const pageType = ref<PageType>('normal')

// const language = ref<I18nType.langType>(localStg.get('lang') || 'zh-CN')
// console.log(language, 'language')
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
