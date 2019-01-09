const schema = new PdSDKSchema({
    kgName: 'default_graph_bak',
    ajaxSettings: {
        baseUrl: 'https://test.plantdata.ai/plantdata-sdk/api/sdk/',
        headers: {
            APK: 'c01d0d82d4704924b0f75e298b6e0efc'
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
