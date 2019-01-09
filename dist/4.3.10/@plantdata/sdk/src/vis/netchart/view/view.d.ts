/// <reference types="jquery" />
import { PdView, PdViewSettings } from '../../../container/view';
import { PdVisNetChart, PdVisNetChartData } from '../netchart';
import { PdSelector } from '../../../common/common';
/**
 * 视图插件配置
 */
export interface PdVisViewSettings extends PdViewSettings {
    /**
     *  插件生成的选择器
     */
    container?: PdVisNetChart;
}
/**
 * 视图插件
 */
export declare abstract class PdVisView extends PdView {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisViewSettings;
    /**
     *  配置
     */
    settings: PdVisViewSettings;
    /**
     *  mask
     */
    protected $mask: JQuery;
    /**
     *  插件生成的选择器
     */
    protected container: PdVisNetChart;
    /**
     * 上一次的数据
     */
    protected data: PdVisNetChartData;
    /**
     * 构造方法
     * @param {PdVisViewSettings} settings - 用户配置
     */
    constructor(settings?: PdVisViewSettings);
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 生成无数据提示
     * @return {string} 无数据提示字串
     */
    protected createNoData(): string;
    /**
     * 数据变化
     */
    protected dataChange(): void;
    /**
     * 进入视图
     */
    protected enter(): void;
    /**
     * 离开视图
     */
    protected leave(): void;
    /**
     * 初始化视图结构并返回
     * @return {JQuery} 视图JQuery对象
     */
    protected initViewTemplate(body: PdSelector, title: string, icon: string): JQuery;
    /**
     * 设置数据加载状态
     * @param {boolean} inLoading - 是否正在加载
     */
    protected updateLoading(inLoading: boolean): void;
}
