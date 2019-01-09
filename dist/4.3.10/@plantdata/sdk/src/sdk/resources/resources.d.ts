/// <reference types="jquery" />
import { PdSDKBaseSettings } from '../utils/utils';
import { PdSDKResourceSettings, PdSDKResource } from '../resource/resource';
import { PdComponent, PdComponentSettings } from '../../core/component';
/**
 * SDK资源列表配置
 */
export interface PdSDKResourcesSettings extends PdSDKBaseSettings, PdComponentSettings {
    /**
     *  生成资源列表的容器
     */
    container: string;
    /**
     * 资源加载之后执行的方法
     * @param data - 数据
     * @param {PdSDKResource} ins - SDK资源实例
     */
    onLoaded?: (data: any, ins: PdSDKResource) => void;
    /**
     *  资源配置列表
     */
    tableSettingsList: PdSDKResourceSettings[];
}
/**
 * SDK资源列表
 */
export declare class PdSDKResources extends PdComponent {
    /**
     *  生成资源列表标签内容的容器
     */
    $body: JQuery;
    /**
     *  生成资源列表标签头的容器
     */
    $head: JQuery;
    /**
     *  配置
     */
    settings: PdSDKResourcesSettings;
    /**
     *  资源实例的列表
     */
    protected resources: PdSDKResource[];
    /**
     * 构造方法
     * @param {PdSDKResourcesSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKResourcesSettings);
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 数据加载方法
     * @param {number} pageNo - 页码
     */
    load(pageNo: number): void;
    /**
     * 资源加载之后执行的方法
     * @param data - 数据
     * @param {PdSDKResource} ins - SDK资源实例
     */
    onLoaded(data: any, ins: PdSDKResource): void;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
}
