/// <reference types="jquery" />
import { PdComponent, PdComponentSettings } from '../../core/component';
import { PdSelector } from '../../common/common';
/**
 *  容器盒子插件配置
 */
export interface PdPanelBoxSettings extends PdComponentSettings {
    /**
     * 盒子主体内容
     */
    body?: PdSelector;
    /**
     * 盒子底部内容
     */
    footer?: PdSelector;
    /**
     * 盒子头部内容
     */
    header?: PdSelector;
    /**
     * 功能图标
     */
    icon?: PdSelector;
    /**
     * 盒子容器初始状态是否展开
     */
    isOpen?: boolean;
    /**
     *  盒子自定义样式
     */
    style?: {
        [key: string]: string;
    };
    /**
     * 功能标题
     */
    title?: PdSelector;
    /**
     * 功能提示
     */
    tooltip?: string;
}
/**
 *  容器插件
 */
export declare class PdPanelBox extends PdComponent {
    /**
     *  默认配置
     */
    static defaultSettings: PdPanelBoxSettings;
    /**
     *  配置
     */
    settings: PdPanelBoxSettings;
    /**
     * 构造方法
     * @param {PdPanelBoxSettings} settings - 用户配置
     */
    constructor(settings?: PdPanelBoxSettings);
    /**
     * 是否关闭或最小化状态
     */
    isClosedOrMini(): boolean;
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 更新状态
     */
    updateStatus(status: 'close' | 'mini' | 'open' | ''): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 初始化配置
     * @param {PdPanelBoxSettings} settings - 用户定义配置
     * @return {PdPanelBoxSettings} 配置
     */
    protected initSettings(settings: PdPanelBoxSettings): PdPanelBoxSettings;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 应用自定义样式
     */
    protected updateStyle(): void;
    /**
     * 取消绑定事件
     */
    protected unbindEvent(): void;
}
