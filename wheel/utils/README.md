## Install

```bash
npm install utils --save
```

## Usage

```javascript
const { download } = require("utils");

download(url)
```


# Javascript

## 第二课
git提交规范
- 基本命令： type: description
- type（必须） : commit 的类别，只允许使用下面几个标识：
  - feat : 新功能
  - fix : 修复bug
  - update: 更新
  - docs : 文档改变
  - style : 代码格式改变
  - refactor : 某个已有功能重构
  - perf : 性能优化
  - test : 增加测试
  - build : build工具发生变化， 如 grunt换成了 npm
  - revert : 撤销上一次的 commit
  - chore : 构建过程或辅助工具的变动
  - add: 新功能（优先feat）

- description（可选）
推荐以动词开头，如： 设置、修改、增加、删减、撤销等，

- vscode文件标识：新增文件-U，修改未commit-M，

## 第一课
更改仓库属性为私有
1. 在仓库名称下，单击Settings（设置）。
2. 在“Danger Zone（危险区域）”下“Make this repository private（将此仓库设为私有）”旁边，单击Make private（设为私有）。
3. 阅读关于将仓库设为私有的警告。