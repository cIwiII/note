import Swiper from '../swiper-class';
import { CSSSelector } from '../shared';

export interface MousewheelMethods {
  /**
   * Whether the mousewheel control is enabled
   * 鼠标滚轮控制是否启用
   */
  enabled: boolean;

  /**
   * Enable mousewheel control 启用鼠标滚轮控制
   */
  enable(): void;

  /**
   * Disable mousewheel control 禁用鼠标滚轮控制
   */
  disable(): void;
}

export interface MousewheelEvents {
  /**
   * Event will be fired on mousewheel scroll
   * 鼠标滚轮滚动时将触发事件
   */
  scroll: (swiper: Swiper, event: WheelEvent) => void;
}

export interface MousewheelOptions {
  /**
   * Set to `true` to force mousewheel swipes to axis. So in horizontal mode mousewheel will work only with horizontal mousewheel scrolling, and only with vertical scrolling in vertical mode.
   * 设置为“true”以强制鼠标滚轮滑动到轴。因此，在水平模式下，鼠标滚轮只能用于水平鼠标滚轮滚动，而在垂直模式下只能用于垂直滚动。
   * @default false
   */
  forceToAxis?: boolean;
  /**
   * Set to `true` and swiper will release mousewheel event and allow page scrolling when swiper is on edge positions (in the beginning or in the end)
 
   * 设置为“true”，当滑动器处于边缘位置（开始或结束）时，滑动器将释放鼠标滚轮事件并允许页面滚动
   * @default false
   */
  releaseOnEdges?: boolean;
  /**
   * Set to `true` to invert sliding direction
   * 设置为“true”以反转滑动方向
   * @default false
   */
  invert?: boolean;
  /**
   * Multiplier of mousewheel data, allows to tweak mouse wheel sensitivity
   * 鼠标滚轮数据的乘数，允许调整鼠标滚轮灵敏度
   * @default 1
   */
  sensitivity?: number;
  /**
   * String with CSS selector or HTML element of the container accepting mousewheel events. By default it is swiper
   * 带有CSS选择器或接受鼠标滚轮事件的容器的HTML元素的字符串。默认情况下是刷卡机
   * @default 'container'
   */
  eventsTarget?: 'container' | 'wrapper' | CSSSelector | HTMLElement;

  /**
   * Minimum mousewheel scroll delta to trigger swiper slide change
   * 触发刷卡器滑动变化的最小鼠标滚轮滚动增量
   * @default null
   */
  thresholdDelta?: number | null;

  /**
   * Minimum mousewheel scroll time delta (in ms) to trigger swiper slide change
   * 触发刷卡器滑动变化的最小鼠标滚轮滚动时间增量（毫秒）
   * @default null
   */
  thresholdTime?: number | null;
}
