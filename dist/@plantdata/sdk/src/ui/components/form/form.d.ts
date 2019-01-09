/// <reference types="jquery" />
/**
 * 设置表单值时的配置
 */
export interface PdUIFormSetSettings {
    /**
     *  属性名
     */
    attr?: string;
    /**
     *  是否清楚null
     */
    clearNull?: boolean;
    /**
     * 组件设置器
     */
    setter?: {
        [key: string]: ($item: JQuery, value: any) => void;
    };
}
/**
 * 获取表单值时的配置
 */
export interface PdUIFormGetSettings {
    /**
     *  属性名
     */
    attr?: string;
    /**
     * 组件获取器
     */
    getter?: {
        [key: string]: ($item: JQuery) => any;
    };
}
/**
 * Form 表单
 */
export declare class PdUIForm {
    /**
     *  表单的属性名
     */
    static attrName: string;
    /**
     *  标识是否是数组的属性
     */
    static attrArray: string;
    /**
     *  获取数据之后的回调函数
     */
    static attrAfterGet: string;
    /**
     *  设置数据之后的回调函数
     */
    static attrAfterUpdate: string;
    /**
     *  获取数据之前的回调函数
     */
    static attrBeforeGet: string;
    /**
     *  设置数据之前的回调函数
     */
    static attrBeforeUpdate: string;
    /**
     *  一个完整的item标识
     */
    static attrContainer: string;
    /**
     *    当前item获取数据的方法
     */
    static attrGet: string;
    /**
     *    当前item获取数据的方法对应的key
     */
    static attrGetter: string;
    /**
     *  一个完整的item设置/读取数据的方式的标识，设置后为html方式，否则为text方式
     */
    static attrHTML: string;
    /**
     *    一个完整的item设置/读取数据的标识
     */
    static attrItem: string;
    /**
     *  唯一标识
     */
    static attrKey: string;
    /**
     *  一个完整的item对象模板的标识
     */
    static attrModel: string;
    /**
     *    当前item设置数据的方法
     */
    static attrSet: string;
    /**
     *    当前item设置数据的方法对应的key
     */
    static attrSetter: string;
    /**
     *    当前item设置数据的方法
     */
    static attrSwitch: string;
    /**
     *  表单的className
     */
    static clsName: string;
    /**
     *  表单class
     */
    static cls: string;
    /**
     *  对象数据的标识
     */
    static clsFieldsetName: string;
    /**
     *  获取值的配置
     */
    static getSettings: PdUIFormGetSettings;
    /**
     *  设置值的配置
     */
    static setSettings: PdUIFormSetSettings;
    /**
     * 获取表单的值
     * @param {JQuery} $form - 需要获取值的表单
     * @param {PdUIFormGetSettings} settings - 获取值的配置
     * @return {any} - 表单的值
     */
    static getFormData($form: JQuery, settings?: PdUIFormGetSettings): {
        [key: string]: any;
    };
    /**
     * 设置表单的值
     * @param {JQuery} $form - 需要设置值的表单
     * @param data - 表单的值
     * @param {PdUIFormSetSettings} settings - 设置值的配置
     */
    static setFormData($form: JQuery, data: any, settings?: PdUIFormSetSettings): void;
    /**
     * 将null置为''
     * @param data - 需要处理的数据
     * @return {any} 处理后的数据
     */
    protected static changeNullData(data: any): any;
    /**
     *  清除值为null的值
     * @param data - 需要处理的数据
     * @return {any} 处理后的数据
     */
    protected static clearNullData(data: any): any;
    /**
     * 复制表单元素
     * @param {JQuery} $obj - 需要复制的元素
     * @param {JQuery} $model - 模板
     * @param {JQuery} $parent - 父元素
     * @param {number} idx - 索引
     * @return {JQuery} 复制的表单元素
     */
    protected static cloneFormItem($obj: JQuery, $model: JQuery, $parent: JQuery, idx: number): JQuery;
    /**
     * 获取组表单数据
     * @param {JQuery} $form - 表单容器
     * @param {PdUIFormGetSettings} settings - 获取值的配置
     * @return {any} 获取的组表单数据
     */
    protected static getFormGroupData($form: JQuery, settings?: PdUIFormGetSettings): {
        [key: string]: any;
    };
    /**
     * 获取表单单个元素数据
     * @param {JQuery} $form - 表单元素容器
     * @param {PdUIFormGetSettings} settings - 获取值的配置
     * @return {any} 获取的表单单个元素数据
     */
    protected static getFormItemData($form: JQuery, settings?: PdUIFormGetSettings): any;
    /**
     * 从数据中获取单个值
     * @param {JQuery} $form - 表单元素容器
     * @param data - 表单数据
     * @param {PdUIFormGetSettings} settings - 获取值的配置
     * @return {any} 获取的单个值
     */
    protected static getFormItemValue($form: JQuery, data?: any, settings?: PdUIFormGetSettings): any;
    /**
     * 判断元素的值是否是数组
     * @param {JQuery} $item - 需要判断的元素
     * @return {boolean} 判断的结果
     */
    protected static isArrayItem($item: JQuery): boolean;
    /**
     * 设置组元素数据
     * @param {JQuery} $form - 元素的容器
     * @param data - 设置的值
     * @param {PdUIFormSetSettings} settings - 设置值的配置
     */
    protected static setFormGroupData($form: JQuery, data: any, settings?: PdUIFormSetSettings): void;
    /**
     * 设置子组元素数据
     * @param {JQuery} $form - 元素的容器
     * @param data - 设置的值
     * @param {PdUIFormSetSettings} settings - 设置值的配置
     */
    protected static setSubFormGroupData($form: JQuery, data: any, settings?: PdUIFormSetSettings): void;
    /**
     * 设置单个元素的值
     * @param {JQuery} $form - 表单元素
     * @param data - 元素的值
     * @param {PdUIFormSetSettings} settings - 设置值的配置
     */
    protected static setFormItemData($form: JQuery, data: any, settings?: PdUIFormSetSettings): void;
    /**
     * 更新元素id
     * @param {JQuery} $item - 元素
     * @param {JQuery} $obj - 父元素
     * @param {number} idx - 索引
     */
    protected static updateFormItemId($item: JQuery, $obj: JQuery, idx: number): void;
}
