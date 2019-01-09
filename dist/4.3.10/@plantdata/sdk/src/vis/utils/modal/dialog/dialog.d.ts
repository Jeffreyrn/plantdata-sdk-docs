/// <reference types="jquery" />
import { PdVisModal, PdVisModalSettings } from '../modal';
/**
 * 弹出框配置
 */
export interface PdVisDialogSettings extends PdVisModalSettings {
    /**
     * 否定按钮点击回调
     * @param {JQuery.Event} event 点击事件对象
     * @param {PdVisDialogSettings} settings - 弹出框配置
     * @return {Promise<any>} - 异步实例
     */
    negativeClick?: (event: JQuery.Event, settings: PdVisDialogSettings) => Promise<any>;
    /**
     * 否定按钮显示文本
     */
    negativeText?: string;
    /**
     * 肯定按钮点击回调
     * @param {JQuery.Event} event 点击事件对象
     * @param {PdVisDialogSettings} settings - 弹出框配置
     * @return {Promise<any>} - 异步实例
     */
    positiveClick?: (event: JQuery.Event, settings: PdVisDialogSettings) => Promise<any>;
    /**
     * 肯定按钮显示文本
     */
    positiveText?: string;
}
/**
 * 弹出框
 */
export declare class PdVisDialog extends PdVisModal {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisDialogSettings;
    /**
     *  配置
     */
    settings: PdVisDialogSettings;
    /**
     * 构造方法
     * @param {PdVisDialogSettings} settings - 用户配置
     */
    constructor(settings?: PdVisDialogSettings);
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 初始化配置
     * @param {PdVisDialogSettings} settings - 用户定义配置
     * @return {PdVisDialogSettings} 配置
     */
    protected initSettings(settings: PdVisDialogSettings): PdVisDialogSettings;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 取消绑定事件
     */
    protected unbindEvent(): void;
}
