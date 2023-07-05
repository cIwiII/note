- 部分原文:
    1. VSCode-通过GitLens插件完成git工作流(变基未处理) [https://juejin.cn/post/7038062974610702366]
    2. vscode 有哪些让人眼前一亮的插件? [https://www.cnblogs.com/sexintercourse/p/14983401.html]

- 作用
    1. 记录项目修改人信息
    2. 源代码管理新增可视管理项
    3. 简化git命令操作
- 目录栏
    1. 源代码管理: 分为commit记录、暂存区（add过的文件）、工作区（修改过的文件）
    2. COMMITS：显示当前分支的所有提交，可以查看每个提交的更改明细
    3. FILE HISTORY: 文件历史视图。展示当前文件的历史变更记录。Line History view 行历史视图。展示当前所在行的历史变更记录（bug查找）
    4. BRANCHERS
    5. REMOTES
    6. STASHES: 工作暂存，跨分支工作
    7. TAGS
    8. SEARCH & COMPARE：在Search Commits 视图可以根据作者、文件名、Commit ID等检索提交历史
- 操作
    - add操作：（工作区）更改栏+号add所有修改，文件+号add单个文件，暂存区—可以取消add操作回退
    - commit操作：填写提交信息，源代码管理栏，点击按钮√，完成本次提交。（默认只提交到本地，远程需选择提交并同步，或者提交并拉取）

    - 跨分支工作：a分支不提交commit情况下切换分支工作git stash，`更改栏`上方，找到Stash All Changes按钮（就是那个重置按钮上带+号的），暂存后工作区显示空白（即暂存），可切换b分支工作,回到a分支，顶级目录`STASHES栏`,找到你存储的修改，点击Apply Stash按钮，在弹出的选框中选择Pop Stash便大功告成！
    - note: （Apply和pop的区别在于：Apply不会删除掉stash中的存储记录，而pop会删除）
    - 版本回退：`commit栏`对应`单个commit`右键，选择`Reset Current Branch to Commit` (第二个)，在弹出的选框中选择Hard Reset，回滚完成。
    - Soft Reset回滚的同时会将工作区的内容保留（leaves）
    - Hard Reset回滚的同时会将工作区的内容丢弃！丢弃！丢弃！（discards），所以一定慎重执行Hard Rest



- 异常
    - 同步时提示：rror: You have not concluded your merge (MERGE_HEAD exists)，Git fetch实现的git pull命令:原因可能是在以前pull下来的代码自动合并失败
        - 解决办法一:保留本地的更改,中止合并->重新合并->重新拉取
        ```js
        $:git merge --abort
        $:git reset --merge
        $:git pull
        上述方法无效，可能是在本地进行了版本回退，远程和本地版本不一致，拉取后即使解决冲突，检测不到最新版本或者更改，手动commit，再push解决
        ```
        - 解决办法二:舍弃本地代码,远端版本覆盖本地版本(慎重)
        ```js
        $:git fetch --all
        $:git reset --hard origin/master
        $:git fetch
        ```
    - 如何找到被git reset丢弃的那部分commit？
        1. git reflog，查看全部commit记录（包括回退，删除）
        2. git reset --hard commit对应的hash值 （前6位即可）
- Git fetch和git pull的区别:

都可以从远程获取最新版本到本地

1.Git fetch:只是从远程获取最新版本到本地,不会merge(合并)
```js
$:git fetch origin master   //从远程的origin的master主分支上获取最新版本到origin/master分支上
$:git log -p master..origin/master //比较本地的master分支和origin/master分支的区别
$:git merge origin/master          //合并
```
2.Git fetch:从远程获取最新版本并merge(合并)到本地
```js
$:git pull origin master  //相当于进行了 git fetch 和 git merge两部操作
```
实际工作中,可能git fetch更好一些, 因为在merge前,可以根据实际情况决定是否merge