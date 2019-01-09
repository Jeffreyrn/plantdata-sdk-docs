/// <reference types="jquery" />
import { PdSDKPrompt, PdSDKPromptSettings } from '../../prompt/prompt';
import { PdVisTagComplexEditor, PdVisTagComplexEditorSettings, PdVisTagEditorDataType, PdVisTagEditorDataValueType } from '../../../vis/utils/tag-editor/tag-complex-editor';
/**
 * 选择式Tag编辑器配置
 */
export interface PdSDKTagPromptSettings extends PdVisTagComplexEditorSettings {
    /**
     * 输入框配置
     */
    promptSettings: PdSDKPromptSettings;
    /**
     * 选择时执行添加操作
     */
    addOnSelect?: boolean;
}
/**
 * 选择式Tag编辑器
 */
export declare class PdSDKTagPrompt extends PdVisTagComplexEditor {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKTagPromptSettings;
    /**
     *  配置
     */
    settings: PdSDKTagPromptSettings;
    /**
     * 提示组件
     */
    protected $prompt: PdSDKPrompt;
    /**
     * 构造方法
     * @param {PdSDKTagPromptSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKTagPromptSettings);
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
     * @param {PdSDKTagPromptSettings} settings - 用户定义配置
     * @return {PdSDKTagPromptSettings} 配置
     */
    protected initSettings(settings: PdSDKTagPromptSettings): PdSDKTagPromptSettings;
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
     * 取消事件绑定
     */
    protected unbindEvent(): void;
}
