<script lang="ts" setup>
withDefaults(defineProps<Props>(), {
  fill: false,
})

defineOptions({ name: 'SystemLogo' })

interface Props {
  /** logo是否填充 */
  fill?: boolean
}
</script>

<template>
  <icon-local-logo-fill v-if="fill" />
  <icon-local-logo v-else />
</template>

<style scoped></style>
