var settings = {
    kgName: 'lengjing_test001',
    selector: '#container',
    ajaxSettings: {
        baseUrl: 'http://13.229.208.83/plantdata-sdk/api/sdk/',
        headers: {
            APK: 'd939e8d13e294d61b4142e707b2b6cfe'
        }
    }
};
var ins = new PdSDKZcGraph(settings);
ins.load();
