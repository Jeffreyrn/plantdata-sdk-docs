// @ts-ignore
importScripts('../../assets/lodash.min.js');
(function () {
    var num = 1;
    var resultMap = {};
    var menuItemUrlMap = {};
    var menuItemMap = {};
    var allMenuItems = [];
    var startTime = new Date().getTime();
    onmessage = function (e) {
        var treeData = handleData(e.data);
        createMenuItemPid(treeData);
        buildMenuItemUrlMap();
        var html = createMenuItemHTMLStr(treeData);
        // @ts-ignore
        postMessage({ html: html, allMenuItems: allMenuItems, menuItemUrlMap: menuItemUrlMap });
    };
    function calcUseTime() {
        return (new Date().getTime() - startTime) / 1000;
    }
    function buildAllMenuItems(item) {
        allMenuItems.push(item);
        if (item.children) {
            for (var _i = 0, _a = item.children; _i < _a.length; _i++) {
                var it = _a[_i];
                buildAllMenuItems(it);
            }
        }
    }
    function buildMenuItemUrl(data) {
        var path = '';
        var name = data.name.toLocaleLowerCase();
        switch (data.kindString.toLocaleLowerCase()) {
            case 'class':
                path = 'classes/' + name + '.html';
                break;
            case 'interface':
                path = 'interfaces/' + name + '.html';
                break;
            case 'type alias':
                path = 'globals.html#' + name;
                break;
            case 'property':
            case 'variable':
            case 'method':
            case 'constructor':
            case 'function':
            case 'object literal':
                path = menuItemUrlMap[data.pid];
                if (path) {
                    if (path.indexOf('#') < 0) {
                        path = path + '#' + name;
                    }
                }
                else {
                    path = buildMenuItemUrl(findMenuItemById(data.pid));
                }
                break;
            case '':
                path = 'index.html';
                break;
            default:
                console.error('unknow type ========> ', data.kindString);
                path = 'index.html';
                break;
        }
        return path;
    }
    function buildMenuItemUrlMap() {
        var noId = _.filter(allMenuItems, function (n) {
            return !n.id;
        });
        var allUniq = _.uniqBy(allMenuItems, 'id');
        allUniq = _.filter(allUniq, function (n) {
            return n.id;
        });
        var data = _.concat(noId, allUniq);
        // let allLength = data.length;
        // let now = 0;
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var item = data_1[_i];
            menuItemUrlMap[item.id] = buildMenuItemUrl(item);
            menuItemMap[item.id] = item;
            // console.log(now ++ / allLength)
        }
    }
    function createMenuItemHTMLStr(treeData) {
        var lis = createSubMenuItemHTMLStr(treeData);
        return "<ul>" + lis + "</ul>";
    }
    function createSubMenuItemHTMLStr(data, level, parentPath) {
        if (level === void 0) { level = 1; }
        if (parentPath === void 0) { parentPath = ''; }
        var li = "";
        for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
            var item = data_2[_i];
            var ul = '';
            var subText = '';
            var arrow = '<i></i>';
            var cls = 'last';
            var children = item.children;
            subText = getSubText(item);
            var path = menuItemUrlMap[item.id];
            if (!path) {
                path = menuItemUrlMap[item.id] = buildMenuItemUrl(item);
            }
            if (parentPath && path.indexOf(parentPath) !== 0) {
                var selfFileName = getFileNameById(item.id);
                var parentFileName = getFileNameById(item.pid);
                if (selfFileName !== parentFileName) {
                    if (path.indexOf('#') > 0) {
                        path = path.split('#')[0] + '?ref=' + encodeURIComponent(parentPath) + '#' + path.split('#')[1];
                    }
                    else {
                        // path = path + '?ref=' + encodeURIComponent(parentPath)
                    }
                }
            }
            if (children && children.length) {
                var items = createSubMenuItemHTMLStr(children, level + 1, path);
                ul = "<ul>" + items + "</ul>";
                arrow = '<i class="ic-chevron-right pdui-font"></i>';
                cls = 'has-children';
            }
            var typeClass = item.kindString ? 'tsd-kind-' + item.kindString.toLocaleLowerCase().replace(' ', '-') : '';
            cls += ' ' + getClass(item.flags) + (item.inheritedFrom ? ' isInherited' : '');
            li += "<li class=\"li " + (level > 1 ? 'closed' : 'open') + " " + typeClass + "\" level=\"" + level + "\">\n                        <div class=\"li-con tsd-kind-icon " + cls + "\" data-id=\"" + (item.id || '') + "\"\n                            data-pid=\"" + (item.pid || '') + "\" data-name=\"" + item.name.toLocaleLowerCase() + "\" data-path=\"" + path + "\">\n                            " + arrow + "\n                            <div class=\"name\">" + item.name + "</div>\n                            <div class=\"text\" title=\"" + subText.replace(/\"/, '&quot;') + "\">" + subText + "</div>\n                        </div>\n                        " + ul + "\n                    </li>";
        }
        return li;
    }
    function createMenuItemPid(data, level, pid, reference) {
        if (level === void 0) { level = 1; }
        if (pid === void 0) { pid = 0; }
        if (reference === void 0) { reference = false; }
        for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
            var item = data_3[_i];
            var children = item.children;
            if (!children) {
                children = getSubMenuItems(item);
                if (children.length) {
                    item.children = children;
                    for (var _a = 0, children_1 = children; _a < children_1.length; _a++) {
                        var it = children_1[_a];
                        buildAllMenuItems(it);
                    }
                }
            }
            if (!reference) {
                item.pid = pid;
            }
            var isReference = item.type && item.type.type === 'reference' && item.type.id;
            if ((!children || !children.length) && isReference) {
                var obj = _.find(allMenuItems, ['id', item.type.id]);
                if (obj.children && obj.kindString === 'Interface') {
                    if (false && isRecursed(item, obj.id)) {
                        console.error(item, obj);
                    }
                    else {
                        item.children = obj.children;
                        children = item.children;
                    }
                }
            }
            if (children && children.length) {
                createMenuItemPid(children, level + 1, item.id, isReference);
            }
        }
    }
    function findMenuItemById(id) {
        return menuItemMap[id] || _.find(allMenuItems, ['id', parseInt(id, 10)]);
    }
    function getSubMenuItems(data) {
        try {
            if (data.type.elementType.declaration.children.length) {
                return _.orderBy(data.type.elementType.declaration.children, 'name', 'asc');
            }
        }
        catch (err) {
        }
        try {
            if (data.type.declaration.children.length) {
                return _.orderBy(data.type.declaration.children, 'name', 'asc');
            }
        }
        catch (err) {
        }
        try {
            if (data.type.declaration.indexSignature) {
                return getSubMenuItems(data.type.declaration.indexSignature);
            }
        }
        catch (err) {
        }
        return [];
    }
    function getClass(data) {
        if (data) {
            var className = '';
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    className += ' ' + key;
                }
            }
            return className;
        }
        else {
            return '';
        }
    }
    function getFileNameById(id) {
        var data = findMenuItemById(id);
        if (data) {
            return data.sources[0].fileName;
        }
        else {
            return '';
        }
    }
    function getIndexSignature(indexSignature) {
        var subText = '';
        if (indexSignature.parameters.length === 1) {
            var key = indexSignature.parameters[0].name;
            var keyType = indexSignature.parameters[0].type.name;
            var valueType = getType(indexSignature.type, indexSignature);
            var optional = isOptional(indexSignature.parameters[0]);
            subText = "{ [" + key + ": " + keyType + "]" + optional + ": " + valueType + " }";
        }
        else {
            console.error('unknow indexSignature', indexSignature);
        }
        return subText;
    }
    function getReflection(reflection) {
        var subText = '';
        if (reflection.kindString === 'Type literal') {
            if (reflection.children) {
                var a = _.map(reflection.children, function (o) {
                    // TODO value function ?
                    var value = getType(o.type, o);
                    return o.name + ": " + value;
                });
                return "{" + a.join(', ') + "}";
            }
            else if (reflection.indexSignature) {
                return getIndexSignature(reflection.indexSignature);
            }
            else if (reflection.signatures) {
                return getSignatures(reflection.signatures);
            }
            else {
                // TODO
                // console.warn('unknow reflection', reflection);
                subText = 'any';
            }
        }
        else {
            console.error('unknow reflection', reflection);
        }
        return subText;
    }
    function getSignatures(signatures, data) {
        var subText = '';
        if (signatures.length === 1) {
            var signature = signatures[0];
            if (signature.parameters) {
                var parameters = getParameters(signature.parameters);
                subText = "(" + parameters.join(', ') + ")";
            }
            else {
                subText = '()';
            }
            // TODO
            if (signature.type.type && signature.type.type === 'reflection') {
                subText += ' => ' + getVariable(signature.type);
                data.children = signature.type.declaration.children;
            }
            else {
                subText += ' => ' + getType(signature.type, signature);
            }
        }
        else {
            console.error('unknow signatures', signatures);
        }
        return subText;
    }
    function getSubText(data) {
        var subText = '';
        var type = data.kindString;
        if (type === 'Property' || type === 'Variable' || type === 'Type alias') {
            subText = getType(data.type, data);
            return returnData(subText, data);
        }
        else if (type === 'Call signature') {
            subText = getType(data.type, data);
            return returnData(subText, data);
        }
        else if (type === 'Method' || type === 'Constructor') {
            subText = getSignatures(data.signatures, data);
            return returnData(subText, data);
        }
        else if (type === 'Function') {
            subText = getSignatures(data.signatures, data) || 'Function';
            return returnData(subText, data);
        }
        else if (type === 'Object literal') {
            subText = '';
            if (data.children && data.children.length) {
                subText = '{...}';
            }
            else {
                console.error('unknow Object', data);
            }
            return returnData(subText, data);
        }
        else if (type === 'Interface' || type === 'Class') {
            return type;
        }
        else if (type === 'Constructor signature') {
            console.log(data);
            return type;
        }
        else {
            if (type) {
                console.log(data);
            }
            return type;
        }
    }
    function getType(type, data) {
        if (data) {
            try {
                if (data.type.elementType.declaration.children.length) {
                    // data.children = _.orderBy(data.type.elementType.declaration.children, 'name', 'asc');
                    // for (let it of data.children) {
                    //     buildAllMenuItems(it);
                    // }
                    return '{...}';
                }
            }
            catch (err) {
            }
            try {
                if (data.type.declaration.children.length) {
                    // data.children = _.orderBy(data.type.declaration.children, 'name', 'asc');
                    // for (let it of data.children) {
                    //     buildAllMenuItems(it);
                    // }
                    // TODO
                    // return '{...}';
                }
            }
            catch (err) {
            }
        }
        return getVariable(type);
    }
    function getParameters(parameters) {
        return _.map(parameters, function (o) {
            var type = getType(o.type);
            return "" + o.name + isOptional(o) + ": " + type;
        });
    }
    function getVariable(variable) {
        // TODO defaultValue
        var subText = '';
        var type = variable.type;
        if (type === 'array') {
            if (variable.elementType.name && variable.elementType.name === 'undefined') {
                subText = '[]';
            }
            else {
                subText = getType(variable.elementType, variable) + '[]';
            }
        }
        else {
            if (variable.name) {
                if (type !== 'intrinsic' && type !== 'reference' && type !== 'typeParameter') {
                    // console.warn('unknow variableType', variable)
                }
                subText = variable.name;
                if (subText === 'Array' && variable.typeArguments) {
                    if (variable.typeArguments.length === 1) {
                        subText = getType(variable.typeArguments[0], variable) + '[]';
                    }
                    else {
                        console.error(variable);
                    }
                }
            }
            else if (variable.value) {
                subText = variable.value;
                if (type === 'stringLiteral') {
                    subText = '\'' + subText + '\'';
                }
                if (type !== 'stringLiteral') {
                    console.warn('unknow variableType', variable);
                }
            }
            else if (variable.value === '') {
                if (type !== 'stringLiteral') {
                    console.warn('unknow variableType', variable);
                }
                subText = '\'\'';
            }
            else {
                if (type === 'reflection') {
                    subText = getReflection(variable.declaration);
                }
                else if (type === 'union') {
                    var unionValue = _.map(variable.types, function (o) {
                        return getVariable(o);
                    });
                    subText = unionValue.join(' | ');
                }
                else if (type === 'tuple') {
                    var a = _.map(variable.elements, 'name');
                    subText = "[" + a.join(', ') + "]";
                }
                else {
                    console.error('unknow variable', variable);
                }
            }
        }
        return subText;
    }
    function handleData(data) {
        var trData = [];
        for (var _i = 0, _a = data.children; _i < _a.length; _i++) {
            var item = _a[_i];
            var fileName = item.sources[0].fileName;
            var fileNamePrefix = fileName.split('/')[0];
            var flag = true;
            for (var _b = 0, trData_1 = trData; _b < trData_1.length; _b++) {
                var it = trData_1[_b];
                if (it.name === fileNamePrefix) {
                    flag = false;
                }
            }
            if (flag) {
                trData.push({
                    name: fileNamePrefix,
                    kindString: '',
                    children: []
                });
            }
            if (item.kindString === 'Class') {
                for (var _c = 0, trData_2 = trData; _c < trData_2.length; _c++) {
                    var it = trData_2[_c];
                    if (it.name === fileNamePrefix) {
                        it.children.push(item);
                    }
                }
            }
            else {
                for (var _d = 0, trData_3 = trData; _d < trData_3.length; _d++) {
                    var it = trData_3[_d];
                    if (it.name === fileNamePrefix) {
                        for (var _e = 0, _f = it.children; _e < _f.length; _e++) {
                            var subIt = _f[_e];
                            if (subIt.sources[0].fileName === fileName) {
                                if (!subIt.children) {
                                    subIt.children = [];
                                }
                                subIt.children.push(item);
                            }
                        }
                    }
                }
            }
        }
        trData = orderBy(trData);
        for (var _g = 0, trData_4 = trData; _g < trData_4.length; _g++) {
            var it = trData_4[_g];
            buildAllMenuItems(it);
        }
        return trData;
    }
    function isOptional(o) {
        return o.flags && o.flags.isOptional ? '?' : '';
    }
    function isRecursed(item, id) {
        if (item.id === id) {
            return true;
        }
        else {
            var obj = _.find(allMenuItems, ['id', item.pid]);
            return obj ? isRecursed(obj, id) : false;
        }
    }
    function orderBy(data) {
        for (var _i = 0, data_4 = data; _i < data_4.length; _i++) {
            var item = data_4[_i];
            if (item.children && item.children.length) {
                item.children = orderBy(item.children);
            }
        }
        return _.orderBy(data, 'name', 'asc');
    }
    function returnData(subText, data) {
        if (subText) {
            if (resultMap[subText]) {
                resultMap[subText].push(data);
            }
            else {
                resultMap[subText] = [data];
            }
            // console.log('%c' + subText, 'color:green', data);
            return subText;
        }
        else {
            console.error(data);
            return data.kindString;
        }
    }
})();

//# sourceMappingURL=tree_worker.js.map
