/// <reference types="jquery" />
import SuccessTextStatus = JQuery.Ajax.SuccessTextStatus;
import ErrorTextStatus = JQuery.Ajax.ErrorTextStatus;
import TextStatus = JQuery.Ajax.TextStatus;
import { PdSelector } from '../../../common/common';
/**
 * ajax请求配置
 */
export interface PdUIAjaxSettings extends JQueryAjaxSettings {
    /**
     *  ajax请求关联的对象
     */
    el?: PdSelector;
}
/**
 * ajax请求
 */
export declare class PdUIAjax {
    /**
     *  默认配置
     */
    static defaultSettings: JQueryAjaxSettings;
    /**
     *  ajax请求加载动画的标识cls
     */
    protected static clsLoadingName: string;
    /**
     * 发送ajax请求前调用的方法，同JQuery Ajax的beforeSend
     * @param {JQueryXHR} jqXHR - JQuery异步请求实例
     * @param {JQueryAjaxSettings} settings - 请求配置项
     * @return {any | void} 是否阻止本次请求
     */
    static beforeSend(jqXHR: JQueryXHR, settings: JQueryAjaxSettings): false | void;
    /**
     * ajax请求完成后调用的方法，同JQuery Ajax的complete
     * @param {JQueryXHR} jqXHR - JQuery异步请求实例
     * @param {JQuery.Ajax.TextStatus} textStatus - 返回状态描述
     */
    static complete(jqXHR: JQueryXHR, textStatus: TextStatus): void;
    /**
     * ajax请求成功前调用的方法，同JQuery Ajax的dataFilter
     * @param data - 请求到的数据
     * @param {string} type - 数据类型
     * @return {any} - 处理后的数据
     */
    static dataFilter(data: any, type: string): any;
    /**
     * ajax请求失败时调用的方法，同JQuery Ajax的error
     * @param {JQueryXHR} jqXHR  - JQuery异步请求实例
     * @param {ErrorTextStatus} textStatus - 返回状态描述
     * @param {string} errorThrown - 抛出的异常
     */
    static error(jqXHR: JQueryXHR, textStatus: ErrorTextStatus, errorThrown: string): void;
    /**
     * 获取解析后的请求参数
     * @param  {PdUIAjaxSettings} settings - ajax请求的配置项
     * @return {any} 解析后的请求参数
     */
    static getSendData(settings: PdUIAjaxSettings): {
        [key: string]: string;
    };
    /**
     * 发送ajax请求
     * @param  {PdUIAjaxSettings} settings - ajax请求的配置项
     * @return {Promise<any>} JQuery Ajax请求的实例
     */
    static loader(settings: PdUIAjaxSettings): Promise<any>;
    /**
     * ajax请求成功时调用的方法，同JQuery Ajax的success
     * @param data - 请求到的数据
     * @param {SuccessTextStatus} textStatus - 返回状态描述
     * @param {JQueryXHR}jqXHR  - JQuery异步请求实例
     */
    static success(data: any, textStatus: SuccessTextStatus, jqXHR: JQueryXHR): any;
    /**
     * 反序列化请求参数
     * @param  {string} str - 需要反序列化的字串
     * @return {{ [key: string]: any }} 反序列化的结果
     */
    static unParam(str: string): {
        [key: string]: any;
    };
    /**
     * 反序列化字串
     * @param  {string} str2
     * @param  {any} key
     * @param  {string} val
     * @param  {{ [key: string]: any }} rs - 反序列化的结果
     */
    protected static dealParam(str2: string, key: any, val: string, rs: {
        [key: string]: any;
    }): void;
    /**
     * 生成Loading动画标签
     * @param  {JQuery} $item - 生成动画的容器
     * @return {string} loading动画的html
     */
    protected static gentLoadingItem($item: JQuery): string;
    /**
     * 切换loading显示状态
     * @param  {HTMLElement | string} el - 生成动画的容器
     * @param  {boolean} show - 是否显示
     */
    protected static toggleLoadingStatus(el: PdSelector, show: boolean): void;
}
