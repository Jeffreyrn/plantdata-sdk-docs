const graph = new PdSDKEcPath({
    selector: '#container',
    kgName: 'default_graph_bak',
    ajaxSettings: {
        baseUrl: 'https://test.plantdata.ai/plantdata-sdk/api/sdk/',
        headers: {
            APK: 'c01d0d82d4704924b0f75e298b6e0efc'
        }
    }
})
graph.load();



