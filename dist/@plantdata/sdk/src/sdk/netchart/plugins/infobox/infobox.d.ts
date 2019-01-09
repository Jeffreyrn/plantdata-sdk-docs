/// <reference types="jquery" />
import { PdVisNetChart, PdVisNetChartDataNode, PdVisNodeId } from '../../../../vis/netchart/netchart';
import { PdSDKInfobox, PdSDKInfoboxSettings } from '../../../infobox/infobox';
import { PdVisPlugin } from '../../../../vis/netchart/plugins';
import { PdSDKPluginSettings } from '../plugin';
/**
 * 知识卡片插件配置
 */
export interface PdSDKPluginInfoboxSettings extends PdSDKPluginSettings {
    /**
     * 是否缓存
     */
    cacheable?: boolean;
    /**
     *  可视化组件
     */
    container?: PdVisNetChart;
    /**
     * infobox配置
     */
    infoboxSettings?: PdSDKInfoboxSettings;
}
/**
 * 知识卡片插件
 */
export declare class PdSDKPluginInfobox extends PdVisPlugin {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPluginInfoboxSettings;
    /**
     *  配置
     */
    settings: PdSDKPluginInfoboxSettings;
    /**
     *  可视化组件
     */
    protected container: PdVisNetChart;
    /**
     *  infobox插件实例
     */
    protected infobox: PdSDKInfobox;
    /**
     *  当前加载节点的ID
     */
    protected infoboxLoadingId: PdVisNodeId;
    /**
     *  infobox缓存
     */
    protected infoboxCacheMap: {
        [key: string]: any;
    };
    /**
     * 知识卡片的实体
     */
    protected node: PdVisNetChartDataNode;
    /**
     * 构造方法
     * @param {PdSDKPluginInfoboxSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKPluginInfoboxSettings);
    /**
     * 获取插件的唯一标识
     */
    getPluginType(): string;
    /**
     * 加载数据
     * @param {PdVisNetChartDataNode} nodeData - 加载数据的节点
     * @return {Promise<any>} - infobox加载的实例
     */
    load(nodeData: PdVisNetChartDataNode): Promise<any>;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 初始化infobox
     */
    protected initInfobox(): void;
    /**
     * 初始化配置
     * @param {PdSDKPluginInfoboxSettings} settings - 用户定义配置
     * @return {PdSDKPluginInfoboxSettings} 配置
     */
    protected initSettings(settings: PdSDKPluginInfoboxSettings): PdSDKPluginInfoboxSettings;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
}
