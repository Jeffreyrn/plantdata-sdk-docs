/// <reference types="jquery" />
import { PdVisContextmenuItem, PdVisContextmenuItemSettings } from '../contextmenu-item';
import { PdEventData } from '../../../../../../core/event';
/**
 * NodeLabelOuter工具配置
 */
export interface PdVisContextmenuItemNodeLabelOuterSettings extends PdVisContextmenuItemSettings {
}
/**
 * NodeLabelOuter工具
 */
export declare class PdVisContextmenuItemNodeLabelOuter extends PdVisContextmenuItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisContextmenuItemNodeLabelOuterSettings;
    /**
     *  配置
     */
    settings: PdVisContextmenuItemNodeLabelOuterSettings;
    /**
     * 构造方法
     * @param {PdVisContextmenuItemNodeLabelOuterSettings} settings - 用户配置
     */
    constructor(settings?: PdVisContextmenuItemNodeLabelOuterSettings);
    /**
     * 初始化配置
     * @param {PdVisContextmenuItemNodeLabelOuterSettings} settings - 用户定义配置
     * @return {PdVisContextmenuItemNodeLabelOuterSettings} 配置
     */
    protected initSettings(settings: PdVisContextmenuItemNodeLabelOuterSettings): PdVisContextmenuItemNodeLabelOuterSettings;
    /**
     * 判断项目是否有效
     * @param {PdEventData} data - 事件数据
     */
    protected isEnable(data: PdEventData): boolean;
    /**
     * 处理点击事件
     * @param {JQuery.Event} event - 事件对象
     */
    protected onClick(event: JQuery.Event): void;
}
