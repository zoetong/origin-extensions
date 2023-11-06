<script setup lang="ts">
import Layout from './business/layout.vue'
import { GlobalContent, GlobalFooter, GlobalHeader } from './common'

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
    <GlobalContent />
  </layout>
</template>

<style lang="scss">
#__SCROLL_EL_ID__ {
  @include scrollbar(8px, #e1e1e1);
}

.dark #__SCROLL_EL_ID__ {
  @include scrollbar(8px, #555);
}
</style>
