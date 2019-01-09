// @ts-ignore
importScripts('../../assets/lodash.min.js');

(function () {
    let num = 1;
    let resultMap = {};
    let menuItemUrlMap = {};
    let menuItemMap = {};
    let allMenuItems: any[] = [];
    const startTime = new Date().getTime();
    onmessage = (e) => {
        let treeData = handleData(e.data);
        createMenuItemPid(treeData);
        buildMenuItemUrlMap();
        let html = createMenuItemHTMLStr(treeData);
        // @ts-ignore
        postMessage({html, allMenuItems, menuItemUrlMap});
    };

    function calcUseTime() {
        return (new Date().getTime() - startTime) / 1000
    }

    function buildAllMenuItems(item: any) {
        allMenuItems.push(item);
        if (item.children) {
            for (let it of item.children) {
                buildAllMenuItems(it)
            }
        }
    }

    function buildMenuItemUrl(data: any) {
        let path = '';
        let name = data.name.toLocaleLowerCase();
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
                        path = path + '#' + name
                    }
                } else {
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
        let noId = _.filter(allMenuItems, (n: any) => {
            return !n.id;
        });
        let allUniq = _.uniqBy(allMenuItems, 'id');
        allUniq = _.filter(allUniq, (n: any) => {
            return n.id;
        });
        let data = _.concat(noId, allUniq);
        // let allLength = data.length;
        // let now = 0;
        for (let item of data) {
            menuItemUrlMap[item.id] = buildMenuItemUrl(item);
            menuItemMap[item.id] = item;
            // console.log(now ++ / allLength)
        }
    }

    function createMenuItemHTMLStr(treeData: any) {
        let lis = createSubMenuItemHTMLStr(treeData);
        return `<ul>${lis}</ul>`;
    }

    function createSubMenuItemHTMLStr(data: any[], level = 1, parentPath = '') {
        let li = ``;
        for (let item of data) {
            let ul = '';
            let subText = '';
            let arrow = '<i></i>';
            let cls = 'last';
            let children = item.children;
            subText = getSubText(item);
            let path = menuItemUrlMap[item.id];
            if (!path) {
                path = menuItemUrlMap[item.id] = buildMenuItemUrl(item);
            }
            if (parentPath && path.indexOf(parentPath) !== 0) {
                let selfFileName = getFileNameById(item.id);
                let parentFileName = getFileNameById(item.pid);
                if (selfFileName !== parentFileName) {
                    if (path.indexOf('#') > 0) {
                        path = path.split('#')[0] + '?ref=' + encodeURIComponent(parentPath) + '#' + path.split('#')[1];
                    } else {
                        // path = path + '?ref=' + encodeURIComponent(parentPath)
                    }
                }
            }
            if (children && children.length) {
                let items = createSubMenuItemHTMLStr(children, level + 1, path);
                ul = `<ul>${items}</ul>`;
                arrow = '<i class="ic-chevron-right pdui-font"></i>';
                cls = 'has-children';
            }
            let typeClass = item.kindString ? 'tsd-kind-' + item.kindString.toLocaleLowerCase().replace(' ', '-') : '';
            cls += ' ' + getClass(item.flags) + (item.inheritedFrom ? ' isInherited' : '');
            li += `<li class="li ${level > 1 ? 'closed' : 'open'} ${typeClass}" level="${level}">
                        <div class="li-con tsd-kind-icon ${cls}" data-id="${item.id || ''}"
                            data-pid="${item.pid || ''}" data-name="${item.name.toLocaleLowerCase()}" data-path="${path}">
                            ${arrow}
                            <div class="name">${item.name}</div>
                            <div class="text" title="${subText.replace(/\"/, '&quot;')}">${subText}</div>
                        </div>
                        ${ul}
                    </li>`;
        }
        return li;
    }

    function createMenuItemPid(data: any[], level = 1, pid = 0, reference = false) {
        for (let item of data) {
            let children = item.children;
            if (!children) {
                children = getSubMenuItems(item);
                if (children.length) {
                    item.children = children;
                    for (let it of children) {
                        buildAllMenuItems(it);
                    }
                }
            }
            if (!reference) {
                item.pid = pid;
            }
            let isReference = item.type && item.type.type === 'reference' && item.type.id;
            if ((!children || !children.length) && isReference) {
                let obj = _.find(allMenuItems, ['id', item.type.id]);
                if (obj.children && obj.kindString === 'Interface') {
                    if (false && isRecursed(item, obj.id)) {
                        console.error(item, obj)
                    } else {
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

    function findMenuItemById(id: any) {
        return menuItemMap[id] || _.find(allMenuItems, ['id', parseInt(id, 10)]);
    }

    function getSubMenuItems(data: any): any[] {
        try {
            if (data.type.elementType.declaration.children.length) {
                return _.orderBy(data.type.elementType.declaration.children, 'name', 'asc');
            }
        } catch (err) {
        }
        try {
            if (data.type.declaration.children.length) {
                return _.orderBy(data.type.declaration.children, 'name', 'asc');
            }
        } catch (err) {
        }
        try {
            if (data.type.declaration.indexSignature) {
                return getSubMenuItems(data.type.declaration.indexSignature);
            }
        } catch (err) {
        }
        return [];
    }

    function getClass(data: any) {
        if (data) {
            let className = '';
            for (let key in data) {
                if (data.hasOwnProperty(key)) {
                    className += ' ' + key
                }
            }
            return className
        } else {
            return ''
        }
    }

    function getFileNameById(id: any) {
        let data = findMenuItemById(id);
        if (data) {
            return data.sources[0].fileName;
        } else {
            return '';
        }
    }

    function getIndexSignature(indexSignature: any) {
        let subText = '';
        if (indexSignature.parameters.length === 1) {
            let key = indexSignature.parameters[0].name;
            let keyType = indexSignature.parameters[0].type.name;
            let valueType = getType(indexSignature.type, indexSignature);
            let optional = isOptional(indexSignature.parameters[0]);
            subText = `{ [${key}: ${keyType}]${optional}: ${valueType} }`;
        } else {
            console.error('unknow indexSignature', indexSignature);
        }
        return subText;
    }

    function getReflection(reflection: any) {
        let subText = '';
        if (reflection.kindString === 'Type literal') {
            if (reflection.children) {
                let a = _.map(reflection.children, (o: any) => {
                    // TODO value function ?
                    let value = getType(o.type, o);
                    return `${o.name}: ${value}`;
                });
                return `{${a.join(', ')}}`;
            } else if (reflection.indexSignature) {
                return getIndexSignature(reflection.indexSignature);
            } else if (reflection.signatures) {
                return getSignatures(reflection.signatures);
            } else {
                // TODO
                // console.warn('unknow reflection', reflection);
                subText = 'any';
            }
        } else {
            console.error('unknow reflection', reflection);
        }
        return subText;
    }

    function getSignatures(signatures: any, data?: any) {
        let subText = '';
        if (signatures.length === 1) {
            let signature = signatures[0];
            if (signature.parameters) {
                let parameters = getParameters(signature.parameters);
                subText = `(${parameters.join(', ')})`;
            } else {
                subText = '()'
            }
            // TODO
            if (signature.type.type && signature.type.type === 'reflection') {
                subText += ' => ' + getVariable(signature.type);
                data.children = signature.type.declaration.children;
            } else {
                subText += ' => ' + getType(signature.type, signature);
            }
        } else {
            console.error('unknow signatures', signatures)
        }
        return subText;
    }

    function getSubText(data: any) {
        let subText = '';
        let type = data.kindString;
        if (type === 'Property' || type === 'Variable' || type === 'Type alias') {
            subText = getType(data.type, data);
            return returnData(subText, data)
        } else if (type === 'Call signature') {
            subText = getType(data.type, data);
            return returnData(subText, data)
        } else if (type === 'Method' || type === 'Constructor') {
            subText = getSignatures(data.signatures, data);
            return returnData(subText, data)
        } else if (type === 'Function') {
            subText = getSignatures(data.signatures, data) || 'Function';
            return returnData(subText, data)
        } else if (type === 'Object literal') {
            subText = '';
            if (data.children && data.children.length) {
                subText = '{...}';
            } else {
                console.error('unknow Object', data)
            }
            return returnData(subText, data)
        } else if (type === 'Interface' || type === 'Class') {
            return type
        } else if (type === 'Constructor signature') {
            console.log(data);
            return type
        } else {
            if (type) {
                console.log(data)
            }
            return type
        }
    }

    function getType(type: any, data?: any) {
        if (data) {
            try {
                if (data.type.elementType.declaration.children.length) {
                    // data.children = _.orderBy(data.type.elementType.declaration.children, 'name', 'asc');
                    // for (let it of data.children) {
                    //     buildAllMenuItems(it);
                    // }
                    return '{...}';
                }
            } catch (err) {
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
            } catch (err) {
            }
        }
        return getVariable(type);
    }

    function getParameters(parameters: any[]) {
        return _.map(parameters, (o: any) => {
            let type = getType(o.type);
            return `${o.name}${isOptional(o)}: ${type}`;
        });
    }

    function getVariable(variable: any) {
        // TODO defaultValue
        let subText = '';
        let type = variable.type;
        if (type === 'array') {
            if (variable.elementType.name && variable.elementType.name === 'undefined') {
                subText = '[]'
            } else {
                subText = getType(variable.elementType, variable) + '[]';
            }
        } else {
            if (variable.name) {
                if (type !== 'intrinsic' && type !== 'reference' && type !== 'typeParameter') {
                    // console.warn('unknow variableType', variable)
                }
                subText = variable.name;
                if (subText === 'Array' && variable.typeArguments) {
                    if (variable.typeArguments.length === 1) {
                        subText = getType(variable.typeArguments[0], variable) + '[]';
                    } else {
                        console.error(variable)
                    }
                }
            } else if (variable.value) {
                subText = variable.value;
                if (type === 'stringLiteral') {
                    subText = '\'' + subText + '\'';
                }
                if (type !== 'stringLiteral') {
                    console.warn('unknow variableType', variable)
                }
            } else if (variable.value === '') {
                if (type !== 'stringLiteral') {
                    console.warn('unknow variableType', variable)
                }
                subText = '\'\'';
            } else {
                if (type === 'reflection') {
                    subText = getReflection(variable.declaration);
                } else if (type === 'union') {
                    let unionValue = _.map(variable.types, (o: any) => {
                        return getVariable(o)
                    });
                    subText = unionValue.join(' | ');
                } else if (type === 'tuple') {
                    let a = _.map(variable.elements, 'name');
                    subText = `[${a.join(', ')}]`;
                } else {
                    console.error('unknow variable', variable)
                }
            }
        }
        return subText;
    }

    function handleData(data: any) {
        let trData: any[] = [];
        for (let item of data.children) {
            let fileName = item.sources[0].fileName;
            let fileNamePrefix = fileName.split('/')[0];
            let flag = true;
            for (let it of trData) {
                if (it.name === fileNamePrefix) {
                    flag = false
                }
            }
            if (flag) {
                trData.push({
                    name: fileNamePrefix,
                    kindString: '',
                    children: []
                })
            }
            if (item.kindString === 'Class') {
                for (let it of trData) {
                    if (it.name === fileNamePrefix) {
                        it.children.push(item)
                    }
                }
            } else {
                for (let it of trData) {
                    if (it.name === fileNamePrefix) {
                        for (let subIt of it.children) {
                            if (subIt.sources[0].fileName === fileName) {
                                if (!subIt.children) {
                                    subIt.children = []
                                }
                                subIt.children.push(item)
                            }
                        }
                    }
                }
            }
        }
        trData = orderBy(trData);
        for (let it of trData) {
            buildAllMenuItems(it);
        }
        return trData;
    }

    function isOptional(o: any) {
        return o.flags && o.flags.isOptional ? '?' : ''
    }

    function isRecursed(item: any, id: number): boolean {
        if (item.id === id) {
            return true;
        } else {
            let obj = _.find(allMenuItems, ['id', item.pid]);
            return obj ? isRecursed(obj, id) : false;
        }
    }

    function orderBy(data: any[]) {
        for (let item of data) {
            if (item.children && item.children.length) {
                item.children = orderBy(item.children)
            }
        }
        return _.orderBy(data, 'name', 'asc');
    }

    function returnData(subText: any, data: any) {
        if (subText) {
            if (resultMap[subText]) {
                resultMap[subText].push(data)
            } else {
                resultMap[subText] = [data]
            }
            // console.log('%c' + subText, 'color:green', data);
            return subText
        } else {
            console.error(data);
            return data.kindString
        }
    }
})();
