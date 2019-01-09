import * as echarts from 'echarts';
import EChartOption = echarts.EChartOption;
import { PdVisNetChart, PdVisNetChartChartSettings, PdVisNetChartDataLink, PdVisNetChartDataNode, PdVisNetChartSettings } from '../../netchart';
/**
 *  ECharts网络关系图组件的事件目标类型
 */
export declare type PdVisEcNetChartEventTargetType = 'node' | 'link' | 'canvas' | 'other';
/**
 * ECharts网络关系图配置
 */
export interface PdVisEcNetChartChartSettings extends PdVisNetChartChartSettings {
    /**
     *  回调事件
     */
    events?: {
        /**
         * 单击节点的回调
         * @param {PdVisNetChartDataNode} data - 节点数据
         * @param params - 其他数据
         */
        nodeClick?: (data: PdVisNetChartDataNode, params: any) => void;
        /**
         * 双击节点的回调
         * @param {PdVisNetChartDataNode} data - 节点数据
         * @param params - 其他数据
         */
        nodeDblClick?: (data: PdVisNetChartDataNode, params: any) => void;
        /**
         * 右击节点的回调
         * @param {PdVisNetChartDataNode} data - 节点数据
         * @param params - 其他数据
         */
        nodeRightClick?: (data: PdVisNetChartDataNode, params: any) => void;
    };
    /**
     *  关系配置
     */
    linkSettings?: any;
    /**
     *  节点配置
     */
    nodeSettings?: any;
    /**
     *  ECharts配置
     */
    settings?: EChartOption;
}
/**
 * ECharts网络关系图组件的配置
 */
export interface PdVisEcNetChartSettings extends PdVisNetChartSettings {
    /**
     *  ECharts网络关系图配置
     */
    main?: PdVisEcNetChartChartSettings;
}
/**
 * ECharts网络关系图组件
 */
export declare class PdVisEcNetChart extends PdVisNetChart {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisEcNetChartSettings;
    /**
     *  配置
     */
    settings: PdVisEcNetChartSettings;
    /**
     *  右击事件类型
     */
    protected rightClickType: PdVisEcNetChartEventTargetType;
    /**
     * 构造方法
     * @param {PdVisEcNetChartSettings} settings - 用户配置
     */
    constructor(settings?: PdVisEcNetChartSettings);
    /**
     * 重置布局
     */
    resetLayout(): void;
    /**
     * 重置关系图
     */
    resize(): void;
    /**
     * 更新关系图
     */
    updateChart(): void;
    /**
     * 更新关系图的数据
     */
    updateData(): void;
    /**
     * 更新关系图的样式
     */
    updateStyle(): void;
    /**
     * 获取当前ECharts关系图的配置
     * @return {any} 当前ECharts关系图的配置
     */
    protected getSettings(): any;
    /**
     * 初始化ECharts的网络关系图
     */
    protected initChart(): void;
    /**
     * 初始化配置
     * @param {PdVisEcNetChartSettings} settings - 用户定义配置
     * @return {PdVisEcNetChartSettings} 配置
     */
    protected initSettings(settings: PdVisEcNetChartSettings): PdVisEcNetChartSettings;
    /**
     * 更新关系数据
     * @param {PdVisNetChartDataLink[]} links - 更新前的关系数据
     * @return {PdVisNetChartDataLink[]} 更新后的关系数据
     */
    protected updateLinks(links: PdVisNetChartDataLink[]): PdVisNetChartDataLink[];
    /**
     * 更新节点数据
     * @param {PdVisNetChartDataNode[]} nodes - 更新前的节点数据
     * @return {PdVisNetChartDataNode[]} 更新后的节点数据
     */
    protected updateNodes(nodes: PdVisNetChartDataNode[]): PdVisNetChartDataNode[];
}
