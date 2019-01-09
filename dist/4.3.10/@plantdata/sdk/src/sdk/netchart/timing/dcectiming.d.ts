import { PdSDKTiming, PdSDKTimingSettings } from './timing';
import { PdVisPluginToolbar } from '../../../vis/netchart/plugins/toolbox/toolbar/toolbar';
import { PdSDKNetChartHelperSettings, PdSDKNetChartHelper } from '../helper/netchart';
import { PdVisNetChart } from '../../../vis/netchart/netchart';
/**
 * SDK D3/ECharts时序配置
 */
export interface PdSDKDcEcTimingSettings extends PdSDKTimingSettings {
}
/**
 * SDK D3/ECharts时序
 */
export declare abstract class PdSDKDcEcTiming<T extends PdVisNetChart, V extends PdSDKNetChartHelperSettings> extends PdSDKTiming<T> implements PdSDKNetChartHelper<T> {
    /**
     *  网络关系图实例
     */
    netChart: T;
    /**
     *  配置
     */
    settings: V;
    /**
     *  工具栏插件实例
     */
    toolbar: PdVisPluginToolbar;
    /**
     * 初始化插件
     */
    protected initPlugins(): void;
    /**
     * 初始化配置
     * @param {PdSDKDcEcTimingSettings} settings - 用户配置
     * @return {PdSDKDcEcTimingSettings} 配置
     */
    protected initSettings(settings: PdSDKDcEcTimingSettings): PdSDKDcEcTimingSettings;
}
