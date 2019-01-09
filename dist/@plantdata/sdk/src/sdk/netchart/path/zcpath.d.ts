import { PdVisZcNetChart, PdVisZcNetChartSettings } from '../../../vis/netchart/impls/zc/zcnetchart';
import { PdSDKPath, PdSDKPathSettings } from './path';
import { PdSDKZcNetChartHelper } from '../helper/zc/netchart';
/**
 * SDK ZcNetChart路径分析配置
 */
export interface PdSDKZcPathSettings extends PdSDKPathSettings {
    /**
     *  网络关系图配置
     */
    netChartSettings?: PdVisZcNetChartSettings;
}
/**
 * SDK ZcNetChart路径分析
 */
export declare class PdSDKZcPath extends PdSDKPath<PdVisZcNetChart> implements PdSDKZcNetChartHelper {
    /**
     * 构造方法
     * @param {PdSDKZcPathSettings} settings - 用户定义的配置
     */
    constructor(settings: PdSDKZcPathSettings);
    /**
     * 初始化配置
     * @param {PdSDKZcPathSettings} settings - 用户配置
     * @return {PdSDKZcPathSettings} 配置
     */
    protected initSettings(settings: PdSDKZcPathSettings): PdSDKZcPathSettings;
}
