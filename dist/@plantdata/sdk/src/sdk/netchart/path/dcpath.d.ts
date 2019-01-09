import { PdVisDcNetChart, PdVisDcNetChartSettings } from '../../../vis/netchart/impls/dc/dcnetchart';
import { PdSDKDcNetChartSettings } from '../helper/dc/netchart';
import { PdSDKDcEcPath, PdSDKDcEcPathSettings } from './dcecpath';
/**
 * SDK D3路径分析配置
 */
export interface PdSDKDcPathSettings extends PdSDKDcEcPathSettings, PdSDKDcNetChartSettings {
    /**
     *  网络关系图配置
     */
    netChartSettings?: PdVisDcNetChartSettings;
}
/**
 * SDK D3路径分析
 */
export declare class PdSDKDcPath extends PdSDKDcEcPath<PdVisDcNetChart, PdSDKDcPathSettings> {
    /**
     * 构造方法
     * @param {PdSDKDcPathSettings} settings - 用户定义的配置
     */
    constructor(settings: PdSDKDcPathSettings);
}
