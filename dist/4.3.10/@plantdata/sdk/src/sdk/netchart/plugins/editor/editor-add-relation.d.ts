/// <reference types="jquery" />
import { PdSDKEditorTool, PdSDKEditorToolSettings } from './editor-tool';
import { PdVisNetChartData, PdVisNetChartDataNode, PdVisNetChartDataLink } from '../../../../vis/netchart';
import { PdSDKPrompt, PdSDKPromptSettings } from '../../../prompt/prompt';
import { PdSDKAjaxSettings } from '../../../utils/utils';
import { PdVisEditItemSettings } from '../../../../vis/utils/edit-item/edit-item';
import { PdVisDialogSettings } from '../../../../vis/utils/modal/dialog/dialog';
import { PdSDKTagPrompt } from '../../../utils/tag-prompt';
/**
 * 实体编辑工具配置
 */
export interface PdSDKEditorAddRelationSettings extends PdSDKEditorToolSettings {
    /**
     * 添加属性值请求设置
     */
    addAttrValSettings?: PdSDKAjaxSettings;
    /**
     * 添加属性请求设置
     */
    addAttributeSettings?: PdSDKAjaxSettings;
    /**
     * 添加关系的值域提示设置
     */
    addRelationRangePromptSettings?: PdSDKPromptSettings;
    /**
     * 属性列表请求设置
     */
    attributeListSettings?: PdSDKAjaxSettings;
    /**
     * 终点提示设置
     */
    endPromptSettings?: PdSDKPromptSettings;
    /**
     * 起点提示设置
     */
    startPromptSettings?: PdSDKPromptSettings;
}
/**
 * 实体编辑工具
 */
export declare class PdSDKEditorAddRelation extends PdSDKEditorTool {
    /**
     * 概念提示默认配置
     */
    static defaultPromptSettings: PdSDKPromptSettings;
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKEditorAddRelationSettings;
    /**
     * 编辑表单配置
     */
    static editFormSettings: PdVisEditItemSettings[];
    /**
     *  配置
     */
    settings: PdSDKEditorAddRelationSettings;
    /**
     *  添加关系值域提示组件
     */
    protected addRelationRangePromptTag: PdSDKTagPrompt;
    /**
     * 属性列表数据
     */
    protected attsData: any;
    /**
     * 终点节点数据
     */
    protected endData: PdVisNetChartDataNode;
    /**
     *  终点提示组件
     */
    protected endPrompt: PdSDKPrompt;
    /**
     *  终点提示组件值域
     */
    protected endRange: string[];
    /**
     *  私有属性终点提示组件
     */
    protected selfEndPrompt: PdSDKPrompt;
    /**
     *  私有属性起点提示组件
     */
    protected selfStartPrompt: PdSDKPrompt;
    /**
     * 起点节点数据
     */
    protected startData: PdVisNetChartDataNode;
    /**
     *  起点提示组件
     */
    protected startPrompt: PdSDKPrompt;
    /**
     * 构造方法
     * @param {PdSDKEditorAddRelationSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKEditorAddRelationSettings);
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 根据选中节点更新状态
     * @param {PdVisNetChartDataNode[]} nodes - 选中节点
     * @param {PdVisNetChartDataLink[]} links - 选中边
     * @param {PdVisNetChartData} graphData - 图数据
     */
    updateStatusBySelection(nodes: PdVisNetChartDataNode[], links: PdVisNetChartDataLink[], graphData?: PdVisNetChartData): void;
    /**
     * 添加属性值
     * @param attDefId - 属性id
     * @param attName - 属性名
     */
    protected addAttr(attDefId: string, attName: string): Promise<any>;
    /**
     * 新增属性
     * @param attDefJson - 属性数据
     */
    addAttribute(attDefJson: any): Promise<any>;
    /**
     * 绑定事件
     */
    protected bindDialogEvent(): void;
    /**
     * 生成编辑弹框的配置
     */
    protected createEditDialogSettings(): PdVisDialogSettings;
    /**
     * 获取数据列表数据
     */
    protected getAttributeList(): Promise<any>;
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
     * 设置input值
     */
    protected setInputValue(): void;
    /**
     * 下拉选择选项
     */
    protected setSelectOptions(data: any[]): void;
    /**
     * 解绑事件
     */
    protected unbindEvent(): void;
}
