const concept = new PdSDKPrompt({
    selector: '#container',
    kgName: 'default_graph_bak',
    ajaxSettings: {
        baseUrl: 'https://test.plantdata.ai/plantdata-sdk/api/sdk/',
        headers: {
            APK: '58ff49bce6eb4d3c9b26a58cf592c5ab'
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
            APK: '58ff49bce6eb4d3c9b26a58cf592c5ab'
        }
    },
    autocompleteSettings: {
        theme: 'normal',
        onSearch: (data) => {
            console.log(data)
        }
    }
});
