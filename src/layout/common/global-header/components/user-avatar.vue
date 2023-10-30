<script lang="ts" setup>
import type { DropdownOption } from 'naive-ui'
import { useAuthStore } from '@/store'
import { useIconRender, useRouterPush } from '@/composables'

defineOptions({ name: 'UserAvatar' })

const auth = useAuthStore()
const { iconRender } = useIconRender()
const { routerPush } = useRouterPush()

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
    label: '退出登录',
    key: 'logout',
    icon: iconRender({ icon: 'carbon:logout' }),
  },
]

type DropdownKey = 'user-record' | 'logout'

function handleDropdown(optionKey: string) {
  const key = optionKey as DropdownKey
  if (key === 'user-record') {
    // 应该判断登录
    routerPush('user')
  }
  if (key === 'logout') {
    window.$dialog?.info({
      title: '提示',
      content: '您确定要退出登录吗？',
      positiveText: '确定',
      negativeText: '取消',
      onPositiveClick: () => {
        auth.resetAuthStore()
      },
    })
  }
}
</script>

<template>
  <n-dropdown :options="options" @select="handleDropdown">
    <hover-container class="px-12px" :inverted="true">
      <icon-local-avatar class="text-32px" />
      <span class="pl-8px text-16px font-medium">{{ auth.userInfo.userName }}</span>
    </hover-container>
  </n-dropdown>
</template>

<style scoped></style>
