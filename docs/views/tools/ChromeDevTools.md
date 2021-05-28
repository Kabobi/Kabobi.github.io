---
title: 【Chrome DevTools】使用技巧
date: 2020-10-27
categories:
    - 工具
tags:
    - Chrome
    - devTools
---

# Chrome DevTools 使用技巧

在 chrome 地址栏输入 about:blank 可以打开一个 chrome 空白页面

## 命令行

通过 Ctrl + shift + p 打开命令行 然后输入一些命令

-   capture node screenshot 是截取当前 Elements 中选中的节点
-   capture full size screenshot 截取当前网页
-   capture screenshot 截取当前窗口可见内容
-   FPS 实时监控 FPS 等性能
-   performance monitor 性能监视器
-   show animations animation 动画监视器 可以将所有触发的动画都记录下来回放,并且可以可视化有哪些属性更改了，自定义 animation time 调试 , 并且可以可视化拖拽属性数据

## Elements

### styles

点击 styles 栏中最右边的:hov 就会展开可以控制元素状态的选项 , 例如 hover 选项来控制元素的 hover,而旁边的.cls 则是为当前元素添加一个 class，最右边的 加号 则是添加一段新的 css 代码

### copy node

实际上点击 Elements 中的节点可以直接 Ctrl + c ， Ctrl + v ， 来复制黏贴节点 ！delete 键还可以直接删除节点

### Dom Break points

点击 dom 节点点击鼠标右键 可以编辑 隐藏 删除 复制 改变状态等等选项,其中 break on 是 dom 元素断点

Subtree modifications：子节点更改时触发。
Attributes modifications：节点更改属性时触发
Node Removal：在移除节点时触发。

## Console

Console 控制台可以运行代码这个大家都知道，但是你有可能不知道的是控制台还带有一些内置指令，在控制台可以输入以下指令方便调试

### \$(selector, [startNode])

相当于 document.querySelector 的简写 ，但是有第二个参数可以指定从哪个节点往下寻找 ，默认值为 document

### \$\$(selector，[startNode])

相当于 document.querySelectorAll 的简写

### $0-$4

$0 $1 $2 $3 \$4 最后选中过的 5 个节点

### \$\_

返回上一个执行过的值

## Sources

### page

网页当前的静态资源全部都会在 page 选项卡下 ，点击进入文件可直接编辑文件保存即更改 文件最下方左边还有一个 { } (format) 图标 点击格式化当前文件

### snippets

点击 New snippet 会添加一个代码文件，里面可以写 js 代码 ，完成后右键 run 即可运行代码片段

### Filesystem

可以导入本地文件使用 chrome 的编辑器进行代码修改 , 点击 Add folder to workspace ，然后给予浏览器权限后就导入成功了，直接点击文件修改文件代码修改的就是本地的源文件

## Network

### Presever log

选项勾选后站点跳转任然有 request log 不会清空上个站点的 log
