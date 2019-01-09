/// <reference types="jquery" />
import { PdComponent, PdComponentSettings } from '../core/component';
import { PdContainer } from './container';
import { PdPanel } from './panels/panel';
import { PdEvent, PdEventHandler } from '../core/event';
import { PdVisNetChartData } from '../vis/netchart/netchart';
/**
 * 视图插件配置
 */
export interface PdViewSettings extends PdComponentSettings {
    /**
     *  是否激活
     */
    active?: boolean;
    /**
     * 额外的class
     */
    cls?: string;
    /**
     *  插件生成的选择器
     */
    container?: PdContainer;
}
/**
 * 视图插件
 */
export declare abstract class PdView extends PdComponent {
    /**
     *  默认配置
     */
    static defaultSettings: PdViewSettings;
    /**
     *  配置
     */
    settings: PdViewSettings;
    /**
     *  插件生成的选择器
     */
    protected container: PdContainer;
    /**
     * 上一次的数据
     */
    protected lastData: PdVisNetChartData;
    /**
     *  插件所在的面板
     */
    protected panel: PdPanel;
    /**
     *  容器面板ID
     */
    protected panelId: string;
    /**
     * 获取插件的唯一标识
     */
    abstract getViewType(): string;
    /**
     * 构造方法
     * @param {PdSDKPromptSettings} settings - 用户配置
     */
    constructor(settings?: PdViewSettings);
    /**
     * 添加事件
     * @param {string} eventType - 事件类型
     * @param {(data: PdEventData) => void} handler - 事件处理函数
     * @param {this} scope - 事件绑定对象
     * @param {string} id - 事件标识
     */
    protected addEvent(eventType: string, handler: PdEventHandler, scope?: PdEvent, id?: string): void;
    /**
     * 配置初始化完成后的回调
     */
    protected created(): void;
    /**
     * 获取容器主题
     */
    protected getMainContainer(): JQuery;
    /**
     * 初始化配置
     * @param {PdViewSettings} settings - 用户定义配置
     * @return {PdViewSettings} 配置
     */
    protected initSettings(settings: PdViewSettings): PdViewSettings;
}
