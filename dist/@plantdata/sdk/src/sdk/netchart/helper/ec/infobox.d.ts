import { PdSDKInfobox } from '../../../infobox/infobox';
import { PdVisEcNetChart, PdVisEcNetChartEventTargetType } from '../../../../vis/netchart/impls/ec/ecnetchart';
import { PdSDKDcEcInfoboxHelper } from '../dcecinfobox';
/**
 * SDK ECharts网络关系图的Infobox插件助手
 */
export declare class PdSDKEcInfoboxHelper extends PdSDKDcEcInfoboxHelper {
    /**
     *  网络关系图实例
     */
    protected netChart: PdVisEcNetChart;
    /**
     *  点击事件类型
     */
    protected clickType: PdVisEcNetChartEventTargetType;
    /**
     * 构造方法
     * @param {PdSDKInfobox} infobox - infobox插件实例
     * @param {PdVisEcNetChart} netChart - ECharts网络关系图实例
     */
    constructor(infobox: PdSDKInfobox, netChart: PdVisEcNetChart);
    /**
     * 显示infobox
     * @param nodeData - 节点数据
     * @param params - 其他参数
     */
    showInfobox(nodeData: any, params: any): void;
    /**
     * 绑定Infobox上的事件
     */
    protected bindInfoboxEvent(): void;
}
