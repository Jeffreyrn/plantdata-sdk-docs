/// <reference types="jquery" />
import { PdVisNetChart, PdVisNetChartData, PdVisNodeId } from '../../../../vis/netchart/netchart';
import { PdUIPagination } from '../../../../ui/components/pagination/index';
import { PdSDKPlugin, PdSDKPluginSettings } from '../plugin';
/**
 * 单条图解读数据
 */
export interface PdSDKPluginConnectsDataItem {
    /**
     *  经过关系Id列表
     */
    edges: string[];
    /**
     *  终点Id
     */
    end: PdVisNodeId;
    /**
     *  经过节点Id列表
     */
    nodes: PdVisNodeId[];
    /**
     *  起点Id
     */
    start: PdVisNodeId;
}
/**
 * 图解读数据
 */
export interface PdSDKPluginConnectsData extends PdVisNetChartData {
    /**
     *  图解读数据列表
     */
    connects: PdSDKPluginConnectsDataItem[];
}
/**
 * 图解读插件配置
 */
export interface PdSDKPluginConnectsSettings extends PdSDKPluginSettings {
    /**
     *  可视化组件
     */
    container?: PdVisNetChart;
    /**
     *  图解读关联图时的方式
     */
    mode?: 'hover' | 'click';
    /**
     * 最大显示个数
     */
    max?: number;
}
/**
 * 图解读插件
 */
export declare class PdSDKPluginConnects extends PdSDKPlugin {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPluginConnectsSettings;
    /**
     *  配置
     */
    settings: PdSDKPluginConnectsSettings;
    /**
     *  可视化组件
     */
    protected container: PdVisNetChart;
    /**
     *  高亮边的ID列表
     */
    protected hoverLinks: string[];
    /**
     *  高亮节点的ID列表
     */
    protected hoverNodes: PdVisNodeId[];
    /**
     * 分页
     */
    protected page: PdUIPagination;
    /**
     *  是否所有图解读展开状态
     */
    protected showAll: boolean;
    /**
     * 构造方法
     * @param {PdSDKPluginConnectsSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKPluginConnectsSettings);
    /**
     * 获取插件的唯一标识
     */
    getPluginType(): string;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 初始化配置
     * @param {PdSDKPluginConnectsSettings} settings - 用户定义配置
     * @return {PdSDKPluginConnectsSettings} 配置
     */
    protected initSettings(settings: PdSDKPluginConnectsSettings): PdSDKPluginConnectsSettings;
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
     * 生成路径列表的分页组件
     * @param pageNo - 当前页面
     * @param pageSize - 每页个数
     * @param totalItem - 总个数
     */
    protected buildPage(pageNo: number, pageSize: number, totalItem: number): void;
    /**
     * 渲染图解读数据
     */
    protected rendererData(pageNo?: number): void;
    /**
     * 渲染图解读数据的HTML字串
     * @param {PdSDKPluginConnectsData} data - 图解读数据
     * @param {number} pageNo - 渲染数据的页码
     * @param {number} pageSize - 每页条数
     */
    protected rendererDataHTML(data: PdSDKPluginConnectsData, pageNo?: number, pageSize?: number): void;
    /**
     * 取消绑定事件
     */
    protected unbindEvent(): void;
}
