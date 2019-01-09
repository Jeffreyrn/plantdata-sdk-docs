import { PdEleCreatorSettings } from '../../../core/elecreator';
/**
 * 复选框的配置
 */
export interface PdUICheckboxSettings extends PdEleCreatorSettings {
    /**
     *  input的配置
     */
    input?: PdEleCreatorSettings;
}
/**
 * 复选框创建类
 */
export declare class PdUICheckbox {
    /**
     *  默认配置
     */
    static defaultSettings: PdUICheckboxSettings;
    /**
     *  公用className
     */
    protected static clsName: string;
    /**
     *  公用class
     */
    protected static cls: string;
    /**
     * 创建复选框
     * @param {PdUICheckboxSettings} settings - 配置项
     * @return {string} 复选框html
     */
    static create(settings: PdUICheckboxSettings): string;
}
