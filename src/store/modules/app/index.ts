import { nextTick } from 'vue'
import { defineStore } from 'pinia'

interface AppState {

  /** 主体内容全屏 */
  contentFull: boolean
  /** 重载页面(控制页面的显示) */
  reloadFlag: boolean
  /** 项目配置的抽屉可见状态 */
  settingDrawerVisible: boolean
  /** 目前选择的搜索引擎 */
  searchEngine: UnionKey.searchEngine
}

export const useAppStore = defineStore('app-store', {
  state: (): AppState => ({
    searchEngine: 'google',
    contentFull: false,
    reloadFlag: true,
    settingDrawerVisible: false,
  }),
  actions: {
    /**
     * 重载页面
     * @param duration - 重载的延迟时间(ms)
     */
    async reloadPage(duration = 0) {
      this.reloadFlag = false
      await nextTick()
      if (duration) {
        setTimeout(() => {
          this.reloadFlag = true
        }, duration)
      }
      else {
        this.reloadFlag = true
      }
      setTimeout(() => {
        document.documentElement.scrollTo({ left: 0, top: 0 })
      }, 100)
    },
    /** 打开设置抽屉 */
    openSettingDrawer() {
      this.settingDrawerVisible = true
    },
    /** 关闭设置抽屉 */
    closeSettingDrawer() {
      this.settingDrawerVisible = false
    },
    /** 切换抽屉可见状态 */
    toggleSettingDrawerVisible() {
      this.settingDrawerVisible = !this.settingDrawerVisible
    },
    /** 设置主体内容全屏 */
    setContentFull(full: boolean) {
      this.contentFull = full
    },
    toggleChangeSearchEngine(key: UnionKey.searchEngine) {
      this.searchEngine = key
    },
  },
})
