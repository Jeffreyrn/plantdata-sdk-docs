/// <reference types="jquery" />
import { PdVisPluginToolBox, PdVisPluginToolBoxSettings } from '../toolbox/toolbox';
import { PdEventData } from '../../../../core/event';
import { PdVisContextmenuItem, PdVisContextmenuItemSettings } from './contextmenu-item/contextmenu-item';
/**
 * 右键菜单插件配置
 */
export interface PdVisPluginContextmenuSettings extends PdVisPluginToolBoxSettings {
}
/**
 * 右键菜单插件
 */
export declare class PdVisPluginContextmenu extends PdVisPluginToolBox {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisPluginContextmenuSettings;
    /**
     *  配置
     */
    settings: PdVisPluginContextmenuSettings;
    /**
     * 构造方法
     * @param {PdVisPluginContextmenuSettings} settings - 用户配置
     */
    constructor(settings?: PdVisPluginContextmenuSettings);
    /**
     * 获取插件的唯一标识
     */
    getPluginType(): string;
    /**
     * 显示右键菜单之前执行的方法
     * @param {{[p: string]: any}} data - 配置
     * @return {boolean} 是否允许显示
     */
    protected beforeShow(data: {
        [key: string]: any;
    }): boolean;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 创建通用工具配置
     */
    protected createToolItemSettings(settings?: PdVisContextmenuItemSettings): PdVisContextmenuItemSettings;
    /**
     * 创建通用工具
     */
    protected createGeneralToolItem(settings: PdVisContextmenuItemSettings): PdVisContextmenuItem;
    /**
     * 处理右击事件
     * @param {PdEventData} data - 事件数据
     */
    protected handleRightClick(data: PdEventData): void;
    /**
     * 初始化配置
     * @param {PdVisPluginContextmenuSettings} settings - 用户定义配置
     * @return {PdVisPluginContextmenuSettings} 配置
     */
    protected initSettings(settings: PdVisPluginContextmenuSettings): PdVisPluginContextmenuSettings;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
}
