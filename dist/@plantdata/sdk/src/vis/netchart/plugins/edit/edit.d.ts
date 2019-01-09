/// <reference types="jquery" />
import 'daterangepicker';
import { PdVisPlugin, PdVisPluginSettings } from '../plugin';
import { PdVisEditItemSettings } from '../../../utils/edit-item/edit-item';
import { PdSelector } from '../../../../common/common';
import { PdVisDialog, PdVisDialogSettings } from '../../../utils/modal/dialog/dialog';
import { PdVisConfirm, PdVisConfirmSettings } from '../../../utils/modal/confirm/confirm';
/**
 * 可控制的编辑模态框配置
 */
export interface PdVisPluginControlableDialogSettings extends PdVisDialogSettings {
    /**
     * 是否开启
     */
    enable?: boolean;
}
/**
 * 编辑选项配置
 */
export interface PdVisPluginEditItemSettings extends PdVisEditItemSettings {
    /**
     * 其他数据
     */
    data?: any;
    /**
     * 删除
     */
    delete?: PdVisConfirmSettings;
    /**
     * 删除
     */
    edit?: PdVisDialogSettings;
    /**
     * 禁止自动关联树父子节点状态
     */
    treeNodeAutoUpdateDisabled?: PdVisDialogSettings;
}
/**
 * 编辑插件配置
 */
export interface PdVisPluginEditSettings extends PdVisPluginSettings {
    /**
     *  编辑选项
     */
    editItemSettings?: PdVisPluginEditItemSettings[];
    /**
     * 编辑选项Label展示模式
     */
    mode?: 'label' | 'placeholder';
    /**
     * 添加
     */
    add?: PdVisPluginControlableDialogSettings;
}
/**
 * 编辑模块配置
 */
export declare abstract class PdVisPluginEdit extends PdVisPlugin {
    /**
     *  默认配置
     */
    static defaultSettings: PdVisPluginEditSettings;
    /**
     *  配置
     */
    settings: PdVisPluginEditSettings;
    /**
     * 编辑弹框实例
     */
    editDialog: PdVisDialog;
    /**
     * 删除弹框实例
     */
    deleteDialog: PdVisConfirm;
    /**
     * 构造方法
     * @param {PdVisPluginEditSettings} settings - 用户配置
     */
    constructor(settings?: PdVisPluginEditSettings);
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 获取当前编辑选项的结果
     * @return {any} 当前编辑选项的结果
     */
    getData(): any;
    /**
     * 设置编辑选项
     * @param data 滤选项配置
     * @param {boolean} silence 是否静默设置
     */
    setData(data?: any, silence?: boolean): void;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 生成编辑选项
     */
    protected buildEdit(): JQuery<HTMLElement>;
    /**
     * 生成编辑选项的HTML
     * @param {PdVisEditItemSettings} settings - 编辑插件选项配置
     * @return {string} 编辑选项的HTML
     */
    protected gentEditItem(settings: PdVisEditItemSettings): PdSelector;
    /**
     * 获取容器主题
     */
    protected abstract getMainContainer(): JQuery;
    /**
     * 获取编辑的配置
     * @param {PdVisPluginEditItemSettings[]} settings - 候选配置列表
     * @param {string} path - 需要获取配置的key的路径
     * @return {PdVisPluginEditItemSettings} - 编辑配置
     */
    protected getEditSettings(settings: PdVisPluginEditItemSettings[], path: string): PdVisPluginEditItemSettings;
    /**
     * 初始化配置
     * @param {PdVisPluginEditSettings} settings - 用户定义配置
     * @return {PdVisPluginEditSettings} 配置
     */
    protected initSettings(settings: PdVisPluginEditSettings): PdVisPluginEditSettings;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 生成添加弹框
     */
    protected showAddDialog(event: JQuery.Event): void;
    /**
     * 更新删除弹框
     * @param {JQuery.Event} event - 删除事件对象
     * @param {PdVisPluginEditItemSettings} settings - 配置
     */
    protected showDeleteDialog(event: JQuery.Event, settings: PdVisPluginEditItemSettings): void;
    /**
     * 更新编辑弹框
     * @param {JQuery.Event} event - 编辑事件对象
     * @param {PdVisPluginEditItemSettings} settings - 配置
     */
    protected showEditDialog(event: JQuery.Event, settings: PdVisPluginEditItemSettings): void;
    /**
     * 取消绑定事件
     */
    protected unbindEvent(): void;
    /**
     * 更新所有全选组件的状态
     */
    protected updateAllSelectAllStatus(): void;
    /**
     * 更新编辑器样式
     * @param settingsList
     */
    protected updateEdit(settingsList?: PdVisEditItemSettings[]): void;
    /**
     * 更新全选组件状态
     * @param {string} name 需要判断的key
     */
    protected updateSelectAllStatus(name: string): void;
}
