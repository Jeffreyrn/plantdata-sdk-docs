import { PdEleCreatorSettings } from '../../../core/elecreator';
/**
 * 按钮创建配置项
 */
export interface PdUIButtonSettings extends PdEleCreatorSettings {
    /**
     *  按钮类型
     */
    type?: '' | 'primary' | 'primary-outline';
    /**
     *  按钮尺寸
     */
    size?: '' | 'xs' | 'sm' | 'md' | 'lg';
}
/**
 * 按钮创建类
 */
export declare class PdUIButton {
    /**
     *  默认配置
     */
    static defaultSettings: PdUIButtonSettings;
    /**
     *  按钮的前缀
     */
    protected static clsName: string;
    /**
     *  按钮的前缀class
     */
    protected static cls: string;
    /**
     * 创建按钮
     * @param {PdUIButtonSettings} settings - 配置项
     * @return {string} 按钮html
     */
    static create(settings?: PdUIButtonSettings): string;
}
