import { PdVisToolItem, PdVisToolItemSettings } from '../../../../utils/tool-item/tool-item';
import { PdVisNetChart, PdVisNetChartDataLink, PdVisNetChartDataNode } from '../../../netchart';
import { PdEventData } from '../../../../../core/event';
/**
 * 编辑工具配置
 */
export interface PdVisContextmenuItemSettings extends PdVisToolItemSettings {
    /**
     * 可视化组件
     */
    netChart?: PdVisNetChart;
}
/**
 * 编辑工具
 */
export declare class PdVisContextmenuItem extends PdVisToolItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisContextmenuItemSettings;
    /**
     *  配置
     */
    settings: PdVisContextmenuItemSettings;
    /**
     * 当前点击关系
     */
    protected clickLink: PdVisNetChartDataLink;
    /**
     * 当前点击实体
     */
    protected clickNode: PdVisNetChartDataNode;
    /**
     * 当前选中关系
     */
    protected selectLinks: PdVisNetChartDataLink[];
    /**
     * 当前选中实体
     */
    protected selectNodes: PdVisNetChartDataNode[];
    /**
     * 构造方法
     * @param {PdVisContextmenuItemSettings} settings - 用户配置
     */
    constructor(settings?: PdVisContextmenuItemSettings);
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 初始化配置
     * @param {PdVisContextmenuItemSettings} settings - 用户定义配置
     * @return {PdVisContextmenuItemSettings} 配置
     */
    protected initSettings(settings: PdVisContextmenuItemSettings): PdVisContextmenuItemSettings;
    /**
     * 判断项目是否有效
     * @param {PdEventData} data - 事件数据
     */
    protected isEnable(data: PdEventData): boolean;
}
