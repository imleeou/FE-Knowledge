# Git 的使用

## 修改commit信息{#modify-commit-message}

```shell
git commit --amend -m "new commit message"
```

## `git push --force` 和 `git push --force-with-lease` 的区别{#git-push-force}

`git push --force-with-lease` 是 `git push -f`（或 `git push --force`）的一种更安全的替代品。虽然两者都用于强制推送本地分支到远程仓库，但它们在处理潜在的提交覆盖上有所不同。

**`git push --force` 或 `-f`:**

当你使用强制推送 (`-f` 或 `--force`) 时，你告诉 Git 忽略任何冲突并强制覆盖远程分支上的提交。这意味着如果远程分支自从你上次拉取（或推送）以来有了更新，这些更新将被你的本地提交所覆盖，无论这些更新是什么。这可能会导致你的同事的工作丢失，因为他们的提交会被你的提交替换。

**`git push --force-with-lease`:**

另一方面，`--force-with-lease` 命令提供了一种安全检查机制。它确保你的强制推送仅在你本地版本的远程分支与实际远程分支相同的情况下发生。如果远程分支有任何你本地不知道的新提交，推送会被拒绝。这基本上是 Git 确认在你尝试覆盖远程分支时没有其他人推送了新的更改。

**总结一下:**

`--force-with-lease` 比 `--force` 更安全，因为它可以防止不小心覆盖其他人的更改。它为强制推送操作加入了额外的保护，让你在确信没有其他人的工作会因你的操作而丢失时，才能推送你的更改。当处理可能涉及其他人更改的共享分支时，建议使用 `--force-with-lease` 而不是 `--force`。

## 如何合并杂乱的commit messages{#merge-messy-commit-messages}
>
> feat: commit 3 (7a4f3b0324a31fc0b449ec21fc924212569b61dc)
>
> feat: commit 2 (8b2adef5948e57271f02987afbcbfa4606bd6503)
>
> feat: commit 1 (2676c9f0f40f1a2b793175acf1b88093a700072a)

如上所示，有三条commit messages，它们实现的功能是相同的，后两条可能仅仅是修改了一行的样式，或一点点逻辑上的修改，但却被分成了三条commit messages。

### 使用`git rebase --interactive` / `git rebase -i`

```shell
git rebase -i HEAD~3
```

这里 `HEAD~N` 是一个引用点，它告诉 Git 从当前分支的 HEAD 回溯 N 个提交。

```shell
git rebase -i <SHA>
```

这里 `<SHA>` 是一个**基础坐标**，这个坐标通常是要合并的所有commits更前一次commit，其代表的意思是：我要以此commit为起点，修改后面提交的commit。

执行上述命令后，终端会打开一个文本编辑器，如下所示：

```shell
pick 2676c9f feat: commit 1
pick 8b2adef feat: commit 2
pick 7a4f3b0 feat: commit 3

# Rebase 73d4730..7a4f3b0 onto 73d4730 (3 commands)
#
# Commands:
# p, pick <commit> = use commit
# r, reword <commit> = use commit, but edit the commit message
# e, edit <commit> = use commit, but stop for amending
# s, squash <commit> = use commit, but meld into previous commit
# f, fixup [-C | -c] <commit> = like "squash" but keep only the previous
#                    commit's log message, unless -C is used, in which case
#                    keep only this commit's message; -c is same as -C but
#                    opens the editor
# x, exec <command> = run command (the rest of the line) using shell
# b, break = stop here (continue rebase later with 'git rebase --continue')
# d, drop <commit> = remove commit
# l, label <label> = label current HEAD with a name
# t, reset <label> = reset HEAD to a label
# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
#         create a merge commit using the original merge commit's
#         message (or the oneline, if no original merge commit was
#         specified); use -c <commit> to reword the commit message
# u, update-ref <ref> = track a placeholder for the <ref> to be updated
#                       to this position in the new commits. The <ref> is
.git/rebase-merge/git-rebase-todo [unix]        
```

可以看到三次commit及其对应的SHA，`pick`命令是默认值。

- `pick`/`p`：表示保留这次commit
- `reword`/`r`：使用该commit，但会停下来以便你编辑提交信息
- `edit`/`e`：使用该commit，但会停下来以便你修改提交内容（通过 git commit --amend），或者添加或删除更改。
- `squash`/`s`：将该commit，与前一个提交合并，并提供一个机会来合并提交信息。
- `fixup`/`f`：类似于 squash，但会舍弃此提交的日志信息，并保留前一个提交的日志信息。
- `exec`/`x`：在当前提交上运行 shell 命令（命令写在该行的剩余部分）。
- `break`/`b`：在此处停止，你可以稍后通过 git rebase --continue 继续 rebase。
- `drop`/`d`：完全删除该commit。
- `label`/`l`：为当前 HEAD 打上标签，以便后面引用。
- `reset`/`t`：将 HEAD 重置到标签label 所在的位置。
- `merge`/`m`：使用原始合并提交的信息（或者如果没有原始合并提交的话，使用 `<oneline>` 提供的信息）来创建一个合并提交。使用` -c <commit> `来重写提交信息。
- `update-ref`/`u`：跟踪一个占位符，表明 `<ref>` 将在新提交中的这个位置被更新。

要达到合并的目的，我们可以使用`squash`操作，...其他操作也可以实现。

```shell
pick 2676c9f feat: commit 1
s 8b2adef feat: commit 2
s 7a4f3b0 feat: commit 3
```

然后保存退出。此时终端会自动打开第二个文本编辑器，让你编辑提交信息。

```shell
pick 2676c9f feat: commit 1
# This is a combination of 3 commits.
# This is the 1st commit message:

feat: commit 1

# This is the commit message #2:

feat: commit 2

# This is the commit message #3:

feat: commit 3

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Date:      Wed Apr 10 09:53:10 2024 +0800
#
# interactive rebase in progress; onto 73d4730
# Last commands done (3 commands done):
#    squash 8b2adef feat: commit 2
#    squash 7a4f3b0 feat: commit 3
# No commands remaining.
# You are currently rebasing branch 'test/commit-message' on '73d4730'.
#
# Changes to be committed:
.git/COMMIT_EDITMSG [unix]
```

带有'#'的将被忽略，空消息将终止提交。
此时我们只需要保留一条commit message即可，注释无用的commit message。

```shell
pick 2676c9f feat: commit 1

# This is a combination of 3 commits.
# This is the 1st commit message:

feat: new commit message

# This is the commit message #2:

# feat: commit 2

# This is the commit message #3:

# feat: commit 3
```

修改完成后保存并退出。至此，我们就完成了合并commit messages的操作。
[强制提交代码](#git-push-force)就完成了。
