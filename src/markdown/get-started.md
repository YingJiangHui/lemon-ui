# 开始使用
请先[安装](#/doc/install)本组件库。

然后在你的代码中写入下面的代码

引入组件
```
import {Button, Tabs, Switch, Dialog,Icon,openDialog} from "lemon-ui-lib"
```
引入css
```
import 'lemon-ui-lib/dist/lib/lemon.css'
```

## Vue 单文件组件

代码示例：

```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import 'lemon-ui-lib/dist/lib/lemon.css'
import {Button, Tabs, Switch, Dialog} from "lemon-ui-lib"
export default {
  components: {Button}
}
</script>
```