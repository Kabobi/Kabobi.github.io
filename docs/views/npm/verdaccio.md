---
title: 【verdaccio】搭建私有 npm 仓库
date: 2020-07-01
categories:
    - 前端工程
tags:
    - verdaccio
    - npm
---

# verdaccio 搭建私有 npm 仓库

## 工具准备

`verdaccio` 虽然是一个私有仓库搭建工具，但本身也是一个基于 `npm` 的包,所以服务器需要预先安装 `node` 和 `npm` ，安装完成后再安装 verdaccio：

```
# 终端
npm install -g verdaccio --unsafe-perm # 安装
# --unsafe-perm 参数是为了防止安装时grywarn权限报错
```

如果需要管理 node 进程的话使用 `pm2` 是最好的选择，pm2 是一个进程管理工具,可以用它来管理你的 node 进程，并查看 node 进程的状态，当然也支持性能监控，进程守护，负载均衡等功能
pm2 文档地址：https://github.com/Unitech/pm2

## 配置 verdaccio

第一次运行 `verdaccio` 时会创建一个默认配置文件,目录在 `~/.config/verdaccio/config.yaml` ,此文件是 Verdaccio 的重要部分, 您可以在其中修改默认行为, 启用插件并扩展功能。

```
# 直接输入verdaccio命令运行
verdaccio
```

运行完成后打开默认配置文件

### 默认配置

具体配置项请查看 https://verdaccio.org/docs/zh-CN/configuration

```
# config.yaml
storage: ./storage

plugins: ./plugins

web:
  title: Verdaccio

auth:
  htpasswd:
    file: ./htpasswd

uplinks:
  npmjs:
    url: https://registry.npmjs.org/

packages:
  '@*/*':
    access: $all
    publish: $authenticated
    unpublish: $authenticated
    proxy: npmjs

  '**':
    access: $all
    publish: $authenticated
    unpublish: $authenticated
    proxy: npmjs
server:
  keepAliveTimeout: 60

middlewares:
  audit:
    enabled: true
logs:
  - { type: stdout, format: pretty, level: http }

```

### 设置镜像源

verdaccio 可以设置多个镜像源，镜像源可以使得访问我们私有库镜像源时如果没有找到包，便会向镜像源去下载，我们加入 taobao 镜像源加快下载速度

```
# config.yaml
uplinks:
 taobao:
    url: https://registry.npm.taobao.org/
  npmjs:
    url: https://registry.npmjs.org/

    # 其他设置 ...
# 其他设置 ...
packages:
  '@*/*':
    proxy:
      - taobao
      - npmjs
    # 其他设置 ...
  '**':
    proxy:
      - taobao
      - npmjs
    # 其他设置 ...
```

### 权限管理

默认情况下 `verdaccio` 使用[htpasswd 插件](https://github.com/verdaccio/verdaccio-htpasswd) 来管理权限，默认值为：

```
packages:
  '**':
    access: $all
    publish: $authenticated
```

packages: 控制包访问或发布控制，常用的包名正则有：

```
**         # 匹配任意包
@*/*       # 匹配任意 scope 包
@npmuser/* # 匹配 scope 为 npmuser 的包
npmuser-*  # 匹配包名有 npmuser- 前缀的包
```

包详细配置属性请看下列表格

||~属性||类型||必须的||示例||支持||描述||
||access||string||No||$all||all||定义允许访问包的用户组，值在下面表格||
||publish||string||No||$authenticated||all||定义允许发布的用户,值在下面表格||
||proxy||string||No||npmjs||all||针对特定的 uplink 限制查找||

用户组可选值有

-   `$all` （用户不限制）
-   `$anonymous` （用户不限制）
-   `$authenticated` （所有登录用户）
-   `username` ( 用户名，需指定具体用户，可指定多个用户，用户间空格隔开，如 secret super-secret-area ultra-secret-area)

例如：

```
packages:

  "**":
    access: $authenticated
    publish: kabob jack
    unpublish: kabob jack
```

上面的配置则是只有 kabob 和 jack 能上传包和删除包，只有注册了的用户才能通过此仓库下载包
设置完成后保存 使用 `verdaccio命令 # 启动 verdaccio` 服务,然后会看到 log 信息

```
warn --- config file  - /Users/lc/.config/verdaccio/config.yaml
warn --- Plugin successfully loaded: htpasswd
warn --- Plugin successfully loaded: audit
warn --- http address - http://localhost:4873/ - verdaccio/3.11.5
```

说明已经启动成功，可以看到仓库的默认地址是 `http://localhost:4873/` ,至此私有仓库就搭建完毕了

## 发布流程

### 注册并登录用户

`npm adduser --registry http://localhost:4873` 依次根据提示输入 username、password 以及 Email 即可

### 上传私有包

进入到包根目录，执行发布命令即可
`npm publish --registry http://localhost:4873` ##开发使用

### nrm

nrm 是一个 NPM 源管理器，允许你快速的在多个 NPM 源间切换 ，具体用法:https://www.npmjs.com/package/nrm ，安装完成后可以方便切换源和查看。
`npm install -g nrm`
我们先将 npm registry 设置为私有库的地址：

```
# npm config
npm config set registry http://xxx.com/
npm config get registry # -> http://xxx.com/

# 或 nrm
nrm add localnpm http://xxx.com/
nrm use localnpm
```

如果是 ip 地址的话可以设置别名

### 添加镜像源别名

添加镜像别名后可以更直观的查看当前源
`nrm add qwk http://192.168.1.136:4873`
`nrm ls` 查看所有镜像源

### 测试 npm 包

测试私有库镜像源对于普通的 npm 公共包的安装是否正常，建立一个空项目，安装 the-answer 这个包。

```
mkdir test-localnpm
cd test-localnpm
npm init -y
npm i the-answer # 安装 the-answer
```

可以回到运行 verdaccio 的终端窗口可以看到一下内容，
说明 verdaccio 从多个源获取包信息，并传回 npm 客户端。

```
http --&amp;gt; 200, req: 'GET https://registry.npm.taobao.org/the-answer' (streaming)
http --&amp;gt; 200, req: 'GET https://registry.npm.taobao.org/the-answer', bytes: 0/2632
http --&amp;gt; 200, req: 'GET https://registry.npmjs.org/the-answer' (streaming)
http --&amp;gt; 200, req: 'GET https://registry.npmjs.org/the-answer', bytes: 0/2661
http &amp;lt;-- 200, user: null(127.0.0.1), req: 'GET /the-answer', bytes: 0/1122
http &amp;lt;-- 200, user: null(127.0.0.1), req: 'GET /the-answer', bytes: 0/1122
```

而重新安装或全新安装的 log 则会变成：

```
http &amp;lt;-- 304, user: null(127.0.0.1), req: 'GET /the-answer', bytes: 0/0
http &amp;lt;-- 304, user: null(127.0.0.1), req: 'GET /the-answer', bytes: 0/0
http --&amp;gt; 304, req: 'GET https://registry.npm.taobao.org/the-answer' (streaming)
http --&amp;gt; 304, req: 'GET https://registry.npm.taobao.org/the-answer', bytes: 0/0
http --&amp;gt; 304, req: 'GET https://registry.npmjs.org/the-answer' (streaming)
http --&amp;gt; 304, req: 'GET https://registry.npmjs.org/the-answer', bytes: 0/0
http &amp;lt;-- 200, user: null(127.0.0.1), req: 'GET /the-answer', bytes: 0/1122
http &amp;lt;-- 200, user: null(127.0.0.1), req: 'GET /the-answer', bytes: 0/1122

```

一些地方的 http status 从 200 变成了 304，
表示有缓存功能的存在，不会每次都重新从远端仓库下载包代码,
尝试在代码中调用，可以发现 the-answer 这个包能够正常工作。

```
// .js
const theAnswer = require("the-answer");
console.log(theAnswer); // -&amp;gt; 42
```

end
