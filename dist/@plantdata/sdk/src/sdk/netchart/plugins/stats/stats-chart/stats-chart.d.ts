/// <reference types="echarts" />
/// <reference types="jquery" />
import * as echarts from 'echarts/lib/echarts';
import { PdVisNetChart } from '../../../../../vis/netchart/netchart';
import { PdSDKPlugin, PdSDKPluginSettings } from '../../plugin';
import { PdSDKPluginStatsTool, PdSDKPluginStatsToolConfig, PdSDKPluginStatsToolSettings } from './stats-tool';
import { PdSDKCRUDSettings } from '../../../../utils/utils';
import { PdKGSchema } from '../../../../schema/schema';
import { PdVisDialog } from '../../../../../vis/utils/modal/dialog/dialog';
/**
 * SDK 图统计配置
 */
export interface PdSDKPluginStatsChartSettings extends PdSDKPluginSettings, PdSDKCRUDSettings {
    /**
     *  图表设置
     */
    chartSettings?: echarts.EChartOption;
    /**
     *  可视化组件
     */
    container?: PdVisNetChart;
    /**
     *  是否允许用户修改统计配置
     */
    editable?: boolean;
    /**
     * 高亮的触发方式
     */
    highlightTrigger?: 'click' | 'hover';
    /**
     * 高亮的模式
     */
    highlightMode?: 'only' | 'single';
    /**
     * 允许类型
     */
    items?: string[];
    /**
     *  Schema
     */
    schema?: PdKGSchema;
    /**
     *  统计配置
     */
    statsSettings?: PdSDKPluginStatsToolSettings[];
}
/**
 * SDK 图统计
 */
export declare class PdSDKPluginStatsChart extends PdSDKPlugin {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPluginStatsChartSettings;
    /**
     * 添加弹框实例
     */
    addDialog: PdVisDialog;
    /**
     *  配置
     */
    settings: PdSDKPluginStatsChartSettings;
    /**
     * 添加表单
     */
    protected $addForm: JQuery;
    /**
     *  可视化组件
     */
    protected container: PdVisNetChart;
    /**
     * 添加统计实例
     */
    protected statEdit: PdSDKPluginStatsTool;
    /**
     *  统计配置
     */
    protected statsSettings?: PdSDKPluginStatsToolSettings[];
    /**
     * 图表实例
     */
    protected statTools: PdSDKPluginStatsTool[];
    /**
     * 构造方法
     * @param {PdSDKPluginStatsChartSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKPluginStatsChartSettings);
    /**
     * 添加统计
     * @param type - 统计类型
     * @param rule - 统计配置
     */
    add(type: string, rule: PdSDKPluginStatsToolConfig): Promise<any>;
    /**
     * 清空分析
     */
    clearStats(): void;
    /**
     * 删除统计配置
     * @param id - 统计配置id
     * @return {Promise<any>} 删除统计配置的异步请求实例
     */
    delete(id: number): Promise<any>;
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 获取插件的唯一标识
     */
    getPluginType(): string;
    /**
     * 获取当前设置的统计配置项
     */
    getStatsSettings(): PdSDKPluginStatsToolSettings[];
    /**
     * 加载统计配置
     * @param pageNo - 统计配置页码
     * @return {Promise<any>} 获取统计配置的异步请求实例
     */
    load(pageNo?: number): Promise<any>;
    /**
     * 分析
     */
    stats(): void;
    /**
     * 添加统计配置的请求
     * @param type - 统计类型
     * @param rule - 统计配置
     * @return {Promise<any>} 添加统计配置的异步请求实例
     */
    protected addRequest(type: string, rule: PdSDKPluginStatsToolConfig): Promise<any>;
    /**
     * 添加统计实例
     * @param {PdSDKPluginStatsTool} stat - 统计实例
     */
    protected addStat(stat: PdSDKPluginStatsTool): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 创建统计实例
     * @param {string} type - 统计类型
     * @param {PdSDKPluginStatsToolSettings} settings - 统计配置
     * @return {PdSDKPluginStatsTool} - 统计实例
     */
    protected createStatItem(type: string, settings?: PdSDKPluginStatsToolSettings): PdSDKPluginStatsTool;
    /**
     * 生成统计工具的配置
     * @param {PdSDKPluginStatsToolConfig} settings - 用户定义配置
     * @param {{[key: string]: any}} exSettings - 其他配置
     * @return {PdSDKPluginStatsToolConfig} 统计工具的配置
     */
    protected createStatsToolSettings(settings: PdSDKPluginStatsToolConfig, exSettings?: {
        [key: string]: any;
    }): PdSDKPluginStatsToolConfig;
    /**
     * 删除统计配置
     * @param id - 统计配置id
     * @return {Promise<any>} 删除统计配置的异步请求实例
     */
    protected deleteRequest(id: number): Promise<any>;
    /**
     * 删除统计实例
     * @param {PdSDKPluginStatsTool} stat - 统计实例
     */
    protected deleteStat(stat: PdSDKPluginStatsTool): void;
    /**
     * 初始化配置
     * @param {PdSDKPluginStatsChartSettings} settings - 用户定义配置
     * @return {PdSDKPluginStatsChartSettings} 配置
     */
    protected initSettings(settings: PdSDKPluginStatsChartSettings): PdSDKPluginStatsChartSettings;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 获取统计配置
     * @param pageNo - 统计配置页码
     * @return {Promise<any>} 获取统计配置的异步请求实例
     */
    protected listRequest(pageNo?: number): Promise<any>;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 取消绑定事件
     */
    protected unbindEvent(): void;
    /**
     * 更新添加弹框内容
     * @param {string} type - 统计类型
     */
    protected updateAddForm(type?: string): void;
    /**
     * 修改统计配置
     * @param {number} id - 统计配置ID
     * @param {any} type - 统计配置类型
     * @param {any} rule - 统计配置
     * @return {Promise<any>} 添加统计配置的异步请求实例
     */
    protected updateRequest(id: number, type: string, rule: PdSDKPluginStatsToolConfig): Promise<any>;
}
