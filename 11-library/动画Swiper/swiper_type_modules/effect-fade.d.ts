import { CSSSelector } from '../shared';

export interface FadeEffectMethods {}

export interface FadeEffectEvents {}

export interface FadeEffectOptions {
  /**
   * Enables slides cross fade
   * 启用幻灯片交叉淡入淡出
   * @default false
   */
  crossFade?: boolean;
  /**
   * CSS selector of the element inside of the slide to transform instead of the slide itself. Useful to use with cssMode
   * 要转换的幻灯片内部元素的CSS选择器，而不是幻灯片本身。与cssMode一起使用很有用
   * @default null
   */
  transformEl?: CSSSelector;
}
