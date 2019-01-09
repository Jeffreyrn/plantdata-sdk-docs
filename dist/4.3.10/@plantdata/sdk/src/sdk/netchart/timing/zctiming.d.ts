import { PdVisZcNetChart, PdVisZcNetChartSettings } from '../../../vis/netchart/impls/zc/zcnetchart';
import { PdSDKTiming, PdSDKTimingSettings } from './timing';
import { PdSDKZcNetChartHelper } from '../helper/zc/netchart';
/**
 * SDK ZcNetChart时序配置
 */
export interface PdSDKZcTimingSettings extends PdSDKTimingSettings {
    /**
     *  网络关系图配置
     */
    netChartSettings?: PdVisZcNetChartSettings;
}
/**
 * SDK ZcNetChart时序
 */
export declare class PdSDKZcTiming extends PdSDKTiming<PdVisZcNetChart> implements PdSDKZcNetChartHelper {
    /**
     * 构造方法
     * @param {PdSDKZcTimingSettings} settings - 用户定义的配置
     */
    constructor(settings: PdSDKZcTimingSettings);
    /**
     * 初始化配置
     * @param {PdSDKZcTimingSettings} settings - 用户配置
     * @return {PdSDKZcTimingSettings} 配置
     */
    protected initSettings(settings: PdSDKZcTimingSettings): PdSDKZcTimingSettings;
}
