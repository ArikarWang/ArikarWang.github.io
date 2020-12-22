---
title: CSS 动画
date: 2020-11-26
subSidebar: true
tags:
 - CSS
 - animations
categories: 
 - 博客
---
::: tip MDN
[使用 CSS 动画][1]

[1]:https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Animations/Using_CSS_animations
:::

::: tip
**CSS animations** 使得可以将从一个CSS样式配置转换到另一个CSS样式配置。动画包括两个部分:描述动画的样式规则和用于指定动画开始、结束以及中间点样式的关键帧。

相较于传统的脚本实现动画技术，使用CSS动画有三个主要优点：

1. 能够非常容易地创建简单动画，你甚至不需要了解JavaScript就能创建动画。
2. 动画运行效果良好，甚至在低性能的系统上。渲染引擎会使用跳帧或者其他技术以保证动画表现尽可能的流畅。而使用JavaScript实现的动画通常表现不佳（除非经过很好的设计）。
3. 让浏览器控制动画序列，允许浏览器优化性能和效果，如降低位于隐藏选项卡中的动画更新频率。
:::

## 配置动画

### animation的子属性有:

`animation-delay`
    设置延时，即从元素加载完成之后到动画序列开始执行的这段时间。

`animation-direction`
    设置动画在每次运行完后是反向运行还是重新回到开始位置重复运行。

`animation-duration`
    设置动画一个周期的时长。

`animation-iteration-count`
    设置动画重复次数， 可以指定infinite无限次重复动画

`animation-name`
    指定由@keyframes描述的关键帧名称。

`animation-play-state`
    允许暂停和恢复动画。

`animation-timing-function`
    设置动画速度， 即通过建立加速度曲线，设置动画在关键帧之间是如何变化。

`animation-fill-mode`
    指定动画执行前后如何为目标元素应用样式。

## 使用keyframes定义动画序列

一旦完成动画的时间设置， 接下来就需要定义动画的表现。通过使用@keyframes建立两个或两个以上关键帧来实现。每一个关键帧都描述了动画元素在给定的时间点上应该如何渲染。

因为动画的时间设置是通过CSS样式定义的，关键帧使用percentage来指定动画发生的时间点。0%表示动画的第一时刻，100%表示动画的最终时刻。因为这两个时间点十分重要，所以还有特殊的别名：from和to。这两个都是可选的，若from/0%或to/100%未指定，则浏览器使用计算值开始或结束动画。

也可包含额外可选的关键帧，描述动画开始和结束之间的状态。
