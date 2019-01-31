const graph = new PdSDKEcPath({
    selector: '#container',
    kgName: 'lengjing_test001',
    ajaxSettings: {
        baseUrl: 'http://13.229.208.83/plantdata-sdk/api/sdk/',
        headers: {
            APK: 'd939e8d13e294d61b4142e707b2b6cfe'
        }
    }
})
graph.load();



