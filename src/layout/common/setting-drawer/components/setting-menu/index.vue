<script lang="ts" setup>
defineProps<Props>()

defineOptions({ name: 'SettingMenu' })

interface Props {
  /** 文本 */
  label: string
}
</script>

<template>
  <div class="flex-y-center justify-between">
    <span>{{ label }}</span>
    <slot />
  </div>
</template>

<style scoped></style>
