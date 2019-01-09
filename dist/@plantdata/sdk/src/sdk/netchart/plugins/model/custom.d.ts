import { PdSDKPluginPromptMulti, PdSDKPluginPromptMultiSettings } from '../prompt/prompt-multi';
/**
 * 提示插件配置
 */
export interface PdSDKPluginCustomSettings extends PdSDKPluginPromptMultiSettings {
}
/**
 * 提示插件
 */
export declare class PdSDKPluginCustom extends PdSDKPluginPromptMulti {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPluginCustomSettings;
    /**
     *  配置
     */
    settings: PdSDKPluginCustomSettings;
    /**
     * 构造方法
     * @param {PdSDKPromptSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKPluginCustomSettings);
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 初始化配置
     * @param {PdSDKPluginCustomSettings} settings - 用户定义配置
     * @return {PdSDKPluginCustomSettings} 配置
     */
    protected initSettings(settings: PdSDKPluginCustomSettings): PdSDKPluginCustomSettings;
}
