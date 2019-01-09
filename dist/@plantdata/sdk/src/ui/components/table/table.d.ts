import { PdEleCreatorSettings } from '../../../core/elecreator';
/**
 * 表格配置项
 */
export interface PdUITableSettings extends PdEleCreatorSettings {
}
/**
 * table表格
 */
export declare class PdUITable {
    /**
     *  表格的className
     */
    protected static clsName: string;
    /**
     *  表格的class
     */
    protected static cls: string;
    /**
     * 创建表格
     * @param {PdUITableSettings} settings - 配置项
     * @return {string} 表格的html
     */
    static create(settings: PdUITableSettings): string;
}
