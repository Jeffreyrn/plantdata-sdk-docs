/// <reference types="jquery" />
import { PdVisContextmenuItem, PdVisContextmenuItemSettings } from '../contextmenu-item';
import { PdEventData } from '../../../../../../core/event';
/**
 * NodeExpand工具配置
 */
export interface PdVisContextmenuItemNodeExpandSettings extends PdVisContextmenuItemSettings {
}
/**
 * NodeExpand工具
 */
export declare class PdVisContextmenuItemNodeExpand extends PdVisContextmenuItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisContextmenuItemNodeExpandSettings;
    /**
     *  配置
     */
    settings: PdVisContextmenuItemNodeExpandSettings;
    /**
     * 构造方法
     * @param {PdVisContextmenuItemNodeExpandSettings} settings - 用户配置
     */
    constructor(settings?: PdVisContextmenuItemNodeExpandSettings);
    /**
     * 初始化配置
     * @param {PdVisContextmenuItemNodeExpandSettings} settings - 用户定义配置
     * @return {PdVisContextmenuItemNodeExpandSettings} 配置
     */
    protected initSettings(settings: PdVisContextmenuItemNodeExpandSettings): PdVisContextmenuItemNodeExpandSettings;
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
