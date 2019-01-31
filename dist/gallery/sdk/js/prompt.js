const concept = new PdSDKPrompt({
    selector: '#container',
    kgName: 'lengjing_test001',
    ajaxSettings: {
        baseUrl: 'http://13.229.208.83/plantdata-sdk/api/sdk/',
        headers: {
            APK: 'd939e8d13e294d61b4142e707b2b6cfe'
        }
    },
    autocompleteSettings: {
        onSearch: (data) => {
            console.log(data)
        }
    }
});


const concept2 = new PdSDKPrompt({
    selector: '#container2',
    kgName: 'lengjing_test001',
    // 下拉提示类型， 可选值：0表示实例提示，1：概念实例提示，默认为0
    promptType: 1,
    ajaxSettings: {
        baseUrl: 'http://13.229.208.83/plantdata-sdk/api/sdk/',
        headers: {
            APK: 'd939e8d13e294d61b4142e707b2b6cfe'
        }
    },
    autocompleteSettings: {
        theme: 'normal',
        onSearch: (data) => {
            console.log(data)
        }
    }
});
