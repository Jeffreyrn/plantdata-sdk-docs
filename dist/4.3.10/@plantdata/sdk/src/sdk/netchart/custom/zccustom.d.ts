import { PdVisZcNetChart, PdVisZcNetChartSettings } from '../../../vis/netchart/impls/zc/zcnetchart';
import { PdSDKCustom, PdSDKCustomSettings } from './custom';
import { PdSDKNetChartSettings } from '../netchart';
import { PdSDKZcNetChartHelper } from '../helper/zc/netchart';
/**
 * SDK ZcNetChart图谱探索配置
 */
export interface PdSDKZcCustomSettings extends PdSDKCustomSettings {
    /**
     *  网络关系图配置
     */
    netChartSettings: PdVisZcNetChartSettings;
}
/**
 * SDK ZcNetChart图谱探索
 */
export declare class PdSDKZcCustom extends PdSDKCustom<PdVisZcNetChart> implements PdSDKZcNetChartHelper {
    /**
     * 构造方法
     * @param {PdSDKZcCustomSettings} settings - 用户定义的配置
     */
    constructor(settings: PdSDKZcCustomSettings);
    /**
     * 初始化配置
     * @param {PdSDKNetChartSettings} settings - 用户配置
     * @return {PdSDKNetChartSettings} 配置
     */
    protected initSettings(settings: PdSDKNetChartSettings): PdSDKNetChartSettings;
}
