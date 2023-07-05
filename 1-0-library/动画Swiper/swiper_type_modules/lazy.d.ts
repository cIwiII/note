import { Dom7Array } from 'dom7';
import { CSSSelector } from '../shared';
import Swiper from '../swiper-class';

export interface LazyMethods {
  /**
   * Load/update lazy images based on current slider state (position)
   * 基于当前滑块状态（位置）加载/更新懒惰图像
   */
  load(): void;

  /**
   * Force to load lazy images in slide by specified index
   * 强制按指定索引加载幻灯片中的延迟图像
   * @param number index number of slide to load lazy images in  加载惰性图像的幻灯片的索引编号
   */
  loadInSlide(index: number): void;
}

export interface LazyEvents {
  /**
   * Event will be fired in the beginning of lazy loading of image
   * 事件将在图像延迟加载开始时触发
   */
  lazyImageLoad: (swiper: Swiper, slideEl: HTMLElement, imageEl: HTMLElement) => void;
  /**
   * Event will be fired when lazy loading image will be loaded
   * 当加载延迟加载图像时将触发事件
   */
  lazyImageReady: (swiper: Swiper, slideEl: HTMLElement, imageEl: HTMLElement) => void;
}

export interface LazyOptions {
  /**
   * Whether the lazy loading images is enabled
   * 是否启用延迟加载图像
   * @default false
   */
  enabled?: boolean;
  /**
   * Enables to check is the Swiper in view before lazy loading images on initial slides
   * 启用在初始幻灯片上懒惰加载图像之前检查视图中是否有扫码器
   * @default false
   */
  checkInView?: boolean;
  /**
   * Element to check scrolling on for `checkInView`. Defaults to `window`
   * 元素以检查“checkInView”的滚动。默认为`window`
   */
  scrollingElement?: CSSSelector | null | Dom7Array | HTMLElement;
  /**
   * Set to `true` to enable lazy loading for the closest slides images (for previous and next slide images)
   * 设置为“true”以启用最近幻灯片图像的延迟加载（用于上一张和下一张幻灯片图像）
   * @default false
   */
  loadPrevNext?: boolean;
  /**
   * Amount of next/prev slides to preload lazy images in. Can't be less than `slidesPerView`
   * 要在中预加载懒惰图像的下一张/上一张幻灯片的数量。不能小于`slidesPerView`
   * @default 1
   */
  loadPrevNextAmount?: number;
  /**
   * By default, Swiper will load lazy images after transition to this slide, so you may enable this parameter if you need it to start loading of new image in the beginning of transition
   * 默认情况下，Swiper将在转换到此幻灯片后加载懒惰图像，因此如果需要在转换开始时开始加载新图像，可以启用此参数
   * @default false
   */
  loadOnTransitionStart?: boolean;
  /**
   * CSS class name of lazy element
   * 惰性元素的CSS类名
   * @default 'swiper-lazy'
   */
  elementClass?: string;
  /**
   * CSS class name of lazy loading element
   * 延迟加载元素的CSS类名
   * @default 'swiper-lazy-loading'
   */
  loadingClass?: string;
  /**
   * CSS class name of lazy loaded element
   * 延迟加载元素的CSS类名
   * @default 'swiper-lazy-loaded'
   */
  loadedClass?: string;
  /**
   * CSS class name of lazy preloader
   * 懒惰预加载程序的CSS类名
   * @default 'swiper-lazy-preloader'
   */
  preloaderClass?: string;
}
