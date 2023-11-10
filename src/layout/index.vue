<script setup lang="ts">
import Layout from './business/layout.vue'
import { GlobalContent, GlobalFooter, GlobalHeader, SettingDrawer } from './common'

defineOptions({ name: 'BasicLayout' })
</script>

<template>
  <Layout>
    <template #header>
      <GlobalHeader />
    </template>
    <template #footer>
      <GlobalFooter />
    </template>
    <GlobalContent :show-padding="false" />
  </layout>
  <SettingDrawer />
</template>

<style lang="scss">
#__SCROLL_EL_ID__ {
  @include scrollbar(8px, #e1e1e1);
}

.dark #__SCROLL_EL_ID__ {
  @include scrollbar(8px, #555);
}
</style>
