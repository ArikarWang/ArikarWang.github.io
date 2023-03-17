---
title: Git配置多个SSH Key
date: 2023-03-17 16:43:30
updated: 2023-03-17 16:43:30
tags:
  - 工具
categories:
  - 博客
comments: true
---

{% blockquote %}
Git 配置多个 SSH Key
{% endblockquote %}

<!-- more -->

需要先创建一个默认的 ssh key，这里提供给 github 使用

```bash
ssh-keygen -t rsa -b 4096 -C "邮箱"
```

创建完成后执行

```bash
cat ~/.ssh/id_rsa.pub
```

复制结果添加到 github 的 ssh 公钥

然后创建额外的 ssh key，这里提供给 gitee 使用

```bash
ssh-keygen -t rsa -C '邮箱' -f ~/.ssh/gitee_id_rsa
```

创建完成后执行

```bash
cat ~/.ssh/gitee_id_rsa.pub
```

复制结果添加到 gitee 的 ssh 公钥

接着输入 `cd ~/.ssh` 跳转至 ssh 文件夹下，然后执行

```bash
touch ~/.ssh/config
```

创建 config 文件，打开文件，输入

```
# gitee
Host gitee.com
HostName gitee.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/gitee_id_rsa
# github
Host github.com
HostName github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa
```

保存，输入以下代码测试

```bash
ssh -T git@gitee.com
ssh -T git@github.com
```
