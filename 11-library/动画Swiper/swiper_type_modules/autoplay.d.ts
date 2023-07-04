import Swiper from '../swiper-class';

export interface AutoplayMethods {
  /**
   * Whether autoplay enabled and running
   * 是否启用自动播放并正在运行，为确保正确执行，请搭配run或pause使用
   * 语法：swiper.autoplay.run();swiper.autoplay.running=true;
   * 语法：swiper.autoplay.pause();swiper.autoplay.running=false;
   */
  running: boolean;

  /**
   * Whether autoplay is paused 
   * 是否暂停自动播放，若为pause后得出结论，请waitForTransition选项设为true，
   */
  paused: boolean;

  /**
   * Pause autoplay
   * 暂停自动播放，执行逻辑时，可能正在过渡中，导致失败，请将waitForTransition选项设为true，立即得出改变后结果，未完成动画虚拟完成
   */
  pause(speed?: number): void;

  /**
   * Run the autoplay logic
   * 运行自动播放逻辑
   */
  run(): void;

  /**
   * Start autoplay
   * 启动自动播放 
   */
  start(): boolean;

  /**
   * Stop autoplay
   * 停止自动播放
   */
  stop(): boolean;
}

export interface AutoplayEvents {
  /**
   * Event will be fired in when autoplay started
   * 自动播放开始时将触发事件
   */
  autoplayStart: (swiper: Swiper) => void;
  /**
   * Event will be fired when autoplay stopped
   * 自动播放停止时将触发事件
   */
  autoplayStop: (swiper: Swiper) => void;
  /**
   * Event will be fired on autoplay pause (on mouse/pointer enter), when `pauseOnMouseEnter` enabled
   * 当启用“pauseOnMouseEnter”时，自动播放暂停时（鼠标/指针输入时）将触发事件
   */
  autoplayPause: (swiper: Swiper) => void;
  /**
   * Event will be fired on autoplay resume (on mouse/pointer leave), when `pauseOnMouseEnter` enabled
   * 当启用“pauseOnMouseEnter”时，自动播放恢复时（鼠标/指针离开时）将触发事件
   */
  autoplayResume: (swiper: Swiper) => void;
  /**
   * Event will be fired when slide changed with autoplay
   * 使用自动播放更改幻灯片时将触发事件
   */
  autoplay: (swiper: Swiper) => void;
}

/**
 * Object with autoplay parameters or boolean `true` to enable with default settings.
 * 使用自动播放参数或布尔值“true”启用的对象。
 * @example
 * ```js
 * const swiper = new Swiper('.swiper', {
 *   autoplay: {
 *     delay: 5000,
 *   },
 * });
 * ```
 */
export interface AutoplayOptions {
  /**
   * Delay between transitions (in ms). If this parameter is not specified, auto play will be disabled
   * 转换之间的延迟（毫秒）。如果未指定此参数，将禁用自动播放
   * If you need to specify different delay for specific slides you can do it by using
   * `data-swiper-autoplay` (in ms) attribute on slide.
   * 如果您需要为特定幻灯片指定不同的延迟，可以使用幻灯片上的“数据滑动器自动播放”（以毫秒为单位）属性。
   * @example
   * ```html
   * <!-- hold this slide for 2 seconds -->
   * <div class="swiper-slide" data-swiper-autoplay="2000">
   * ```
   *
   * @default 3000
   */
  delay?: number;

  /**
   * Enable this parameter and autoplay will be stopped when it reaches last slide (has no effect in loop mode)
   * 启用此参数，自动播放将在到达最后一张幻灯片时停止（在循环模式下无效）
   * @default false
   */
  stopOnLastSlide?: boolean;

  /**
   * Set to `false` and autoplay will not be disabled after user interactions (swipes),
   * it will be restarted every time after interaction
   * 设置为“false”，自动播放不会在用户交互时禁用，打断。停止需要使用实例方法。
   * @default true
   */
  disableOnInteraction?: boolean;

  /**
   * Enables autoplay in reverse direction
   * 启用反向自动播放
   * @default false
   */
  reverseDirection?: boolean;

  /**
   * When enabled autoplay will wait for wrapper transition to continue.
   * Can be disabled in case of using Virtual Translate when your
   * slider may not have transition
   * 启用后，自动播放将等待包装转换继续。当滑块可能没有过渡时，如果使用虚拟平移，可以禁用
   * @note 执行暂停时是否立即暂停，为true时(paused属性立即变化)，未完成的动画，采用虚拟动画，
   * false时，执行暂停，可能正在过渡中，paused可能为false未暂停。
   * @default true
   */
  waitForTransition?: boolean;

  /**
   * When enabled autoplay will be paused on mouse enter over Swiper container. If `disableOnInteraction` is also enabled, it will stop autoplay instead of pause
   * 启用后，鼠标进入Swiper暂停自动播放。如果还启用了“disableOnInteraction”，将停止而不是暂停
   * @default false
   */
  pauseOnMouseEnter?: boolean;
}
