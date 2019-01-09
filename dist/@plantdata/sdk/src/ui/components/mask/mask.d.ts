import { PdEleCreatorSettings } from '../../../core/elecreator';
/**
 * 蒙版配置
 */
export interface PdUIMaskSettings extends PdEleCreatorSettings {
}
/**
 * Mask蒙版
 */
export declare class PdUIMask {
    /**
     *  蒙版默认配置
     */
    static defaultSettings: PdUIMaskSettings;
    /**
     *  公用className
     */
    protected static clsName: string;
    /**
     *  公用class
     */
    protected static cls: string;
    /**
     * 创建蒙版
     * @param {PdUIMaskSettings} settings - 配置项
     * @return {string} 蒙版html
     */
    static create(settings?: PdUIMaskSettings): string;
}
