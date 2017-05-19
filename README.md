## 在线画板

#### 版本说明
1. 目前只支持PC端使用  
2. 后续持续更新中...
3. HTML 5,CSS 3,原生js实现，无库，无插件

#### 需求
1. 利用canvas做一个在线画板，能在其上画东西

#### 功能
1. 画板可以调色
2. 可添加图形，例如三角形，圆等
3. 可变线宽
4. 有橡皮擦功能
5. 可下载
6. 添加动画效果

#### 实现思想
1. 对页面进行分区
2. 有编辑区，工具栏
3. 图标可以用css sprite

#### 待解决问题
1. 添加图形时，时时显示图形的形状
2. 利用webpack打包模块

#### 注意事项
1. 由于鼠标点击位置不在鼠标中心位置，一般为20px,记得减去，才能获得鼠标中心位置。
2. 事件绑定时注意绑定间的逻辑关系，取消绑定时注意取消对象。
3. 注意各个模块间的依赖关系,对于调用未解析的模块，可以用typeof判断一下，我觉得我这个想法太聪明了^_^
4. 注意污染全局变量的问题
5. 取消绑定事件时，可以统一封装在一个函数内 如：removeEvent()
6. 注意beginPath的使用，即添加新路径