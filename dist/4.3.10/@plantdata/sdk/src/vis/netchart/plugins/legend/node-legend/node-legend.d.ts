/// <reference types="jquery" />
import { PdVisLegendItem, PdVisPluginLegend } from '../legend';
import { PdVisNetChartDataNode, PdVisNodeId } from '../../../netchart';
import { PdSelector } from '../../../../../common/common';
/**
 * 关系图例数据
 */
export interface PdVisNodeLegendItem extends PdVisLegendItem {
    /**
     * 是否空心
     */
    outline?: boolean;
}
/**
 * 节点图例插件
 */
export declare class PdVisPluginNodeLegend extends PdVisPluginLegend {
    /**
     *  图例Id数据
     */
    protected legendIds: PdVisNodeId[];
    /**
     * 关系数据
     */
    protected nodeData: PdVisNetChartDataNode[];
    /**
     * 获取插件的唯一标识
     */
    getPluginType(): string;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 生成图例项
     * @param {PdVisNodeLegendItem} item - 单条图例数据
     * @return {PdSelector} 单条图例
     */
    protected buildLegendItem(item: PdVisNodeLegendItem): PdSelector;
    /**
     * 配置初始化完成后的回调
     */
    protected created(): void;
    /**
     * 过滤图例
     * @param {PdVisNodeLegendItem} item - 图例数据
     * @return {boolean} 是否过滤
     */
    protected filter(item: PdVisNodeLegendItem): boolean;
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
     * 更新图例
     */
    protected legendUpdate(): void;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
}
