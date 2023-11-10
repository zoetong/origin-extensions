import { transformObjectToOption } from './_shared'

export const themeBgModeLabels: Record<UnionKey.ThemeBgMode, string> = {
  'other': '自定义主题',
  'default': '默认主题',
  'prefabricated-cyberpunk': '预制的赛博朋克风格',
  'prefabricated-mac': '预制的mac风格',
}
export const themeBgModeOptions = transformObjectToOption(themeBgModeLabels)
