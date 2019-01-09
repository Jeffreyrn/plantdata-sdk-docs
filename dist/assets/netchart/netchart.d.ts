declare namespace ZcNetChart.Configuration {


    export abstract class BaseApi {

        public addData(data: BaseDataObjectBase,
                       sourceId?: string): void;

        public addSubchartContainer(container: HTMLElement): void;

        public back(): this;

        public clearHistory(): this;

        public customize(
            name: string): this;


        public export(
            type: 'png' | 'jpg' | 'pdf' | 'csv' | 'xlsx',
            dimensions?: BaseExportDimensions,
            transparent?: boolean): void;


        public exportAsString(
            type: 'png' | 'jpg' | 'pdf' | 'csv' | 'xlsx',
            callback: (
                dataUri: string,
                mimeType: string,
                extension: string) => void,
            dimensions?: BaseExportDimensions,
            transparent?: boolean): void;

        public exportGetDimensions(dimensions: BaseExportDimensions): {
            width: number;
            height: number;
            scale: number;
            chartWidth: number;
            chartHeight: number;
        };


        public exportImageAsString(type: 'png' | 'jpg' | 'pdf' | 'csv' | 'xlsx', dimensions: BaseExportDimensions, transparent: boolean): string;

        public exportImageGetDimensions(dimensions: BaseExportDimensions): {
            width: number;
            height: number;
            scale: number;
            chartWidth: number;
            chartHeight: number;
        };

        public fullscreen(
            isFullscreen?: boolean): boolean;

        public home(): boolean;

        public off(
            name: string, listener: (event: BaseMouseEvent, args: BaseChartEventArguments) => void): boolean;

        public on(
            name: string,
            listener: (event: BaseMouseEvent, args: BaseChartEventArguments) => void): void;

        public on(name: 'chartUpdate', listener: (event: BaseMouseEvent, args: BaseChartEventArguments) => void): void;

        public on(name: 'click', listener: (event: BaseMouseEvent, args: BaseChartEventArguments) => void): void;

        public on(name: 'doubleClick', listener: (event: BaseMouseEvent, args: BaseChartEventArguments) => void): void;

        public on(name: 'error', listener: (
            event: BaseMouseEvent, args: BaseChartErrorEventArguments) => void): void;

        public on(name: 'hoverChange', listener: (event: BaseMouseEvent, args: BaseChartEventArguments) => void): void;

        public on(name: 'pointerDown', listener: (event: BaseMouseEvent, args: BaseChartEventArguments) => void): void;

        public on(name: 'dataUpdated', listener: (event: BaseMouseEvent, args: BaseChartEventArguments) => void): void;

        public on(name: 'positionChange', listener: (event: BaseMouseEvent, args: BaseChartEventArguments) => void): void;

        public on(name: 'rightClick', listener: (event: BaseMouseEvent, args: BaseChartEventArguments) => void): void;

        public on(name: 'selectionChange', listener: (event: BaseMouseEvent, args: BaseChartEventArguments) => void): void;

        public on(name: 'settingsChange', listener: (event: BaseMouseEvent, args: BaseChartSettingsChangeEventArguments) => void): void;

        public on(name: 'tripleClick', listener: (event: BaseMouseEvent, args: BaseChartEventArguments) => void): void;

        public paintNow(force?: boolean): this;

        public profiler(): BaseProfiler;

        public reloadData(sourceId?: string): void;


        public remove(): void;

        public replaceData(data: BaseDataObjectBase,
                           sourceId?: string): void;

        public replaceSettings(changes: BaseSettings): this;

        public restoreState(state: string, animate?: boolean): void;


        public resumePaint(): void;

        public saveAsImage(type: 'png' | 'jpg' | 'pdf' | 'csv' | 'xlsx', dimensions: BaseExportDimensions, transparent: boolean): string;

        public saveState(): string;


        public suspendPaint(): void;

        public typeName: string;

        public updateFilters(): void;


        public updateSettings(changes: BaseSettings): this;

        public updateSize(): this;

        public updateStyle(): void;
    }

    export interface BaseChartErrorEventArguments extends BaseChartEventArguments {

        arg: any;

        message: string;
    }

    export interface BaseChartEventArguments {

        chart: BaseApi;
        origin: string;
    }

    export interface BaseChartSettingsChangeEventArguments extends BaseChartEventArguments {
        changes?: BaseSettings;
    }

    export interface BaseDataErrorResponse extends BaseDataObjectBase {

        error?: string;
    }

    export interface BaseDataObjectBase {

        extra?: any;
    }

    export interface BaseExportDimensions {

        dpi?: number;

        height?: number;

        scaling?: number;

        unit?: 'mm' | 'px';

        width?: number;
    }

    export interface BaseLabel {
        hheight: number;
        hwidth: number;

        style: BaseSettingsLabelStyle;

        text: string;
        visible: boolean;
    }

    export interface BaseMouseEvent {
        altKey: boolean;
        changedPointerCount: number;
        consumed: boolean;
        ctrlKey: boolean;
        cursor: 'default' | 'help' | 'move' | 'pointer' | 'progress' | 'text' | 'wait' | 'e-resize' | 'ne-resize' | 'nw-resize' | 'n-resize' | 'se-resize' | 'sw-resize' | 's-resize' | 'w-resize' | 'ns-resize' | 'crosshair';
        defaultPrevented: boolean;

        distance(p: {
            x: number;
            y: number;
        }): number;

        dx: number;
        dy: number;
        identifier: string;
        isRightMB: boolean;

        isWithinDistance(
            current: {
                pageX: number;
                pageY: number;
                timeStamp: number;
            },
            dist: number,
            maxAge?: number): boolean;

        pageX: number;
        pageY: number;
        pressed: boolean;

        preventDefault(): void;

        shiftKey: boolean;

        swipeDown: boolean;

        swipeLeft: boolean;

        swipeRight: boolean;
        swipeSpeed: number;

        swipeUp: boolean;
        target: HTMLElement;
        timeStamp: number;
        touch: boolean;
        vx: number;
        vy: number;
        wheelx: number;
        wheely: number;
        x: number;
        y: number;
    }

    export interface BaseProfiler {
        hasPendingRequests(): boolean;

        measureFps(measureFpsIters: number, measureFpsCallback: (fps: number, iterations: number, time: number) => void): boolean;
    }

    export interface BaseSettings {
        advanced?: BaseSettingsAdvanced;

        area?: BaseSettingsArea;

        assetsUrlBase?: string;

        container?: string | HTMLElement;

        credits?: BaseSettingsCredits;

        data?: Array<BaseSettingsData>;

        events?: BaseSettingsEvents<BaseChartEventArguments, BaseChartEventArguments>;

        interaction?: BaseSettingsInteraction;
        legend?: BaseSettingsLegend;

        localization?: BaseSettingsLocalization;

        parentChart?: BaseApi;

        theme?: BaseSettings;

        title?: BaseSettingsTitle;

        toolbar?: BaseSettingsToolbar;
    }

    export interface BaseSettingsAdvanced {

        assets?: Array<string | {
            url?: string;

            required?: () => boolean;
        }>;

        crossOriginHeader?: 'anonymous' | 'use-credentials';

        dataExportFunction?: (
            data: Array<Array<string | number | Date | boolean>>,
            callback: (data: Array<Array<string | number | Date | boolean>>) => void) => void;

        exportPdfSize?: [number, number];

        exportProxyURL?: string;

        highDPI?: number | boolean;

        labelCache?: boolean;

        labelCacheRotated?: boolean;

        logging?: boolean;

        maxCanvasHeight?: number;

        maxCanvasWidth?: number;

        pointer?: BaseSettingsAdvancedPointer;

        showFPS?: boolean;

        showTimestamp?: boolean;

        showTouchTrail?: boolean;

        showTouches?: boolean;

        style?: BaseSettingsAdvancedStyle;

        themeCSSClass?: string;

        useAnimationFrame?: boolean;
    }

    export interface BaseSettingsAdvancedPointer {

        clickSensitivity?: number;

        doubleClickSensitivity?: number;

        doubleClickTimeout?: number;

        longPressSensitivity?: number;

        longPressTimeout?: number;

        mouseWheelRequiresFocus?: boolean;

        noClickOnDoubleClick?: boolean;

        scrollIntoView?: boolean;

        speedAveragingPeriod?: number;
    }

    export interface BaseSettingsAdvancedStyle {

        loadingArcStyle?: {
            lineColor?: string;
            lineWidth?: number;

            location?: 'corner' | 'center' | 'hidden';

            r?: number;
        };

        messageBackgroundStyle?: BaseSettingsAdvancedStyleMessageBackground;

        messageTextStyle?: BaseSettingsTextStyle;
    }

    export interface BaseSettingsAdvancedStyleMessageBackground extends BaseSettingsBackgroundStyle {

        padding?: number;
    }

    export interface BaseSettingsArea {

        height?: number;

        left?: number;

        maxHeight?: number;

        maxWidth?: number;

        minHeight?: number;

        minWidth?: number;

        style?: BaseSettingsAreaStyle;

        top?: number;

        width?: number;
    }

    export interface BaseSettingsAreaStyle {

        fillColor?: string;

        image?: string;

        overlayColor?: string;
    }

    export interface BaseSettingsBackgroundStyle extends BaseSettingsLineStyle {
        fillColor?: string | CanvasGradient;
        shadowBlur?: number;
        shadowColor?: string;
        shadowOffsetX?: number;
        shadowOffsetY?: number;
    }

    export interface BaseSettingsChartPanel {

        align?: 'left' | 'right' | 'top' | 'bottom' | 'center' | 'fill';

        floating?: boolean;

        location?: 'outside' | 'inside' | 'external';

        margin?: number;

        side?: 'top' | 'bottom' | 'left' | 'right';
    }

    export interface BaseSettingsCredits {

        enabled?: boolean;

        enabledOnExport?: boolean;

        image?: string;

        imageExport?: string;

        imageScaling?: number;

        location?: 'inside' | 'outside';

        url?: string;

        urlTarget?: string;
    }

    export interface BaseSettingsData {

        format?: 'JSON' | 'GeoJSON';

        id?: string;

        numberOfParallelRequests?: number;

        postprocessorFunction?: (
            data: string) => string;

        preloaded?: BaseDataErrorResponse;

        requestTimeout?: number;

        url?: string;

        urlParameters?: Array<{

            name?: string;

            value?: string;
        }>;
    }

    export interface BaseSettingsEvents<TArguments extends BaseChartEventArguments, TClickArguments extends BaseChartEventArguments> {

        chartUpdateDelay?: number;

        onChartUpdate?: (
            event: BaseMouseEvent, args: TArguments) => void;

        onClick?: (
            event: BaseMouseEvent, args: TClickArguments) => void;

        onDoubleClick?: (
            event: BaseMouseEvent, args: TClickArguments) => void;

        onError?: (
            event: BaseMouseEvent, args: BaseChartErrorEventArguments) => void;

        onHoverChange?: (
            event: BaseMouseEvent, args: TArguments) => void;

        onPositionChange?: (
            event: BaseMouseEvent, args: TArguments) => void;

        onRightClick?: (
            event: BaseMouseEvent, args: TClickArguments) => void;

        onSelectionChange?: (
            event: BaseMouseEvent, args: TArguments) => void;

        onSettingsChange?: (
            event: BaseMouseEvent, args: BaseChartSettingsChangeEventArguments) => void;

        onTripleClick?: (
            event: BaseMouseEvent, args: TClickArguments) => void;
    }

    export interface BaseSettingsInteraction {

        resizing?: BaseSettingsResizer;
    }

    export interface BaseSettingsLabelStyle {

        align?: 'center' | 'right' | 'left';

        angle?: number;

        aspectRatio?: number;

        backgroundStyle?: BaseSettingsBackgroundStyle;

        borderRadius?: number;

        extra?: any;

        image?: string;

        imageSlicing?: [number, number, number, number];

        lineSpacing?: number;

        margin?: number;

        maxWidth?: number;

        padding?: number;

        text?: string;

        textStyle?: BaseSettingsTextStyle;
    }

    export interface BaseSettingsLegend {

        advanced?: BaseSettingsLegendAdvanced;

        enabled?: boolean;

        equalizeRowsColumns?: boolean;

        height?: number;

        interaction?: BaseSettingsLegendInteraction;

        lineSpacing?: number;

        margin?: number;

        marker?: BaseSettingsLegendMarker;

        maxLineSymbols?: number;

        minHeight?: number;

        minWidth?: number;

        numberOfColumns?: number;

        numberOfRows?: number;

        padding?: number;

        panel?: BaseSettingsLegendPanel;

        text?: BaseSettingsTextStyle;

        width?: number;
    }

    export interface BaseSettingsLegendAdvanced {

        selectedBackground?: string;

        selectedBorder?: string;
    }

    export interface BaseSettingsLegendInteraction {

        click?: boolean;
    }

    export interface BaseSettingsLegendMarker {

        alignment?: 'left' | 'right';

        lineColor?: string;

        size?: number;
    }

    export interface BaseSettingsLegendPanel extends BaseSettingsChartPanel {
        padding?: number;
    }

    export interface BaseSettingsLineStyle {
        lineColor?: string;
        lineDash?: Array<number>;
        lineWidth?: number;
    }

    export interface BaseSettingsLocalization {

        closeButton?: string;

        dataRequestFailed?: string;

        exportNotAvailable?: string;

        loadingLabel?: string;

        toolbar?: BaseSettingsLocalizationToolbar;
    }

    export interface BaseSettingsLocalizationToolbar {
        backButton?: string;
        backTitle?: string;
        exportButton?: string;
        exportCSV?: string;
        exportJpeg?: string;
        exportPDF?: string;
        exportPNG?: string;
        exportTitle?: string;
        exportXLS?: string;
        fullscreenButton?: string;
        fullscreenTitle?: string;
        zoomoutButton?: string;
        zoomoutTitle?: string;
    }

    export interface BaseSettingsResizer {

        enabled?: boolean;

        fixedAspect?: boolean;

        grabDistance?: number;

        visibilityDistance?: number;
    }

    export interface BaseSettingsTextStyle {
        fillColor?: string;
        font?: string;

        outlineColor?: string;

        outlineJoin?: 'miter' | 'round' | 'bevel';

        outlineWidth?: number;
        shadowBlur?: number;
        shadowColor?: string;
        shadowOffsetX?: number;
        shadowOffsetY?: number;
    }

    export interface BaseSettingsTitle {

        advanced?: {

            addAfterToolbar?: boolean;
        };

        align?: 'center' | 'left' | 'right';

        enabled?: boolean;

        enabledOnExport?: boolean;

        margin?: number;

        style?: {
            fillColor?: string;
            font?: string;
        };

        text?: string;
    }

    export interface BaseSettingsToolbar {

        align?: 'left' | 'right' | 'top' | 'bottom';

        back?: boolean;

        cssClass?: string;

        enabled?: boolean;

        export?: boolean;

        exportOptions?: Array<'png' | 'jpg' | 'pdf' | 'csv' | 'xlsx'>;

        extraItems?: Array<string | BaseSettingsToolbarItem>;

        fullscreen?: boolean;

        items?: Array<string | BaseSettingsToolbarItem>;

        location?: 'inside' | 'outside';

        showLabels?: boolean;

        side?: 'left' | 'right' | 'top' | 'bottom';

        zoomOut?: boolean;
    }

    export interface BaseSettingsToolbarItem extends BaseSettingsToolbarItemBase {

        align?: 'left' | 'right' | 'top' | 'bottom';

        dropDownItems?: Array<BaseSettingsToolbarItemBase>;

        item?: 'back' | 'displayPeriod' | 'displayUnit' | 'export' | 'fit' | 'freeze' | 'fullscreen' | 'logScale' | 'rearrange' | 'zoomOut' | 'zoomControl';

        location?: 'inside' | 'outside';

        showLabel?: boolean;

        side?: 'left' | 'right' | 'top' | 'bottom';
    }

    export interface BaseSettingsToolbarItemBase {

        cssClass?: string;

        enabled?: boolean;

        image?: string;

        label?: string;

        onClick?: (event: MouseEvent, chart: BaseApi) => void;

        title?: string;
    }

    export interface ItemsChartChartClickEventArguments extends ItemsChartChartEventArguments {
        clickCredits?: any;
        clickItem: BaseLabel;
        clickLink: ItemsChartLink;
        clickNode: ItemsChartNode;
        credits?: any;
    }

    export interface ItemsChartChartEventArguments extends BaseChartEventArguments {
        chartX: number;
        chartY: number;
        hoverItem: ItemsChartItemsLayerLinkItem | ItemsChartItemsLayerNodeItem;
        hoverLink: ItemsChartLink;
        hoverNode: ItemsChartNode;
        selection: Array<ItemsChartNode | ItemsChartLink>;
    }

    export interface ItemsChartDataObjectBase extends BaseDataErrorResponse {
    }

    export interface ItemsChartDataObjectLink extends ItemsChartDataObjectBase {
        className?: string;

        from: string;

        id?: string;
        style?: ItemsChartSettingsLinkStyle;

        to: string;
    }

    export interface ItemsChartDataObjectNode extends ItemsChartDataObjectBase {
        className?: string;

        id: string;

        loaded: boolean;
        style?: ItemsChartSettingsNodeStyle;
    }

    export interface ItemsChartLink extends ItemsChartSettingsLinkStyle {

        background: boolean;

        data: ItemsChartDataObjectLink;

        from: ItemsChartNode;

        hovered: boolean;

        id: string;

        invisible: boolean;

        relevance: number;

        removed: number | boolean;

        selected: boolean;

        to: ItemsChartNode;
    }

    export interface ItemsChartNode extends ItemsChartSettingsNodeStyle {

        background: boolean;

        data: ItemsChartDataObjectNode;

        dataLinks: Array<ItemsChartDataObjectLink>;

        expanded: boolean;
        focused: boolean;

        hovered: boolean;

        id: string;

        invisible: boolean;

        items: Array<ItemsChartSettingsNodeItem>;

        links: Array<ItemsChartLink>;

        relevance: number;

        removed: number | boolean;

        selected: boolean;

        userLock: boolean;
    }

    export interface ItemsChartItemsLayerLinkItem extends ItemsChartItemsLayerLinkLabel {

        style: ItemsChartSettingsLinkItem;
    }

    export interface ItemsChartItemsLayerLinkLabel extends ItemsChartItemsLayerNodeLabel {

        style: ItemsChartSettingsItemsLayerLinkLabelStyle;
    }

    export interface ItemsChartItemsLayerNodeItem extends ItemsChartItemsLayerNodeLabel {

        style: ItemsChartSettingsNodeItem;
    }

    export interface ItemsChartItemsLayerNodeLabel extends BaseLabel {

        style: ItemsChartSettingsItemsLayerLabelStyle;
    }

    export enum ItemsChartNodeAnchorMode {
        Fixed = 2,

        Floating = 0,
        Scene = 1,
    }

    export interface ItemsChartSettings extends BaseSettings {
        advanced?: ItemsChartSettingsAdvanced;

        data?: Array<ItemsChartSettingsData>;

        events?: BaseSettingsEvents<ItemsChartChartEventArguments, ItemsChartChartClickEventArguments>;

        info?: {

            enabled?: boolean;

            linkContentsFunction?: (
                linkData: ItemsChartDataObjectLink,
                link: ItemsChartLink,
                asyncCallback: (contents: string) => void) => string;

            nodeContentsFunction?: (
                nodeData: ItemsChartDataObjectNode,
                node: ItemsChartNode,
                callback: (contents: string) => void) => string;
        };

        interaction?: ItemsChartSettingsInteraction;

        linkMenu?: ItemsChartSettingsLinkMenu;

        nodeMenu?: ItemsChartSettingsNodeMenu;
        style?: {};
    }

    export interface ItemsChartSettingsAdvanced extends BaseSettingsAdvanced {

        perNodeLoadingIndicator?: boolean;
    }

    export interface ItemsChartSettingsAuraStyle extends BaseSettingsBackgroundStyle {

        enabled?: boolean;

        legendGroupId?: string;

        nameLegend?: string;

        showInLegend?: boolean;

        zIndex?: number;
    }

    export interface ItemsChartSettingsCustomShape {

        distanceToEdge?: (
            r: number,
            w: number,
            ddx: number,
            ddy: number) => number;

        hitTest?: (
            x: number,
            y: number,
            itemScale: number,
            prevBest: number) => number;

        onUpdate?: (
            context: CanvasRenderingContext2D,
            radius: number) => {

            bounds: [number, number, number, number];

            HWidth: number;

            HHeight: number;

            anchor?: [number, number];
        };

        paint?: (
            context: CanvasRenderingContext2D,
            x: number,
            y: number,
            hWidth: number,
            hHeight: number,
            image: HTMLCanvasElement | HTMLImageElement,
            paintDetails: boolean) => void;

        paintSelection?: (
            context: CanvasRenderingContext2D,
            x: number,
            y: number,
            hWidth: number,
            hHeight: number) => void;
    }

    export interface ItemsChartSettingsData extends BaseSettingsData {

        cacheSize?: number;

        random?: 'grid' | 'tree' | 'uniform';
        randomGridLinkProbability?: number;

        randomLinks?: number;

        randomNodes?: number;
        randomTreeDensity?: number;

        requestMaxUnits?: number;
    }

    export interface ItemsChartSettingsInteraction extends BaseSettingsInteraction {

        nodesMovable?: boolean;

        panning?: {

            enabled?: boolean;
        };

        selection?: ItemsChartSettingsInteractionSelection;

        zooming?: ItemsChartSettingsInteractionZooming;
    }

    export interface ItemsChartSettingsInteractionSelection {

        allowMoveNodesOffscreen?: boolean;

        enabled?: boolean;

        linksSelectable?: boolean;

        lockNodesOnMove?: boolean;

        nodesSelectable?: boolean;

        tolerance?: number;
    }

    export interface ItemsChartSettingsInteractionZooming {

        autoZoomAfterClick?: boolean;

        doubleClickZoom?: number;

        fingers?: boolean;

        sensitivity?: number;

        wheel?: boolean;

        zoomInOnDoubleClick?: boolean;
    }

    export interface ItemsChartSettingsItemClass {

        className?: string;

        legendGroupId?: string;

        nameLegend?: string;

        showInLegend?: boolean;
    }

    export interface ItemsChartSettingsItemsLayerItemStyle extends ItemsChartSettingsItemsLayerLabelStyle {

        hoverEffect?: boolean;

        zIndex?: number;
    }

    export interface ItemsChartSettingsItemsLayerLabelStyle extends BaseSettingsLabelStyle {

        scaleWithSize?: boolean;

        scaleWithZoom?: boolean;
    }

    export interface ItemsChartSettingsItemsLayerLinkLabelStyle extends ItemsChartSettingsItemsLayerLabelStyle {

        rotateWithLink?: boolean;
    }

    export interface ItemsChartSettingsItemsLayerStyle {

        allObjectsStyleFunction?: (
            nodes: Array<ItemsChartNode>,
            links: Array<ItemsChartLink>) => {
            modifiedNodes: Array<ItemsChartNode>;
            modifiedLinks: Array<ItemsChartLink>;
        };

        item?: ItemsChartSettingsItemsLayerItemStyle;

        link?: ItemsChartSettingsLinkStyle;

        linkClasses?: Array<ItemsChartSettingsLinkClass>;

        linkDecorationMinSize?: number;

        linkDecorationScale?: number;

        linkDetailMinSize?: number;

        linkDetailMinZoom?: number;

        linkHovered?: ItemsChartSettingsLinkStyle;

        linkLabel?: ItemsChartSettingsItemsLayerLinkLabelStyle;

        linkLabelScaleBase?: number;

        linkRules?: Dictionary<(node: ItemsChartLink) => void>;

        linkSelected?: ItemsChartSettingsLinkStyle;

        linkStyleFunction?: (node: ItemsChartLink) => void;

        node?: ItemsChartSettingsNodeStyle;

        nodeAnchor?: ItemsChartSettingsNodeAnchorStyle;

        nodeBackground?: ItemsChartSettingsNodeStyle;

        nodeClasses?: Array<ItemsChartSettingsNodeClass>;

        nodeDetailMinSize?: number;

        nodeDetailMinZoom?: number;

        nodeExpanded?: ItemsChartSettingsNodeStyle;

        nodeFocused?: ItemsChartSettingsNodeStyle;

        nodeHovered?: ItemsChartSettingsNodeStyle;

        nodeLabel?: ItemsChartSettingsItemsLayerLabelStyle;

        nodeLabelScaleBase?: number;

        nodeLocked?: ItemsChartSettingsNodeStyle;

        nodeNotLoaded?: ItemsChartSettingsNodeStyle;

        nodeRules?: Dictionary<(node: ItemsChartNode) => void>;

        nodeSelected?: ItemsChartSettingsNodeStyle;

        nodeStyleFunction?: (node: ItemsChartNode) => void;

        removedColor?: string;

        scaleLinksWithZoom?: boolean;

        scaleObjectsWithZoom?: boolean;

        selection?: {

            enabled?: boolean;

            fillColor?: string;

            lineColor?: string;
            lineWidth?: number;
            shadowBlur?: number;
            shadowColor?: string;
            shadowOffsetX?: number;
            shadowOffsetY?: number;

            sizeConstant?: number;

            sizeProportional?: number;
        };
    }

    export interface ItemsChartSettingsLinkClass extends ItemsChartSettingsItemClass {

        style?: ItemsChartSettingsLinkStyle;
    }

    export interface ItemsChartSettingsLinkItem extends ItemsChartSettingsItemsLayerItemStyle {

        lx?: number;

        ly?: number;

        px?: number;

        py?: number;

        rotateWithLink?: boolean;

        x?: number;

        y?: number;
    }

    export interface ItemsChartSettingsLinkMenu extends ItemsChartSettingsMenu {

        buttons?: Array<ItemsChartSettingsMenuButton>;

        contentsFunction?: (data: ItemsChartDataObjectLink, node: ItemsChartLink, callback: (result: string | HTMLElement) => void) => string | HTMLElement;
    }

    export interface ItemsChartSettingsLinkStyle {
        cursor?: string;

        direction?: string;
        fillColor?: string;

        fromDecoration?: 'circle' | 'arrow';

        invisible?: boolean;
        items?: Array<ItemsChartSettingsLinkItem>;
        label?: string;
        length?: number;
        lineDash?: Array<number>;

        radius?: number;
        shadowBlur?: number;
        shadowColor?: string;
        shadowOffsetX?: number;
        shadowOffsetY?: number;
        strength?: number;

        toDecoration?: 'circle' | 'arrow';
        toPieColor?: string;
        toPieValue?: number;
    }

    export interface ItemsChartSettingsMenu {
        buttons?: Array<string | ItemsChartSettingsMenuButton>;

        contentsFunction?: (
            data: ItemsChartDataObjectBase,
            node: ItemsChartNode | ItemsChartLink,
            callback: (
                result: string | HTMLElement) => void) => string | HTMLElement;

        enabled?: boolean;

        showData?: boolean;
    }

    export interface ItemsChartSettingsMenuButton {

        className?: string;

        onClick?: (
            target: ItemsChartNode | ItemsChartLink,
            button: HTMLAnchorElement) => void;

        onInit?: (
            target: ItemsChartNode | ItemsChartLink,
            button: HTMLAnchorElement) => void;

        onRefresh?: (
            target: ItemsChartNode | ItemsChartLink,
            button: HTMLAnchorElement) => void;

        text?: string;

        title?: string;
    }

    export interface ItemsChartSettingsNodeAnchorStyle {
        lineColor?: string;
        lineDash?: Array<number>;
        lineWidth?: number;
        shadowBlur?: number;
        shadowColor?: string;
        shadowOffsetX?: number;
        shadowOffsetY?: number;
    }

    export interface ItemsChartSettingsNodeClass extends ItemsChartSettingsItemClass {

        style?: ItemsChartSettingsNodeStyle;
    }

    export interface ItemsChartSettingsNodeItem extends ItemsChartSettingsItemsLayerItemStyle {

        px?: number;

        py?: number;

        x?: number;

        y?: number;
    }

    export interface ItemsChartSettingsNodeMenu extends ItemsChartSettingsMenu {

        buttons?: Array<string | ItemsChartSettingsMenuButton>;

        contentsFunction?: (data: ItemsChartDataObjectNode, node: ItemsChartNode, callback: (result: string | HTMLElement) => void) => string | HTMLElement;
    }

    export interface ItemsChartSettingsNodeStyle {

        anchorMode?: ItemsChartNodeAnchorMode;
        anchorStyle?: ItemsChartSettingsNodeAnchorStyle;

        anchorX?: number;

        anchorY?: number;

        aspectRatio?: number;

        aura?: string | Array<string>;
        coordinates?: Array<number> | Array<Array<number>>;

        cursor?: string;

        customShape?: ItemsChartSettingsCustomShape;

        display?: string;

        draggable?: boolean;
        fillColor?: string;
        image?: string;

        imageCropping?: 'fit' | boolean | 'crop' | 'letterbox';

        invisible?: boolean;

        items?: Array<ItemsChartSettingsNodeItem>;

        label?: string;
        labelStyle?: ItemsChartSettingsItemsLayerLabelStyle;
        lineColor?: string;
        lineDash?: Array<number>;
        lineWidth?: number;

        opacity?: number;
        radius?: number;
        shadowBlur?: number;
        shadowColor?: string;
        shadowOffsetX?: number;
        shadowOffsetY?: number;
    }

    export interface ItemsChartSettingsNodesLayerAuras {

        cellSize?: number;

        defaultColors?: Array<string>;

        defaultStyle?: ItemsChartSettingsAuraStyle;

        drawLimit?: number;

        enabled?: boolean;

        intensity?: number;

        overlap?: boolean;

        style?: Dictionary<ItemsChartSettingsAuraStyle>;
    }

    export interface ItemsChartSettingsNodesLayerStyle extends ItemsChartSettingsItemsLayerStyle {

        fadeTime?: number;

        hiddenLinks?: {
            lineColor?: string;
            lineWidth?: number;
            size?: number;
        };

        linkAutoScaling?: 'linear' | 'logaritmic';

        linkLengthAutoScaling?: 'linear' | 'logaritmic';

        linkLengthExtent?: [number, number];

        linkRadiusExtent?: [number, number];

        linkStrengthAutoScaling?: 'linear' | 'logaritmic';

        linkStrengthExtent?: [number, number];

        multilinkSpacing?: number;

        nodeAutoScaling?: 'linear' | 'logarithmic' | 'square';

        nodeRadiusExtent?: [number, number];

        selfLinkAngle?: number;

        selfLinkHeightFactor?: number;

        selfLinkShape?: 'quadratic' | 'parabolic';

        selfLinkWidthFactor?: number;
    }

    export interface NetChartBarSettingsLocalizationToolbar extends BaseSettingsLocalizationToolbar {
        fitButton?: string;
        fitTitle?: string;
        freezeButton?: string;
        freezeTitle?: string;
        rearrangeButton?: string;
        rearrangeTitle?: string;
        unfreezeTitle?: string;
    }

    export interface NetChartBarSettingsToolbar extends BaseSettingsToolbar {

        zoomControl?: boolean;
    }

    export interface NetChartGravitySettings {

        from?: 'node' | 'cluster' | 'auto';

        fromCenter?: 'weighted' | 'geometric';

        strength?: number;

        to?: 'cluster' | 'nearestLockedNode' | 'clusterLockedNodes' | 'graph' | 'graphLockedNodes';

        toCenter?: 'weighted' | 'geometric';
    }

    export interface NetChartChartClickEventArguments extends NetChartChartEventArguments {
        clickItem: BaseLabel;
        clickLink: ItemsChartLink;
        clickNode: ItemsChartNode;
    }

    export interface NetChartChartEventArguments extends ItemsChartChartEventArguments {
        links: Array<ItemsChartLink>;
        nodes: Array<ItemsChartNode>;
    }

    export interface NetChartDataObject extends BaseDataErrorResponse {
        links: Array<NetChartDataObjectLink>;
        nodes: Array<NetChartDataObjectNode>;
    }

    export interface NetChartDataObjectLink extends ItemsChartDataObjectLink {
    }

    export interface NetChartDataObjectNode extends ItemsChartDataObjectNode {

        locked?: boolean;

        x?: number;

        y?: number;
    }

    export interface NetChartSettings extends ItemsChartSettings {

        area?: NetChartSettingsArea;

        auras?: ItemsChartSettingsNodesLayerAuras;

        data?: Array<NetChartSettingsData>;

        events?: NetChartSettingsEvents;

        filters?: {

            linkFilter?: (
                linkData: NetChartDataObjectLink,
                fromNodeData: NetChartDataObjectNode,
                toNodeData: NetChartDataObjectNode) => boolean;

            multilinkProcessor?: (
                arrayOfLinkData: Array<NetChartDataObjectLink>,
                fromData: NetChartDataObjectNode,
                toData: NetChartDataObjectNode) => NetChartDataObjectLink | Array<NetChartDataObjectLink>;

            nodeFilter?: (
                nodeData: NetChartDataObjectNode,
                arrayOfLinkData: Array<NetChartDataObjectLink>) => boolean;

            nodeLinksProcessor?: (
                nodeData: NetChartDataObjectNode,
                links: Array<NetChartDataObjectLink>) => Array<NetChartDataObjectLink>;
        };

        interaction?: NetChartSettingsInteraction;

        layout?: NetChartSettingsLayout;

        legend?: NetChartSettingsLegend;

        localization?: NetChartSettingsLocalization;

        navigation?: NetChartSettingsNavigation;

        style?: NetChartSettingsStyle;

        theme?: NetChartSettings;

        toolbar?: NetChartBarSettingsToolbar;
    }

    export interface NetChartSettingsArea extends BaseSettingsArea {

        centerX?: number;

        centerY?: number;

        paddingBottom?: number;

        paddingLeft?: number;

        paddingRight?: number;

        paddingTop?: number;
    }

    export interface NetChartSettingsData extends ItemsChartSettingsData {

        dataFunction?: (
            nodes: Array<string>,
            success: (data: NetChartDataObject) => void,
            fail: (result: BaseDataErrorResponse) => void) => void;

        preloaded?: NetChartDataObject;
    }

    export interface NetChartSettingsEvents extends BaseSettingsEvents<NetChartChartEventArguments, NetChartChartClickEventArguments> {

        onDataUpdated?: (
            event: MouseEvent, args: NetChartChartEventArguments) => void;
        onPointerDown?: (
            event: MouseEvent, args: NetChartChartClickEventArguments) => void;

        onPointerDrag?: (
            event: MouseEvent, args: NetChartChartClickEventArguments) => void;

        onPointerMove?: (
            event: MouseEvent, args: NetChartChartEventArguments) => void;

        onPointerUp?: (
            event: MouseEvent, args: NetChartChartClickEventArguments) => void;
    }

    export interface NetChartSettingsInteraction extends ItemsChartSettingsInteraction {

        rotation?: {

            fingers?: boolean;
        };

        selection?: NetChartSettingsInteractionSelection;

        zooming?: NetChartSettingsInteractionZooming;
    }

    export interface NetChartSettingsInteractionSelection extends ItemsChartSettingsInteractionSelection {

        dragSelect?: boolean;
    }

    export interface NetChartSettingsInteractionZooming extends ItemsChartSettingsInteractionZooming {

        autoZoomExtent?: [number, number];

        autoZoomPositionElasticity?: number;

        autoZoomSize?: number;

        initialAutoZoom?: 'overview' | boolean;

        zoomExtent?: [number, number];
    }

    export interface NetChartSettingsLayout {

        advanced?: {
            adaptiveFreezeTreshold?: number;
        };

        aspectRatio?: boolean;

        globalLayoutOnChanges?: boolean;

        gravity?: NetChartGravitySettings;

        groupSpacing?: number;

        incrementalLayoutMaxTime?: number;

        initialLayoutMaxTime?: number;

        layoutFreezeMinTimeout?: number;

        layoutFreezeTimeout?: number;

        mode?: 'dynamic' | 'radial' | 'hierarchy' | 'static';

        nodeSpacing?: number;

        rotation?: number;

        rowSpacing?: number;

        twoRingRadialLayout?: boolean;
    }

    export interface NetChartSettingsLegend extends BaseSettingsLegend {

        advanced?: NetChartSettingsLegendAdvanced;

        panel?: BaseSettingsLegendPanel;
    }

    export interface NetChartSettingsLegendAdvanced extends BaseSettingsLegendAdvanced {

        showItemsWithClasses?: 'any' | 'all';

        textColorDisabled?: string;
    }

    export interface NetChartSettingsLocalization extends BaseSettingsLocalization {

        menu?: {
            close?: string;
            collapse?: string;

            dynamic?: string;
            expand?: string;
            fixed?: string;
            focus?: string;
            hide?: string;
            unfocus?: string;
        };

        toolbar?: NetChartBarSettingsLocalizationToolbar;
    }

    export interface NetChartSettingsNavigation {

        autoUnfocus?: boolean;

        autoZoomOnFocus?: boolean;

        expandDelay?: number;

        expandOnClick?: boolean;

        focusAutoFadeout?: boolean;

        focusNodeExpansionRadius?: number;

        focusNodeTailExpansionRadius?: number;

        initialNodes?: Array<string>;

        minNumberOfFocusNodes?: number;

        mode?: 'manual' | 'showall' | 'focusnodes';

        numberOfFocusNodes?: number;
    }

    export interface NetChartSettingsStyle extends ItemsChartSettingsNodesLayerStyle {

        dragSelection?: BaseSettingsBackgroundStyle;
    }

}

declare namespace ZcNetChart {


    export class NetChart extends Configuration.BaseApi {
        public constructor(settings: Configuration.NetChartSettings);

        public addData(data: Configuration.NetChartDataObject,
                       sourceId?: string): void;

        public addFocusNode(
            id: string | Configuration.ItemsChartNode,
            relevance?: number): void;

        public clearFocus(): void;

        public closeNode(
            id: string | Configuration.ItemsChartNode): void;

        public collapseNode(
            id: string | Configuration.ItemsChartNode): void;

        public expandNode(
            id: string | Configuration.ItemsChartNode): void;

        public exportData(visibleOnly?: boolean, exportCoordinates?: boolean): Configuration.NetChartDataObject;

        public getLink(
            id: string): Configuration.ItemsChartLink;

        public getNode(
            id: string): Configuration.ItemsChartNode;

        public getNodeDimensions(node: Configuration.ItemsChartNode): {
            x: number;
            y: number;
            radius: number;
            hwidth: number;
        };

        public hideMenu(): this;

        public hideNode(
            id: string | Configuration.ItemsChartNode): void;

        public links(): Array<Configuration.ItemsChartLink>;

        public lockNode(
            id: string | Configuration.ItemsChartNode, x: number,
            y: number): void;

        public nodes(): Array<Configuration.ItemsChartNode>;

        public on(
            name: string,
            listener: (event: Configuration.BaseMouseEvent, args: Configuration.BaseChartEventArguments) => void): void;
        public on(name: 'chartUpdate', listener: (event: Configuration.BaseMouseEvent, args: Configuration.NetChartChartEventArguments) => void): void;
        public on(name: 'click', listener: (event: Configuration.BaseMouseEvent, args: Configuration.NetChartChartClickEventArguments) => void): void;
        public on(name: 'doubleClick', listener: (event: Configuration.BaseMouseEvent, args: Configuration.NetChartChartClickEventArguments) => void): void;
        public on(name: 'error', listener: (
            event: Configuration.BaseMouseEvent, args: Configuration.BaseChartErrorEventArguments) => void): void;
        public on(name: 'hoverChange', listener: (event: Configuration.BaseMouseEvent, args: Configuration.NetChartChartEventArguments) => void): void;

        public on(name: 'pointerDown', listener: (event: Configuration.BaseMouseEvent, args: Configuration.NetChartChartEventArguments) => void): void;

        public on(name: 'dataUpdated', listener: (event: Configuration.BaseMouseEvent, args: Configuration.NetChartChartEventArguments) => void): void;
        public on(name: 'positionChange', listener: (event: Configuration.BaseMouseEvent, args: Configuration.NetChartChartEventArguments) => void): void;
        public on(name: 'rightClick', listener: (event: Configuration.BaseMouseEvent, args: Configuration.NetChartChartClickEventArguments) => void): void;
        public on(name: 'selectionChange', listener: (event: Configuration.BaseMouseEvent, args: Configuration.NetChartChartEventArguments) => void): void;
        public on(name: 'settingsChange', listener: (event: Configuration.BaseMouseEvent, args: Configuration.BaseChartSettingsChangeEventArguments) => void): void;
        public on(name: 'tripleClick', listener: (event: Configuration.BaseMouseEvent, args: Configuration.NetChartChartClickEventArguments) => void): void;

        public removeData(data: Configuration.NetChartDataObject, sourceId?: string): void;

        public removeFocusNode(
            id: string | Configuration.ItemsChartNode): void;

        public replaceData(data: Configuration.NetChartDataObject,
                           sourceId?: string): void;

        public replaceSettings(changes: Configuration.NetChartSettings): this;


        public resetLayout(): void;

        public scrollIntoView(
            nodes: Array<string> | Array<Configuration.ItemsChartNode>,
            margins?: [number, number, number, number]): void;

        public selection(
            selected?: Array<string | Configuration.ItemsChartNode | Configuration.ItemsChartLink>): Array<Configuration.ItemsChartNode | Configuration.ItemsChartLink>;

        public showNode(
            id: string): void;


        public static themes: {
            dark?: Configuration.NetChartSettings;
            flat?: Configuration.NetChartSettings;
        };

        public unlockNode(
            id: string | Configuration.ItemsChartNode): void;


        public updateSettings(changes: Configuration.NetChartSettings): this;

        public updateStyle(
            objects?: Array<string>): void;


        public zoom(
            zoomValue?: number | 'auto' | 'overview' | 'in' | 'out',
            animate?: boolean): number;

        public zoomIn(objects: Array<string>, animate?: boolean): void;
    }

}

declare class NetChart extends ZcNetChart.NetChart {
}

declare namespace ZcNetChart {
    export interface Dictionary<TValue> {
        [key: string]: TValue;
    }

    export interface NumberDictionary<TValue> {
        [key: number]: TValue;
    }

    export interface GradientDefinition extends Array<[number, string]> {
    }

    export type GradientMode = null | 'vertical' | 'horizontal'

    export type GradientType = null | 'cylinder'


    export interface IRectangle {
        x0: number;
        y0: number;
        x1: number;
        y1: number;
    }

    export interface IGeoRectangle {
        east: number;
        west: number;
        north: number;
        south: number;
    }

    export interface IColor {
        R: number;
        G: number;
        B: number;
        A: number;


        _lab?: { L: number; A: number; B: number; };
    }
}


declare namespace moment {
    export interface Moment {
    }
}

export = ZcNetChart
