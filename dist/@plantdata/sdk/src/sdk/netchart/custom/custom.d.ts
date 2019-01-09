import { PdVisPluginPage, PdVisPluginPageSettings } from '../../../vis/netchart/plugins/page/page';
import { PdSDKNetChart, PdSDKNetChartPluginSettings, PdSDKNetChartSettings } from '../netchart';
import { PdVisNetChart } from '../../../vis/netchart/netchart';
import { PdVisPluginFilterItemSettings } from '../../../vis/netchart/plugins/filter/filter';
import { PdEventData } from '../../../core/event';
import { PdSDKPluginStatsChart, PdSDKPluginStatsChartSettings } from '../plugins/stats/stats-chart/stats-chart';
import { PdSDKPluginCustom, PdSDKPluginCustomSettings } from '../plugins/model/custom';
import { PdSDKPluginTimeChart, PdSDKPluginTimeChartSettings } from '../plugins/stats';
/**
 * SDK 图谱探索插件配置
 */
export interface PdSDKCustomPluginsSettings {
    /**
     *  提示插件
     */
    prompt?: PdSDKNetChartPluginSettings<PdSDKPluginCustomSettings>;
    /**
     *  分页插件
     */
    page?: PdSDKNetChartPluginSettings<PdVisPluginPageSettings>;
    /**
     *  统计图表插件
     */
    statsChart?: PdSDKNetChartPluginSettings<PdSDKPluginStatsChartSettings>;
    /**
     *  时间轴插件
     */
    timeChart?: PdSDKNetChartPluginSettings<PdSDKPluginTimeChartSettings>;
}
/**
 * SDK 图谱探索配置
 */
export interface PdSDKCustomSettings extends PdSDKNetChartSettings, PdSDKCustomPluginsSettings {
    urlList?: {
        graph: string;
        path: string;
        relation: string;
    };
}
/**
 * SDK 图谱探索
 */
export declare abstract class PdSDKCustom<T extends PdVisNetChart> extends PdSDKNetChart<T> {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKCustomSettings;
    /**
     *  配置
     */
    settings: PdSDKCustomSettings;
    /**
     * 初始化类型
     */
    protected defaultType: string;
    /**
     *  分页插件实例
     */
    protected page: PdVisPluginPage;
    /**
     *  提示插件实例
     */
    protected prompt: PdSDKPluginCustom;
    /**
     *  统计图表插件实例
     */
    protected statsChart: PdSDKPluginStatsChart;
    /**
     *  时间轴插件实例
     */
    protected timeChart: PdSDKPluginTimeChart;
    /**
     * loadParams更新之后执行的方法
     * @params {PdEventData} data - 事件数据
     */
    protected loadParamsUpdate(data: PdEventData): void;
    /**
     * 创建过滤配置
     * @param {PdVisPluginFilterItemSettings[]} items - 用户定义过滤选项配置
     * @return {PdVisPluginFilterItemSettings[]} 合并后的过滤选项
     */
    protected buildFilter(items: PdVisPluginFilterItemSettings[]): PdVisPluginFilterItemSettings[];
    /**
     * 生成数据异步加载配置
     * @param loadParams - 数据加载参数
     * @return {{queryData: any; formData: any; url: string}} 数据异步加载配置
     */
    protected buildLoaderParams(loadParams: any): {
        queryData: any;
        formData: any;
        url: string;
    };
    /**
     * 销毁插件
     */
    protected destroyPlugins(): void;
    /**
     * 初始化图谱成功执行的方法
     * @param {any} data 初始化图谱返回的数据
     */
    protected graphInitSuccess(data: any): void;
    /**
     * 初始化网络关系图
     */
    protected initNetChart(): void;
    /**
     * 初始化插件
     */
    protected initPlugins(): void;
    /**
     * 初始化配置
     * @param {PdSDKCustomSettings} settings - 用户配置
     * @return {PdSDKCustomSettings} 配置
     */
    protected initSettings(settings: PdSDKCustomSettings): PdSDKCustomSettings;
    /**
     * 更新焦点信息
     */
    protected updateFixedNodes(): void;
}
