/// <reference types="jquery" />
import { PdVisContextmenuItem, PdVisContextmenuItemSettings } from '../contextmenu-item';
import { PdEventData } from '../../../../../../core/event';
/**
 * NodeEmphasis工具配置
 */
export interface PdVisContextmenuItemNodeEmphasisSettings extends PdVisContextmenuItemSettings {
}
/**
 * NodeEmphasis工具
 */
export declare class PdVisContextmenuItemNodeEmphasis extends PdVisContextmenuItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisContextmenuItemNodeEmphasisSettings;
    /**
     *  配置
     */
    settings: PdVisContextmenuItemNodeEmphasisSettings;
    /**
     * 构造方法
     * @param {PdVisContextmenuItemNodeEmphasisSettings} settings - 用户配置
     */
    constructor(settings?: PdVisContextmenuItemNodeEmphasisSettings);
    /**
     * 初始化配置
     * @param {PdVisContextmenuItemNodeEmphasisSettings} settings - 用户定义配置
     * @return {PdVisContextmenuItemNodeEmphasisSettings} 配置
     */
    protected initSettings(settings: PdVisContextmenuItemNodeEmphasisSettings): PdVisContextmenuItemNodeEmphasisSettings;
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
