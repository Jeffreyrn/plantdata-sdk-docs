const fab = new PdUIFab({
    mainRadiusDistance: 80,
    angleRange: 120,
    isOpened: true,
    startAngle: 135,
    ripple: '#ff0',
    subRadiusDistance: 50,
    offset: 2,
    outTime: 20,
    outIncr: 20,
    offsetTime: 200,
    inTime: 20,
    inIncr: 20,
    selector: '#demo-fab',
    mainBtnSettings: {
        html: '〇'
    },
    subBtnSettings: [
        {
            html: '①'
        },
        {
            html: '②'
        },
        {
            html: '③'
        },
        {
            html: '④'
        },
        {
            html: '⑤'
        },
        {
            html: '⑥'
        },
        {
            html: '⑦'
        }
    ]
});