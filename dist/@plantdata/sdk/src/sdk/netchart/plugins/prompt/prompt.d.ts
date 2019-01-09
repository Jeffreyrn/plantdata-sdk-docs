/// <reference types="jquery" />
import { PdVisNetChart } from '../../../../vis/netchart/netchart';
import { PdSDKPrompt, PdSDKPromptSettings } from '../../../prompt/prompt';
import { PdSDKPlugin, PdSDKPluginSettings } from '../plugin';
/**
 * 提示插件配置
 */
export interface PdSDKPluginPromptSettings extends PdSDKPluginSettings {
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
 * 提示插件
 */
export declare class PdSDKPluginPrompt extends PdSDKPlugin {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPluginPromptSettings;
    /**
     *  配置
     */
    settings: PdSDKPluginPromptSettings;
    /**
     *  提示组件
     */
    protected prompt: PdSDKPrompt;
    /**
     *  可视化组件
     */
    protected container: PdVisNetChart;
    /**
     * 构造方法
     * @param {PdSDKPluginPromptSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKPluginPromptSettings);
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 获取插件的唯一标识
     */
    getPluginType(): string;
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
     * @param {PdSDKPluginPromptSettings} settings - 用户定义配置
     * @return {PdSDKPluginPromptSettings} 配置
     */
    protected initSettings(settings: PdSDKPluginPromptSettings): PdSDKPluginPromptSettings;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
}
