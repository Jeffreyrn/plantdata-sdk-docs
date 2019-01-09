const settings = {
    kgName: 'default_graph_bak',
    // container: '#container',
    imgBuilder: (url) => {
        return 'https://opvdgx0ov.bkt.clouddn.com/' + url;
    },
    ajaxSettings: {
        baseUrl: 'https://test.plantdata.ai/plantdata-sdk/api/sdk/',
        headers: {
            APK: '58ff49bce6eb4d3c9b26a58cf592c5ab'
        },
        formData: {isRelationAtts: true}
    }
};
const service = new PdSDKInfobox(settings);
service.load({id: 26}, () => {
    $('#container').append(service.$el)
});
