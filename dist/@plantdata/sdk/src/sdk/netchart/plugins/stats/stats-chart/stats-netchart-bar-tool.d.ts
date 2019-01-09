/// <reference types="jquery" />
import 'echarts/lib/component/title';
import { PdVisNetChart } from '../../../../../vis/netchart/netchart';
import { PdSelector } from '../../../../../common/common';
import { PdSDKPluginStatsTool, PdSDKPluginStatsToolConfig, PdSDKPluginStatsToolSettings } from './stats-tool';
import { PdSDKAjaxSettings } from '../../../../utils/utils';
import { PdSDKStat } from '../../../../stats/stat';
/**
 * SDK 图谱柱状图统计配置
 */
export interface PdSDKPluginStatsNetChartBarToolSettings extends PdSDKPluginStatsToolSettings {
    /**
     * 高亮的触发方式
     */
    highlightTrigger?: 'click' | 'hover';
    /**
     *  可视化组件
     */
    netChart?: PdVisNetChart;
}
/**
 * SDK 图谱柱状图统计
 */
export declare abstract class PdSDKPluginStatsNetChartBarTool extends PdSDKPluginStatsTool {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPluginStatsNetChartBarToolSettings;
    /**
     *  配置
     */
    settings: PdSDKPluginStatsNetChartBarToolSettings;
    /**
     * 统计的结果
     */
    protected data: any;
    /**
     * 选中柱子
     */
    protected activeBarIndex: number;
    /**
     * 构造方法
     * @param {PdSDKPluginStatsNetChartBarToolSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKPluginStatsNetChartBarToolSettings);
    /**
     * 获取配置结果
     * @return {PdSDKPluginStatsToolConfig} - 编辑器的配置结果
     */
    getEditorData(): PdSDKPluginStatsToolConfig;
    /**
     * 统计
     * @return {Promise<any>} 获取规则的异步请求实例
     */
    rendererData(): Promise<any>;
    /**
     * 激活柱子
     */
    protected activeBar(index: number): void;
    /**
     * 生成起步请求配置
     * @return {PdSDKAjaxSettings} 异步请求配置
     */
    protected abstract buildRequest(): PdSDKAjaxSettings;
    /**
     * 生成图表
     * @param {PdSelector} selector - 生成的DOM位置
     * @param {boolean} showTitle - 是否显示标题
     * @return {PdSDKStat} - 统计实例
     */
    protected createChart(selector: PdSelector, showTitle?: boolean): PdSDKStat;
    /**
     * 创建编辑表单
     * @return {JQuery} 编辑表单的DOM对象
     */
    protected createEditForm(): JQuery;
    /**
     * 自动生成统计标题
     */
    protected createTitle(): string;
    /**
     * 生成X轴选项
     * @return {string} X轴选项表单
     */
    protected createXSelect(): string;
    /**
     * 生成Y轴选项
     * @return {string} Y轴选项表单
     */
    protected createYSelect(): string;
    /**
     * 取消激活柱子
     */
    protected inactiveBar(): void;
    /**
     * 初始化配置
     * @param {PdSDKPluginStatsNetChartBarToolSettings} settings - 用户定义配置
     * @return {PdSDKPluginStatsNetChartBarToolSettings} 配置
     */
    protected initSettings(settings: PdSDKPluginStatsNetChartBarToolSettings): PdSDKPluginStatsNetChartBarToolSettings;
    /**
     * 渲染图表
     */
    protected rendererChart(): void;
    /**
     * 更新统计标题
     */
    protected updateTitle(): void;
}
