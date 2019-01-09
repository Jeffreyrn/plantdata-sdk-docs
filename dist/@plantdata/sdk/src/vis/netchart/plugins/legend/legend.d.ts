/// <reference types="jquery" />
import { PdVisPlugin, PdVisPluginSettings } from '../plugin';
import { PdVisNetChart } from '../../netchart';
import { PdSelector } from '../../../../common/common';
/**
 * 图例数据
 */
export interface PdVisLegendItem {
    /**
     *  图例颜色
     */
    color?: string;
    /**
     * 是否虚线
     */
    dashed?: boolean;
    /**
     *  是否禁用
     */
    disabled?: boolean;
    /**
     * 其他
     */
    extra?: {
        [key: string]: any;
    };
    /**
     * 是否隐藏
     */
    hidden?: boolean;
    /**
     * 状态
     */
    status?: string;
    /**
     *  图例key
     */
    key?: any;
    /**
     *  图例显示名
     */
    value?: string;
}
/**
 * 图例插件配置
 */
export interface PdVisPluginLegendSettings extends PdVisPluginSettings {
    /**
     * 是否自动配色
     */
    auto?: boolean;
    /**
     * 生成图例的方法
     * @param {PdVisLegendItem[]} data - 图例数据
     * @param {JQuery} $container - 生成图例的Dom容器
     */
    buildLegend?: (data: PdVisLegendItem[], $container: JQuery) => void;
    /**
     * 生成图例项
     * @param {PdVisLegendItem} item - 单条图例数据
     * @return {PdSelector} 单条图例
     */
    buildLegendItem?: (item: PdVisLegendItem) => PdSelector;
    /**
     * 所有颜色
     */
    color?: string[];
    /**
     * 展示列数
     */
    columns?: number;
    /**
     * 可视化组件
     */
    container?: PdVisNetChart;
    /**
     *  图例数据
     */
    data?: PdVisLegendItem[];
    /**
     * 图例相关的回调事件
     */
    events?: {
        /**
         * 单击图例项的回调事件
         * @param {JQuery.Event} e - 事件对象
         * @return {any}
         */
        click?: (e: JQuery.Event) => any;
        /**
         * 双击图例项的回调事件
         * @param {JQuery.Event} e - 事件对象
         * @return {any}
         */
        dblclick?: (e: JQuery.Event) => any;
        /**
         * 鼠标移入图例项的回调事件
         * @param {JQuery.Event} e - 事件对象
         * @return {any}
         */
        mouseenter?: (e: JQuery.Event) => any;
        /**
         * 鼠标移出图例项的回调事件
         * @param {JQuery.Event} e - 事件对象
         * @return {any}
         */
        mouseleave?: (e: JQuery.Event) => any;
    };
    /**
     * 生成图例的过滤器
     * @param {PdVisLegendItem} item - 单条图例数据
     * @return {boolean} 是否过滤
     */
    filter?: (item: PdVisLegendItem) => boolean;
    /**
     * 是否显示所有的图例数据
     */
    showAllLegend?: boolean;
}
/**
 * 图例插件
 */
export declare abstract class PdVisPluginLegend extends PdVisPlugin {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisPluginLegendSettings;
    /**
     *  配置
     */
    settings: PdVisPluginLegendSettings;
    /**
     *  可视化组件
     */
    protected container: PdVisNetChart;
    /**
     *  颜色映射
     */
    protected colorMap: {
        [key: string]: string;
    };
    /**
     * 分配图例颜色
     */
    static assignColor(legends: PdVisLegendItem[], colorMap?: {
        [key: string]: string;
    }, candColor?: string[]): PdVisLegendItem[];
    /**
     * 构造方法
     * @param {PdVisPluginLegendSettings} settings - 用户配置
     */
    constructor(settings?: PdVisPluginLegendSettings);
    /**
     * 获取显示的图例
     * @return {PdVisLegendItem[]} 图例数据
     */
    getAvailableData(): PdVisLegendItem[];
    /**
     * 更新图例数据
     * @return {PdVisLegendItem[]} 图例数据
     */
    getData(): PdVisLegendItem[];
    /**
     * 替换图例数据
     * @param data
     */
    replaceData(data: PdVisLegendItem[]): void;
    /**
     * 更新图例数据
     * @param {PdVisLegendItem[]} data - 图例数据
     */
    updateData(data: PdVisLegendItem[]): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 渲染图例
     * @param {PdVisLegendItem[]} data - 图例数据
     * @param {JQuery} $container - 生成图例的Dom容器
     */
    protected buildLegend(data: PdVisLegendItem[], $container: JQuery): void;
    /**
     * 生成图例项
     * @param {PdVisLegendItem} item - 单条图例数据
     * @return {PdSelector} 单条图例
     */
    protected buildLegendItem(item: PdVisLegendItem): PdSelector;
    /**
     * 配置初始化完成后的回调
     */
    protected created(): void;
    /**
     * 过滤图例
     * @param {PdVisLegendItem} item - 图例数据
     * @return {boolean} 是否过滤
     */
    protected abstract filter(item: PdVisLegendItem): boolean;
    /**
     * 初始化图例数据
     */
    protected initData(): void;
    /**
     * 初始化配置
     * @param {PdVisPluginLegendSettings} settings - 用户定义配置
     * @return {PdVisPluginLegendSettings} 配置
     */
    protected initSettings(settings: PdVisPluginLegendSettings): PdVisPluginLegendSettings;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 生成图例
     */
    protected legendDraw(): void;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 更新图例
     */
    protected abstract legendUpdate(): void;
    /**
     * 取消绑定事件
     */
    protected unbindEvent(): void;
}
