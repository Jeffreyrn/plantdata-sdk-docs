/// <reference types="jquery" />
import * as echarts from 'echarts';
import { PdSelector } from '../../../common/common';
import { PdSDKKGSettings } from '../../utils/utils';
import { PdComponent, PdComponentSettings } from '../../../core/component';
/**
 * 统计配置
 */
export interface PdSDKConceptVisualizationSettings extends PdSDKKGSettings, PdComponentSettings {
    /**
     * 预置包含属性的数据
     */
    allData?: any;
    /**
     *  属性颜色
     */
    attributeColor?: string;
    /**
     *  图表水平设置
     */
    chartHorizontalSettings?: echarts.EChartOption;
    /**
     *  图表垂直设置
     */
    chartVerticalSettings?: echarts.EChartOption;
    /**
     *  概念颜色
     */
    conceptColor?: string;
    /**
     *  预置不包含属性的数据
     */
    conceptData?: echarts.EChartOption;
    /**
     *  是否显示属性信息
     */
    showRelation?: boolean;
    /**
     *  布局朝向
     */
    orient?: 'horizontal' | 'vertical';
    /**
     *  系列名映射
     */
    seriesName?: {
        [key: string]: string;
    };
    /**
     *  统计生成的容器
     */
    selector?: PdSelector;
}
/** SDK统计*/
export declare class PdSDKConceptVisualization extends PdComponent {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKConceptVisualizationSettings;
    /**
     *  图表对象
     */
    chart: echarts.ECharts;
    /**
     *  配置
     */
    settings: PdSDKConceptVisualizationSettings;
    /**
     *  包含属性信息的数据
     */
    protected allData: any;
    /**
     *  不包含属性信息的数据
     */
    protected conceptData: any;
    /**
     * 图表自适应
     */
    protected chartResize: () => void;
    /**
     * 构造方法
     * @param {PdSDKConceptVisualizationSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKConceptVisualizationSettings);
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 加载数据
     * @return {Promise<any>} 异步加载请求实例
     */
    load(): Promise<any>;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 绘制图表
     */
    protected drawChart(): void;
    /**
     * 处理数据
     * @param data - 请求的原始待处理数据
     */
    protected handleData(data: any): void;
    /**
     * 初始化配置
     * @param {PdSDKConceptVisualizationSettings} settings - 用户定义配置
     * @return {PdSDKConceptVisualizationSettings} 配置
     */
    protected initSettings(settings: PdSDKConceptVisualizationSettings): any;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 获取最小高度
     * @param treeData
     */
    protected getMinHeight(treeData: any): string;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 取消绑定事件
     * */
    protected unbindEvent(): void;
}
