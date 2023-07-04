export interface FreeModeMethods {
  onTouchMove(): void;
  onTouchEnd(): void;
}

export interface FreeModeEvents {}

export interface FreeModeOptions {
  /**
   * Whether the free mode is enabled
   * 是否启用自由模式
   * @default false
   */
  enabled?: boolean;

  /**
   * If enabled, then slide will keep moving for a while after you release it
   * 如果启用，则在释放后幻灯片将继续移动一段时间
   * @default true
   */
  momentum?: boolean;

  /**
   * Higher value produces larger momentum distance after you release slider
   * 释放滑块后，值越大，动量距离越大
   * @default 1
   */
  momentumRatio?: number;

  /**
   * Higher value produces larger momentum velocity after you release slider
   * 释放滑块后，值越大，动量速度越大
   * @default 1
   */
  momentumVelocityRatio?: number;

  /**
   * Set to `false` if you want to disable momentum bounce in free mode
   * 如果要在自由模式下禁用动量反弹，请设置为“false”
   * @default true
   */
  momentumBounce?: boolean;

  /**
   * Higher value produces larger momentum bounce effect
   * 更高的值产生更大的动量反弹效应
   * @default 1
   */
  momentumBounceRatio?: number;

  /**
   * Minimum touchmove-velocity required to trigger free mode momentum
   * 触发自由模式动量所需的最小触摸移动速度
   * @default 0.02
   */
  minimumVelocity?: number;

  /**
   * Set to enabled to enable snap to slides positions in free mode
   * 设置为启用以启用在自由模式下捕捉幻灯片位置
   * @default false
   */
  sticky?: boolean;
}
