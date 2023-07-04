



## github上各个功能含义

![image-20230402235619370](C:\Users\LENOVO\AppData\Roaming\Typora\typora-user-images\image-20230402235619370.png)

### **Pin**

第一个按钮是`Pin`，该词可被译为：钉住、按住。被`Pin`的仓库会显示在个人主页中，类似于仓库置顶。

### **Watch**

第二个按钮是`Watch`，默认是`Unwatch`，如果你想关注某个仓库，当这个库有新的通知时就会提醒你。

- 类型一 Participating and @mentions 就是参与或者被@时接收通知，
- 类型二 All Activity 代表这个库的所有变化都会通知，
- 类型三 Ignore 表示忽略所有通知，
- [类型四](https://www.zhihu.com/search?q=类型四&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A2476249977}) Custom 表示在参与和被@的基础上额外增加一些可以被通知的事件

### **Star**

先说第四个按钮，这个代表点赞插眼，我们可以在自己的`Github`个人主页中找到`star`过的项目，且可以对这些仓库分类。

### **Fork**

`OK`，回到第三个按钮，着重讲一下`Fork`的工作流。`Fork`代表从别人的代码仓库中复制一份到自己的代码库，包含了别人库中的提交历史记录。经过`fork`后的代码库是完全独立的，由自己维护，可以进行任何魔改。改完之后自己可以通过`Pull Request`向原来的库提交合并请求。先贴图总览：

![image-20230403000125150](C:\Users\LENOVO\AppData\Roaming\Typora\typora-user-images\image-20230403000125150.png)



流程可以总结如下：

1. `Fork`别人的仓库：复制别人仓库（代码、文件、提交历史记录、`issue`等），复制后的仓库在自己的`github`账号中存着。
2. `Clone`[远程仓库](https://www.zhihu.com/search?q=远程仓库&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A2476249977})：将这个复制后的远程仓库克隆到本地。
3. 在[工作区](https://www.zhihu.com/search?q=工作区&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A2476249977})对代码进行`CRUD`操作（增删改查）
4. 将代码的更改提交暂存区（`git add .`）
5. 将暂存区的文件提交到本地仓库（`git commit -m '小修一下'`）
6. 将本地仓库的代码推送到远程仓库（`git push`）
7. 给别人的仓库发送`Pull Request`：如果原作者认为你的修改版本不错，就会将你代码中的修改合并到自己的库中。



## 使用github上别人的项目代码![image-20230402235400799](C:\Users\LENOVO\AppData\Roaming\Typora\typora-user-images\image-20230402235400799.png)



