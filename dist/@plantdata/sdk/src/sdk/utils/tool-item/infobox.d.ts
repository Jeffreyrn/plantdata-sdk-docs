/// <reference types="jquery" />
import { PdSDKInfobox, PdSDKInfoboxSettings } from '../../infobox/infobox';
import { PdVisContextmenuItem, PdVisContextmenuItemSettings } from '../../../vis/netchart/plugins/contextmenu/contextmenu-item/contextmenu-item';
import { PdSDKKGSettings } from '../utils';
/**
 * 知识卡片工具配置
 */
export interface PdSDKToolInfoboxSettings extends PdSDKKGSettings, PdVisContextmenuItemSettings {
    /**
     * 知识卡片配置
     */
    infoboxSettings?: PdSDKInfoboxSettings;
}
/**
 * 知识卡片工具
 */
export declare class PdSDKToolInfobox extends PdVisContextmenuItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKToolInfoboxSettings;
    /**
     *  配置
     */
    settings: PdSDKToolInfoboxSettings;
    /**
     *  高级检索插件实例
     */
    protected infobox: PdSDKInfobox;
    /**
     * 构造方法
     * @param {PdSDKToolInfoboxSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKToolInfoboxSettings);
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 初始化配置
     * @param {PdSDKToolInfoboxSettings} settings - 用户定义配置
     * @return {PdSDKToolInfoboxSettings} 配置
     */
    protected initSettings(settings: PdSDKToolInfoboxSettings): PdSDKToolInfoboxSettings;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
}
