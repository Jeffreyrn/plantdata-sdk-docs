/// <reference types="jquery" />
import { PdComponent, PdComponentSettings } from '../../../core/component';
import { PdSelector } from '../../../common/common';
/**
 * Slider配置
 */
export interface PdVisSliderSettings extends PdComponentSettings {
    /**
     * 改变事件
     */
    change?: (value: number | [number, number]) => void;
    /**
     * 拖拽时的事件
     */
    dragging?: (value: number | [number, number]) => void;
    /**
     * 拖拽事件响应间隔时间
     */
    debounceTime?: number;
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 高度（垂直时必填）
     */
    height?: number;
    /**
     * 最大值
     */
    max?: number;
    /**
     * 最小值
     */
    min?: number;
    /**
     *  是否为范围选择
     */
    range?: boolean;
    /**
     *  生成下拉提示组件的容器
     */
    selector?: PdSelector;
    /**
     * 是否显示Tooltip
     */
    showTooltip?: boolean;
    /**
     * 是否显示最大最小值
     */
    showLabel?: boolean;
    /**
     * 步长
     */
    step?: number;
    /**
     * 当前值
     */
    value?: [number, number] | number;
    /**
     * 是否垂直
     */
    vertical?: boolean;
}
/**
 * Slider
 */
export declare class PdVisSlider extends PdComponent {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisSliderSettings;
    /**
     *  配置项
     */
    settings: PdVisSliderSettings;
    /**
     * 方向
     */
    protected direction: 'left' | 'bottom';
    /**
     * width / height
     */
    protected wh: 'width' | 'height';
    /**
     * 偏移量
     */
    protected offset: 'offsetX' | 'offsetY';
    /**
     * 偏移计算方向
     */
    protected pageDirection: 'pageX' | 'pageY';
    /**
     * tooltip显示位置
     */
    protected tooltipPosition: string;
    /**
     * 移动事件
     */
    protected moveHandler: (e: JQuery.Event) => void;
    /**
     * 弹起事件
     */
    protected upHandler: (e: JQuery.Event) => void;
    /**
     * 构造方法
     * @param {PdVisSliderSettings} settings - 用户配置
     */
    constructor(settings?: PdVisSliderSettings);
    /**
     * 设置值
     * @param {[number, number] | number} v - 值
     */
    setValue(v: [number, number] | number): void;
    /**
     * 取值
     * @return {[number, number] | number} 当前值
     */
    getValue(): [number, number] | number;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 将数值控制在step设置的小数位数
     * @param {number} rs - 传入的需要计算处理的值
     * @return {number} 转换后的值
     */
    protected getDecimalNumber(rs: number): number;
    /**
     * range模式时判断传入的值离value中哪个值更接近
     * @param {number} v - 传入值用来对比
     * @return {number} 接近的值
     */
    protected getNearNumber(v: number): number;
    /**
     * 将传入的值处理成符合step倍数的数值
     * @param {number} rs - 传入的值
     * @return {number} 符合step倍数的数值
     */
    protected getSimilarNumber(rs: number): number;
    /**
     * 从DOM上获取对应的数据
     * @param {PdSelector} e - 获取数据的对象
     */
    protected getValueByElement(e: PdSelector): number;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 初始化配置
     * @param {PdVisSliderSettings} settings - 用户定义配置
     * @return {PdVisSliderSettings} 配置
     */
    protected initSettings(settings: PdVisSliderSettings): PdVisSliderSettings;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 坐标转化为value
     * @param {number} pos - 坐标
     * @result {number} value
     */
    protected posToValue(pos: number): number;
    /**
     * 在值改变时给元素设置新的样式
     */
    protected updateUI(): void;
    /**
     * 取消事件绑定
     */
    protected unbindEvent(): void;
    /**
     * 更新值
     * @param {number} pos - 更新后的位置坐标
     */
    protected updateValueByPos(pos: number): void;
}
