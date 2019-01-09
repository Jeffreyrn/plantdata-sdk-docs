let settings = {
    selector: '#container',
    ajaxSettings: {
        beforeSend: function (jqXHR, ajaxSettings) {
            let data = this.data;
            let query = JSON.parse(data.query);
            query.bool.must.push({
                'bool': {
                    'should': [{'terms': {'annotation_tag.id': ['0']}}, {'terms': {'parent_annotation_tag.id': ['0']}}],
                    'minimum_should_match': 1
                }
            });
            data.query = JSON.stringify(query);
            ajaxSettings.data = $.param(data);
        },
        baseUrl: 'http://rice.hiekn.com/rice_console/sdk/'
    },
    name: '新闻资源',
    databases: ['rice_news'],
    tables: ['rice_news_data'],
    fields: ['title', 'annotation_tag.name', 'publishTime', 'abstract', 'from', 'keyword'],
    fieldsName: ['标题', '标注', '发布时间', '摘要', '来源', '关键词'],
    rendererList: {
        'annotation_tag.name': {
            complex: true
        },
        publishTime: 'date'
    },
    detailEnable: true,
    filters: [{
        key: 'publishTime',
        label: '发布时间',
        type: 'date',
        format: 'YYYYMMDD',
        options: [{
            key: '全部',
            value: ''
        }, '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010']
    }]
};
let service = new PdSDKResource(settings);
service.load(1);
