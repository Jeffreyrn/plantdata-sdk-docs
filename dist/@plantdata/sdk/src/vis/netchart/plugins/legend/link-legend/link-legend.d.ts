/// <reference types="jquery" />
import { PdVisLegendItem, PdVisPluginLegend } from '../index';
import { PdOptionType, PdSelector } from '../../../../../common/common';
import { PdVisNetChartDataLink } from '../../../netchart';
/**
 * 关系图例数据
 */
export interface PdVisLinkLegendItem extends PdVisLegendItem {
    /**
     * 边显示属性
     */
    displayAtt?: string;
    /**
     * 边显示属性的可选范围
     */
    displayAtts?: PdOptionType[];
}
/**
 * 关系图例插件
 */
export declare class PdVisPluginLinkLegend extends PdVisPluginLegend {
    /**
     *  图例Id数据
     */
    protected legendIds: number[];
    /**
     * 关系数据
     */
    protected linkData: PdVisNetChartDataLink[];
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
     * @param {PdVisLinkLegendItem} item - 单条图例数据
     * @return {PdSelector} 单条图例
     */
    protected buildLegendItem(item: PdVisLinkLegendItem): PdSelector;
    /**
     * 过滤图例
     * @param {PdVisLinkLegendItem} item - 图例数据
     * @return {boolean} 是否过滤
     */
    protected filter(item: PdVisLinkLegendItem): boolean;
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
