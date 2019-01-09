/// <reference types="jquery" />
import { PdTabPanel, PdTabPanelChildSettings } from '../tab';
import { PdSelector } from '../../../../common/common';
/**
 * 主面板
 */
export declare class PdMainPanel extends PdTabPanel {
    /**
     * 添加子面板
     * @param {PdSelector} child - 子面板选择器
     * @param {PdTabPanelChildSettings} settings - 子面板配置
     * @return {string} 子面板Dom字符串
     */
    addChild(child: PdSelector, settings?: PdTabPanelChildSettings): string;
    /**
     * 销毁实例
     */
    destroy(): void;
    /**
     * 初始化Dom结构并返回
     * @return {JQuery} 模板JQuery对象
     */
    protected initTemplate(): JQuery;
}
