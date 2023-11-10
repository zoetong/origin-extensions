<script setup lang="ts">
import { computed } from 'vue'
import { useThemeStore } from '@/store'

type SlotFn = (props?: Record<string, unknown>) => any
interface Slots {
  /** 插槽：主体 */
  default?: SlotFn
  /** 插槽：头部 */
  header?: SlotFn
  /** 插槽：底部 */
  footer?: SlotFn
}
const slots = defineSlots<Slots>()

const theme = useThemeStore()

// 各部分的可见性
const showHeader = computed(() => Boolean(slots.header))
const showFooter = computed(() => Boolean(slots.footer) && theme.footer.visible)
// const invertedHeaderCss = computed(() => theme.footer.inverted ? 'bg-[#ffffff00]' : '')
</script>

<template>
  <div class="relative h-full">
    <div class="flex flex-col h-full">
      <!-- 头部 -->
      <header
        v-if="showHeader"
        class="flex-shrink-0 h-56px bg-transparent"
      >
        <slot name="header" />
      </header>
      <div class="flex-shrink-0 overflow-hidden" />

      <!-- 主体 -->
      <main class="flex flex-col flex-grow">
        <slot />
      </main>

      <!-- 底部 -->
      <footer
        v-if="showFooter"
        class="flex-shrink-0 h-50px "
      >
        <slot name="footer" />
      </footer>
      <div
        class="flex-shrink-0 overflow-hidden"
      />
    </div>
  </div>
</template>

  <style scoped>

</style>
