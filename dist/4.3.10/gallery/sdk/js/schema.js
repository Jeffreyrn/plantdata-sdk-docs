const schema = new PdSDKSchema({
    kgName: 'default_graph_bak',
    ajaxSettings: {
        baseUrl: 'https://test.plantdata.ai/plantdata-sdk/api/sdk/',
        headers: {
            APK: '58ff49bce6eb4d3c9b26a58cf592c5ab'
        },
        success: (data) => {
            console.log(data)
            console.log('To do something')
        }
    }
});

schema.load().then((data) => {
    document.getElementById('container').innerHTML = JSON.stringify(data)
});
