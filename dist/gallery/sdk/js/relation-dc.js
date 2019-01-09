var settings = {
    kgName: 'default_graph_bak',
    selector: '#container',
    ajaxSettings: {
        baseUrl: 'https://test.plantdata.ai/plantdata-sdk/api/sdk/',
        headers: {
            APK: '58ff49bce6eb4d3c9b26a58cf592c5ab'
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
var ins = new PdSDKDcRelation(settings)
ins.load({id: 1, nodes: [{id: 28161}, {id: 31364}]})
