/// <reference types="jquery" />
import { PdVisToolItem, PdVisToolItemSettings } from '../../../../vis/utils/tool-item/tool-item';
import { PdVisNetChart, PdVisNetChartData, PdVisNetChartDataLink, PdVisNetChartDataNode } from '../../../../vis/netchart';
import { PdSDKKGSettings } from '../../../utils/utils';
import { PdKGSchema } from '../../../schema/schema';
import { PdVisEditItemSettings } from '../../../../vis/utils/edit-item/edit-item';
import { PdVisModalSettings } from '../../../../vis/utils/modal/modal';
import { PdVisDialog } from '../../../../vis/utils/modal/dialog/dialog';
import { PdSDKNetChart } from '../../netchart';
/**
 * 编辑工具配置
 */
export interface PdSDKEditorToolSettings extends PdVisToolItemSettings, PdSDKKGSettings {
    /**
     *可视化组件
     */
    netChart?: PdVisNetChart;
    /**
     * schema
     */
    schema?: PdKGSchema;
    /**
     *sdk组件
     */
    sdkNetChart?: PdSDKNetChart<PdVisNetChart>;
}
/**
 * 编辑工具
 */
export declare abstract class PdSDKEditorTool extends PdVisToolItem {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKEditorToolSettings;
    /**
     *  配置
     */
    settings: PdSDKEditorToolSettings;
    /**
     * 编辑弹框实例
     */
    editDialog: PdVisDialog;
    /**
     * 构造方法
     * @param {PdSDKEditorToolSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKEditorToolSettings);
    /**
     * 添加子节点
     */
    addNode(netChart: PdVisNetChart, data: PdVisNetChartDataNode, parentId?: string): void;
    /**
     * 添加关系
     */
    addLink(netChart: PdVisNetChart, data: PdVisNetChartDataLink): void;
    /**
     * 删除节点
     */
    deleteNode(netChart: PdVisNetChart, data: PdVisNetChartDataNode): void;
    /**
     * 删除边
     */
    deleteLink(netChart: PdVisNetChart, data: PdVisNetChartDataLink): void;
    /**
     * 更新节点
     */
    updateNode(netChart: PdVisNetChart, data: PdVisNetChartDataNode): void;
    /**
     * 更新关系
     */
    updateLink(netChart: PdVisNetChart, data: PdVisNetChartDataLink): void;
    /**
     * 显示编辑
     * @param {any} data - 默认数据
     * @param {JQuery.Event} event - 触发事件
     */
    showEdit(data: any, event: JQuery.Event): void;
    /**
     * 更新schema
     * @param data - schema数据
     */
    updateSchema(data: PdKGSchema): void;
    /**
     * 根据选中节点更新状态
     * @param {PdVisNetChartDataNode[]} data - 选中节点
     * @param {PdVisNetChartDataLink[]} links - 选中节点
     * @param {PdVisNetChartData} graphData - 图数据
     */
    abstract updateStatusBySelection(data: PdVisNetChartDataNode[], links: PdVisNetChartDataLink[], graphData?: PdVisNetChartData): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 绑定检验必填事件
     */
    protected bindValidateEvent(settings: PdVisEditItemSettings[]): void;
    /**
     * 生成编辑弹框的配置
     */
    protected createEditDialogSettings(): PdVisModalSettings;
    /**
     * 初始化配置
     * @param {PdSDKEditorToolSettings} settings - 用户定义配置
     * @return {PdSDKEditorToolSettings} 配置
     */
    protected initSettings(settings: PdSDKEditorToolSettings): PdSDKEditorToolSettings;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 检验必填
     */
    protected validate(settings: PdVisEditItemSettings[]): boolean;
    /**
     * 更新控件状态
     * @param {string} key - 控件路径标识
     * @param {boolean} validate - 校验状态
     */
    protected updateValidateStatus(key: string, validate: boolean): void;
}
