### affix

##### install
`npm install affix-notek -D`

##### using
```
*** js ***
import { createAffixNav } from 'affix-notek';

createAffixNav(params...);

*** css ***
<link rel="stylesheet" type="text/css" href="path/node_modules/affix-notek/ui.css">

*** html ***
<div class="content1" data-navto="m1"></div>
<div class="content2" data-navto="m2"></div>
<div class="content3" data-navto="m3"></div>
<div class="content4" data-navto="m4"></div>

如上，代码会根据[data-navto]属性自动初始化，并生成对应的锚点链接。
```

##### paramaters
```
params.navClass: nav class
params.navButtonClass: nav button class
params.navButtonBoxesClass: nav button boxes class

上述三个参数支持自定义，换句话说，你想要任何样式和过渡动画都可以自定义。
默认使用自带的ui.css中的样式。
```
