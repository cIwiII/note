import { CSSSelector } from '../shared';

export interface FlipEffectMethods {}

export interface FlipEffectEvents {}

export interface FlipEffectOptions {
  /**
   * Enables slides shadows
   * 启用幻灯片阴影
   * @default true
   */
  slideShadows?: boolean;
  /**
   * Limit edge slides rotation
   * 限制边滑动旋转
   * @default true
   */
  limitRotation?: boolean;
  /**
   * CSS selector of the element inside of the slide to transform instead of the slide itself. Useful to use with cssMode
   * 要转换的幻灯片内部元素的CSS选择器，而不是幻灯片本身。与cssMode一起使用很有用
   * @default null
   */
  transformEl?: CSSSelector;
}
