/// <reference types="jquery" />
import { PdVisView, PdVisViewSettings } from '../../../vis/netchart/view';
import { PdSDKStat } from '../../stats/stat';
import { PdSDKViewSettings } from './view';
/**
 * 字符云视图插件配置
 */
export interface PdSDKViewWordCloudSettings extends PdSDKViewSettings, PdVisViewSettings {
}
/**
 * 字符云视图插件
 */
export declare class PdSDKViewWordCloud extends PdVisView {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKViewWordCloudSettings;
    /**
     *  配置
     */
    settings: PdSDKViewWordCloudSettings;
    /**
     *  统计实例
     */
    protected stat: PdSDKStat;
    /**
     * 构造方法
     * @param {PdSDKViewWordCloudSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKViewWordCloudSettings);
    /**
     * 获取插件的唯一标识
     */
    getViewType(): string;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 数据变化
     */
    protected dataChange(): void;
    /**
     * 进入视图
     */
    protected enter(): void;
    /**
     * 初始化配置
     * @param {PdSDKViewWordCloudSettings} settings - 用户定义配置
     * @return {PdSDKViewWordCloudSettings} 配置
     */
    protected initSettings(settings: PdSDKViewWordCloudSettings): PdSDKViewWordCloudSettings;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
}
