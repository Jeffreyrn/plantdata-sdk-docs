/// <reference types="jquery" />
import { PdVisToolItem, PdVisToolItemSettings } from './tool-item';
import { PdVisNetChart } from '../../netchart/netchart';
/**
 * 清空图谱工具配置
 */
export interface PdVisToolGraphClearSettings extends PdVisToolItemSettings {
    /**
     * 可视化组件
     */
    netChart?: PdVisNetChart;
}
/**
 * 清空图谱工具
 */
export declare class PdVisToolGraphClear extends PdVisToolItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisToolGraphClearSettings;
    /**
     *  配置
     */
    settings: PdVisToolGraphClearSettings;
    /**
     * 构造方法
     * @param {PdVisToolGraphClearSettings} settings - 用户配置
     */
    constructor(settings?: PdVisToolGraphClearSettings);
    /**
     * 初始化配置
     * @param {PdVisToolGraphClearSettings} settings - 用户定义配置
     * @return {PdVisToolGraphClearSettings} 配置
     */
    protected initSettings(settings: PdVisToolGraphClearSettings): PdVisToolGraphClearSettings;
    /**
     * 处理点击事件
     * @param {JQuery.Event} event - 事件对象
     */
    protected onClick(event: JQuery.Event): void;
}
