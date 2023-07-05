import { CSSSelector } from '../shared';
import Swiper from '../swiper-class';

export interface NavigationMethods {
  /**
   * HTMLElement of "next" navigation button
   * “下一步”导航按钮的HTML元素
   */
  nextEl: HTMLElement;

  /**
   * HTMLElement of "previous" navigation button “上一个”导航按钮的HTML元素
   */
  prevEl: HTMLElement;

  /**
   * Update navigation buttons state (enabled/disabled)
   * “上一个”导航按钮的HTML元素更新导航按钮状态（启用/禁用）
   */
  update(): void;

  /**
   * Initialize navigation  初始化导航
   */
  init(): void;

  /**
   * Destroy navigation 销毁导航
   */
  destroy(): void;
}

export interface NavigationEvents {
  /**
   * Event will be fired on navigation hide   将在导航隐藏时激发事件
   */
  navigationHide: (swiper: Swiper) => void;
  /**
   * Event will be fired on navigation show  将在导航显示上启动事件
   */
  navigationShow: (swiper: Swiper) => void;
  /**
   * Event will be fired on navigation prev button click
   * 单击导航上一个按钮时将触发事件
   */
  navigationPrev: (swiper: Swiper) => void;
  /**
   * Event will be fired on navigation next button click
   * 单击导航下一个按钮时将触发事件
   */
  navigationNext: (swiper: Swiper) => void;
}

export interface NavigationOptions {
  /**
   * Boolean property to use with breakpoints to enable/disable navigation on certain breakpoints
   * 用于断点的布尔属性，以启用/禁用某些断点上的导航
   */
  enabled?: boolean;
  /**
   * String with CSS selector or HTML element of the element that will work
   * like "next" button after click on it
   * 带有CSS选择器的字符串或元素的HTML元素，单击该元素后将像“下一步”按钮一样工作
   * @default null
   */
  nextEl?: CSSSelector | HTMLElement | null;

  /**
   * String with CSS selector or HTML element of the element that will work
   * like "prev" button after click on it
   * 带有CSS选择器的字符串或元素的HTML元素，单击该元素后将像“prev”按钮一样工作
   * @default null
   */
  prevEl?: CSSSelector | HTMLElement | null;

  /**
   * Toggle navigation buttons visibility after click on Slider's container
   * 单击滑块的容器后切换导航按钮的可见性
   * @default false
   */
  hideOnClick?: boolean;

  /**
   * CSS class name added to navigation button when it becomes disabled
   * 禁用导航按钮时，将CSS类名添加到导航按钮
   * @default 'swiper-button-disabled'
   */
  disabledClass?: string;

  /**
   * CSS class name added to navigation button when it becomes hidden
   * 当导航按钮隐藏时，将CSS类名添加到导航按钮
   * @default 'swiper-button-hidden'
   */
  hiddenClass?: string;

  /**
   * CSS class name added to navigation button when it is disabled
   * 禁用导航按钮时，将CSS类名添加到导航按钮
   * @default 'swiper-button-lock'
   */
  lockClass?: string;

  /**
   * CSS class name added on swiper container when navigation is disabled by breakpoint
   * 当断点禁用导航时，在滑动器容器上添加CSS类名
   * @default 'swiper-navigation-disabled'
   */
  navigationDisabledClass?: string;
}
