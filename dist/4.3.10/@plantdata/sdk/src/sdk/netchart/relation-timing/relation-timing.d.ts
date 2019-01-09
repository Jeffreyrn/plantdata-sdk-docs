import { PdSDKTiming, PdSDKTimingSettings } from '../timing';
import { PdVisNetChart } from '../../../vis/netchart/netchart';
import { PdSDKPluginRelation, PdSDKPluginRelationSettings } from '../plugins/model/relation';
import { PdSDKNetChartPluginSettings, PdSDKNetChartSettings } from '../netchart';
import { PdVisPluginFilterItemSettings } from '../../../vis/netchart/plugins/filter/filter';
/**
 * SDK 时序配置
 */
export interface PdSDKRelationTimingSettings extends PdSDKTimingSettings {
    /**
     *  关联插件
     */
    relation?: PdSDKNetChartPluginSettings<PdSDKPluginRelationSettings>;
}
export declare abstract class PdSDKRelationTiming<T extends PdVisNetChart> extends PdSDKTiming<T> {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKRelationTimingSettings;
    /**
     *  配置
     */
    settings: PdSDKRelationTimingSettings;
    /**
     * 初始化类型
     */
    protected defaultType: string;
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
     * 初始化插件
     */
    protected initPlugins(): void;
    /**
     * 初始化配置
     * @param {PdSDKNetChartSettings} settings - 用户配置
     * @return {PdSDKNetChartSettings} 配置
     */
    protected initSettings(settings: PdSDKNetChartSettings): PdSDKNetChartSettings;
    /**
     * 更新焦点信息
     */
    protected updateFixedNodes(): void;
}
