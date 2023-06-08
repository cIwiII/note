import Swiper from '../swiper-class';

export interface KeyboardMethods {
  /**
   * Whether the keyboard control is enabled
   * 是否启用键盘控件
   */
  enabled: boolean;

  /**
   * Enable keyboard control
   * 启用键盘控制
   */
  enable(): void;

  /**
   * Disable keyboard control
   * 禁用键盘控制
   */
  disable(): void;
}

export interface KeyboardEvents {
  /**
   * Event will be fired on key press
   * 禁用键盘控制按键时将触发事件
   */
  keyPress: (swiper: Swiper, keyCode: string) => void;
}

export interface KeyboardOptions {
  /**
   * Set to `true` to enable keyboard control
   * 设置为“true”以启用键盘控制
   * @default false
   */
  enabled?: boolean;
  /**
   * When enabled it will control sliders that are currently in viewport
   * 启用后，它将控制当前在视口中的滑块
   * @default true
   */
  onlyInViewport?: boolean;
  /**
   * When enabled it will enable keyboard navigation by Page Up and Page Down keys
   * 启用后，它将通过Page Up和Page Down键启用键盘导航
   * @default true
   */
  pageUpDown?: boolean;
}
