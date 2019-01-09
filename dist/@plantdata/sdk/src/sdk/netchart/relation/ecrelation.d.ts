import { PdVisEcNetChart } from '../../../vis/netchart/impls/ec/ecnetchart';
import { PdSDKEcNetChartHelperSettings } from '../helper/ec/netchart';
import { PdSDKDcEcRelation, PdSDKDcEcRelationSettings } from './dcecrelation';
import { PdVisDcNetChartSettings } from '../../../vis/netchart/impls/dc/dcnetchart';
/**
 * SDK ECharts关联分析配置
 */
export interface PdSDKEcRelationSettings extends PdSDKDcEcRelationSettings, PdSDKEcNetChartHelperSettings {
    /**
     *  网络关系图配置
     */
    netChartSettings?: PdVisDcNetChartSettings;
}
/**
 * SDK ECharts关联分析
 */
export declare class PdSDKEcRelation extends PdSDKDcEcRelation<PdVisEcNetChart, PdSDKEcRelationSettings> {
    /**
     * 构造方法
     * @param {PdSDKEcRelationSettings} settings - 用户定义的配置
     */
    constructor(settings: PdSDKEcRelationSettings);
}
