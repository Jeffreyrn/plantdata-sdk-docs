/// <reference types="jquery" />
/**
 *  消息通知类型
 */
export declare type PdUINotificationType = 'info' | 'success' | 'error' | 'warn' | '';
/**
 * 消息通知配置
 */
export interface PdUINotificationSettings {
    /**
     *    通知描述
     */
    body?: string;
    /**
     *  默认自动关闭延时，单位毫秒, 设置为0时不自动关闭
     */
    delay?: number;
    /**
     *    消息图标地址
     */
    icon?: string;
    /**
     *    消息唯一标识
     */
    id?: string;
    /**
     *  消息显示位置，可选：topLeft，topRight，bottomRight，bottomLeft
     */
    position?: string;
    /**
     * 点击通知时触发的回调函数
     * @param {PdUINotificationSettings} settings - 消息通知配置
     */
    onClick?: (settings: PdUINotificationSettings) => void;
    /**
     * 关闭通知时触发的回调函数
     * @param {PdUINotificationSettings} settings - 消息通知配置
     */
    onClose?: (settings: PdUINotificationSettings) => void;
    /**
     * 显示通知时触发的回调函数
     * @param {PdUINotificationSettings} settings - 消息通知配置
     */
    onShow?: (settings: PdUINotificationSettings) => void;
}
/**
 * 消息通知列队中的内容
 */
export interface PdUINotificationQueueItem {
    /**
     *  显示内容
     */
    HTML: string;
    /**
     *  消息通知配置
     */
    settings: PdUINotificationSettings;
    /**
     *  是否可见
     */
    visible?: boolean;
}
/**
 * Notification消息通知
 */
export declare class PdUINotification {
    /**
     *  默认配置
     */
    static defaultSettings: PdUINotificationSettings;
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
     *  简述容器className
     */
    protected static clsDescName: string;
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
     *  标题className
     */
    protected static clsTitleName: string;
    /**
     *  消息通知列队
     */
    protected static queue: {
        [key: string]: PdUINotificationQueueItem[];
    };
    /**
     * 关闭消息通知
     * @param {string} id - 需要关闭的Notification对象的id
     */
    static close(id: string): void;
    /**
     * 创建自定义的消息通知并添加到消息通知的队列
     * @param {string} notification - 标题
     * @param {PdUINotificationSettings} settings - 配置项
     * @return {string} 自定义消息通知
     */
    static custom(notification: string, settings?: PdUINotificationSettings): string;
    /**
     * 创建错误消息通知并添加到消息通知的队列
     * @param {string} notification - 标题
     * @param {PdUINotificationSettings} settings - 配置项
     * @return {string} 错误消息通知
     */
    static error(notification: string, settings?: PdUINotificationSettings): string;
    /**
     * 创建提示消息通知并添加到消息通知的队列
     * @param {string} notification - 标题
     * @param {PdUINotificationSettings} settings - 配置项
     * @return {string} 提示消息通知
     */
    static info(notification: string, settings?: PdUINotificationSettings): string;
    /**
     * 创建成功消息通知并添加到消息通知的队列
     * @param {string} notification - 标题
     * @param {PdUINotificationSettings} settings - 配置项
     * @return {string} 成功消息通知
     */
    static success(notification: string, settings?: PdUINotificationSettings): string;
    /**
     * 创建警告消息通知并添加到消息通知的队列
     * @param {string} notification - 标题
     * @param {PdUINotificationSettings} settings - 配置项
     * @return {string} 警告消息通知
     */
    static warn(notification: string, settings?: PdUINotificationSettings): string;
    /**
     * 创建警告消息通知并添加到消息通知的队列
     * @param {string} notification - 标题
     * @param {PdUINotificationSettings} settings - 配置项
     * @return {string} 警告消息通知
     */
    static warning(notification: string, settings?: PdUINotificationSettings): string;
    /**
     * 添加事件侦听
     * @param {JQuery} $notification - 消息通知对象
     * @param {PdUINotificationSettings} settings - 配置项
     * @param {Function} callback - 事件结束时的回调
     * @param {string} end - 事件结束时的标识
     */
    protected static addListener($notification: JQuery, settings: PdUINotificationSettings, callback: Function, end: string): void;
    /**
     * 添加到消息通知的队列
     * @param {string} notification - 标题
     * @param {PdUINotificationSettings} settings - 配置项
     * @param {PdUINotificationType} type - 消息通知类型
     * @return {string} - 消息通知
     */
    protected static addToQueue(notification: string, settings: PdUINotificationSettings, type: PdUINotificationType): string;
    /**
     * 创建消息通知
     */
    protected static create(): void;
    /**
     * 创建消息提示的提示内容
     * @param {string} title - 消息
     * @param {PdUINotificationSettings} settings - 配置
     * @param {PdUINotificationType} type - 类型
     * @return {string} 息提示的提示内容的HTML
     */
    protected static createNotification(title: string, settings: PdUINotificationSettings, type: PdUINotificationType): string;
    /**
     * 显示消息通知
     * @param {string} HTML
     * @param {PdUINotificationSettings} settings - 配置项
     */
    protected static show(HTML: string, settings: PdUINotificationSettings): void;
    /**
     * 移除消息通知
     * @param {JQuery} $notification - notification实例
     * @param {PdUINotificationSettings} settings - 配置项
     */
    protected static remove($notification: JQuery, settings: PdUINotificationSettings): void;
}
