/// <reference types="jquery" />
import { PdVisNetChart, PdVisNetChartData, PdVisNodeId } from '../../../../vis/netchart/netchart';
import { PdKGSchema } from '../../../schema/schema';
import { PdSDKPlugin, PdSDKPluginSettings } from '../plugin';
import { PdVisCascader } from '../../../../vis/utils/cascader';
/**
 * 图统计配置项
 */
export interface PdSDKPluginStatsConfig {
    /**
     *  统计关联的关系Id列表
     */
    atts: string[];
    /**
     *  统计配置项ID
     */
    id: string;
    /**
     *  统计的说明
     */
    key: string;
    /**
     *  统计关联的实体
     */
    type: string;
}
/**
 * 单条图统计数据，某一种统计对应的结果
 */
export interface PdSDKPluginDataStats extends PdSDKPluginStatsConfig {
    /**
     *  统计数据结果
     */
    rs: PdSDKPluginDataStatsRs[];
}
/**
 * 图统计数据，所有统计的结果
 */
export interface PdSDKPluginStatsData extends PdVisNetChartData {
    /**
     *  统计数据
     */
    stats: PdSDKPluginDataStats[];
}
/**
 * 单条图统计数据的结果
 */
export interface PdSDKPluginDataStatsRs {
    /**
     *  统计数据对应实体的关联节点的数量
     */
    count: number;
    /**
     *  统计数据对应实体的ID
     */
    id: PdVisNodeId;
}
/**
 * SDK 图统计配置
 */
export interface PdSDKPluginStatsSettings extends PdSDKPluginSettings {
    /**
     *  可视化组件
     */
    container?: PdVisNetChart;
    /**
     *  是否允许用户修改统计配置
     */
    editable?: boolean;
    /**
     *  Schema
     */
    schema?: PdKGSchema;
    /**
     *  统计配置项
     */
    statsConfig?: PdSDKPluginStatsConfig[];
}
/**
 * SDK 图统计
 */
export declare class PdSDKPluginStats extends PdSDKPlugin {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPluginStatsSettings;
    /**
     *  配置
     */
    settings: PdSDKPluginStatsSettings;
    /**
     *  可视化组件
     */
    protected container: PdVisNetChart;
    /**
     *  配置面板前缀
     */
    protected namePrefix: string;
    /**
     *  配置面板容器
     */
    protected $settingsPanel: JQuery;
    /**
     *  统计配置项
     */
    protected statsConfig: PdSDKPluginStatsConfig[];
    /**
     * 目标选择器
     */
    protected typeSelector: PdVisCascader;
    /**
     * 创建统计配置项的选项字串
     * @param {{k: number | string; v: string}[]} options - 选项数据
     * @param {string} key - 配置项key
     * @param {boolean} multi - 是否多选
     * @return {string} 统计配置项的选项字串
     */
    protected static createOptionItem(options: {
        k: number | string;
        v: string;
    }[], key: string, multi?: boolean): string;
    /**
     * 构造方法
     * @param {PdSDKPluginStatsSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKPluginStatsSettings);
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
    getStatsConfig(): PdSDKPluginStatsConfig[];
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 清空配置项的选择内容
     */
    protected clearSettings(): void;
    protected createSettingsPanel(): void;
    /**
     * 获取配置项的选择内容
     * @return {PdSDKPluginStatsConfig} 配置项的选择内容
     */
    protected getSettings(): PdSDKPluginStatsConfig;
    /**
     * 绑定编辑事件
     */
    protected initEditEvent(): void;
    /**
     * 初始化配置
     * @param {PdSDKPluginStatsSettings} settings - 用户定义配置
     * @return {PdSDKPluginStatsSettings} 配置
     */
    protected initSettings(settings: PdSDKPluginStatsSettings): PdSDKPluginStatsSettings;
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
     * 渲染图统计结果
     */
    protected rendererData(): void;
    /**
     * 设置配置项的选择内容
     * @param {PdSDKPluginStatsConfig} settings 配置项的选择内容
     */
    protected setSettings(settings: PdSDKPluginStatsConfig): void;
    /**
     * 更新统计配置项
     */
    protected updateSettings(): boolean;
    /**
     * 取消绑定事件
     */
    protected unbindEvent(): void;
    /**
     * 更新配置按钮选项
     */
    protected updateAttsOptions(type?: string): void;
    /**
     * 更新配置按钮选项
     */
    protected updateOptions(): void;
}
