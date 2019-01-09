/// <reference types="jquery" />
import { PdVisView, PdVisViewSettings } from './view';
/**
 * 树形视图插件配置
 */
export interface PdVisViewTreeSettings extends PdVisViewSettings {
    mode?: 'radial' | 'hierarchy';
}
/**
 * 树形视图插件
 */
export declare class PdVisViewTree extends PdVisView {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisViewTreeSettings;
    /**
     *  配置
     */
    settings: PdVisViewTreeSettings;
    /**
     * 默认布局
     */
    originMode: string;
    /**
     * 构造方法
     * @param {PdVisViewTreeSettings} settings - 用户配置
     */
    constructor(settings?: PdVisViewTreeSettings);
    /**
     * 获取插件的唯一标识
     */
    getViewType(): string;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 初始化配置
     * @param {PdVisViewTreeSettings} settings - 用户定义配置
     * @return {PdVisViewTreeSettings} 配置
     */
    protected initSettings(settings: PdVisViewTreeSettings): PdVisViewTreeSettings;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
}
