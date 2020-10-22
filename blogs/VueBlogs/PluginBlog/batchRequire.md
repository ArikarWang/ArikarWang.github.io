---
title: Vue自动化导入组件（require.context）
date: 2020-10-22
subSidebar: true
tags:
 - Vue
categories: 
 - 博客
---
::: tip 官方文档
[require.context][1]

[1]:https://webpack.docschina.org/guides/dependency-management/#require-context
:::

## 一、带表达式的 require 语句

如果你的 require 参数含有表达式(expressions)，会创建一个上下文(context)，因为在编译时(compile time)并不清楚具体是哪一个模块被导入

示例目录：

```
example_directory
│
└───template
│   │   table.ejs
│   │   table-row.ejs
│   │
│   └───directory
│       │   another.ejs
```

代码：

```js
require("./template/" + name + ".ejs");
```

webpack 解析 `require()` 的调用，提取出来如下这些信息：

```
Directory: ./template
Regular expression: /^.*\.ejs$/
```

会生成一个 context module(上下文模块)。它包含 **目录下的所有模块** 的引用，如果一个 request 符合正则表达式，就能 require 进来。该context module包含一个map（映射）对象，会把requests翻译成对应的模块id。  
>request: 指在require/import语句中的表达式，如在require("./template/" + name + ".ejs")中的请求是"./template/" + name + ".ejs"。

示例map（映射）:

```js
{
  "./table.ejs": 42,
  "./table-row.ejs": 43,
  "./directory/another.ejs": 44
}
```

此 context module 还包含一些访问这个 map 对象的 runtime 逻辑。

这意味着 webpack 能够支持动态地 require，但会导致所有可能用到的模块都包含在 bundle 中。

## 二、require.context()

可以通过 `require.context()` 函数来创建自己的 context。  
>webpack 会在构建中解析代码中的 `require.context() `。

### 2.1 基本语法

代码：

```js
require.context(directory, useSubdirectories, regExp);
```

该方法接收三个参数：

1. `directory`：*string* 需要搜索的目录路径
2. `useSubdirectories`：*boolean* 是否搜索子目录
3. `regExp`：正则表达式，用于匹配文件名

::: warning 注意
传递给 `require.context` 的参数必须是字面量(literal)！
:::

### 2.2 context module API

一个 context module 会导出一个（require）函数，此函数可以接收一个参数：request。

此导出函数有三个属性：`resolve`, `keys`, `id`。

- `resolve` 是一个函数，它返回 request 被解析后得到的模块 id。
- `keys` 也是一个函数，它返回一个数组，由所有可能被此 context module 处理的请求组成。

如果想引入一个文件夹下面的所有文件，或者引入能匹配一个正则表达式的所有文件，这个功能就会很有帮助，例如：

```js
function importAll (r) {
  r.keys().forEach(r);
}

importAll(require.context('../components/', true, /\.js$/));
```

```js
const cache = {};

function importAll (r) {
  r.keys().forEach(key => cache[key] = r(key));
}

importAll(require.context('../components/', true, /\.js$/));
// 在构建时(build-time)，所有被 require 的模块都会被填充到 cache 对象中。
```

- `id` 是 context module 的模块 id. 它可能在你使用 `module.hot.accept` 时会用到。

## 三、 项目实际情况演示

>列举项目中可能会用到 `require.context()` 批量导入组件的情况

### 3.1 vuex

组件化的 vuex ，如果每次添加一个 module 都要手动引入，会比较麻烦，命名改动时也需要同时修改引入名称，不利于维护；当开发大型项目时，module 数量多起来就会让代码显得臃肿。

- 问题：

```js
import Vue from 'vue';
import Vuex from 'vuex';
import one from './one';
import two from './two';
import three from './three'; //...

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    one,
    two,
    three //...
  }
});
```

- 解决

```js
import Vue from 'vue';
import Vuex from 'vuex';

const modules = {};
// 只匹配子文件夹的index.js  ./one/index.js
const files = require.context('./', true, /^\.\/(\w*\/)+index\.js$/);

files.keys().forEach(file => {
  const moduleName = file.replace(/(^\.\/)|(\/index\.js$)/g, '');
  modules[moduleName] = files(file).default || files(file);
});

Vue.use(Vuex);

export default new Vuex.Store({
  modules
});
```

使用 `require.context()` 实现自动化引入 module，在符合条件的情况下新增或修改 module 名称都无需再次手动引入

### 3.2 vue组件

有时会遇到需要引入数量较多的 vue 组件的情况

- 问题：

```js
import First from '@/components/First.vue';
import Second from '@/components/Second.vue';
import Third from '@/components/Third.vue'; //...

export default {
  components: {
    First,
    Second,
    Third
  }
};
```

- 解决：

```js
// const path = require('path')
const files = require.context('@/components', true, /\.vue$/)
const modules = {}
files.keys().forEach(key => {
//   const name = path.basename(key, '.vue')
  const name = files(key).default.name;
  modules[name] = files(key).default
})

export default {
  components: {
    ...modules
  }
}
```