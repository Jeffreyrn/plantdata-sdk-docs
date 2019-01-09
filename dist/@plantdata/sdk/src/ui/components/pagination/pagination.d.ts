/// <reference types="jquery" />
import { PdSelector } from '../../../common/common';
import { PdComponent, PdComponentSettings } from '../../../core/component';
/**
 * 分页配置项
 */
export interface PdUIPaginationSettings extends PdComponentSettings {
    /**
     * 点击分页按钮后的响应事件
     * @param {JQuery.Event} event - 点击事件对象
     * @param {number} pageNo - 跳转的页码
     * @param eventData - 跳转时的额外数据
     */
    callback: (event: JQuery.Event, pageNo: number, eventData: any) => void;
    /**
     *  额外的class名
     */
    cls?: string;
    /**
     *  当前页码
     */
    current: number;
    /**
     *  额外数据
     */
    data?: any;
    /**
     *  是否开启跳页
     */
    jump?: boolean;
    /**
     *  每页数量，总页数 或者 总条目数+每页数量 至少有一个
     */
    pageSize?: number;
    /**
     *  是否显示上下一页按钮
     */
    prevNext?: boolean;
    /**
     *  是否显示上下N页按钮，N为一共显示多少页
     */
    prevNextMulti?: boolean;
    /**
     *  生成分页的选择器
     */
    selector: PdSelector;
    /**
     *  显示数量
     */
    showNum?: number;
    /**
     *  是否显示首页末页按钮
     */
    startEnd?: boolean;
    /**
     *  总页数，总页数 或者 总条目数+每页数量 至少有一个
     */
    total?: number;
    /**
     *  总条目数，总页数 或者 总条目数+每页数量 至少有一个
     */
    totalItem?: number;
    /**
     *  是否显示总条目数,仅当totalItem设置时有效
     */
    totalItemShow?: boolean;
}
/**
 * 分页
 */
export declare class PdUIPagination extends PdComponent {
    /**
     *  默认配置
     */
    static defaultSettings: PdUIPaginationSettings;
    /**
     *  按钮表示的页码
     */
    protected static attrPage: string;
    /**
     *  分页的className
     */
    protected static clsName: string;
    /**
     *  分页的class
     */
    protected static cls: string;
    /**
     *  首页的标识
     */
    protected static clsFirstName: string;
    /**
     *  分页项的标识
     */
    protected static clsItemName: string;
    /**
     *  跳转的标识
     */
    protected static clsJumpName: string;
    /**
     *  末页的标识
     */
    protected static clsLastName: string;
    /**
     *  下一页的标识
     */
    protected static clsNextName: string;
    /**
     *  下几页的标识
     */
    protected static clsNextMultiName: string;
    /**
     *  上一页的标识
     */
    protected static clsPrevName: string;
    /**
     *  上几页的标识
     */
    protected static clsPrevMultiName: string;
    /**
     *  总数的标识
     */
    protected static clsTotalName: string;
    /**
     *  配置
     */
    settings: PdUIPaginationSettings;
    /**
     * 构造方法
     * @param {PdUIPaginationSettings} settings - 用户配置
     */
    constructor(settings?: PdUIPaginationSettings);
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 创建分页的HTML
     * @return {string} 分页的HTML
     */
    protected createPageHTML(): string;
    /**
     * 跳转执行的方法
     * @param event - 事件
     * @param {number} pageNo - 页码
     * @param eventData - 事件数据
     */
    protected goTo(event: JQuery.Event, pageNo: number, eventData: any): void;
    /**
     * 初始化配置
     * @param {PdUIPaginationSettings} settings - 配置的settings
     * @return {PdUIPaginationSettings} 生成的settings
     */
    protected initSettings(settings: PdUIPaginationSettings): PdUIPaginationSettings;
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
     * 取消绑定事件
     */
    protected unbindEvent(): void;
}
