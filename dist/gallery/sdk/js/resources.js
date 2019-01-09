let settings = {
    container: '#container',
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
    tableSettingsList: [
        {
            name: '论文资源',
            databases: ['u260'],
            tables: ['u260_data_543b880d'],
            fields: ['title', 'ins', 'publishTime', 'keyword', 'from', 'url'],
            fieldsName: ['标题', '学校', '发布时间', '关键词', '类型', '来源'],
            rendererList: {
                publishTime: 'year',
                url: 'link'
            },
            filters: [{
                key: 'publishTime',
                label: '发布时间',
                type: 'year',
                format: 'YYYYMMDD',
                options: [{
                    key: '全部',
                    value: ''
                }, '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009',
                    '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001', '2000', '1999']
            }]
        }, {
            name: '报纸资源',
            databases: ['u260'],
            tables: ['u260_data_a120c72a'],
            fields: ['title', 'ins', 'publishTime', 'keyword', 'url'],
            fieldsName: ['标题', '报纸', '发布时间', '关键词', '来源'],
            rendererList: {
                publishTime: 'date',
                url: {
                    type: 'link',
                    fields: ['title']
                }
            },
            filters: [{
                key: 'publishTime',
                label: '发布时间',
                type: 'year',
                format: 'YYYYMMDD',
                options: [{
                    key: '全部',
                    value: ''
                }, '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009',
                    '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001', '2000', '1999']
            }]
        }]
};

let service = new PdSDKResources(settings);

service.load(1);
