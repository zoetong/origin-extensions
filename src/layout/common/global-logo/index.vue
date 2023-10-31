<script setup lang="ts">
interface Props {
  /** 显示名字 */
  showTitle: boolean
}
defineProps<Props>()

defineOptions({ name: 'GlobalLogo' })
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
