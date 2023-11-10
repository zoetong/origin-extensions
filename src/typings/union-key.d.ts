declare namespace UnionKey {

  /**
   * 布局模式
   * - other: 自定义主题
   * - default: 默认主题
   * - prefabricated-cyberpunk: 预制的赛博朋克风格
   * - prefabricated-mac: 预制的mac风格
   */
  type ThemeBgMode = 'other' | 'default' | 'prefabricated-cyberpunk' | 'prefabricated-mac';

  /**
   * 背景的拉伸定义
   * contain	保持原有尺寸比例。内容被缩放。
   * cover	保持原有尺寸比例。但部分内容可能被剪切。
   * scale-down	保持原有尺寸比例。内容的尺寸与 none 或 contain 中的一个相同，取决于它们两个之间谁得到的对象尺寸会更小一些。
   * initial	设置为默认值，
   */
  type ThemeBgFit ='contain'|'cover'|'scale-down'|'initial'
  /**
   * 过渡动画类型
   * - zoom-fade: 渐变
   * - zoom-out: 闪现
   * - fade-slide: 滑动
   * - fade: 消退
   * - fade-bottom: 底部消退
   * - fade-scale: 缩放消退
   */
  type ThemeAnimateMode = 'zoom-fade' | 'zoom-out' | 'fade-slide' | 'fade' | 'fade-bottom' | 'fade-scale';
}
