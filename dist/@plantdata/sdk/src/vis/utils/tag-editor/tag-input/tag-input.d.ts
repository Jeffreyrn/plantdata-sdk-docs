/// <reference types="jquery" />
import { PdVisTagEditor, PdVisTagEditorSettings } from '../tag-editor';
import { PdUIInputSettings } from '../../../../ui/components/input/input';
/**
 * 输入式Tag编辑器配置
 */
export interface PdVisTagInputSettings extends PdVisTagEditorSettings {
    /**
     * 输入框配置
     */
    inputSettings: PdUIInputSettings;
}
/**
 * 输入式Tag编辑器
 */
export declare class PdVisTagInput extends PdVisTagEditor {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisTagInputSettings;
    /**
     *  配置
     */
    settings: PdVisTagInputSettings;
    /**
     * 构造方法
     * @param {PdVisTagInputSettings} settings - 用户配置
     */
    constructor(settings?: PdVisTagInputSettings);
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
     * @param {PdVisTagInputSettings} settings - 用户定义配置
     * @return {PdVisTagInputSettings} 配置
     */
    protected initSettings(settings: PdVisTagInputSettings): PdVisTagInputSettings;
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
