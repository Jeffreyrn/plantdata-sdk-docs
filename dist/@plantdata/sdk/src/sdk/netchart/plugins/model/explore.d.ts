import { PdSDKPluginPromptMulti, PdSDKPluginPromptMultiSettings } from '../prompt/prompt-multi';
/**
 * 提示插件配置
 */
export interface PdSDKPluginExploreSettings extends PdSDKPluginPromptMultiSettings {
}
/**
 * 提示插件
 */
export declare class PdSDKPluginExplore extends PdSDKPluginPromptMulti {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPluginExploreSettings;
    /**
     *  配置
     */
    settings: PdSDKPluginExploreSettings;
    /**
     * 构造方法
     * @param {PdSDKPromptSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKPluginExploreSettings);
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 初始化配置
     * @param {PdSDKPluginExploreSettings} settings - 用户定义配置
     * @return {PdSDKPluginExploreSettings} 配置
     */
    protected initSettings(settings: PdSDKPluginExploreSettings): PdSDKPluginExploreSettings;
}
