$('#ajax').on('click', () => {
    PdUIAjax.loader({
        url: 'http://data.lengjing.io/lengjing/api/subscribe/rec/news/list?' +
        'userId=63&accessToken=2x5wyfet67qwels0pjv&tt=1527652460741&pageNo=1&pageSize=3',
        type: 'GET',
        success: function (data) {
            console.log(data);
        },
        el: 'body'
    });
});
