import { PdSelector } from '../../../common/common';
/**
 * backtop回到顶部
 */
export declare class PdUIBackTop {
    /**
     *  pop属性
     */
    protected static attrPos: string;
    /**
     *  公用className
     */
    protected static clsName: string;
    /**
     *  公用class
     */
    protected static cls: string;
    /**
     *  backtop的容器
     */
    protected static selector: PdSelector;
    /**
     *  动画持续时间
     */
    protected static duration: number;
    /**
     *  具体顶部多少距离时显示
     */
    protected static offsetDistance: number;
    /**
     * 初始化
     */
    static init(): void;
    /**
     * 绑定事件
     */
    protected static bindEvent(): void;
}
