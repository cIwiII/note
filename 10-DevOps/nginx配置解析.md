
源地址：https://www.cnblogs.com/wayneliu007/p/10931462.html

nginx是高性能的轻量级web服务器。

特性：

1.http代理

2.反向代理

3.负载均衡

4.缓存机制

## 一，安装及启动（centos7，nginx 1.14.0)

1.下载
```js
wget http://nginx.org/download/nginx-1.14.0.tar.gz
```

2.安装
```js
#第三方库
yum -y install make zlib zlib-devel gcc-c++ libtool openssl openssl-devel
yum -y install pcre-devel  #可以使用pcre-config —version查看版本

#解压安装包
tar zxvf nginx-1.14.0.tar.gz

#从configure脚本自动生成makefile
cd nginx-1.14.0
./configure --prefix=/usr/local/webserver/nginx    #--prefix是指定安装路径，根据自己的情况而定

#编译安装
cd nginx-1.14.0
make && make install

#编译成功后查看版本
/usr/local/webserver/nginx/sbin/nginx -v   #安装后的目录有四个conf,html,logs,sbin


```

 3.启动:可进行访问
```js
/usr/local/webserver/nginx/sbin/nginx
```

 ### 二，常用指令

1.启动测试文件

/usr/local/webserver/nginx/sbin/nginx -t
 

2.指定配置文件启动

/usr/local/webserver/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf
 

3.重启

/usr/local/webserver/nginx/sbin/nginx -s reopen
 

4.重载配置文件，也有重启的作用

/usr/local/webserver/nginx/sbin/nginx -s reload
 

5.停止

/usr/local/webserver/nginx/sbin/nginx -s stop
 

三，配置结构图
- nginx配置结构：
    - 全局块配置
    - events块
    - http块
        - http全局块
        - 多个server块(每个包含一个server全局块和多个location块)

结构说明：

1）全局块：作用于nginx全局，通常包括以下部分

- 配置运行nginx服务器用户（组）
- worker process 数
- nginx进程PID存放路径
- 错误日志的存放路径
- 配置文件的引入
2）events块：影响nginx服务器与用户的网络连接，包括：

- 设置网络连接的序列化
- 是否允许同时接收多个网络连接
- 事件驱动模型的选择
- 最大连接数的配置
3）http块：

- 定义MIMI-Type   #资源的媒体类型 ，参考
- 自定义服务日志
- 允许sendfile方式传输文件
- 连接超时时间
- 单连接请求数上限  #控制 Nginx 单个进程允许的最大连接数，参考
 4）server块：

- 配置网络监听
- 基于名称的虚拟主机配置
- 基于ip的虚拟主机配置
5）location块：

- location配置
- 请求根目录配置
- 更改location的URI
- 网站默认首页配置
 

 四，配置实例

 实例和解析
```yaml

#全局块
user  nobody  nobody; #指定能运行nginx的用户（组） 指令格式：user user [group];如果不配置，或者为本例配置，则所有用户都可以启动nginx进程
worker_processes  3; #nginx的工作进程数，3表示最多可以产生3个工作进程，可以通过ps -aux|grep nginx查看到，如果选auto,则为自动检测
error_log  logs/error.log; #错误日志的路径
pid  logs/nginx.pid; #nginx进程是作为系统守护进程运行的，需要在某文档中保存当前当前运行程序的主进程号。指令格式pid file;指定文件名称，本例中是默认值
#以下是全局块中此例没有列出的
#配置文件引入。指令格式include file;用于引入第三方模块配置或其他nginx配置


#events块
events {
    use epoll;  #事件驱动模型的选择，可以选择如select、poll、kqueue、epoll、rtsig
    worker_connections  1024; #表示允许每一个worker process可以同时开启的最大连接数，默认是512
#以下是events块没有列出的
#设置网络连接的序列化。指令格式：accept_mutex on|off; 默认是on状态，表示会对多个nginx进程接收连接进行序列化，防止多个进程对连接的争抢，#即worker将是以串行方式来处理，其中有一个worker会被唤醒。#而off 表示所有worker都会被唤醒，但只有一个worker能获得新连接，其他会重新进入休眠。
#是否允许同时接收多个网络连接。指令格式：multi_accept on|off。默认是off,即是每个worker process一次只能接收一个新到达的网络连接
}


#http块
http {
    #http块全局
    include       mime.types;   #将mime.types文件包含进来，可以通过cat mime.type来查看mime.types的内容
    default_type  application/octet-stream;  #指令格式是：default_type mime-type； 其中MIME-Type指的是网络资源的媒体类型，也即前端请求的资源类型，是mime.types的内容的一种。
    log_format main '$remote_addr - $remote_user [$time_local] "$request" '   #定义个一个名为main的日志格式
                '$status $body_bytes_sent "$http_referer" '
                '"$http_user_agent" "$http_x_forwarded_for"';
   access_log logs/access.log main;  #自定义服务日志的路径+名称，指令格式是access_log path [format],其中format是日志的字符串格式，可以使用log_format定义格式，此处是使用名称为main的format格式，
   sendfile on; #是否允许sendfile方式传输文件，指令格式为sendfile on|off;sendfile_max_chunk size; size=0表示每个worker process每次调用sendfile（）传输的数据的最大值。不限制，默认是0
   keepalive_timeout 65; #表示server端对连接的保持时间。默认是75s，指令格式为：keeplive_timeout timeout [header_timeout];header_timeout表示在应答报文头部的keep-Alive域设置超时时间“Keep-Alive:timeout=header_timeout"
   #以下没有在http块列出
   #单连接请求数上限，指令格式为：keepalive_requests number; #用于限制用户通过某一连接向nginx服务器发起请求的次数
 
    #server块
    server {
        #server全局块
        listen       8088; #设置网络监听，指令格式两种：1.listen IP [:port];2.listen port;1是监听某IP的所有（或某一）端口，2是监听某一端口的所有IP
        server_name  codesheep;   #基于名称和IP的虚拟主机配置，指令格式：server_name name1 name2 ...;此处的name支持正则表达式，例如：server_name ~^www\d+\.myserver\.com$
3
        access_log  /codesheep/webserver/server1/log/access.log;  #自定义日志
        error_page  404  /404.html;   #错误提示与错误页
        
        #location块
        location /server1/location1 {   #location配置，指令格式：location [ = | ~ | ~* | ^~ ] uri {...};其中uri分为标准uri 和 正则uri；
            # =（请求字符串与uri严格匹配） 和 ^~(寻找标识uri和请求字符串匹配度最高的location后，立即用此location处理请求) 用于标准uri
            # ~（区分大小写）和 ~*（不区分大小写） 用于正则uri
            root   /codesheep/webserver;  #请求根目录配置，指令格式：root path；path是nginx接收请求后查找资源的根目录路径；还可以通过alias 更改location接收到的URI请求路径，指令为：alias path
            index  index.server2-location1.htm;  #设置网站的默认首页，指令格式：index file ....；其中file可以包含多个用空格隔开的文件名，先找到哪个就用哪个响应请求
        }

        location /server1/location2 {
            root   /codesheep/webserver;
            index  index.server2-location2.htm;
        }

    }

    server {
        listen       8089;
        server_name  192.168.31.177;
        access_log  /codesheep/webserver/server2/log/access.log;
        error_page  404  /404.html;
        
        location /server2/location1 {
            root   /codesheep/webserver;
            index  index.server2-location1.htm;
        }

        location /srv2/loc2 {
            alias   /codesheep/webserver/server2/location2/;
            index  index.server2-location2.htm;
        }
        
        location = /404.html {
            root /codesheep/webserver/;
            index 404.html;
        }
        
    }

}
```