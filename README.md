# 仙道的网站

## [个人博客blog](https://blog.xiandao.com)

分支blog对应个人博客网站

## [小说网站novel](https://novel.xiandao.com)

分支novel对应小说网站

```mermaid
sequenceDiagram
    actor me as 我
    participant blog as 个人博客
    participant novel as 小说网站

    me ->>+ blog: 写博客发布到个人博客网站上
    blog ->>- me: 成功
    me ->>+ novel: 写小说发布到小说网站上
    novel ->>- me: 成功

```




<p style="text-align:center">2023/8/22 17:26</p>