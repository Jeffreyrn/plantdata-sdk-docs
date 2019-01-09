/// <reference types="jquery" />
import { PdComponent, PdComponentSettings } from '../../../core/component';
import { PdSelector } from '../../../common/common';
import { PdColorType, PdColorHSB, PdColorRGB } from '../../../common/color';
/**
 * 颜色选择器配置
 */
export interface PdVisColorPickerSettings extends PdComponentSettings {
    /**
     * 原颜色
     */
    color?: PdColorType;
    /**
     * 面板布局
     */
    layout?: 'full' | 'hex';
    /**
     * 实时预览
     */
    livePreview?: boolean;
    /**
     * 颜色变化时的回调方法
     * @param {PdColorHSB} hsb - HSB格式的颜色
     * @param {string} hex - Hex格式的颜色
     * @param {PdColorRGB} rgb - RGB格式的颜色
     * @param {PdVisColorPicker} ins - 颜色选择器的实例
     * @param {boolean} code -  是否代码触发
     */
    onChange?: (hsb: PdColorHSB, hex: string, rgb: PdColorRGB, ins: PdVisColorPicker, code: boolean) => void;
    /**
     * 确认修改颜色时的回调方法
     * @param {PdColorHSB} hsb - HSB格式的颜色
     * @param {string} hex - Hex格式的颜色
     * @param {PdColorRGB} rgb - RGB格式的颜色
     * @param {PdVisColorPicker} ins - 颜色选择器的实例
     */
    onSubmit?: (hsb: PdColorHSB, hex: string, rgb: PdColorRGB, ins: PdVisColorPicker) => void;
    /**
     *  生成下拉提示组件的容器
     */
    parent?: PdSelector;
    /**
     * 触发颜色选择面板的元素
     */
    selector?: PdSelector;
    /**
     * 是否存在确认按钮
     */
    submit?: boolean;
    /**
     * 确认按钮的文字
     */
    submitText?: string;
    /**
     * 主题
     */
    theme?: string;
}
/**
 * 颜色选择器
 */
export declare class PdVisColorPicker extends PdComponent {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisColorPickerSettings;
    /**
     *  配置项
     */
    settings: PdVisColorPickerSettings;
    /**
     * 新颜色
     */
    protected color: PdColorHSB;
    /**
     * 颜色选择面板的高度
     */
    protected height: number;
    /**
     * 是否IE且版本小于10
     */
    protected ngIE: boolean;
    /**
     * 原颜色
     */
    protected origColor: PdColorHSB;
    /**
     * 透明度面板
     */
    protected $alpha: JQuery;
    /**
     * 新颜色面板
     */
    protected $currentColor: JQuery;
    /**
     * 颜色输入面板
     */
    protected $fields: JQuery<HTMLInputElement>;
    /**
     * Hue颜色面板
     */
    protected $hue: JQuery;
    /**
     * 新颜色面板
     */
    protected $newColor: JQuery;
    /**
     * 颜色选择面板
     */
    protected $selector: JQuery;
    /**
     * 颜色选择面板选择按钮
     */
    protected $selectorIndic: JQuery;
    /**
     * 实例销毁事件
     */
    protected destroyEvent: () => void;
    /**
     * Alpha颜色选择面板鼠标移动事件
     */
    protected moveAlphaEvent: (event: JQuery.Event) => void;
    /**
     * Hue颜色选择面板鼠标移动事件
     */
    protected moveHueEvent: (event: JQuery.Event) => void;
    /**
     * 颜色输入面板鼠标移动事件
     */
    protected moveIncrementEvent: (event: JQuery.Event) => void;
    /**
     * 颜色选择面板鼠标移动事件
     */
    protected moveSelectorEvent: (event: JQuery.Event) => void;
    /**
     * Alpha颜色选择面板鼠标放开事件
     */
    protected upAlphaEvent: (event: JQuery.Event) => void;
    /**
     * Hue颜色选择面板鼠标放开事件
     */
    protected upHueEvent: (event: JQuery.Event) => void;
    /**
     * 颜色输入面板鼠标放开事件
     */
    protected upIncrementEvent: (event: JQuery.Event) => void;
    /**
     * 颜色选择面板鼠标放开事件
     */
    protected upSelectorEvent: (event: JQuery.Event) => void;
    /**
     * 颜色格式转化为HSB格式
     * @param {PdColorType} color - 颜色
     */
    protected static colorToHSB(color: PdColorType): PdColorHSB;
    /**
     * 生成线性渐变样式
     * @param {string} colorStr - 渐变颜色
     * @return {string} 线性渐变样式
     */
    protected static createGradient(colorStr: string): string;
    /**
     * 近似Alpha值
     * @param {number} val - 原值
     * @return {number} 近似值
     */
    protected static roundAlpha(val: number): number;
    /**
     * 构造方法
     * @param {PdVisColorPickerSettings} settings - 用户配置
     */
    constructor(settings?: PdVisColorPickerSettings);
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 设置颜色
     * @param {PdColorType} color - 颜色
     * @param {boolean} setCurrent - 是否更新原颜色
     */
    setColor(color: PdColorType, setCurrent?: boolean): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 颜色变化时触发的事件
     * @param {HTMLInputElement} ele - 触发事件的元素
     */
    protected change(ele: HTMLInputElement): void;
    /**
     * 填充Alpha颜色
     * @param {PdColorHSB} hsb - hsb格式的颜色
     */
    protected fillAlphaFields(hsb: PdColorHSB): void;
    /**
     * 填充Hex颜色
     * @param {PdColorHSB} hsb - hsb格式的颜色
     */
    protected fillHexFields(hsb: PdColorHSB): void;
    /**
     * 填充HSB颜色
     * @param {PdColorHSB} hsb - hsb格式的颜色
     */
    protected fillHSBFields(hsb: PdColorHSB): void;
    /**
     * 填充RGB颜色
     * @param {PdColorHSB} hsb - hsb格式的颜色
     */
    protected fillRGBFields(hsb: PdColorHSB): void;
    /**
     * 初始化配置
     * @param {PdVisColorPickerSettings} settings - 用户定义配置
     * @return {PdVisColorPickerSettings} 配置
     */
    protected initSettings(settings: PdVisColorPickerSettings): PdVisColorPickerSettings;
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
     * 重置原颜色
     */
    protected restoreOriginal(): void;
    /**
     * 设置原颜色面板的颜色
     * @param {PdColorHSB} hsb - hsb格式的颜色
     */
    protected setCurrentColor(hsb: PdColorHSB): void;
    /**
     * 设置Hue颜色选择面板的位置
     * @param {PdColorHSB} hsb - hsb格式的颜色
     */
    protected setHue(hsb: PdColorHSB): void;
    /**
     * 设置Alpha颜色选择面板的位置
     * @param {PdColorHSB} hsb - hsb格式的颜色
     */
    protected setAlpha(hsb: PdColorHSB): void;
    /**
     * 设置Alpha颜色选择面板的位置
     * @param {PdColorHSB} hsb - hsb格式的颜色
     */
    protected setAlphaSelector(hsb: PdColorHSB): void;
    /**
     * 设置新颜色面板的颜色
     * @param {PdColorHSB} hsb - hsb格式的颜色
     */
    protected setNewColor(hsb: PdColorHSB): void;
    /**
     * 设置颜色选择面板的位置
     * @param {PdColorHSB} hsb - hsb格式的颜色
     */
    protected setSelector(hsb: PdColorHSB): void;
    /**
     * 取消事件绑定
     */
    protected unbindEvent(): void;
    /**
     * 更新输入框中的颜色
     * @param {PdColorType} color - 颜色
     * @param {boolean} setCurrent - 是否更新原颜色
     */
    protected updateColor(color: PdColorType, setCurrent?: boolean): void;
}
