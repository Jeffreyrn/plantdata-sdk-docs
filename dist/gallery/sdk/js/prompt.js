const concept = new PdSDKPrompt({
    selector: '#container',
    kgName: 'default_graph_bak',
    ajaxSettings: {
        baseUrl: 'https://test.plantdata.ai/plantdata-sdk/api/sdk/',
        headers: {
            APK: 'c01d0d82d4704924b0f75e298b6e0efc'
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
    kgName: 'default_graph_bak',
    // 下拉提示类型， 可选值：0表示实例提示，1：概念实例提示，默认为0
    promptType: 1,
    ajaxSettings: {
        baseUrl: 'https://test.plantdata.ai/plantdata-sdk/api/sdk/',
        headers: {
            APK: 'c01d0d82d4704924b0f75e298b6e0efc'
        }
    },
    autocompleteSettings: {
        theme: 'normal',
        onSearch: (data) => {
            console.log(data)
        }
    }
});
