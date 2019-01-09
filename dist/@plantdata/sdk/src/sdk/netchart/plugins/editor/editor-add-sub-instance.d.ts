import { PdVisNetChartData, PdVisNetChartDataLink, PdVisNetChartDataNode } from '../../../../vis/netchart';
import { PdSDKAjaxSettings } from '../../../utils/utils';
import { PdSDKEditorAddEntity, PdSDKEditorAddEntitySettings } from './editor-add-entity';
import { PdVisEditItemSettings } from '../../../../vis/utils/edit-item';
/**
 * 实例添加工具配置
 */
export interface PdSDKEditorAddSubInstanceSettings extends PdSDKEditorAddEntitySettings {
    /**
     *添加实例请求配置
     */
    addInstanceSettings?: PdSDKAjaxSettings;
}
/**
 * 实例添加工具
 */
export declare class PdSDKEditorAddSubInstance extends PdSDKEditorAddEntity {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKEditorAddSubInstanceSettings;
    /**
     *  配置
     */
    settings: PdSDKEditorAddSubInstanceSettings;
    /**
     * 构造方法
     * @param {PdSDKEditorAddSubInstanceSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKEditorAddSubInstanceSettings);
    /**
     * 添加
     * @param data - 实例数据
     * @return {Promise<any>} - 异步请求实例
     */
    addEntity(data: any): Promise<any>;
    /**
     * 添加后执行的事件
     * @param data - 父概念数据
     * @param promiseData - addEntity返回的数据
     */
    afterAddEntity(data: any, promiseData: any): void;
    /**
     * 根据选中节点更新状态
     * @param {PdVisNetChartDataNode[]} nodes - 选中节点
     * @param {PdVisNetChartDataLink[]} links - 选中边
     * @param {PdVisNetChartData} graphData - 图数据
     */
    updateStatusBySelection(nodes: PdVisNetChartDataNode[], links: PdVisNetChartDataLink[], graphData?: PdVisNetChartData): void;
    /**
     * 获取编辑表单配置
     * @return {PdVisEditItemSettings[]} 配置
     */
    protected editFormSettingsGet(): PdVisEditItemSettings[];
    /**
     * 初始化配置
     * @param {PdSDKEditorAddSubInstanceSettings} settings - 用户定义配置
     * @return {PdSDKEditorAddSubInstanceSettings} 配置
     */
    protected initSettings(settings: PdSDKEditorAddSubInstanceSettings): PdSDKEditorAddSubInstanceSettings;
}
