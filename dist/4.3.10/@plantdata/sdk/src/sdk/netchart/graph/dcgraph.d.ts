import { PdVisDcNetChart, PdVisDcNetChartSettings } from '../../../vis/netchart/impls/dc/dcnetchart';
import { PdSDKDcNetChartSettings } from '../helper/dc/netchart';
import { PdSDKDcEcGraph, PdSDKDcEcGraphSettings } from './dcecgraph';
/**
 * SDK D3图谱探索配置
 */
export interface PdSDKDcGraphSettings extends PdSDKDcEcGraphSettings, PdSDKDcNetChartSettings {
    /**
     *  网络关系图配置
     */
    netChartSettings?: PdVisDcNetChartSettings;
}
/**
 * SDK D3图谱探索
 */
export declare class PdSDKDcGraph extends PdSDKDcEcGraph<PdVisDcNetChart, PdSDKDcGraphSettings> {
    /**
     * 构造方法
     * @param {PdSDKDcGraphSettings} settings - 用户定义的配置
     */
    constructor(settings: PdSDKDcGraphSettings);
}
