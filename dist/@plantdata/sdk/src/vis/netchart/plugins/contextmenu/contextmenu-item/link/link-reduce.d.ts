/// <reference types="jquery" />
import { PdVisContextmenuItem, PdVisContextmenuItemSettings } from '../contextmenu-item';
import { PdEventData } from '../../../../../../core/event';
/**
 * LinkReduce工具配置
 */
export interface PdVisContextmenuItemLinkReduceSettings extends PdVisContextmenuItemSettings {
}
/**
 * LinkReduce工具
 */
export declare class PdVisContextmenuItemLinkReduce extends PdVisContextmenuItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisContextmenuItemLinkReduceSettings;
    /**
     *  配置
     */
    settings: PdVisContextmenuItemLinkReduceSettings;
    /**
     * 构造方法
     * @param {PdVisContextmenuItemLinkReduceSettings} settings - 用户配置
     */
    constructor(settings?: PdVisContextmenuItemLinkReduceSettings);
    /**
     * 初始化配置
     * @param {PdVisContextmenuItemLinkReduceSettings} settings - 用户定义配置
     * @return {PdVisContextmenuItemLinkReduceSettings} 配置
     */
    protected initSettings(settings: PdVisContextmenuItemLinkReduceSettings): PdVisContextmenuItemLinkReduceSettings;
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
