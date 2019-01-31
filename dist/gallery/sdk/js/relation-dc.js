var settings = {
    kgName: 'lengjing_test001',
    selector: '#container',
    ajaxSettings: {
        baseUrl: 'http://13.229.208.83/plantdata-sdk/api/sdk/',
        headers: {
            APK: 'd939e8d13e294d61b4142e707b2b6cfe'
        },
        dataFilter: function (data) {
            console.log('common dataFilter')
            return data
        }
    },
    schemaSettings: {
        ajaxSettings: {
            url: 'http://13.229.208.83/plantdata-sdk/api/sdk/app/schema',
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
