/// <reference types="jquery" />
import { PdVisPluginMixins, PdVisPluginMixinsSettings } from '../../../../vis/netchart/plugins/mixins/mixins';
import { PdSDKPluginSettings } from '../plugin';
/**
 * 混合插件配置
 */
export interface PdSDKPluginMixinsSettings extends PdSDKPluginSettings, PdVisPluginMixinsSettings {
    /**
     * 图标
     */
    icon?: string;
    /**
     * 标题
     */
    title?: string;
    /**
     * 提示文字
     */
    tooltip?: string;
}
/**
 * 混合模块配置
 */
export declare class PdSDKPluginMixins extends PdVisPluginMixins {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPluginMixinsSettings;
    /**
     *  配置
     */
    settings: PdSDKPluginMixinsSettings;
    /**
     * 构造方法
     * @param {PdSDKPluginMixinsSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKPluginMixinsSettings);
    /**
     * 获取插件的唯一标识
     */
    getPluginType(): string;
    /**
     * 初始化配置
     * @param {PdSDKPluginMixinsSettings} settings - 用户定义配置
     * @return {PdSDKPluginMixinsSettings} 配置
     */
    protected initSettings(settings: PdSDKPluginMixinsSettings): PdSDKPluginMixinsSettings;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
}
