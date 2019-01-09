/// <reference types="jquery" />
import { PdVisTagEditor, PdVisTagEditorSettings } from './tag-editor';
/**
 * Tag编辑器数据类型
 */
export declare type PdVisTagEditorDataValueType = any;
/**
 * Tag编辑器数据类型
 */
export declare type PdVisTagEditorDataType = {
    [key: string]: string | PdVisTagEditorDataValueType | any;
};
/**
 * Tag编辑器配置
 */
export interface PdVisTagComplexEditorSettings extends PdVisTagEditorSettings {
    /**
     * 添加之前执行的方法。返回false时，阻止添加
     * @param {PdVisTagEditorDataType} item - 待添加的数据
     * @return {Promise<any>} - 检验添加的异步实例
     */
    beforeAdd?: (item: PdVisTagEditorDataType, ins: PdVisTagComplexEditor) => Promise<any>;
    /**
     * 删除之前执行的方法。返回false时，阻止删除
     * @param {PdVisTagEditorDataType} item - 待删除的数据
     * @return {Promise<any>} - 检验删除的异步实例
     */
    beforeDelete?: (item: PdVisTagEditorDataType, ins: PdVisTagComplexEditor) => Promise<any>;
    /**
     * 数据
     */
    data?: PdVisTagEditorDataType[];
    /**
     * 显示的Key
     */
    labelKey?: string;
    /**
     * 存储值Key
     */
    valueKey?: string;
}
/**
 * Tag编辑器
 */
export declare abstract class PdVisTagComplexEditor extends PdVisTagEditor {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisTagComplexEditorSettings;
    /**
     *  配置
     */
    settings: PdVisTagComplexEditorSettings;
    /**
     * 数据
     */
    protected data: PdVisTagEditorDataType[];
    /**
     * 构造方法
     * @param {PdVisTagComplexEditorSettings} settings - 用户配置
     */
    constructor(settings?: PdVisTagComplexEditorSettings);
    /**
     * data转为value
     * @param {PdVisTagEditorDataType} data - 待转换的数据
     * @return {PdVisTagEditorDataValueType} - 转换后的value
     */
    dataToValue(data: PdVisTagEditorDataType): PdVisTagEditorDataValueType;
    /**
     * 判断数据是否已存在
     * @param {PdVisTagEditorDataValueType} value - 数据的值
     * @return {boolean} - 是否存在
     */
    existData(value: PdVisTagEditorDataValueType): boolean;
    /**
     * 获取数据
     * @return {any[]} - 数据
     */
    getData(): any[];
    /**
     * value转为data
     * @param {PdVisTagEditorDataValueType} value - 待转换的value
     * @return {PdVisTagEditorDataType} - 转换后的数据
     */
    valueToData(value: PdVisTagEditorDataValueType): PdVisTagEditorDataType;
    /**
     * 添加数据
     * @param {PdVisTagEditorDataType} data - 数据
     */
    protected createData(data: PdVisTagEditorDataType): string;
    /**
     * 初始化配置
     * @param {PdVisTagComplexEditorSettings} settings - 用户定义配置
     * @return {PdVisTagComplexEditorSettings} 配置
     */
    protected initSettings(settings: PdVisTagComplexEditorSettings): PdVisTagComplexEditorSettings;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
}
