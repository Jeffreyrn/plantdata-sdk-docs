const graph = new PdSDKZcGraph({
    showAllSchemaOptions: true,
    kgName: 'trade_war_0uv9i2xgpt1ir2gj',
    selector: document.getElementById('chart'),
    ajaxSettings: {
        baseUrl: 'https://test.plantdata.ai/plantdata-sdk/api/sdk/',
        headers: {
            APK: '58ff49bce6eb4d3c9b26a58cf592c5ab',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJoaWVrbiIsImV4cCI6MTU0N' +
                'DQyNjAyNCwiaWF0IjoxNTQzMjE2NDI0LCJ1c2VySWQiOiJhNWU5Mzl0cW5tMXF6ZWlrIn0.Yh2pRmgR6n4SMyvO_' +
                'NZC9Sn7I5MZGfOzSDrUNOYTaU8'
        }
    },
    netChartSettings: {
        rightPanel: {
            active: true,
            mode: 'fixed'
        }
    },
    infobox: {
        settings: {
            active: true
        }
    }
})
graph.load()
