/// <reference types="jquery" />
import { PdComponent, PdComponentSettings } from '../../../core/component';
import { PdSelector } from '../../../common/common';
import { PdUIModalSettings } from '../../../ui/components/modal/modal';
import { PdUIButtonSettings } from '../../../ui/components/button/button';
/**
 * 模态框配置
 */
export interface PdVisModalSettings extends PdComponentSettings {
    /**
     * 额外的class
     */
    cls?: string;
    /**
     * 主要内容
     */
    body?: ((settings: PdVisModalSettings) => PdSelector) | string;
    /**
     * 按钮设置
     */
    buttons?: {
        settings: PdUIButtonSettings;
        events?: {
            [key: string]: (event: JQuery.Event) => void;
        };
    }[];
    /**
     * 父容器
     */
    parent?: PdSelector;
    /**
     * 标题文本
     */
    title?: ((settings: PdVisModalSettings) => PdSelector) | string;
}
/**
 * 模态框
 */
export declare class PdVisModal extends PdComponent {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisModalSettings;
    /**
     *  配置
     */
    settings: PdVisModalSettings;
    /**
     * 主体内容
     */
    protected $body: JQuery;
    /**
     * 弹框内容
     */
    protected $content: JQuery;
    /**
     * 底部内容
     */
    protected $footer: JQuery;
    /**
     * 头部内容
     */
    protected $header: JQuery;
    /**
     * 构造方法
     * @param {PdVisModalSettings} settings - 用户配置
     */
    constructor(settings?: PdVisModalSettings);
    /**
     * 关闭模态框
     * @param {PdUIModalSettings} settings - 配置项
     */
    close(settings?: PdUIModalSettings): void;
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 打开模态框
     * @param {PdUIModalSettings} settings - 配置项
     */
    open(settings?: PdUIModalSettings): void;
    /**
     * 更新标题
     * @param {PdSelector} data - 新的标题
     */
    updateBody(data: PdSelector): void;
    /**
     * 更新标题
     * @param {PdSelector} data - 新的标题
     */
    updateTitle(data: PdSelector): void;
    /**
     * 创建body
     * @return {JQuery} - Body的JQuery对象
     */
    protected createBody(): void;
    /**
     * 创建header
     * @return {JQuery} - Header的JQuery对象
     */
    protected createHeader(): void;
    /**
     * 生成数据
     * @return {PdSelector} - 生成的数据
     */
    protected getSelector(data: ((data: PdVisModalSettings) => PdSelector) | string): PdSelector;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 初始化配置
     * @param {PdVisModalSettings} settings - 用户定义配置
     * @return {PdVisModalSettings} 配置
     */
    protected initSettings(settings: PdVisModalSettings): PdVisModalSettings;
}
