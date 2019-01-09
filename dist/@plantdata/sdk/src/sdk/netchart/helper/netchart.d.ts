import { PdVisNetChart } from '../../../vis/netchart';
import { PdSDKNetChart, PdSDKNetChartPluginSettings, PdSDKNetChartSettings } from '../netchart';
import { PdVisPluginToolbarSettings } from '../../../vis/netchart/plugins/toolbox/toolbar/toolbar';
/**
 * SDK网络关系图助手配置
 */
export interface PdSDKNetChartHelperSettings extends PdSDKNetChartSettings {
    /**
     *  工具栏插件
     */
    toolbar?: PdSDKNetChartPluginSettings<PdVisPluginToolbarSettings>;
}
/**
 * SDK网络关系图助手
 */
export declare abstract class PdSDKNetChartHelper<T extends PdVisNetChart> extends PdSDKNetChart<T> {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKNetChartHelperSettings;
    /**
     * 初始化网络关系图配置
     * @param {PdSDKNetChartSettings} settings - 原网络关系图配置
     * @return {PdSDKNetChartSettings} 更新后的网络关系图配置
     */
    initNetChartSettings(settings: PdSDKNetChartSettings): PdSDKNetChartSettings;
}
