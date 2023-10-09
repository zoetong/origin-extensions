<script setup lang="ts">
import { useIconRender } from '~/composables'

const { iconRender } = useIconRender()

const menuOptions: MenuOption[] = [
  {
    label: '打开新标签',
    key: 'main',
    icon: iconRender({ localIcon: 'logo' }),
  },

  {
    label: '设置',
    key: 'options',
    icon: iconRender({ icon: 'material-symbols:settings-rounded' }),
  },
]
const menuActiveKey = ref<string | null>(null)
const handleChangeMenu = (key: string) => {
  chrome.tabs.create({ url: `./dist/${key}/index.html` })
}
</script>

<template>
  <n-config-provider>
    <main class="w-[120px]  text-center text-gray-700 text-12px">
      <n-menu v-model:value="menuActiveKey" :options="menuOptions" :indent="10" class="text-12px text-left" @update:value="handleChangeMenu" />
    </main>
  </n-config-provider>
</template>

<style>
:deep(.n-menu .n-menu-item){
  margin:0
}
</style>
