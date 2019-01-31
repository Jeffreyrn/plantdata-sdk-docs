const settings = {
    kgName: 'lengjing_test001',
    // container: '#container',
    imgBuilder: (url) => {
        return 'https://opvdgx0ov.bkt.clouddn.com/' + url;
    },
    ajaxSettings: {
        baseUrl: 'http://13.229.208.83/plantdata-sdk/api/sdk/',
        headers: {
            APK: 'd939e8d13e294d61b4142e707b2b6cfe'
        },
        formData: {isRelationAtts: true}
    }
};
const service = new PdSDKInfobox(settings);
service.load({id: 26}, () => {
    $('#container').append(service.$el)
});
