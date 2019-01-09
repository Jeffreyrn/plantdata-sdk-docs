/**
 * 下拉框创建类
 */
export declare class PdUIDropdown {
    /**
     *  id属性
     */
    protected static attrId: string;
    /**
     *  role属性，区分dropdown / select
     */
    protected static attrRole: string;
    /**
     *  公用className
     */
    protected static clsName: string;
    /**
     *  公用class
     */
    protected static cls: string;
    /**
     *  条目容器的class
     */
    protected static clsItems: string;
    /**
     * 初始化下拉框
     */
    static init(): void;
    /**
     * 绑定事件
     */
    protected static bindEvent(): void;
}
