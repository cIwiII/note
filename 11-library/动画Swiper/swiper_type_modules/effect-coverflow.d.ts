import { CSSSelector } from '../shared';

export interface CoverflowEffectMethods {}

export interface CoverflowEffectEvents {}

export interface CoverflowEffectOptions {
  /**
   * Enables slides shadows
   * 启用幻灯片阴影
   * @default true
   */
  slideShadows?: boolean;
  /**
   * Slide rotate in degrees
   * 滑动旋转角度
   * @default 50
   */
  rotate?: number;
  /**
   * Stretch space between slides (in px)
   * 幻灯片之间的拉伸空间（像素）
   * @default 0
   */
  stretch?: number;
  /**
   * Depth offset in px (slides translate in Z axis)
   * 深度偏移（以像素为单位）（幻灯片在Z轴上平移）
   * @default 100
   */
  depth?: number;
  /**
   * Slide scale effect
   * 幻灯片缩放效果
   * @default 1
   */
  scale?: number;
  /**
   * Effect multiplier
   * 效应乘数
   * @default 1
   */
  modifier?: number;
  /**
   * CSS selector of the element inside of the slide to transform instead of the slide itself. Useful to use with cssMode
   * 要转换的幻灯片内部元素的CSS选择器，而不是幻灯片本身。与cssMode一起使用很有用
   * @default null
   */
  transformEl?: CSSSelector;
}
