/// <reference types="jquery" />
import { PdVisContextmenuItem, PdVisContextmenuItemSettings } from '../contextmenu-item';
import { PdEventData } from '../../../../../../core/event';
/**
 * LinkUnemphasis工具配置
 */
export interface PdVisContextmenuItemLinkUnemphasisSettings extends PdVisContextmenuItemSettings {
}
/**
 * LinkUnemphasis工具
 */
export declare class PdVisContextmenuItemLinkUnemphasis extends PdVisContextmenuItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisContextmenuItemLinkUnemphasisSettings;
    /**
     *  配置
     */
    settings: PdVisContextmenuItemLinkUnemphasisSettings;
    /**
     * 构造方法
     * @param {PdVisContextmenuItemLinkUnemphasisSettings} settings - 用户配置
     */
    constructor(settings?: PdVisContextmenuItemLinkUnemphasisSettings);
    /**
     * 初始化配置
     * @param {PdVisContextmenuItemLinkUnemphasisSettings} settings - 用户定义配置
     * @return {PdVisContextmenuItemLinkUnemphasisSettings} 配置
     */
    protected initSettings(settings: PdVisContextmenuItemLinkUnemphasisSettings): PdVisContextmenuItemLinkUnemphasisSettings;
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
