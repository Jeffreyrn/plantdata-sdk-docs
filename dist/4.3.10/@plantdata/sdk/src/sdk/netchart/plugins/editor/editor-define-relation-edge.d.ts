/// <reference types="jquery" />
import { PdVisNetChartData, PdVisNetChartDataLink, PdVisNetChartDataNode } from '../../../../vis/netchart/netchart';
import { PdSDKEditorToolSettings } from './editor-tool';
import { PdSDKEditorDefineRelation, PdSDKEditorDefineRelationSettings } from './editor-define-relation';
import { PdSDKPromptSettings } from '../../../prompt/prompt';
import { PdVisEditItemSettings } from '../../../../vis/utils/edit-item';
/**
 * 实体添加工具配置
 */
export interface PdSDKEditorDefineRelationEdgeSettings extends PdSDKEditorDefineRelationSettings {
}
/**
 * s数值属性定义工具
 */
export declare class PdSDKEditorDefineRelationEdge extends PdSDKEditorDefineRelation {
    /**
     * 概念提示默认配置
     */
    static defaultPromptSettings: PdSDKPromptSettings;
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKEditorDefineRelationEdgeSettings;
    /**
     * 父实体数据
     */
    protected data: PdVisNetChartDataLink;
    /**
     * 构造方法
     * @param {PdSDKEditorDefineRelationEdgeSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKEditorDefineRelationEdgeSettings);
    /**
     * 打开关系定义弹框
     */
    openAddDialog(data: PdVisNetChartDataLink): void;
    /**
     * 根据选中节点更新状态
     * @param {PdVisNetChartDataNode[]} nodes - 选中节点
     * @param {PdVisNetChartDataLink[]} links - 选中边
     * @param {PdVisNetChartData} graphData - 图数据
     */
    updateStatusBySelection(nodes: PdVisNetChartDataNode[], links: PdVisNetChartDataLink[], graphData?: PdVisNetChartData): void;
    /**
     *  新增数据
     * @param data - 属性数据
     */
    addAttribute(data: any): Promise<any>;
    /**
     * 删除属性
     * @param id - 属性id
     */
    deleteAttribute(id: string): Promise<any>;
    /**
     * 获取数据列表数据
     */
    getAttributeList(): Promise<any>;
    /**
     * 修改属性
     * @param data - 属性数据
     */
    updateAttribute(data: any): Promise<any>;
    /**
     * 获取表单配置
     * @return {PdVisEditItemSettings[]} 表单配置
     */
    protected getEditFormSettings(): PdVisEditItemSettings[];
    /**
     * 初始化配置
     * @param {PdSDKEditorToolSettings} settings - 用户定义配置
     * @return {PdSDKEditorToolSettings} 配置
     */
    protected initSettings(settings: PdSDKEditorToolSettings): PdSDKEditorToolSettings;
    /**
     * 点击事件处理
     */
    protected onClick(event: JQuery.Event): void;
}
