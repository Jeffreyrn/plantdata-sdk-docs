import 'echarts/lib/chart/line';
import { PdSDKStat } from '../stat';
import 'echarts-wordcloud';
/**
 * 绘制SDK词云图，需要echarts和echarts-woldcloud插件支持
 */
export declare class PdSDKStatWordCloud extends PdSDKStat {
    /**
     * 绘制图表
     */
    protected drawChart(): void;
}
