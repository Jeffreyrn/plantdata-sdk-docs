/// <reference types="jquery" />
/// <reference types="echarts" />
import * as echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/grid';
import 'echarts/lib/component/dataZoom';
import 'echarts/lib/component/timeline';
import { PdVisNetChart, PdVisNetChartData, PdVisNetChartDataLink, PdVisNetChartDataNode } from '../../../../vis/netchart/netchart';
import { PdSDKPlugin, PdSDKPluginSettings } from '../plugin';
/**
 * 时序数据
 */
export interface PdSDKPluginTimeChartData extends PdVisNetChartData {
    /**
     *  显示开始日期
     */
    computerTime?: string;
}
/**
 * 时序关系
 */
export interface PdSDKPluginTimeChartDataLink extends PdVisNetChartDataLink {
    /**
     *  关系发生时间
     */
    startTime?: string[];
}
/**
 * 时序节点
 */
export interface PdSDKPluginTimeChartDataNode extends PdVisNetChartDataNode {
}
/**
 * 时序设置
 */
export interface PdSDKPluginTimeChartSettings extends PdSDKPluginSettings {
    /**
     *  图谱更新间隔
     */
    chartUpdateInterval?: number;
    /**
     *  是否显示播放按钮
     */
    isShowPlay?: boolean;
    /**
     *  未知时间节点的显示控制
     */
    unknowVisible?: boolean;
    /**
     *  统计组件设置
     */
    settings?: any;
    /**
     *  时间轴组件设置
     */
    timelineSettings?: any;
}
/**
 * 时序数据过滤设置
 */
export interface PdSDKPluginTimeFilterSettings {
    /**
     *  开始时间
     */
    fromTime?: string;
    /**
     *  结束时间
     */
    toTime?: string;
    /**
     *  无效节点显示类型 可选值hide:隐藏，vague:虚化
     */
    nodesShowType?: string;
}
/**
 * 时序事件
 */
export interface PdSDKPluginTimeChartEvent extends PdSDKPluginTimeChartDataLink {
    /**
     *  时序事件时间
     */
    time?: string;
    /**
     *  时序事件时间戳
     */
    timestamp?: number;
}
/**
 * 时序插件
 */
export declare class PdSDKPluginTimeChart extends PdSDKPlugin {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPluginTimeChartSettings;
    /**
     *  配置
     */
    settings: PdSDKPluginTimeChartSettings;
    /**
     *  图谱更新的timeout
     */
    protected chartUpdateTimeout: any;
    /**
     *  可视化组件
     */
    protected container: PdVisNetChart;
    /**
     *  数量数据
     */
    protected counts: number[];
    /**
     *  显示的事件结束时间
     */
    protected end: string;
    /**
     *  所有事件
     */
    protected eventList: PdSDKPluginTimeChartEvent[];
    /**
     *  设置面板前缀
     */
    protected namePrefix: string;
    /**
     *  设置面板
     */
    protected settingsPanel: JQuery;
    /**
     *  显示的事件开始时间
     */
    protected start: string;
    /**
     *  时间数据
     */
    protected times: string[];
    /**
     *  时间轴组件
     */
    protected timeChart: echarts.ECharts;
    /**
     *  时序过滤设置
     */
    protected timeFilterSettings: PdSDKPluginTimeFilterSettings;
    /**
     * 生成今天的年月日字串
     * @return {string} 今天的年月日字串
     */
    protected static today(): string;
    /**
     * 构造方法
     * @param {PdSDKPluginTimeChartSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKPluginTimeChartSettings);
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 获取插件的唯一标识
     */
    getPluginType(): string;
    /**
     * 获取时序过滤配置
     * @return {PdSDKPluginTimeFilterSettings} 时序过滤配置
     */
    getSettings(): PdSDKPluginTimeFilterSettings;
    /**
     * 设置过滤条件设置
     * @param {PdSDKPluginTimeFilterSettings} settings
     */
    setSettings(settings: PdSDKPluginTimeFilterSettings): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 生成时序数据显示的时间区间
     */
    protected buildEventsTimeRange(): void;
    /**
     * 过滤显示的数据
     * @param {PdVisNetChartData} data 所有可以显示的数据
     * @return {PdVisNetChartData} 需要显示的数据
     */
    protected eventFilter(data: PdVisNetChartData): PdVisNetChartData;
    /**
     * 初始化配置
     * @param {PdSDKPluginTimeChartSettings} settings - 用户定义配置
     * @return {PdSDKPluginTimeChartSettings} 配置
     */
    protected initSettings(settings: PdSDKPluginTimeChartSettings): PdSDKPluginTimeChartSettings;
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
     * 渲染时序组件
     */
    protected rendererTimeChart(): void;
    /**
     * 显示动态组件
     */
    protected showDynamicTimeChart(): void;
    /**
     * 显示静态组件
     */
    protected showStaticTimeChart(): void;
    /**
     * 更新过滤设置
     * @return {boolean} 是否允许指定配置
     */
    protected updateSettings(): boolean;
    /**
     * 取消绑定事件
     */
    protected unbindEvent(): void;
    /**
     * 未知时间是否显示
     * @param {PdSDKPluginTimeChartEvent} event - 事件数据
     * @return {boolean} 是否改数据显示
     */
    protected unknowEventEnable(event: PdSDKPluginTimeChartEvent): boolean;
}
