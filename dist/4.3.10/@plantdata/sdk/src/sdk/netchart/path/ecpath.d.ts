import { PdVisEcNetChart } from '../../../vis/netchart/impls/ec/ecnetchart';
import { PdSDKEcNetChartHelperSettings } from '../helper/ec/netchart';
import { PdSDKDcEcPath, PdSDKDcEcPathSettings } from './dcecpath';
import { PdVisDcNetChartSettings } from '../../../vis/netchart/impls/dc/dcnetchart';
/**
 * SDK ECharts路径分析配置
 */
export interface PdSDKEcPathSettings extends PdSDKDcEcPathSettings, PdSDKEcNetChartHelperSettings {
    /**
     *  网络关系图配置
     */
    netChartSettings?: PdVisDcNetChartSettings;
}
/**
 * SDK ECharts路径分析
 */
export declare class PdSDKEcPath extends PdSDKDcEcPath<PdVisEcNetChart, PdSDKEcPathSettings> {
    /**
     * 构造方法
     * @param {PdSDKEcPathSettings} settings - 用户定义的配置
     */
    constructor(settings: PdSDKEcPathSettings);
}
