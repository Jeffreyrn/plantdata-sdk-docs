/// <reference types="jquery" />
import { PdVisContextmenuItem, PdVisContextmenuItemSettings } from '../contextmenu-item';
import { PdEventData } from '../../../../../../core/event';
/**
 * NodeLabelInner工具配置
 */
export interface PdVisContextmenuItemNodeLabelInnerSettings extends PdVisContextmenuItemSettings {
}
/**
 * NodeLabelInner工具
 */
export declare class PdVisContextmenuItemNodeLabelInner extends PdVisContextmenuItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisContextmenuItemNodeLabelInnerSettings;
    /**
     *  配置
     */
    settings: PdVisContextmenuItemNodeLabelInnerSettings;
    /**
     * 构造方法
     * @param {PdVisContextmenuItemNodeLabelInnerSettings} settings - 用户配置
     */
    constructor(settings?: PdVisContextmenuItemNodeLabelInnerSettings);
    /**
     * 初始化配置
     * @param {PdVisContextmenuItemNodeLabelInnerSettings} settings - 用户定义配置
     * @return {PdVisContextmenuItemNodeLabelInnerSettings} 配置
     */
    protected initSettings(settings: PdVisContextmenuItemNodeLabelInnerSettings): PdVisContextmenuItemNodeLabelInnerSettings;
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