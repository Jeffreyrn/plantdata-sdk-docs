declare const PdUIAutocomplete: any;

(function () {
    let menuItemUrlMap = {};
    let allMenuItems: any[] = []; // 78623
    let $tree: JQuery = $('<div id="api-tree"></div>');
    let $visOpts: JQuery;
    const startTime = new Date().getTime();
    $.getJSON('../api/json/api.json', function (data) {
        if (typeof(window['Worker']) !== 'undefined') {
            let worker = new window['Worker']('../src/ts/tree_worker.js');
            worker.postMessage(data);
            worker.onmessage = (event: any) => {
                $visOpts = $('.visible-options');
                bindEvent();
                allMenuItems = event.data.allMenuItems;
                menuItemUrlMap = event.data.menuItemUrlMap;
                $tree.html(event.data.html);
                updateMenuItemVisibility();
                updateNavType();
                // updatePath();
                console.log(calcUseTime());
                showMenuItemByPath();
                $tree.appendTo('body');
                worker.terminate();
            };
        } else {
            console.log('worker is not support!')
        }
        // console.log(map);
    });

    $(function () {
        const complete = new PdUIAutocomplete({
            selector: '.autocomplete',
            theme: 'normal',
            size: 'md',
            onPrompt: function (pre: string, $self: any) {
                let arr = [];
                let $item = $('div[data-name*="' + pre.toLocaleLowerCase() + '"]');
                for (let i = 0; i < 5 && i < $item.length; i++) {
                    arr.push({id: $($item[i]), name: $($item[i]).find('.name').text()});
                }
                return Promise.resolve(arr);
            },
            onSearch: function (data: any) {
                showMenuItem(data.id);
            }
        });
    });

    function calcUseTime() {
        return (new Date().getTime() - startTime) / 1000
    }

    function showMenuItemByPath() {
        const path = localStorage.getItem('path');
        if (path && path !== 'index.html') {
            let $el = $tree.find('[data-path="' + path + '"]');
            activeMenuItem($el);
        }
    }

    function updateMenuItemVisibility() {
        let inherited = localStorage.getItem('inherited');
        let visibility = localStorage.getItem('visibility');
        let exported = localStorage.getItem('only-exported');
        if (visibility === 'private') {
            $tree.find('.isProtected,.isPrivate,.isAbstract').parent().show();
        } else if (visibility === 'protected') {
            $tree.find('.isProtected,.isAbstract').parent().hide();
        } else if (visibility === 'public') {
            $tree.find('.isProtected,.isPrivate,.isAbstract').parent().hide();
        }
        if (exported === 'false') {
            $tree.find('.li-con .li-con:not(.isExported)').parent().show();
        } else if (exported === 'true') {
            $tree.find('.li-con .li-con:not(.isExported)').parent().hide();
        }
        if (inherited === 'false') {
            $tree.find('.isInherited').parent().hide();
        } else if (inherited === 'true') {
            $tree.find('.isInherited').parent().show();
        }
    }

    function updateNavType() {
        let type = localStorage.getItem('type');
        if (type) {
            type = JSON.parse(type);
            if (type.length) {
                $visOpts.find('input[id]').each((i: number, v: HTMLElement) => {
                    let $item = $(v);
                    let id = $item.attr('id');
                    let checked = _.indexOf(type, id) >= 0;
                    $item.prop('checked', checked);
                    $tree.toggleClass(id, checked);
                });
            }
        }
    }

    function findMenuItemById(id: any) {
        return _.find(allMenuItems, ['id', parseInt(id, 10)]);
    }

    function bindEvent() {
        window.addEventListener('storage', function (e: any) {
            updateMenuItemVisibility();
            updateNavType();
            if (e.key === 'path') {
                showMenuItemByPath();
            }
        }, false);

        $tree.on('click', '.has-children, .last', (event) => {
            let $el = $(event.currentTarget);
            let $li = $el.parent();
            if ($li.hasClass('open') && $el.hasClass('active')) {
                $li.toggleClass('closed open');
            } else {
                showMenuItem($el);
            }
            event.stopPropagation();
            return false
        });

        $visOpts.on('click', 'input', (event: JQuery.Event) => {
            const id = $(event.currentTarget).attr('id');
            $tree.toggleClass(id);
            let type: string[] = [];
            $visOpts.find('input:checked[id]').each((i: number, v: HTMLElement) => {
                type.push($(v).attr('id'));
            });
            localStorage.setItem('type', JSON.stringify(type));
        });
    }

    function updatePath() {
        let allDiv = $tree.find('li>div:not([data-path])');
        // console.log(allDiv.length);
        allDiv.each((i: number, v: HTMLDivElement) => {
            let $el = $(v);
            let selfPath = $el.attr('data-path');
            if (!selfPath) {
                let id = $el.attr('data-id');
                console.log(id);
                selfPath = menuItemUrlMap[id];
                let $parent = $el.closest('ul').prev('div');
                if ($parent) {
                    let parentPath = $parent.attr('data-path');
                    if (parentPath && selfPath.indexOf(parentPath) !== 0) {
                        let selfFileName = getFileNameById(id);
                        let parentFileName = getFileNameById($parent.attr('data-id'));
                        if (selfFileName !== parentFileName) {
                            if (selfPath.indexOf('#') > 0) {
                                selfPath = selfPath.split('#')[0] + '?ref=' + encodeURIComponent(parentPath) + '#' + selfPath.split('#')[1];
                            } else {
                                // path = path + '?ref=' + encodeURIComponent(parentPath)
                            }
                        }
                    }
                }
                $el.attr('data-path', selfPath || 'index.html');
            }
        })
    }

    function getFileNameById(id: any) {
        let data = findMenuItemById(id);
        if (data) {
            return data.sources[0].fileName;
        } else {
            return '';
        }
    }

    function activeMenuItem($el: JQuery) {
        let $item = $el;
        if ($el.length > 1) {
            let path = $el.attr('data-path');
            $el.each((i: number, el: HTMLElement) => {
                if (!$(el).closest('ul').prev('[data-path="' + path + '"]').length) {
                    $item = $(el);
                    return;
                }
            });
        }
        const li = $item.parent();
        $tree.find('.active').removeClass('active');
        $item.addClass('active');
        $tree.find('.open').addClass('closed').removeClass('open');
        if ($item.hasClass('has-children')) {
            li.toggleClass('closed open');
        }
        let parent = li.parent().closest('li');
        while (parent.length) {
            parent = parent.toggleClass('closed open').parent().closest('li');
        }
    }

    function showMenuItem($el: JQuery) {
        let path = $el.attr('data-path');
        localStorage.setItem('path', path);
        activeMenuItem($el);
    }

})();
