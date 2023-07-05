export interface HistoryMethods {}

export interface HistoryEvents {}

export interface HistoryOptions {
  /**
   * Enables History Plugin.
   * 启用历史记录插件。
   * @default false
   */
  enabled?: boolean;

  /**
   * Swiper page root, useful to specify when you use Swiper history mode not on root website page.
   * For example can be `https://my-website.com/` or `https://my-website.com/subpage/` or `/subpage/`
   * Swiper页面根，用于指定何时使用Swiper历史记录模式而不是根网站页面。
   * 例如，可以是`https://my-website.com/`或`https://my-website.com/subpage/`或`/subpage/`
   * @default ''
   */
  root?: string;

  /**
   * Works in addition to hashnav or history to replace current url state with the
   * new one instead of adding it to history
   * 除了hashnav或history之外，还可以用新的url状态替换当前url状态，而不是将其添加到历史中
   * @default false
   */
  replaceState?: boolean;

  /**
   * Url key for slides
   * 幻灯片的Url键
   * @default 'slides'
   */
  key?: string;

  /**
   * Keep query parameters when changing browser url.
   * 更改浏览器url时保留查询参数
   * @default false
   */
  keepQuery?: boolean;
}
