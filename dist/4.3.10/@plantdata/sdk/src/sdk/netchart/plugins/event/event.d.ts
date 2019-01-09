/// <reference types="jquery" />
import { PdVisNetChart, PdVisNetChartDataLink, PdVisNodeId } from '../../../../vis/netchart/netchart';
import { PdSDKPlugin, PdSDKPluginSettings } from '../plugin';
/**
 * 事件时序数据
 */
export interface PdSDKPluginEventDataLink extends PdVisNetChartDataLink {
    /**
     *  事件发生时间列表
     */
    startTime?: string[];
}
/**
 * 事件完整数据
 */
export interface PdSDKPluginEventLink extends PdSDKPluginEventDataLink {
    /**
     *  事件发生月日
     */
    date?: string;
    /**
     *  事件详情描述
     */
    detail?: any;
    /**
     *  事件关联的原对象ID列表
     */
    fromIds?: PdVisNodeId[];
    /**
     *  事件关联的所有对象ID列表
     */
    ids?: string[];
    /**
     *  事件发生时间的时间戳
     */
    timestamp?: number;
    /**
     *  事件关联的目标对象ID列表
     */
    toIds?: PdVisNodeId[];
    /**
     *  事件发生年份
     */
    year?: string;
}
/**
 * 事件列表设置
 */
export interface PdSDKPluginEventSettings extends PdSDKPluginSettings {
    /**
     *  是否激活
     */
    active?: boolean;
    /**
     *  可视化组件
     */
    container?: PdVisNetChart;
    /**
     * 渲染事件详情的方法
     * @param {PdSDKPluginEventLink} event - 事件
     * @return {string} 详情HTML字串
     */
    drawDetail?: (event: PdSDKPluginEventLink) => string;
    /**
     * 标题类型
     */
    titleType?: string;
}
/**
 * 事件列表插件
 */
export declare class PdSDKPluginEvent extends PdSDKPlugin {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPluginEventSettings;
    /**
     *  配置
     */
    settings: PdSDKPluginEventSettings;
    /**
     *  可视化组件
     */
    protected container: PdVisNetChart;
    /**
     *  事件数据集
     */
    protected eventList: PdSDKPluginEventLink[];
    /**
     * 渲染事件详情的方法
     * @param {PdSDKPluginEventLink} event - 事件
     * @return {string} 详情HTML字串
     */
    protected static drawDetail(event: PdSDKPluginEventLink): string;
    /**
     * 构造方法
     * @param {PdSDKPluginEventSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKPluginEventSettings);
    /**
     * 获取插件的唯一标识
     */
    getPluginType(): string;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 过滤出指定时间内的事件
     * @return {PdSDKPluginEventLink[]} 指定时间内的事件列表
     */
    protected getVisibleEvents(): PdSDKPluginEventLink[];
    /**
     * 初始化配置
     * @param {PdSDKPluginEventSettings} settings - 用户定义配置
     * @return {PdSDKPluginEventSettings} 配置
     */
    protected initSettings(settings: PdSDKPluginEventSettings): PdSDKPluginEventSettings;
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
     * 渲染可视事件列表
     */
    protected rendererEvents(): void;
    /**
     * 生成完整事件数据
     */
    protected updateEventDetail(): void;
    /**
     * 取消绑定事件
     */
    protected unbindEvent(): void;
}
