<script setup lang="ts">
defineProps<Props>()

defineOptions({ name: 'GlobalLogo' })

interface Props {
  /** 显示名字 */
  showTitle: boolean
}
</script>

<template>
  <div class="flex-center w-full nowrap-hidden">
    <system-logo class="text-32px text-primary" />
    <h2 v-show="showTitle" class="pl-8px text-16px font-bold text-primary transition duration-300 ease-in-out">
      {{ $app.name }}
    </h2>
  </div>
</template>

<style scoped></style>
