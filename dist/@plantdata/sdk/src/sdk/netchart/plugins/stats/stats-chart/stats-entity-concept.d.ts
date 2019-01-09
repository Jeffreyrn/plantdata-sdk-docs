/// <reference types="jquery" />
import { PdVisNodeId } from '../../../../../vis/netchart/netchart';
import { PdSDKAjaxSettings } from '../../../../utils/utils';
import { PdSDKPluginStatsToolConfig } from './stats-tool';
import { PdSDKPluginStatsNetChartBarTool, PdSDKPluginStatsNetChartBarToolSettings } from './stats-netchart-bar-tool';
/**
 * 图统计配置项
 */
export interface PdSDKPluginStatsEntityConceptConfig extends PdSDKPluginStatsToolConfig {
}
/**
 * SDK 实体按概念统计配置
 */
export interface PdSDKPluginStatsEntityConceptSettings extends PdSDKPluginStatsNetChartBarToolSettings {
    /**
     * 实体按概念统计参数
     */
    rule?: PdSDKPluginStatsEntityConceptConfig;
}
/**
 * SDK 实体按概念统计
 */
export declare class PdSDKPluginStatsEntityConcept extends PdSDKPluginStatsNetChartBarTool {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPluginStatsEntityConceptSettings;
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
    settings: PdSDKPluginStatsEntityConceptSettings;
    /**
     * 构造方法
     * @param {PdSDKPluginStatsEntityConceptSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKPluginStatsEntityConceptSettings);
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
     * 创建编辑表单
     * @return {JQuery} 编辑表单的DOM对象
     */
    protected createEditForm(): JQuery;
    /**
     * 获取关联的节点ID列表
     * @return {PdVisNodeId[]} 关联节点的ID列表
     */
    protected getRelatedNodeIds(): PdVisNodeId[];
    /**
     * 初始化配置
     * @param {PdSDKPluginStatsEntityConceptSettings} settings - 用户定义配置
     * @return {PdSDKPluginStatsEntityConceptSettings} 配置
     */
    protected initSettings(settings: PdSDKPluginStatsEntityConceptSettings): PdSDKPluginStatsEntityConceptSettings;
}
