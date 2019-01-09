/// <reference types="jquery" />
import { PdVisContextmenuItem, PdVisContextmenuItemSettings } from '../contextmenu-item';
import { PdEventData } from '../../../../../../core/event';
/**
 * NodeLabelShow工具配置
 */
export interface PdVisContextmenuItemNodeLabelShowSettings extends PdVisContextmenuItemSettings {
}
/**
 * NodeLabelShow工具
 */
export declare class PdVisContextmenuItemNodeLabelShow extends PdVisContextmenuItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisContextmenuItemNodeLabelShowSettings;
    /**
     *  配置
     */
    settings: PdVisContextmenuItemNodeLabelShowSettings;
    /**
     * 构造方法
     * @param {PdVisContextmenuItemNodeLabelShowSettings} settings - 用户配置
     */
    constructor(settings?: PdVisContextmenuItemNodeLabelShowSettings);
    /**
     * 初始化配置
     * @param {PdVisContextmenuItemNodeLabelShowSettings} settings - 用户定义配置
     * @return {PdVisContextmenuItemNodeLabelShowSettings} 配置
     */
    protected initSettings(settings: PdVisContextmenuItemNodeLabelShowSettings): PdVisContextmenuItemNodeLabelShowSettings;
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
