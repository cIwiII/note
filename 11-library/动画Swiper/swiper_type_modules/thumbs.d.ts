import Swiper from '../swiper-class';

export interface ThumbsMethods {
  /**
   * Swiper instance of thumbs swiper  拇指刷卡器的刷卡实例
   */
  swiper: Swiper;

  /**
   * Update thumbs  更新拇指
   */
  update(initial: boolean): void;

  /**
   * Initialize thumbs  初始化拇指
   */
  init(): boolean;
}

export interface ThumbsEvents {}

export interface ThumbsOptions {
  /**
   * Swiper instance of swiper used as thumbs or object with Swiper parameters to initialize thumbs swiper
   * 用作拇指或对象的刷卡器的刷卡器实例，带有刷卡器参数以初始化拇指刷卡器
   * @default null
   */
  swiper?: Swiper | null;
  /**
   * Additional class that will be added to activated thumbs swiper slide
   * 将添加到激活的拇指滑动器幻灯片的附加类
   * @default 'swiper-slide-thumb-active'
   */
  slideThumbActiveClass?: string;
  /**
   * Additional class that will be added to thumbs swiper
   * 将添加到拇指滑动器的附加类
   * @default 'swiper-thumbs'
   */
  thumbsContainerClass?: string;
  /**
   * When enabled multiple thumbnail slides may get activated
   * 启用后，可能会激活多个缩略图幻灯片
   * @default true
   */
  multipleActiveThumbs?: boolean;
  /**
   * Allows to set on which thumbs active slide from edge it should automatically move scroll thumbs. For example, if set to 1 and last visible thumb will be activated (1 from edge) it will auto scroll thumbs
   * 允许设置从边缘开始滑动的活动拇指应自动移动滚动拇指。例如，如果设置为1，最后一个可见的拇指将被激活（从边缘1），它将自动滚动拇指
   * @default 0
   */
  autoScrollOffset?: number;
}
