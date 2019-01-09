/// <reference types="jquery" />
import { PdSelector } from '../../../common/common';
/**
 * 文字提示工具
 */
export declare class PdUITooltip {
    /**
     *  文字提示工具的标识
     */
    static attrName: string;
    /**
     *  自动调整显示位置的标识
     */
    static attrAdjust: string;
    /**
     *  文字提示工具容器的额外class
     */
    static attrClass: string;
    /**
     *  容器的标识
     */
    static attrContainer: string;
    /**
     *  生成内容的方法
     */
    static attrContainerFun: string;
    /**
     *  异步生成内容的标识
     */
    static attrContentAsync: string;
    /**
     *  是否缓存内容的标识
     */
    static attrContentCache: string;
    /**
     *  内容的选择器
     */
    static attrContentSelector: string;
    /**
     *  与提示对象之间的间隔
     */
    static attrGutter: string;
    /**
     *  移开时隐藏的延迟
     */
    static attrHideDelay: string;
    /**
     *  文字提示工具的唯一标识
     */
    static attrId: string;
    /**
     *  持久化，不自动消失
     */
    static attrPersist: string;
    /**
     *  显示的位置
     */
    static attrPosition: string;
    /**
     *  显示的延迟
     */
    static attrShowDelay: string;
    /**
     *  显示内容的标识
     */
    static attrTitle: string;
    /**
     *  文字提示工具的className
     */
    static clsName: string;
    /**
     *  文字提示工具的class
     */
    static cls: string;
    /**
     *  指向箭头的className
     */
    static clsArrowName: string;
    /**
     *  内容的className
     */
    static clsContentName: string;
    /**
     *  内容容器的class
     */
    static clsInner: string;
    /**
     *  内容容器的className
     */
    static clsInnerName: string;
    /**
     *  加载动画的的className
     */
    static clsLoadingName: string;
    /**
     *  显示的标识
     */
    static clsShowName: string;
    /**
     *  触发的标识
     */
    static clsTriggerName: string;
    /**
     * 获取文字提示显示内容的容器
     * @param {JQuery} $triggerItem - 触发的元素
     * @return {JQuery} - 显示内容的容器
     */
    static getTargetByItem($triggerItem: JQuery): JQuery;
    /**
     * 初始化文字提示
     */
    static init(): void;
    /**
     * 更新文字提示
     * @param {JQuery} $triggerItem - 触发元素
     */
    static updateTooltip($triggerItem: JQuery): void;
    /**
     * 绑定事件
     */
    protected static bindEvent(): void;
    /**
     * 计算显示内容容器的位置
     * @param {JQuery} $triggerItem - 触发元素
     * @return {string} 显示内容容器的位置信息
     */
    protected static calcPosition($triggerItem: JQuery): string;
    /**
     * 创建文字提示
     * @param settings - 配置项
     * @return {JQuery} 文字提示的HTML
     */
    protected static createTooltip(settings: any): JQuery;
    /**
     * 获取生成文字提示的容器的容器
     * @param {JQuery} $triggerItem - 触发元素
     * @return {string} 文字提示的容器的容器
     */
    protected static getTargetContainer($triggerItem: JQuery): string;
    /**
     * 生成文字提示的内容
     * @param {JQuery} $triggerItem - 触发元素
     * @return {PdSelector} - 文字提示的内容
     */
    protected static getTooltipContent($triggerItem: JQuery): PdSelector;
    /**
     * 隐藏文字提示
     * @param {JQuery} $triggerItem - 触发元素
     */
    protected static hideTooltip($triggerItem: JQuery): void;
    /**
     * 从远程获取数据
     * @param {JQuery} $triggerItem - 触发元素
     */
    protected static loadAsyncData($triggerItem: JQuery): void;
    /**
     * 比较默认位置是否足够显示
     * @param {JQuery} $triggerItem - 触发元素
     * @param {string} position - 位置信息
     * @return {boolean} - 是否足够显示
     */
    protected static matchPosition($triggerItem: JQuery, position: string): boolean;
    /**
     * 显示文字提示
     * @param {JQuery} $triggerItem - 触发元素
     */
    protected static showTooltip($triggerItem: JQuery): void;
    /**
     * 更新位置信息
     * @param {JQuery} $triggerItem - 触发元素
     */
    protected static updatePosition($triggerItem: JQuery): void;
}
