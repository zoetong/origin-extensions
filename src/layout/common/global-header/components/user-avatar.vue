<script lang="ts" setup>
defineOptions({ name: 'UserAvatar' })
</script>

<template>
  <hover-container class="px-12px" :inverted="true">
    <icon-local-avatar class="text-32px" />
    <span class="pl-8px text-16px font-medium">{{ 123 }}</span>
  </hover-container>
</template>

<style scoped></style>
