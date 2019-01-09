/// <reference types="jquery" />
import { PdEvent } from './event';
/**
 * 组件配置
 */
export interface PdComponentSettings {
}
/**
 * 组件
 */
export declare abstract class PdComponent extends PdEvent {
    /**
     *  默认配置
     */
    static defaultSettings: PdComponentSettings;
    /**
     *  组件容器
     */
    $el: JQuery;
    /**
     *  配置
     */
    settings: PdComponentSettings;
    /**
     * 生成组件DOM的原始Class
     */
    private originClass;
    /**
     * 生成Loading动画的HTML
     * @param  {string} cls - 容器额外的class
     * @param  {'xs' | 'sm' | 'md' | 'lg'} size - loading的尺寸
     * @param  {string} tag - 容器的标签
     * @return {string} loading动画的HTML
     */
    protected static gentLoadingHTML(cls?: string, size?: 'xs' | 'sm' | 'md' | 'lg', tag?: string): string;
    /**
     * 创建组件实例
     * @param {PdComponentSettings} settings - 组件配置
     */
    constructor(settings?: PdComponentSettings);
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 查找子孙节点
     * @param {string} selectors - 节点选择器
     * @param {JQuery} parent - 待查找的JQuery节点,默认为组件本身
     * @return {JQuery} JQuery节点
     */
    select(selectors: string, parent?: JQuery<HTMLElement>): JQuery;
    /**
     * 绑定事件
     */
    protected bindEvent(): void;
    /**
     * 配置初始化完成后的回调
     */
    protected created(): void;
    /**
     * 初始化配置
     * @param {PdComponentSettings} settings - 用户定义配置
     * @return {PdComponentSettings} 配置
     */
    protected initSettings(settings: PdComponentSettings): any;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected abstract initTemplate(): JQuery;
    /**
     * 组件JQuery容器生成后回调
     */
    protected mounted(): void;
    /**
     * 删除Dom结构
     */
    protected removeDOM(): void;
    /**
     * 清空Dom结构并还原class
     */
    protected clearDOM(): void;
    /**
     * 保存原始className
     * @param {JQuery} $el - 容器的JQuery对象
     */
    protected saveOriginClass($el: JQuery): void;
    /**
     * 取消事件绑定
     */
    protected unbindEvent(): void;
}
