<script lang="ts" setup>
import type { DropdownOption } from 'naive-ui'

import { useIconRender } from '~/composables'

defineOptions({ name: 'UserAvatar' })

const { iconRender } = useIconRender()

const options: DropdownOption[] = [
  {
    label: '历史任务',
    key: 'user-record',
    icon: iconRender({ icon: 'carbon:user-avatar' }),
  },
  {
    type: 'divider',
    key: 'divider',
  },
  {
    label: '历史任务',
    key: 'user-record',
    icon: iconRender({ icon: 'carbon:user-avatar' }),
  },

]

// type DropdownKey = 'user-record' | 'logout'

function handleDropdown(optionKey: string) {
  // const key = optionKey as DropdownKey
}
</script>

<template>
  <n-dropdown :options="options" @select="handleDropdown">
    <hover-container class="px-12px" :inverted="true">
      <icon-local-avatar class="text-32px" />
      <span class="pl-8px text-16px font-medium">{{ 123 }}</span>
    </hover-container>
  </n-dropdown>
</template>

<style scoped></style>
