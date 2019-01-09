import { PdVisEcNetChart, PdVisEcNetChartSettings } from '../../../vis/netchart/impls/ec/ecnetchart';
import { PdSDKEcNetChartHelperSettings } from '../helper/ec/netchart';
import { PdSDKDcEcGraph, PdSDKDcEcGraphSettings } from './dcecgraph';
/**
 * SDK ECharts图谱探索配置
 */
export interface PdSDKEcGraphSettings extends PdSDKDcEcGraphSettings, PdSDKEcNetChartHelperSettings {
    /**
     *  网络关系图配置
     */
    netChartSettings?: PdVisEcNetChartSettings;
}
/**
 * SDK ECharts图谱探索
 */
export declare class PdSDKEcGraph extends PdSDKDcEcGraph<PdVisEcNetChart, PdSDKEcGraphSettings> {
    /**
     * 构造方法
     * @param {PdSDKDcGraphSettings} settings - 用户定义的配置
     */
    constructor(settings: PdSDKEcGraphSettings);
}
