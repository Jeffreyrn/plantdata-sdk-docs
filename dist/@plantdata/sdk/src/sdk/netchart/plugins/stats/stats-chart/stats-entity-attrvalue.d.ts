/// <reference types="jquery" />
import { PdVisNetChart, PdVisNodeId } from '../../../../../vis/netchart/netchart';
import { PdKGSchema } from '../../../../schema/schema';
import { PdSDKAjaxSettings } from '../../../../utils/utils';
import { PdSDKPluginStatsToolConfig } from './stats-tool';
import { PdSDKNetChart } from '../../../netchart';
import { PdSDKPluginStatsNetChartBarTool, PdSDKPluginStatsNetChartBarToolSettings } from './stats-netchart-bar-tool';
import { PdOptionType } from '../../../../../common/common';
/**
 * 图统计配置项
 */
export interface PdSDKPluginStatsEntityAttrValueConfig extends PdSDKPluginStatsToolConfig {
    /**
     *  所属关系
     */
    attrId?: number;
    /**
     *  所属概念
     */
    conceptId?: string;
    /**
     * 是否合并
     */
    isMerge?: boolean | string;
}
/**
 * SDK 实体按属性值统计配置
 */
export interface PdSDKPluginStatsEntityAttrValueSettings extends PdSDKPluginStatsNetChartBarToolSettings {
    /**
     * 高亮的模式
     */
    highlightMode?: 'only' | 'single';
    /**
     *  Schema
     */
    schema?: PdKGSchema;
    /**
     *  SDK 图谱组件
     */
    sdkNetChart?: PdSDKNetChart<PdVisNetChart>;
    /**
     * 实体按属性值统计参数
     */
    rule?: PdSDKPluginStatsEntityAttrValueConfig;
}
/**
 * SDK 实体按属性值统计
 */
export declare class PdSDKPluginStatsEntityAttrValue extends PdSDKPluginStatsNetChartBarTool {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPluginStatsEntityAttrValueSettings;
    /**
     * 统计类型
     */
    static type: string;
    /**
     * 统计名称
     */
    static typeName: string;
    /**
     *  配置
     */
    settings: PdSDKPluginStatsEntityAttrValueSettings;
    /**
     * 构造方法
     * @param {PdSDKPluginStatsEntityAttrValueSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKPluginStatsEntityAttrValueSettings);
    /**
     * 显示编辑
     */
    showEdit(): void;
    /**
     * 激活柱子
     */
    protected activeBar(index: number): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 生成起步请求配置
     * @return {PdSDKAjaxSettings} 异步请求配置
     */
    protected buildRequest(): PdSDKAjaxSettings;
    /**
     * 自动生成统计标题
     */
    protected createTitle(): string;
    /**
     * 创建编辑表单
     * @return {JQuery} 编辑表单的DOM对象
     */
    protected createEditForm(): JQuery;
    /**
     * 生成X轴选项
     * @return {string} X轴选项表单
     */
    protected createXSelect(): string;
    /**
     * 获取候选属性
     * @param {string} conceptId - 概念
     * @return {PdOptionType[]} 候选属性的集合
     */
    protected getAtts(conceptId: string): PdOptionType[];
    /**
     * 获取关联的节点ID列表
     * @return {PdVisNodeId[]} 关联节点的ID列表
     */
    protected getRelatedNodeIds(): PdVisNodeId[];
    /**
     * 初始化配置
     * @param {PdSDKPluginStatsEntityAttrValueSettings} settings - 用户定义配置
     * @return {PdSDKPluginStatsEntityAttrValueSettings} 配置
     */
    protected initSettings(settings: PdSDKPluginStatsEntityAttrValueSettings): PdSDKPluginStatsEntityAttrValueSettings;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 取消绑定事件
     */
    protected unbindEvent(): void;
    /**
     * 更新属性选择器
     */
    protected updateAttsOptions(conceptId?: string | number | string[]): void;
    /**
     * 更新概念选择器
     */
    protected updateConceptOptions(): void;
}
