import { CSSSelector } from '../shared';

interface CreativeEffectTransform {
  translate?: (string | number)[];
  rotate?: number[];
  opacity?: number;
  scale?: number;
  shadow?: boolean;
  origin?: string;
}

export interface CreativeEffectMethods {}

export interface CreativeEffectEvents {}

export interface CreativeEffectOptions {
  /**
   * Previous slide transformations. Accepts object of the following type:
   * 以前的幻灯片转换。接受以下类型的对象：
   * @example
   * ```js
   * {
   *   // Array with translate X, Y and Z values 具有平移X、Y和Z值的数组
   *   translate: (string | number)[];
   *   // Array with rotate X, Y and Z values (in deg) 具有旋转X、Y和Z值的数组（以度为单位）
   *   rotate?: number[];
   *   // Slide opacity
   *   opacity?: number;
   *   // Slide scale  幻灯片刻度
   *   scale?: number;
   *   // Enables slide shadow  启用幻灯片阴影
   *   shadow?: boolean;
   *   // Transform origin, e.g. `left bottom` 变换原点，例如“左下”`
   *   origin?: string;
   * }
   * ```
   *
   */
  prev?: CreativeEffectTransform;
  /**
   * Next slide transformations.
   * 下一张幻灯片转换。
   * @example
   * ```js
   * {
   *   // Array with translate X, Y and Z values 具有平移X、Y和Z值的数组
   *   translate: (string | number)[];
   *   // Array with rotate X, Y and Z values (in deg) 具有旋转X、Y和Z值的数组（以度为单位）
   *   rotate?: number[];
   *   // Slide opacity
   *   opacity?: number;
   *   // Slide scale  幻灯片刻度
   *   scale?: number;
   *   // Enables slide shadow  启用幻灯片阴影
   *   shadow?: boolean;
   *   // Transform origin, e.g. `left bottom`  变换原点，例如“左下”`
   *   origin?: string;
   * }
   * ```
   *
   */
  next?: CreativeEffectTransform;
  /**
   * CSS selector of the element inside of the slide to transform instead of the slide itself. Useful to use with cssMode
   * 要转换的幻灯片内部元素的CSS选择器，而不是幻灯片本身。与cssMode一起使用很有用
   * @default null
   */
  transformEl?: CSSSelector;
  /**
   * Limit progress/offset to amount of side slides. If `1`, then slides all slides after prev/next will have same state. If `2`, then all slides after 2nd before/after active will have same state, etc.
   * 将进度/偏移量限制为侧滑量。如果为“1”，则上一张/下一张之后的所有幻灯片将具有相同的状态。如果“2”，则活动之前/之后第2张幻灯片的所有幻灯片都将具有相同的状态，等等。
   * @default 1
   */
  limitProgress?: number;
  /**
   * Splits shadow "opacity" per slide based on `limitProgress` (only if transformation shadows enabled). E.g. setting `limitProgress: 2` and enabling `shadowPerProgress`, will set shadow opacity to `0.5` and `1` on two slides next to active. With this parameter disabled, all slides beside active will have shadow with `1` opacity
   * 根据“limitProgress”拆分每张幻灯片的阴影“不透明度”（仅当启用变换阴影时）。E、 g.设置“limitProgress:2”并启用“shadowPerProgress”，将在活动幻灯片旁边的两张幻灯片上将阴影不透明度设置为“0.5”和“1”。禁用此参数后，活动幻灯片旁边的所有幻灯片都将具有“1”不透明度的阴影
   * @default false
   */
  shadowPerProgress?: boolean;
  /**
   * Allows to multiply slides transformations and opacity.
   * 允许增加幻灯片变换和不透明度。
   * @default 1
   */
  progressMultiplier?: number;
  /**
   * Enable this parameter if your custom transforms require 3D transformations (`translateZ`, `rotateX`, `rotateY` )
   * 如果自定义变换需要三维变换（“translateZ”、“rotateX”和“rotateY”），请启用此参数
   * @default true
   */
  perspective?: boolean;
}
