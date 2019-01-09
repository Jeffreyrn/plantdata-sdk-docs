/// <reference types="jquery" />
import { PdOptionsType } from '../../../common/common';
import { PdEleCreatorSettings } from '../../../core/elecreator';
/**
 * 下拉选项创建配置项
 */
export interface PdUISelectSettings extends PdEleCreatorSettings {
    /**
     * 选项配置
     */
    options?: PdOptionsType;
    /**
     * 选中值
     */
    selected?: any;
    /**
     *  按钮尺寸
     */
    size?: '' | 'xs' | 'sm' | 'md' | 'lg';
}
/**
 * 下拉选项
 */
export declare class PdUISelect {
    /**
     *  默认配置
     */
    static defaultSettings: PdUISelectSettings;
    /**
     *  change事件
     */
    static attrChange: string;
    /**
     *  下拉选项的唯一标识
     */
    static attrId: string;
    /**
     *  role属性，区分dropdown / select
     */
    static attrRole: string;
    /**
     *  下拉选项的值
     */
    static attrValue: string;
    /**
     *  公用className
     */
    static clsName: string;
    /**
     *  公用class
     */
    static cls: string;
    /**
     *  条目容器的class
     */
    static clsItems: string;
    /**
     * 清空下拉选项的值
     * @param $container - 下拉框的对象
     */
    static clearValue($container: JQuery): void;
    /**
     * 创建下拉选项
     * @param {PdUISelectSettings} settings - 配置项
     * @return {string} 下拉选项html
     */
    static create(settings?: PdUISelectSettings): string;
    /**
     * 获取下拉框容器
     * @param {JQuery} $item - 下拉框的对象
     * @return {JQuery} 下拉框容器
     */
    static getItemsContainer($item: JQuery): JQuery;
    /**
     * 获取下拉选项的值
     * @param {JQuery} $item - 下拉框的对象
     * @return {any} 下拉选项的值
     */
    static getValue($item: JQuery): any;
    /**
     * 初始化下拉选项
     */
    static init(): void;
    /**
     * 设置下拉选项的值
     * @param $container - 下拉框的对象
     * @param value - 下拉选项的值
     */
    static setValue($container: JQuery, value: any): void;
    /**
     * 更新选项
     * @param $item - 下拉框的对象
     * @param options - 可选项
     * @param selected - 选中的值
     */
    static updateOptions($item: JQuery, options: any[], selected?: any): void;
    /**
     * 绑定事件
     */
    protected static bindEvent(): void;
}
