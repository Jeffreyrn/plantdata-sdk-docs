/// <reference types="jquery" />
import { PdVisPlugin, PdVisPluginSettings } from '../plugin';
import { PdSelector } from '../../../../common/common';
/**
 * 混合子插件配置
 */
export interface PdVisPluginMixinsItemSettings {
    /**
     * 主体内容
     */
    body?: PdSelector;
    /**
     * 额外的class
     */
    cls?: string;
    /**
     * 隐藏头部的内容
     */
    hideHeader?: boolean;
    /**
     * 图标
     */
    icon?: PdSelector;
    /**
     * 面板中的顺序
     */
    index?: number;
    /**
     * 指定在面板元素中生成子面板
     */
    parent?: PdSelector;
    /**
     * 标题
     */
    title?: PdSelector;
}
/**
 * 混合插件配置
 */
export interface PdVisPluginMixinsSettings extends PdVisPluginSettings {
}
/**
 * 混合模块配置
 */
export declare abstract class PdVisPluginMixins extends PdVisPlugin {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisPluginMixinsSettings;
    /**
     *  配置
     */
    settings: PdVisPluginMixinsSettings;
    /**
     * 子面板列表
     */
    protected $children: {
        index: number;
        child: JQuery;
        parent: PdSelector;
    }[];
    /**
     * 构造方法
     * @param {PdVisPluginMixinsSettings} settings - 用户配置
     */
    constructor(settings?: PdVisPluginMixinsSettings);
    /**
     * 添加子面板
     * @return {JQuery} - 面板的JQuery对象
     */
    addChild(settings?: PdVisPluginMixinsItemSettings): JQuery;
    /**
     * 获取子面板的主体
     * @param {JQuery} $item - 子面板
     * @return {JQuery} 子面板主体
     */
    getBody($item: JQuery): JQuery;
    /**
     * 获取子面板的头部
     * @param {JQuery} $item - 子面板
     * @return {JQuery} 子面板头部
     */
    getHeader($item: JQuery): JQuery;
    /**
     *
     * 更新子面板的主体
     * @param {JQuery} $item - 子面板
     * @param {PdSelector} body - 主体内容
     * @return {JQuery} 子面板主体
     */
    updateBody($item: JQuery, body?: PdSelector): void;
    /**
     * 更新子面板的头部
     * @param {JQuery} $item - 子面板
     * @param {PdSelector} title - 头部内容
     * @param {PdSelector} icon - 头部内容的图标
     * @return {JQuery} 子面板头部
     */
    updateHeader($item: JQuery, title?: PdSelector, icon?: PdSelector): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    protected createTemplate(title: string, icon: string, tooltip?: string): JQuery;
    /**
     * 初始化配置
     * @param {PdVisPluginMixinsSettings} settings - 用户定义配置
     * @return {PdVisPluginMixinsSettings} 配置
     */
    protected initSettings(settings: PdVisPluginMixinsSettings): PdVisPluginMixinsSettings;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 子面板排序
     */
    protected orderChildren(): void;
    /**
     * 取消绑定事件
     */
    protected unbindEvent(): void;
}
