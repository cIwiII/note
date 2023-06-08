import { Dom7Array } from 'dom7';
import { CSSSelector } from '../shared';
import Swiper from '../swiper-class';

export interface PaginationMethods {
  /**
   * HTMLElement of pagination container element
   * 分页容器元素的HTML元素
   */
  el: HTMLElement;

  /**
   * Dom7 array-like collection of pagination bullets
   * HTML elements. To get specific slide HTMLElement
   * use `swiper.pagination.bullets[1]`.
   * Dom7类似数组的分页项目符号HTML元素集合。要获取特定的幻灯片HTMLElement，请使用“swipper.pagination.bulls[1]”。
   */
  bullets: Dom7Array;

  /**
   * Render pagination layout
   * 渲染分页布局
   */
  render(): void;

  /**
   * Update pagination state (enabled/disabled/active)
   * 更新分页状态（启用/禁用/活动）
   */
  update(): void;

  /**
   * Initialize pagination  初始化分页
   */
  init(): void;

  /**
   * Destroy pagination  销毁分页
   */
  destroy(): void;
}

export interface PaginationEvents {
  /**
   * Event will be fired after pagination rendered
   * 呈现分页后将激发事件
   */
  paginationRender: (swiper: Swiper, paginationEl: HTMLElement) => void;

  /**
   * Event will be fired when pagination updated
   * 更新分页时将激发事件
   */
  paginationUpdate: (swiper: Swiper, paginationEl: HTMLElement) => void;

  /**
   * Event will be fired on pagination hide
   * 事件将在分页隐藏时激发
   */
  paginationHide: (swiper: Swiper) => void;

  /**
   * Event will be fired on pagination show
   * 将在分页显示时激发事件
   */
  paginationShow: (swiper: Swiper) => void;
}

export interface PaginationOptions {
  /**
   * Boolean property to use with breakpoints to enable/disable pagination on certain breakpoints
   * 用于断点的布尔属性，以启用/禁用某些断点上的分页
   */
  enabled?: boolean;
  /**
   * String with CSS selector or HTML element of the container with pagination
   * 带有CSS选择器的字符串或带有分页的容器的HTML元素
   * @default null
   */
  el?: CSSSelector | HTMLElement | null;

  /**
   * String with type of pagination.(带有分页类型的字符串). Can be `'bullets'`, `'fraction'`, `'progressbar'` or `'custom'`
   * 
   * @default 'bullets'
   */
  type?: 'bullets' | 'fraction' | 'progressbar' | 'custom';

  /**
   * Defines which HTML tag will be used to represent single pagination bullet. Only for `'bullets'` pagination type.
   * 定义将使用哪个HTML标记来表示单个分页项目符号。仅适用于“标题”分页类型。
   * @default 'span'
   */
  bulletElement?: string;

  /**
   * Good to enable if you use bullets pagination with a lot of slides. So it will keep only few bullets visible at the same time.
   * 如果您在大量幻灯片中使用项目符号分页，则很好启用。因此，它在同一时间只能看到几颗子弹。
   * @default false
   */
  dynamicBullets?: boolean;

  /**
   * The number of main bullets visible when `dynamicBullets` enabled.
   * 启用“dynamicBullets”时可见的主项目符号数。
   * @default 1
   */
  dynamicMainBullets?: number;

  /**
   * Toggle (hide/show) pagination container visibility after click on Slider's container
   * 单击滑块的容器后切换（隐藏/显示）分页容器可见性
   * @default true
   */
  hideOnClick?: boolean;

  /**
   * If `true` then clicking on pagination button will cause transition to appropriate slide. Only for bullets pagination type
   * 如果为“true”，则单击分页按钮将转换到适当的幻灯片。仅适用于项目符号分页类型
   * @default false
   */
  clickable?: boolean;

  /**
   * Makes pagination progressbar opposite to Swiper's `direction` parameter, means vertical progressbar for horizontal swiper
   * direction and horizontal progressbar for vertical swiper direction
   * 使分页进度条与Swiper的“direction”参数相反，表示水平滑动方向的垂直进度条和垂直滑动方向的水平进度条
   * @default false
   */
  progressbarOpposite?: boolean;

  /**
   * format fraction pagination current number. Function receives current number,
   * and you need to return formatted value
   * 格式分数分页当前编号。函数接收当前数字，您需要返回格式化的值
   */
  formatFractionCurrent?: (number: number) => number | string;

  /**
   * format fraction pagination total number. Function receives total number, and you
   * need to return formatted value
   * 格式分数分页总数。函数接收总数，您需要返回格式化的值
   */
  formatFractionTotal?: (number: number) => number | string;

  /**
   * This parameter allows totally customize pagination bullets, you need to pass here a function that accepts `index` number of
   * pagination bullet and required element class name (`className`). Only for `'bullets'` pagination type
   * 此参数允许完全自定义分页项目符号，您需要在此处传递一个函数，该函数接受分页项目的
   * “index”编号和所需的元素类名（“className”）。仅适用于“子弹头”分页类型
   * @default null
   *
   * @example
   * ```js
   * const swiper = new Swiper('.swiper', {
   *   //...
   *   renderBullet: function (index, className) {
   *     return '<span class="' + className + '">' + (index + 1) + '</span>';
   *   }
   * });
   * ```
   * react中
   * const pagination7 = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return `<span class="${className}">${(index + 1)}</span>`;
        },
    };
   * 
   */
  renderBullet?: (index: number, className: string) => void;

  /**
   * This parameter allows to customize "fraction" pagination html. Only for `'fraction'` pagination type
   * 此参数允许自定义“分数”分页html。仅适用于“fractionon”分页类型
   * @default null
   *
   * @example
   * ```js
   * const swiper = new Swiper('.swiper', {
   *   //...
   *   renderFraction: function (currentClass, totalClass) {
   *       return '<span class="' + currentClass + '"></span>' +
   *               ' of ' +
   *               '<span class="' + totalClass + '"></span>';
   *   }
   * });
   * ```
   */
  renderFraction?: (currentClass: string, totalClass: string) => void;

  /**
   * This parameter allows to customize "progress" pagination. Only for `'progress'` pagination type
   * 此参数允许自定义“进度”分页。仅适用于“进度”分页类型
   * @default null
   *
   * @example
   * ```js
   * const swiper = new Swiper('.swiper', {
   *   //...
   *   renderProgressbar: function (progressbarFillClass) {
   *       return '<span class="' + progressbarFillClass + '"></span>';
   *   }
   * });
   * ```
   */
  renderProgressbar?: (progressbarFillClass: string) => void;

  /**
   * This parameter is required for `'custom'` pagination type where you have to specify
   * how it should be rendered.
   * “自定义”分页类型需要此参数，您必须指定如何呈现该类型。
   * @default null
   *
   * @example
   * ```js
   * const swiper = new Swiper('.swiper', {
   *   //...
   *   renderCustom: function (swiper, current, total) {
   *     return current + ' of ' + total;
   *   }
   * });
   * ```
   */
  renderCustom?: (swiper: Swiper, current: number, total: number) => void;

  /**
   * CSS class name of single pagination bullet
   * 单个分页项目符号的CSS类名
   * @default 'swiper-pagination-bullet'
   */
  bulletClass?: string;

  /**
   * CSS class name of currently active pagination bullet
   * 当前活动分页项目符号的CSS类名
   * @default 'swiper-pagination-bullet-active'
   */
  bulletActiveClass?: string;

  /**
   * The beginning of the modifier CSS class name that will be added to pagination depending on parameters
   * 将根据参数添加到分页的修饰符CSS类名的开头
   * @default 'swiper-pagination-'
   */
  modifierClass?: string;

  /**
   * CSS class name of the element with currently active index in "fraction" pagination
   * “fraction”分页中当前具有活动索引的元素的CSS类名
   * @default 'swiper-pagination-current'
   */
  currentClass?: string;

  /**
   * CSS class name of the element with total number of "snaps" in "fraction" pagination
   * 在“fraction”分页中具有“snaps”总数的元素的CSS类名
   * @default 'swiper-pagination-total'
   */
  totalClass?: string;

  /**
   * CSS class name of pagination when it becomes inactive
   * 分页处于非活动状态时的CSS类名
   * @default 'swiper-pagination-hidden'
   */
  hiddenClass?: string;

  /**
   * CSS class name of pagination progressbar fill element
   * 分页progressbar填充元素的CSS类名
   * @default 'swiper-pagination-progressbar-fill'
   */
  progressbarFillClass?: string;

  /**
   * CSS class name of pagination progressbar opposite
   * 分页progressbar对面的CSS类名
   * @default 'swiper-pagination-progressbar-opposite'
   */
  progressbarOppositeClass?: string;
  /**
   * CSS class name set to pagination when it is clickable
   * CSS类名在可单击时设置为分页
   * @default 'swiper-pagination-clickable'
   */
  clickableClass?: string;

  /**
   * CSS class name set to pagination when it is disabled
   * CSS类名在禁用时设置为分页
   * @default 'swiper-pagination-lock'
   */
  lockClass?: string;

  /**
   * CSS class name set to pagination in horizontal Swiper
   * CSS类名设置为水平Swiper中的分页
   * @default 'swiper-pagination-horizontal'
   */
  horizontalClass?: string;

  /**
   * CSS class name set to pagination in vertical Swiper
   * CSS类名设置为垂直Swiper中的分页
   * @default 'swiper-pagination-vertical'
   */
  verticalClass?: string;

  /**
   * CSS class name added on swiper container and pagination element when pagination is disabled by breakpoint
   * 断点禁用分页时，在滑动器容器和分页元素上添加CSS类名
   * @default 'swiper-pagination-disabled'
   */
  paginationDisabledClass?: string;
}
