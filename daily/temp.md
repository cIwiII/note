category
categories
pluggable 可插拔
Getting Started 入门
Prerequisites 前言，条件
Manual 手动
Steps 步骤
functionality  功能
official  官方的
distribution 发布
command 命令/指令
directory 目录结构
assigned 分配
tick 标记
Macro 宏观
Micro 微观
Task 任务

1.特殊疑问句，疑问词方句首，如what（什么），which（两个及以上的选择）

2.谓语动词用被动语态

3.部分动词自带某个事，如dress：给...穿衣，后面就不需要在家衣服，直接给穿衣的人

4.动词是不能作为主语的，需要变为动名词，如go动词，要做主语going

5.引导定于从句（形容词作用）：用and，where，in which，如：他去了某地，并在哪里干了什么

6.when，which
名词(宾语)+定于从句=>  翻译为 定于从句+名词

7.of先翻译后面，表示所属关系，A of B 表示B的A
for先翻译前面的，可以表示原因，对象等
of 表示关系，for 表示原因  表示为了……


raect + TS  地址：  https://jishuin.proginn.com/p/763bfbd7bd87

有用的 React Prop 类型示例

export declare interface AppProps {
  children?: React.ReactNode; // 最好，接受 React 可以渲染的所有内容  
  childrenElement: JSX.Element; // 单个 React 元素  
  style?: React.CSSProperties; // 传递样式props 
  onChange?: React.FormEventHandler<HTMLInputElement>; // 形成事件！泛型参数是 event.target 的类型  
  props: Props & React.ComponentPropsWithoutRef<"button">; // 模拟按钮元素的所有 props 并明确不转发其 ref    
  props2: Props & React.ComponentPropsWithRef<MyButtonWithForwardRef>; // 模拟 MyButtonForwardedRef 的所有 props 并显式转发其 ref
}



https://jishuin.proginn.com/p/763bfbd7bd87   文档底部配备性能问题解决方案

