/// <reference types="jquery" />
import { PdComponent, PdComponentSettings } from '../../../core/component';
import { PdSelector } from '../../../common/common';
/**
 * 级联菜单项配置
 */
export interface PdVisCascaderItemSettings {
    /**
     * 子菜单项配置
     */
    children?: this[];
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 默认显示名称字段
     */
    label?: string;
    /**
     * 默认值字段
     */
    value?: any;
    /**
     * 其他配置
     */
    [key: string]: any;
}
/**
 * 级联配置
 */
export interface PdVisCascaderSettings extends PdComponentSettings {
    /**
     * 在 Cascader 失去焦点时触发
     */
    blur?: (event: JQuery.Event) => void;
    /**
     * 值变化时触发的事件
     */
    change?: (value: any, event: JQuery.Event) => void;
    /**
     * 点击即改变
     */
    changeOnSelect?: boolean;
    /**
     *  工具选项的class
     */
    cls?: string[];
    /**
     * 数据
     */
    data?: PdVisCascaderItemSettings[];
    /**
     *  是否禁用
     */
    disabled?: boolean;
    /**
     * 在 Cascader 获得焦点时触发
     */
    focus?: (event: JQuery.Event) => void;
    /**
     * 是否路径
     */
    isPath?: boolean;
    /**
     * 显示字段的key
     */
    labelKey?: string;
    /**
     *  生成下拉提示组件的容器
     */
    selector?: PdSelector;
    /**
     * 是否显示路径
     */
    showPath?: boolean;
    /**
     * 尺寸
     */
    size?: 'xs' | 'sm' | 'lg' | 'xl';
    /**
     * 唯一辨识的key
     */
    valueKey?: string;
}
/**
 * 级联选择器
 */
export declare class PdVisCascader extends PdComponent {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisCascaderSettings;
    /**
     *  配置项
     */
    settings: PdVisCascaderSettings;
    /**
     * 菜单容器
     */
    protected $menu: JQuery<HTMLDivElement>;
    /**
     * 数据
     */
    protected data: PdVisCascaderItemSettings[];
    /**
     * 叶子数据值列表
     */
    protected endValues: any[][];
    /**
     * 数据值列表
     */
    protected values: any[][];
    /**
     * 唯一辨识的key
     */
    protected valueKey: string;
    /**
     * 显示字段的key
     */
    protected labelKey: string;
    /**
     * 遮罩监听事件
     * @param {JQuery.Event} e - 点击事件对象
     */
    protected maskListener: (e: JQuery.Event) => void;
    /**
     * 构造方法
     * @param {PdVisCascaderSettings} settings - 用户配置
     */
    constructor(settings?: PdVisCascaderSettings);
    /**
     * 关闭选项
     */
    close(): void;
    /**
     * 获取value对应的obj
     * @param arr - 数据
     * @param value - value
     */
    getValueObj(value: any, arr?: PdVisCascaderItemSettings[]): PdVisCascaderItemSettings;
    /**
     * 获取当前选中的值
     * @param {boolean} isPath - 是否按路径获取
     * @return {any | any[]} 当前选中的结果
     */
    getValue(isPath?: boolean): any | any[];
    /**
     * 是否激活状态
     */
    isOpen(): boolean;
    /**
     * 展开选项
     */
    open(): void;
    /**
     * 设置当前选中的值
     * @param {any[]} value - 需要设置的值
     * @param {boolean} isPath - 是否按路径设置
     */
    setValue(value: any | any[], isPath?: boolean): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 配置初始化完成后的回调
     */
    protected created(): void;
    /**
     * 配置初始化完成后的回调
     */
    protected createMenuItem(arr: PdVisCascaderItemSettings[], value?: any): void;
    /**
     * 初始化配置
     * @param {PdVisCascaderSettings} settings - 用户定义配置
     * @return {PdVisCascaderSettings} 配置
     */
    protected initSettings(settings: PdVisCascaderSettings): PdVisCascaderSettings;
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
     * 取消事件绑定
     */
    protected unbindEvent(): void;
    /**
     * 更新数据值列表
     * @param {any[]} arr 数据列表
     * @param {any[]} path 数值父路径
     */
    protected updateValues(arr?: any[], path?: any[]): void;
}
