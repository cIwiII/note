export interface VirtualMethods {
  /**
   * Object with cached slides HTML elements  包含缓存幻灯片HTML元素的对象
   */ 
  cache: object;

  /**
   * Index of first rendered slide  第一张渲染幻灯片的索引
   */
  from: number;

  /**
   * Index of last rendered slide 上次渲染幻灯片的索引
   */
  to: number;

  /**
   * Array with slide items passed by `virtual.slides` parameter
   * 包含由“virtual.slides”参数传递的幻灯片项的数组
   */
  slides: any[];

  /*
   * Methods
   */

  /**
   * Append slide. `slides` can be a single slide item or array with such slides.
   * 附加幻灯片`幻灯片”可以是单个幻灯片项目或具有此类幻灯片的阵列。
   * @note Only for Core version (in React, Svelte, Vue & Angular it should be done by modifying slides array/data/source)
   * 仅适用于Core版本（在React、Svelte、Vue和Angular中，应通过修改幻灯片阵列/数据/源来完成）
   */
  appendSlide(slide: HTMLElement | string | HTMLElement[] | string[]): void;

  /**
   * Prepend slide. `slides` can be a single slide item or array with such slides.
   * 准备幻灯片`幻灯片”可以是单个幻灯片项目或具有此类幻灯片的阵列。
   * @note Only for Core version (in React, Svelte, Vue & Angular it should be done by modifying slides array/data/source)
   */
  prependSlide(slide: HTMLElement | string | HTMLElement[] | string[]): void;

  /**
   * Remove specific slide or slides. `slideIndexes` can be a number with slide index to remove or array with indexes.
   * 删除特定幻灯片`slideIndex‘可以是带要删除的幻灯片索引的数字，也可以是带索引的数组。
   * @note Only for Core version (in React, Svelte, Vue & Angular it should be done by modifying slides array/data/source)
   * 仅适用于Core版本（在React、Svelte、Vue和Angular中，应通过修改幻灯片阵列/数据/源来完成）
   */
  removeSlide(slideIndexes: number[]): void;

  /**
   * Remove all slides
   * 删除所有幻灯片
   * @note Only for Core version (in React, Svelte, Vue & Angular it should be done by modifying slides array/data/source)
   * 仅适用于Core版本（在React、Svelte、Vue和Angular中，应通过修改幻灯片阵列/数据/源来完成）
   */
  removeAllSlides(): void;

  /**
   * Update virtual slides state  更新虚拟幻灯片状态
   */
  update(force: boolean): void;
}

export interface VirtualEvents {}

export interface VirtualData {
  /**
   * slides left/top offset in px  幻灯片左/上偏移量（像素）
   */
  offset: number;
  /**
   * index of first slide required to be rendered
   * 需要渲染的第一张幻灯片的索引
   */
  from: number;
  /**
   * index of last slide required to be rendered
   * 需要呈现的最后一张幻灯片的索引
   */
  to: number;
  /**
   * array with slide items to be rendered
   * 要呈现的幻灯片项目数组
   */
  slides: any[];
}

export interface VirtualOptions {
  /**
   * Whether the virtual slides are enabled
   * 是否启用虚拟幻灯片
   * @default false
   */
  enabled?: boolean;
  /**
   * Array with slides
   * 带幻灯片的数组
   * @default []
   */
  slides?: any[];
  /**
   * Enables DOM cache of rendering slides html elements. Once they are rendered they will be saved to cache and reused from it.
   * 启用呈现幻灯片html元素的DOM缓存。渲染后，它们将保存到缓存中并从缓存中重新使用。
   * @default true
   */
  cache?: boolean;
  /**
   * Increases amount of pre-rendered slides before active slide
   * 增加活动幻灯片之前的预渲染幻灯片数量
   * @default 0
   */
  addSlidesBefore?: number;
  /**
   * Increases amount of pre-rendered slides after active slide
   * 在活动幻灯片之后增加预渲染幻灯片的数量
   * @default 0
   */
  addSlidesAfter?: number;
  /**
   * Function to render slide. As an argument it accepts current slide item for `slides` array and index number of the current slide. Function must return an outter HTML of the swiper slide.
   * 用于渲染幻灯片的函数。作为参数，它接受“幻灯片”数组的当前幻灯片项和当前幻灯片的索引编号。函数必须返回滑动器幻灯片的外部HTML。
   * @default null
   */
  renderSlide?: (slide: any, index: any) => any | null;
  /**
   * Function for external rendering (e.g. using some other library to handle DOM manipulations and state like React.js or Vue.js). As an argument it accepts `data` object with the following properties:
   * 用于外部渲染的函数（例如，使用一些其他库来处理DOM操作和状态，如React.js或Vue.js）。作为参数，它接受具有以下属性的“data”对象：
   * - `offset` - slides left/top offset in px  幻灯片左/上偏移量（像素）
   * - `from` - index of first slide required to be rendered  需要渲染的第一张幻灯片的索引
   * - `to` - index of last slide required to be rendered  需要呈现的最后一张幻灯片的索引
   * - `slides` - array with slide items to be rendered  要呈现的幻灯片项目数组
   *
   * @default null
   */
  renderExternal?: (data: VirtualData) => any | null;
  /**
   * When enabled (by default) it will update Swiper layout right after renderExternal called. Useful to disable and update swiper manually when used with render libraries that renders asynchronously
   * 启用时（默认情况下），它将在调用renderExternal后立即更新Swiper布局。与异步渲染的渲染库一起使用时，用于手动禁用和更新滑动器
   * @default true
   */
  renderExternalUpdate?: boolean;
}
