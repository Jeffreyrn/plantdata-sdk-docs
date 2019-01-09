/// <reference types="jquery" />
import { PdSDKEditorTool, PdSDKEditorToolSettings } from './editor-tool';
import { PdVisNetChartData, PdVisNetChartDataLink, PdVisNetChartDataNode } from '../../../../vis/netchart';
import { PdSDKPrompt, PdSDKPromptSettings } from '../../../prompt/prompt';
import { PdSDKAjaxSettings } from '../../../utils/utils';
import { PdVisEditItemSettings } from '../../../../vis/utils/edit-item/edit-item';
import { PdVisDialogSettings } from '../../../../vis/utils/modal/dialog/dialog';
/**
 * 概念添加工具配置
 */
export interface PdSDKEditorAddEntitySettings extends PdSDKEditorToolSettings {
    /**
     *添加概念请求配置
     */
    addEntitySettings?: PdSDKAjaxSettings;
    /**
     *  提示组件设置
     */
    promptSettings?: PdSDKPromptSettings;
}
/**
 * 概念添加工具
 */
export declare abstract class PdSDKEditorAddEntity extends PdSDKEditorTool {
    /**
     * 概念提示默认配置
     */
    static defaultPromptSettings: PdSDKPromptSettings;
    /**
     *  配置
     */
    settings: PdSDKEditorAddEntitySettings;
    /**
     * 父概念数据
     */
    protected data: PdVisNetChartDataNode;
    /**
     * 是否是全局
     */
    protected isWhole: boolean;
    /**
     *  提示组件
     */
    protected prompt: PdSDKPrompt;
    /**
     * 添加
     * @param data - 概念数据
     * @return {Promise<any>} - 异步请求实例
     */
    abstract addEntity(data: any): Promise<any>;
    /**
     * 添加后执行的事件
     * @param data - 父概念数据
     * @param promiseData - addEntity返回的数据
     */
    abstract afterAddEntity(data: any, promiseData: any): void;
    /**
     * 获取编辑表单配置
     * @return {PdVisEditItemSettings[]} 配置
     */
    protected abstract editFormSettingsGet(): PdVisEditItemSettings[];
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
     * 生成编辑弹框的配置
     */
    protected createEditDialogSettings(): PdVisDialogSettings;
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
