/// <reference types="jquery" />
import { PdVisPlugin, PdVisPluginSettings } from '../plugin';
import { PdVisChartCacheData } from '../../../chart';
import { PdVisNetChart } from '../../netchart';
/**
 *  历史插件配置
 */
export interface PdVisPluginHistorySettings extends PdVisPluginSettings {
    /**
     * 渲染单条历史数据的方法
     * @param {PdVisChartCacheData} history - 单条历史数据
     * @param {string} cls - 选中的class
     * @return {string} 单条历史数据的字串
     */
    drawItem?: (history: PdVisChartCacheData, cls: string) => string;
}
/**
 * 历史插件
 */
export declare class PdVisPluginHistory extends PdVisPlugin {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisPluginHistorySettings;
    /**
     *  配置
     */
    settings: PdVisPluginHistorySettings;
    /**
     *  可视化组件
     */
    protected container: PdVisNetChart;
    /**
     * 构造方法
     * @param {PdVisPluginHistorySettings} settings - 用户配置
     */
    constructor(settings?: PdVisPluginHistorySettings);
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
     * 渲染单条历史数据的方法
     * @param {PdVisChartCacheData} history - 单条历史数据
     * @param {boolean} isSelected - 是否当前显示数据
     * @return {string} 单条历史数据的字串
     */
    protected drawItem(history: PdVisChartCacheData, isSelected: boolean): string;
    /**
     * 渲染历史数据
     */
    protected drawItems(): void;
    /**
     * 初始化配置
     * @param {PdVisPluginHistorySettings} settings - 用户定义配置
     * @return {PdVisPluginHistorySettings} 配置
     */
    protected initSettings(settings: PdVisPluginHistorySettings): PdVisPluginHistorySettings;
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
