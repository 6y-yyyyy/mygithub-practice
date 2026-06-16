# 介绍
这是我在github上模仿的第一个小项目[Expanding Cards]：通过点击卡片实现平滑展开与收缩的交互组件，利用CSS Flexbox比例变化驱动动画。

## 学习过程
我先理解了一遍html、css、js三个文件的代码，仿写了html的代码之后，对着这个项目的demo一步步手动敲出css和js来实现效果。
敲完以后我让claude code帮我和源代码进行了对比，然后给我加上注释标注了我忽略漏写的代码。

## 学到的知识点

- **transition（精确过渡）**：过渡具体属性（`flex`、`opacity`）而非 `all`——性能更好，意图更明确
- **opacity（取值范围）**：合法值 0 ~ 1，不能写 1.5
- **CSS 选择器特异性**：`.panel.active` 比 `.active` 权重更高，更不容易被覆盖
- **@media（响应式）**：小屏幕隐藏部分卡片，移动端不挤爆
- **forEach（遍历）**：遍历所有卡片，逐个绑定事件
- **classList.add / classList.remove**：通过切换 class 来控制元素的样式状态