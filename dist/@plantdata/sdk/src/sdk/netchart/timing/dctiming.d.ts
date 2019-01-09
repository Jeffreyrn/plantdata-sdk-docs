import { PdVisDcNetChart, PdVisDcNetChartSettings } from '../../../vis/netchart/impls/dc/dcnetchart';
import { PdSDKDcNetChartSettings } from '../helper/dc/netchart';
import { PdSDKDcEcTiming, PdSDKDcEcTimingSettings } from './dcectiming';
/**
 * SDK D3时序配置
 */
export interface PdSDKDcTimingSettings extends PdSDKDcEcTimingSettings, PdSDKDcNetChartSettings {
    /**
     *  网络关系图配置
     */
    netChartSettings?: PdVisDcNetChartSettings;
}
/**
 * SDK D3时序
 */
export declare class PdSDKDcTiming extends PdSDKDcEcTiming<PdVisDcNetChart, PdSDKDcTimingSettings> {
    /**
     * 构造方法
     * @param {PdSDKDcTimingSettings} settings - 用户定义的配置
     */
    constructor(settings: PdSDKDcTimingSettings);
}
