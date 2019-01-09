/// <reference types="jquery" />
import { PdUIAutocomplete, PdUIAutocompleteSettings } from '../../ui/components/autocomplete/autocomplete';
import { PdKGSchema, PdSDKSchemaSettings } from '../schema/schema';
import { PdSDKKGSettings } from '../utils/utils';
import { PdSelector } from '../../common/common';
import { PdComponent, PdComponentSettings } from '../../core/component';
/**
 * 下拉提示配置
 */
export interface PdSDKPromptSettings extends PdComponentSettings, PdSDKKGSettings {
    /**
     *  Autocomplete配置
     */
    autocompleteSettings?: PdUIAutocompleteSettings;
    /**
     *  onPrompt请求动态设置
     */
    dynamicSettings?: Function;
    /**
     *  自动按类型进行合并选项
     */
    groupEnable?: boolean;
    /**
     *  是否允许首尾空格
     */
    isTrim?: boolean;
    /**
     *  下拉提示异步加载设置
     */
    promptSettings?: PdSDKKGSettings;
    /**
     * 下拉提示类型， 可选值：0表示实例提示，1：概念实例提示
     * @type{number}
     */
    promptType?: 0 | 1 | string;
    /**
     *  Schema
     */
    schema?: PdKGSchema;
    /**
     *  SDK Schema设置
     */
    schemaSettings?: PdSDKSchemaSettings;
    /**
     *  生成下拉提示组件的容器
     */
    selector?: PdSelector;
}
/**
 * SDK 下拉提示
 */
export declare class PdSDKPrompt extends PdComponent {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPromptSettings;
    /**
     *  配置
     */
    settings: PdSDKPromptSettings;
    /**
     *  Autocomplete实例
     */
    autocomplete: PdUIAutocomplete;
    /**
     *  高亮
     * @param {string} str - 原始字串
     * @param {string} text - 高亮文本
     * @return {string} 高亮后的字串
     */
    protected static highlight(str: string, text: string): string;
    /**
     * 构造方法
     * @param {PdSDKPromptSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKPromptSettings);
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 生成渲染概念/实例的单个下拉提示选项的方法
     * @return {(data: any, text: string) => string} 渲染概念/实例的单个下拉提示选项的方法
     */
    drawPromptKnowledgeItem(): (data: any, text: string) => string;
    /**
     * 生成渲染实例的单个下拉提示选项的方法
     * @return {(data: any, text: string) => string} 渲染实例的单个下拉提示选项的方法
     */
    drawPromptItem(): (data: any, text: string) => string;
    /**
     * 生成渲染一组下拉提示选项的方法
     * @return {(data: any[], text: string) => PdSelector} 渲染一组下拉提示选项的方法
     */
    drawPromptItems(): (data: any[], text: string) => PdSelector;
    /**
     * 生成加载下拉提示数据
     * @param {PdSDKPromptSettings} settings - 下拉提示配置
     * @return {(text: string) => Promise<any>} 加载下拉提示数据
     */
    onPrompt(settings: PdSDKPromptSettings): (text: string) => Promise<any>;
    /**
     * 更新schema
     * @param {PdKGSchema} schema - 新的schema
     */
    updateSchema(schema: PdKGSchema): void;
    /**
     * 初始化自动完成插件
     */
    protected initAutocomplete(): void;
    /**
     * 初始化配置
     * @param {PdSDKPromptSettings} settings - 用户定义配置
     * @return {PdSDKPromptSettings} 配置
     */
    protected initSettings(settings: PdSDKPromptSettings): PdSDKPromptSettings;
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
