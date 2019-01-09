/// <reference types="jquery" />
import { PdUIAjaxSettings } from '../../ui/components/ajax/ajax';
import ErrorTextStatus = JQuery.Ajax.ErrorTextStatus;
import SuccessTextStatus = JQuery.Ajax.SuccessTextStatus;
/**
 * SDK数据ajax请求配置
 */
export interface PdSDKAjaxSettings extends PdUIAjaxSettings {
    /**
     *  SDK服务的base路径
     */
    baseUrl?: string;
    /**
     *  formData数据
     */
    formData?: any;
    /**
     *  query数据
     */
    queryData?: any;
}
/**
 * SDK服务的基本配置
 */
export interface PdSDKBaseSettings {
    /**
     *  异步加载设置
     */
    ajaxSettings?: PdSDKAjaxSettings;
}
/**
 * SDK图服务的基本配置
 */
export interface PdSDKKGSettings extends PdSDKBaseSettings {
    /**
     *  图谱名称
     */
    kgName?: string;
}
/**
 * SDK 图服务的基本配置
 */
export interface PdSDKCRUDSettings extends PdSDKKGSettings {
    /**
     * 新增接口配置
     */
    addSettings?: PdSDKKGSettings;
    /**
     * 删除接口配置
     */
    deleteSettings?: PdSDKKGSettings;
    /**
     * 编辑接口配置
     */
    editSettings?: PdSDKKGSettings;
    /**
     * 请求列表接口配置
     */
    listSettings?: PdSDKKGSettings;
}
/**
 * SDK工具包
 */
export declare class PdSDKUtils {
    /**
     * Ajax请求
     * @param {PdSDKAjaxSettings} settings - SDK数据ajax请求配置
     * @param {boolean} silence - 静默处理
     * @return {Promise<any>} 异步请求的实例
     */
    static ajax(settings: PdSDKAjaxSettings, silence?: boolean): Promise<any>;
    /**
     * ajax请求失败时调用的方法，同JQuery Ajax的error
     * @param {JQueryXHR} jqXHR  - JQuery异步请求实例
     * @param {ErrorTextStatus} textStatus - 返回状态描述
     * @param {string} errorThrown - 抛出的异常
     */
    static ajaxError(jqXHR: JQueryXHR, textStatus: ErrorTextStatus, errorThrown: string): void;
    /**
     * 通用异步请求结果处理
     * @param data - 请求结果数据
     * @param {SuccessTextStatus} textStatus - 返回状态描述
     * @param {JQueryXHR}jqXHR  - JQuery异步请求实例
     * @param {boolean} silence - 静默处理
     * @return {Promise<any>} - 结果处理的Promise
     */
    static ajaxResultCheck(data: any, textStatus: SuccessTextStatus, jqXHR: JQueryXHR, silence?: boolean): Promise<any>;
    /**
     * 合并URL和query数据
     * @param {string} url - 服务地址
     * @param queryData - query参数
     * @return {string} 服务地址
     */
    static buildUrl(url: string, queryData: any): string;
    /**
     * 更新图片地址
     * @param {string} img - 图片地址
     * @param {string} imagePrefix - 图片地址的前缀
     * @return {string} - 更新后的图片地址
     */
    static imgBuilder(img: string, imagePrefix?: string): string;
    /**
     * 替换正则特殊符号
     * @param {string} str - 正则字串
     * @return {string} - 替换后的正则字串
     */
    static str2reg(str: string): string;
    /**
     * 合并URL
     * @param {PdSDKBaseSettings} newSettings - 新SDK服务的配置
     * @param {PdSDKBaseSettings} orgSettings - 原SDK服务的配置
     * @return {PdSDKBaseSettings} - 合并后SDK服务的配置
     */
    static updateUrl(newSettings: PdSDKBaseSettings, orgSettings: PdSDKBaseSettings): PdSDKBaseSettings;
}
