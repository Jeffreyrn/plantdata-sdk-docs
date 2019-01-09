/// <reference types="jquery" />
import { PdVisNetChart } from '../../netchart';
import { PdVisPluginFloatButton } from '../float-button/float-button';
import { PdVisPlugin, PdVisPluginSettings } from '../plugin';
/**
 *  重新布局插件配置
 */
export interface PdVisPluginResetLayoutSettings extends PdVisPluginSettings {
}
/**
 * 重新布局插件
 */
export declare class PdVisPluginResetLayout extends PdVisPlugin {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisPluginResetLayoutSettings;
    /**
     *  配置
     */
    settings: PdVisPluginResetLayoutSettings;
    /**
     * 可视化组件
     */
    protected container: PdVisNetChart;
    /**
     * 浮动按钮实例
     */
    protected button: PdVisPluginFloatButton;
    /**
     * 构造方法
     * @param {PdVisPluginResetLayoutSettings} settings - 用户配置
     */
    constructor(settings?: PdVisPluginResetLayoutSettings);
    /**
     * 获取插件的唯一标识
     */
    getPluginType(): string;
    /**
     * 初始化配置
     * @param {PdVisPluginResetLayoutSettings} settings - 用户定义配置
     * @return {PdVisPluginResetLayoutSettings} 配置
     */
    protected initSettings(settings: PdVisPluginResetLayoutSettings): PdVisPluginResetLayoutSettings;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
}
