/// <reference types="jquery" />
import { PdVisNetChartData, PdVisNetChartDataLink, PdVisNetChartDataNode } from '../../../../vis/netchart/netchart';
import { PdSDKEditorToolSettings } from './editor-tool';
import { PdSDKEditorDefineRelation, PdSDKEditorDefineRelationSettings } from './editor-define-relation';
import { PdVisEditItemSettings } from '../../../../vis/utils/edit-item';
/**
 * 实体添加工具配置
 */
export interface PdSDKEditorDefineRelationConceptSettings extends PdSDKEditorDefineRelationSettings {
}
/**
 * s数值属性定义工具
 */
export declare class PdSDKEditorDefineRelationConcept extends PdSDKEditorDefineRelation {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKEditorDefineRelationConceptSettings;
    /**
     * 父实体数据
     */
    protected data: PdVisNetChartDataNode;
    /**
     * 构造方法
     * @param {PdSDKEditorDefineRelationConceptSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKEditorDefineRelationConceptSettings);
    /**
     * 打开关系定义弹框
     */
    openAddDialog(data: PdVisNetChartDataNode): void;
    /**
     * 根据选中节点更新状态
     * @param {PdVisNetChartDataNode[]} nodes - 选中节点
     * @param {PdVisNetChartDataLink[]} links - 选中边
     * @param {PdVisNetChartData} graphData - 图数据
     */
    updateStatusBySelection(nodes: PdVisNetChartDataNode[], links: PdVisNetChartDataLink[], graphData?: PdVisNetChartData): void;
    /**
     * 新增属性
     * @param data - 属性数据
     */
    addAttribute(data: any): Promise<any>;
    /**
     * 删除属性
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
     * 更新schema执行的方法
     * @param promiseData - 返回的数据
     * @param formData - 表单数据
     * @param range - 值域
     */
    updateSchemaFun(promiseData: any, formData: any, range: any): void;
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
