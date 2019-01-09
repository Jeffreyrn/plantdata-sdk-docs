/// <reference types="jquery" />
import { PdVisDialog, PdVisDialogSettings } from '../dialog/dialog';
/**
 * 确认框配置
 */
export interface PdVisConfirmSettings extends PdVisDialogSettings {
}
/**
 * 确认框
 */
export declare class PdVisConfirm extends PdVisDialog {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisConfirmSettings;
    /**
     *  配置
     */
    settings: PdVisConfirmSettings;
    /**
     * 构造方法
     * @param {PdVisConfirmSettings} settings - 用户配置
     */
    constructor(settings?: PdVisConfirmSettings);
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 初始化配置
     * @param {PdVisConfirmSettings} settings - 用户定义配置
     * @return {PdVisConfirmSettings} 配置
     */
    protected initSettings(settings: PdVisConfirmSettings): PdVisConfirmSettings;
}
