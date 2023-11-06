<script setup lang="ts">
import { useAppStore } from '@/store'

withDefaults(defineProps<Props>(), {
  showPadding: true,
})

defineOptions({ name: 'GlobalContent' })

interface Props {
  /** 显示padding */
  showPadding?: boolean
}

const app = useAppStore()
</script>

<template>
  <transition
    mode="out-in"
    :appear="true"
  >
    <div
      v-if="app.reloadFlag"
      :class="{ 'p-16px': showPadding }"
      class="flex-grow bg-#f6f9f8 dark:bg-#101014 transition duration-300 ease-in-out"
    />
  </transition>
</template>

<style scoped></style>
