import { PdEleCreatorSettings } from '../../../core/elecreator';
/**
 * 栅格配置
 */
export interface PdUILayoutSettings extends PdEleCreatorSettings {
    /**
     *  栅格数
     */
    gutter?: 8 | 16 | 24;
}
/**
 * 栅格元素配置
 */
export interface PdUILayoutColSettings extends PdEleCreatorSettings {
    /**
     *  元素配置
     */
    cols: number | {
        [key: string]: number;
    };
}
/**
 * Layout 栅格
 */
export declare class PdUILayout {
    /**
     *  公用className
     */
    protected static clsName: string;
    /**
     *  公用class
     */
    protected static cls: string;
    /**
     *  行的className
     */
    protected static clsRowName: string;
    /**
     * 创建栅格
     * @param {PdUILayoutSettings} settings - 配置项
     * @return {string} 栅格html
     */
    static create(settings?: PdUILayoutSettings): string;
    /**
     * 创建栅格元素
     * @param {PdUILayoutColSettings} settings - 配置项
     * @return {string} 栅格元素html
     */
    static createCol(settings: PdUILayoutColSettings): string;
}
