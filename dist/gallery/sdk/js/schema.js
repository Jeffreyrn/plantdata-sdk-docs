const schema = new PdSDKSchema({
    kgName: 'lengjing_test001',
    ajaxSettings: {
        baseUrl: 'http://13.229.208.83/plantdata-sdk/api/sdk/',
        headers: {
            APK: 'd939e8d13e294d61b4142e707b2b6cfe'
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
