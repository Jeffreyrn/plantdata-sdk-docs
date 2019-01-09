/// <reference types="jquery" />
import { PdVisNetChart, PdVisNodeId } from '../../../vis/netchart/netchart';
import { PdSDKInfobox } from '../../infobox/infobox';
/**
 * SDK D3/ECharts网络关系图的Infobox插件助手
 */
export declare abstract class PdSDKDcEcInfoboxHelper {
    /**
     *  infobox插件实例
     */
    protected infobox: PdSDKInfobox;
    /**
     *  当前加载节点的ID
     */
    protected infoboxLoadingId: PdVisNodeId;
    /**
     *  网络关系图实例
     */
    protected netChart: PdVisNetChart;
    /**
     * 构造方法
     * @param {PdSDKInfobox} infobox - infobox插件实例
     * @param {PdVisNetChart} netChart - 网络关系图实例
     */
    constructor(infobox: PdSDKInfobox, netChart: PdVisNetChart);
    /**
     * 显示infobox
     * @param nodeData - 节点数据
     * @param params - 其他参数
     */
    abstract showInfobox(nodeData: any, params: any): void;
    /**
     * 在指定位置显示infobox
     * @param nodeData - 节点数据
     * @param {number} x - 节点x坐标
     * @param {number} y - 节点y坐标
     */
    showInfoboxAuto(nodeData: any, x: number, y: number): void;
    /**
     * 绑定Infobox上的事件
     */
    protected abstract bindInfoboxEvent(): void;
    /**
     * 关闭Infobox
     * @param {JQuery.Event} event - 关闭事件对象
     */
    protected closeInfobox(event: JQuery.Event): void;
}
