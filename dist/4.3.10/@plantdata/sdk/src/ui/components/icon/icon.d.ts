import { PdEleCreatorSettings } from '../../../core/elecreator';
/**
 * 图标配置
 */
export interface PdUIIconSettings extends PdEleCreatorSettings {
    /**
     *  图标
     */
    icon?: string;
}
/**
 * Icon 图标
 */
export declare class PdUIIcon {
    /**
     *  公用className
     */
    protected static clsName: string;
    /**
     *  公用class
     */
    protected static cls: string;
    /**
     * 创建图标
     * @param {PdUIIconSettings} settings - 配置项
     * @return {string} 图标html
     */
    static create(settings?: PdUIIconSettings): string;
}
