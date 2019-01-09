const graph = new PdSDKEcPath({
    selector: '#container',
    kgName: 'default_graph_bak',
    ajaxSettings: {
        baseUrl: 'https://test.plantdata.ai/plantdata-sdk/api/sdk/',
        headers: {
            APK: '58ff49bce6eb4d3c9b26a58cf592c5ab'
        }
    }
})
graph.load();



