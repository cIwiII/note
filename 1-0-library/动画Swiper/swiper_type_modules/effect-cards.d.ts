import { CSSSelector } from '../shared';

export interface CardsEffectMethods {}

export interface CardsEffectEvents {}

export interface CardsEffectOptions {
  /**
   * Enables slides shadows
   * 启用幻灯片阴影
   * @default true
   */
  slideShadows?: boolean;

  /**
   * Enables cards rotation
   * 启用卡旋转
   * @default true
   */
  rotate?: boolean;

  /**
   * Rotate angle per slide (in degrees)
   * 每张幻灯片的旋转角度（度）
   * @default 2
   */
  perSlideRotate?: number;

  /**
   * Offset distance per slide (in px)
   * 每张幻灯片的偏移距离（像素）
   * @default 8
   */
  perSlideOffset?: number;

  /**
   * CSS selector of the element inside of the slide to transform instead of the slide itself. Useful to use with cssMode
   * 要转换的幻灯片内部元素的CSS选择器，而不是幻灯片本身。与cssMode一起使用很有用
   * @default null
   */
  transformEl?: CSSSelector;
}
