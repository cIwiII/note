export interface A11yMethods {}

export interface A11yEvents {}

export interface A11yOptions {
  /**
   * Enables A11y
   * 启用A11y
   * @default true
   */
  enabled?: boolean;

  /**
   * Message for screen readers for previous button
   * 上一个按钮的屏幕阅读器消息
   * @default 'Previous slide'
   */
  prevSlideMessage?: string;

  /**
   * Message for screen readers for next button
   * 下一个按钮的屏幕阅读器消息
   * @default 'Next slide'
   */
  nextSlideMessage?: string;

  /**
   * Message for screen readers for previous button when swiper is on first slide
   * 当滑动器在第一张幻灯片上时，屏幕阅读器上一个按钮的消息
   * @default 'This is the first slide'
   */
  firstSlideMessage?: string;

  /**
   * Message for screen readers for next button when swiper is on last slide
   * 当滑动器在最后一张幻灯片上时，屏幕阅读器的下一个按钮信息
   * @default 'This is the last slide'
   */
  lastSlideMessage?: string;

  /**
   * Message for screen readers for single pagination bullet
   * 单个分页项目符号的屏幕阅读器消息
   * @default 'Go to slide {{index}}'
   */
  paginationBulletMessage?: string;

  /**
   * CSS class name of A11y notification
   * A11y通知的CSS类名
   * @default 'swiper-notification'
   */
  notificationClass?: string;

  /**
   * Message for screen readers for outer swiper container
   * 外部刷卡器容器的屏幕阅读器信息
   * @default null
   */
  containerMessage?: string | null;

  /**
   * Message for screen readers describing the role of outer swiper container
   * 屏幕阅读器描述外部刷卡器容器角色的消息
   * @default null
   */
  containerRoleDescriptionMessage?: string | null;

  /**
   * Message for screen readers describing the role of slide element
   * 屏幕阅读器描述幻灯片元素角色的消息
   * @default null
   */
  itemRoleDescriptionMessage?: string | null;

  /**
   * Message for screen readers describing the label of slide element
   * 用于屏幕阅读器的消息，描述幻灯片元素的标签
   * @default '{{index}} / {{slidesLength}}'
   */
  slideLabelMessage?: string;

  /**
   * Value of swiper slide `role` attribute
   * 滑动幻灯片“角色”属性的值
   * @default 'group'
   */
  slideRole?: string;

  /**
   * Value of `id` attribute to be set on swiper-wrapper. If `null` will be generated automatically
   * 要在刷卡包装上设置的“id”属性的值。如果“null”将自动生成
   * @default null
   */
  id?: string | number | null;
}
