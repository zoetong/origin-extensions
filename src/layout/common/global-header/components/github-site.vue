<script lang="ts" setup>
import { useThemeStore } from '@/store'

defineOptions({ name: 'GithubSite' })

const theme = useThemeStore()
function handleClickLink() {
  window.open('https://github.com/zoetong/origin-extensions', '_blank')
}
</script>

<template>
  <hover-container
    tooltip-content="github"
    class="w-40px h-full bg-transparent"
    :inverted="theme.header.inverted"
    :in-dark="theme.darkMode"
    @click="handleClickLink"
  >
    <icon-mdi-github class="text-20px" />
  </hover-container>
</template>

<style scoped></style>
