import Swiper from '../swiper-class';

export interface HashNavigationMethods {}

export interface HashNavigationEvents {
  /**
   * Event will be fired on window hash change
   * 窗口哈希更改时将触发事件
   */
  hashChange: (swiper: Swiper) => void;
  /**
   * Event will be fired when swiper updates the hash
   * 当swiper更新哈希时将触发事件
   */
  hashSet: (swiper: Swiper) => void;
}

export interface HashNavigationOptions {
  /**
   * Set to `true` to enable also navigation through slides (when hashnav
   * is enabled) by browser history or by setting directly hash on document location
   * 设置为“true”还可以通过浏览器历史记录或直接在文档位置设置哈希值来启用幻灯片导航（启用哈希导航时）
   * @default false
   */
  watchState?: boolean;

  /**
   * Works in addition to hashnav to replace current url state with the
   * new one instead of adding it to history
   * 除了hashnav之外，还可以用新的url状态替换当前url状态，而不是将其添加到历史记录中
   * @default     false
   */
  replaceState?: boolean;
}
