<script lang="ts" setup>
import { useThemeStore } from '@/store'

defineOptions({ name: 'UserAvatar' })

const theme = useThemeStore()
</script>

<template>
  <hover-container class="px-12px" :inverted="theme.header.inverted">
    <icon-local-avatar class="text-32px" />
    <span class="pl-8px text-16px font-medium">{{ 123 }}</span>
  </hover-container>
</template>

<style scoped></style>
