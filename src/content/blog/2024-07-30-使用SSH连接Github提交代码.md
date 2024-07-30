---
title: 使用SSH连接Github提交代码
pubDate: 2024-07-30
author: 霁
heroImage:
categories:
  - Git
tags:
  - Git
---

## 使用 SSH 连接 Github 提交代码

### 生成 ssh 密钥

```bash
ssh-keygen -t ed25519 -C "email@email.com"

## 生成如下文件.ssh/id_ed25519.pub
Generating public/private ed25519 key pair.
Enter file in which to save the key (/home/dev/.ssh/id_ed25519):
Enter passphrase (empty for no passphrase): # 输入密码
Enter same passphrase again: #输入密码
Your identification has been saved in /home/dev/.ssh/id_ed25519
Your public key has been saved in /home/dev/.ssh/id_ed25519.pub

dev@ALLENYS:~/.ssh$ ls
id_ed25519  id_ed25519.pub  known_hosts  known_hosts.old
```

拷贝.ssh/id_ed25519.pub 文件内容到 github 帐号下的[SSH and GPG keys](https://github.com/settings/keys)

### 代码库配置 ssh

到代码库的文件夹中执行以下命令

```bash
    git remote set-url origin git@github.com:user/repo.git
```

### 配置 ssh-agent

检查是否安装 ssh-agent

```bash
echo $SSH_AGENT_PID #输出进程id 若没有输出需要执行启动
ssh-agent -k
eval "$(ssh-agent -s)" # 在当前shell启动
ssh-add ~/.ssh/id_ed25519 # 将私钥添加到ssh-agent

dev@ALLENYS:/home/project/subsequent-star$ ssh-add ~/.ssh/id_ed25519
Enter passphrase for /home/dev/.ssh/id_ed25519:
Identity added: /home/dev/.ssh/id_ed25519 (email@email.com)

```

### 自动开启 ssh-agent

自动启动 ssh-agent
可以在打开 bash 或 Git shell 时自动运行 ssh-agent。 复制以下行并将其粘贴到 shell 中的 ~/.profile 或 ~/.bashrc 文件中：

```bash
dev@ALLENYS:~$ vim ~/.profile
dev@ALLENYS:~$

env=~/.ssh/agent.env

agent_load_env () { test -f "$env" && . "$env" >| /dev/null ; }

agent_start () {
    (umask 077; ssh-agent >| "$env")
    . "$env" >| /dev/null ; }

agent_load_env

# agent_run_state: 0=agent running w/ key; 1=agent w/o key; 2=agent not running
agent_run_state=$(ssh-add -l >| /dev/null 2>&1; echo $?)

if [ ! "$SSH_AUTH_SOCK" ] || [ $agent_run_state = 2 ]; then
    agent_start
    ssh-add
elif [ "$SSH_AUTH_SOCK" ] && [ $agent_run_state = 1 ]; then
    ssh-add
fi

unset env
## 后续
dev@ALLENYS:~$ source ~/.profile
Enter passphrase for /home/dev/.ssh/id_ed25519: #密码
```

> ssh-add 向身份验证代理 ssh-agent 添加私钥标识。当没有参数运行时，它会添加文件~/.ssh/id_rsa、~/.ssh/id_ecdsa、~/.ssh/id_ecdsa_sk、~/.ssh/id_ed25519、~/.ssh/id_ed25519_sk 和~/.ssh/id_dsa

### 参考

https://docs.github.com/zh/authentication/connecting-to-github-with-ssh/working-with-ssh-key-passphrases
