---
layout: ../../layouts/MarkdownPostLayout.astro
title: "LazyVim swapping lines after pressing escape key"
pubDate: 2024-01-12
description: "A quick note on a LazyVim and tmux bug"
author: "Nathan Pulver"
image:
  url: "https://media.gcflearnfree.org/content/5e31ca08bc7eff08e4063776_01_29_2020/ProgrammingIllustration.png"
  alt: "LazyVim Logo"
tags: ["blogging", "coding", "learning in public", "linux", "neovim"]
---

<!--toc:start-->

- [A quick note on a annoying issue](#a-quick-note-on-a-annoying-issue)
<!--toc:end-->

## A quick note on a annoying issue

I was having a problem with my LazyVim build where I would press the escape key
and then go to move lines with h, j, k, or l and then the line I was on would
swap up or down. Turns out, the issue had to with tmux! I found [this](https://github.com/LunarVim/LunarVim/issues/1857) issue from the LunarVim GitHub describing the exact same behavior. For some reasons I do not understand, the esc key was triggering the alt key. Combined with j or k, that is the keybind for move line up or down.

What ended up working for me was suggested by alexgenaud on that same thread
linked above. Simply add the following code to your ~/.tmux.conf file:

```
set -sg escape-time 10
```
