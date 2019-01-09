import { PdEleCreatorSettings } from '../../../core/elecreator';
/**
 * 卡片的配置
 */
export interface PdUICardSettings extends PdEleCreatorSettings {
    /**
     *  头部
     */
    head?: string | PdEleCreatorSettings;
    /**
     *  身体
     */
    body: string | PdEleCreatorSettings;
    /**
     *  底部
     */
    foot?: string | PdEleCreatorSettings;
}
/**
 * 卡片创建类
 */
export declare class PdUICard {
    /**
     *  公用className
     */
    protected static clsName: string;
    /**
     *  公用class
     */
    protected static cls: string;
    /**
     *  头部className
     */
    protected static clsHeadName: string;
    /**
     *  身体className
     */
    protected static clsBodyName: string;
    /**
     *  底部className
     */
    protected static clsFootName: string;
    /**
     * 创建卡片
     * @param {PdUICardSettings} settings - 配置项
     * @return {string} 卡片html
     */
    static create(settings?: PdUICardSettings): string;
}
