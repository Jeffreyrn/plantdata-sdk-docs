import { PdEleCreatorSettings } from '../../../core/elecreator';
/**
 * 文本域的配置项
 */
export interface PdUITextareaSettings extends PdEleCreatorSettings {
    size?: '' | 'xs' | 'sm' | 'md' | 'lg';
    content?: string;
}
/**
 * 文本域
 */
export declare class PdUITextarea {
    /**
     *  默认配置
     */
    static defaultSettings: PdUITextareaSettings;
    /**
     *  公用className
     */
    protected static clsName: string;
    /**
     *  公用class
     */
    protected static cls: string;
    /**
     * 创建文本域
     * @param {PdUITextareaSettings} settings - 配置项
     * @return {string} 文本域的html
     */
    static create(settings?: PdUITextareaSettings): string;
}
