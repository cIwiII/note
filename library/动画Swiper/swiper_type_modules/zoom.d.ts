import Swiper from '../swiper-class';

export interface ZoomMethods {
  /**
   * Whether the zoom module is enabled  缩放模块是否启用
   */
  enabled: boolean;

  /**
   * Current image scale ratio  当前图像比例
   */
  scale: number;

  /**
   * Enable zoom module  启用缩放模块
   */
  enable(): void;

  /**
   * Disable zoom module  禁用缩放模块
   */
  disable(): void;

  /**
   * Zoom in image of the currently active slide  放大当前活动幻灯片的图像
   */
  in(): void;

  /**
   * Zoom out image of the currently active slide  缩小当前活动幻灯片的图像
   */
  out(): void;

  /**
   * Toggle image zoom of the currently active slide  切换当前活动幻灯片的图像缩放
   */
  toggle(): void;
}

export interface ZoomEvents {
  /**
   * Event will be fired on zoom change  缩放更改时将触发事件
   */
  zoomChange: (swiper: Swiper, scale: number, imageEl: HTMLElement, slideEl: HTMLElement) => void;
}

export interface ZoomOptions {
  /**
   * Maximum image zoom multiplier  最大图像缩放倍数
   *
   * @default 3
   */
  maxRatio?: number;
  /**
   * Minimal image zoom multiplier  最小图像缩放倍数
   *
   * @default 1
   */
  minRatio?: number;
  /**
   * Enable/disable zoom-in by slide's double tap
   * 通过双击幻灯片启用/禁用放大
   * @default true
   */
  toggle?: boolean;
  /**
   * CSS class name of zoom container
   * 缩放容器的CSS类名
   * @default 'swiper-zoom-container'
   */
  containerClass?: string;
  /**
   * CSS class name of zoomed in container
   * 放大容器的CSS类名
   * @default 'swiper-slide-zoomed'

   */
  zoomedSlideClass?: string;
}
