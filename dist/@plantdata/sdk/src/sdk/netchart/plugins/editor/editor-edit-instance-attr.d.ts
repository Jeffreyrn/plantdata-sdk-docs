/// <reference types="jquery" />
import { PdSDKEditorTool, PdSDKEditorToolSettings } from './editor-tool';
import { PdVisNetChartData, PdVisNetChartDataLink, PdVisNetChartDataNode } from '../../../../vis/netchart';
import { PdVisEditItemSettings } from '../../../../vis/utils/edit-item/edit-item';
import { PdVisDialogSettings } from '../../../../vis/utils/modal/dialog/dialog';
import { PdSDKAjaxSettings } from '../../../utils/utils';
/**
 * 实体属性编辑工具配置
 */
export interface PdSDKEditorEditInstanceAttrSettings extends PdSDKEditorToolSettings {
    /**
     * 添加属性请求配置
     */
    addAttrSettings?: PdSDKAjaxSettings;
    /**
     * 删除属性请求配置
     */
    deleteAttrSettings?: PdSDKAjaxSettings;
    /**
     *  获取详情设置
     */
    getInstanceSettings?: PdSDKAjaxSettings;
}
/**
 * 实体属性编辑工具
 */
export declare class PdSDKEditorEditInstanceAttr extends PdSDKEditorTool {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKEditorEditInstanceAttrSettings;
    /**
     *  配置
     */
    settings: PdSDKEditorEditInstanceAttrSettings;
    /**
     * 属性数据
     */
    protected attsData: any[];
    /**
     * 父实体数据
     */
    protected data: PdVisNetChartDataNode;
    /**
     * 构造方法
     * @param {PdSDKEditorEditInstanceAttrSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKEditorEditInstanceAttrSettings);
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
     * 添加属性
     */
    protected addAttr(data: any, value: string): Promise<any>;
    /**
     * 绑定事件
     */
    protected bindDialogEvent(): void;
    /**
     * 生成编辑弹框的配置
     */
    protected createEditDialogSettings(): PdVisDialogSettings;
    /**
     * 删除属性
     */
    protected deleteAttr(data: any): Promise<any>;
    /**
     * 获取实体详情
     */
    protected getInstance(): Promise<any>;
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
    /**
     * 解绑事件
     */
    protected unbindEvent(): void;
    /**
     * 更新权重，置信度，来源
     * @param value - 值
     * @param type - 类型
     */
    protected updateScore(value: string, type: string): Promise<any>;
}
