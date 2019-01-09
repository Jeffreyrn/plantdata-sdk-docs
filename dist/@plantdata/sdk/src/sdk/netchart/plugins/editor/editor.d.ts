/// <reference types="jquery" />
import { PdVisPluginToolBox, PdVisPluginToolBoxSettings } from '../../../../vis/netchart/plugins/toolbox/toolbox';
import { PdSDKEditorEditConceptSettings } from './editor-edit-concept';
import { PdSDKEditorEditInstanceSettings } from './editor-edit-instance';
import { PdSDKEditorEditInstanceAttrSettings } from './editor-edit-instance-attr';
import { PdSDKEditorDeleteSettings } from './editor-delete';
import { PdSDKEditorTool } from './editor-tool';
import { PdVisNetChart } from '../../../../vis/netchart';
import { PdKGSchema } from '../../../schema/schema';
import { PdSDKPromptSettings } from '../../../prompt/prompt';
import { PdSDKKGSettings } from '../../../utils/utils';
import { PdSDKPluginSettings } from '../plugin';
import { PdSDKEditorAddRelationSettings } from './editor-add-relation';
import { PdSDKEditorEditEdgeSettings } from './editor-edit-edge';
import { PdSDKEditorDefineAttributeConceptSettings } from './editor-define-attribute-concept';
import { PdSDKEditorDefineRelationConceptSettings } from './editor-define-relation-concept';
import { PdSDKEditorDefineAttributeEdgeSettings } from './editor-define-attribute-edge';
import { PdSDKEditorDefineRelationEdgeSettings } from './editor-define-relation-edge';
import { PdSDKEditorMergeRelationSettings } from './editor-merge-relation';
import { PdSDKEditorAddSubConceptSettings } from './editor-add-sub-concept';
import { PdSDKEditorAddSiblingsConceptSettings } from './editor-add-siblings-concept';
import { PdSDKEditorAddSubInstanceSettings } from './editor-add-sub-instance';
import { PdSDKEditorAddSiblingsInstanceSettings } from './editor-add-siblings-instance';
/**
 * 编辑器插件配置
 */
export interface PdSDKPluginEditorSettings extends PdSDKPluginSettings, PdVisPluginToolBoxSettings, PdSDKKGSettings {
    /**
     *  添加关系配置
     */
    addRelationSettings?: PdSDKEditorAddRelationSettings;
    /**
     *  添加同级概念配置
     */
    addSiblingsConceptSettings?: PdSDKEditorAddSiblingsConceptSettings;
    /**
     *  添加同级实体配置
     */
    addSiblingsInstanceSettings?: PdSDKEditorAddSiblingsInstanceSettings;
    /**
     *  添加子概念配置
     */
    addSubConceptSettings?: PdSDKEditorAddSubConceptSettings;
    /**
     *  添加实体配置
     */
    addSubInstanceSettings?: PdSDKEditorAddSubInstanceSettings;
    /**
     *  属性定义配置
     */
    defineAttributeSettings?: PdSDKEditorDefineAttributeConceptSettings;
    /**
     *  关系定义配置
     */
    defineRelationSettings?: PdSDKEditorDefineRelationConceptSettings;
    /**
     *  边属性定义配置
     */
    defineAttributeEdgeSettings?: PdSDKEditorDefineAttributeEdgeSettings;
    /**
     *  边关系定义配置
     */
    defineRelationEdgeSettings?: PdSDKEditorDefineRelationEdgeSettings;
    /**
     *  删除属性配置
     */
    deleteSettings?: PdSDKEditorDeleteSettings;
    /**
     *  编辑边配置
     */
    editEdgeSettings?: PdSDKEditorEditEdgeSettings;
    /**
     *  编辑概念配置
     */
    editConceptSettings?: PdSDKEditorEditConceptSettings;
    /**
     *  编辑实体属性配置
     */
    editInstanceAttrSettings?: PdSDKEditorEditInstanceAttrSettings;
    /**
     *  编辑实体配置
     */
    editInstanceSettings?: PdSDKEditorEditInstanceSettings;
    /**
     *  删除属性配置
     */
    mergeRelationSettings?: PdSDKEditorMergeRelationSettings;
    /**
     *可视化组件
     */
    netChart?: PdVisNetChart;
    /**
     *  提示组件设置
     */
    promptSettings?: PdSDKPromptSettings;
    /**
     * schema
     */
    schema?: PdKGSchema;
    /**
     * 是否展开
     */
    expend?: boolean;
}
/**
 * 编辑器插件
 */
export declare class PdSDKPluginEditor extends PdVisPluginToolBox {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPluginEditorSettings;
    /**
     *  配置
     */
    settings: PdSDKPluginEditorSettings;
    /**
     * 内部工具
     */
    tools: {
        [key: string]: PdSDKEditorTool;
    };
    /**
     *  可视化组件
     */
    protected container: PdVisNetChart;
    /**
     * 构造方法
     * @param {PdSDKPluginEditorSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKPluginEditorSettings);
    /**
     * 获取插件的唯一标识
     */
    getPluginType(): string;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 初始化配置
     * @param {PdSDKPluginEditorSettings} settings - 用户定义配置
     * @return {PdSDKPluginEditorSettings} 配置
     */
    protected initSettings(settings: PdSDKPluginEditorSettings): PdSDKPluginEditorSettings;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
    /**
     * 生成工具选项
     */
    protected createToolItems(): void;
    /**
     * 更新配置
     */
    protected updateSettings<T>(key: string, settings: T): T;
    /**
     * 取消绑定事件
     */
    protected unbindEvent(): void;
}
