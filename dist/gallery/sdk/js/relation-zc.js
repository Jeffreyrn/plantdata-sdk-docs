var settings = {
    kgName: 'default_graph_bak',
    selector: '#container',
    ajaxSettings: {
        baseUrl: 'https://test.plantdata.ai/plantdata-sdk/api/sdk/',
        headers: {
            APK: 'c01d0d82d4704924b0f75e298b6e0efc'
        },
        dataFilter: function (data) {
            console.log('common dataFilter')
            return data
        }
    },
    schemaSettings: {
        ajaxSettings: {
            url: 'https://test.plantdata.ai/plantdata-sdk/api/sdk/app/schema',
            dataFilter: function (data) {
                console.log('schema dataFilter')
                return data
            }
        }
    },
    netChartSettings: {
        main: {
            nodeSettings: {
                imgBuilder: (url) => {
                    return 'http://opvdgx0ov.bkt.clouddn.com/' + url
                }
            }
        }
    }
}
var ins = new PdSDKZcRelation(settings)
ins.load()
