import { PdSDKNetChart, PdSDKNetChartSettings } from '../../netchart';
import { PdVisZcNetChart } from '../../../../vis/netchart/impls/zc/zcnetchart';
/**
 * SDK ZcNetChart网络关系图助手
 */
export declare abstract class PdSDKZcNetChartHelper extends PdSDKNetChart<PdVisZcNetChart> {
    /**
     * 初始化网络关系图配置
     * @param {PdSDKNetChartSettings} settings - 原网络关系图配置
     * @return {PdSDKNetChartSettings} 更新后的网络关系图配置
     */
    initNetChartSettings(settings: PdSDKNetChartSettings): PdSDKNetChartSettings;
}
