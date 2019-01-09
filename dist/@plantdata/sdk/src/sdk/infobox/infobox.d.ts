/// <reference types="jquery" />
import { PdVisNodeId } from '../../vis/netchart/netchart';
import { PdComponent, PdComponentSettings } from '../../core/component';
import { PdSelector } from '../../common/common';
import { PdSDKKGSettings } from '../utils/utils';
/**
 * Infobox配置
 */
export interface PdSDKInfoboxSettings extends PdComponentSettings, PdSDKKGSettings {
    /**
     * 属性是否显示或隐藏
     * @param {PdVisNodeId} attr - 属性ID
     * @param data - Infobox数据
     * @return {boolean} 是否显示或隐藏
     */
    attrVisible?: (attr: number, data: any) => boolean;
    /**
     *  infobox的容器
     */
    container?: PdSelector;
    /**
     *  是否显示空对象属性
     */
    emptyAttrVisible?: boolean;
    /**
     * 图片地址重置
     * @param {string} url - 原图片地址
     * @return {string} 更新后的图片地址
     */
    imgBuilder?: (url: string) => string;
    /**
     *  是否允许生成超链接
     */
    linkEnable?: boolean;
    /**
     * 加载Infobox数据的方法
     * @param {PdSDKInfobox} self - Infobox实例
     * @param params - 请求参数
     * @return {Promise<any>} 加载Infobox数据的Promise
     */
    loader?: (self: PdSDKInfobox, params: any) => Promise<any>;
    /**
     *  自动收起长文本，当文本超过设置的长度时自动出现查看全部，默认80个字符
     */
    maxLen?: number;
    /**
     * 知识卡片加载失败的回调
     * @param {any} params 请求数据
     * @param {PdSDKInfobox} self 知识卡片实例
     */
    onLoadFailed?: (params: any, self: PdSDKInfobox) => void;
    /**
     * 点击infobox里的其他实体时执行的方法
     * @param {PdVisNodeId} id - 点击的实体ID
     * @param {PdSDKInfobox} self - infobox实例
     */
    onLinkClick?: (id: PdVisNodeId, self: PdSDKInfobox) => void;
}
/**
 * SDK Infobox
 */
export declare class PdSDKInfobox extends PdComponent {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKInfoboxSettings;
    /**
     * load方法的参数
     */
    loadParams: {
        query: any;
        callback?: (data: any) => void;
    };
    /**
     *  配置
     */
    settings: PdSDKInfoboxSettings;
    /**
     *  加载成功后的回调
     */
    protected callback: (data: any) => void;
    /**
     * 构造方法
     * @param {PdSDKInfoboxSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKInfoboxSettings);
    /**
     * 生成infobox内容
     * @param data - infobox实例的数据
     * */
    buildInfobox(data: any): void;
    /**
     * 销毁实例
     */
    clear(): void;
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 加载数据
     * @param query - 读取infobox的实例
     * @param {(data: any) => void} callback - 可选，加载数据成功后执行的方法
     * @return 异步请求实例
     */
    load(query: any, callback?: (data: any) => void): Promise<any>;
    /**
     * 重新加载
     */
    reLoad(): void;
    /**
     * 显示无数据
     */
    showNoData(): void;
    /**
     * 绑定事件
     * */
    protected bindEvent(): void;
    /**
     * 生成实例
     * @param entity - 实例数据
     * @param {boolean} buildLink - 是否生成链接
     * @return {string} 实例HTML字串
     */
    protected buildEntity(entity: any, buildLink: boolean): string;
    /**
     * 生成属性信息
     * @param extra - 属性数据
     * @return {string} 属性HTML字串
     */
    protected buildExtra(extra: {
        k: string;
        v: string;
        type: number;
    }): string;
    /**
     * 初始化配置
     * @param {PdSDKInfoboxSettings} settings - 用户定义配置
     * @return {PdSDKInfoboxSettings} 配置
     */
    protected initSettings(settings: PdSDKInfoboxSettings): PdSDKInfoboxSettings;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 加载数据
     * @param query - 请求参数
     * @param {(data: any) => void} callback - 可选，加载数据成功后执行的方法
     * @return {Promise<any>} 异步请求实例
     */
    protected loader(query: any, callback?: (data: any) => void): Promise<any>;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 点击infobox里的其他实体时执行的方法
     * @param {PdVisNodeId} id 实例ID
     */
    protected onLinkClick(id: PdVisNodeId): void;
    /**
     * 取消绑定事件
     * */
    protected unbindEvent(): void;
}
