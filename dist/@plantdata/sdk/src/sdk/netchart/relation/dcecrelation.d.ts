import { PdSDKRelation, PdSDKRelationSettings } from './relation';
import { PdVisPluginToolbar } from '../../../vis/netchart/plugins/toolbox/toolbar/toolbar';
import { PdSDKNetChartHelperSettings, PdSDKNetChartHelper } from '../helper/netchart';
import { PdVisNetChart } from '../../../vis/netchart/netchart';
/**
 * SDK D3/ECharts关联分析配置
 */
export interface PdSDKDcEcRelationSettings extends PdSDKRelationSettings {
}
/**
 * SDK D3/ECharts关联分析
 */
export declare abstract class PdSDKDcEcRelation<T extends PdVisNetChart, V extends PdSDKNetChartHelperSettings> extends PdSDKRelation<T> implements PdSDKNetChartHelper<T> {
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
     * @param {PdSDKDcEcRelationSettings} settings - 用户配置
     * @return {PdSDKDcEcRelationSettings} 配置
     */
    protected initSettings(settings: PdSDKDcEcRelationSettings): PdSDKDcEcRelationSettings;
}
