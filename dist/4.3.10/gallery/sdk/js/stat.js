let settings = {
    ajaxSettings: {
        baseUrl: 'http://rice.hiekn.com/rice_console/sdk/',
        formData: {
            databases: ['rice_paper', 'rice_patent', 'rice_news', 'rice_award', 'rice_project'],
            aggs: {
                by_key1: {
                    terms: {
                        field: 'annotation_tag.name',
                        size: 50
                    }
                }
            },
            dimension: 1,
            returnType: 1
        }
    },
    type: 'wordCloud',
    chartSettings: {
    },
    selector: '#container'
};

let service = null;

switch (settings.type) {
    case 'pie':
        service = new PdSDKStatPie(settings);
        break;
    case 'line':
        service = new PdSDKStatLineBar(settings);
        break;
    case 'bar':
        service = new PdSDKStatLineBar(settings);
        break;
    case 'wordCloud':
        service = new PdSDKStatWordCloud(settings);
        break;
}

service.load();