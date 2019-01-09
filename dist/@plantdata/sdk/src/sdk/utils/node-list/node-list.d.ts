/// <reference types="jquery" />
import { PdVisNetChartDataNode } from '../../../vis/netchart/netchart';
import { PdComponent, PdComponentSettings } from '../../../core/component';
export interface PdSDKNodeListSettings extends PdComponentSettings {
}
/**
 * 节点列表
 */
export declare class PdSDKNodeList extends PdComponent {
    /**
     * 所有节点
     */
    protected nodes: PdVisNetChartDataNode[];
    /**
     * 构造方法
     * @param {PdSDKNodeListSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKNodeListSettings);
    /**
     * 添加节点
     * @param {PdVisNetChartDataNode} node - 节点
     */
    addNode(node: PdVisNetChartDataNode): void;
    /**
     * 清空节点
     */
    emptyNodes(): void;
    /**
     * 获取所有的节点
     * @return {PdVisNetChartDataNode[]} - 关联分析的所有节点
     */
    getNodes(): PdVisNetChartDataNode[];
    /**
     * 是否已选择为关联分析的节点
     * @param {PdVisNetChartDataNode} node - 待分析的节点
     * @return {boolean} 是否已选择为关联分析的节点
     */
    inNodes(node: PdVisNetChartDataNode): boolean;
    /**
     * 删除节点
     * @param {number} index - 节点顺序
     */
    removeNode(index: number): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 渲染节点
     */
    protected drawNodes(): void;
    /**
     * 初始化配置
     * @param {PdSDKNodeListSettings} settings - 用户定义配置
     * @return {PdSDKNodeListSettings} 配置
     */
    protected initSettings(settings: PdSDKNodeListSettings): PdSDKNodeListSettings;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 取消绑定事件
     */
    protected unbindEvent(): void;
}
