/**
 * HSL 类型对象
 */
export declare type PdColorHSL = {
    /**
     * 色相
     */
    h?: number;
    /**
     * 饱和度
     */
    s?: number;
    /**
     * 亮度
     */
    l?: number;
    /**
     * 透明度
     */
    a?: number;
};
/**
 * HSB 类型对象
 */
export declare type PdColorHSB = {
    /**
     * 色相
     */
    h?: number;
    /**
     * 饱和度
     */
    s?: number;
    /**
     * 明度
     */
    b?: number;
    /**
     * 透明度
     */
    a?: number;
};
/**
 * RGB 类型对象
 */
export declare type PdColorRGB = {
    /**
     * 红色
     */
    r?: number;
    /**
     * 绿色
     */
    g?: number;
    /**
     * 蓝色
     */
    b?: number;
    /**
     * 透明度
     */
    a?: number;
};
/**
 * 颜色类型
 */
export declare type PdColorType = string | PdColorHSB | PdColorRGB;
/**
 * 颜色转换工具集
 */
export declare class PdColorUtils {
    /**
     * 校验修改Hsb格式的颜色
     * @param {PdColorHSB} hsb - 颜色
     * @return 修改后的颜色
     */
    static fixHSB(hsb: PdColorHSB): {
        h: number;
        s: number;
        b: number;
        a: number;
    };
    /**
     * 校验修改Hsl格式的颜色
     * @param {PdColorHSL} hsl - 颜色
     * @return 修改后的颜色
     */
    static fixHSL(hsl: PdColorHSL): {
        h: number;
        s: number;
        l: number;
        a: number;
    };
    /**
     * 校验修改RGB格式的颜色
     * @param {PdColorRGB} rgb - 颜色
     * @return 修改后的颜色
     */
    static fixRGB(rgb: PdColorRGB): {
        r: number;
        g: number;
        b: number;
        a: number;
    };
    /**
     * 校验修改Hex格式的颜色
     * @param {string} hex - 颜色
     * @return 修改后的颜色
     */
    static fixHex(hex: string): string;
    /**
     * Hex转HSB
     * @param {string} hex - Hex格式的颜色
     * @return {PdColorHSB} HSB格式的颜色
     */
    static hexToHsb(hex: string): PdColorHSB;
    /**
     * Hex转RGB
     * @param {string} hex - Hex格式的颜色
     * @return {PdColorRGB} RGB格式的颜色
     */
    static hexToRgb(hex: string): PdColorRGB;
    /**
     * HSB近似
     * @param {PdColorHSB} hsb - HSB格式的颜色
     * @return {PdColorHSB} 近似后的颜色
     */
    static hsbRound(hsb: PdColorHSB): PdColorHSB;
    /**
     * HSL近似
     * @param {PdColorHSL} hsl - HSL格式的颜色
     * @return {PdColorHSL} 近似后的颜色
     */
    static hslRound(hsl: PdColorHSL): PdColorHSL;
    /**
     * HSB转Hex
     * @param {PdColorHSB} hsb - HSB格式的颜色
     * @return {string} Hex格式的颜色
     */
    static hsbToHex(hsb: PdColorHSB): string;
    /**
     * HSB转RGB
     * @param {PdColorHSB} hsb - HSB格式的颜色
     * @return {PdColorRGB} RGB格式的颜色
     */
    static hsbToRgb(hsb: PdColorHSB): PdColorRGB;
    /**
     * RGB转HSB
     * @param {PdColorRGB} rgb - RGB格式的颜色
     * @return {PdColorHSB} HSB格式的颜色
     */
    static rgbToHsb(rgb: PdColorRGB): PdColorHSB;
    /**
     * RGB转Hex
     * @param {PdColorRGB} rgb - RGB格式的颜色
     * @return {string} Hex格式的颜色
     */
    static rgbToHex(rgb: PdColorRGB): string;
    /**
     * RGB 颜色值转换为 HSL.
     * 转换公式参考自 http://en.wikipedia.org/wiki/HSL_color_space.
     * r, g, 和 b 需要在 [0, 255] 范围内
     * 返回的 h, s, 和 l 在 [0, 1] 之间
     * @param {PdColorRGB} rgb - RGB格式的颜色
     * @return {PdColorHSL} HSL格式的颜色
     */
    static rgbToHsl(rgb: PdColorRGB): PdColorHSL;
    /**
     * HSL颜色值转换为RGB.
     * 换算公式改编自 http://en.wikipedia.org/wiki/HSL_color_space.
     * h, s, 和 l 设定在 [0, 1] 之间
     * 返回的 r, g, 和 b 在 [0, 255]之间
     * @return {PdColorRGB} RGB格式的颜色
     */
    static hslToRgb(hsl: PdColorHSL): PdColorRGB;
    /**
     * HSB转Hex
     * @param {PdColorHSB} hsb - HSB格式的颜色
     * @return {PdColorHSL} HSL格式的颜色
     */
    static hsbToHsl(hsb: PdColorHSB): PdColorHSL;
}
