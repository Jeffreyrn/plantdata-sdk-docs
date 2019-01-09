/// <reference types="jquery" />
import { PdSelector } from '../../common/common';
import { PdComponent, PdComponentSettings } from '../../core/component';
/**
 * 面板配置
 */
export interface PdPanelSettings extends PdComponentSettings {
}
/**
 * 子面板配置
 */
export interface PdPanelChildSettings extends PdComponentSettings {
    /**
     *  子面板唯一标识
     */
    id?: string;
}
/**
 * 面板
 */
export declare class PdPanel extends PdComponent {
    /**
     * 子面板
     */
    protected children: {
        [key: string]: {
            hidden: boolean;
            $el: JQuery;
        };
    };
    /**
     * 构造方法
     * @param {PdPanelSettings} settings - 用户配置
     */
    constructor(settings?: PdPanelSettings);
    /**
     * 激活子面板
     * @param {string} id - 子面板id
     */
    activeChild(id: string): void;
    /**
     * 添加子面板
     * @param {PdSelector} child - 子面板选择器
     * @param {PdPanelChildSettings} settings - 子面板配置
     * @return {string} 子面板Dom字符串
     */
    addChild(child: PdSelector, settings?: PdPanelChildSettings): string;
    /**
     * 清空子面板
     */
    clearChild(): void;
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 禁用子面板
     * @param {string} id - 子面板ID
     */
    disableChild(id: string): void;
    /**
     * 启用子面板
     * @param {string} id - 子面板ID
     */
    enableChild(id: string): void;
    /**
     * 更新子面板启用状态
     * @param {string} id - 子面板ID
     * @param {boolean} hidden - 是否隐藏
     */
    updateChildStatus(id: string, hidden?: boolean): void;
    /**
     * 隐藏面板
     */
    hidePanel(): void;
    /**
     * 面板是否显示
     * @return {boolean} 面板是否显示
     */
    isPanelShow(): boolean;
    /**
     * 显示面板
     */
    showPanel(): void;
    /**
     * 显示/隐藏面板
     * @param {boolean} show - 是否显示
     */
    togglePanel(show?: boolean): void;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
}
