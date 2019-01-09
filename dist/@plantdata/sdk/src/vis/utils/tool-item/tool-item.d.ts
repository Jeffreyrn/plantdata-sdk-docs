/// <reference types="jquery" />
import { PdComponent, PdComponentSettings } from '../../../core/component';
import { PdSelector } from '../../../common/common';
/**
 * 工具选项配置
 */
export interface PdVisToolItemSettings extends PdComponentSettings {
    /**
     * 工具选项点击事件执行之后执行的事件
     * @param {JQuery.Event} event - 事件对象
     * @return {any}
     */
    afterClick?: (event: JQuery.Event) => any;
    /**
     * 子菜单
     */
    children?: PdVisToolItem[];
    /**
     * 工具选项点击事件
     * @param {JQuery.Event} event - 事件对象
     * @return {any}
     */
    click?: (event: JQuery.Event) => any;
    /**
     *  工具选项的class
     */
    cls?: string[];
    /**
     *  是否禁用
     */
    disabled?: boolean;
    /**
     * 事件
     */
    events?: {
        /**
         * 事件回调
         * @param {JQuery.Event} event
         */
        [key: string]: (event: JQuery.Event) => void;
    };
    /**
     *  图标
     */
    icon?: string;
    /**
     *  标识
     */
    name?: string;
    /**
     * 工具主体
     */
    selector?: PdSelector;
    /**
     *  显示的title
     */
    title?: string;
    /**
     * 文字提示
     */
    tooltip?: {
        /**
         * 是否启用
         */
        enable?: boolean;
        /**
         * 提示的模式
         */
        mode?: 'hover' | 'click';
        /**
         * 提示位置
         */
        position?: 'left' | 'right' | 'top' | 'bottom';
    };
    /**
     * 是否显示
     */
    visible?: boolean;
    /**
     * 其他配置
     */
    [key: string]: any;
}
/**
 * 工具插件
 */
export declare class PdVisToolItem extends PdComponent {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisToolItemSettings;
    /**
     * 子工具
     */
    children: PdVisToolItem[];
    /**
     *  配置
     */
    settings: PdVisToolItemSettings;
    /**
     * 构造方法
     * @param {PdVisToolItemSettings} settings - 用户配置
     */
    constructor(settings?: PdVisToolItemSettings);
    /**
     * 获取工具的唯一标识
     */
    getToolType(): string;
    /**
     * 是否有效
     * @return {boolean} 有效性
     */
    getStatus(): boolean;
    /**
     * 是否可见
     * @return {boolean} 可见性
     */
    getVisibility(): boolean;
    /**
     * 更新状态
     * @param {boolean} enable - 是否可点击
     */
    updateStatus(enable: boolean): void;
    /**
     * 更新状态
     * @param {boolean} visible - 是否可显示
     */
    updateVisibility(visible: boolean): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 生成事件数据
     * @param {JQuery.Event} event - 事件
     */
    protected createEventData(event: JQuery.Event): void;
    /**
     * 初始化配置
     * @param {PdVisToolItemSettings} settings - 用户定义配置
     * @return {PdVisToolItemSettings} 配置
     */
    protected initSettings(settings: PdVisToolItemSettings): PdVisToolItemSettings;
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
     * 处理点击事件
     * @param {JQuery.Event} event - 事件对象
     */
    protected onClick(event: JQuery.Event): void;
    /**
     * 取消绑定事件
     */
    protected unbindEvent(): void;
}
