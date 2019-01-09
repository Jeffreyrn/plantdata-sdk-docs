import { PdEleCreatorSettings } from '../../../core/elecreator';
/**
 * 单选配置项
 */
export interface PdUIRadioSettings extends PdEleCreatorSettings {
    /**
     *  input配置项
     */
    input?: PdEleCreatorSettings;
}
/**
 * Radio单选
 */
export declare class PdUIRadio {
    /**
     *  默认配置
     */
    static defaultSettings: PdUIRadioSettings;
    /**
     *  公用className
     */
    protected static clsName: string;
    /**
     *  公用class
     */
    protected static cls: string;
    /**
     * 创建单选框
     * @param {PdUIRadioSettings} settings - 配置项
     * @return {string} 单选框html
     */
    static create(settings: PdUIRadioSettings): string;
}
