import { defineStore } from 'pinia'
import { darkTheme } from 'naive-ui'
import { getNaiveThemeOverrides, initThemeSettings } from './helpers'
import { localStg } from '@/utils'

type ThemeState = Theme.Setting

export const useThemeStore = defineStore('theme-store', {
  state: (): ThemeState => initThemeSettings(),
  getters: {
    /** naiveUI的主题配置 */
    naiveThemeOverrides(state) {
      const overrides = getNaiveThemeOverrides({ primary: state.themeColor, ...state.otherColor })
      return overrides
    },
    /** naive-ui暗黑主题 */
    naiveTheme(state) {
      const theme = darkTheme
      theme.common.primaryColor = '#ffffff'
      return state.darkMode ? theme : undefined
    },

  },
  actions: {
    /** 重置theme状态 */
    resetThemeStore() {
      localStg.remove('themeSettings')
      this.$reset()
    },
    /** 缓存主题配置 */
    cacheThemeSettings() {
      const isProd = import.meta.env.PROD
      if (isProd)
        localStg.set('themeSettings', this.$state)
    },
    /** 设置暗黑模式 */
    setDarkMode(darkMode: boolean) {
      this.darkMode = darkMode
    },
    /** 设置自动跟随系统主题 */
    setFollowSystemTheme(visible: boolean) {
      this.followSystemTheme = visible
    },

    /** 自动跟随系统主题 */
    setAutoFollowSystemMode(darkMode: boolean) {
      if (this.followSystemTheme)
        this.darkMode = darkMode
    },
    /** 切换/关闭 暗黑模式 */
    toggleDarkMode() {
      this.darkMode = !this.darkMode
    },
    /** 设置头部反转色 */
    setHeaderInverted(isInverted: boolean) {
      this.header.inverted = isInverted
    },
    /** 设置系统主题颜色 */
    setThemeColor(themeColor: string) {
      this.themeColor = themeColor
    },

    /** 设置重载按钮可见状态 */
    setReloadVisible(visible: boolean) {
      this.showReload = visible
    },

    /** 设置底部是否显示 */
    setFooterVisible(isVisible: boolean) {
      this.footer.visible = isVisible
    },

    /** 设置底部高度 */
    setFooterInverted(inverted: boolean) {
      this.footer.inverted = inverted
    },
    /** 设置主题模式 */
    setThemeMode(mode: UnionKey.ThemeBgMode) {
      this.background.mode = mode
    },
  },
})
