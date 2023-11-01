<script setup lang="ts">
import ColorCheckbox from './color-checkbox.vue'
import { traditionColors } from '@/settings'
import { useThemeStore } from '@/store'

defineProps<Props>()

const emit = defineEmits<Emits>()

defineOptions({ name: 'ColorModal' })

interface Props {
  visible: boolean
}

interface Emits {
  (e: 'close'): void
}

const theme = useThemeStore()

function handleClose() {
  emit('close')
}
</script>

<template>
  <n-modal :show="visible" preset="card" class="w-640px h-480px" :z-index="10001" @close="handleClose">
    <div class="flex-x-center">
      <n-gradient-text type="primary" :size="24">
        中国传统颜色
      </n-gradient-text>
    </div>
    <n-tabs>
      <n-tab-pane v-for="item in traditionColors" :key="item.label" :name="item.label" :tab="item.label">
        <n-grid :cols="8" :x-gap="16" :y-gap="8">
          <n-grid-item v-for="i in item.data" :key="i.label">
            <ColorCheckbox
              class="!w-full !h-36px !rounded-4px"
              :color="i.color"
              :checked="i.color === theme.themeColor"
              icon-class="text-20px"
              @click="theme.setThemeColor(i.color)"
            />
            <p class="text-center">
              {{ i.label }}
            </p>
          </n-grid-item>
        </n-grid>
      </n-tab-pane>
    </n-tabs>
  </n-modal>
</template>

<style scoped></style>
