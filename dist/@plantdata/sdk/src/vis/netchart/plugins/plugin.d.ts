/// <reference types="jquery" />
import { PdPlugin, PdPluginSettings } from '../../../container/plugin/plugin';
import { PdSelector } from '../../../common/common';
/**
 * 定位插件配置
 */
export interface PdVisPluginSettings extends PdPluginSettings {
    /**
     * 插件容器
     */
    $parent?: PdSelector;
    /**
     * 插件头部
     */
    headerFunction?: (title: string, icon?: string, tooltip?: string) => void;
    /**
     * 是否可见
     */
    isVisible?: (viewType: string, ins: PdVisPlugin) => boolean;
}
/**
 * 定位插件
 */
export declare abstract class PdVisPlugin extends PdPlugin {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisPluginSettings;
    /**
     *  配置
     */
    settings: PdVisPluginSettings;
    /**
     * 构造方法
     * @param {PdVisPluginSettings} settings - 用户配置
     */
    constructor(settings?: PdVisPluginSettings);
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 创建插件DOM
     * @param {PdSelector} content - 插件内容
     * @param {string} icon - 插件ICON
     * @param {string} title - 插件标题
     * @param {string} tooltip - 插件文字提示
     * @return {JQuery} - 插件的DOM
     */
    protected buildPluginTemplate(content: PdSelector, icon: string, title: string, tooltip?: string): JQuery;
    /**
     * 绑定事件
     */
    protected handleViewChange(): void;
    /**
     * 初始化配置
     * @param {PdVisPluginSettings} settings - 用户定义配置
     * @return {PdVisPluginSettings} 配置
     */
    protected initSettings(settings: PdVisPluginSettings): PdVisPluginSettings;
}
