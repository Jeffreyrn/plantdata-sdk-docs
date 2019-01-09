/// <reference types="jquery" />
import { PdPanel, PdPanelChildSettings, PdPanelSettings } from '../panel';
import { PdPanelBox } from '../../panel-box/panel-box';
/**
 * 浮动面板配置
 */
export interface PdFloatPanelSettings extends PdPanelSettings {
    /**
     *  面板位置
     */
    side?: 'mask' | 'top' | 'bottom';
    /**
     * 当在盒子容器中是是否对统一面板中的盒子排他
     */
    exclusive?: boolean;
}
/**
 * 浮动面板
 */
export declare class PdFloatPanel extends PdPanel {
    /**
     *  默认配置
     */
    static defaultSettings: PdFloatPanelSettings;
    /**
     * PdPanelBox列表
     */
    boxList: {
        [key: string]: PdPanelBox;
    };
    /**
     *  配置
     */
    settings: PdFloatPanelSettings;
    /**
     * 构造方法
     * @param {PdFloatPanelSettings} settings - 用户配置
     */
    constructor(settings?: PdFloatPanelSettings);
    /**
     * 添加子面板
     * @param {PdPanelBox} box - 子面板的Box容器
     * @param {PdPanelChildSettings} settings - 子面板配置
     * @return {string} 子面板Dom字符串
     */
    addBox(box: PdPanelBox, settings?: PdPanelChildSettings): string;
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 初始化配置
     * @param {PdFloatPanelSettings} settings - 用户定义配置
     * @return {PdFloatPanelSettings}
     */
    protected initSettings(settings: PdFloatPanelSettings): PdFloatPanelSettings;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
}
