<script setup lang="ts">
import { useThemeStore } from '@/store'

defineOptions({ name: 'GlobalFooter' })

const theme = useThemeStore()
</script>

<template>
  <dark-mode-container class="flex-center h-full" :inverted="theme.footer.inverted">
    <span>Copyright (c) 2023 tong</span>
  </dark-mode-container>
</template>

<style scoped></style>
