import { PdSDKPluginPrompt, PdSDKPluginPromptSettings } from '../plugins/prompt/prompt';
import { PdSDKNetChart, PdSDKNetChartPluginSettings, PdSDKNetChartSettings } from '../netchart';
import { PdSDKPluginTimeChart, PdSDKPluginTimeChartSettings } from '../plugins/stats/time-chart';
import { PdSDKPluginEvent, PdSDKPluginEventSettings } from '../plugins/event';
import { PdVisNetChart } from '../../../vis/netchart/netchart';
import { PdVisPluginPage, PdVisPluginPageSettings } from '../../../vis/netchart/plugins/page';
/**
 * SDK 时序插件配置
 */
export interface PdSDKTimingPluginsSettings {
    /**
     *  提示插件
     */
    prompt?: PdSDKNetChartPluginSettings<PdSDKPluginPromptSettings>;
    /**
     *  时间轴插件
     */
    timeChart?: PdSDKNetChartPluginSettings<PdSDKPluginTimeChartSettings>;
    /**
     *  事件插件
     */
    event?: PdSDKNetChartPluginSettings<PdSDKPluginEventSettings>;
    /**
     *  分页插件
     */
    page?: PdSDKNetChartPluginSettings<PdVisPluginPageSettings>;
}
/**
 * SDK 时序配置
 */
export interface PdSDKTimingSettings extends PdSDKNetChartSettings, PdSDKTimingPluginsSettings {
}
/**
 * SDK 时序
 */
export declare abstract class PdSDKTiming<T extends PdVisNetChart> extends PdSDKNetChart<T> {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKTimingSettings;
    /**
     *  配置
     */
    settings: PdSDKTimingSettings;
    /**
     *  时间轴插件实例
     */
    timeChart: PdSDKPluginTimeChart;
    /**
     * 初始化类型
     */
    protected defaultType: string;
    /**
     *  事件插件实例
     */
    protected event: PdSDKPluginEvent;
    /**
     *  分页插件实例
     */
    protected page: PdVisPluginPage;
    /**
     *  提示插件实例
     */
    protected prompt: PdSDKPluginPrompt;
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
     * @param {PdSDKTimingSettings} settings - 用户配置
     * @return {PdSDKTimingSettings} 配置
     */
    protected initSettings(settings: PdSDKTimingSettings): PdSDKTimingSettings;
    /**
     * 更新焦点信息
     */
    protected updateFixedNodes(): void;
}
