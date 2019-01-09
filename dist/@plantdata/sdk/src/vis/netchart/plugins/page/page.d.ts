/// <reference types="jquery" />
import { PdVisPlugin, PdVisPluginSettings } from '../plugin';
import { PdVisChart } from '../../../chart';
/**
 * 分页插件配置
 */
export interface PdVisPluginPageSettings extends PdVisPluginSettings {
    /**
     *  可视化组件
     */
    container?: PdVisChart;
    /**
     * 是否有下一页
     * @param data - 当前数据
     * @return {boolean} 是否有下一页
     */
    hasMore?: (data: any) => boolean;
    /**
     *  页码
     */
    pageNo?: number;
    /**
     *  每页数量
     */
    pageSize?: number;
}
/**
 * 分页插件
 */
export declare class PdVisPluginPage extends PdVisPlugin {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisPluginPageSettings;
    /**
     *  当前页码
     */
    pageNo: number;
    /**
     *  每页数量
     */
    pageSize: number;
    /**
     *  配置
     */
    settings: PdVisPluginPageSettings;
    /**
     *  可视化组件
     */
    protected container: PdVisChart;
    /**
     *  是否点击事件
     */
    protected isPageEvent: boolean;
    /**
     * 构造方法
     * @param {PdVisPluginPageSettings} settings - 用户配置
     */
    constructor(settings?: PdVisPluginPageSettings);
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
     * @param {PdVisPluginPageSettings} settings - 用户定义配置
     * @return {PdVisPluginPageSettings} 配置
     */
    protected initSettings(settings: PdVisPluginPageSettings): PdVisPluginPageSettings;
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
     * 更新上下页按钮状态
     */
    protected updatePageStatus(): void;
    /**
     * 更新每页个数
     */
    protected updatePageNo(pageNo: number): void;
    /**
     * 更新每页个数
     */
    protected updatePageSize(pageSize: number): void;
    /**
     * 取消绑定事件
     */
    protected unbindEvent(): void;
}
