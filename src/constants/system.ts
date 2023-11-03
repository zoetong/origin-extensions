import { transformObjectToOption } from './_shared'

export const themeLayoutModeLabels: Record<UnionKey.ThemeLayoutMode, string> = {
  'vertical': '左侧菜单模式',
  'horizontal': '顶部菜单模式',
  'vertical-mix': '左侧菜单混合模式',
  'horizontal-mix': '顶部菜单混合模式',
}
export const themeLayoutModeOptions = transformObjectToOption(themeLayoutModeLabels)
