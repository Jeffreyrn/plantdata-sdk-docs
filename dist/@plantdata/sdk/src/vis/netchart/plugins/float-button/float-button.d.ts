/// <reference types="jquery" />
import { PdVisPlugin, PdVisPluginSettings } from '../plugin';
/**
 *  浮动按钮插件配置
 */
export interface PdVisPluginFloatButtonSettings extends PdVisPluginSettings {
    /**
     * 标题
     */
    title: string;
    /**
     * 图标
     */
    icon: string;
    /**
     * class
     */
    cls: string;
    /**
     * 点击触发的事件
     * @param {JQuery.Event} event - 事件对象
     */
    click?: (event: JQuery.Event) => void;
    /**
     * 事件列表
     */
    events?: {
        [key: string]: (event: JQuery.Event) => void;
    };
}
/**
 * 浮动按钮插件
 */
export declare class PdVisPluginFloatButton extends PdVisPlugin {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisPluginFloatButtonSettings;
    /**
     *  配置
     */
    settings: PdVisPluginFloatButtonSettings;
    /**
     * 构造方法
     * @param {PdVisPluginFloatButtonSettings} settings - 用户配置
     */
    constructor(settings?: PdVisPluginFloatButtonSettings);
    /**
     * 获取插件的唯一标识
     */
    getPluginType(): string;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 初始化配置
     * @param {PdVisPluginFloatButtonSettings} settings - 用户定义配置
     * @return {PdVisPluginFloatButtonSettings} 配置
     */
    protected initSettings(settings: PdVisPluginFloatButtonSettings): PdVisPluginFloatButtonSettings;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 取消绑定事件
     */
    protected unbindEvent(): void;
}
