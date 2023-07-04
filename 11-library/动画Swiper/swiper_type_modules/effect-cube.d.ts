export interface CubeEffectMethods {}

export interface CubeEffectEvents {}

export interface CubeEffectOptions {
  /**
   * Enables slides shadows
   * 启用幻灯片阴影
   * @default true
   */
  slideShadows?: boolean;
  /**
   * Enables main slider shadow
   * 启用主滑块阴影
   * @default true
   */
  shadow?: boolean;
  /**
   * Main shadow offset in px
   * 主阴影偏移量（像素）
   * @default 20
   */
  shadowOffset?: number;
  /**
   * Main shadow scale ratio
   * 主阴影比例
   * @default 0.94
   */
  shadowScale?: number;
}
