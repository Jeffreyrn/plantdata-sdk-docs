import { PdSDKInfobox } from '../../../infobox/infobox';
import { PdVisDcNetChart } from '../../../../vis/netchart/impls/dc/dcnetchart';
import { PdSDKDcEcInfoboxHelper } from '../dcecinfobox';
/**
 * SDK D3网络关系图的Infobox插件助手
 */
export declare class PdSDKDcInfoboxHelper extends PdSDKDcEcInfoboxHelper {
    /**
     *  网络关系图实例
     */
    protected netChart: PdVisDcNetChart;
    /**
     * 构造方法
     * @param {PdSDKInfobox} infobox - infobox插件实例
     * @param {PdVisDcNetChart} netChart - D3网络关系图实例
     */
    constructor(infobox: PdSDKInfobox, netChart: PdVisDcNetChart);
    /**
     * 显示infobox
     * @param nodeData - 节点数据
     * @param ele {Element} - 节点Element
     */
    showInfobox(nodeData: any, ele: Element): void;
    /**
     * 绑定Infobox上的事件
     */
    protected bindInfoboxEvent(): void;
}
