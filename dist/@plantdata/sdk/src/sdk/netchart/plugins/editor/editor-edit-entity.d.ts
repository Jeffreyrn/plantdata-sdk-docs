import { PdSDKEditorTool, PdSDKEditorToolSettings } from './editor-tool';
import { PdVisNetChartDataNode } from '../../../../vis/netchart';
import { PdSDKPromptSettings } from '../../../prompt/prompt';
import { PdVisTagEditorDataType } from '../../../../vis/utils/tag-editor/tag-complex-editor';
import { PdSDKAjaxSettings } from '../../../utils/utils';
import { PdSDKTagPrompt } from '../../../utils/tag-prompt/tag-prompt';
import { PdVisEditItemSettings } from '../../../../vis/utils/edit-item/edit-item';
/**
 * 概念编辑工具配置
 */
export interface PdSDKEditorEditEntitySettings extends PdSDKEditorToolSettings {
    /**
     *  添加父概念设置
     */
    addParentSettings?: PdSDKAjaxSettings;
    /**
     *  删除父概念设置
     */
    deleteParentSettings?: PdSDKAjaxSettings;
    /**
     *  概念名和消歧标识设置
     */
    nameAndMeaningTagSettings?: PdSDKAjaxSettings;
    /**
     *  父概念提示组件设置
     */
    parentPromptSettings?: PdSDKPromptSettings;
    /**
     *  更新摘要设置
     */
    updateAbstractSettings?: PdSDKAjaxSettings;
    /**
     *  更新图片地址设置
     */
    updateImageUrlSettings?: PdSDKAjaxSettings;
}
/**
 * 概念编辑工具
 */
export declare abstract class PdSDKEditorEditEntity extends PdSDKEditorTool {
    /**
     * 概念提示默认配置
     */
    static defaultPromptSettings: PdSDKPromptSettings;
    /**
     * 编辑表单配置
     */
    editFormSettings: PdVisEditItemSettings[];
    /**
     *  配置
     */
    settings: PdSDKEditorEditEntitySettings;
    /**
     * 选中节点数据
     */
    protected data: PdVisNetChartDataNode;
    /**
     * 父概念数据
     */
    protected pars: PdVisNetChartDataNode[];
    /**
     * 父概念标签提示组件
     */
    protected parsPromptTag: PdSDKTagPrompt;
    /**
     * 构造方法
     * @param {PdSDKPromptSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKPromptSettings);
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 添加父概念
     * @param item - 父概念
     */
    abstract addParent(item: PdVisTagEditorDataType): Promise<any>;
    /**
     * 删除父概念
     * @param item - 父概念
     */
    abstract deleteParent(item: PdVisTagEditorDataType): Promise<any>;
    /**
     * 更新简介
     * @param data - 简介
     */
    abstract updateAbstract(data: any): Promise<any>;
    /**
     * 更新概念名和消歧标识
     * @param data - 概念名和消歧标识数据
     */
    abstract updateNameAndMeaningTag(data: any): Promise<any>;
    /**
     * 绑定事件
     */
    protected bindDialogEvent(): void;
    protected initPrompts(): void;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 更新图片
     */
    protected updateImage(data: any): Promise<any>;
    /**
     * 检验必填
     */
    protected validate(settings: PdVisEditItemSettings[]): boolean;
    /**
     * 解绑事件
     */
    protected unbindEvent(): void;
}
