import { PdVisPluginPage, PdVisPluginPageSettings } from '../../../vis/netchart/plugins/page/page';
import { PdSDKNetChart, PdSDKNetChartPluginSettings, PdSDKNetChartSettings } from '../netchart';
import { PdVisNetChart } from '../../../vis/netchart/netchart';
import { PdVisPluginFilterItemSettings } from '../../../vis/netchart/plugins/filter/filter';
import { PdEventData } from '../../../core/event';
import { PdSDKPluginRule, PdSDKPluginRuleSettings, PdVisPluginRuleItemSettings } from '../plugins/rule/rule';
import { PdSDKPluginStatsChart, PdSDKPluginStatsChartSettings } from '../plugins/stats/stats-chart/stats-chart';
import { PdSDKPluginExplore, PdSDKPluginExploreSettings } from '../plugins/model/explore';
/**
 * SDK 图谱探索插件配置
 */
export interface PdSDKExplorePluginsSettings {
    /**
     *  提示插件
     */
    prompt?: PdSDKNetChartPluginSettings<PdSDKPluginExploreSettings>;
    /**
     *  分页插件
     */
    page?: PdSDKNetChartPluginSettings<PdVisPluginPageSettings>;
    /**
     *  规则插件
     */
    rule?: PdSDKNetChartPluginSettings<PdSDKPluginRuleSettings>;
    /**
     *  统计图表插件
     */
    statsChart?: PdSDKNetChartPluginSettings<PdSDKPluginStatsChartSettings>;
}
/**
 * SDK 图谱探索配置
 */
export interface PdSDKExploreSettings extends PdSDKNetChartSettings, PdSDKExplorePluginsSettings {
}
/**
 * SDK 图谱探索
 */
export declare abstract class PdSDKExplore<T extends PdVisNetChart> extends PdSDKNetChart<T> {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKExploreSettings;
    /**
     *  配置
     */
    settings: PdSDKExploreSettings;
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
    protected prompt: PdSDKPluginExplore;
    /**
     *  规则插件实例
     */
    protected rule: PdSDKPluginRule;
    /**
     *  统计图表插件实例
     */
    protected statsChart: PdSDKPluginStatsChart;
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
     * 处理图数据
     * @param data - 原始图数据
     * @return {any} 满足网络关系图要求的图数据
     */
    protected dealGraphData(data: any): any;
    /**
     * 销毁插件
     */
    protected destroyPlugins(): void;
    /**
     * 生成规则类型的Map
     * @return {{[p: number]: PdVisPluginRuleItemSettings}} 规则类型
     */
    protected getRuleMap(): {
        [key: number]: PdVisPluginRuleItemSettings;
    };
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
     * @param {PdSDKExploreSettings} settings - 用户配置
     * @return {PdSDKExploreSettings} 配置
     */
    protected initSettings(settings: PdSDKExploreSettings): PdSDKExploreSettings;
    /**
     * 更新焦点信息
     */
    protected updateFixedNodes(): void;
    /**
     * 更新边图例
     */
    protected updateLinkLegend(): void;
}
