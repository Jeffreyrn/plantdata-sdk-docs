/// <reference types="jquery" />
import * as d3 from 'd3';
import { Selection, BaseType } from 'd3-selection';
import { Simulation, SimulationLinkDatum, SimulationNodeDatum } from 'd3-force';
import { ZoomBehavior, ZoomTransform } from 'd3-zoom';
import { PdVisNetChart, PdVisNetChartChartLinkSettings, PdVisNetChartChartNodeSettings, PdVisNetChartChartSettings, PdVisNetChartDataLink, PdVisNetChartDataNode, PdVisNetChartSettings } from '../../netchart';
/**
 * DcNetChart网络关系图节点配置
 */
export interface PdVisDcNetChartChartNodeSettings extends PdVisNetChartChartNodeSettings {
    /**
     * 节点图片转换方法
     * @param {string} url - 原始节点图片地址
     * @return {string} 节点图片地址
     */
    imgBuilder?: (url: string) => string;
}
/**
 * DcNetChart网络关系图节点配置
 */
export interface PdVisDcNetChartChartLinkSettings extends PdVisNetChartChartLinkSettings {
    /**
     *  多关系时关系的曲度
     */
    curve?: number;
    /**
     *  是否全部都显示直线
     */
    isLine?: boolean;
}
/**
 * d3网络关系图配置
 */
export interface PdVisDcNetChartChartSettings extends PdVisNetChartChartSettings {
    /**
     *  回调事件
     */
    events?: {
        /**
         * 节点单击事件
         * @param {PdVisNetChartDataNode} data - 节点数据
         * @param {Element} target - 节点Dom对象
         */
        nodeClick?: (data: PdVisNetChartDataNode, target: Element) => void;
        /**
         * 节点双击事件
         * @param {PdVisNetChartDataNode} data - 节点数据
         * @param {Element} target - 节点Dom对象
         */
        nodeDblClick?: (data: PdVisNetChartDataNode, target: Element) => void;
        /**
         * 节点右击事件
         * @param {PdVisNetChartDataNode} data - 节点数据
         * @param {Element} target - 节点Dom对象
         */
        nodeRightClick?: (data: PdVisNetChartDataNode, target: Element) => void;
    };
    /**
     *  节点配置
     */
    nodeSettings?: PdVisDcNetChartChartNodeSettings;
    /**
     *  关系配置
     */
    linkSettings?: PdVisDcNetChartChartLinkSettings;
}
/**
 * d3网络关系图组件配置
 */
export interface PdVisDcNetChartSettings extends PdVisNetChartSettings {
    /**
     *  d3网络关系图配置
     */
    main?: PdVisDcNetChartChartSettings;
}
/**
 * d3网络关系图节点数据
 */
export interface PdVisDcNetChartDataNode extends PdVisNetChartDataNode, SimulationNodeDatum {
    /**
     * 唯一标识
     */
    id: string;
    /**
     *  节点默认半径
     */
    _radius?: number;
    /**
     *  节点名称
     */
    name?: string;
}
/**
 * d3网络关系图关系数据
 */
export interface PdVisDcNetChartDataLink extends PdVisNetChartDataLink, SimulationLinkDatum<PdVisDcNetChartDataNode> {
    /**
     *  关系源
     */
    from: string;
    /**
     *  关系编号
     */
    linknum?: number;
    /**
     *  关系总数
     */
    size?: number;
    /**
     *  关系目标
     */
    to: string;
}
/**
 * d3网络关系图数据
 */
export interface PdVisDcNetChartData {
    /**
     *  关系数据
     */
    links: PdVisDcNetChartDataLink[];
    /**
     *  节点数据
     */
    nodes: PdVisDcNetChartDataNode[];
}
/**
 * 坐标点
 */
export interface Point {
    /**
     *  x坐标
     */
    x?: number;
    /**
     *  y坐标
     */
    y?: number;
}
/**
 * d3网络关系图组件
 */
export declare class PdVisDcNetChart extends PdVisNetChart {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisDcNetChartSettings;
    /**
     *  网络关系图的模拟
     */
    chart: Simulation<PdVisDcNetChartDataNode, undefined>;
    /**
     *  当前数据
     */
    data: PdVisDcNetChartData;
    /**
     *  当前缩放以及位移信息
     */
    nowTransform: ZoomTransform;
    /**
     *  配置
     */
    settings: PdVisDcNetChartSettings;
    /**
     *  关系信息详情的容器
     */
    protected $linkInfoContainer: JQuery;
    /**
     *  图表的SVG容器
     */
    protected $chartSvg: Selection<BaseType, {}, HTMLElement, any>;
    /**
     *  画布的尺寸
     */
    protected canvasSize: [number, number];
    /**
     *  最后的点击延迟
     */
    protected lastClickT: any;
    /**
     *  关系数据
     */
    protected links: PdVisDcNetChartDataLink[];
    /**
     *  关系标签
     */
    protected linkLabelSelection: Selection<SVGTextElement, {}, BaseType, {}>;
    /**
     *  关系
     */
    protected linkSelection: Selection<SVGPathElement, {}, BaseType, {}>;
    /**
     *  标记ID
     */
    protected markerId: string;
    /**
     *  标记
     */
    protected markerSelection: Selection<SVGPathElement, {}, BaseType, {}>;
    /**
     *  节点图片
     */
    protected nodeImageSelection: Selection<SVGPatternElement, {}, BaseType, {}>;
    /**
     *  节点名称
     */
    protected nodeLabelSelection: Selection<SVGTextElement, {}, BaseType, {}>;
    /**
     *  节点
     */
    protected nodeSelection: Selection<SVGCircleElement, {}, BaseType, {}>;
    /**
     *  右击事件类型
     */
    protected rightClickType: 'node' | 'link' | 'canvas' | 'other';
    /**
     *  缩放以及位移信息
     */
    protected transform: ZoomTransform;
    /**
     *  缩放行为
     */
    protected zoom: ZoomBehavior<Element, {}>;
    /**
     *  缩放过渡设置
     */
    protected zoomTransition: d3.Transition<HTMLElement, {}, null, undefined>;
    /**
     * 计算经过两点的园的圆心
     * @param {Point} p1 - 点1的坐标
     * @param {Point} p2 - 点2的坐标
     * @param {number} r - 半径
     * @return {Point[]} 圆心
     */
    protected static getCoC(p1: Point, p2: Point, r: number): Point[];
    /**
     * 计算两园的焦点
     * @param {Point} p1 - 圆1的中心
     * @param {Point} p2 - 圆2的中心
     * @param {number} r1 - 圆1的半径
     * @param {number} r2 - 圆2的半径
     * @return {Point[]} 焦点
     */
    protected static getIoC(p1: Point, p2: Point, r1: number, r2: number): Point[];
    /**
     * 计算平行于两圆圆心连线且指定与圆心连线间隔的线段，与两圆的焦点
     * @param {Point} p1 - 圆1的中心
     * @param {Point} p2 - 圆2的中心
     * @param {number} r1 - 圆1的半径
     * @param {number} r2 - 圆2的半径
     * @param {number} g - 线段与平行线之前的间隔
     * @return {Point[]} 焦点
     */
    protected static getIoCaL(p1: Point, p2: Point, r1: number, r2: number, g: number): Point[];
    /**
     * 计算中点
     * @param {number} s - 点1
     * @param {number} t - 点2
     * @return {number} 中点
     */
    protected static getPosCenter(s: number, t: number): number;
    /**
     * 设置关系的编号
     * @param {PdVisDcNetChartDataLink[]} group - 关系组
     * @param {boolean} self - 是否目标与源相同
     */
    protected static setLinkNumber(group: PdVisDcNetChartDataLink[], self: boolean): void;
    /**
     * 更新关系
     * @param {PdVisNetChartDataLink[]} links - 待更新的关系
     * @return {PdVisDcNetChartDataLink[]} 更新后的关系
     */
    protected static updateLinks(links: PdVisNetChartDataLink[]): PdVisDcNetChartDataLink[];
    /**
     * 更新节点
     * @param {PdVisNetChartDataNode[]} nodes - 待更新节点
     * @return {PdVisDcNetChartDataNode[]} 更新后的节点
     */
    protected static updateNodes(nodes: PdVisNetChartDataNode[]): PdVisDcNetChartDataNode[];
    /**
     * 构造方法
     * @param {PdVisDcNetChartSettings} settings - 用户配置
     */
    constructor(settings?: PdVisDcNetChartSettings);
    /**
     * 重置布局
     */
    resetLayout(): void;
    /**
     * 重置图表
     */
    resize(): void;
    /**
     * 设置中心焦点
     * @param {PdVisNetChartDataNode} node - 焦点节点
     */
    scrollIntoView(node: PdVisNetChartDataNode): void;
    /**
     * 更新数据
     */
    updateData(): void;
    /**
     * 更新样式
     */
    updateStyle(): void;
    /**
     * 将图表设置到画布中心
     */
    protected centerPosition(): void;
    /**
     * 创建关系
     * @param {PdVisDcNetChartDataLink[]} links - 关系数据
     */
    protected createLinks(links: PdVisDcNetChartDataLink[]): void;
    /**
     * 创建关系标签
     * @param {PdVisDcNetChartDataLink[]} links - 关系数据
     */
    protected createLinksLabel(links: PdVisDcNetChartDataLink[]): void;
    /**
     * 创建关系标记
     */
    protected createMarker(): void;
    /**
     * 创建节点
     * @param {PdVisDcNetChartDataNode[]} nodes - 节点数据
     */
    protected createNodes(nodes: PdVisDcNetChartDataNode[]): void;
    /**
     * 创建节点图片
     * @param {PdVisDcNetChartDataNode[]} nodes - 节点数据
     */
    protected createNodesImage(nodes: PdVisDcNetChartDataNode[]): void;
    /**
     * 创建节点名称
     * @param {PdVisDcNetChartDataNode[]} nodes - 节点数据
     */
    protected createNodesLabel(nodes: PdVisDcNetChartDataNode[]): void;
    /**
     * 拖拽结束执行
     * @param {PdVisDcNetChartDataNode} nodeData - 节点数据
     */
    protected dragEnded(nodeData: PdVisDcNetChartDataNode): void;
    /**
     * 拖拽时执行
     * @param {PdVisDcNetChartDataNode} nodeData - 节点数据
     */
    protected dragged(nodeData: PdVisDcNetChartDataNode): void;
    /**
     * 拖拽开始时执行
     * @param {PdVisDcNetChartDataNode} nodeData - 节点数据
     */
    protected dragStarted(nodeData: PdVisDcNetChartDataNode): void;
    /**
     * 计算关系的圆的半径
     * @param {PdVisDcNetChartDataLink} linkData - 关系数据
     * @return {number} 半径
     */
    protected getArcRadius(linkData: PdVisDcNetChartDataLink): number;
    /**
     * 计算关系的直线与经过两节点圆心的直线的间隔
     * @param {PdVisDcNetChartDataLink} linkData - 关系数据
     * @return {number} 间隔
     */
    protected getGap(linkData: PdVisDcNetChartDataLink): number;
    /**
     * 对关系分组
     * @return {PdVisDcNetChartDataLink[]} 分组后的关系
     */
    protected groupLink(): PdVisDcNetChartDataLink[];
    /**
     * 更新图例时执行的处理方法
     */
    protected handlerLegendUpdate(): void;
    /**
     * 初始化网络关系图
     */
    protected initChart(): void;
    /**
     * 初始化配置
     * @param {PdVisDcNetChartSettings} settings - 用户定义配置
     * @return {PdVisDcNetChartSettings} 配置
     */
    protected initSettings(settings: PdVisDcNetChartSettings): PdVisDcNetChartSettings;
    /**
     * 计算节点半径
     * @param {PdVisDcNetChartDataNode} nodeData - 节点数据
     * @return {number} 半径
     */
    protected nodeRadiusFunction(nodeData: PdVisDcNetChartDataNode): number;
    /**
     * 设置关系的标记
     */
    protected setLinkMarker(): void;
    /**
     * 更新关系名称的位置
     */
    protected updateLinkLabelPos(): void;
    /**
     * 更新关系的位置
     */
    protected updateLinkPos(): void;
    /**
     * 更新关系的样式
     */
    protected updateLinkStyle(): void;
    /**
     * 更新关系标记的样式
     */
    protected updateMarkerStyle(): void;
    /**
     * 更新节点名称的位置
     */
    protected updateNodeLabelPos(): void;
    /**
     * 更新节点名称的样式
     */
    protected updateNodeLabelStyle(): void;
    /**
     * 更新节点的位置
     */
    protected updateNodePos(): void;
    /**
     * 更新节点的样式
     */
    protected updateNodeStyle(): void;
    /**
     * 更新节点和关系位置
     */
    protected updatePosition(): void;
}
