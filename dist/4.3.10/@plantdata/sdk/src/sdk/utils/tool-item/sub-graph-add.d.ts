/// <reference types="jquery" />
import { PdSDKPluginAdvancedPromptDialog, PdSDKPluginAdvancedPromptDialogSettings } from '../../netchart/plugins/prompt/advanced-prompt-dialog';
import { PdVisToolItem, PdVisToolItemSettings } from '../../../vis/utils/tool-item/tool-item';
/**
 * 添加子图工具配置
 */
export interface PdSDKToolSubGraphAddSettings extends PdVisToolItemSettings {
    /**
     * 高级搜索配置
     */
    advancedPromptDialogSettings?: PdSDKPluginAdvancedPromptDialogSettings;
}
/**
 * 添加子图工具
 */
export declare class PdSDKToolSubGraphAdd extends PdVisToolItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKToolSubGraphAddSettings;
    /**
     *  配置
     */
    settings: PdSDKToolSubGraphAddSettings;
    /**
     *  高级检索插件实例
     */
    protected advancedPromptDialog: PdSDKPluginAdvancedPromptDialog;
    /**
     * 构造方法
     * @param {PdSDKToolSubGraphAddSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKToolSubGraphAddSettings);
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 初始化配置
     * @param {PdSDKToolSubGraphAddSettings} settings - 用户定义配置
     * @return {PdSDKToolSubGraphAddSettings} 配置
     */
    protected initSettings(settings: PdSDKToolSubGraphAddSettings): PdSDKToolSubGraphAddSettings;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 处理点击事件
     * @param {JQuery.Event} event - 事件对象
     */
    protected onClick(event: JQuery.Event): void;
}
