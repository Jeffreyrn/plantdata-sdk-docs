/// <reference types="jquery" />
import { PdSDKEditorToolSettings } from './editor-tool';
import { PdVisNetChartData, PdVisNetChartDataNode, PdVisNetChartDataLink } from '../../../../vis/netchart';
import { PdSDKPromptSettings } from '../../../prompt/prompt';
import { PdSDKAjaxSettings } from '../../../utils/utils';
import { PdVisEditItemSettings } from '../../../../vis/utils/edit-item/edit-item';
import { PdSDKEditorEditEntity, PdSDKEditorEditEntitySettings } from './editor-edit-entity';
import { PdVisDialogSettings } from '../../../../vis/utils/modal/dialog';
/**
 * 实体编辑工具配置
 */
export interface PdSDKEditorEditInstanceSettings extends PdSDKEditorEditEntitySettings {
    /**
     *  实体详情请求设置
     */
    instanceDetailSettings?: PdSDKAjaxSettings;
}
/**
 * 实体编辑工具
 */
export declare class PdSDKEditorEditInstance extends PdSDKEditorEditEntity {
    /**
     * 概念提示默认配置
     */
    static defaultPromptSettings: PdSDKPromptSettings;
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKEditorEditInstanceSettings;
    /**
     * 编辑表单配置
     */
    static editFormSettings: PdVisEditItemSettings[];
    /**
     *  配置
     */
    settings: PdSDKEditorEditInstanceSettings;
    /**
     * 构造方法
     * @param {PdSDKEditorEditInstanceSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKEditorEditInstanceSettings);
    /**
     * 添加父概念
     */
    addParent(data: any): Promise<any>;
    /**
     * 删除父概念
     */
    deleteParent(data: any): Promise<any>;
    /**
     * 根据选中节点更新状态
     * @param {PdVisNetChartDataNode[]} nodes - 选中节点
     * @param {PdVisNetChartDataLink[]} links - 选中边
     * @param {PdVisNetChartData} graphData - 图数据
     */
    updateStatusBySelection(nodes: PdVisNetChartDataNode[], links: PdVisNetChartDataLink[], graphData?: PdVisNetChartData): void;
    /**
     * 更新简介
     */
    updateAbstract(data: any): Promise<any>;
    /**
     * 更新实体名和消歧标识
     */
    updateNameAndMeaningTag(data: any): Promise<any>;
    /**
     * 绑定事件
     */
    protected bindDialogEvent(): void;
    /**
     * 生成编辑弹框的配置
     */
    protected createEditDialogSettings(): PdVisDialogSettings;
    /**
     * 获取实体详情
     */
    protected getInstanceDetail(): Promise<any>;
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
    /**
     * 更新图片
     */
    protected updateImage(data: any): Promise<any>;
}
