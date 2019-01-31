const graph = new PdSDKZcGraph({
    showAllSchemaOptions: true,
    kgName: 'trade_war_0uv9i2xgpt1ir2gj',
    selector: document.getElementById('chart'),
    ajaxSettings: {
        baseUrl: 'http://13.229.208.83/plantdata-sdk/api/sdk/',
        headers: {
            APK: 'd939e8d13e294d61b4142e707b2b6cfe',
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
