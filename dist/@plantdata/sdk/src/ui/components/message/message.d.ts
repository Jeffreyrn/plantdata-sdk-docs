/// <reference types="jquery" />
/**
 *  消息类型
 */
export declare type PdUIMessageType = 'info' | 'success' | 'error' | 'warn' | 'loading';
/**
 * 消息提示配置
 */
export interface PdUIMessageSettings {
    /**
     *  是否显示关闭按钮
     */
    close?: boolean;
    /**
     *  是否显示关闭倒计时
     */
    countdown?: boolean;
    /**
     *  默认自动关闭延时，单位毫秒, 设置为0时不自动关闭
     */
    delay?: number;
    /**
     *  消息显示的位置
     */
    position?: string;
}
/**
 * Message消息提示
 */
export declare class PdUIMessage {
    /**
     *  默认配置
     */
    static defaultSettings: PdUIMessageSettings;
    /**
     *  公用className
     */
    protected static clsName: string;
    /**
     *  公用class
     */
    protected static cls: string;
    /**
     *  关闭className
     */
    protected static clsCloseName: string;
    /**
     *  消息内容className
     */
    protected static clsContentName: string;
    /**
     *  内容容器className
     */
    protected static clsContentContainerName: string;
    /**
     *  倒计时className
     */
    protected static clsCountdownName: string;
    /**
     *  图标标志className
     */
    protected static clsFlagName: string;
    /**
     *  图标标志className
     */
    protected static clsFlagCircleName: string;
    /**
     *  显示className
     */
    protected static clsShowName: string;
    /**
     *  文本className
     */
    protected static clsTextName: string;
    /**
     * 创建消息提示
     * @param {string} HTML - 提示内容
     * @param {PdUIMessageSettings} settings - 配置项
     */
    static create(HTML: string, settings: PdUIMessageSettings): void;
    /**
     * 创建消息提示的提示内容
     * @param {string} message - 消息
     * @param {PdUIMessageSettings} settings - 配置
     * @param {PdUIMessageType} type - 类型
     * @return {string} 息提示的提示内容的HTML
     */
    static createMessage(message: string, settings: PdUIMessageSettings, type: PdUIMessageType): string;
    /**
     * 创建错误消息
     * @param {string} message - 提示内容
     * @param {PdUIMessageSettings} settings - 配置项
     */
    static error(message: string, settings?: PdUIMessageSettings): void;
    /**
     * 创建提示消息
     * @param {string} message - 提示内容
     * @param {PdUIMessageSettings} settings - 配置项
     */
    static info(message: string, settings?: PdUIMessageSettings): void;
    /**
     * 创建加载中的消息
     * @param {string} message - 提示内容
     * @param {PdUIMessageSettings} settings - 配置项
     */
    static loading(message: string, settings?: PdUIMessageSettings): void;
    /**
     * 创建成功消息
     * @param {string} message - 提示内容
     * @param {PdUIMessageSettings} settings - 配置项
     */
    static success(message: string, settings?: PdUIMessageSettings): void;
    /**
     * 创建警告消息
     * @param {string} message - 提示内容
     * @param {PdUIMessageSettings} settings - 配置项
     */
    static warn(message: string, settings?: PdUIMessageSettings): void;
    /**
     * 创建警告消息
     * @param {string} message - 提示内容
     * @param {PdUIMessageSettings} settings - 配置项
     */
    static warning(message: string, settings?: PdUIMessageSettings): void;
    /**
     * 添加事件侦听
     * @param {JQuery} $message - 消息对象
     * @param {PdUIMessageSettings} settings - 配置项
     * @param {Function} callback - 事件结束时的回调
     * @param {string} end - 事件结束时的标识
     */
    protected static addListener($message: JQuery, settings: PdUIMessageSettings, callback: Function, end: string): void;
    /**
     * 关闭消息提示
     * @param {JQuery} $message - 消息提示的DOM对象
     * @param {PdUIMessageSettings} settings - 配置项
     */
    protected static close($message: JQuery, settings: PdUIMessageSettings): void;
    /**
     * 关闭消息的倒计时
     * @param {JQuery} $message - 消息提示的DOM对象
     * @param {number} delay - 延时
     */
    protected static countdown($message: JQuery, delay: number): void;
}
