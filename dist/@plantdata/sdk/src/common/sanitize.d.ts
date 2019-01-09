/**
 * 净化工具
 * */
export declare class PdSanitizeUtil {
    protected static RELATIVE: string;
    protected static ALL: string;
    static SETTINGS: {
        BASIC: {
            elements: string[];
            attributes: {
                'a': string[];
                'blockquote': string[];
                'q': string[];
            };
            add_attributes: {
                'a': {
                    'rel': string;
                };
            };
            protocols: {
                'a': {
                    'href': string[];
                };
                'blockquote': {
                    'cite': string[];
                };
                'q': {
                    'cite': string[];
                };
            };
        };
        RELAXED: {
            elements: string[];
            attributes: {
                'a': string[];
                'blockquote': string[];
                'col': string[];
                'colgroup': string[];
                'img': string[];
                'ol': string[];
                'q': string[];
                'table': string[];
                'td': string[];
                'th': string[];
                'ul': string[];
            };
            protocols: {
                'a': {
                    'href': string[];
                };
                'blockquote': {
                    'cite': string[];
                };
                'img': {
                    'src': string[];
                };
                'q': {
                    'cite': string[];
                };
            };
        };
        RESTRICTED: {
            elements: string[];
        };
    };
    protected static REGEX_PROTOCOL: RegExp;
    protected settings: any;
    protected allowed_elements: {
        [key: string]: boolean;
    };
    protected transformers: any[];
    protected current_element: DocumentFragment;
    protected whitelist_nodes: any[];
    protected dom: Document;
    /**
     * 创建一个净化工具
     * @param {any} [settings= PdSanitizeUtil.SETTINGS.RELAXED] - 净化配置
     * @return {PdSanitizeUtil} 净化工具的实例
     * */
    constructor(settings?: any);
    /**
     * 净化危险节点
     * @param {Element} container - 需要净化的元素
     * @return {DocumentFragment} 净化后的代码片段
     * */
    cleanElement(container: Element): DocumentFragment;
    /**
     * 净化危险的HTML字串
     * @param {string} str - 需要净化的HTML字串
     * @return {string} 净化后的HTML字串
     * */
    cleanHTML(str: string): string;
}
