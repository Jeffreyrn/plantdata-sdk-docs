/// <reference types="jquery" />
import { PdComponent, PdComponentSettings } from '../../../core/component';
import { PdSelector } from '../../../common/common';
/**
 * 警告配置
 */
export interface PdVisAlertSettings extends PdComponentSettings {
    /**
     * 关闭前执行的事件
     */
    beforeClose?: Function;
    /**
     * 是否可关闭
     */
    closable?: boolean;
    /**
     *    关闭按钮自定义文本
     */
    closeText?: string;
    /**
     *  生成组件的容器
     */
    selector?: PdSelector;
    /**
     *  提示内容
     */
    text?: string;
    /**
     *  滚动提示内容
     */
    texts?: string[];
    /**
     * 是否显示图标
     */
    showIcon?: boolean;
    /**
     * 组件类型
     */
    type?: 'success' | 'warning' | 'info' | 'error';
}
/**
 * 警告
 */
export declare class PdVisAlert extends PdComponent {
    /**
     * 默认配置
     */
    static defaultSettings: PdVisAlertSettings;
    /**
     *  生成组件的容器
     */
    protected selector?: PdSelector;
    /**
     *  配置项
     */
    settings: PdVisAlertSettings;
    /**
     * 构造方法
     * @param {PdVisAlertSettings} settings - 用户配置
     */
    constructor(settings?: PdVisAlertSettings);
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 配置初始化完成后的回调
     */
    protected created(): void;
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
