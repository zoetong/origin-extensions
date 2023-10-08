<script setup lang="ts">
import { useIconRender } from '~/composables'

const { iconRender } = useIconRender()

const menuOptions: MenuOption[] = [
  {
    label: '且听风吟',
    key: 'hear-the-wind-sing',
    icon: iconRender({ icon: 'material-symbols:person-rounded' }),
  },

  {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',
    icon: iconRender({ icon: 'material-symbols:person-rounded' }),
    children: [
      {
        type: 'group',
        label: '人物',
        key: 'people',
        children: [
          {
            label: '叙事者',
            key: 'narrator',
          },
          {
            label: '羊男',
            key: 'sheep-man',
          },
        ],
      },
    ],
  },
]
const menuActiveKey = ref<string | null>(null)
</script>

<template>
  <main class="w-[180px]  text-center text-gray-700">
    <n-menu v-model:value="menuActiveKey" :options="menuOptions" />

    <logo />
  </main>
</template>
