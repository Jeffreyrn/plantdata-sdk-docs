/// <reference types="jquery" />
import { PdSelector } from '../../../common/common';
import { PdComponent, PdComponentSettings } from '../../../core/component';
/**
 * Tag编辑器配置
 */
export interface PdVisTagEditorSettings extends PdComponentSettings {
    /**
     * 添加之前执行的方法。返回false时，阻止添加
     * @param {any} item - 待添加的数据
     * @return {Promise<any>} - 检验添加的异步实例
     */
    beforeAdd?: (item: any, ins: PdVisTagEditor) => Promise<any>;
    /**
     * 删除之前执行的方法。返回false时，阻止删除
     * @param {any} item - 待删除的数据
     * @return {Promise<any>} - 检验删除的异步实例
     */
    beforeDelete?: (item: any, ins: PdVisTagEditor) => Promise<any>;
    /**
     * 数据
     */
    data?: any[];
    /**
     * 是否允许重复
     */
    repeatable?: boolean;
    /**
     *  生成下拉提示组件的容器
     */
    selector?: PdSelector;
    /**
     *  Tag编辑器尺寸
     */
    size?: '' | 'xs' | 'sm' | 'md' | 'lg';
}
/**
 * Tag编辑器
 */
export declare abstract class PdVisTagEditor extends PdComponent {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisTagEditorSettings;
    /**
     *  配置
     */
    settings: PdVisTagEditorSettings;
    /**
     * 数据存储的JQuery对象
     */
    protected $dataContainer: JQuery;
    /**
     * 编辑器的JQuery对象
     */
    protected $editor: JQuery;
    /**
     * 数据
     */
    protected data: any[];
    /**
     * 构造方法
     * @param {PdVisTagEditorSettings} settings - 用户配置
     */
    constructor(settings?: PdVisTagEditorSettings);
    /**
     * 是否允许添加数据
     * @param {any} value - 数据值
     * @return {boolean} - 是否允许
     */
    addAble(value: any): boolean;
    /**
     * 添加数据
     * @param {any} value - 数据值
     * @return {Promise<any>} 异步实例
     */
    addData(value: any): Promise<any>;
    /**
     * 清空数据
     */
    clearData(): void;
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 判断数据是否已存在
     * @param {any} value - 数据的值
     * @return {boolean} - 是否存在
     */
    existData(value: any): boolean;
    /**
     * 获取数据
     * @return {any[]} - 数据
     */
    getData(): any[];
    /**
     * 设置数据
     * @param {any[]} values - 数据值
     */
    setData(values?: any[]): void;
    /**
     * value转为data
     * @param {any} value - 待转换的value
     * @return {any} - 转换后的数据
     */
    valueToData(value: any): any;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 添加数据
     * @param {any} data - 数据
     */
    protected createData(data: any): string;
    /**
     * 创建编辑器
     * @return {JQuery} - 编辑器的JQuery对象
     */
    protected abstract createEditor(): JQuery;
    /**
     * 初始化配置
     * @param {PdVisTagEditorSettings} settings - 用户定义配置
     * @return {PdVisTagEditorSettings} 配置
     */
    protected initSettings(settings: PdVisTagEditorSettings): PdVisTagEditorSettings;
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
     * 更新数据
     */
    protected updateData(): void;
}
