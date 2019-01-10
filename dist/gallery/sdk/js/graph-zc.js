var settings = {
    kgName: 'default_graph_bak',
    selector: '#container',
    ajaxSettings: {
        baseUrl: 'https://test.plantdata.ai/plantdata-sdk/api/sdk/',
        headers: {
            APK: '58ff49bce6eb4d3c9b26a58cf592c5ab'
        }
    }
};
var ins = new PdSDKZcGraph(settings);
ins.load();
