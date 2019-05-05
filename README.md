### 菜单固定插件

##### 安装
`npm install affix-notek -D`

##### 使用
```
*** js ***
import { createAffixNav } from 'affix-notek';

createAffixNav(params...);

*** css ***
<link rel="stylesheet" type="text/css" href="path/node_modules/affix-notek/ui.css">

*** html ***
<div class="content1" data-navto="菜单1"></div>
<div class="content2" data-navto="菜单2"></div>
<div class="content3" data-navto="菜单3"></div>
<div class="content4" data-navto="菜单4"></div>

如上，代码会根据[data-navto]属性自动初始化，并生成对应的锚点链接。
```

##### 参数
```
params.navClass: 菜单顶层容器class
params.navButtonClass: 菜单按钮class
params.navButtonBoxesClass: 菜单按钮容器class

上述三个参数支持自定义，换句话说，你想要任何样式和过渡动画都可以自定义。
默认使用自带的ui.css中的样式。
```
