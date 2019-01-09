/// <reference types="jquery" />
import { PdVisPluginEdit, PdVisPluginEditItemSettings, PdVisPluginEditSettings } from '../../../../vis/netchart/plugins/edit/edit';
import { PdSDKAjaxSettings, PdSDKCRUDSettings } from '../../../utils/utils';
import { PdVisEditItemSettings } from '../../../../vis/utils/edit-item/edit-item';
import { PdVisDialogSettings } from '../../../../vis/utils/modal/dialog/dialog';
import { PdSDKPluginSettings } from '../plugin';
/**
 * 规则项的配置
 */
export interface PdVisPluginRuleItemSettings extends PdVisPluginEditItemSettings {
    /**
     * 颜色
     */
    color?: string;
}
/**
 * 规则插件配置
 */
export interface PdSDKPluginRuleSettings extends PdSDKPluginSettings, PdVisPluginEditSettings, PdSDKCRUDSettings {
    /**
     * 默认选中规则
     */
    ruleChecked?: {
        [key: string]: any;
    };
    /**
     * 规则配置
     */
    editItemSettings?: PdVisPluginRuleItemSettings[];
}
/**
 * 规则模块配置
 */
export declare class PdSDKPluginRule extends PdVisPluginEdit {
    /**
     *  默认配置
     */
    static defaultSettings: PdSDKPluginRuleSettings;
    /**
     * 是否通过校验
     */
    isValidate: boolean;
    /**
     *  配置
     */
    settings: PdSDKPluginRuleSettings;
    /**
     * 规则列表
     */
    ruleList: any[];
    /**
     * 构造方法
     * @param {PdSDKPluginRuleSettings} settings - 用户配置
     */
    constructor(settings?: PdSDKPluginRuleSettings);
    /**
     * 清空校验状态
     */
    clearValidate(): void;
    /**
     * 获取插件的唯一标识
     */
    getPluginType(): string;
    /**
     * 获取当前选中规则的结果
     * @return {any} 选中规则的结果
     */
    getSelectedData(): any;
    /**
     * 添加规则
     * @param config - 规则配置
     * @return {Promise<any>} 添加规则的异步请求实例
     */
    add(config: any): Promise<any>;
    /**
     * 删除规则
     * @param id - 规则id
     * @return {Promise<any>} 删除规则的异步请求实例
     */
    delete(id: number): Promise<any>;
    /**
     * 获取规则
     * @param pageNo - 规则页码
     * @return {Promise<any>} 获取规则的异步请求实例
     */
    list(pageNo?: number): Promise<any>;
    /**
     * 校验数据
     * @return {boolean}
     */
    validate(): boolean;
    /**
     * 修改规则
     * @param {number} id - 规则ID
     * @param {any} config - 规则配置
     * @return {Promise<any>} 添加规则的异步请求实例
     */
    update(id: number, config: any): Promise<any>;
    /**
     * 创建规则编辑字段
     * @return {string} - 规则编辑字段的HTML
     */
    protected addRuleField(): string;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 生成编辑弹框的HTML
     * @return {string} 编辑弹框的HTML
     */
    protected createEditDialogBody(): string;
    /**
     * 执行请求
     * @param {PdSDKAjaxSettings} settings - 请求配置
     * @return {Promise<any>} - 执行请求的实例
     */
    protected executeLoad(settings: PdSDKAjaxSettings): Promise<any>;
    /**
     * 获取弹框数据
     * @return {any} - 编辑完的数据
     */
    protected getDialogData(): any;
    /**
     * 获取容器主题
     */
    protected getMainContainer(): JQuery;
    /**
     * 初始化配置
     * @param {PdSDKPluginRuleSettings} settings - 用户定义配置
     * @return {PdSDKPluginRuleSettings} 配置
     */
    protected initSettings(settings: PdSDKPluginRuleSettings): PdSDKPluginRuleSettings;
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
     * 生成弹框
     */
    protected showDialog(event: JQuery.Event, settings: PdVisDialogSettings): void;
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
     * 更新规则表单界面
     * @param {PdVisEditItemSettings[]} settingsList - 表单配置
     */
    protected updateEdit(settingsList?: PdVisEditItemSettings[]): void;
    /**
     * 更新规则
     */
    protected updateRule(): void;
    /**
     * 校验编辑弹框数据
     * @return {boolean} - 是否通过校验
     */
    protected validateDialog(): boolean;
}
