<script setup lang="ts">
import { useAppStore, useThemeStore } from '@/store'

withDefaults(defineProps<Props>(), {
  showPadding: true,
})

defineOptions({ name: 'GlobalContent' })

interface Props {
  /** 显示padding */
  showPadding?: boolean
}

const app = useAppStore()
const theme = useThemeStore()
</script>

<template>
  <transition
    :name="theme.pageAnimateMode"
    mode="out-in"
    :appear="true"
    @before-leave="app.setDisableMainXScroll(true)"
    @after-enter="app.setDisableMainXScroll(false)"
  >
    <div
      v-if="app.reloadFlag"
      :class="{ 'p-16px': showPadding }"
      class="flex-grow bg-#f6f9f8 dark:bg-#101014 transition duration-300 ease-in-out"
    />
  </transition>
</template>

<style scoped></style>
