import { PdSDKPluginPrompt, PdSDKPluginPromptSettings } from '../plugins/prompt/prompt';
import { PdVisPluginPage, PdVisPluginPageSettings } from '../../../vis/netchart/plugins/page/page';
import { PdSDKNetChart, PdSDKNetChartPluginSettings, PdSDKNetChartSettings } from '../netchart';
import { PdVisNetChart } from '../../../vis/netchart/netchart';
import { PdVisPluginFilterItemSettings } from '../../../vis/netchart/plugins/filter/filter';
/**
 * SDK 图谱探索插件配置
 */
export interface PdSDKGraphPluginsSettings {
    /**
     *  提示插件
     */
    prompt?: PdSDKNetChartPluginSettings<PdSDKPluginPromptSettings>;
    /**
     *  分页插件
     */
    page?: PdSDKNetChartPluginSettings<PdVisPluginPageSettings>;
}
/**
 * SDK 图谱探索配置
 */
export interface PdSDKGraphSettings extends PdSDKNetChartSettings, PdSDKGraphPluginsSettings {
}
/**
 * SDK 图谱探索
 */
export declare abstract class PdSDKGraph<T extends PdVisNetChart> extends PdSDKNetChart<T> {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKGraphSettings;
    /**
     *  配置
     */
    settings: PdSDKGraphSettings;
    /**
     *  分页插件实例
     */
    protected page: PdVisPluginPage;
    /**
     *  提示插件实例
     */
    protected prompt: PdSDKPluginPrompt;
    /**
     * 创建过滤配置
     * @param {PdVisPluginFilterItemSettings[]} items - 用户定义过滤选项配置
     * @return {PdVisPluginFilterItemSettings[]} 合并后的过滤选项
     */
    protected buildFilter(items: PdVisPluginFilterItemSettings[]): PdVisPluginFilterItemSettings[];
    /**
     * 生成数据异步加载配置
     * @param lp - 数据加载参数
     * @return {{queryData: any; formData: any; url: string}} 数据异步加载配置
     */
    protected buildLoaderParams(lp: any): {
        queryData: any;
        formData: any;
        url: string;
    };
    /**
     * 销毁插件
     */
    protected destroyPlugins(): void;
    /**
     * 初始化图谱成功执行的方法
     * @param {any} data 初始化图谱返回的数据
     */
    protected graphInitSuccess(data: any): void;
    /**
     * 初始化网络关系图
     */
    protected initNetChart(): void;
    /**
     * 初始化插件
     */
    protected initPlugins(): void;
    /**
     * 初始化配置
     * @param {PdSDKGraphSettings} settings - 用户配置
     * @return {PdSDKGraphSettings} 配置
     */
    protected initSettings(settings: PdSDKGraphSettings): PdSDKGraphSettings;
    /**
     * 更新焦点信息
     */
    protected updateFixedNodes(): void;
}
