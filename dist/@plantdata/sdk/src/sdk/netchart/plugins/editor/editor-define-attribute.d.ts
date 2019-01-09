import { PdVisNetChartData, PdVisNetChartDataLink, PdVisNetChartDataNode } from '../../../../vis/netchart';
import { PdSDKEditorDefine, PdSDKEditorDefineSettings } from './editor-define';
import { PdVisEditItemSettings } from '../../../../vis/utils/edit-item/edit-item';
import { PdVisDialog, PdVisDialogSettings } from '../../../../vis/utils/modal/dialog/dialog';
/**
 * 实体添加工具配置
 */
export interface PdSDKEditorDefineAttributeSettings extends PdSDKEditorDefineSettings {
}
/**
 * 实体添加工具
 */
export declare abstract class PdSDKEditorDefineAttribute extends PdSDKEditorDefine {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKEditorDefineAttributeSettings;
    /**
     *  类型列表
     */
    static typeList: {
        1: string;
        2: string;
        4: string;
        41: string;
        42: string;
        5: string;
        6: string;
        8: string;
        10: string;
        51: string;
    };
    /**
     * 添加弹框实例
     */
    addDialog: PdVisDialog;
    /**
     * 构造方法
     * @param {PdSDKEditorDefineAttributeSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKEditorDefineAttributeSettings);
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
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 解绑事件
     */
    protected unbindEvent(): void;
}
