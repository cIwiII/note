### Git 使用

- [`中文文档`](https://git-scm.com/book/zh/v2) 

- 3种状态分别为：工作区、暂存区、Git仓库。

**命令查询（git status）** 

- `Changes not staged for commit`：被修改，待添加到缓冲区(add)
- `Changes to be committed`：暂存(缓冲)区，待提交(commit)
- `Untracked files`：新建的文件，未被监管，首次添加

**文件标注** 

- M: 文件内容或者mode被修改了，最常见

- U: 新增文件，未添加到暂存区

- A: 新增文件，已添加到暂存区

- D: 已经被删除的文件，一般显示在提交记录中

### 基本命令

1. `git init`：初始化

2. `git clone 远程仓库链接`：首次检出 clone

3. `git add 文件名`：添加暂存(缓冲)区(状态A)，`.`是所有文件，

4. `git commit -m`： 提交  暂存区=>本地仓库，提交规则忽略加 --no-verify 或-n

   ```js
   git commit -m "feat：提交日志信息"  // feat是提交类型，见下文
   git commit -m "feat：提交日志信息" --no-verify
   ```

5. `git pull`：拉取，远程仓库→本地仓库

6. `git push`：推送，本地仓库→远程仓库,
 语法：git push < remote > < branch >
   < remote > 表示远程仓库名字，一般默认名字为 origin；
   < branch > 表示要推送的分支，这里是 master 分支。所以完整的命令如下：
   ```js
   git push origin master
   ```

7. `git checkout -b 分支名称`：创建并切换

   - git branch testing：仅创建

   - git checkout testing：切换

8. 本机全局 git 用户名设置：git config --global user.name "用户名" 
9. 本机全局 git 邮箱设置： git config --global user.email "email" ,
10. 查看全局用户名、邮箱 或其他信息：git config --list 
11. 针对单个项目设置 git 提交信息：.git\config中配置，如下：
```bash
[user]
name = 666
email = 123666@163.com
```
git config --list：也可以打开全局配置文件gitconfig文件查看，如果没有针对项目设置信息，默认使用全局用户信息

### 进阶命令

更多命令查看[官方总览](https://git-scm.com/docs) 或者 [其他第三方](https://edu.csdn.net/skill/git/git-f0d68868583b48d0851c7add33e2f8ff?category=1413&typeId=124536) 

1. `git branch -a`：所有分支

2. `git branch -d 分支名称`：删除本地指定分支

3. `git branch orgin --delete 分支名`：删除指定远程分支

4. `git push --set-upstream origin 远程分支`：推送至远程

5. `git branch --set-upstream-to=origin/远程分支名称`：关联远程分支（不存在则创建）

6. `git branch -u origin/远程分支名称`：本地关联远程已存在的分支

7. `git branch --unset-upstream`：取消本地和远程分支的关联

8. `git branch -vv`：查看本地/远程分支情况，映射情况, *为当前分支

9. `git branch`：本地分支列表

10. `git branch -r`：远程分支列表

11. `git branch --merged 当前分支`：列出合并到当前的分支

12. `git branch --merged master`：只列出已经合并到master的分支

13. `git log`：详细操作信息（不含删除等）--pretty=oneline，简化信息

14. `git reflog`：简化的所有分支所有信息，包括被删除的版本或者回退

15. `git merge a`：a分支合并到当前分支

16. `git reset --hard 版本号`：版本回退

17. `git -v`：版本查看

18. `git push -f orgin 远程分支名`：强制推送

19. `git status`：查看文件状态，

20. `git stash`：工作区暂存，跨分支工作

21. `git diff dev master --stat` 或者 `git log dev ^master`：分支差异比较

    - 如果没有输出，通常为没有差异, 退出查看状态：英文q退出

    - `git diff dev master --stat file.txt`: 加文件名，能够查看 file.txt 这个文件在两个分支之间的差异摘要信息

22. `git log master..dev # since..until`，包含了在dev分支而不在master分支中所有的提交，若无结果，说明一致


### 常用提交类型

严格程度根据项目提交要求定，甚至可以没有要求。严格情况下，不符合要求会导致提交（push）失败

- 语法：git commit -m type: description
  - type : commit 的类别
  - description：提交信息描述，推荐以动词开头，如： 设置、修改、增加、删减、撤销等

**`type 常用类型`**  

- feat : 新功能
- fix : 修复bug 
- add: 新功能
- update: 更新
- docs : 文档改变
- style : 代码格式改变
- refactor : 某个已有功能重构
- perf : 性能优化
- test : 增加测试
- build : build工具发生变化， 如 grunt换成了 npm
- revert : 撤销上一次的 commit
- chore : 构建过程或辅助工具的变动



### 常见问题

#### [commit取消](https://edu.csdn.net/skill/git/git-f0d68868583b48d0851c7add33e2f8ff?category=1413&typeId=124536) 

```js
git commit -m 'initial commit'   // 正常提交
git add forgotten_file   // 又修改了文件，进行add添加
git commit --amend   // 执行后，i编辑信息，esc：wq保存，enter，正常push
```

- git commit --amend之前可以是其他命令，编辑的信息替代initial commit 信息, 最终只会有一个提交——第二次提交将代替第一次提交的结果

#### 暂存取消（取消add）

- 语法：git reset HEAD < file >...  如取消暂存 readme.txt 文件

  ```js
  git reset HEAD readme.txt
  ```

  

#### 用户名邮箱配置

  用户名一般在首次clone时自动弹出，后续不再弹出，如果后续要改动：

- 配置用户名称：git config --global user.name "用户名"
- 配置用户邮箱：git config --global user.email "邮箱"

- 以上执行不能配置，可以直接删除本地git账户凭证，正常提交会再次弹出填写用户名和邮箱（控制面板-用户账户-凭据管理器，删除git相关凭据）



#### gitignore忽略上传

在.git文件所在的目录创建 .gitignore 文件。

```bash
# 忽略.class后缀的所有文件
*.class

# 忽略名称中末尾为ignore的文件夹
*ignore/

# 忽略名称中间包含ignore的文件夹
*ignore*/

# 忽略多层嵌套node_modules
**/node_modules/**
    
# 忽略指定文件
.env.local

```

#### gitignore文件不生效的解决办法

对于已经进行过git add操作的目录，如果新添加了.gitignore文件，则在进行git commit时，.gitignore文件不会生效的；
解决办法如下：

```bash
# 删除在暂存区中的缓存
git rm -r --cached .

# 重新提交
git add .
git commit -m 'update .gitignore'

```

#### 冲突问题

冲突解决：选择指定内容，add、commit、push

- `Accept Current Change`: 本地仓库代码;
- `Accept Incoming Change`: 远程仓库代码;

- `Accept Both Changes`: 两者都保存(合并);

- `Compare Changes`: 打开本地和远程对比窗口;

本地分支间冲突特殊解决：冲突解决中的异常窗口，是系统让输入冲突日志信息，可不用输入，直接退出该模式，退出方式:按`i`键，再按`ESC`键，输入`:wq`，然后回车;

- i：编辑，esc：退出编辑，：wq保存退出，回车执行

![在这里插入图片描述](https://img-blog.csdnimg.cn/904ba39d4fd043be9e3f8fc5cac0b2e0.png#pic_center)




#### git推送验证
1. commit 失败，一般有提交验证，简单的方法（偏方）是添加--no-verify，

```js
git commit -m "xxxxx" --no-verify
```



2. 在推送远程时，有时遇到换行方式问题，远程只能是LF，本地是CRLF（window）

- 解决一：将本地换行方式也使用LF
```json
// settings.json
{
  "files.eol": "\n",
  "prettier.endOfLine": "lf"
}
```
  	第一种为编辑器自带（可单独配置）
    第二种为prettier插件格式化配置
    作用于之后的创建的文件，之前的还是需要进行一次手动更改。
- 解决二：git 推送时转换为LF，拉取时再转回CRLF，执行如下命令
```js
git config --global core.autocrlf true
```
<br>

#### git 命令报错问题


**1. git add . 失败**
   warning: LF will be replaced by CRLF in 文件.
   The file will have its original line endings in your working directory

- 解决：git config --global core.autocrlf false

**2. git branch --set-upstream-to=origin/develop，本地关联远程失败
   error: the requested upstream branch 'origin/develop' does not exist**

  - 解决：git pull origin master --allow-unrelated-histories
  - git branch --set-upstream-to=origin/master master

**3. 无权限/SSH 克隆失败：在git push origin master或者pull时失败**
   - git config --global user.name "yourname"
   - git config --global user.email“your@email.com"
   - 删除.ssh文件夹（直接搜索该文件夹）下的known_hosts(手动删除即可，不需要git）
   - ssh-keygen -t rsa -C "your@email.com"（请填你设置的邮箱地址），（执行后再次输入地址）
   - 出现：Generating public/private rsa key pair.Enter file in which to save the key (/Users/your_user_directory/.ssh/id_rsa):  回车
   - 系统会自动在.ssh文件夹下生成两个文件，id_rsa和id_rsa.pub，用记事本打开id_rsa.pub，复制全部内容
   - 登录远程仓库，在设置中添加一个新的SSH keys
   - ssh -T git@远程仓库地址，如github.com，或私有仓库地址，（提示输入yes，提示Welcome to xxxx成功）
   - 重新克隆远程仓库

**4. The requested URL returned   error: 500** 
   - 网络上的办法基本没啥用，大多数牛口不对马嘴，看起来有作用，实际就是偶然莫名其妙好了，
   - 多为网络波动，去网站上将账号登出，尝试重新登陆，登陆不上就是波动中，过段时间尝试能登陆上就好了

**5. 报错 remote：HTTP Basic：Access denied  fatal：Authentication failed for 'https://XXXXXXXXX':  **
   - 大致就是访问远程仓库访问失败，身份验证未通过
   - 产生原因：本机账户密码过期必须修改，而远程和本地都是关联的本机，登陆远程仓库发现以前的密码登陆不上，而是使用更改后的密码
   - 核心原因：账户密码问题（不管是什么原因，主要原因便是登陆的远程仓库密码更改，之前关联的账户和密码自然也就不存在）
   - 解决：网上有很多命令的方法，核心就是修改凭证，我使用简单粗暴的方法就是直接`删除本地凭证`，再执行命令时就会弹出登陆验证，输入更改后的信息，自动重新创建即可。
   - 删除本地凭证：控制面板-用户账户-管理windows凭据-普通凭据-对应的账户网址凭证，（一般会有两个，一个是网站凭证，一个是登陆这个网站的用户凭证，按理应该删除带用户的就行，我是都删了）







================================



#### push 错误



提交代码显示，不能提交的main主分支，询问是否创建子分支推送

```js
You don't have permissions to push to "clwill/easy" on GitHub. Would you like tocreate a fork and push to it instead?
```

方式一：

创建子分支推送

方式二：关闭保护，就要推送到main分支



还有可能为不是对应仓库的开发（一般为同一个设备下，有多个账号存在，产生混乱）









#### 输入本地git账户后提示

```js
> git push origin main:main
warning: ----------------- SECURITY WARNING ----------------
warning: | TLS certificate verification has been disabled! |
warning: ---------------------------------------------------
warning: HTTPS connections may not be secure. See https://aka.ms/gcm/tlsverify for more information.
remote: Support for password authentication was removed on August 13, 2021.
remote: Please see https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories#cloning-with-https-urls for information on currently recommended modes of authentication.
fatal: Authentication failed for 'https://github.com/layitf/layitf.github.io.git/'

```

### 

##### 方式二：

在github上找到seetings->Developer settings->Personal access tokens->Generate new token
如果是第一次的话就点那个Personal access tokens里面可以点击的那串generate什么的。

```js
Note：名字可以自己定义
Expiration：过期时间，可以自己设置
Select scopes：个人使用的话可以全选
```

然后会生成一串码，复制一下。
在git上重新推一下

然后会弹出一个框，输入用户名，密码为刚才复制的密钥

将刚才复制的码粘贴进去，然后sign in就可以推送到远程仓库了

##### 方式一：(无效，替换后连域名都没了)

1. 找到 .git 文件夹 如果是 mac 需要在项目文件 按下 shift + command + . 三个按钮，你将会看到隐藏文件。
2. 找到 git 文件夹 内的 config 文件，找到下面这段代码 标橙色的 域名。

```js
[remote "origin"]
url = https://github.com/J-Boss-Os/J-Boss-Tool.git
fetch = +refs/heads/*:refs/remotes/origin/*
[branch "master"]
```

替换为

```js
[remote "origin"]
url = https://账户@密码/J-Boss-Os/J-Boss-Tool.git
fetch = +refs/heads/*:refs/remotes/origin/*
[branch "master"]
```



#### github 密钥创建

1、终端执行 ` ssh-keygen -t rsa -C "账号邮箱"` 一路enter (默认生成文件 ~/.ssh/id_rsa,和~/.ssh/id_rsa.pub, 分别表示私钥和公钥 )

2、执行 `ssh -T git@github.com`，显示：`Hi cIwiII! You've successfully authenticated, but GitHub does not provide shell access.` 表示成功。

2、执行`clip < ~/.ssh/id_rsa.pub` 复制密钥，或找到对应文件打开复制

3、登录账号，粘贴至 setting -  SSH and GPG keys - New SSh key 下



#### 同设备多账户问题

可解决：git@github. com: Permission denied (publickey) 问题，核心是密钥没对，1、可能是本身没有配置，2、配置了，但是config（如果有）中别名未配置正确。



方式一、单个账号，重新生成密钥对，不指定名字，使用默认名字

方式二、使用了ssh-agent代理管理git私钥

- 添加本地私钥：ssh-add ~/.ssh/自己定义的名字

- 如报错“Could not open a connection to your authentication agent.”，说明agent没有启动，先运行：eval $(ssh-agent)或者eval \`ssh-agent -s\` (注意这里是反引号)，然后再运行ssh-add ~/.ssh/自己定义的名字

- 再使用`ssh -T git@github.com`测试



方式三、配置一个Host 别名，一般用于多个账户的配置，比如：github.com账号、gitee.com账号等

```shell
# ~/.ssh/config 需要手动创建
# 默认 SSH 配置
Host github.com
   HostName github.com
   IdentityFile ~/.ssh/id_rsa
   
# Personal repo SSH configuration
Host count
   HostName github.com
   IdentityFile ~/.ssh/id_rsa_personal
   Port 22
   User personal_username
```

**配置说明**：

- Host：多个配置需要区别，可以任意取，但是关系到clone项目时的连接，如 配置为count，拉去的仓库为 `git@github.com:user/demo.git`, 那么需要改为`git@count:user/demo.git`
- IdentityFile：对应了密钥文件的地址
- User：用户名
- HostName：真实的域名地址，`git@github.com:user/demo.git`中为 `github.com`
- Port：默认端口22，有转发情况可配置其他端口
- PreferredAuthentications：配置登录时用什么权限认证--可设为publickey,password publickey,keyboard-interactive等

配置完成后，使用ssh -T git@github.com测试



