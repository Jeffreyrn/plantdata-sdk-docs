import { PdSDKTiming, PdSDKTimingSettings } from '../timing';
import { PdVisNetChart } from '../../../vis/netchart/netchart';
import { PdSDKPluginPath, PdSDKPluginPathSettings } from '../plugins/model/path';
import { PdSDKNetChartPluginSettings, PdSDKNetChartSettings } from '../netchart';
import { PdVisPluginFilterItemSettings } from '../../../vis/netchart/plugins/filter/filter';
/**
 * SDK 时序配置
 */
export interface PdSDKPathTimingSettings extends PdSDKTimingSettings {
    /**
     *  路径插件
     */
    path?: PdSDKNetChartPluginSettings<PdSDKPluginPathSettings>;
}
export declare abstract class PdSDKPathTiming<T extends PdVisNetChart> extends PdSDKTiming<T> {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPathTimingSettings;
    /**
     *  配置
     */
    settings: PdSDKPathTimingSettings;
    /**
     * 初始化类型
     */
    protected defaultType: string;
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
