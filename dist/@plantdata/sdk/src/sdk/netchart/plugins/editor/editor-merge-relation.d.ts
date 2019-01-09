/// <reference types="jquery" />
import { PdSDKEditorTool, PdSDKEditorToolSettings } from './editor-tool';
import { PdVisNetChartData, PdVisNetChartDataNode, PdVisNetChartDataLink } from '../../../../vis/netchart';
/**
 * 实体编辑工具配置
 */
export interface PdSDKEditorMergeRelationSettings extends PdSDKEditorToolSettings {
}
/**
 * 实体编辑工具
 */
export declare class PdSDKEditorMergeRelation extends PdSDKEditorTool {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKEditorMergeRelationSettings;
    /**
     * 节点数据
     */
    protected nodes: PdVisNetChartDataNode[];
    /**
     * 边数据
     */
    protected links: PdVisNetChartDataLink[];
    /**
     * 配置
     */
    settings: PdSDKEditorMergeRelationSettings;
    /**
     * 构造方法
     * @param {PdSDKEditorMergeRelationSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKEditorMergeRelationSettings);
    /**
     * 根据选中节点更新状态
     * @param {PdVisNetChartDataNode[]} nodes - 选中节点
     * @param {PdVisNetChartDataLink[]} links - 选中边
     * @param {PdVisNetChartData} graphData - 图数据
     */
    updateStatusBySelection(nodes: PdVisNetChartDataNode[], links: PdVisNetChartDataLink[], graphData?: PdVisNetChartData): void;
    /**
     * 初始化配置
     * @param {PdVisPluginToolsSettings} settings - 用户定义配置
     * @return {PdVisPluginToolsSettings} 配置
     */
    protected initSettings(settings: PdSDKEditorToolSettings): PdSDKEditorToolSettings;
    /**
     * 点击事件处理
     */
    protected onClick(event: JQuery.Event): void;
}
