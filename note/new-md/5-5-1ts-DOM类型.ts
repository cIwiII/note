/* TS内置类型包括html元素、BOM、DOM、Node */

// Attr (attribute) 对象从 Node 对象继承所有属性和方法。在 DOM 4 中，Attr 对象不再从 Node 继承。应该避免在属性对象上使用节点对象的属性和方法：


// 基本-------
// Boolean、Number、String、Date、RegExp、Error
// html元素--------
// div:HTMLDivElement
// div:HTMLElement
// divs:NodeList
// 标签类型见下表


// BOM---------
// Event
// fragment:DocumentFragment=document.createDocumentFragment()

// DOM---------
// url事件：HashChangeEvent、HasChangeEvent

/* HTML DOM Event 对象 */  //---------

/* 
Event：所有事件父对象
AnimationEvent	针对CSS动画
ClipboardEvent	针对剪贴板的修改
DragEvent	针对拖放交互
FocusEvent	针对与焦点有关的事件
HashChangeEvent	针对URL锚点部分的更改
InputEvent	针对用户输入
KeyboardEvent	针对键盘交互
MouseEvent	针对鼠标交互
PageTransitionEvent	针对导航到网页或离开网页
PopStateEvent	针对历史记录条目中的更改
ProgressEvent	针对加载外部资源的进度
StorageEvent	针对窗口的存储区域中的更改
TouchEvent	针对触摸交互
TransitionEvent	针对CSS过渡
UiEvent	针对用户界面交互
WheelEvent	针对鼠标滚轮交互
*/

/*html标签类型*/
export interface HTML {
    a: HTMLAnchorElement;
    // applet:HTMLAppletElement;// HTMLAppletElement; HTML5 中不支持,HTML 4 中用于定义嵌入式小程序（插件), object 元素 标签代替
    area: HTMLAreaElement;
    audio: HTMLAudioElement;//H5 新标签
    base: HTMLBaseElement;
    blockquote: HTMLQuoteElement;
    q: HTMLQuoteElement;
    body: HTMLBodyElement;
    br: HTMLBRElement;
    button: HTMLButtonElement;
    canvas: HTMLCanvasElement; //H5 新标签
    caption: HTMLTableCaptionElement;
    col: HTMLTableColElement;
    colgroup: HTMLTableColElement;
    data: HTMLDataElement;//好用，但苹果默认浏览器Safari，不支持
    datalist: HTMLDataListElement;//H5 新标签
    del: HTMLModElement;//配合ins来表示修正，但有下划线
    details: HTMLDetailsElement; //H5 新标签，细节标签
    dialog: HTMLDialogElement; //H5 新标签，苹果默认浏览器Safari，不支持
    dir: HTMLDirectoryElement;//将弃用，//HTML5 中不支持
    div: HTMLDivElement;
    dl: HTMLDListElement;
    embed: HTMLEmbedElement;//H5 新标签 定义嵌入的内容，比如插件
    fieldset: HTMLFieldSetElement;
    font: HTMLFontElement;//将弃用，H5不支持
    form: HTMLFormElement;
    frame: HTMLFrameElement; //将弃用，H5不支持
    frameset: HTMLFrameSetElement;//将弃用，H5不支持
    h1: HTMLHeadingElement;//1-6
    head: HTMLHeadElement;
    hr: HTMLHRElement;
    html: HTMLHtmlElement;
    iframe: HTMLIFrameElement;
    img: HTMLImageElement;
    input: HTMLInputElement;
    ins: HTMLModElement;
    label: HTMLLabelElement;
    legend: HTMLLegendElement;
    li: HTMLLIElement;
    link: HTMLLinkElement;
    map: HTMLMapElement;
    marquee: HTMLMarqueeElement;//将弃用
    // menu: HTMLMenuElement;//已弃用（4.1弃用）
    menuitem:HTMLElement;//已弃用（4.1弃用）//H5 新标签,仅Firefox可用
    meta: HTMLMetaElement;
    meter: HTMLMeterElement;//H5 新标签,也被称为 gauge（尺度），多为静态
    object: HTMLObjectElement;
    ol: HTMLOListElement;
    optgroup: HTMLOptGroupElement;
    option: HTMLOptionElement;
    output: HTMLOutputElement;//H5 新标签
    p: HTMLParagraphElement;
    param: HTMLParamElement;//将弃用
    picture: HTMLPictureElement;
    pre: HTMLPreElement;
    progress: HTMLProgressElement;//H5 新标签,也被称为 gauge（尺度）。任务进程，配合js
    script: HTMLScriptElement;
    select: HTMLSelectElement;
    // slot: HTMLSlotElement;//弃用
    source: HTMLSourceElement;//H5 新标签，浏览器选择支持的文件
    span: HTMLSpanElement;
    style: HTMLStyleElement;
    table: HTMLTableElement;
    tbody: HTMLTableSectionElement;
    tfoot: HTMLTableSectionElement;
    thead: HTMLTableSectionElement;
    th: HTMLTableHeaderCellElement;//将弃用，改为HTMLTableCellElement
    td: HTMLTableDataCellElement;//将弃用，改为HTMLTableCellElement
    tr: HTMLTableRowElement;
    template: HTMLTemplateElement;
    textarea: HTMLTextAreaElement;
    time: HTMLTimeElement;//H5 新标签
    title: HTMLTitleElement;
    track: HTMLTrackElement;//H5 新标签，字幕文件或其他文件
    ul: HTMLUListElement;
    video: HTMLVideoElement; //H5 新标签
}
export interface HTMLElement{
    acronym:HTMLElement;//HTML5 中不支持,在 HTML 4 中用于定义首字母缩写词。
    article:HTMLElement;//H5 新标签
    aside:HTMLElement;  //H5 新标签
    basefont:HTMLElement;//HTML5 中不支持,仅ie使用
    bdi:HTMLElement;  //H5 新标签
    big:HTMLElement;  //HTML5 中不支持
    center:HTMLElement;//HTML5 中不支持
    command:HTMLElement;//H5 新标签,HTML5 中不支持,仅ie使用
    figcaption:HTMLElement; //H5 新标签
    figure:HTMLElement; //H5 新标签
    footer:HTMLElement; //H5 新标签
    header:HTMLElement; //H5 新标签
    keygen:HTMLElement; //H5 新标签
    main:HTMLElement; //H5 新标签
    mark:HTMLElement; //H5 新标签，背景颜色突出
    nav:HTMLElement; //H5 新标签
    noframes:HTMLElement; //HTML5 中不支持
    rp:HTMLElement; //H5 新标签
    rt:HTMLElement; //H5 新标签
    ruby:HTMLElement; //H5 新标签  <ruby>漢 <rt><rp>(</rp>ㄏㄢˋ<rp>)</rp></rt></ruby>
    // s:HTMLElement; //H5 新标签,标记删除线
    section:HTMLElement; //H5 新标签,解释
    strike:HTMLElement; //HTML5 中不支持，标记删除线
    summary:HTMLElement; //H5 新标签
    tt:HTMLElement; //HTML5 中不支持，电传文本
    wbr:HTMLElement; //H5 新标签，适合换行处
    
}