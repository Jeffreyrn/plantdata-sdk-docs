import { PdVisPluginVisConfigure, PdVisPluginVisConfigureSettings } from '../../../../vis/netchart/plugins/vis-configure';
import { PdSDKPluginSettings } from '../plugin';
/**
 * 可视化配置插件配置
 */
export interface PdSDKPluginVisConfigureSettings extends PdSDKPluginSettings, PdVisPluginVisConfigureSettings {
}
/**
 * 可视化配置模块配置
 */
export declare class PdSDKPluginVisConfigure extends PdVisPluginVisConfigure {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPluginVisConfigureSettings;
    /**
     *  配置
     */
    settings: PdSDKPluginVisConfigureSettings;
    /**
     * 构造方法
     * @param {PdSDKPluginVisConfigureSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKPluginVisConfigureSettings);
    /**
     * 初始化配置
     * @param {PdSDKPluginVisConfigureSettings} settings - 用户定义配置
     * @return {PdSDKPluginVisConfigureSettings} 配置
     */
    protected initSettings(settings: PdSDKPluginVisConfigureSettings): PdSDKPluginVisConfigureSettings;
}
