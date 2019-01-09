import { PdVisZcNetChart, PdVisZcNetChartSettings } from '../../../vis/netchart/impls/zc/zcnetchart';
import { PdSDKRelation, PdSDKRelationSettings } from './relation';
import { PdSDKZcNetChartHelper } from '../helper/zc/netchart';
/**
 * SDK ZcNetChart关联分析配置
 */
export interface PdSDKZcRelationSettings extends PdSDKRelationSettings {
    /**
     *  网络关系图配置
     */
    netChartSettings?: PdVisZcNetChartSettings;
}
/**
 * SDK ZcNetChart关联分析
 */
export declare class PdSDKZcRelation extends PdSDKRelation<PdVisZcNetChart> implements PdSDKZcNetChartHelper {
    /**
     * 构造方法
     * @param {PdSDKZcRelationSettings} settings - 用户定义的配置
     */
    constructor(settings: PdSDKZcRelationSettings);
    /**
     * 初始化配置
     * @param {PdSDKZcRelationSettings} settings - 用户配置
     * @return {PdSDKZcRelationSettings} 配置
     */
    protected initSettings(settings: PdSDKZcRelationSettings): PdSDKZcRelationSettings;
}
