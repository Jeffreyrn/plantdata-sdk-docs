/// <reference types="jquery" />
import { PdVisContextmenuItem, PdVisContextmenuItemSettings } from '../contextmenu-item';
import { PdEventData } from '../../../../../../core/event';
/**
 * LinkLabelShow工具配置
 */
export interface PdVisContextmenuItemLinkLabelShowSettings extends PdVisContextmenuItemSettings {
}
/**
 * LinkLabelShow工具
 */
export declare class PdVisContextmenuItemLinkLabelShow extends PdVisContextmenuItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisContextmenuItemLinkLabelShowSettings;
    /**
     *  配置
     */
    settings: PdVisContextmenuItemLinkLabelShowSettings;
    /**
     * 构造方法
     * @param {PdVisContextmenuItemLinkLabelShowSettings} settings - 用户配置
     */
    constructor(settings?: PdVisContextmenuItemLinkLabelShowSettings);
    /**
     * 初始化配置
     * @param {PdVisContextmenuItemLinkLabelShowSettings} settings - 用户定义配置
     * @return {PdVisContextmenuItemLinkLabelShowSettings} 配置
     */
    protected initSettings(settings: PdVisContextmenuItemLinkLabelShowSettings): PdVisContextmenuItemLinkLabelShowSettings;
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
