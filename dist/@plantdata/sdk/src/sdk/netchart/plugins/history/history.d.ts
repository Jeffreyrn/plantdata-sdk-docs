import { PdVisPluginHistory, PdVisPluginHistorySettings } from '../../../../vis/netchart/plugins/index';
import { PdVisChartCacheData } from '../../../../vis/chart';
import { PdSDKPluginSettings } from '../plugin';
/**
 *  历史插件配置
 */
export interface PdSDKPluginHistorySettings extends PdSDKPluginSettings, PdVisPluginHistorySettings {
}
/**
 * 历史插件
 */
export declare class PdSDKPluginHistory extends PdVisPluginHistory {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPluginHistorySettings;
    /**
     *  配置
     */
    settings: PdSDKPluginHistorySettings;
    /**
     * 构造方法
     * @param {PdSDKPluginHistorySettings} settings - 用户配置
     */
    constructor(settings?: PdSDKPluginHistorySettings);
    /**
     * 获取插件的唯一标识
     */
    getPluginType(): string;
    /**
     * 渲染单条历史数据的方法
     * @param {PdVisChartCacheData} history - 单条历史数据
     * @param {boolean} isSelected - 是否当前显示数据
     * @return {string} 单条历史数据的字串
     */
    protected drawItem(history: PdVisChartCacheData, isSelected: boolean): string;
}
