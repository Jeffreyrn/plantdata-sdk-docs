import { PdEleCreatorSettings } from '../../../core/elecreator';
/**
 * 开关配置项
 */
export interface PdUISwitchSettings extends PdEleCreatorSettings {
    /**
     *  显示文字
     */
    label?: string[];
    /**
     *  尺寸
     */
    size?: '' | 'xs' | 'md';
    /**
     *  input配置项
     */
    input?: PdEleCreatorSettings;
}
/**
 * 开关
 */
export declare class PdUISwitch {
    /**
     *  默认配置
     */
    static defaultSettings: PdUISwitchSettings;
    /**
     *  公用className
     */
    protected static clsName: string;
    /**
     *  公用class
     */
    protected static cls: string;
    /**
     * 创建开关
     * @param {PdUISwitchSettings} settings - 配置项
     * @return {string} 开关的html
     */
    static create(settings: PdUISwitchSettings): string;
}
