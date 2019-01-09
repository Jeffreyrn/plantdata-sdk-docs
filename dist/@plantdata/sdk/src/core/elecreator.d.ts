/**
 * DOM字串创建配置
 */
export interface PdEleCreatorSettings {
    /**
     *  属性
     */
    atts?: {
        [key: string]: any;
    };
    /**
     *  样式
     */
    style?: {
        [key: string]: any;
    };
    /**
     *  类
     */
    cls?: string;
    /**
     *  内部HTML
     */
    html?: any;
}
/**
 * DOM字串创建
 */
export declare class PdEleCreator {
    /**
     * 创建DOM字串
     * @param {string} ele - DOM的tagName
     * @param {PdEleCreatorSettings} settings - DOM字串创建配置
     * @param {boolean} selfClose - 是否自闭和元素
     * @return {string} DOM字串
     */
    static createEle(ele: string, settings?: PdEleCreatorSettings, selfClose?: boolean): string;
}
