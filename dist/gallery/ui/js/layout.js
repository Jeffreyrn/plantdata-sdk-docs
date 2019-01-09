document.getElementById('layout-dynamic').innerHTML = PdUILayout.create({
    gutter: 24, cls: 'pdui-dynamic'
});
document.querySelector('#layout-dynamic .pdui-layout-row').innerHTML = PdUILayout.createCol({
    cols: 5,
    html: '<div>5</div>', cls: 'pdui-dynamic'
}) + PdUILayout.createCol({
    cols: {
        'default': 7,
        'lg': 5
    },
    html: '<div>7</div>', cls: 'pdui-dynamic'
});
