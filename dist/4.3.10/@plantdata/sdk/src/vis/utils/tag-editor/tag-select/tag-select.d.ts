/// <reference types="jquery" />
import { PdUISelectSettings } from '../../../../ui/components/select/select';
import { PdVisTagComplexEditor, PdVisTagComplexEditorSettings, PdVisTagEditorDataType, PdVisTagEditorDataValueType } from '../tag-complex-editor';
/**
 * 选择式Tag编辑器配置
 */
export interface PdVisTagSelectSettings extends PdVisTagComplexEditorSettings {
    /**
     * 输入框配置
     */
    selectSettings: PdUISelectSettings;
}
/**
 * 选择式Tag编辑器
 */
export declare class PdVisTagSelect extends PdVisTagComplexEditor {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisTagSelectSettings;
    /**
     *  配置
     */
    settings: PdVisTagSelectSettings;
    /**
     * 构造方法
     * @param {PdVisTagSelectSettings} settings - 用户配置
     */
    constructor(settings?: PdVisTagSelectSettings);
    /**
     * value转为data
     * @param {PdVisTagEditorDataValueType} value - 待转换的value
     * @return {PdVisTagEditorDataType} - 转换后的数据
     */
    valueToData(value: PdVisTagEditorDataValueType): PdVisTagEditorDataType;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 创建编辑器
     * @return {JQuery} - 编辑器的JQuery对象
     */
    protected createEditor(): JQuery;
    /**
     * 初始化配置
     * @param {PdVisTagSelectSettings} settings - 用户定义配置
     * @return {PdVisTagSelectSettings} 配置
     */
    protected initSettings(settings: PdVisTagSelectSettings): PdVisTagSelectSettings;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 取消事件绑定
     */
    protected unbindEvent(): void;
}
