import { PdEleCreatorSettings } from '../../../core/elecreator';
/**
 * 加载动画配置项
 */
export interface PdUISpinSettings extends PdEleCreatorSettings {
    /**
     *  加载动画的尺寸
     */
    size?: '' | 'xs' | 'sm' | 'md' | 'lg';
}
/**
 * 加载动画
 */
export declare class PdUISpin {
    /**
     *  加载动画默认配置
     */
    static defaultSettings: PdUISpinSettings;
    /**
     *  公用className
     */
    protected static clsName: string;
    /**
     *  公用class
     */
    protected static cls: string;
    /**
     *  加载动画的容器className
     */
    protected static clsContainerName: string;
    /**
     * 创建加载动画
     * @param {PdUISpinSettings} settings - 配置项
     * @return {string} 加载动画的html
     */
    static create(settings?: PdUISpinSettings): string;
}
