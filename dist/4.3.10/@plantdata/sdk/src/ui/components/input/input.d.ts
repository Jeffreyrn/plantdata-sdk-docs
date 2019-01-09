import { PdEleCreatorSettings } from '../../../core/elecreator';
/**
 * 输入框配置
 */
export interface PdUIInputSettings extends PdEleCreatorSettings {
    /**
     *  输入框尺寸
     */
    size?: '' | 'xs' | 'sm' | 'md' | 'lg';
}
/**
 * Input 输入框
 */
export declare class PdUIInput {
    /**
     *  默认配置
     */
    static defaultSettings: PdUIInputSettings;
    /**
     *  公用className
     */
    protected static clsName: string;
    /**
     *  公用class
     */
    protected static cls: string;
    /**
     * 创建输入框
     * @param {PdUIInputSettings} settings - 配置项
     * @return {string} 输入框html
     */
    static create(settings?: PdUIInputSettings): string;
}
