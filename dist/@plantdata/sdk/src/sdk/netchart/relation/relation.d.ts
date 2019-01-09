import { PdSDKNetChart, PdSDKNetChartPluginSettings, PdSDKNetChartSettings } from '../netchart';
import { PdSDKPluginConnects, PdSDKPluginConnectsSettings } from '../plugins/connects/connects';
import { PdSDKPluginStats, PdSDKPluginStatsSettings } from '../plugins/stats/stats';
import { PdSDKPluginRelation, PdSDKPluginRelationSettings } from '../plugins/model/relation';
import { PdVisPluginFilterItemSettings } from '../../../vis/netchart/plugins/filter/filter';
import { PdVisNetChart } from '../../../vis/netchart/netchart';
/**
 * SDK 关联分析插件配置
 */
export interface PdSDKRelationPluginsSettings {
    /**
     *  统计插件
     */
    stats?: PdSDKNetChartPluginSettings<PdSDKPluginStatsSettings>;
    /**
     *  解读插件
     */
    connects?: PdSDKNetChartPluginSettings<PdSDKPluginConnectsSettings>;
    /**
     *  关联插件
     */
    relation?: PdSDKNetChartPluginSettings<PdSDKPluginRelationSettings>;
}
/**
 * SDK 关联分析配置
 */
export interface PdSDKRelationSettings extends PdSDKNetChartSettings, PdSDKRelationPluginsSettings {
}
/**
 * SDK 关联分析
 */
export declare abstract class PdSDKRelation<T extends PdVisNetChart> extends PdSDKNetChart<T> {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKRelationSettings;
    /**
     *  配置
     */
    settings: PdSDKRelationSettings;
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
     *  关联插件实例
     */
    protected relation: PdSDKPluginRelation;
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
     * @param {PdSDKRelationSettings} settings - 用户配置
     * @return {PdSDKRelationSettings} 配置
     */
    protected initSettings(settings: PdSDKRelationSettings): PdSDKRelationSettings;
    /**
     * 更新焦点信息
     */
    protected updateFixedNodes(): void;
}
