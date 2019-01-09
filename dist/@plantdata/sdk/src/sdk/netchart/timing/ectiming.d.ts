import { PdVisEcNetChart } from '../../../vis/netchart/impls/ec/ecnetchart';
import { PdSDKEcNetChartHelperSettings } from '../helper/ec/netchart';
import { PdSDKDcEcTiming, PdSDKDcEcTimingSettings } from './dcectiming';
import { PdVisDcNetChartSettings } from '../../../vis/netchart/impls/dc/dcnetchart';
/**
 * SDK ECharts时序配置
 */
export interface PdSDKEcTimingSettings extends PdSDKDcEcTimingSettings, PdSDKEcNetChartHelperSettings {
    /**
     *  网络关系图配置
     */
    netChartSettings?: PdVisDcNetChartSettings;
}
/**
 * SDK ECharts时序
 */
export declare class PdSDKEcTiming extends PdSDKDcEcTiming<PdVisEcNetChart, PdSDKEcTimingSettings> {
    /**
     * 构造方法
     * @param {PdSDKEcTimingSettings} settings - 用户定义的配置
     */
    constructor(settings: PdSDKEcTimingSettings);
}
