<script setup lang="ts">
import { useIconRender } from '~/composables'

const { iconRender } = useIconRender()

const menuOptions: MenuOption[] = [
  {
    label: '打开新标签',
    key: 'hear-the-wind-sing',
    icon: iconRender({ icon: 'material-symbols:person-rounded' }),
  },

  {
    label: '设置',
    key: 'dance-dance-dance',
    icon: iconRender({ icon: 'material-symbols:person-rounded' }),
  },
]
const menuActiveKey = ref<string | null>(null)
</script>

<template>
  <n-config-provider>
    <main class="w-[120px]  text-center text-gray-700 text-12px">
      <n-menu v-model:value="menuActiveKey" :options="menuOptions" :indent="10" class="text-12px text-left" />
    </main>
  </n-config-provider>
</template>

<style>
:deep(.n-menu .n-menu-item){
  margin:0
}
</style>
