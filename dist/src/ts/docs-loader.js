function getSearchParam(key) {
    var reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)');
    var r = window.location.search.substr(1).match(reg);
    if (r !== null) {
        return decodeURIComponent(r[2]);
    }
    return null;
}
window.onmessage = function (event) {
    if (getSearchParam('init') === '1') {
        var config = event.data;
        var code = JSON.parse(config);
        if (code.html) {
            $('body').html(code.html);
        }
        if (code.css) {
            $('#css').html(code.css);
        }
        if (code.javascript) {
            window['eval'](code.javascript);
        }
    }
};
$(function () {
    if (getSearchParam('init') !== '1') {
        var arr = location.pathname.split('/');
        var name_1 = arr[arr.length - 1].split('.html')[0];
        $.get('css/' + name_1 + '.css', function (css) {
            $('#css').html(css);
            $.get('html/' + name_1 + '.html', function (HTML) {
                $('body').html(HTML);
                $.get('js/' + name_1 + '.js');
            });
        });
    }
    else {
        parent['indexService'].pageReady = true;
    }
});

//# sourceMappingURL=docs-loader.js.map
