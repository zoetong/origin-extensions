<script lang="ts" setup>
import type { VNodeChild } from 'vue'
import { useIconRender } from '@/composables'
import { useAppStore } from '@/store'

const props = defineProps<Props>()
const { iconRender } = useIconRender()
const app = useAppStore()

const { isHeader } = toRefs(props)
/**
 * 搜素输入框
 * - 有header模式和首屏模式，尺寸和样式会有所不同
 */
interface Props {
  isHeader: Boolean
}

const showSearchModel = ref<boolean>(false)
const SearchRef = ref<HTMLElement>()

defineOptions({ name: 'SearchInput' })

interface SearchOptions {
  key: UnionKey.searchEngine
  label: string
  icon?: () => VNodeChild

}
const searchOptions: SearchOptions[] = [
  { key: 'zhihu', label: '知乎', icon: iconRender({ icon: 'ri:zhihu-line', color: '#056de8' }) },
  { key: 'baidu', label: '知乎', icon: iconRender({ icon: 'bx:bxl-baidu', color: '#2932e1' }) },
  { key: 'google', label: '知乎', icon: iconRender({ icon: 'logos:google-icon' }) },
  { key: 'bing', label: '知乎', icon: iconRender({ icon: 'logos:bing', color: '#5ec9e9' }) },
  { key: 'juejin', label: '知乎', icon: iconRender({ icon: 'tabler:brand-juejin', color: '#4b99ff' }) },
  { key: 'github', label: '知乎', icon: iconRender({ icon: 'carbon:logo-github', color: '#1a1515' }) },
]
const searchIcon = computed(() => searchOptions.find(i => i.key === app.searchEngine)!.icon)
const modelPosition = computed(() => {
  const x = SearchRef.value!.getBoundingClientRect().x.toFixed(1)
  const y = SearchRef.value!.getBoundingClientRect().y.toFixed(1)
  return { left: `${x}px`, top: `${isHeader.value ? Number(y) + 44 : Number(y) + 78}px` }
})
const searchInputStyle = computed(() => {
  // 搜索框的class样式
  const headerSearch = { search: 'w-500px inout-hover h-34px', icon: 'text-10px', card: 'w-500px' }
  const noHeaderSearch = { search: 'w-70% inout-hover  h-68px search-main', icon: 'text-20px', card: 'w-70%' }
  return isHeader.value ? headerSearch : noHeaderSearch
})
function handleChooseSearch() {
  showSearchModel.value = !showSearchModel.value
}
function handleKeyUp() {

}
</script>

<template>
  <div class="flex-center w-full nowrap-hidden">
    <div ref="SearchRef" :class="searchInputStyle.search">
      <n-input round placeholder="" @keyup.enter="handleKeyUp">
        <template #prefix>
          <div class="cursor-pointer flex-center" @click="handleChooseSearch">
            <component :is="searchIcon" :class="searchInputStyle.icon" />
            <icon-ic:round-arrow-drop-down class="arrow" :class="showSearchModel ? 'down text-20px' : 'up text-30px'" />
          </div>
        </template>
      </n-input>
    </div>
  </div>
  <n-modal v-model:show="showSearchModel">
    <n-card class="w-500px fixed rounded-2" :class="searchInputStyle.card" :style="{ top: modelPosition.top, left: modelPosition.left }">
      <div class="w-full h-full grid gap-3 grid-col-80px">
        <n-card v-for="item in searchOptions" :key="item.key" hoverable :embedded="item.key === app.searchEngine" class="w-80px h-80px rounded-2 cursor-pointer" content-style="padding:0;display:flex;justify-content: center;align-items: center;" @click="app.toggleChangeSearchEngine(item.key)">
          <div class="w-60px h-60px relative flex-center">
            <component :is="item.icon" class="text-60px block" />
            <icon-material-symbols:check-circle-rounded v-if="item.key === app.searchEngine" class="text-20px c-primary absolute right--10px top--10px" />
          </div>
        </n-card>
      </div>
    </n-card>
  </n-modal>
</template>

<style lang="scss" scoped>
.inout-hover:hover{
  box-shadow: 0 1px 6px rgba(32,33,36,.28);
}
.arrow{
  font-size: 30px;
  transition: all 0.5s ease-in-out
}
.up{

  transform: rotateX(-180deg);
}
.down{
  transform: rotateX(0);
}
.grid-col-80px{
  grid-template-columns: repeat(auto-fill, 80px);
}
:deep(.search-main .n-input){
  border-radius: 3rem;
  height:68px;
  .n-input-wrapper{
    .n-input__prefix{
      svg{
        font-size:36px
      }
    }
    .n-input__input{
      .n-input__input-el{
        height: 68px;font-size: 30px;
      }
    }
  }
}
</style>
