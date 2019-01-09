/// <reference types="jquery" />
import { PdVisContextmenuItem, PdVisContextmenuItemSettings } from '../contextmenu-item';
import { PdEventData } from '../../../../../../core/event';
/**
 * NodeUnemphasis工具配置
 */
export interface PdVisContextmenuItemNodeUnemphasisSettings extends PdVisContextmenuItemSettings {
}
/**
 * NodeUnemphasis工具
 */
export declare class PdVisContextmenuItemNodeUnemphasis extends PdVisContextmenuItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisContextmenuItemNodeUnemphasisSettings;
    /**
     *  配置
     */
    settings: PdVisContextmenuItemNodeUnemphasisSettings;
    /**
     * 构造方法
     * @param {PdVisContextmenuItemNodeUnemphasisSettings} settings - 用户配置
     */
    constructor(settings?: PdVisContextmenuItemNodeUnemphasisSettings);
    /**
     * 初始化配置
     * @param {PdVisContextmenuItemNodeUnemphasisSettings} settings - 用户定义配置
     * @return {PdVisContextmenuItemNodeUnemphasisSettings} 配置
     */
    protected initSettings(settings: PdVisContextmenuItemNodeUnemphasisSettings): PdVisContextmenuItemNodeUnemphasisSettings;
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
