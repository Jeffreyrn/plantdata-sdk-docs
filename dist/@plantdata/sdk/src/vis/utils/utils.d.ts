/**
 * checkbox或radio的配置
 */
export interface PdVisCheckboxRadioSettings {
    /**
     *  checkbox或radio的唯一标识
     */
    id?: string;
    /**
     *  checkbox或radio类型
     */
    type?: 'checkbox' | 'radio';
    /**
     *  checkbox或radio的显示文本
     */
    label?: string;
    /**
     *  checkbox或radio的name属性
     */
    name?: string;
    /**
     *  checkbox或radio的额外class属性
     */
    cls?: string;
    /**
     *  checkbox或radio的默认值
     */
    value?: string | number;
    /**
     *  checkbox或radio的默认选中状态
     */
    checked?: boolean;
}
/**
 * 可视化工具集
 */
export declare class PdVisUtils {
    /**
     * 生成checkbox或radio的HTML
     * @param {PdVisCheckboxRadioSettings} settings - checkbox或radio的配置
     * @return {string} checkbox或radio的HTML字符串
     */
    static buildCRHTML(settings: PdVisCheckboxRadioSettings): string;
}
