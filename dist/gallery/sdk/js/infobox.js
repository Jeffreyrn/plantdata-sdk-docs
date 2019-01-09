const settings = {
    kgName: 'default_graph_bak',
    // container: '#container',
    imgBuilder: (url) => {
        return 'https://opvdgx0ov.bkt.clouddn.com/' + url;
    },
    ajaxSettings: {
        baseUrl: 'https://test.plantdata.ai/plantdata-sdk/api/sdk/',
        headers: {
            APK: 'c01d0d82d4704924b0f75e298b6e0efc'
        },
        formData: {isRelationAtts: true}
    }
};
const service = new PdSDKInfobox(settings);
service.load({id: 26}, () => {
    $('#container').append(service.$el)
});
