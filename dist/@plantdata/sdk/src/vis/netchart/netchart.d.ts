import { PdContainerMainSettings } from '../../container/container';
import { PdVisChart, PdVisChartCacheData, PdVisChartLoadParams, PdVisChartSettings } from '../chart';
import { PdVisNodeLegendItem } from './plugins/legend/node-legend/node-legend';
import { PdVisLinkLegendItem } from './plugins/legend/link-legend/link-legend';
/**
 *  可视化节点数据类型
 */
export declare type PdVisNodeId = number | string;
/**
 *  节点，边状态
 */
export declare type PdVisStatus = 'normal' | 'reduce' | 'emphasis';
/**
 * 网络边图节点配置
 */
export interface PdVisNetChartChartRadiusSettings {
    /**
     *  高亮时的半径
     */
    emphasis?: number;
    /**
     *  高亮时的半径缩放比率
     */
    emphasisRatio?: number;
    /**
     *  默认半径
     */
    normal?: number;
    /**
     *  弱化时的半径
     */
    reduce?: number;
    /**
     *  弱化时的半径缩放比率
     */
    reduceRatio?: number;
}
/**
 * 网络边图节点配置
 */
export interface PdVisNetChartChartNodeSettings {
    /**
     *  半径配置
     */
    radius?: PdVisNetChartChartRadiusSettings;
}
/**
 * 网络边图边配置
 */
export interface PdVisNetChartChartLinkSettings {
    /**
     *  半径配置
     */
    radius?: PdVisNetChartChartRadiusSettings;
}
/**
 * 网络边图配置
 */
export interface PdVisNetChartChartSettings extends PdContainerMainSettings {
    /**
     *  回调事件
     */
    callback?: {
        /**
         * 全屏状态切换时的回调
         * @param {boolean} isFullscreen - 当前是否全屏
         */
        onFullscreen?: (isFullscreen: boolean) => void;
    };
    /**
     *  颜色配置
     */
    color?: {
        /**
         *  强调颜色
         */
        emphasis?: string;
        /**
         *  边默认颜色
         */
        link?: string;
        /**
         *  节点默认颜色
         */
        node?: string;
        /**
         *  弱化颜色
         */
        reduce?: string;
    };
    /**
     *  否同时显示历史数据
     */
    extend?: boolean;
    /**
     *  节点半径配置
     */
    radius?: PdVisNetChartChartRadiusSettings;
    /**
     * 节点设置
     */
    nodeSettings?: PdVisNetChartChartNodeSettings;
    /**
     * 边设置
     */
    linkSettings?: PdVisNetChartChartLinkSettings;
}
/**
 * 缓存数据
 */
export interface PdVisNetChartCacheData extends PdVisChartCacheData {
    /**
     * 焦点
     */
    fixedNodes: PdVisNetChartDataNode[];
}
/**
 * 网络边图组件加载配置
 */
export interface PdVisNetChartLoadParams extends PdVisChartLoadParams {
    /**
     *  唯一标识
     */
    id: PdVisNodeId;
    /**
     *  其他参数
     */
    [key: string]: any;
}
/**
 * 网络关系图快照数据
 */
export interface PdVisNetChartSnapshot {
    /**
     * 唯一标识
     */
    id: string;
    /**
     * 名称
     */
    name: string;
    /**
     * 拍摄时间
     */
    createTime: number;
    /**
     * 快照描述
     */
    desc?: string;
    /**
     * 数据
     */
    data: PdVisNetChartData;
    /**
     * 边图例
     */
    linkLegends: PdVisLinkLegendItem[];
    /**
     * 节点图例
     */
    nodeLegends: PdVisNodeLegendItem[];
    /**
     * 边状态信息
     */
    linkStatusMap: {
        [key: string]: '' | PdVisStatus;
    };
    /**
     * 节点状态信息
     */
    nodeStatusMap: {
        [key: string]: '' | PdVisStatus;
    };
    /**
     * 其他数据
     */
    [key: string]: any;
}
/**
 * 网络边图组件配置
 */
export interface PdVisNetChartSettings extends PdVisChartSettings {
    /**
     *  网络边图配置
     */
    main?: PdVisNetChartChartSettings;
    /**
     *  预置内容
     */
    payload?: {
        /**
         *  预置数据
         */
        data: PdVisNetChartData;
        /**
         *  预置数据对应的加载参数
         */
        loadParams?: PdVisNetChartLoadParams;
    };
}
/**
 * 边的信息
 */
export interface PdVisNetChartRInfo {
    /**
     *  唯一标识
     */
    id?: string;
    /**
     * 字段列表
     */
    ks?: string[];
    /**
     *  边的详细信息
     */
    kvs: {
        /**
         *  信息名
         */
        k: string;
        /**
         *  信息值
         */
        v: string;
    }[];
}
/**
 * 节点数据
 */
export interface PdVisNetChartDataNode {
    /**
     *  节点颜色
     */
    color?: string;
    /**
     *  节点类型
     */
    classId?: PdVisNodeId;
    /**
     *  唯一标识
     */
    id: PdVisNodeId;
    /**
     *  节点图片
     */
    img?: string;
    /**
     * 标签样式
     */
    labelStyle?: {
        [key: string]: any;
    };
    /**
     *  唯一标识
     */
    meaningTag?: string;
    /**
     *  节点名称
     */
    name?: string;
    /**
     * 节点样式
     */
    nodeStyle?: {
        [key: string]: any;
    };
    /**
     *  节点半径
     */
    radius?: number;
    /**
     * 状态
     */
    status?: string;
    /**
     * 类别
     */
    type?: number;
    /**
     * 类型名称
     */
    typeName?: string;
}
/**
 * 边数据
 */
export interface PdVisNetChartDataLink {
    /**
     *  边类型
     */
    attId?: number;
    /**
     *  边名称
     */
    attName?: string;
    /**
     *  边颜色
     */
    color?: string;
    /**
     *  边显示名称
     */
    displayName?: string;
    /**
     *  边起点
     */
    from: PdVisNodeId;
    /**
     *  唯一标识
     */
    id?: string;
    /**
     * 标签样式
     */
    labelStyle?: {
        [key: string]: any;
    };
    /**
     * 边样式
     */
    linkStyle?: {
        [key: string]: any;
    };
    /**
     *  数值边的信息
     */
    nRInfo?: PdVisNetChartRInfo[];
    /**
     *  对象边的信息
     */
    oRInfo?: PdVisNetChartRInfo[];
    /**
     * 状态
     */
    status?: string;
    /**
     *  边终点
     */
    to: PdVisNodeId;
}
/**
 * 网络边图数据
 */
export interface PdVisNetChartData {
    /**
     *  边数据
     */
    links: PdVisNetChartDataLink[];
    /**
     *  节点数据
     */
    nodes: PdVisNetChartDataNode[];
}
/**
 * 过滤规则
 */
export interface PdVisNetChartDataFilter {
    /**
     * 过滤方法
     * @param {PdVisNetChartData} data - 待过滤数据
     * @return {PdVisNetChartData} 过滤数据结果
     */
    filter: (data: PdVisNetChartData) => PdVisNetChartData;
    /**
     *  规则类型
     */
    type: string;
}
/**
 * 网络边图组件
 */
export declare abstract class PdVisNetChart extends PdVisChart {
    /**
     *  强调色
     */
    static emphasisColor: string;
    /**
     *  节点默认颜色
     */
    static primaryColor: string;
    /**
     *  边默认颜色
     */
    static linkColor: string;
    /**
     * 节点颜色
     */
    static nodeColor: string;
    /**
     *  弱化的颜色
     */
    static reduceColor: string;
    /**
     *  节点默认半径
     */
    static normalRadius: number;
    /**
     *  节点高亮时的半径
     */
    static emphasisRadius: number;
    /**
     *  默认配置
     */
    static defaultSettings: PdVisNetChartSettings;
    /**
     *  当前数据
     */
    data: PdVisNetChartData;
    /**
     *  固定的节点
     */
    fixedNodes: PdVisNetChartDataNode[];
    /**
     *  固定的边
     */
    fixedLinks: PdVisNetChartDataNode[];
    /**
     *  历史数据
     */
    historyList: PdVisNetChartCacheData[];
    /**
     *  当前的加载参数
     */
    loadParams: PdVisNetChartLoadParams;
    /**
     *  配置
     */
    settings: PdVisNetChartSettings;
    /**
     * 快照数据
     */
    snapshotList: PdVisNetChartSnapshot[];
    /**
     *  候选数据过滤器
     */
    protected availableDataFilters: PdVisNetChartDataFilter[];
    /**
     *  数据过滤器
     */
    protected filters: PdVisNetChartDataFilter[];
    /**
     *  边的图例
     */
    protected linkLegends: PdVisLinkLegendItem[];
    /**
     * 边的距离
     */
    protected linkLength: number;
    /**
     * 边状态
     */
    protected linkStatusMap: {
        [key: string]: '' | PdVisStatus;
    };
    /**
     *  节点的图例
     */
    protected nodeLegends: PdVisNodeLegendItem[];
    /**
     * 节点状态
     */
    protected nodeStatusMap: {
        [key: string]: '' | PdVisStatus;
    };
    /**
     * 边边属性
     * @param {PdVisNetChartDataLink} linkData - 边数据
     * @return {string} 渲染的HTML字符串
     */
    static createLinkRInfo(linkData: PdVisNetChartDataLink): string;
    /**
     * 节点ID是否相等
     * @param {PdVisNodeId} id1 - 待比较的节点ID
     * @param {PdVisNodeId} id2 - 待比较的节点ID
     * @return {boolean} 是否相等
     */
    static idEquals(id1: PdVisNodeId, id2: PdVisNodeId): boolean;
    /**
     * 边详情
     * @param {PdVisNetChartDataLink} linkData - 边数据
     * @return {string} 渲染的HTML字符串
     */
    protected static linkContentsFunction(linkData: PdVisNetChartDataLink): string;
    /**
     * 构造方法
     * @param {PdVisNetChartSettings} settings - 用户配置
     */
    constructor(settings?: PdVisNetChartSettings);
    /**
     * 清除高亮的边
     */
    clearEmphasisLink(): void;
    /**
     * 清除高亮节点
     */
    clearEmphasisNode(): void;
    /**
     * 清除边状态
     */
    clearLinkStatus(): void;
    /**
     * 清除锁定样式的边
     */
    clearLockedLink(): void;
    /**
     * 清除锁定样式的节点
     */
    clearLockedNode(): void;
    /**
     * 清除节点状态
     */
    clearNodeStatus(): void;
    /**
     * 清除弱化的边
     */
    clearReducedLink(): void;
    /**
     * 清除弱化的节点
     */
    clearReducedNode(): void;
    /**
     * 清除边、节点状态
     */
    clearStatus(): void;
    /**
     * 删除已设置的候选数据过滤器
     * @param {string[]} types - 需要删除的过滤器类型
     */
    deleteAvailableDataFilter(types?: string[]): void;
    /**
     * 删除已设置的数据过滤器
     * @param {string[]} types - 需要删除的过滤器类型
     */
    deleteFilter(types?: string[]): void;
    /**
     * 是否支持更新节点标签显示位置
     * @return {boolean} 是否支持更新
     */
    nodeLabelPositionUpdatable(): boolean;
    /**
     * 查找节点
     * @param {PdVisNodeId} id - 节点ID
     * @param {PdVisNetChartDataNode[]} nodes - 查找的数据范围
     * @return {PdVisNetChartDataNode} 节点
     */
    findNode(id: PdVisNodeId, nodes?: PdVisNetChartDataNode[]): PdVisNetChartDataNode;
    /**
     * 查找节点
     * @param value - 节点的匹配条件
     * @param {PdVisNetChartDataNode[]} nodes - 查找的数据范围
     * @return {PdVisNetChartDataNode} 节点
     */
    findNodeAdvance(value: {
        [key: string]: any;
    }, nodes?: PdVisNetChartDataNode[]): PdVisNetChartDataNode;
    /**
     * 查找节点
     * @param value - 节点的匹配值
     * @param {string} key - 节点的匹配key
     * @param {PdVisNetChartDataNode[]} nodes - 查找的数据范围
     * @return {PdVisNetChartDataNode} 节点
     */
    findNodeByKey(value: any, key?: string, nodes?: PdVisNetChartDataNode[]): PdVisNetChartDataNode;
    /**
     * 过滤节点
     * @param {PdVisNodeId[]} ids - 节点ID列表
     * @param {PdVisNetChartDataNode[]} nodes - 查找的数据范围
     * @return {PdVisNetChartDataNode} 过滤出来的节点列表
     */
    filterNodes(ids?: PdVisNodeId[], nodes?: PdVisNetChartDataNode[]): PdVisNetChartDataNode[];
    /**
     * 过滤可获得的数据
     * @param {PdVisNetChartData} data - 待过滤的数据
     * @return {PdVisNetChartData} 过滤出来的节点列表
     */
    filterAvailableData(data: PdVisNetChartData): PdVisNetChartData;
    /**
     * 获取当前未经过滤的所有数据
     * @return {PdVisNetChartData} 当前未经过滤的所有数据
     */
    getAvailableData(): PdVisNetChartData;
    /**
     * 获取已设置的候选数据过滤器
     * @param {string[]} types - 需要获取的过滤器类型
     * @return {PdVisNetChartDataFilter[]} 已设置的过滤器
     */
    getAvailableDataFilter(types?: string[]): PdVisNetChartDataFilter[];
    /**
     * 获取当前过滤后的所有数据
     * @return {PdVisNetChartData} 过滤后的所有数据
     */
    getData(): PdVisNetChartData;
    /**
     * 获取高亮的边
     * @return 高亮的边
     */
    getEmphasisLink(): {
        [key: string]: boolean;
    };
    /**
     * 获取高亮的节点
     * @return 高亮的节点
     */
    getEmphasisNode(): {
        [key: string]: boolean;
    };
    /**
     * 获取已设置的数据过滤器
     * @param {string[]} types - 需要获取的过滤器类型
     * @return {PdVisNetChartDataFilter[]} 已设置的过滤器
     */
    getFilter(types?: string[]): PdVisNetChartDataFilter[];
    /**
     * 获取锁定样式的的边
     * @return 锁定样式的边id
     */
    getLockedLink(): {
        [key: string]: boolean;
    };
    /**
     * 获取锁定样式的的节点
     * @return 锁定样式的节点id
     */
    getLockedNode(): {
        [key: string]: boolean;
    };
    /**
     * 边的图例
     * @param {PdVisNetChartDataLink} linkData - 边数据
     * @return {PdVisLinkLegendItem} - 图例
     */
    getLinkLegend(linkData: PdVisNetChartDataLink): PdVisLinkLegendItem;
    /**
     * 获取边图例
     * @return {PdVisLinkLegendItem[]} 图例
     */
    getLinkLegends(): PdVisLinkLegendItem[];
    /**
     * 节点的图例
     * @param {PdVisNetChartDataNode} nodeData - 节点数据
     * @return {PdVisNodeLegendItem} - 图例
     */
    getNodeLegend(nodeData: PdVisNetChartDataNode): PdVisNodeLegendItem;
    /**
     * 获取节点图例
     * @return {PdVisNodeLegendItem[]} 图例
     */
    getNodeLegends(): PdVisNodeLegendItem[];
    /**
     * 获取弱化的的边
     * @return 弱化的边id
     */
    getReducedLink(): {
        [key: string]: boolean;
    };
    /**
     * 获取弱化的的节点
     * @return 弱化的节点id
     */
    getReducedNode(): {
        [key: string]: boolean;
    };
    /**
     * 是否固定边
     * @param {string} id - 边ID
     * @return {boolean} 是否固定边
     */
    isFixedLink(id: string): boolean;
    /**
     * 是否固定节点
     * @param {PdVisNodeId} id - 节点ID
     * @return {boolean} 是否固定节点
     */
    isFixedNode(id: PdVisNodeId): boolean;
    /**
     * 根据图例过滤数据
     * @param {PdVisNetChartData} data - 待过滤的数据
     * @return {PdVisNetChartData} 过滤的结果数据
     */
    legendFilter(data: PdVisNetChartData): PdVisNetChartData;
    /**
     * 边的默认颜色
     * @param {PdVisLinkLegendItem} legend - 图例
     * @return {string} 默认颜色
     */
    linkDefaultColor(legend?: PdVisLinkLegendItem): string;
    /**
     * 边的默认距离
     * @param {PdVisNetChartDataLink} linkData - 数据
     * @param {PdVisLinkLegendItem} legend - 图例
     * @return {number} 默认距离
     */
    linkDefaultLength(linkData?: PdVisNetChartDataLink, legend?: PdVisLinkLegendItem): number;
    /**
     * 边的默认宽度
     * @param {PdVisLinkLegendItem} legend - 图例
     * @return {number} 边的宽度
     */
    linkDefaultRadius(legend?: PdVisLinkLegendItem): number;
    /**
     * 边标签的颜色
     * @param {PdVisNetChartDataLink} linkData - 数据
     * @param {PdVisLinkLegendItem} legend - 图例
     * @return {string} - 颜色
     */
    linkLabelColor(linkData?: PdVisNetChartDataLink, legend?: PdVisLinkLegendItem): string;
    /**
     * 边标签的默认颜色
     * @param {PdVisLinkLegendItem} legend - 图例
     * @return {string} 默认颜色
     */
    linkLabelDefaultColor(legend?: PdVisLinkLegendItem): string;
    /**
     * 边标签是否显示
     * @param {PdVisNetChartDataLink} linkData - 数据
     * @param {PdVisLinkLegendItem} legend - 图例
     * @return {string} 是否显示
     */
    linkLabelShow(linkData?: PdVisNetChartDataLink, legend?: PdVisLinkLegendItem): boolean;
    /**
     * 边的宽度
     * @param {PdVisNetChartDataLink} linkData - 数据
     * @param {PdVisLinkLegendItem} legend - 图例
     * @return {number} 边的宽度
     */
    linkRadius(linkData: PdVisNetChartDataLink, legend?: PdVisLinkLegendItem): number;
    /**
     * 计算边的状态
     * @param {PdVisNetChartDataLink} linkData - 边数据
     * @param {PdVisLinkLegendItem} legend - 图例
     * @return {string} 边状态
     */
    linkStatus(linkData: PdVisNetChartDataLink, legend?: PdVisLinkLegendItem): string;
    /**
     * 加载数据
     * @param {PdVisNetChartLoadParams} lp - 加载数据的参数
     * @param {string} source - 请求来源
     * @return {Promise<any>} 加载数据的Promise
     */
    load(lp: PdVisNetChartLoadParams, source?: string): Promise<any>;
    /**
     * 节点的默认颜色
     * @param {PdVisNodeLegendItem} legend - 图例
     * @return {string} - 默认颜色
     */
    nodeDefaultColor(legend?: PdVisNodeLegendItem): string;
    /**
     * 节点的默认半径
     * @param {PdVisNodeLegendItem} legend - 图例
     * @return {number} - 节点的半径
     */
    nodeDefaultRadius(legend?: PdVisNodeLegendItem): number;
    /**
     * 节点标签是否显示
     * @param {PdVisNetChartDataNode} nodeData - 节点
     * @param {PdVisNodeLegendItem} legend - 图例
     * @return {string} 是否显示
     */
    nodeImageShow(nodeData?: PdVisNetChartDataNode, legend?: PdVisNodeLegendItem): boolean;
    /**
     * 节点图片
     * @param {PdVisNetChartDataNode} nodeData - 节点
     * @param {PdVisNodeLegendItem} legend - 图例
     * @return {string} 图片
     */
    nodeImage(nodeData?: PdVisNetChartDataNode, legend?: PdVisNodeLegendItem): string;
    /**
     * 节点标签的颜色
     * @param {PdVisNetChartDataNode} nodeData - 节点
     * @param {PdVisNodeLegendItem} legend - 图例
     * @return {string} - 颜色
     */
    nodeLabelColor(nodeData?: PdVisNetChartDataNode, legend?: PdVisNodeLegendItem): string;
    /**
     * 节点标签的默认颜色
     * @param {PdVisNodeLegendItem} legend - 图例
     * @return {string} - 默认颜色
     */
    nodeLabelDefaultColor(legend?: PdVisNodeLegendItem): string;
    /**
     * 节点标签是否显示
     * @param {PdVisNetChartDataNode} nodeData - 数据
     * @param {PdVisNodeLegendItem} legend - 图例
     * @return {string} 是否显示
     */
    nodeLabelShow(nodeData?: PdVisNetChartDataNode, legend?: PdVisNodeLegendItem): boolean;
    /**
     * 获取节点标签显示位置
     * @param {PdVisNetChartDataNode} nodeData - 节点
     * @param {PdVisNodeLegendItem} legend - 图例
     * @return {string} 节点标签显示位置
     */
    nodeLabelPosition(nodeData?: PdVisNetChartDataNode, legend?: PdVisNodeLegendItem): string;
    /**
     * 节点的半径
     * @param {PdVisNetChartDataNode} nodeData - 数据
     * @param {PdVisNodeLegendItem} legend - 图例
     * @return {number} - 节点的半径
     */
    nodeRadius(nodeData: PdVisNetChartDataNode, legend?: PdVisNodeLegendItem): number;
    /**
     * 计算节点的状态
     * @param {PdVisNetChartDataNode} nodeData - 节点数据
     * @param {PdVisNodeLegendItem} legend - 图例
     * @return {string} 节点状态
     */
    nodeStatus(nodeData: PdVisNetChartDataNode, legend?: PdVisNodeLegendItem): string;
    /**
     * 重绘图谱
     */
    paint(force?: boolean): void;
    /**
     * 重新加载数据
     * @return {Promise<any>} 加载数据的Promise
     */
    reload(): Promise<any>;
    /**
     * 重置布局
     */
    abstract resetLayout(): void;
    /**
     * 设置高亮的边
     * @param {string[]} ids - 高亮的边ID
     */
    setEmphasisLink(ids: string[]): void;
    /**
     * 设置高亮的节点
     * @param {PdVisNodeId[]} ids - 高亮的节点ID
     */
    setEmphasisNode(ids: PdVisNodeId[]): void;
    /**
     * 设置锁定样式的边
     * @param {string[]} ids - 锁定样式的边ID
     */
    setLockedLink(ids: string[]): void;
    /**
     * 设置锁定样式的节点
     * @param {PdVisNodeId[]} ids - 锁定样式的节点ID
     */
    setLockedNode(ids: PdVisNodeId[]): void;
    /**
     * 设置弱化的边
     * @param {string[]} ids - 弱化的边ID
     */
    setReducedLink(ids: string[]): void;
    /**
     * 设置弱化的节点
     * @param {PdVisNodeId[]} ids - 弱化的节点ID
     */
    setReducedNode(ids: PdVisNodeId[]): void;
    /**
     * 设置候选数据过滤器
     * @param {PdVisNetChartDataFilter} dataFilter - 数据过滤器
     */
    setAvailableDataFilter(dataFilter: PdVisNetChartDataFilter): void;
    /**
     * 设置数据过滤器
     * @param {PdVisNetChartDataFilter} dataFilter - 数据过滤器
     */
    setFilter(dataFilter: PdVisNetChartDataFilter): void;
    /**
     * 还原快照
     */
    restoreSnapshot(idx: number): void;
    /**
     * 拍摄快照
     */
    takeSnapshot(name: string, desc: string): void;
    /**
     * 更新边的图例
     * @param {PdVisLinkLegendItem[]} legends - 图例
     */
    updateLinkLegend(legends: PdVisLinkLegendItem[]): void;
    /**
     * 更新边的距离
     * @param {number} length - 边的距离
     */
    updateLinkLength(length: number): void;
    /**
     * 设置边的状态
     * @param {string[]} ids - 边ID
     * @param {'' | 'emphasis' | 'reduce' | 'normal'} status - 状态
     */
    updateLinkStatus(ids: string[], status?: '' | 'emphasis' | 'reduce' | 'normal'): void;
    /**
     * 更新节点图例
     * @param {PdVisNodeLegendItem[]} legends - 图例
     */
    updateNodeLegend(legends: PdVisNodeLegendItem[]): void;
    /**
     * 更新节点标签显示位置
     * @param {string} position - 标签显示
     */
    updateNodeLabelPosition(position: string): void;
    /**
     * 设置节点的状态
     * @param {PdVisNodeId[]} ids - 节点ID
     * @param {'' | 'emphasis' | 'reduce' | 'normal'} status - 状态
     */
    updateNodeStatus(ids: PdVisNodeId[], status?: '' | 'emphasis' | 'reduce' | 'normal'): void;
    /**
     * 配置初始化完成后的回调
     */
    protected created(): void;
    /**
     * 初始化主面板
     */
    protected initMainPanel(): void;
    /**
     * 初始化配置
     * @param {PdVisNetChartSettings} settings - 用户定义配置
     * @return {PdVisNetChartSettings} 配置
     */
    protected initSettings(settings: PdVisNetChartSettings): PdVisNetChartSettings;
    /**
     * 计算边的颜色
     * @param {PdVisNetChartDataLink} linkData - 数据
     * @param {PdVisLinkLegendItem} legend - 图例
     * @param {string} status - 状态
     * @return {string} 边的颜色
     */
    protected linkColorFunction(linkData: PdVisNetChartDataLink, legend?: PdVisLinkLegendItem, status?: string): string;
    /**
     * 计算边的宽度
     * @param {PdVisNetChartDataLink} linkData - 数据
     * @param {PdVisLinkLegendItem} legend - 图例
     * @param {string} status - 状态
     * @return {number} 边的宽度
     */
    protected linkRadiusFunction(linkData: PdVisNetChartDataLink, legend?: PdVisLinkLegendItem, status?: string): number;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 计算节点的颜色
     * @param {PdVisNetChartDataNode} nodeData - 数据
     * @param {PdVisNodeLegendItem} legend - 图例
     * @param {string} status - 状态
     * @return {string} 节点的颜色
     */
    protected nodeColorFunction(nodeData: PdVisNetChartDataNode, legend?: PdVisNodeLegendItem, status?: string): string;
    /**
     * 节点双击事件处理
     * @param {PdVisNetChartDataNode} nodeData - 双击的节点
     */
    protected nodeDblClick(nodeData: PdVisNetChartDataNode): void;
    /**
     * 计算节点的半径
     * @param {PdVisNetChartDataNode} nodeData - 数据
     * @param {PdVisNodeLegendItem} legend - 图例
     * @param {string} status - 状态
     * @return {number} - 节点的半径
     */
    protected nodeRadiusFunction(nodeData: PdVisNetChartDataNode, legend?: PdVisNodeLegendItem, status?: string): number;
    /**
     * 预处理数据
     */
    protected preprocessData(): void;
}
