/** 主题相关类型 */
declare namespace Theme {
  /** 主题配置 */
  interface Setting {
    /** 暗黑模式 */
    darkMode: boolean;
    /** 是否自动跟随系统主题 */
    followSystemTheme: boolean;
    /** 自定义暗黑动画过渡 */
    isCustomizeDarkModeTransition: boolean;
    /** 滚动模式 */
    scrollMode: UnionKey.ThemeScrollMode;
    /** 滚动模式列表 */
    scrollModeList: Common.OptionWithKey<UnionKey.ThemeScrollMode>[];
    /** 主题颜色 */
    themeColor: string;
    /** 主题颜色列表 */
    themeColorList: string[];
    /** 其他颜色 */
    otherColor: OtherColor;
    /** 是否自定义info的颜色(默认取比主题色深一级的颜色) */
    isCustomizeInfoColor: boolean;
    /** 固定头部和多页签 */
    fixedHeaderAndTab: boolean;
    /** 显示重载按钮 */
    showReload: boolean;
    /** 头部样式 */
    header: Header;
    /** 标多页签样式 */
    tab: Tab;
    /** 侧边栏样式 */
    sider: Sider;
    /** 菜单样式 */
    menu: Menu;
    /** 底部样式 */
    footer: Footer;
    /** 页面样式 */
    page: Page;
  }
  /** 布局样式 */
  interface Layout {
    /** 最小宽度 */
    minWidth: number;
    /** 布局模式 */
    mode: UnionKey.ThemeLayoutMode;
    /** 布局模式列表 */
    modeList: Common.OptionWithKey<UnionKey.ThemeLayoutMode>[];
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
    /** 头部高度 */
    height: number;

  }


  /** 菜单样式 */
  interface Menu {
    /** 水平模式的菜单的位置 */
    horizontalPosition: UnionKey.ThemeHorizontalMenuPosition;
    /** 水平模式的菜单的位置列表 */
    horizontalPositionList: Common.OptionWithKey<UnionKey.ThemeHorizontalMenuPosition>[];
  }

  /** 底部样式 */
  interface Footer {
    /* 底部是否可见 */
    visible: boolean;
    /** 是否固定底部 */
    fixed: boolean;
    /** 底部是否居右(顶部混合菜单模式有效) */
    right: boolean;
    /** 底部高度 */
    height: number;
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

  /** 菜单项配置 */
  type GlobalMenuOption = import('naive-ui').MenuOption & {
    key: string;
    label: string;
    routeName: string;
    routePath: string;
    icon?: () => import('vue').VNodeChild;
    children?: GlobalMenuOption[];
    i18nTitle?: string;
  };



  interface MessageTab {
    /** tab的key */
    key: number;
    /** tab名称 */
    name: string;
    /** badge类型 */
    badgeProps?: import('naive-ui').BadgeProps;
    /** 消息数据 */
    list: MessageList[];
  }

  interface MessageList {
    /** 数据唯一值 */
    id: number;
    /** 头像 */
    avatar?: string;
    /** 消息icon */
    icon?: string;
    svgIcon?: string;
    /** 消息标题 */
    title: string;
    /** 消息发送时间 */
    date?: string;
    /** 消息是否已读 */
    isRead?: boolean;
    /** 消息描述 */
    description?: string;
    /** 标签名称 */
    tagTitle?: string;
    /** 标签props */
    tagProps?: import('naive-ui').TagProps;
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
