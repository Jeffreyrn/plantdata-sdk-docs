/// <reference types="jquery" />
import { PdVisPluginToolBox, PdVisPluginToolBoxSettings } from '../toolbox';
import { PdVisToolItemSettings } from '../../../../utils/tool-item/tool-item';
/**
 * 工具栏插件配置
 */
export interface PdVisPluginToolbarSettings extends PdVisPluginToolBoxSettings {
    /**
     *  工具选项的尺寸
     */
    size?: 'xs' | 'sm' | 'md' | 'lg';
}
/**
 * 工具栏插件
 */
export declare class PdVisPluginToolbar extends PdVisPluginToolBox {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisPluginToolbarSettings;
    /**
     *  配置
     */
    settings: PdVisPluginToolbarSettings;
    /**
     * 构造方法
     * @param {PdVisPluginToolbarSettings} settings - 用户配置
     */
    constructor(settings?: PdVisPluginToolbarSettings);
    /**
     * 获取插件的唯一标识
     */
    getPluginType(): string;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 内置工具
     * @return {PdVisToolItemSettings[]} - 内置工具集
     */
    protected defaultTools(): PdVisToolItemSettings[];
    /**
     * 判断可视化组件是否支持当前组件
     * @return {boolean} 是否支持
     */
    protected enable(): boolean;
    /**
     * 初始化配置
     * @param {PdVisPluginToolbarSettings} settings - 用户定义配置
     * @return {PdVisPluginToolbarSettings} 配置
     */
    protected initSettings(settings: PdVisPluginToolbarSettings): PdVisPluginToolbarSettings;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
}
