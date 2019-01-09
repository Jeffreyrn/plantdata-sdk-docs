/// <reference types="echarts" />
/// <reference types="jquery" />
import * as echarts from 'echarts/lib/echarts';
import { PdSelector } from '../../../../../common/common';
import { PdSDKKGSettings } from '../../../../utils/utils';
import { PdSDKStat } from '../../../../stats/stat';
import { PdComponent, PdComponentSettings } from '../../../../../core/component';
import { PdVisDialog } from '../../../../../vis/utils/modal/dialog/dialog';
/**
 * 图统计配置项
 */
export interface PdSDKPluginStatsToolConfig {
    /**
     *  统计agg
     */
    agg?: any;
    /**
     *  统计的说明
     */
    title?: string;
    /**
     *  统计x轴配置
     */
    xAxis?: any;
    /**
     *  统计y轴配置
     */
    yAxis?: any;
    /**
     * 其他配置
     */
    [key: string]: any;
}
/**
 * SDK 图统计配置
 */
export interface PdSDKPluginStatsToolSettings extends PdComponentSettings, PdSDKKGSettings {
    /**
     *  图表设置
     */
    chartSettings?: echarts.EChartOption;
    /**
     *  是否允许删除
     */
    deletable?: boolean;
    /**
     *  是否允许用户修改统计配置
     */
    editable?: boolean;
    /**
     *  统计的ID
     */
    id?: number;
    /**
     * 肯定按钮事件
     */
    positiveClick?: () => void;
    /**
     * 否定按钮事件
     */
    negativeClick?: () => void;
    /**
     * 删除时的回调事件
     */
    onDelete?: (settings: PdSDKPluginStatsToolSettings, ins: PdSDKPluginStatsTool) => void;
    /**
     * 删除时的回调事件
     */
    onUpdate?: (settings: PdSDKPluginStatsToolSettings, ins: PdSDKPluginStatsTool) => void;
    /**
     * 删除时的回调事件
     */
    beforeDelete?: (settings: PdSDKPluginStatsToolSettings, ins: PdSDKPluginStatsTool) => Promise<any>;
    /**
     * 删除时的回调事件
     */
    beforeUpdate?: (settings: PdSDKPluginStatsToolSettings, ins: PdSDKPluginStatsTool) => Promise<any>;
    /**
     *  统计配置项
     */
    rule?: PdSDKPluginStatsToolConfig;
    /**
     *  统计的类型
     */
    type?: string;
    /**
     * x轴可选项
     */
    xAxisOptions?: {
        value: string;
        label: string;
    }[];
    /**
     * y轴可选项
     */
    yAxisOptions?: {
        value: string;
        label: string;
    }[];
    /**
     * 其他配置
     */
    [key: string]: any;
}
/**
 * SDK 图统计
 */
export declare abstract class PdSDKPluginStatsTool extends PdComponent {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPluginStatsToolSettings;
    /**
     * 弹框实例
     */
    fullDialog: PdVisDialog;
    /**
     *  配置
     */
    settings: PdSDKPluginStatsToolSettings;
    /**
     * 图表的容器
     */
    protected $chart: JQuery;
    /**
     * 配置表单的容器
     */
    protected $editor: JQuery;
    /**
     * 图表实例
     */
    protected stat: PdSDKStat;
    /**
     * 全屏图表实例
     */
    protected statFull: PdSDKStat;
    /**
     * 构造方法
     * @param {PdSDKPluginStatsToolSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKPluginStatsToolSettings);
    /**
     * 删除实例
     */
    delete(): void;
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 获取编辑器的配置结果
     * @return {PdSDKPluginStatsToolConfig} - 编辑器的配置结果
     */
    abstract getEditorData(): PdSDKPluginStatsToolConfig;
    /**
     * 获取当前的统计配置规则
     */
    getStatsConfig(): PdSDKPluginStatsToolConfig;
    /**
     * 获取当前统计配置项
     */
    getStatsSettings(): PdSDKPluginStatsToolSettings;
    /**
     * 取消编辑
     */
    hideEdit(): void;
    /**
     * 统计
     * @return {Promise<any>} 获取规则的异步请求实例
     */
    abstract rendererData(): Promise<any>;
    /**
     * 设置当前统计配置项
     */
    setStatsSettings(settings: PdSDKPluginStatsToolSettings): void;
    /**
     * 显示编辑
     */
    showEdit(): void;
    /**
     * 更新实例
     * @param {PdSDKPluginStatsToolSettings} settings - 统计配置
     */
    update(settings: PdSDKPluginStatsToolSettings): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 生成图表
     * @param {PdSelector} selector - 生成的DOM位置
     * @return {PdSDKStat} - 统计实例
     */
    protected abstract createChart(selector: PdSelector): PdSDKStat;
    /**
     * 创建编辑表单
     * @return {JQuery}
     */
    protected abstract createEditForm(): JQuery;
    /**
     * 初始化配置
     * @param {PdSDKPluginStatsToolSettings} settings - 用户定义配置
     * @return {PdSDKPluginStatsToolSettings} 配置
     */
    protected initSettings(settings: PdSDKPluginStatsToolSettings): PdSDKPluginStatsToolSettings;
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
     * 取消绑定事件
     */
    protected unbindEvent(): void;
}
