import { PdSDKPluginSettings } from '../plugin';
import { PdVisPluginContextmenuSettings, PdVisPluginContextmenu } from '../../../../vis/netchart/plugins/contextmenu';
import { PdVisToolItem, PdVisToolItemSettings } from '../../../../vis/utils/tool-item/tool-item';
import { PdSDKKGSettings } from '../../../utils';
import { PdSDKPromptSettings } from '../../../prompt/prompt';
import { PdSDKEditorToolSettings } from '../editor/editor-tool';
/**
 * 右击菜单项配置
 */
export interface PdSDKContextmenuItemSettings {
    /**
     * 子菜单
     */
    children?: (string | PdVisToolItemSettings)[];
    /**
     * 构造方法
     * @param {PdVisToolItemSettings} settings - 配置
     */
    constr?: new (settings?: PdVisToolItemSettings) => PdVisToolItem;
    /**
     * 是否可视化编辑菜单
     */
    isEdit?: boolean;
    /**
     * 是否启用
     */
    enable?: boolean;
    /**
     * 配置
     */
    settings?: PdVisToolItemSettings;
}
/**
 * 右键菜单插件配置
 */
export interface PdSDKPluginContextmenuSettings extends PdSDKKGSettings, PdSDKPluginSettings, PdVisPluginContextmenuSettings {
    /**
     * 是否允许可视化编辑
     */
    editEnable?: boolean;
    /**
     * 可视化编辑公有配置
     */
    editSettings?: PdSDKEditorToolSettings;
    /**
     *  获取下拉提示配置
     */
    promptSettings?: PdSDKPromptSettings;
    /**
     * 菜单配置
     */
    menu?: {
        [key: string]: PdSDKContextmenuItemSettings;
    };
}
/**
 * 右键菜单插件
 */
export declare class PdSDKPluginContextmenu extends PdVisPluginContextmenu {
    /**
     * 禁用编辑配置
     */
    static editDisableSettings: PdSDKPluginContextmenuSettings;
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPluginContextmenuSettings;
    /**
     *  配置
     */
    settings: PdSDKPluginContextmenuSettings;
    /**
     * 构造方法
     * @param {PdSDKPluginContextmenuSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKPluginContextmenuSettings);
    /**
     * 新建工具选项
     */
    protected createToolItem(item: string | PdVisToolItemSettings): PdVisToolItem;
    /**
     * 生成工具选项
     */
    protected createToolItems(items: (string | PdVisToolItemSettings)[]): void;
    /**
     * 创建通用工具配置
     */
    protected createToolItemSettings(settings?: PdVisToolItemSettings, isEdit?: boolean): PdVisToolItemSettings;
    /**
     * 初始化配置
     * @param {PdSDKPluginContextmenuSettings} settings - 用户定义配置
     * @return {PdSDKPluginContextmenuSettings} 配置
     */
    protected initSettings(settings: PdSDKPluginContextmenuSettings): PdSDKPluginContextmenuSettings;
}
