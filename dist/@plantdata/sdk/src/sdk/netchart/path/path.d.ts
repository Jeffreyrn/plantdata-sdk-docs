import { PdSDKNetChart, PdSDKNetChartPluginSettings, PdSDKNetChartSettings } from '../netchart';
import { PdSDKPluginConnects, PdSDKPluginConnectsSettings } from '../plugins/connects/connects';
import { PdSDKPluginStats, PdSDKPluginStatsSettings } from '../plugins/stats/stats';
import { PdSDKPluginPath, PdSDKPluginPathSettings } from '../plugins/model/path';
import { PdVisPluginFilterItemSettings } from '../../../vis/netchart/plugins/filter/filter';
import { PdVisNetChart } from '../../../vis/netchart/netchart';
/**
 * SDK 路径分析插件配置
 */
export interface PdSDKPathPluginsSettings {
    /**
     *  统计插件
     */
    stats?: PdSDKNetChartPluginSettings<PdSDKPluginStatsSettings>;
    /**
     *  解读插件
     */
    connects?: PdSDKNetChartPluginSettings<PdSDKPluginConnectsSettings>;
    /**
     *  路径插件
     */
    path?: PdSDKNetChartPluginSettings<PdSDKPluginPathSettings>;
}
/**
 * SDK 路径分析配置
 */
export interface PdSDKPathSettings extends PdSDKNetChartSettings, PdSDKPathPluginsSettings {
}
/**
 * SDK 路径分析
 */
export declare abstract class PdSDKPath<T extends PdVisNetChart> extends PdSDKNetChart<T> {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPathSettings;
    /**
     *  配置
     */
    settings: PdSDKPathSettings;
    /**
     * 初始化类型
     */
    protected defaultType: string;
    /**
     *  统计插件实例
     */
    protected stats: PdSDKPluginStats;
    /**
     *  解读插件实例
     */
    protected connects: PdSDKPluginConnects;
    /**
     *  路径插件实例
     */
    protected path: PdSDKPluginPath;
    /**
     * 创建过滤配置
     * @param {PdVisPluginFilterItemSettings[]} items - 用户定义过滤选项配置
     * @return {PdVisPluginFilterItemSettings[]} 合并后的过滤选项
     */
    protected buildFilter(items: PdVisPluginFilterItemSettings[]): PdVisPluginFilterItemSettings[];
    /**
     * 生成数据异步加载配置
     * @param lp - 数据加载参数
     * @return {{queryData: any; formData: any; url: string}} 数据异步加载配置
     */
    protected buildLoaderParams(lp: any): {
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
     * @param {PdSDKPathSettings} settings - 用户配置
     * @return {PdSDKPathSettings} 配置
     */
    protected initSettings(settings: PdSDKPathSettings): PdSDKPathSettings;
    /**
     * 更新焦点信息
     */
    protected updateFixedNodes(): void;
}
