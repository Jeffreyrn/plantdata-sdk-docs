/// <reference types="jquery" />
import { PdSDKPluginPrompt, PdSDKPluginPromptSettings } from './prompt';
import { PdSDKNodeList, PdSDKNodeListSettings } from '../../../utils/node-list/node-list';
import { PdVisNetChartDataNode } from '../../../../vis/netchart/index';
/**
 * 提示插件配置
 */
export interface PdSDKPluginPromptMultiSettings extends PdSDKPluginPromptSettings {
    /**
     * NodeList的配置
     */
    nodeListSettings?: PdSDKNodeListSettings;
}
/**
 * 提示插件
 */
export declare class PdSDKPluginPromptMulti extends PdSDKPluginPrompt {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPluginPromptMultiSettings;
    /**
     *  配置
     */
    settings: PdSDKPluginPromptMultiSettings;
    /**
     * 分析按钮
     */
    protected $analysisBtn: JQuery;
    /**
     * 待分析数据列表的对象
     */
    protected nodeList: PdSDKNodeList;
    /**
     * 构造方法
     * @param {PdSDKPluginPromptMultiSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKPluginPromptMultiSettings);
    /**
     * 分析
     */
    analysis(nodes: PdVisNetChartDataNode[]): void;
    /**
     * 设置分析按钮状态
     * @param {boolean} enable - 是否启用
     */
    setAnalysisStatus(enable: boolean): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 配置初始化完成后的回调
     */
    protected created(): void;
    /**
     * 初始化配置
     * @param {PdSDKPluginPromptMultiSettings} settings - 用户定义配置
     * @return {PdSDKPluginPromptMultiSettings} 配置
     */
    protected initSettings(settings: PdSDKPluginPromptMultiSettings): PdSDKPluginPromptMultiSettings;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 设置分析的节点信息
     */
    protected setNodeInfo(): void;
    /**
     * 取消绑定事件
     */
    protected unbindEvent(): void;
}
