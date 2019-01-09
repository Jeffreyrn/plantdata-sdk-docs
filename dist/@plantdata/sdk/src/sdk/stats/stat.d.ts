/// <reference types="echarts" />
/// <reference types="jquery" />
import * as echarts from 'echarts/lib/echarts';
import { PdSelector } from '../../common/common';
import { PdSDKBaseSettings } from '../utils/utils';
import { PdComponent, PdComponentSettings } from '../../core/component';
/**
 * 统计配置
 */
export interface PdSDKStatSettings extends PdSDKBaseSettings, PdComponentSettings {
    /**
     *  XY轴互换
     */
    changeXY?: boolean;
    /**
     *  图表设置
     */
    chartSettings?: echarts.EChartOption;
    /**
     *  图表系列的颜色
     */
    color?: string[];
    /**
     * 预置数据
     */
    data?: any;
    /**
     *  统计生成的容器
     */
    selector?: PdSelector;
    /**
     *  系列名映射
     */
    seriesName?: {
        [key: string]: string;
    };
    /**
     *  图表类型
     */
    type: 'line' | 'bar' | 'pie' | 'wordCloud';
}
/** SDK统计*/
export declare abstract class PdSDKStat extends PdComponent {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKStatSettings;
    /**
     *  图表对象
     */
    chart: echarts.ECharts;
    /**
     *  配置
     */
    settings: PdSDKStatSettings;
    /**
     *  统计数据
     */
    protected data: any;
    /**
     * 图表自适应
     */
    protected chartResize: () => void;
    /**
     * 构造方法
     * @param {PdSDKStatSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKStatSettings);
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 加载数据
     * @return {Promise<any>} 异步加载请求实例
     */
    load(): Promise<any>;
    resize(): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /** 绘制图表*/
    protected abstract drawChart(): void;
    /**
     * 初始化配置
     * @param {PdSDKStatSettings} settings - 用户定义配置
     * @return {PdSDKStatSettings} 配置
     */
    protected initSettings(settings: PdSDKStatSettings): any;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
}
