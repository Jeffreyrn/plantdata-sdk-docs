/// <reference types="jquery" />
import { PdOptionsType, PdOptionType } from '../../../common/common';
/**
 * PdVisEditItem的类型
 */
export declare type PdVisEditItemType = 'custom' | 'date' | 'datetime' | 'datetimeRange' | 'dateRange' | 'input' | 'select' | 'checkbox' | 'radio' | 'switch' | 'group' | 'textarea' | 'label';
/**
 * 编辑插件配置
 */
export interface PdVisEditItemSettings {
    /**
     * 子编辑插件配置
     */
    children?: PdVisEditItemSettings[];
    /**
     * class
     */
    class?: string;
    /**
     * 是否可删除
     */
    deletable?: boolean;
    /**
     * 是否禁用该选项
     */
    disabled?: boolean;
    /**
     * 是否可编辑
     */
    editable?: boolean;
    /**
     * 获取数据的方法
     * @param {PdVisEditItemSettings} settings - 当前项目配置
     * @param {JQuery<HTMLElement>} $item - 当前项目对应的DOM
     * @return {any} 数据结果
     */
    getValue?: (settings: PdVisEditItemSettings, $item: JQuery<HTMLElement>) => any;
    /**
     * 是否树状显示，仅类型为checkbox时有效
     */
    isTree?: boolean;
    /**
     * 输入类型
     */
    inputType?: 'text' | 'number';
    /**
     *  编辑数据的html
     */
    html?: string;
    /**
     *  编辑数据的KEY
     */
    key?: string;
    /**
     *  编辑数据的名称
     */
    label?: string;
    /**
     * 编辑选项Label展示模式
     */
    mode?: 'label' | 'placeholder';
    /**
     *  编辑数据可选项
     */
    options?: PdOptionsType;
    /**
     *  编辑数据的占位提示语
     */
    placeholder?: string;
    /**
     *  后缀
     */
    postfix?: string;
    /**
     * 是否必填
     */
    required?: boolean;
    /**
     *  当前编辑数据选中的值
     */
    selected?: any;
    /**
     * 设置数据的方法
     * @param {PdVisEditItemSettings} settings - 当前项目配置
     * @param {JQuery<HTMLElement>} $item - 当前项目对应的DOM
     * @param {any} value - 数据
     */
    setValue?: (settings: PdVisEditItemSettings, $item: JQuery<HTMLElement>, value: any) => void;
    /**
     * 编辑类型
     */
    type?: PdVisEditItemType;
    /**
     *  当前编辑数据选中的值
     */
    value?: any;
}
/**
 * 编辑插件
 */
export declare class PdVisEditItem {
    /**
     * 检验编辑项是否为空
     * @param {JQuery} $item - 编辑项的JQuery对象
     * @return {boolean} 编辑项是否为空
     */
    static checkValueItemRequired($item: JQuery): boolean;
    /**
     * 清空编辑项状态
     * @param {JQuery} $item - 编辑项的JQuery对象
     */
    static clearEditItemStatus($item: JQuery): void;
    /**
     * 生成Checkbox类型编辑项的HTML
     * @param {PdVisEditItemSettings} settings - 编辑插件配置
     * @return {string} 编辑的HTML
     */
    static createCheckbox(settings: PdVisEditItemSettings): string;
    /**
     * 创建编辑器的字串
     * @return {string} 编辑器的HTML
     */
    static createEditor(value?: PdVisEditItemSettings, allow?: string[], childrenAllow?: string[]): string;
    /**
     * 生成Group类型编辑项的HTML
     * @param {PdVisEditItemSettings} settings - 编辑插件配置
     * @param {string} path - 配置的路径
     * @return {string} 编辑的HTML
     */
    static createGroup(settings: PdVisEditItemSettings, path?: string): string;
    /**
     * 生成Input类型编辑项的HTML
     * @param {PdVisEditItemSettings} settings - 编辑插件配置
     * @return {string} 编辑的HTML
     */
    static createInput(settings: PdVisEditItemSettings): string;
    /**
     * 生成Radio类型编辑项的HTML
     * @param {PdVisEditItemSettings} settings - 编辑插件配置
     * @return {string} 编辑的HTML
     */
    static createRadio(settings: PdVisEditItemSettings): string;
    /**
     * 生成Select类型编辑项的HTML
     * @param {PdVisEditItemSettings} settings - 编辑插件配置
     * @return {string} 编辑的HTML
     */
    static createSelect(settings: PdVisEditItemSettings): string;
    /**
     * 生成Switch类型编辑项的HTML
     * @param {PdVisEditItemSettings} settings - 编辑插件配置
     * @return {string} 编辑的HTML
     */
    static createSwitch(settings: PdVisEditItemSettings): string;
    /**
     * 生成Textarea类型编辑项的HTML
     * @param {PdVisEditItemSettings} settings - 编辑插件配置
     * @return {string} 编辑的HTML
     */
    static createTextarea(settings: PdVisEditItemSettings): string;
    /**
     * 创建编辑项的HTML
     * @param {PdVisEditItemSettings} settings - 编辑插件配置
     * @param {string} path - 配置的路径
     * @return {string} 编辑的HTML
     */
    static createEditItem(settings: PdVisEditItemSettings, path?: string): string;
    /**
     * 生成编辑选项的HTML
     * @param {string} title - 配置的标题
     * @param {string} content - 配置的主体
     * @param {string} cls - 配置的额外class
     * @param {string} path - 配置的路径
     * @return {string} 编辑选项的HTML
     */
    static buildEditItem(title: string, content: string, cls: string, path?: string): string;
    /**
     * 生成编辑选项的HTML
     * @param {PdVisEditItemSettings} settings - 编辑插件选项配置
     * @param {string} path - 配置的路径
     * @return {string} 编辑选项的HTML
     */
    static gentEditItem(settings: PdVisEditItemSettings, path?: string): string;
    /**
     * 更新编辑项状态
     * @param {JQuery} $item - 编辑项的JQuery对象
     * @param {boolean} status - 是否通过校验
     */
    static updateEditItemStatus($item: JQuery, status?: boolean): void;
    /**
     * 生成Checkbox或Radio类型编辑项的HTML
     * @param {PdVisEditItemSettings} settings - 编辑插件配置
     * @param {'checkbox' | 'radio'} type - 类型
     * @return {string} 编辑的HTML
     */
    protected static createCheckboxOrRadio(settings: PdVisEditItemSettings, type: 'checkbox' | 'radio'): string;
    /**
     * 生成树形编辑项的HTML
     * @param {PdOptionType[]} options - 可选项配置
     * @param {string} name - name属性
     * @param {number} level - 当前层级
     * @return {string} 编辑的HTML
     */
    protected static createTree(options: PdOptionType[], name: string, level?: number): string;
}
