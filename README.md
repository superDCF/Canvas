## 在线画板  
预览： https://dingchaofa.github.io/canvas/canvas.html
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
3. 图标可以用iconfont

#### 待解决问题
1. 添加图形时，时时显示图形的形状
2. 关闭窗口前，自定义模态框，给用户友好的提示保存作品，由于浏览器安全限制，在2016年4月chrome就不支持自定义字符串了。

#### 注意事项
1. 由于鼠标点击位置不在鼠标中心位置，一般为20px,记得减去，才能获得鼠标中心位置。
2. 事件绑定时注意绑定间的逻辑关系，取消绑定时注意取消对象。
3. 注意各个模块间的依赖关系,对于调用未解析的模块，可以用typeof判断一下，我觉得我这个想法太聪明了^_^
4. 注意污染全局变量的问题
5. 取消绑定事件时，可以统一封装在一个函数内 如：removeEvent()
6. 注意beginPath的使用，即添加新路径
7. 调用beforeunload事件，对于window.alert(), window.confirm(), 和 window.prompt() 的调用会被忽略。
8. 利用webpack打包模块，由于现行代码量较少，打包反而增加解析负担。