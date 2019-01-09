import { PdSDKEditorDefine, PdSDKEditorDefineSettings } from './editor-define';
import { PdSDKPromptSettings } from '../../../prompt/prompt';
import { PdSDKTagPrompt } from '../../../utils/tag-prompt/tag-prompt';
import { PdVisDialog, PdVisDialogSettings } from '../../../../vis/utils/modal/dialog/dialog';
import { PdVisEditItemSettings } from '../../../../vis/utils/edit-item/edit-item';
/**
 * 实体添加工具配置
 */
export interface PdSDKEditorDefineRelationSettings extends PdSDKEditorDefineSettings {
    /**
     * 添加概念标签组件设置
     */
    addPromptSettings?: PdSDKPromptSettings;
    /**
     * 编辑概念标签组件设置
     */
    editPromptSettings?: PdSDKPromptSettings;
    /**
     * 值域的主键
     */
    rangeKey?: 'objRange' | 'range';
}
/**
 * 实体添加工具
 */
export declare abstract class PdSDKEditorDefineRelation extends PdSDKEditorDefine {
    /**
     * 概念提示默认配置
     */
    static defaultPromptSettings: PdSDKPromptSettings;
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKEditorDefineRelationSettings;
    /**
     * 添加弹框实例
     */
    addDialog: PdVisDialog;
    /**
     *  配置
     */
    settings: PdSDKEditorDefineRelationSettings;
    /**
     * 添加概念标签提示组件
     */
    protected addPromptTag: PdSDKTagPrompt;
    /**
     * 修改概念标签提示组件
     */
    protected editPromptTag: PdSDKTagPrompt;
    /**
     * 构造方法
     * @param {PdSDKPromptSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKPromptSettings);
    /**
     * 获取表单配置
     * @return {PdVisEditItemSettings[]} 表单配置
     */
    protected abstract getEditFormSettings(): PdVisEditItemSettings[];
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 获取数值属性定义列表tr的html
     */
    getAttributeTr(item: any): string;
    /**
     * 更新schema执行的方法
     * @param promiseData - 返回的数据
     * @param formData - 表单数据
     * @param range - 值域
     */
    updateSchemaFun(promiseData: any, formData: any, range: any): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 生成编辑弹框的配置
     */
    protected createEditDialogSettings(): PdVisDialogSettings;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 解绑事件
     */
    protected unbindEvent(): void;
}
