/**
 * 校验工具集
 * */
export declare class PdValidatorUtils {
    /**
     * 判断密码等级
     * @param {string} str - 密码字串
     * @return {(0|1|2|3)} 密码等级0-3，越大越强
     * */
    static calcPwdLevel(str: string): number;
    /**
     * 是否中文
     * @param {string} str - 需要校验的字串
     * @return {boolean} - 校验结果
     * */
    static isChinese(str: string): boolean;
    /**
     * 是否email地址
     * @param {string} str - 需要校验的字串
     * @return {boolean} - 校验结果
     * */
    static isEmail(str: string): boolean;
    /**
     * 是否英文
     * @param {string} str - 需要校验的字串
     * @return {boolean} - 校验结果
     * */
    static isEnglish(str: string): boolean;
    /**
     * 是否中国第二代身份证
     * @param {string} str - 需要校验的字串
     * @return {boolean} - 校验结果
     * */
    static isIdCard(str: string): boolean;
    /**
     * 是否图片地址
     * @param {string} str - 需要校验的字串
     * @return {boolean} - 校验结果
     * */
    static isImage(str: string): boolean;
    /**
     * 是否手机号
     * @param {string} str - 需要校验的字串
     * @return {boolean} - 校验结果
     * */
    static isMobile(str: string): boolean;
    /**
     * 是否数字字串
     * @param {string} str - 需要校验的字串
     * @return {boolean} 校验结果
     * */
    static isNumber(str: string): boolean;
}
