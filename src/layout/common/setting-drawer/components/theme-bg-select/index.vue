<script setup lang="ts">
import { LayoutCard } from './components'
import { useThemeStore } from '@/store'

defineOptions({ name: 'ThemeBgSelect' })

const theme = useThemeStore()
</script>

<template>
  <n-divider title-placement="center">
    主题背景
  </n-divider>
  <n-space justify="space-around" :wrap="true" :size="24" class="px-12px">
    <LayoutCard
      v-for="item in theme.background.modeList"
      :key="item.value"
      :mode="item.value"
      :label="item.label"
      :checked="item.value === theme.background.mode"
      @click="theme.setThemeMode(item.value)"
    >
      <template v-if="item.value === 'default'">
        <div class="w-18px h-full bg-primary:50 rd-4px" />
        <div class="flex-1 flex-col gap-6px">
          <div class="h-16px bg-primary rd-4px" />
          <div class="flex-1 bg-primary:25 rd-4px" />
        </div>
      </template>
      <template v-if="item.value === 'prefabricated-cyberpunk'">
        <div class="w-8px h-full bg-primary:50 rd-4px" />
        <div class="w-16px h-full bg-primary:50 rd-4px" />
        <div class="flex-1 flex-col gap-6px">
          <div class="h-16px bg-primary rd-4px" />
          <div class="flex-1 bg-primary:25 rd-4px" />
        </div>
      </template>
      <template v-if="item.value === 'prefabricated-mac'">
        <div class="h-16px bg-primary rd-4px" />
        <div class="flex-1 flex gap-6px">
          <div class="flex-1 bg-primary:25 rd-4px" />
        </div>
      </template>
      <template v-if="item.value === 'other'">
        <div class="h-16px bg-primary rd-4px" />
        <div class="flex-1 flex gap-6px">
          <div class="w-18px bg-primary:50 rd-4px" />
          <div class="flex-1 bg-primary:25 rd-4px" />
        </div>
      </template>
    </LayoutCard>
  </n-space>
</template>

<style scoped></style>
