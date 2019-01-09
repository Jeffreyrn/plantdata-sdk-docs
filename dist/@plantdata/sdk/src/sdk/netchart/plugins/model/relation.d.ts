/// <reference types="jquery" />
import { PdVisNetChart, PdVisNetChartDataNode, PdVisNetChartLoadParams } from '../../../../vis/netchart/netchart';
import { PdSDKPrompt, PdSDKPromptSettings } from '../../../prompt/prompt';
import { PdSDKPlugin, PdSDKPluginSettings } from '../plugin';
/**
 * 关联插件配置
 */
export interface PdSDKPluginRelationSettings extends PdSDKPluginSettings {
    /**
     *  可视化组件
     */
    container?: PdVisNetChart;
    /**
     *  提示组件设置
     */
    promptSettings?: PdSDKPromptSettings;
}
/**
 * 关联插件
 */
export declare class PdSDKPluginRelation extends PdSDKPlugin {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPluginRelationSettings;
    /**
     *  配置
     */
    settings: PdSDKPluginRelationSettings;
    /**
     *  可视化组件
     */
    protected container: PdVisNetChart;
    /**
     *  提示组件
     */
    protected relationPrompt: PdSDKPrompt;
    /**
     * 构造方法
     * @param {PdSDKPluginRelationSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKPluginRelationSettings);
    /**
     * 获取关联分析参数
     * @return {PdVisNetChartLoadParams} 关联分析参数
     */
    getLoadParams(): PdVisNetChartLoadParams;
    /**
     * 获取插件的唯一标识
     */
    getPluginType(): string;
    /**
     * 添加为关联分析的节点
     * @param {PdVisNetChartDataNode} node - 节点
     */
    protected addRelationNode(node: PdVisNetChartDataNode): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 获取所有已选择为关联分析的节点
     * @return {PdVisNetChartDataNode[]} - 关联分析的所有节点
     */
    protected getRelationNodes(): PdVisNetChartDataNode[];
    /**
     * 初始化配置
     * @param {PdSDKPluginRelationSettings} settings - 用户定义配置
     * @return {PdSDKPluginRelationSettings} 配置
     */
    protected initSettings(settings: PdSDKPluginRelationSettings): PdSDKPluginRelationSettings;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 是否已选择为关联分析的节点
     * @param {PdVisNetChartDataNode} node - 待分析的节点
     * @return {boolean} 是否已选择为关联分析的节点
     */
    protected inRelationNodes(node: PdVisNetChartDataNode): boolean;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 设置关联分析的节点信息
     */
    protected setRelationInfo(): void;
    /**
     * 取消绑定事件
     */
    protected unbindEvent(): void;
}
