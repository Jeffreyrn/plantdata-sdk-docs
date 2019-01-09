/// <reference types="jquery" />
import { PdSDKEditorTool, PdSDKEditorToolSettings } from './editor-tool';
import { PdVisNetChartData, PdVisNetChartDataLink, PdVisNetChartDataNode } from '../../../../vis/netchart';
import { PdSDKAjaxSettings } from '../../../utils/utils';
import { PdVisDialogSettings } from '../../../../vis/utils/modal/dialog/dialog';
import { PdVisEditItemSettings } from '../../../../vis/utils/edit-item/edit-item';
/**
 * 实体添加工具配置
 */
export interface PdSDKEditorDeleteSettings extends PdSDKEditorToolSettings {
    /**
     * 删除概念设置
     */
    deleteConceptSetting?: PdSDKAjaxSettings;
    /**
     * 删除概念父概念设置
     */
    deleteConceptParentSetting?: PdSDKAjaxSettings;
    /**
     * 删除实体父概念设置
     */
    deleteInstanceParentSetting?: PdSDKAjaxSettings;
    /**
     * 删除实体设置
     */
    deleteInstanceSetting?: PdSDKAjaxSettings;
    /**
     * 删除关系设置
     */
    deleteRelationSetting?: PdSDKAjaxSettings;
    /**
     * 更新组件状态
     */
    updateStatus?: Function;
    /**
     * 更新组件显示状态
     */
    updateVisibility?: Function;
}
/**
 * 删除工具
 */
export declare class PdSDKEditorDelete extends PdSDKEditorTool {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKEditorDeleteSettings;
    /**
     * 选中边数据
     */
    protected link: PdVisNetChartDataLink;
    /**
     * 选中边关联节点数据
     */
    protected linkData: {
        from?: PdVisNetChartDataNode;
        to?: PdVisNetChartDataNode;
    };
    /**
     * 选中节点数据
     */
    protected node: PdVisNetChartDataNode;
    /**
     * 多选选中节点数据
     */
    protected nodes: PdVisNetChartDataNode[];
    /**
     *  配置
     */
    settings: PdSDKEditorDeleteSettings;
    /**
     * 构造方法
     * @param {PdSDKEditorDeleteSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKEditorDeleteSettings);
    /**
     * 根据选中节点更新状态
     * @param {PdVisNetChartDataNode[]} nodes - 选中节点
     * @param {PdVisNetChartDataLink[]} links - 选中边
     * @param {PdVisNetChartData} graphData - 图数据
     */
    updateStatusBySelection(nodes: PdVisNetChartDataNode[], links: PdVisNetChartDataLink[], graphData?: PdVisNetChartData): void;
    /**
     * 生成编辑弹框的配置
     */
    protected createEditDialogSettings(): PdVisDialogSettings;
    /**
     * 删除概念
     */
    protected deleteConcept(): Promise<any>;
    /**
     * 删除概念的父概念
     */
    protected deleteConceptParent(child: PdVisNetChartDataNode, parent: PdVisNetChartDataNode): Promise<any>;
    /**
     * 删除实体
     */
    protected deleteInstance(node: PdVisNetChartDataNode): Promise<any>;
    /**
     * 删除实体的父概念
     */
    protected deleteInstanceParent(child: PdVisNetChartDataNode, parent: PdVisNetChartDataNode): Promise<any>;
    /**
     * 删除实体关系
     */
    protected deleteRelation(): Promise<any>;
    /**
     * 初始化配置
     * @param {PdSDKEditorToolSettings} settings - 用户定义配置
     * @return {PdSDKEditorToolSettings} 配置
     */
    protected initSettings(settings: PdSDKEditorToolSettings): PdSDKEditorToolSettings;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 点击事件处理
     */
    protected onClick(event: JQuery.Event): void;
    /**
     * 检验必填
     */
    protected validate(settings: PdVisEditItemSettings[]): boolean;
}
