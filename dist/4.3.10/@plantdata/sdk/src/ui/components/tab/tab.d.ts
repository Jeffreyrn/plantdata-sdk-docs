/// <reference types="jquery" />
/**
 * 标签页
 */
export declare class PdUITab {
    /**
     *  标签页的clsName
     */
    protected static clsName: string;
    /**
     *  标签页的class
     */
    protected static cls: string;
    /**
     *  左侧标签页的标识
     */
    protected static clsLeftName: string;
    /**
     *  右左侧标签页的标识
     */
    protected static clsRightName: string;
    /**
     *  标签的父容器
     */
    protected static clsNavName: string;
    /**
     *  标签父容器的class
     */
    protected static clsNav: string;
    /**
     *  标签的外层容器
     */
    protected static clsNavContainerName: string;
    /**
     *  是否显示全部标签的
     */
    protected static clsNavShowAllName: string;
    /**
     *  标签控制的标识
     */
    protected static clsNavControlName: string;
    /**
     *  上一组标签控制的标识
     */
    protected static clsNavControlPrevName: string;
    /**
     *  下一组标签控制的标识
     */
    protected static clsNavControlNextName: string;
    /**
     *  标签的父容器的包裹
     */
    protected static clsNavWrapName: string;
    /**
     *  当前标签的下划线
     */
    protected static clsNavDecorationName: string;
    /**
     *  主样式的标签页
     */
    protected static clsNavPrimaryName: string;
    /**
     *  二级样式的标签页
     */
    protected static clsNavSecondaryName: string;
    /**
     *  标签的元素
     */
    protected static clsNavItemName: string;
    /**
     *  标签内容页
     */
    protected static clsPageName: string;
    /**
     *  标签内容页的一项
     */
    protected static clsPageItemName: string;
    /**
     * 初始化
     */
    static init(): void;
    /**
     * 更新所有标签页标签容器的样式
     */
    static updateAllTabNav(): void;
    /**
     * 更新标签页标签容器的样式
     * @param {JQuery} $item - 标签
     */
    static updateTabNav($item: JQuery): void;
    /**
     * 绑定事件
     */
    protected static bindEvent(): void;
    /**
     * 获取控制器状态
     * @param {JQuery} $item - 标签
     * @param {number} pPos - 当前位置
     * @return {any} - 控制器状态
     */
    protected static getControlStatus($item: JQuery, pPos?: number): {
        prev: boolean;
        next: boolean;
    };
    /**
     * 是否竖排的标签页
     * @param {JQuery} $item - 标签
     * @return {boolean} 是否竖排
     */
    protected static isVertical($item: JQuery): boolean;
    /**
     * 设置控制器状态
     * @param {JQuery} $item - 元素
     * @param {boolean} prev - 左控制器状态
     * @param {boolean} next - 右控制器状态
     */
    protected static setControlStatus($item: JQuery, prev?: boolean, next?: boolean): void;
    /**
     * 设置下划线的位置
     * @param {JQuery} $item - 当前选中的标签
     */
    protected static setDecorationPos($item: JQuery): void;
    /**
     * 设置可视区域的位置
     * @param {JQuery} $wrap - 标签页容器的包裹
     * @param {number} deltaPos - 位移
     * @param {boolean} isVertical - 是否竖排
     */
    protected static setVisiblePos($wrap: JQuery, deltaPos: number, isVertical: boolean): void;
    /**
     * 更新所有控制器状态
     */
    protected static updateAllControlStatus(): void;
    /**
     * 更新标签外层容器的状态样式
     * @param {JQuery} $item
     */
    protected static updateTabNavContainer($item: JQuery): void;
}
