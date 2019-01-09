/// <reference types="jquery" />
import { PdVisNetChart, PdVisNetChartLoadParams } from '../../../../vis/netchart/netchart';
import { PdSDKPrompt, PdSDKPromptSettings } from '../../../prompt/prompt';
import { PdSDKPlugin, PdSDKPluginSettings } from '../plugin';
/**
 * 路径插件配置
 */
export interface PdSDKPluginPathSettings extends PdSDKPluginSettings {
    /**
     *  可视化组件
     */
    container?: PdVisNetChart;
    /**
     *  提示组件配置
     */
    promptSettings?: PdSDKPromptSettings;
}
/**
 * 路径插件
 */
export declare class PdSDKPluginPath extends PdSDKPlugin {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPluginPathSettings;
    /**
     *  终点数据
     */
    end: PdVisNetChartLoadParams;
    /**
     *  配置
     */
    settings: PdSDKPluginPathSettings;
    /**
     *  起点数据
     */
    start: PdVisNetChartLoadParams;
    /**
     *  可视化组件
     */
    protected container: PdVisNetChart;
    /**
     *  终点提示组件
     */
    protected endPrompt: PdSDKPrompt;
    /**
     *  起点提示组件
     */
    protected startPrompt: PdSDKPrompt;
    /**
     * 构造方法
     * @param {PdSDKPluginPathSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKPluginPathSettings);
    /**
     * 获取路径参数
     * @return {PdVisNetChartLoadParams} - 路径参数
     */
    getLoadParams(): PdVisNetChartLoadParams;
    /**
     * 获取插件的唯一标识
     */
    getPluginType(): string;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 初始化配置
     * @param {PdSDKPluginPathSettings} settings - 用户定义配置
     * @return {PdSDKPluginPathSettings} 配置
     */
    protected initSettings(settings: PdSDKPluginPathSettings): PdSDKPluginPathSettings;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 设置路径起点终点
     */
    protected setPathInfo(): void;
    /**
     * 取消绑定事件
     */
    protected unbindEvent(): void;
}
