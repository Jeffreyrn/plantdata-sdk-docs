import { PdSDKNetChartSettings } from '../../netchart';
import { PdSDKNetChartHelper, PdSDKNetChartHelperSettings } from '../netchart';
import { PdVisEcNetChart, PdVisEcNetChartSettings } from '../../../../vis/netchart/impls/ec/ecnetchart';
/**
 * SDK ECharts网络关系图助手配置
 */
export interface PdSDKEcNetChartHelperSettings extends PdSDKNetChartHelperSettings {
    /**
     *  网络关系图配置
     */
    netChartSettings?: PdVisEcNetChartSettings;
}
/**
 * SDK ECharts网络关系图助手
 */
export declare abstract class PdSDKEcNetChartHelper extends PdSDKNetChartHelper<PdVisEcNetChart> {
    /**
     * 初始化网络关系图配置
     * @param {PdSDKNetChartSettings} settings - 原网络关系图配置
     * @return {PdSDKNetChartSettings} 更新后的网络关系图配置
     */
    initNetChartSettings(settings: PdSDKNetChartSettings): PdSDKNetChartSettings;
}
