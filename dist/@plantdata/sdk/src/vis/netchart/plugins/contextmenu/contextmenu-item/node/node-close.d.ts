/// <reference types="jquery" />
import { PdVisContextmenuItem, PdVisContextmenuItemSettings } from '../contextmenu-item';
import { PdEventData } from '../../../../../../core/event';
/**
 * NodeClose工具配置
 */
export interface PdVisContextmenuItemNodeCloseSettings extends PdVisContextmenuItemSettings {
}
/**
 * NodeClose工具
 */
export declare class PdVisContextmenuItemNodeClose extends PdVisContextmenuItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisContextmenuItemNodeCloseSettings;
    /**
     *  配置
     */
    settings: PdVisContextmenuItemNodeCloseSettings;
    /**
     * 构造方法
     * @param {PdVisContextmenuItemNodeCloseSettings} settings - 用户配置
     */
    constructor(settings?: PdVisContextmenuItemNodeCloseSettings);
    /**
     * 初始化配置
     * @param {PdVisContextmenuItemNodeCloseSettings} settings - 用户定义配置
     * @return {PdVisContextmenuItemNodeCloseSettings} 配置
     */
    protected initSettings(settings: PdVisContextmenuItemNodeCloseSettings): PdVisContextmenuItemNodeCloseSettings;
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
