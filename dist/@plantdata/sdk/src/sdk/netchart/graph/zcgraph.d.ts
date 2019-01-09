import { PdVisZcNetChart, PdVisZcNetChartSettings } from '../../../vis/netchart/impls/zc/zcnetchart';
import { PdSDKGraph, PdSDKGraphSettings } from './graph';
import { PdSDKZcNetChartHelper } from '../helper/zc/netchart';
/**
 * SDK ZcNetChart图谱探索配置
 */
export interface PdSDKZcGraphSettings extends PdSDKGraphSettings {
    /**
     *  网络关系图配置
     */
    netChartSettings?: PdVisZcNetChartSettings;
}
/**
 * SDK ZcNetChart图谱探索
 */
export declare class PdSDKZcGraph extends PdSDKGraph<PdVisZcNetChart> implements PdSDKZcNetChartHelper {
    /**
     * 构造方法
     * @param {PdSDKZcGraphSettings} settings - 用户定义的配置
     */
    constructor(settings: PdSDKZcGraphSettings);
    /**
     * 初始化配置
     * @param {PdSDKZcGraphSettings} settings - 用户配置
     * @return {PdSDKZcGraphSettings} 配置
     */
    protected initSettings(settings: PdSDKZcGraphSettings): PdSDKZcGraphSettings;
}
