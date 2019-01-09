# PlantdataSDK

## v4.3.0

#### Features
- `PdVisZcNetChart` 支持 `displayName` 展示
- `PdSDKEditorEditEdge` 支持 `displayName` 编辑
- 可视化配置支持边标签显示文本的切换
- 新增边属性值、权重、置信度过滤
- `PdVisEditItemSettings` 支持自定义操作结果的 `getValue` 和 `setValue` 方法
- 新增 `PdSDKZcCustom` 集成graph、path、relation的时序
- `PdSDKPluginFilter` 新增 `highLevelSize` 配置

#### Fixes
- 修复 `PdSDKPluginStats` 插件嵌入 `PdSDKPluginMixins` 后无法配置的BUG
- 修复左侧面板固定时右击菜单错位的BUG
- `PdSDKNetChart` 中的 `initFilterOptions` 添加 `filter` 实例是否存在的判断
- 修复 `PdVisSliderSettings` 的 `range` 配置项类型错误
- 修复右击设置节点、边样式、状态无效的BUG
- 修复`PdSDKPluginFilter` 项开启自定义后选择无效的BUG

#### Other changes
- 打包zip之前默认删除已打的包
- `PdTabPanel` 面板只有一个子面板时默认标签不显示
- `PdVisPluginFilterItemSettings` 配置项默认 `index` 为1
- 新增 `PdSDKPluginFilter`
- `linkStyleFunction`、`nodeStyleFunction` 改为 `public`
- `entityList` 数据中的概念ID自动改为0
- `PdSDKPath`、`PdSDKPathTiming`、`PdSDKRelation`、`PdSDKRelationTiming`  contextmenu默认值关闭添加子图和切换焦点
- `PdSDKPluginCustom` custom 的filter添加自定义步长
- 打包版本号

## v4.2.1

#### Features
- `PdVisPluginFilter` 插件步长支持自定义
- `PdVisPluginFilter` 插件的分析主体、关系增加筛选功能
- 新增工具 `PdVisTagComplexEditor`
- `PdSDKPluginPrompt` 插件在数据视图和字符云视图可见
- `PdSDKEditorDefine ` 属性可修改定义域到父级概念
- `PdVisEditItem` PdVisEditItemSettings添加class
- `PdSDKEditorEditEdge` 边属性编辑 时间转换

#### Fixes
- 修复 `PdVisPluginFilter` 插件内全选无效的BUG
- 修复无法正常运行的BUG
- 修复gulp打包报错的BUG
- 修复SDK图谱defaultSettings优先级错误的BUG
- 修复SDK图谱扩展层级无效的BUG
- `PdSDKPluginTimeChart` 插件关联快照
- `PdUIAutocomplete ` autocomplete的input添加autocomplete： off
- `PdSDKEditorDefine` 属性列表title样式优化
- `PdSDKExplore` explore的dealGraphData添加rule.enable判断
- `PdSDKInfobox` infobox的所属的title

#### Other changes
- `PdSDKPluginStats` 插件优化
- `PdVisCascader` 代码优化
- `PdVisCascader` 的选项面板添加到改为 `body` 上
- `PdVisCascader` 的属性 `label` 改为 `labelKey`
- `PdVisCascader` 的属性 `value` 改为 `valueKey`
- `PdVisTagEditor` 、 `PdVisTagSelect` 、`PdVisTagCascader`、`PdSDKTagPrompt` 优化
- @types/d3更新到4.13.1
- `PdSDKPluginTimeChart` 插件样式优化
- 图标更新2018-12-17
- 源码打包后增加压缩混淆

## v4.1.1

#### Features
- 新增快照功能（未保存到后台）
- 快照插件支持手动输入快照名称以及描述信息
- panel增加mask类型
- 支持动态配置查询上下位层数
- 分析主体过滤支持树形展示
- 分析主体树状展示时默认自动更新父子节点状态
- 分析关系过滤关联到分析主体

#### Fixes
- 修复创建多余的无效panel的BUG
- 修改几处文档错误
- 右键菜单位置自适应
- 子菜单位置自适应
- 修复 `PdVisColorPicker` 销毁时没有移除整个DOM的BUG
- 修复可视化配置边长宽半径选择框超出屏幕的BUG
- 修复可视化编辑tooltip不显示的BUG
- `PdSDKPluginPrompt`、`PdVisPluginFind` 插件在两侧浮动面板时的样式兼容
- 修复图例与可视化配置关联失败的BUG
- 修复图例无默认颜色的BUG
- `PdSDKPluginInfobox`、`PdVisPluginFilter`、`PdVisPluginPage`、`PdVisPluginVisConfigure` 插件支持快照还原

#### Other changes
- 优化 `PdSDKPluginPath` 插件数据存储逻辑
- 图例优化
- `PdVisNetChart` 的方法 `linkLegend` 改为 `getLinkLegend`
- `PdVisNetChart` 的方法 `nodeLegend` 改为 `getNodeLegend`


## v4.0.0-beta.3

#### Features
- `PdSDKInfobox` 支持显示超链接属性
- 节点支持后台预置颜色配置
- `PdSDKPluginContextmenu` 支持可视化编辑工具统一配置
- `PdSDKPluginContextmenu` 支持 `infobox` 显示
- 新增D3版概念可视化 `PdSDKConceptVisualizationD3`
- 概念可视化 `PdSDKConceptVisualizationD3` 支持导出图片

#### Other changes
- `PdSDKToolGraphClear` 改名为 `PdVisToolGraphClear`
- `PdSDKToolGraphClearSettings` 改名为 `PdVisToolGraphClearSettings`
