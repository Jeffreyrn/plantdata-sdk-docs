/// <reference types="jquery" />
import { PdUIPagination, PdUIPaginationSettings } from '../../ui/components/pagination/pagination';
import { PdSelector } from '../../common/common';
import { PdComponent, PdComponentSettings } from '../../core/component';
/**
 *  自定义渲染类型
 */
export declare type PdSDKTableCustomRenderer = (value: any, data: any) => string;
/**
 *  简单渲染类型
 */
export declare type PdSDKTableRendererType = 'date' | 'link' | 'year' | 'dateTime' | 'json' | 'string' | PdSDKTableCustomRenderer;
/**
 *  复杂渲染类型
 */
export declare type PdSDKTableRendererComplex = {
    /**
     *  是否复杂字段
     */
    complex?: boolean;
    /**
     *  渲染链接的字段
     */
    fields?: string[];
    /**
     *  是否渲染字段名
     */
    label?: boolean;
    /**
     *  最大渲染字数
     */
    len?: number;
    /**
     *  链接名称
     */
    name?: string;
    /**
     *  表格渲染样式
     */
    style?: {
        /**
         *  单元格水平位置
         */
        align?: 'left' | 'center' | 'right';
        /**
         *  单元格宽度
         */
        width?: string | number;
    };
    /**
     *  简单渲染类型
     */
    type?: PdSDKTableRendererType;
};
/**
 *  渲染类型
 */
export declare type PdSDKTableRenderer = {
    [key: string]: PdSDKTableRendererType | PdSDKTableRendererComplex;
};
/**
 *  过滤类型
 */
export declare type PdSDKTableFilterType = 'string' | 'number' | 'year' | 'month' | 'date';
/**
 *  过滤选项配置
 */
export declare type PdSDKTableFilterOption = string | {
    key: string;
    value: string;
} | {
    [key: string]: string;
};
/**
 * 过滤配置
 */
export interface PdSDKTableFilter {
    /**
     *  过滤数据格式
     */
    format?: string;
    /**
     *  过滤项的标识
     */
    key: string;
    /**
     *  过滤项显示名称
     */
    label?: string;
    /**
     *  是否支持多选
     */
    multi?: boolean;
    /**
     *  过滤选项
     */
    options: PdSDKTableFilterOption[];
    /**
     *  过滤类型
     */
    type?: PdSDKTableFilterType;
}
/**
 * Table配置
 */
export interface PdSDKTableSettings extends PdComponentSettings {
    /**
     *  是否渲染详情
     */
    detailEnable?: boolean;
    /**
     *  在详情中显示的数据字段
     */
    detailFields?: string[];
    /**
     *  detail渲染配置
     */
    detailRendererList?: PdSDKTableRenderer;
    /**
     *  数据字段
     */
    fields?: string[];
    /**
     *  过滤配置
     */
    filters?: PdSDKTableFilter[];
    /**
     *  是否渲染关键词过滤
     */
    kwEnable?: boolean;
    /**
     *  搜索字段配置
     */
    kwFields?: string[];
    /**
     * 数据加载方法
     * @param {number} pageNo 页码
     */
    loader?: (pageNo: number) => Promise<any>;
    /**
     *  名称
     */
    name?: string;
    /**
     *  数据字段对应显示名称
     */
    fieldsName?: string[];
    /**
     *  是否支持分页
     */
    pageEnable?: boolean;
    /**
     *  分页配置
     */
    pageSettings?: PdUIPaginationSettings;
    /**
     *  预置内容
     */
    payload?: {
        /**
         *  预置数据
         */
        data: any[];
        /**
         *  分页信息
         */
        page?: {
            /**
             *  当前页码
             */
            pageNo: number;
            /**
             *  每页个数
             */
            pageSize: number;
            /**
             *  总个数
             */
            totalItem: number;
        };
    };
    /**
     *  渲染配置
     */
    rendererList?: PdSDKTableRenderer;
    /**
     *  生成Table的选择器
     */
    selector?: PdSelector;
    /**
     *  是否可选中的表格
     */
    selectEnable?: boolean;
    /**
     *  是否渲染表格
     */
    tableEnable?: boolean;
    /**
     *  在表格中显示的数据字段
     */
    tableFields?: string[];
    /**
     *  table渲染配置
     */
    tableRendererList?: PdSDKTableRenderer;
}
/**
 * SDK Table
 */
export declare class PdSDKTable extends PdComponent {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKTableSettings;
    /**
     *  分页组件实例
     */
    pagination: PdUIPagination;
    /**
     *  配置
     */
    settings: PdSDKTableSettings;
    /**
     *  数据
     */
    protected data: any[];
    /**
     *  当前页码
     */
    protected pageNo: number;
    /**
     * 生成单元格HTML
     * @param rowData - 单行数据
     * @param {string} field - 字段
     * @param {{[p: string]: string}} fieldsLinkMap - 字段链接映射规则
     * @param {PdSDKTableRenderer} rendererList - 渲染规则
     * @return {string} 单元格的HTML内容
     */
    protected static createCellData(rowData: any, field: string, fieldsLinkMap: {
        [key: string]: string;
    }, rendererList: PdSDKTableRenderer): string;
    /**
     * 生成单元格中单条数据，如单元格中有多个人名，则是其中的一个
     * @param data - 单元格中的单条数据
     * @param {string} field - 字段
     * @param {PdSDKTableRenderer} rendererList - 渲染规则
     * @param rowData - 单行数据
     * @return {string} 单条数据的HTML
     */
    protected static createCellSingleData(data: any, field: string, rendererList: PdSDKTableRenderer, rowData?: any): string;
    /**
     * 生成链接
     * @param {string} link - 数据链接
     * @param {string} label - 显示名称
     * @param {string} cls - class
     * @return {string} 链接数据
     */
    protected static createLink(link: string, label?: string, cls?: string): string;
    /**
     * 缩短长文本数据
     * @param {string} str - 数据内容
     * @param {number} maxLen - 限制的最大长度
     * @return {string} 缩短后的数据
     */
    protected static cutStr(str: string, maxLen: number): string;
    /**
     * 数据转为数组数据
     * @param data - 原数据
     * @return {any[]} - 数据数组
     */
    protected static dataToArr(data: any): any[];
    /**
     * 格式化日期数据
     * @param {string} datetime - 日期时间
     * @return {string} 日期
     */
    protected static formatDate(datetime: string): string;
    /**
     * 格式化日期时间数据
     * @param {string} datetime - 日期时间
     * @return {string} 日期时间
     */
    protected static formatDatetime(datetime: string): string;
    /**
     * 格式化年份数据
     * @param {string} datetime - 日期时间
     * @return {string} 年份
     */
    protected static formatYear(datetime: string): string;
    /**
     * 从对象中获取指定路径的数据，当遇到数组时全部获取，如需指定获取数组中指定位置的数据，请使用lodash的get方法
     * @param objData - 对象数据
     * @param {string} keyPath - 数据路径
     * @return {any} 数据
     */
    protected static getValue(objData: any, keyPath: string): any;
    /**
     * 在每个字段上查找对应的链接字段并生成映射规则
     * @param {string[]} fields - 所有字段
     * @param {PdSDKTableRenderer} rendererList - 渲染规则
     * @return {{[p: string]: string}} 字段与链接字段的映射规则，key是生成链接的字段，比如title; value:是生成的链接字段，比如url
     */
    protected static mapFieldsLink(fields: string[], rendererList: PdSDKTableRenderer): {
        [key: string]: string;
    };
    /**
     * 更新单元格数据
     * @param {string} str - 待处理的数据字串
     * @param {PdSDKTableRendererComplex} renderer - 渲染规则
     * @param {string} fieldsLinkMap - 字段链接映射规则
     * @param {number} len - 最大长度
     * @return {string} 处理后的数据字串
     */
    protected static updateCellData(str: string, renderer: PdSDKTableRendererComplex, fieldsLinkMap: string, len?: number): string;
    /**
     * 构造方法
     * @param {PdSDKTableSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKTableSettings);
    /**
     * 读取数据
     * @return {any[]} 数据
     */
    getData(): any[];
    /**
     * 获取过滤关键词
     * @return {string} 过滤关键词
     */
    getFilterKeyword(): string;
    /**
     * 获取当前过滤项
     * @return {{[p: string]: string[]}} 当前过滤项
     */
    getFilterOptions(): {
        [key: string]: string[];
    };
    /**
     * 获取当前选中数据项
     * @return {any[]} - 当前选中的数据项
     */
    getSelectedData(): any[];
    /**
     * 获取Table的容器
     * @return {JQuery} Table的容器
     */
    getTableContainer(): JQuery;
    /**
     * 加载数据
     * @param {number} pageNo - 显示数据的页面
     */
    load(pageNo: number): Promise<any>;
    /**
     * 设置数据
     * @param {any[]} data - 数据
     */
    setData(data: any[]): void;
    /**
     * 设置分页信息
     * @param {number} totalItem - 总条数
     * @param {number} pageNo - 当前页码
     * @param {number} pageSize - 每页个数
     */
    setPage(totalItem: number, pageNo: number, pageSize: number): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 绑定过滤事件
     */
    protected bindFilterEvent(): void;
    /**
     * 生成过滤选项
     * @param {JQuery} $el - 生成的容器
     */
    protected buildFilter($el: JQuery): void;
    /**
     * 初始化配置
     * @param {PdSDKTableSettings} settings - 用户定义配置
     * @return {PdSDKTableSettings} 配置
     */
    protected initSettings(settings: PdSDKTableSettings): PdSDKTableSettings;
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
     * 渲染数据
     */
    protected rendererData(): void;
    /**
     * 更新选中状态
     */
    protected updateCheckboxStatus(): void;
    /**
     * 取消绑定事件
     */
    protected unbindEvent(): void;
    /**
     * 取消绑定过滤事件
     */
    protected unbindFilterEvent(): void;
}
