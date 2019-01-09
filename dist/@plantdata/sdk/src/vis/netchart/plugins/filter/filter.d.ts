/// <reference types="jquery" />
import { PdVisChart } from '../../../chart';
import { PdVisEditItemSettings } from '../../../utils/edit-item/edit-item';
import { PdVisPluginEdit, PdVisPluginEditSettings } from '../edit/edit';
import { PdVisSlider, PdVisSliderSettings } from '../../../utils/slider/slider';
import { PdSelector } from '../../../../common/common';
/**
 * 过滤插件选项配置
 */
export interface PdVisPluginFilterItemSettings extends PdVisEditItemSettings {
    /**
     * customType 为 'custom' 时有效
     */
    buildItem?: (settings: PdVisPluginFilterItemSettings) => PdSelector;
    /**
     * 允许自定义输入，仅类型为radio时有效
     */
    customEnable?: boolean;
    /**
     * 自定义类型
     */
    customType?: 'slider' | 'custom';
    /**
     * 是否允许过滤，仅类型为checkbox / radio时有效
     */
    filterable?: boolean;
    /**
     * 顺序
     */
    index?: number;
    /**
     *  选中数据变化时的事件
     */
    onchange?: (value: any[]) => void;
    /**
     *  选中数据变化时的事件
     */
    settings?: PdVisSliderSettings;
    /**
     * 编辑类型
     */
    type?: 'checkbox' | 'radio' | 'custom';
}
/**
 * 过滤插件配置
 */
export interface PdVisPluginFilterSettings extends PdVisPluginEditSettings {
    /**
     *  过滤选项
     */
    editItemSettings?: PdVisPluginFilterItemSettings[];
    /**
     *  过滤选项, 将在v5.0版中移除
     *  @deprecated
     */
    filters?: PdVisPluginFilterItemSettings[];
}
/**
 * 过滤模块配置
 */
export declare class PdVisPluginFilter extends PdVisPluginEdit {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisPluginFilterSettings;
    /**
     *  配置
     */
    settings: PdVisPluginFilterSettings;
    /**
     *  可视化组件
     */
    protected container: PdVisChart;
    /**
     *  slider组件
     */
    protected sliderMap: {
        [key: string]: PdVisSlider;
    };
    /**
     * 当前配置结果
     */
    protected filterData: {
        [key: string]: any;
    };
    /**
     * 获取当前编辑选项的结果
     * @return {any} 当前编辑选项的结果
     */
    getFilterOptions: () => {
        [key: string]: any;
    };
    /**
     * 设置编辑选项
     * @param data 滤选项配置
     */
    setFilterOptions: (data?: {
        [key: string]: any;
    }, silence?: boolean) => void;
    /**
     * 构造方法
     * @param {PdVisPluginFilterSettings} settings - 用户配置
     */
    constructor(settings?: PdVisPluginFilterSettings);
    /**
     * 获取当前编辑选项的结果
     * @return {any} 当前编辑选项的结果
     */
    getData(): {
        [key: string]: any;
    };
    /**
     * 获取插件的唯一标识
     */
    getPluginType(): string;
    /**
     * 设置编辑选项
     * @param data 滤选项配置
     * @param {boolean} silence 是否静默设置
     */
    setData(data?: {
        [key: string]: any;
    }, silence?: boolean): void;
    /**
     * 修改过滤选项
     * @param {PdVisPluginFilterItemSettings} settings 过滤插件选项配置
     */
    updateFilter(settings?: PdVisPluginFilterItemSettings): void;
    /**
     * 添加选项过滤器
     * @param {PdVisPluginFilterItemSettings} settings - 配置选项
     */
    protected addOptionFilter(settings: PdVisPluginFilterItemSettings): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 生成编辑选项的HTML
     * @param {PdVisPluginFilterItemSettings} settings - 编辑插件选项配置
     * @return {PdSelector} 编辑选项
     */
    protected gentEditItem(settings: PdVisPluginFilterItemSettings): PdSelector;
    /**
     * 获取容器主题
     */
    protected getMainContainer(): JQuery;
    /**
     * 初始化配置
     * @param {PdVisPluginFilterSettings} settings - 用户定义配置
     * @return {PdVisPluginFilterSettings} 配置
     */
    protected initSettings(settings: PdVisPluginFilterSettings): PdVisPluginFilterSettings;
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
