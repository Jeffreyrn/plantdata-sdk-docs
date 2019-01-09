/// <reference types="jquery" />
import { PdUIAutofill, PdUIAutofillSettings } from './autofill';
/**
 * textareaAutocomplete配置
 */
export interface PdUITextareaAutocompleteSettings extends PdUIAutofillSettings {
}
/**
 * TextareaAutocomplete 下拉提示
 */
export declare class PdUITextareaAutocomplete extends PdUIAutofill {
    /**
     *  默认配置
     */
    static defaultSettings: PdUITextareaAutocompleteSettings;
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
     *  下拉框容器的className
     */
    protected static clsPromptName: string;
    /**
     *  配置
     */
    settings: PdUITextareaAutocompleteSettings;
    /**
     * 构造方法
     * @param {PdUITextareaAutocompleteSettings} settings - 用户配置
     */
    constructor(settings?: PdUITextareaAutocompleteSettings);
    /**
     * 初始化settings
     * @param {PdUITextareaAutocompleteSettings} settings - 配置项
     * @return {PdUITextareaAutocompleteSettings} 初始化后的settings
     */
    protected initSettings(settings: PdUITextareaAutocompleteSettings): PdUITextareaAutocompleteSettings;
    /**
     * 初始化模板
     * @return {JQuery} 模板的JQuery对象
     */
    protected initTemplate(): JQuery;
}
