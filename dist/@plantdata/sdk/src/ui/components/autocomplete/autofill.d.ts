/// <reference types="jquery" />
import { PdSelector } from '../../../common/common';
import { PdComponent, PdComponentSettings } from '../../../core/component';
/**
 * autofill缓存配置
 */
export interface PdUIAutofillCacheSettings {
    /**
     *  是否缓存
     */
    enable?: boolean;
    /**
     *  最大缓存数量
     */
    maxNum?: number;
}
/**
 * autofill无数据配置
 */
export interface PdUIAutofillNoDataSettings {
    /**
     *  没数据显示的内容
     */
    content?: string;
    /**
     * 无数据时显示的内容
     * @param {string} text - 搜索关键字
     * @return {string} - 无数据时显示的内容
     */
    contentFunction?: (text: string) => string;
    /**
     *  没数据时是否显示
     */
    enable?: boolean;
}
/**
 * autofill配置
 */
export interface PdUIAutofillSettings extends PdComponentSettings {
    /**
     * 下拉提示显示之前执行的方法
     * @param {string} text - 搜索关键字
     * @param {PdUIAutofill} ins - autofill实例
     */
    beforePrompt?: (text: string, ins: PdUIAutofill) => void;
    /**
     * 搜索之前执行的方法
     * @param data - 选中的提示项
     * @param {JQuery} $el- autofill实例的容器
     */
    beforeSearch?: (data: any, $el: JQuery) => void;
    /**
     *  下拉提示缓存配置
     */
    cache?: PdUIAutofillCacheSettings;
    /**
     * 绘制下拉提示项目的title
     * @param data - 下拉提示中的一项
     * @return {string} - 显示的title
     */
    createItemTitle?: (data: any) => string;
    /**
     * 绘制单条下拉提示项目
     * @param data - 用于生成项目的数据
     * @param {string} text - 搜索的关键字
     * @return {PdSelector} 创建的项目
     */
    createPromptItem?: (data: any, text: string) => PdSelector;
    /**
     * 绘制所有下拉提示项目
     * @param {any[]} data - 用于生成项目的数据
     * @param {string} text - 搜索的关键字
     * @return {PdSelector} 创建的项目
     */
    createPromptItems?: (data: any[], text: string) => PdSelector;
    /**
     *  是否允许空值时搜索
     */
    empty?: boolean;
    /**
     *  间隔时间
     */
    interval?: number;
    /**
     *  下拉列表中是否显示输入的关键字的选项
     */
    keyword?: boolean;
    /**
     *  提示数据为空时显示的内容
     */
    noData?: PdUIAutofillNoDataSettings;
    /**
     * 默认值
     */
    defaultData?: any;
    /**
     * input的name属性
     */
    name?: string;
    /**
     * 下拉提示时执行的方法
     * @param {string} text - 搜索的关键字
     * @return {Promise<any>} Promise
     */
    onPrompt?: (text: string) => Promise<any>;
    /**
     * 选中条目时执行的方法
     * @param data - 搜索的关键字
     * @param {JQuery} $el - 容器
     */
    onSearch?: (data: any, $el: JQuery, ins: PdUIAutofill) => void;
    /**
     * 拉提示选中数据变化时执行的方法
     * @param item - 选中的条目
     * @param {JQuery} $el - autofill实例的容器
     */
    onSelectItemChange?: (item: any, $el: JQuery, ins: PdUIAutofill) => void;
    /**
     * 搜索文本变化时执行的方法
     * @param string - 搜索关键字
     * @param {JQuery} $el - autofill实例的容器
     */
    onSearchTextChange?: (string: any, $el: JQuery, ins: PdUIAutofill) => void;
    /**
     *  输入提示文本
     */
    placeholder?: string;
    /**
     *  下拉提示显示的位置，可选：top，bottom
     */
    position?: 'top' | 'bottom';
    /**
     *  下拉提示生成的Dom节点的class
     */
    promptContainerCls?: string;
    /**
     *  下拉提示生成的Dom节点
     */
    promptContainerParent?: PdSelector;
    /**
     *  是否开启下拉提示
     */
    prompt?: boolean;
    /**
     *  生成AutoComplete的Dom对象
     */
    selector?: PdSelector;
    /**
     * 是否显示正在加载
     */
    showLoading?: boolean;
}
/**
 * Autofill 下拉提示
 */
export declare abstract class PdUIAutofill extends PdComponent {
    /**
     *  默认配置
     */
    static defaultSettings: PdUIAutofillSettings;
    /**
     *  公用className
     */
    protected static clsName: string;
    /**
     *  公用class
     */
    protected static cls: string;
    /**
     *  公用className
     */
    protected static clsInputName: string;
    /**
     *  公用className
     */
    protected static clsInput: string;
    /**
     *  下拉框容器的className
     */
    protected static clsPromptName: string;
    /**
     *  配置
     */
    settings: PdUIAutofillSettings;
    /**
     *  下拉框容器
     */
    protected $optionEl: JQuery;
    /**
     *  缓存列表
     */
    protected cacheList: {
        key: string;
        value: any[];
    }[];
    /**
     *  超时隐藏的定时器
     */
    protected hidePromptTo: any;
    /**
     *  是否正在加载
     */
    protected loading: boolean;
    /**
     *  下拉条目中显示字段的key
     */
    protected nameKey: string;
    /**
     *  最后一个请求的kw
     */
    protected promptText: string;
    /**
     *  选中的条目
     */
    protected selectedItem: any;
    /**
     * 重设下拉提示中选项的可视区域
     * @param {JQuery} $now - 当前选中的条目
     * @param {boolean} isDown - 是否向下
     */
    protected static resetPromptPosition($now: JQuery, isDown?: boolean): void;
    /**
     * 构造方法
     * @param {PdUIAutofillSettings} settings - 用户配置
     */
    constructor(settings?: PdUIAutofillSettings);
    /**
     * 清空下拉内容
     */
    clear(): void;
    /**
     * 绘制所有下拉提示项目
     * @param {any[]} data - 用于生成下拉提示项目的数据
     * @param {string} text - 搜索关键字
     */
    drawPromptItems(data: any[], text: string): void;
    /**
     * 获取搜索关键字
     * @return {string} 搜索关键字
     */
    getSearchText(): string;
    /**
     * 获取选中的条目
     * @return {{ [key: string]: any } | string} 选中的条目
     */
    getSelectedItem(): {
        [key: string]: any;
    } | string;
    /**
     * 执行搜索
     */
    search(): void;
    /**
     * 设置搜索关键字
     * @param {string} text - 搜索关键字
     */
    setSearchText(text: string): void;
    /**
     * 设置选中条目
     * @param item - 选中条目
     */
    setSelectedItem(item: any): void;
    /**
     * 下拉提示显示之前执行的方法
     * @param {string} text - 搜索关键字
     */
    protected beforePrompt(text: string): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 绘制下拉提示项目的title
     * @param data - 用于生成标题的数据
     * @return {PdSelector} - 选项显示的标题
     */
    protected createItemTitle(data: any): PdSelector;
    /**
     * 创建下拉框容器
     * @param {string} exCls - 额外的class名
     * @param {JQuery} $el - 自动提示的容器
     */
    protected createOptionEl(exCls: string, $el: JQuery): void;
    /**
     * 绘制单条下拉提示项目
     * @param data - 用于生成项目的数据
     * @param {string} text - 搜索的关键字
     * @return {PdSelector} 创建的项目
     */
    protected createPromptItem(data: any, text: string): PdSelector;
    /**
     * 绘制所有下拉提示项目
     * @param {any[]} data - 用于生成项目的数据
     * @param {string} text - 搜索的关键字
     * @return {PdSelector} 创建的项目
     */
    protected createPromptItems(data: any[], text: string): PdSelector;
    /**
     * 获取缓存数据
     * @param {string} text - 搜索关键字
     * @return {any[]} 缓存的数据
     */
    protected getCacheData(text: string): any[];
    /**
     * 获取显示的title
     * @param data - 显示的数据
     * @return {string} 显示的title
     */
    protected getName(data: any): string;
    /**
     * 初始化settings
     * @param {PdUIAutofillSettings} settings - 配置项
     * @return {PdUIAutofillSettings} 初始化后的settings
     */
    protected initSettings(settings: PdUIAutofillSettings): PdUIAutofillSettings;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 选中条目改变执行的方法
     */
    protected onSelectedItemChange(): void;
    /**
     * 获取下拉提示数据的方法
     * @param {string} text - 搜索关键字
     */
    protected prompt(text: string): void;
    /**
     * 设置缓存数据
     * @param {string} text - 搜索关键字
     * @param data - 缓存数据
     */
    protected setCacheData(text: string, data: any): void;
    /**
     * 显示加载
     */
    protected showLoading(): void;
    /**
     * 取消绑定事件
     */
    protected unbindEvent(): void;
}
