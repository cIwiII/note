import { CSSSelector } from '../shared';
import Swiper from '../swiper-class';

export interface ScrollbarMethods {
  /**
   * HTMLElement of Scrollbar container element
   * Scrollbar容器元素的HTML元素
   */
  el: HTMLElement;

  /**
   * HTMLElement of Scrollbar draggable handler element
   * Scrollbar可拖动处理程序元素的HTML元素
   */
  dragEl: HTMLElement;

  /**
   * Updates scrollbar track and handler sizes
   * 更新滚动条轨迹和处理程序大小
   */
  updateSize(): void;

  /**
   * Updates scrollbar translate  更新滚动条转换
   */
  setTranslate(): void;

  /**
   * Initialize scrollbar  初始化滚动条
   */
  init(): void;

  /**
   * Destroy scrollbar 销毁滚动条
   */
  destroy(): void;
}

export interface ScrollbarEvents {
  /**
   * Event will be fired on draggable scrollbar drag start
   * 事件将在可拖动滚动条拖动开始时触发
   */
  scrollbarDragStart: (swiper: Swiper, event: MouseEvent | TouchEvent | PointerEvent) => void;

  /**
   * Event will be fired on draggable scrollbar drag move
   * 事件将在可拖动滚动条拖动移动时触发
   */
  scrollbarDragMove: (swiper: Swiper, event: MouseEvent | TouchEvent | PointerEvent) => void;

  /**
   * Event will be fired on draggable scrollbar drag end
   * 事件将在可拖动滚动条拖动结束时触发
   */
  scrollbarDragEnd: (swiper: Swiper, event: MouseEvent | TouchEvent | PointerEvent) => void;
}

/**
 * Object with scrollbar parameters.
 * 具有滚动条参数的对象。
 * @example
 * ```js
 * const swiper = new Swiper('.swiper', {
 *   scrollbar: {
 *     el: '.swiper-scrollbar',
 *     draggable: true,
 *   },
 * });
 * ```
 */
export interface ScrollbarOptions {
  /**
   * Boolean property to use with breakpoints to enable/disable scrollbar on certain breakpoints
   * 用于断点的布尔属性，以启用/禁用某些断点上的滚动条
   */
  enabled?: boolean;
  /**
   * String with CSS selector or HTML element of the container with scrollbar.
   * 带有CSS选择器的字符串或带有滚动条的容器的HTML元素。
   * @default null
   */
  el?: CSSSelector | HTMLElement | null;

  /**
   * Hide scrollbar automatically after user interaction
   * 用户交互后自动隐藏滚动条
   * @default true
   */
  hide?: boolean;

  /**
   * Set to `true` to enable make scrollbar draggable that allows you to control slider position
   * 设置为“true”以启用可拖动滚动条，允许您控制滑块位置
   * @default false
   */
  draggable?: boolean;

  /**
   * Set to `true` to snap slider position to slides when you release scrollbar
   * 设置为“true”可在释放滚动条时将滑块位置捕捉到幻灯片
   * @default false
   */
  snapOnRelease?: boolean;

  /**
   * Size of scrollbar draggable element in px
   * 滚动条可拖动元素的大小（以像素为单位）
   * @default 'auto'
   */
  dragSize?: 'auto' | number;

  /**
   * Scrollbar element additional CSS class when it is disabled
   * 禁用时滚动条元素附加CSS类
   * @default 'swiper-scrollbar-lock'
   */
  lockClass?: string;

  /**
   * Scrollbar draggable element CSS class
   * 滚动条可拖动元素CSS类
   * @default 'swiper-scrollbar-drag'
   */
  dragClass?: string;

  /**
   * CSS class name added on swiper container and scrollbar element when scrollbar is disabled by breakpoint
   * 当滚动条被断点禁用时，在滑动器容器和滚动条元素上添加CSS类名
   * @default 'swiper-scrollbar-disabled'
   */
  scrollbarDisabledClass?: string;

  /**
   * CSS class name set to scrollbar in horizontal Swiper
   * CSS类名设置为水平Swiper中的滚动条
   * @default 'swiper-scrollbar-horizontal'
   */
  horizontalClass?: string;

  /**
   * CSS class name set to scrollbar in vertical Swiper
   * CSS类名设置为垂直Swiper中的滚动条
   * @default 'swiper-scrollbar-vertical'
   */
  verticalClass?: string;
}
