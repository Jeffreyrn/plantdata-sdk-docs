/// <reference types="jquery" />
import { PdVisPlugin, PdVisPluginSettings } from '../plugin';
import { PdVisNetChart } from '../../netchart';
import { PdUIAutocomplete, PdUIAutocompleteSettings } from '../../../../ui/components/autocomplete/autocomplete';
/**
 * 定位插件配置
 */
export interface PdVisPluginFindSettings extends PdVisPluginSettings {
    /**
     *  可视化组件
     */
    container?: PdVisNetChart;
    /**
     *  提示插件的配置
     */
    settings?: PdUIAutocompleteSettings;
}
/**
 * 定位插件
 */
export declare class PdVisPluginFind extends PdVisPlugin {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisPluginFindSettings;
    /**
     *  配置
     */
    settings: PdVisPluginFindSettings;
    /**
     *  可视化组件
     */
    protected container: PdVisNetChart;
    /**
     *  提示插件
     */
    protected find: PdUIAutocomplete;
    /**
     * 构造方法
     * @param {PdVisPluginFindSettings} settings - 用户配置
     */
    constructor(settings?: PdVisPluginFindSettings);
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
     * 判断可视化组件是否支持当前组件
     * @return {boolean} 是否支持
     */
    protected enable(): boolean;
    /**
     * 初始化配置
     * @param {PdVisPluginFindSettings} settings - 用户定义配置
     * @return {PdVisPluginFindSettings} 配置
     */
    protected initSettings(settings: PdVisPluginFindSettings): PdVisPluginFindSettings;
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
     * 取消绑定事件
     */
    protected unbindEvent(): void;
}
