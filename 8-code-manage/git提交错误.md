











提交代码显示，不能提交的main主分支，询问是否创建子分支推送

```js
You don't have permissions to push to "clwill/easy" on GitHub. Would you like tocreate a fork and push to it instead?
```

方式一：

创建子分支推送

方式二：关闭保护，就要推送到main分支









## 输入本地git账户后提示

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

#### 方式二：

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

#### 方式一：(无效，替换后连域名都没了)

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

