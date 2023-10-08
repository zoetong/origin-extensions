<script setup lang="ts">
import { type VNodeChild } from 'vue'

interface MenuOptions {
  label: string
  key: string | number
  disabled?: boolean
  icon?: () => VNodeChild
}
interface Props {
  /** 菜单数据 */
  options?: MenuOptions[]
  /** 当前选中项的key */
  value: string | number

}

const props = withDefaults(defineProps<Props>(), {
  options: () => [],
})
</script>

<template>
  <p class="mt-2 opacity-50" />
</template>
