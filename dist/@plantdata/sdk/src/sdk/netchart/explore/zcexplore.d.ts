import { PdVisZcNetChart, PdVisZcNetChartSettings } from '../../../vis/netchart/impls/zc/zcnetchart';
import { PdSDKExplore, PdSDKExploreSettings } from './explore';
import { PdSDKNetChartSettings } from '../netchart';
import { PdSDKZcNetChartHelper } from '../helper/zc/netchart';
/**
 * SDK ZcNetChart图谱探索配置
 */
export interface PdSDKZcExploreSettings extends PdSDKExploreSettings {
    /**
     *  网络关系图配置
     */
    netChartSettings: PdVisZcNetChartSettings;
}
/**
 * SDK ZcNetChart图谱探索
 */
export declare class PdSDKZcExplore extends PdSDKExplore<PdVisZcNetChart> implements PdSDKZcNetChartHelper {
    /**
     * 构造方法
     * @param {PdSDKZcExploreSettings} settings - 用户定义的配置
     */
    constructor(settings: PdSDKZcExploreSettings);
    /**
     * 初始化配置
     * @param {PdSDKNetChartSettings} settings - 用户配置
     * @return {PdSDKNetChartSettings} 配置
     */
    protected initSettings(settings: PdSDKNetChartSettings): PdSDKNetChartSettings;
}
