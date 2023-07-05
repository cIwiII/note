import Swiper from '../swiper-class';

export interface ControllerMethods {
  /**
   * Pass here another Swiper instance or array with Swiper instances that should be controlled
   * by this Swiper
   * 在此传递另一个Swiper实例或数组，该Swiper应控制该Swipper实例
   */
  control?: Swiper | Swiper[];
}

export interface ControllerEvents {}

export interface ControllerOptions {
  /**
   * Pass here another Swiper instance or array with Swiper instances that should be controlled
   * by this Swiper
   * 在此传递另一个Swiper实例或数组，该Swiper应控制该Swipper实例
   */
  control?: Swiper | Swiper[];

  /**
   * Set to `true` and controlling will be in inverse direction
   * 设置为“true”，控制方向将相反
   * @default false
   */
  inverse?: boolean;

  /**
   * Defines a way how to control another slider: slide by slide
   * (with respect to other slider's grid) or depending on all slides/container
   * (depending on total slider percentage).
   * 定义如何控制另一个滑块的方式：逐个滑块（相对于其他滑块的网格）或取决于所有滑块/容器（取决于总滑块百分比）。
   * @default 'slide'
   */
  by?: 'slide' | 'container';
}
