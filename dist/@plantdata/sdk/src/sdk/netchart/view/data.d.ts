/// <reference types="jquery" />
import 'echarts/lib/component/title';
import { PdSDKViewSettings } from './view';
import { PdVisView } from '../../../vis/netchart/view';
import { PdSelector } from '../../../common/common';
import { PdSDKInfobox, PdSDKInfoboxSettings } from '../../infobox/infobox';
import { PdVisNodeId } from '../../../vis/netchart/netchart';
import { PdSDKStat } from '../../stats';
export { PdUITab } from '../../../ui/components/tab/tab';
/**
 * 数据列表视图插件配置
 */
export interface PdSDKViewDataSettings extends PdSDKViewSettings {
    /**
     * infobox配置
     */
    infoboxSettings?: PdSDKInfoboxSettings;
}
/**
 * 数据列表视图插件
 */
export declare class PdSDKViewData extends PdVisView {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKViewDataSettings;
    /**
     *  配置
     */
    settings: PdSDKViewDataSettings;
    /**
     *  infobox插件的容器
     */
    protected $extraInfoContainer: JQuery;
    /**
     * 关系详情容器
     */
    protected $linkDetail: JQuery;
    /**
     *  infobox插件实例
     */
    protected infobox: PdSDKInfobox;
    /**
     *  当前加载节点的ID
     */
    protected infoboxLoadingId: PdVisNodeId;
    /**
     *  关系统计实例
     */
    protected linkStat: PdSDKStat;
    /**
     *  实体统计实例
     */
    protected nodeStat: PdSDKStat;
    /**
     *  infobox缓存
     */
    protected infoboxCacheMap: {
        [key: string]: any;
    };
    /**
     * 构造方法
     * @param {PdSDKViewDataSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKViewDataSettings);
    /**
     * 获取插件的唯一标识
     */
    getViewType(): string;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 生成图表
     * @param {PdSelector} selector - 生成的DOM位置
     * @param {{ [key: string]: number }} data - 数据
     * @param {string} title - 标题
     * @return {PdSDKStat} - 统计实例
     */
    protected createChart(selector: PdSelector, data?: {
        [key: string]: number;
    }, title?: string): PdSDKStat;
    /**
     * 生成关系列表
     */
    protected createLinkList(): void;
    /**
     * 生成内容主体
     * @return {string} 内容主体字串
     */
    protected createMainContent(): string;
    /**
     * 生成节点列表
     */
    protected createNodeList(): void;
    /**
     * 数据变化
     */
    protected dataChange(): void;
    /**
     * 进入视图
     */
    protected enter(): void;
    /**
     * 初始化配置
     * @param {PdSDKViewDataSettings} settings - 用户定义配置
     * @return {PdSDKViewDataSettings} 配置
     */
    protected initSettings(settings: PdSDKViewDataSettings): PdSDKViewDataSettings;
    /**
     * 初始化infobox
     */
    protected initInfobox(): void;
    /**
     * 初始化LinkDetail
     */
    protected initLinkDetail(): void;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 加载数据
     * @param {PdVisNodeId} id - 加载数据的节点Id
     * @return {Promise<any>} - Promise实例
     */
    protected loadInfobox(id: PdVisNodeId): Promise<any>;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 显示额外信息容器
     * @param {JQuery.Event} event - 触发事件对象
     */
    protected showExtraInfoContainer(event: JQuery.Event): void;
    /**
     * 取消绑定事件
     */
    protected unbindEvent(): void;
}
