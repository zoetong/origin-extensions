<script lang="ts" setup>
import { GlobalHeader } from './common'
import { themeStorage } from '@/logic/storage'
</script>

<template>
  <div class="wh-full overflow-hidden">
    <GlobalHeader />
    <div class="h-[calc(100vh-61px)] p-t-10px w-1156px m-auto overflow-hidden">
      <div>{{ themeStorage }}</div>
    </div>
  </div>
</template>
