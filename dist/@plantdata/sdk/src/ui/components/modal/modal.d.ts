/// <reference types="jquery" />
/**
 * 模态框配置
 */
export interface PdUIModalSettings {
    /**
     *  是否显示遮罩
     */
    backDrop?: boolean;
    /**
     * 关闭模态框之前执行的方法,返回false时将阻止模态框关闭
     * @param {JQuery} $modal - 模态框JQuery对象
     * @param {PdUIModalSettings} settings - 模态框配置
     * @return {boolean} - 是否关闭模态框
     */
    beforeClose?: ($modal: JQuery, settings: PdUIModalSettings) => boolean;
    /**
     * 打开模态框之前执行的方法,返回false时将阻止模态框显示
     * @param {JQuery} $modal - 模态框JQuery对象
     * @param {PdUIModalSettings} settings - 模态框配置
     * @return {boolean} - 是否显示模态框
     */
    beforeOpen?: ($modal: JQuery, settings: PdUIModalSettings) => boolean;
    /**
     * 开启Esc快捷键
     */
    esc?: boolean;
    /**
     * 鼠标点击事件对象，效果为0时必选
     */
    event?: JQuery.Event;
    /**
     * 关闭模态框之后执行的方法
     * @param {JQuery} $modal - 模态框JQuery对象
     * @param {PdUIModalSettings} settings - 模态框配置
     */
    onClosed?: ($modal: JQuery, settings: PdUIModalSettings) => void;
    /**
     * 打开模态框之后执行的方法
     * @param {JQuery} $modal - 模态框JQuery对象
     * @param {PdUIModalSettings} settings - 模态框配置
     */
    onOpened?: ($modal: JQuery, settings: PdUIModalSettings) => void;
}
/**
 * Modal模态框
 */
export declare class PdUIModal {
    /**
     *  默认配置
     */
    static defaultSettings: {
        backDrop: boolean;
        esc: boolean;
    };
    /**
     *  效果类型属性
     */
    protected static attrEffect: string;
    /**
     *  公用className
     */
    protected static clsName: string;
    /**
     *  公用class
     */
    protected static cls: string;
    /**
     *  遮罩的className
     */
    protected static clsBackdropName: string;
    /**
     *  关闭按钮的className
     */
    protected static clsCloseName: string;
    /**
     *  内容的className
     */
    protected static clsContentName: string;
    /**
     *  透视的className
     */
    protected static clsPerspectiveName: string;
    /**
     *  是否显示className
     */
    protected static clsShowName: string;
    /**
     * 关闭模态框
     * @param {JQuery} $modal - 模态框的JQuery对象
     * @param {PdUIModalSettings} settings - 配置项
     */
    static close($modal: JQuery, settings?: PdUIModalSettings): void;
    /**
     * 打开模态框
     * @param {JQuery} $modal - 模态框的JQuery对象
     * @param {PdUIModalSettings} settings - 配置项
     */
    static open($modal: JQuery, settings?: PdUIModalSettings): void;
    /**
     * 添加事件侦听
     * @param {JQuery} $modal - 模态框的JQuery对象
     * @param {PdUIModalSettings} settings - 配置项
     * @param {Function} callback - 事件结束时的回调
     * @param {string} end - 事件结束的标识
     */
    protected static addListener($modal: JQuery, settings: PdUIModalSettings, callback: Function, end: string): void;
}
