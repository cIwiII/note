
## MySQL 关系型数据库

### 0.教程介绍
- 最流行的RDBMS(Relational Database Management System：关系数据库管理系统)之一。

- 关系型数据库，是建立在关系模型基础上的数据库，借助于集合代数等数学概念和方法来处理数据库中的数据。所谓的"关系型"可以理解为"表格"的概念.
    - 表头(header): 每一列的名称;
    - 列(col): 具有相同数据类型的数据的集合;
    - 行(row): 每一行用来描述某条记录的具体信息;
    - 值(value): 行的具体信息, 每个值必须与该列的数据类型相同;
    - 键(key): 键的值在当前列中具有唯一性。

- RDBMS 特点：
    1. 数据以表格的形式出现
    2. 每行为各种记录名称
    3. 每列为记录名称所对应的数据域
    4. 许多的行和列组成一张表单
    5. 若干的表单组成database

- RDBMS 术语：

    -  `数据库`: 数据库是一些关联表的集合。
    - `数据表`: 表是数据的矩阵。在一个数据库中的表看起来像一个简单的电子表格。
    - `列`: 一列(数据元素) 包含了相同类型的数据, 例如邮政编码的数据。
    - `行`：一行（=元组，或记录）是一组相关的数据，例如一条用户订阅的数据。
    - `冗余`：存储两倍数据，冗余降低了性能，但提高了数据的安全性。
    - `主键`：主键是唯一的。一个数据表中只能包含一个主键。你可以使用主键来查询数据。
    - `外键`：外键用于关联两个表。
    - `复合键`：复合键（组合键）将多个列作为一个索引键，一般用于复合索引。
    - `索引`：使用索引可快速访问数据库表中的特定信息。索引是对数据库表中一列或多列的值进行排序的一种结构。类似于书籍的目录。
    - `参照完整性`: 参照的完整性要求关系中不允许引用不存在的实体。与实体完整性是关系模型必须满足的完整性约束条件，目的是保证数据的一致性。
### 1.安装
1. 下载对应系统安装包
2. 解压后，创建my.ini配置文件，如下信息:
3. bin文件下管理员身份启动cmd，执行$ mysqld --initialize --console;获取初始密码
4. 安装 $ mysqld install
5. 启动 $ net start mysql (在5.7需要初始化data目录 $ mysqld --initialize-insecure,再执行net start...)
6. 登录 MySQL ：打开命令提示符，$ mysql -h 主机名 -u 用户名 -p,参数说明如下:

本机登录：$ mysql -u root -p ,MySQL正在运行则会要求输入密码

7. 

```ini
# my.ini配置文件
[client]
# 设置mysql客户端默认字符集
default-character-set=utf8
 
[mysqld]
# 设置3306端口
port = 3306
# 设置mysql的安装目录
basedir=C:\\web\\mysql-8.0.11
# 设置 mysql数据库的数据的存放目录，MySQL 8+ 不需要以下配置，系统自己生成即可，否则有可能报错
# datadir=C:\\web\\sqldata
# 允许最大连接数
max_connections=20
# 服务端使用的字符集默认为8比特编码的latin1字符集
character-set-server=utf8
# 创建新表时将使用的默认存储引擎
default-storage-engine=INNODB

```
- 登录时，参数说明：
    - -h : 指定客户端所要登录的 MySQL 主机名, 登录本机(localhost 或 127.0.0.1)该参数可以省略;
    - -u : 登录的用户名;
    - -p : 告诉服务器将会使用一个密码来登录, 如果所要登录的用户名密码为空, 可以忽略此选项。

### 2.管理
- windows 启动 mysql/bin》mysqld --console
- windows 关闭 mysqladmin -uroot shutdown
#### 用户添加

如：添加用户名guest,密码guest123,授权用户可进行 SELECT, INSERT 和 UPDATE操作权限

```ini
root@host# mysql -u root -p
Enter password:*******
mysql> use mysql;
Database changed

mysql> INSERT INTO user 
          (host, user, password, 
           select_priv, insert_priv, update_priv) 
           VALUES ('localhost', 'guest', 
           PASSWORD('guest123'), 'Y', 'Y', 'Y');
Query OK, 1 row affected (0.20 sec)

mysql> FLUSH PRIVILEGES;
Query OK, 1 row affected (0.01 sec)

mysql> SELECT host, user, password FROM user WHERE user = 'guest';
+-----------+---------+------------------+
| host      | user    | password         |
+-----------+---------+------------------+
| localhost | guest | 6f8c114b58f2ce9e |
+-----------+---------+------------------+
1 row in set (0.00 sec)
```
用户权限列表:
- Select_priv
- Insert_priv
- Update_priv
- Delete_priv
- Create_priv
- Drop_priv
- Reload_priv
- Shutdown_priv
- Process_priv
- File_priv
- Grant_priv
- References_priv
- Index_priv
- Alter_priv

- 另外一种添加用户的方法为通过SQL的 GRANT 命令，以下命令会给指定数据库TUTORIALS添加用户 zara ，密码为 zara123 。
```ini
root@host# mysql -u root -p
Enter password:*******
mysql> use mysql;
Database changed

mysql> GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP
    -> ON TUTORIALS.*
    -> TO 'zara'@'localhost'
    -> IDENTIFIED BY 'zara123';
```
#### 管理MySQL的命令
- USE 数据库名 : 选择要操作的Mysql数据库，使用该命令后所有Mysql命令都只针对该数据库。

mysql> use RUNOOB;
Database changed

- SHOW DATABASES:列出 MySQL 数据库管理系统的数据库列表。
- SHOW TABLES:显示指定数据库的所有表，使用该命令前需要使用 use 命令来选择要操作的数据库。
- SHOW COLUMNS FROM 数据表:显示数据表的属性，属性类型，主键信息 ，是否为 NULL，默认值等其他信息。
- SHOW INDEX FROM 数据表:显示数据表的详细索引信息，包括PRIMARY KEY（主键）。
- SHOW TABLE STATUS [FROM db_name] [LIKE 'pattern'] \G:该命令将输出Mysql数据库管理系统的性能及统计信息。
```ini
mysql> SHOW TABLE STATUS  FROM RUNOOB;   # 显示数据库 RUNOOB 中所有表的信息

mysql> SHOW TABLE STATUS from RUNOOB LIKE 'runoob%';     # 表名以runoob开头的表的信息
mysql> SHOW TABLE STATUS from RUNOOB LIKE 'runoob%'\G;   # 加上 \G，查询结果按列打印
```


### 3.PHP语法
### 4.连接
### 5.创建数据库
### 6.删除数据库
### 7.选择数据库
### 8.数据类型
### 9.创建数据表
### 10.删除数据表
### 11.插入数据
### 12.查询数据
### 13.WHERE 子句
### 14.UPDATE更新
### 15.DELETE 语句
### 16.LIKE 子句
### 17.UNION
### 18.排序
### 19.分组
### 20.连接的使用
### 21.UNLL 值处理
### 22.正则表达式
### 23.事务
### 24.ALTER 命令
### 25.索引
### 26.临时表
### 27.复制表
### 28.元数据
### 29.序列使用
### 30.处理重复数据
### 31.及SQL 注入
### 32.导出数据
### 33.导入数据
### 34.函数
### 35.运算符

### 遇到问题
- 其他
    - MySQL 重置密码
        1. my.cnf配置文件[mysqld]下添加 skip-grant-tables (跳过权限表认证)
        2. 重启MySQL服务：$ service mysql restart
        3. mysql -u root -p 登录
        4. $ use mysql;
        5. $ update user set authentication_string=password("123456") where user='root';# 修改密码
        6. $ flush privileges;  # 刷新权限 \n $ quit 
        - careful：密码字段名 5.7 版本的是 authentication_string，之前的为 password，修改完成后注释掉第一步。
        - 修改不成功：在第五步 where 之前添加 plugin='mysql_native_password' 
        - 8+版本可能失效，可使用$ mysqld --console --skip-grant-tables --shared-memory
    - 关闭 MySQL 服务器：service mysql stop
    - 启动 MySQL：service mysql start

- 首先安装后，执行任何指令都会提示：

ERROR 1820 (HY000): You must reset your password using ALTER USER statement before executing this statement.

可以用以下指令修改你密码为 123456。

ALTER USER 'root'@'localhost' IDENTIFIED BY '123456' PASSWORD EXPIRE NEVER;

或者 alter user user() identified by "123456";

之后使用以下指令刷新权限：

flush privileges;
注意指令末尾的分号。

退出后重新登陆。

MySQL 修改 root 密码的 4种方法(以windows为例)

方法 1： 用 SET PASSWORD 命令

首先登录MySQL。

格式：mysql> set password for 用户名@localhost = password('新密码');

例子：mysql> set password for root@localhost = password('123');

方法 2：用 mysqladmin

格式：mysqladmin -u用户名 -p旧密码 password 新密码 

例子：mysqladmin -uroot -p123456 password 123

方法 3：用 UPDATE 直接编辑 user 表

首先登录MySQL。

mysql> use mysql; 

mysql> update user set password=password('123') where user='root' and host='localhost'; 

mysql> flush privileges; 

方法 4：在忘记 root 密码的时候，可以这样，以 windows 为例：

 1. 关闭正在运行的 MySQL 服务。
 2. 打开 DOS 窗口，转到 mysql\bin 目录。
 3. 输入 mysqld --skip-grant-tables 回车。--skip-grant-tables 的意思是启动MySQL服务的时候跳过权限表认证。
 4. 再开一个 DOS 窗口（因为刚才那个 DOS 窗口已经不能动了），转到 mysql\bin 目录。
 5. 输入 mysql 回车，如果成功，将出现MySQL提示符 >。
 6. 连接权限数据库： use mysql; 。
 6. 改密码：update user set password=password("123") where user="root";（别忘了最后加分号） 。
 7. 刷新权限（必须步骤）：flush privileges;　。
 8. 退出 quit。
 9. 注销系统，再进入，使用用户名 root 和刚才设置的新密码 123 登录。

 报2059错误

 原因： 8+ 版本使用的密码加密规则为 caching_sha2_password。
而 navicate 驱动目前不支持新加密规则，解决问题方法有两种，一种是升级 navicat 驱动，
一种是把 mysql 用户登录密码加密规则还原成 mysql_native_password，
这里我们将 mysql 规则修改回之前的 mysql_native_password，

```ini
ALTER USER 'root'@'localhost' IDENTIFIED BY '你的密码' PASSWORD EXPIRE NEVER; # 修改加密规则 注意一定要有分号。
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '你的密码'; # 更新一下用户的密码  
FLUSH PRIVILEGES; #刷新权限
```


