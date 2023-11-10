<script setup lang="ts">
import { computed } from 'vue'
import type { PopoverPlacement } from 'naive-ui'

const props = defineProps<Props>()

defineOptions({ name: 'LayoutCard' })

interface Props {
  /** 布局模式 */
  mode: UnionKey.ThemeBgMode
  /** 布局模式文本 */
  label: string
  /** 选中状态 */
  checked: boolean
}

type LayoutConfig = Record<
  UnionKey.ThemeBgMode,
  {
    placement: PopoverPlacement
    headerClass: string
    menuClass: string
    mainClass: string
  }
>

const layoutConfig: LayoutConfig = {
  'default': {
    placement: 'bottom-start',
    headerClass: '',
    menuClass: 'w-1/3 h-full',
    mainClass: 'w-2/3 h-3/4',
  },
  'prefabricated-cyberpunk': {
    placement: 'bottom',
    headerClass: '',
    menuClass: 'w-1/4 h-full',
    mainClass: 'w-2/3 h-3/4',
  },
  'prefabricated-mac': {
    placement: 'bottom',
    headerClass: '',
    menuClass: 'w-full h-1/4',
    mainClass: 'w-full h-3/4',
  },
  'other': {
    placement: 'bottom-end',
    headerClass: '',
    menuClass: 'w-full h-1/4',
    mainClass: 'w-2/3 h-3/4',
  },
}

const activeConfig = computed(() => layoutConfig[props.mode])
</script>

<template>
  <div
    class="border-2px rounded-6px cursor-pointer hover:border-primary"
    :class="[checked ? 'border-primary' : 'border-transparent']"
  >
    <n-tooltip :placement="activeConfig.placement" trigger="hover">
      <template #trigger>
        <div
          class="layout-card__shadow gap-6px w-96px h-64px p-6px rd-4px flex"
        >
          <slot />
        </div>
      </template>
      <span>{{ label }}</span>
    </n-tooltip>
  </div>
</template>

<style scoped>
.layout-card__shadow {
  box-shadow: 0 1px 2.5px rgba(0, 0, 0, 0.18);
}
</style>
