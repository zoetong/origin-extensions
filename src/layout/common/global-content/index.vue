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
      class="flex-grow  transition duration-300 ease-in-out"
    >
      <slot name="container" />
    </div>
  </transition>
</template>

<style scoped></style>
