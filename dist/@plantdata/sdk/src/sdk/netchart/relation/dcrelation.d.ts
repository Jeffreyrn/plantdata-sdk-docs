import { PdVisDcNetChart, PdVisDcNetChartSettings } from '../../../vis/netchart/impls/dc/dcnetchart';
import { PdSDKDcNetChartSettings } from '../helper/dc/netchart';
import { PdSDKDcEcRelation, PdSDKDcEcRelationSettings } from './dcecrelation';
/**
 * SDK D3关联分析配置
 */
export interface PdSDKDcRelationSettings extends PdSDKDcEcRelationSettings, PdSDKDcNetChartSettings {
    /**
     *  网络关系图配置
     */
    netChartSettings?: PdVisDcNetChartSettings;
}
/**
 * SDK D3关联分析
 */
export declare class PdSDKDcRelation extends PdSDKDcEcRelation<PdVisDcNetChart, PdSDKDcRelationSettings> {
    /**
     * 构造方法
     * @param {PdSDKDcRelationSettings} settings - 用户定义的配置
     */
    constructor(settings: PdSDKDcRelationSettings);
}
