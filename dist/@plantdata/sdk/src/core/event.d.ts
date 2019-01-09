/**
 *  事件处理方法
 */
export declare type PdEventHandler = (event: PdEventData) => void | string | boolean;
/**
 * 事件数据
 */
export interface PdEventData {
    /**
     * 触发事件的实例
     * @type{PdEvent}
     */
    self: PdEvent;
    /**
     *  其他数据
     */
    [key: string]: any;
}
/**
 * 事件
 */
export declare class PdEvent {
    /**
     *  事件列表
     */
    protected events: {
        [key: string]: PdEventHandler[];
    };
    /**
     *  事件数据
     */
    protected eventData: PdEventData;
    /**
     * 事件监听列表
     */
    protected eventHandler: {
        [key: string]: {
            [key: string]: {
                scope: PdEvent;
                handler: PdEventHandler;
            };
        };
    };
    /**
     * 分发事件
     * @param {string} name - 事件类型
     * @param {{ [key: string]: any }} exData - 附加数据
     * @return {void| string| boolean}
     */
    dispatch(name: string, exData?: {
        [key: string]: any;
    }): boolean;
    /**
     * 绑定事件
     * @param {string} name - 事件类型
     * @param {PdEventHandler} handler - 事件处理方法
     */
    on(name: string, handler: PdEventHandler): void;
    /**
     *
     * 取消绑定事件
     * @param {string} name - 事件类型
     * @param {PdEventHandler} handler - 取消的处理方法
     */
    off(name: string, handler?: PdEventHandler): void;
    /**
     * 添加事件
     * @param {string} eventType - 事件类型
     * @param {(data: PdEventData) => void} handler - 事件处理函数
     * @param {this} scope - 事件绑定对象
     * @param {string} id - 事件标识
     */
    protected addEvent(eventType: string, handler: PdEventHandler, scope?: PdEvent, id?: string): void;
    /**
     * 清空事件
     */
    protected clearEvent(): void;
    /**
     * 删除指定事件
     * @param {string} eventType - 事件类型
     * @param {string} id - 事件标识
     */
    protected removeEvent(eventType: string, id?: string): void;
}
