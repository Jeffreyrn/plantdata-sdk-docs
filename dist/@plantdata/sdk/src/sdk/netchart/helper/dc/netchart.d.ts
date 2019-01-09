import { PdSDKNetChartSettings } from '../../netchart';
import { PdSDKNetChartHelper, PdSDKNetChartHelperSettings } from '../netchart';
import { PdVisDcNetChart, PdVisDcNetChartSettings } from '../../../../vis/netchart/impls/dc/dcnetchart';
/**
 * SDK D3网络关系图助手配置
 */
export interface PdSDKDcNetChartSettings extends PdSDKNetChartHelperSettings {
    /**
     *  网络关系图配置
     */
    netChartSettings?: PdVisDcNetChartSettings;
}
/**
 * SDK D3网络关系图助手
 */
export declare abstract class PdSDKDcNetChartHelper extends PdSDKNetChartHelper<PdVisDcNetChart> {
    /**
     * 初始化网络关系图配置
     * @param {PdSDKNetChartSettings} settings - 原网络关系图配置
     * @return {PdSDKNetChartSettings} 更新后的网络关系图配置
     */
    initNetChartSettings(settings: PdSDKNetChartSettings): PdSDKNetChartSettings;
}
