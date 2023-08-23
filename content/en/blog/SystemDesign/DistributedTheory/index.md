---
date: 2023-08-23
title: 分布式理论基础
linkTitle: 分布式
weight: 1
description: >
  整理HTTP相关面试题，准备2023面试...<br>
  经济危机，普通人的出路在哪里
author: Gainovel ([@gainovel](https://gainovel.github.io/))
resources:
  - src: "**.{png,jpg}"
    title: "Image #:counter"
    params:
      byline: "Photo: Gainovel / tiandao"
---

## 1. 什么是HTTP？

1. 超文本传输协议(HyperText Transfer Protocol)
2. HTTP传输的内容是超文本。它是文字、图片、视频等的混合体
3. 传输就是把数据从计算机网络的某个节点传递到另一个节点
4. 协议就是一种约定和行为规范

## 2. HTTP常见的状态码有哪些？

1. 1xx类表示信息性状态码；是协议处理中的一种中间状态，实际用到的比较少
2. 2xx类表示成功状态码；服务器成功处理了客户端的请求
    1. [200 OK] 成功
    2. [204 No Content] 与[200 OK]基本相同，只是相应头中没有body数据
    3. [206 Partial Content]用于HTTTP分块下载或断点续传，表示想用返回的body数据只是一部分
3. 3xx类表示重定向状态码；客户端请求的资源发生了变动，需要重定向
    1. [301 Moved Permanently]表示永久重定向，说明请求的资源已经不存在了，需改用新的URL再次访问
    2. [302 Found]表示临时重定向，说明请求的资源还在，但暂时需要用另一个URL来访问
    3. 301和302都会在响应头里使用字段Location，指明后续要跳转的URL，浏览器会自动重定向新的URL
    4. [304 Not Modified] 缓存重定向
4. 4xx类表示客户端错误状态码；客户端发送的报文有误，服务器无法处理
    1. [400 Bad Request]比较笼统的错误
    2. [403 Forbiddden]表示服务器禁止访问资源，一般是由于没有权限
    3. [404 Not Found] 表示请求的资源在服务器上不存在或未找到
5. 5xx类状态码表示服务器错误状态码；服务器处理时内部发生了错误
    1. [500 Internal Server Error]比较笼统
    2. [501 Not Implemented]表示客户端请求的功能还不支持
    3. [502 Bad Gateway] 服务器以代理服务器或网关的形式工作时，收到从上游服务器到达的执行请求的非法响应
    4. [503 Service Unavailable]表示服务器当前很忙，暂时无法响应客户端

## Including images

Here's an image (`featured-sunset-get.png`) that includes a byline and a caption.

{{< imgproc sunset Fill "800x400" >}}
Fetch and scale an image in the upcoming Hugo 0.43.
{{< /imgproc >}}

The front matter of this post specifies properties to be assigned to all image resources:

To include the image in a page, specify its details like this:

```
{{< imgproc sunset Fill "600x300" >}}
Fetch and scale an image in the upcoming Hugo 0.43.
{{< /imgproc >}}
```

The image will be rendered at the size and byline specified in the front matter.


