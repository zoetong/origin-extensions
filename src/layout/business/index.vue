<script setup lang="ts">
import { computed } from 'vue'
import { createLayoutCssVars } from './helper'

defineOptions({
  name: 'Layout',
})

  type SlotFn = (props?: Record<string, unknown>) => any

interface Slots {
  /** 插槽：主体 */
  default?: SlotFn
  /** 插槽：头部 */
  header?: SlotFn
  /** 插槽：页签 */
  tab?: SlotFn
  /** 插槽：侧边栏 */
  sider?: SlotFn
  /** 插槽：底部 */
  footer?: SlotFn
}
const slots = defineSlots<Slots>()

/** CSS 变量 */
const cssVars = computed(() => createLayoutCssVars(props))

// 各部分的可见性
const showHeader = computed(() => Boolean(slots.header) && props.headerVisible)
const showSider = computed(() => !props.isMobile && Boolean(slots.sider) && props.siderVisible)
const showFooter = computed(() => Boolean(slots.footer) && props.footerVisible)

// 滚动模式
const isWrapperScroll = computed(() => props.scrollMode === 'wrapper')
const isContentScroll = computed(() => props.scrollMode === 'content')

// 布局模式：水平、垂直
const isVertical = computed(() => props.mode === 'vertical')
const isHorizontal = computed(() => props.mode === 'horizontal')

/** 固定头部和页签 */
const fixedHeaderAndTab = computed(() => props.fixedTop || (isHorizontal.value && isWrapperScroll.value))

// class样式

const leftGapClass = computed(() => {
  if (!props.fullContent && showSider.value)
    return props.siderCollapse ? style['left-gap_collapsed'] : style['left-gap']

  return ''
})

const headerLeftGapClass = computed(() => (isVertical.value ? leftGapClass.value : ''))

const footerLeftGapClass = computed(() => {
  const condition1 = isVertical.value
  const condition2 = isHorizontal.value && isWrapperScroll.value && !props.fixedFooter
  const condition3 = Boolean(isHorizontal.value && props.rightFooter)

  if (condition1 || condition2 || condition3)
    return leftGapClass.value

  return ''
})
</script>

<template>
  <div class=":soy: relative h-full" :class="[commonClass]" :style="cssVars">
    <div
      :id="isWrapperScroll ? scrollElId : undefined"
      class=":soy: flex flex-col h-full" :class="[
        commonClass,
        scrollWrapperClass,
        { ':soy: overflow-y-auto': isWrapperScroll },
      ]"
    >
      <!-- 头部 -->
      <template v-if="showHeader">
        <header
          v-show="!fullContent"
          class=":soy: flex-shrink-0" :class="[
            style['layout-header'],
            commonClass,
            headerClass,
            headerLeftGapClass,
            { ':soy: absolute top-0 left-0 w-full': fixedHeaderAndTab },
          ]"
        >
          <slot name="header" />
        </header>
        <div
          v-show="!fullContent && fixedHeaderAndTab"
          class=":soy: flex-shrink-0 overflow-hidden" :class="[style['layout-header-placement']]"
        />
      </template>

      <!-- 主体 -->
      <main
        :id="isContentScroll ? scrollElId : undefined"
        class=":soy: flex flex-col flex-grow" :class="[
          commonClass,
          contentClass,
          leftGapClass,
          { ':soy: overflow-y-auto': isContentScroll },
        ]"
      >
        <slot />
      </main>

      <!-- 底部 -->
      <template v-if="showFooter">
        <footer
          v-show="!fullContent"
          class=":soy: flex-shrink-0" :class="[
            style['layout-footer'],
            commonClass,
            footerClass,
            footerLeftGapClass,
            { ':soy: absolute left-0 bottom-0 w-full': fixedFooter },
          ]"
        >
          <slot name="footer" />
        </footer>
        <div
          v-show="!fullContent && fixedFooter"
          class=":soy: flex-shrink-0 overflow-hidden" :class="[style['layout-footer-placement']]"
        />
      </template>
    </div>
  </div>
</template>

  <style scoped>
/* @type */

.layout-header,
.layout-header-placement {
  height: var(--header-height);
}

.layout-header {
  z-index: var(--header-z-index);
}

.layout-tab {
  top: var(--header-height);
  height: var(--tab-height);
  z-index: var(--tab-z-index);
}

.layout-tab-placement {
  height: var(--tab-height);
}

.layout-sider {
  width: var(--sider-width);
  z-index: var(--sider-z-index);
}

.layout-mobile-sider {
  z-index: var(--sider-z-index);
}

.layout-mobile-sider-mask {
  z-index: var(--mobile-sider-z-index);
}

.layout-sider_collapsed {
  width: var(--sider-collapsed-width);
  z-index: var(--sider-z-index);
}

.layout-footer,
.layout-footer-placement {
  height: var(--footer-height);
}

.layout-footer {
  z-index: var(--footer-z-index);
}

.left-gap {
  padding-left: var(--sider-width);
}

.left-gap_collapsed {
  padding-left: var(--sider-collapsed-width);
}

.sider-padding-top {
  padding-top: var(--header-height);
}

.sider-padding-bottom {
  padding-bottom: var(--footer-height);
}
</style>
