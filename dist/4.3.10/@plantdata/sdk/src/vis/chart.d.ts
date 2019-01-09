import { PdContainer, PdContainerSettings } from '../container/container';
import { PdSelector } from '../common/common';
import { PdTabPanelChildSettings } from '../container/panels/tab/tab';
/**
 *  自定义可视化组件配置参数类型
 */
export declare type PdVisChartTypeUnion = string | {
    normal: string;
    emphasis: string;
};
/**
 * 图表组件配置
 */
export interface PdVisChartSettings extends PdContainerSettings {
    /**
     *  图表数据加载方法
     * @param {PdVisChart} self - 可视化组件实例
     * @param params - 请求参数
     * @return {Promise<any>} - 异步请求实例
     */
    loader?: (self: PdVisChart, params: any) => Promise<any>;
    /**
     * 添加新数据之前执行的方法
     * @param data - 处理前执行的方法
     * @return data - 处理后的数据
     */
    beforeAddNewData?: (data: any, lp: PdVisChartLoadParams) => any;
}
/**
 * 当前视图加载参数
 */
export interface PdVisChartLoadParams {
    /**
     *  唯一标识
     */
    id: string | number;
    /**
     *  其他参数
     */
    [key: string]: any;
}
/**
 * 缓存数据
 */
export interface PdVisChartCacheData {
    /**
     *  加载时的参数
     */
    loadParams: PdVisChartLoadParams;
    /**
     *  数据
     */
    data: any;
}
/**
 * 图表组件
 */
export declare abstract class PdVisChart extends PdContainer {
    /**
     *  配置
     */
    settings: PdVisChartSettings;
    /**
     *  图表插件实例
     */
    chart: any;
    /**
     *  当前应用数据
     */
    data: any;
    /**
     *  数据历史当前位置
     */
    historyCursor: number;
    /**
     *  历史数据
     */
    historyList: PdVisChartCacheData[];
    /**
     *  数据是否加载中
     */
    inLoading: boolean;
    /**
     *  当前加载参数
     */
    loadParams: PdVisChartLoadParams;
    /**
     *  是否启用工具栏
     */
    toolbarEnable: boolean;
    /**
     *  缓存的数据
     */
    protected cacheList: PdVisChartCacheData[];
    /**
     * 视图
     */
    protected view: {
        [key: string]: string;
    };
    /**
     * 添加新的数据
     * @param data - 新的数据
     * @param {PdVisChartLoadParams} lp - 参数
     */
    addData(data: any, lp: PdVisChartLoadParams): void;
    /**
     * 添加视图
     * @param child - 面板内容
     * @param {string} view - 视图标识
     * @param settings - 面板配置
     */
    addViewPanel(child: PdSelector, view: string, settings: PdTabPanelChildSettings): void;
    /**
     * 返回上一部
     */
    back(): void;
    /**
     * 清除数据
     */
    clearData(): void;
    /**
     * 全屏展示
     */
    fullscreen(): void;
    /**
     * 获取所有历史数据
     * @return {PdVisChartCacheData[]} 历史数据
     */
    getHistoryData(): PdVisChartCacheData[];
    /**
     * 获取数据
     * @return {any} 数据
     */
    abstract getData(): any;
    /**
     * 获取单条历史数据
     * @return {PdVisChartCacheData} 历史数据
     */
    getHistory(i?: number): PdVisChartCacheData;
    /**
     * 获取当前加载参数
     * @return {PdVisChartLoadParams} 当前加载参数
     */
    getLoadParams(): PdVisChartLoadParams;
    /**
     * 跳转到指定的历史位置
     * @param {number} i - 历史数据所在位置
     */
    goHistory(i: number): void;
    /**
     * 加载数据
     * @param settings - 请求相关的配置
     */
    abstract load(settings: any): void;
    /**
     * 重新加载数据
     */
    abstract reload(): void;
    /**
     * 重置图表
     */
    abstract resize(): void;
    /**
     * 显示视图
     * @param {string} view - 视图标识
     */
    showView(view: string): void;
    /**
     * 显示视图面板
     * @param {string} view - 视图标识
     */
    showViewPage(view: string): void;
    /**
     * 更新图表
     */
    updateChart(): void;
    /**
     * 更新数据
     */
    abstract updateData(): void;
    /**
     * 更新样式
     */
    abstract updateStyle(): void;
    /**
     * 加载数据的请求
     * @param {(self: PdVisChart, lp: PdVisChartLoadParams) => Promise<any>} loader - 数据加载的方法
     * @param {PdVisChartLoadParams} lp - 数据请求的相关参数
     * @return {Promise<any>} 数据加载的Promise
     */
    protected ajaxLoad(loader: (self: PdVisChart, lp: PdVisChartLoadParams) => Promise<any>, lp?: PdVisChartLoadParams): Promise<any>;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 创建历史数据
     */
    protected buildHistoryData(): PdVisChartCacheData;
    /**
     * 缓存数据
     */
    protected cacheData(): void;
    /**
     * 绘制图表
     */
    protected draw(): void;
    /**
     * 渲染缓存的数据
     * @param {PdVisChartCacheData} history - 缓存的数据
     */
    protected drawCacheData(history: PdVisChartCacheData): void;
    /**
     * 渲染新获取的数据
     * @param data - 新获取的数据
     * @param {PdVisChartLoadParams} lp - 加载参数
     */
    protected drawNewData(data: any, lp: PdVisChartLoadParams): void;
    /**
     * 初始化图表插件
     */
    protected abstract initChart(): void;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 预处理数据
     */
    protected preprocessData(): void;
    /**
     * 设置当前数据
     * @param data - 需要展示的数据
     */
    protected setData(data: any): void;
}
