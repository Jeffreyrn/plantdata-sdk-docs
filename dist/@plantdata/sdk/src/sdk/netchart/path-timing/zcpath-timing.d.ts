import { PdVisZcNetChart, PdVisZcNetChartSettings } from '../../../vis/netchart/impls/zc/zcnetchart';
import { PdSDKPathTiming, PdSDKPathTimingSettings } from './path-timing';
import { PdSDKNetChartSettings } from '../netchart';
import { PdSDKZcNetChartHelper } from '../helper/zc/netchart';
/**
 * SDK ZoomCharts时序配置
 */
export interface PdSDKZcPathTimingSettings extends PdSDKPathTimingSettings {
    /**
     *  网络关系图配置
     */
    netChartSettings: PdVisZcNetChartSettings;
}
/**
 * SDK ZoomCharts时序
 */
export declare class PdSDKZcPathTiming extends PdSDKPathTiming<PdVisZcNetChart> implements PdSDKZcNetChartHelper {
    /**
     * 构造方法
     * @param {PdSDKZcTimingSettings} settings - 用户定义的配置
     */
    constructor(settings: PdSDKZcPathTimingSettings);
    /**
     * 初始化配置
     * @param {PdSDKNetChartSettings} settings - 用户配置
     * @return {PdSDKNetChartSettings} 配置
     */
    protected initSettings(settings: PdSDKNetChartSettings): PdSDKNetChartSettings;
}
