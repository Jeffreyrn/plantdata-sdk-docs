import { PdSDKKGSettings } from '../utils/utils';
import { PdVisNodeId } from '../../vis/netchart';
/**
 *  通用属性Schema
 */
export interface PdKGSchemaCommonAtts {
    /**
     * 属性类型 0：数值属性， 1：对象属性
     */
    type?: 0 | 1;
    /**
     * 数据类型
     */
    dataType?: number;
    /**
     * 定义域
     */
    domain?: string;
    /**
     * 值域
     */
    range?: string[];
}
/**
 *  边属性Schema
 */
export interface PdKGSchemaEdgeAtts extends PdKGSchemaCommonAtts {
    /**
     * 边属性ID
     */
    seqNo: number;
    /**
     * 边属性名称
     */
    name: string;
}
/**
 *  属性Schema
 */
export interface PdKGSchemaAtts extends PdKGSchemaCommonAtts {
    /**
     * 属性ID
     */
    k: number;
    /**
     * 属性名称
     */
    v: string;
    /**
     * 边属性
     */
    extraInfos?: PdKGSchemaEdgeAtts[];
}
/**
 *  实体Schema
 */
export interface PdKGSchemaTypes {
    /**
     * 额外信息
     */
    additional?: {
        color?: string;
    };
    /**
     * 概念ID
     */
    k: PdVisNodeId;
    /**
     * 概念名称
     */
    v: string;
    /**
     * 父概念ID
     */
    parentId?: PdVisNodeId;
}
/**
 * Schema数据
 */
export interface PdKGSchema {
    /**
     *  属性Schema
     */
    atts?: PdKGSchemaAtts[];
    /**
     *  实体Schema
     */
    types?: PdKGSchemaTypes[];
}
/**
 * Schema配置
 */
export interface PdSDKSchemaSettings extends PdSDKKGSettings {
    /**
     * Schema加载方法
     * @param {PdSDKSchemaSettings} settings - Schema配置
     * @return {Promise<any>} - Schema加载请求实例
     */
    loader?: (settings: PdSDKSchemaSettings) => Promise<any>;
    /**
     * 数据
     */
    data?: PdKGSchema;
}
/**
 * 图谱Schema
 */
export declare class PdSDKSchema {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKSchemaSettings;
    /**
     *  配置
     */
    settings: PdSDKSchemaSettings;
    /**
     * 数据
     */
    protected data: PdKGSchema;
    /**
     * 转换Schema格式
     * @param data - 请求到的Schema
     * @return {PdKGSchema} - 转换完成的Schema
     */
    static transformSchema(data: any): PdKGSchema;
    /**
     * 构造方法
     * @param {PdSDKSchemaSettings} settings - Schema配置
     */
    constructor(settings: PdSDKSchemaSettings);
    /**
     * 获取Schema数据
     * @return {PdKGSchema} schema数据
     */
    getData(): PdKGSchema;
    /**
     * 加载图谱Schema
     * @return {Promise<any>} 异步请求实例
     */
    load(): Promise<any>;
    /**
     * 获取Schema数据
     */
    setData(data: PdKGSchema): void;
    /**
     * 初始化配置
     * @param {PdSDKSchemaSettings} settings - 用户定义配置
     * @return {PdSDKSchemaSettings} 配置
     */
    protected initSettings(settings: PdSDKSchemaSettings): PdSDKSchemaSettings;
}
