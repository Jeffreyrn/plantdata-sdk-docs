import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';
import { PdSDKStat } from '../stat';
/**
 * 绘制SDK饼图，需要echarts插件支持
 */
export declare class PdSDKStatPie extends PdSDKStat {
    /**
     * 绘制图表
     */
    protected drawChart(): void;
}
