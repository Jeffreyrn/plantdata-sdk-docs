import { PdEleCreatorSettings } from '../../../core/elecreator';
/**
 * 标签配置项
 */
export interface PdUITagSettings extends PdEleCreatorSettings {
    /**
     *  是否可移除的标签
     */
    removable?: boolean;
    /**
     *  自动移除的标签
     */
    autoRemove?: boolean;
    /**
     *  标签尺寸
     */
    size?: '' | 'xs' | 'sm' | 'md' | 'lg';
    /**
     *  标签类型
     */
    type?: '' | 'primary';
}
/**
 * 标签
 */
export declare class PdUITag {
    /**
     *  公用className
     */
    protected static clsName: string;
    /**
     *  公用class
     */
    protected static cls: string;
    /**
     *  标签关闭标识的className
     */
    protected static clsActionName: string;
    /**
     * 初始化标签
     */
    static init(): void;
    /**
     * 创建标签
     * @param {PdUITagSettings} settings - 配置项
     * @return {string} 标签的HTML
     */
    static create(settings: PdUITagSettings): string;
    /**
     * 绑定事件
     */
    protected static bindEvent(): void;
}
