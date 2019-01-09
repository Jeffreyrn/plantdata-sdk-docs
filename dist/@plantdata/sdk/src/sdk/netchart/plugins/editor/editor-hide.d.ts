/// <reference types="jquery" />
import { PdSDKEditorTool, PdSDKEditorToolSettings } from './editor-tool';
import { PdVisNetChartData, PdVisNetChartDataNode, PdVisNetChartDataLink } from '../../../../vis/netchart';
/**
 * 实体编辑工具配置
 */
export interface PdSDKEditorHideSettings extends PdSDKEditorToolSettings {
}
/**
 * 实体编辑工具
 */
export declare class PdSDKEditorHide extends PdSDKEditorTool {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKEditorHideSettings;
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
    settings: PdSDKEditorHideSettings;
    /**
     * 构造方法
     * @param {PdSDKEditorHideSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKEditorHideSettings);
    /**
     * 根据选中节点更新状态
     * @param {PdVisNetChartDataNode[]} nodes - 选中节点
     * @param {PdVisNetChartDataLink[]} links - 选中边
     * @param {PdVisNetChartData} graphData - 图数据
     */
    updateStatusBySelection(nodes: PdVisNetChartDataNode[], links: PdVisNetChartDataLink[], graphData?: PdVisNetChartData): void;
    /**
     * 初始化配置
     * @param {PdSDKEditorToolSettings} settings - 用户定义配置
     * @return {PdSDKEditorToolSettings} 配置
     */
    protected initSettings(settings: PdSDKEditorToolSettings): PdSDKEditorToolSettings;
    /**
     * 点击事件处理
     */
    protected onClick(event: JQuery.Event): void;
}
