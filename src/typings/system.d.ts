/** 主题相关类型 */
declare namespace Theme {
  /** 主题配置 */
  interface Setting {
    /** 暗黑模式 */
    darkMode: boolean;
    /** 是否自动跟随系统主题 */
    followSystemTheme: boolean;

    /** 主题颜色 */
    themeColor: string;
    /** 主题颜色列表 */
    themeColorList: string[];
    /** 其他颜色 */
    otherColor: OtherColor;
    /** 是否自定义info的颜色(默认取比主题色深一级的颜色) */
    isCustomizeInfoColor: boolean;
    /** 显示重载按钮 */
    showReload: boolean;
    /** 头部样式 */
    header: Header;
    /** 底部样式 */
    footer: Footer;
    /** 主题背景 */
    background:Background
  }
  /** 布局样式 */
  interface Background {
    /** 背景效果 */
    fit: UnionKey.ThemeBgFit;
    /** 布局模式 */
    mode: UnionKey.ThemeBgMode;
    /** 布局模式列表 */
    modeList: Common.OptionWithKey<UnionKey.mode>[];
  }

  /** 其他主题颜色 */
  interface OtherColor {
    /** 信息 */
    info: string;
    /** 成功 */
    success: string;
    /** 警告 */
    warning: string;
    /** 错误 */
    error: string;
  }

  /** 头部样式 */
  interface Header {
    /** 头部反转色 */
    inverted: boolean;
  }



  /** 底部样式 */
  interface Footer {
    /* 底部是否可见 */
    visible: boolean;

    /** 底部反转色 */
    inverted: boolean;
  }

  /** 页面样式 */
  interface Page {
    /** 页面是否开启动画 */
    animate: boolean;
    /** 动画类型 */
    animateMode: UnionKey.ThemeAnimateMode;
    /** 动画类型列表 */
    animateModeList: Common.OptionWithKey<UnionKey.ThemeAnimateMode>[];
  }
}

declare namespace App {
  /** 全局头部属性 */
  interface GlobalHeaderProps {
    /** 显示logo */
    showLogo: boolean;
    /** 显示头部菜单 */
    showHeaderMenu: boolean;
    /** 显示菜单折叠按钮 */
    showMenuCollapse: boolean;
  }


}

declare namespace I18nType {
  type langType = 'en' | 'zh-CN' ;

  interface Schema {
    system: {
      title: string;
    };

  }
}
