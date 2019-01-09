import { PdUIMessageSettings } from '../ui/components/message/message';
import { PdIconUtils } from '../icon';
/**
 * 选择器类型 string | HTMLElement | JQuery， any兼容@types/JQuery 3.3.6
 */
export declare type PdSelector = any;
/**
 * 可选项类型
 */
export declare type PdOptionType = {
    value: string;
    label: string;
    checked?: boolean;
    disabled?: boolean;
    children?: PdOptionType[];
    _path?: any[];
};
/**
 * 可选项配置类型
 */
export declare type PdOptionsType = {
    [key: string]: string;
} | (PdOptionType | number | string)[];
/**
 * Viewport
 */
export interface PdViewport {
    /**
     * 页面高度
     */
    height: number;
    /**
     * 左侧偏移
     */
    left: number;
    /**
     * 上侧偏移
     */
    top: number;
    /**
     * 页面宽度
     */
    width: number;
}
/**
 * 浏览器环境信息
 */
export interface PdBrowserEnv {
    /**
     * 是否firefox
     */
    firefox?: boolean;
    /**
     * 版本号
     */
    version?: number;
    /**
     * 是否ie
     */
    ie?: boolean;
    /**
     * 是否edge
     */
    edge?: boolean;
    /**
     * 是否微信
     */
    weChat?: boolean;
    [key: string]: any;
}
/**
 * PlantData通用工具集
 * */
export declare class PdCommonUtils {
    /**
     *  基本配色
     */
    static colorBase: string[];
    /**
     *  基本配色的浅色
     */
    static colorBaseLight: string[];
    /**
     *  扩展配色
     */
    static colorEx: string[];
    /**
     * 创建SVG字串
     * @param {string} content - SVG的内容
     * @param {object} [atts] - SVG的属性
     * @return {String} SVG字串
     * */
    static createSVGStr: typeof PdIconUtils.createSVGStr;
    /**
     *  代码执行工具
     */
    static eval: typeof eval;
    /**
     *  已存在的ID
     */
    protected static exIds: {
        [key: string]: boolean;
    };
    /**
     * 给String类型添加localeCompare方法
     * */
    static addLocaleCompare(): void;
    /**
     * 将其他类的方法混合到一个类中
     * @param {any} derivedCtor - 要被混合到的类
     * @param {any[]} baseCtors - 要被混合的类数组
     * */
    static applyMixins(derivedCtor: any, baseCtors: any[]): void;
    /**
     * 生成无数据提示
     * @return {string} 无数据提示字串
     */
    static buildNoData(tip?: string): string;
    /**
     * 是否支持 canvas
     * @return {boolean} - 是否支持 canvas
     */
    static canvasSupport(): boolean;
    /**
     * 生成随机ID
     * @param {string} [prefix=''] - 生成ID的前缀
     * @param {string} [postfix=''] - 生成ID的后缀
     * @param {string} [append=''] - 生成ID的中间内容
     * @return {string} 随机ID
     * */
    static createId(prefix?: string, postfix?: string, append?: string): string;
    /**
     * 显示错误消息
     * @param {string} msg - 显示的消息
     * @param {PdUIMessageSettings} settings - 其他配置
     * */
    static error(msg: string, settings?: PdUIMessageSettings): void;
    /**
     * 获取浏览器环境信息
     * @return {PdBrowserEnv} - 浏览器环境信息
     */
    static getBrowserEnv(): PdBrowserEnv;
    /**
     * 获取链接中的参数值
     * @param {string} key - 需要获取参数的参数名
     * @param {string} [search = window.location.search] - 需要获取参数的链接
     * @return {string} 参数值
     * */
    static getSearchParam(key: string, search?: string): string;
    /**
     * 获取页面信息
     * @return {PdViewport} 页面宽高
     */
    static getViewport(): PdViewport;
    /**
     * 在数组中查找数据的位置，忽略数据类型
     * @param {any[]} list - 待查找的数组
     * @param {any} item - 需要查找的数据
     * @return {number} 位置
     */
    static indexOfIgnoreType(list: any[], item: any): number;
    /**
     * 显示提示的消息
     * @param {string} msg - 显示的消息
     * */
    static info(msg: string): void;
    /**
     * 将list类型转为tree类型
     * @param {{ [key: string]: any }[]} arr - 实体schema
     * @param {string} pId - 父节点ID
     * @param {string} valueKey - value的字段
     * @param {string} labelKey - label的字段
     * @param {string} pIdKey - pId的字段
     */
    static listToTree(arr: {
        [key: string]: any;
    }[], pId?: string, valueKey?: string, labelKey?: string, pIdKey?: string): any[];
    /**
     * 打印信息
     * @param {log | error | debug | warn} level - 打印等级
     * @param {...any} msg - 打印的信息
     * */
    static logger(level?: string, ...msg: any[]): void;
    /**
     * 合并数据
     * @param {boolean} deep - 是否深拷贝
     * @param {any} target - 合并目标
     * @param {any[]} source - 待合并数据
     * @return {any} 合并结果
     * */
    static merge(deep: boolean, target: any, ...source: any[]): any;
    /**
     * 合并两条数据
     * @param {boolean} deep - 是否深拷贝
     * @param {any} target - 合并目标
     * @param {any} source - 待合并数据
     * @return {any} 合并结果
     * */
    static mergeOne(deep: boolean, target: any, source: any): any;
    /**
     * 生成0-1之间的随机数
     * @return {number} 随机数
     */
    static random(max?: number, floating?: boolean): number;
    /**
     * JS转成字串
     * @param {any} js - JS代码
     * @return {string} JS代码字串
     * */
    static stringify(js: any): string;
    /**
     * 显示成功的消息
     * @param {string} msg - 显示的消息
     * */
    static success(msg: string): void;
    /**
     * 转换可选项为{ value: string, label: string }格式
     * @param {PdOptionsType} options - 可选项
     * @param {any} selected - 选中项
     * @param {any[]} path - 父选项路径
     * @return { value: string, label: string }[] - 转换后的可选项
     */
    static transferOption(options: PdOptionsType, selected?: any, path?: any[]): PdOptionType[];
    /**
     * 显示警告的消息
     * @param {string} msg - 显示的消息
     * */
    static warning(msg: string): void;
}
