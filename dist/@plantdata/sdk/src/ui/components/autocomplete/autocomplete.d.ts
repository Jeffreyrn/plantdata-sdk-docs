/// <reference types="jquery" />
import { PdUIAutofill, PdUIAutofillCacheSettings, PdUIAutofillNoDataSettings, PdUIAutofillSettings } from './autofill';
/**
 * inputAutocomplete缓存配置
 */
export interface PdUIAutocompleteCacheSettings extends PdUIAutofillCacheSettings {
}
/**
 * inputAutocomplete图标配置
 */
export interface PdUIAutocompleteIconSettings {
    /**
     *  是否允许点击
     */
    click?: boolean;
    /**
     *  图标内容
     */
    content?: string;
    /**
     *  是否显示图标
     */
    enable?: boolean;
    /**
     * 点击执行的事件
     * @param {PdUIAutocomplete} ins - inputAutocomplete实例
     * @param event - 点击事件对象
     */
    onclick?: (ins: PdUIAutocomplete, event: any) => void;
}
/**
 * inputAutocomplete无数据配置
 */
export interface PdUIAutocompleteNoDataSettings extends PdUIAutofillNoDataSettings {
}
/**
 * inputAutocomplete配置
 */
export interface PdUIAutocompleteSettings extends PdUIAutofillSettings {
    /**
     *  下拉提示icon配置，参见PdUIAutocompleteIconSettings
     */
    icon?: {
        /**
         *  关闭图标的配置
         */
        close?: PdUIAutocompleteIconSettings;
        /**
         *  回车图标的配置
         */
        enter?: PdUIAutocompleteIconSettings;
        /**
         *  搜索图标的配置
         */
        search?: PdUIAutocompleteIconSettings;
    };
    /**
     *  inputAutocomplete的类型 可选：default，normal
     */
    theme?: string;
    /**
     *  autofill的大小 可选：xs，sm，md，lg
     */
    size?: 'xs' | 'sm' | 'md' | 'lg';
}
/**
 * InputAutocomplete 下拉提示
 */
export declare class PdUIAutocomplete extends PdUIAutofill {
    /**
     *  默认配置
     */
    static defaultSettings: PdUIAutocompleteSettings;
    /**
     *  标签名称
     */
    static tagName: string;
    /**
     *  公用className
     */
    protected static clsName: string;
    /**
     *  公用class
     */
    protected static cls: string;
    /**
     *  图标可点击时的className
     */
    protected static clsClickableName: string;
    /**
     *  下拉框容器的className
     */
    protected static clsPromptName: string;
    /**
     *  配置
     */
    settings: PdUIAutocompleteSettings;
    /**
     * 构造方法
     * @param {PdUIAutocompleteSettings} settings - 用户配置
     */
    constructor(settings?: PdUIAutocompleteSettings);
    /**
     * 创建图标
     * @param {PdUIAutocompleteIconSettings} settings - 图标配置
     * @param {JQuery} $el - inputAutocomplete实例的容器
     */
    protected createIcon(settings: PdUIAutocompleteIconSettings, $el: JQuery): void;
    /**
     * 初始化settings
     * @param {PdUIAutocompleteSettings} settings - 配置项
     * @return {PdUIAutocompleteSettings} 初始化后的settings
     */
    protected initSettings(settings: PdUIAutocompleteSettings): PdUIAutocompleteSettings;
    /**
     * 初始化模板
     * @return {JQuery} 模板的JQuery对象
     */
    protected initTemplate(): JQuery;
}
