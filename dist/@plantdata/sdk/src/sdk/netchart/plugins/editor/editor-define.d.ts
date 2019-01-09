/// <reference types="jquery" />
import { PdSDKEditorTool, PdSDKEditorToolSettings } from './editor-tool';
import { PdVisNetChartData, PdVisNetChartDataLink, PdVisNetChartDataNode } from '../../../../vis/netchart';
import { PdSDKAjaxSettings } from '../../../utils/utils';
import { PdVisEditItemSettings } from '../../../../vis/utils/edit-item/edit-item';
import { PdVisDialog, PdVisDialogSettings } from '../../../../vis/utils/modal/dialog/dialog';
import { PdKGSchemaTypes } from '../../../schema';
/**
 * 实体添加工具配置
 */
export interface PdSDKEditorDefineSettings extends PdSDKEditorToolSettings {
    /**
     *  添加属性请求配置
     */
    addAttributeSettings?: PdSDKAjaxSettings;
    /**
     *  属性列表请求配置
     */
    attributeListSettings?: PdSDKAjaxSettings;
    /**
     *  属性类型
     */
    attributeType?: string;
    /**
     *  删除属性请求配置
     */
    deleteAttributeSettings?: PdSDKAjaxSettings;
    /**
     * 主键
     */
    key?: string;
    /**
     * 描述的集合
     */
    localization?: {
        tableTitle1: string;
        tableTitle2: string;
        tableTitle3: string;
        listType: string;
        listTitle: string;
    };
    /**
     *  修改属性请求配置
     */
    updateAttributeSettings?: PdSDKAjaxSettings;
}
/**
 * 实体添加工具
 */
export declare abstract class PdSDKEditorDefine extends PdSDKEditorTool {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKEditorDefineSettings;
    /**
     * 编辑表单配置
     */
    static editFormSettings: PdVisEditItemSettings[];
    /**
     * 添加弹框实例
     */
    addDialog: PdVisDialog;
    /**
     *  配置
     */
    settings: PdSDKEditorDefineSettings;
    /**
     * 属性列表容器
     */
    protected $attributeList: JQuery;
    /**
     * 添加数值属性HTML
     */
    protected addAttributeTrHTML: string;
    /**
     * 属性列表数据
     */
    protected attributeListData: any;
    /**
     * 编辑条目数据
     */
    protected editData: any;
    /**
     * 组件名
     */
    protected name: string;
    /**
     * 构造方法
     * @param {PdSDKEditorDefineSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKEditorDefineSettings);
    /**
     * 新增属性
     * @param data - 属性数据
     */
    abstract addAttribute(data: any): Promise<any>;
    /**
     * 删除属性
     * @param id - 属性Id
     */
    abstract deleteAttribute(id: string): Promise<any>;
    /**
     * 获取属性定义列表tr的html
     * @param item - 属性定义数据
     */
    abstract getAttributeTr(item: any): string;
    /**
     * 获取数据列表数据
     */
    abstract getAttributeList(): Promise<any>;
    /**
     * 修改属性
     * @param data - 属性数据
     */
    abstract updateAttribute(data: any): Promise<any>;
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 绘制数值属性添加表单
     */
    drawAddAttributeForm(): void;
    /**
     * 绘制属性列表
     */
    drawAttributeList(data: any[]): void;
    /**
     * 根据选中节点更新状态
     * @param {PdVisNetChartDataNode[]} nodes - 选中节点
     * @param {PdVisNetChartDataLink[]} links - 选中边
     * @param {PdVisNetChartData} graphData - 图数据
     */
    updateStatusBySelection(nodes: PdVisNetChartDataNode[], links: PdVisNetChartDataLink[], graphData?: PdVisNetChartData): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 生成编辑弹框的配置
     */
    protected createEditDialogSettings(): PdVisDialogSettings;
    /**
     * 绘制属性列表框
     */
    protected drawAttributeListContainer(selector: JQuery): void;
    /**
     * 获取定义域候选项
     * @param id - 概念id
     * @param domainList - 定义域候选项
     */
    protected getDomainList(id: string, domainList: PdKGSchemaTypes[]): PdKGSchemaTypes[];
    /**
     * 获取定义域候选项select的HTML
     */
    protected getDomainSelectHTML(): string;
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
     * 解绑事件
     */
    protected unbindEvent(): void;
}
