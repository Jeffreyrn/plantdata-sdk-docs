/// <reference types="jquery" />
import { PdContainer } from '../container';
import { PdComponent, PdComponentSettings } from '../../core/component';
import { PdPanel } from '../panels/panel';
import { PdEvent, PdEventData } from '../../core/event';
import { PdSelector } from '../../common/common';
import { PdUIButtonSettings } from '../../ui/components/button/button';
/**
 * 插件按钮设置
 */
export interface PdPluginButtonSettings extends PdUIButtonSettings {
    /**
     * 是否显示按钮
     */
    enable?: boolean;
    /**
     * 点击按钮触发事件
     * @param {PdPlugin} ins - 插件产生的数据
     * @return boolean - 是否自动关闭插件框
     */
    onclick?: (ins: PdPlugin) => void;
}
/**
 *  容器插件配置
 */
export interface PdPluginSettings extends PdComponentSettings {
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
    /**
     * 盒子容器初始状态是否展开
     */
    isBoxOpen?: boolean;
    /**
     *  是否浮动插件
     */
    readonly isFloat?: boolean;
    /**
     * 否定的按钮配置
     */
    negativeBtn?: PdPluginButtonSettings;
    /**
     * 肯定的按钮配置
     */
    positiveBtn?: PdPluginButtonSettings;
    /**
     *  插件位置
     */
    readonly side?: 'top' | 'right' | 'bottom' | 'left' | 'mask';
    /**
     *  插件容器自定义样式
     */
    style?: {
        [key: string]: string;
    };
    /**
     * 是否在盒子容器内
     */
    widthBox?: boolean;
    /**
     * 其他配置
     */
    [key: string]: any;
}
/**
 *  容器插件
 */
export declare abstract class PdPlugin extends PdComponent {
    /**
     *  默认配置
     */
    static defaultSettings: PdPluginSettings;
    /**
     *  配置
     */
    settings: PdPluginSettings;
    /**
     * 肯定的按钮
     */
    protected $positiveBtn: JQuery;
    /**
     * 否定的按钮
     */
    protected $negativeBtn: JQuery;
    /**
     *  插件生成的选择器
     */
    protected container: PdContainer;
    /**
     *  插件所在的面板
     */
    protected panel: PdPanel;
    /**
     *  容器面板ID
     */
    protected panelId: string;
    /**
     * 实例ID
     */
    protected insId: string;
    /**
     * 构造方法
     * @param {PdPluginSettings} settings - 用户配置
     */
    constructor(settings?: PdPluginSettings);
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 获取插件的唯一标识
     */
    abstract getPluginType(): string;
    /**
     * 创建否定的按钮
     * @param {string} cls - 额外的类
     * @param {PdPluginButtonSettings} settings - 按钮配置
     * @return string - 按钮的HTML字串
     */
    protected createNegativeBtn(cls: string, settings?: PdPluginButtonSettings): string;
    /**
     * 添加事件
     * @param {string} eventType - 事件类型
     * @param {(data: PdEventData) => void} handler - 事件处理函数
     * @param {this} scope - 事件绑定对象
     * @param {string} id - 事件标识
     */
    protected addEvent(eventType: string, handler: (data: PdEventData) => void, scope?: PdEvent, id?: string): void;
    /**
     * 创建插件DOM
     * @param {PdSelector} content - 插件内容
     * @param {string} icon - 插件ICON
     * @param {string} title - 插件标题
     * @param {string} tooltip - 插件文字提示
     * @return {JQuery} - 插件的DOM
     */
    protected buildPluginTemplate(content: PdSelector, icon: string, title: string, tooltip?: string): JQuery;
    /**
     * 创建插件按钮
     */
    protected createBtn(): void;
    /**
     * 创建肯定的按钮
     * @param {string} cls - 额外的类
     * @param {PdPluginButtonSettings} settings - 按钮配置
     * @return string - 按钮的HTML字串
     */
    protected createPositiveBtn(cls: string, settings?: PdPluginButtonSettings): string;
    /**
     * 配置初始化完成后的回调
     */
    protected created(): void;
    /**
     * 获取容器主题
     */
    protected getMainContainer(): JQuery;
    /**
     * 隐藏面板
     */
    protected hidePanel(): void;
    /**
     * 初始化配置
     * @param {PdPluginSettings} settings - 用户定义配置
     * @return {PdPluginSettings} 配置
     */
    protected initSettings(settings: PdPluginSettings): PdPluginSettings;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 肯定按钮单击事件
     */
    protected onPositiveBtnClick(): void;
    /**
     * 否定按钮单击事件
     */
    protected onNegativeBtnClick(): void;
    /**
     * 应用自定义样式
     */
    protected updateStyle(): void;
}
