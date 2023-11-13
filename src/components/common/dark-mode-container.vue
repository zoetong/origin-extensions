<script setup lang="ts">
withDefaults(defineProps<Props>(), {
  inverted: false,
})

defineOptions({ name: 'DarkModeContainer' })

interface Props {
  inverted?: boolean
}
</script>

<template>
  <div
    class="dark:bg-dark dark:text-white dark:text-opacity-82 transition-all"
    :class="inverted ? 'bg-transparent text-white' : 'bg-primary text-white'"
  >
    <slot />
  </div>
</template>

<style scoped></style>
