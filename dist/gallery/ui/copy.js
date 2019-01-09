var fs = require('fs');
var path = require('path');
nameArray = ['card', 'checkbox', 'dropdown', 'fab', 'form', 'icon', 'input', 'layout', 'mask', 'message', 'modal', 'notification', 'pagination', 'radio', 'ripple', 'select', 'spin', 'switch', 'tab', 'table', 'tag', 'textarea', 'tooltip']

for (let name of nameArray) {
    fs.readFile('./js/ajax.js', "utf-8", function (err, data) {
        if (err) throw err;
        fs.writeFile('./js/' + name + '.js', data);
        console.log('js创建成功');
    });
    fs.readFile('./html/ajax.html', "utf-8", function (err, data) {
        if (err) throw err;
        fs.writeFile('./html/' + name + '.html', data);
        console.log('html创建成功');
    });
    fs.readFile('./css/ajax.css', "utf-8", function (err, data) {
        if (err) throw err;
        fs.writeFile('./css/' + name + '.css', data);
        console.log('css创建成功');
    });
}

