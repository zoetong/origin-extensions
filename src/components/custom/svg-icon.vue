<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { Icon } from '@iconify/vue'

const props = defineProps<Props>()

defineOptions({ name: 'SvgIcon' })

/**
 * 图标组件
 * - 支持iconify和本地svg图标
 * - 同时传递了icon和localIcon，localIcon会优先渲染
 */
interface Props {
  /** 图标名称 */
  icon?: string
  /** 本地svg的文件名 */
  localIcon?: string
}

const attrs = useAttrs()

const bindAttrs = computed<{ class: string; style: string }>(() => ({
  class: (attrs.class as string) || '',
  style: (attrs.style as string) || '',
}))

const symbolId = computed(() => {
  const preffix = 'icon-local'

  const defaultLocalIcon = 'no-icon'

  const icon = props.localIcon || defaultLocalIcon

  return `#${preffix}-${icon}`
})

/** 渲染本地icon */
const renderLocalIcon = computed(() => props.localIcon || !props.icon)
</script>

<template>
  <template v-if="renderLocalIcon">
    <svg aria-hidden="true" width="1em" height="1em" v-bind="bindAttrs">
      <use :xlink:href="symbolId" fill="currentColor" />
    </svg>
  </template>
  <template v-else>
    <Icon v-if="icon" :icon="icon" v-bind="bindAttrs" />
  </template>
</template>

<style scoped></style>
