function getSearchParam(key: string) {
    const reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)');
    const r = window.location.search.substr(1).match(reg);
    if (r !== null) {
        return decodeURIComponent(r[2]);
    }
    return null;
}

window.onmessage = function (event) {
    if (getSearchParam('init') === '1') {
        const config = event.data;
        const code = JSON.parse(config);
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

$(() => {
    if (getSearchParam('init') !== '1') {
        const arr = location.pathname.split('/');
        const name = arr[arr.length - 1].split('.html')[0];
        $.get('css/' + name + '.css', (css: string) => {
            $('#css').html(css);
            $.get('html/' + name + '.html', (HTML: string) => {
                $('body').html(HTML);
                $.get('js/' + name + '.js');
            });
        });
    } else {
        parent['indexService'].pageReady = true;
    }
});
