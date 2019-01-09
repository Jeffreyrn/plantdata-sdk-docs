import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/grid';
import 'echarts/lib/component/legend';
import { PdSDKStat } from '../stat';
/**
 * 绘制SDK折线图/柱状图，需要echarts插件支持
 */
export declare class PdSDKStatLineBar extends PdSDKStat {
    /**
     * 绘制图表
     */
    protected drawChart(): void;
}
