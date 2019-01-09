/// <reference types="jquery" />
/**
 * 波纹效果配置项
 */
export declare class PdUIRipple {
    /**
     *  有波纹效果的标识属性
     */
    protected static attrName: string;
    /**
     *  公用className
     */
    protected static clsName: string;
    /**
     *  公用class
     */
    protected static cls: string;
    /**
     *  元素的className
     */
    protected static clsItemName: string;
    /**
     *  动画效果容器className
     */
    protected static clsContainerName: string;
    /**
     *  动画效果的时间
     */
    protected static delay: number;
    /**
     *  默认颜色
     */
    protected static defaultColor: string;
    /**
     * 波纹效果初始化
     */
    static init(): void;
    /**
     * 绑定事件
     */
    protected static bindEvent(): void;
    /**
     * 执行波纹效果
     * @param {JQuery} $container - 执行波纹效果容器
     * @param {JQuery.Event} event - 事件对象
     */
    protected static drawRipple($container: JQuery, event: JQuery.Event): void;
}
