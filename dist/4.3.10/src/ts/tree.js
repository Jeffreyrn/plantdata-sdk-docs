(function () {
    var menuItemUrlMap = {};
    var allMenuItems = []; // 78623
    var $tree = $('<div id="api-tree"></div>');
    var $visOpts;
    var startTime = new Date().getTime();
    $.getJSON('../api/json/api.json', function (data) {
        if (typeof (window['Worker']) !== 'undefined') {
            var worker_1 = new window['Worker']('../src/ts/tree_worker.js');
            worker_1.postMessage(data);
            worker_1.onmessage = function (event) {
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
                worker_1.terminate();
            };
        }
        else {
            console.log('worker is not support!');
        }
        // console.log(map);
    });
    $(function () {
        var complete = new PdUIAutocomplete({
            selector: '.autocomplete',
            theme: 'normal',
            size: 'md',
            onPrompt: function (pre, $self) {
                var arr = [];
                var $item = $('div[data-name*="' + pre.toLocaleLowerCase() + '"]');
                for (var i = 0; i < 5 && i < $item.length; i++) {
                    arr.push({ id: $($item[i]), name: $($item[i]).find('.name').text() });
                }
                return Promise.resolve(arr);
            },
            onSearch: function (data) {
                showMenuItem(data.id);
            }
        });
    });
    function calcUseTime() {
        return (new Date().getTime() - startTime) / 1000;
    }
    function showMenuItemByPath() {
        var path = localStorage.getItem('path');
        if (path && path !== 'index.html') {
            var $el = $tree.find('[data-path="' + path + '"]');
            activeMenuItem($el);
        }
    }
    function updateMenuItemVisibility() {
        var inherited = localStorage.getItem('inherited');
        var visibility = localStorage.getItem('visibility');
        var exported = localStorage.getItem('only-exported');
        if (visibility === 'private') {
            $tree.find('.isProtected,.isPrivate,.isAbstract').parent().show();
        }
        else if (visibility === 'protected') {
            $tree.find('.isProtected,.isAbstract').parent().hide();
        }
        else if (visibility === 'public') {
            $tree.find('.isProtected,.isPrivate,.isAbstract').parent().hide();
        }
        if (exported === 'false') {
            $tree.find('.li-con .li-con:not(.isExported)').parent().show();
        }
        else if (exported === 'true') {
            $tree.find('.li-con .li-con:not(.isExported)').parent().hide();
        }
        if (inherited === 'false') {
            $tree.find('.isInherited').parent().hide();
        }
        else if (inherited === 'true') {
            $tree.find('.isInherited').parent().show();
        }
    }
    function updateNavType() {
        var type = localStorage.getItem('type');
        if (type) {
            type = JSON.parse(type);
            if (type.length) {
                $visOpts.find('input[id]').each(function (i, v) {
                    var $item = $(v);
                    var id = $item.attr('id');
                    var checked = _.indexOf(type, id) >= 0;
                    $item.prop('checked', checked);
                    $tree.toggleClass(id, checked);
                });
            }
        }
    }
    function findMenuItemById(id) {
        return _.find(allMenuItems, ['id', parseInt(id, 10)]);
    }
    function bindEvent() {
        window.addEventListener('storage', function (e) {
            updateMenuItemVisibility();
            updateNavType();
            if (e.key === 'path') {
                showMenuItemByPath();
            }
        }, false);
        $tree.on('click', '.has-children, .last', function (event) {
            var $el = $(event.currentTarget);
            var $li = $el.parent();
            if ($li.hasClass('open') && $el.hasClass('active')) {
                $li.toggleClass('closed open');
            }
            else {
                showMenuItem($el);
            }
            event.stopPropagation();
            return false;
        });
        $visOpts.on('click', 'input', function (event) {
            var id = $(event.currentTarget).attr('id');
            $tree.toggleClass(id);
            var type = [];
            $visOpts.find('input:checked[id]').each(function (i, v) {
                type.push($(v).attr('id'));
            });
            localStorage.setItem('type', JSON.stringify(type));
        });
    }
    function updatePath() {
        var allDiv = $tree.find('li>div:not([data-path])');
        // console.log(allDiv.length);
        allDiv.each(function (i, v) {
            var $el = $(v);
            var selfPath = $el.attr('data-path');
            if (!selfPath) {
                var id = $el.attr('data-id');
                console.log(id);
                selfPath = menuItemUrlMap[id];
                var $parent = $el.closest('ul').prev('div');
                if ($parent) {
                    var parentPath = $parent.attr('data-path');
                    if (parentPath && selfPath.indexOf(parentPath) !== 0) {
                        var selfFileName = getFileNameById(id);
                        var parentFileName = getFileNameById($parent.attr('data-id'));
                        if (selfFileName !== parentFileName) {
                            if (selfPath.indexOf('#') > 0) {
                                selfPath = selfPath.split('#')[0] + '?ref=' + encodeURIComponent(parentPath) + '#' + selfPath.split('#')[1];
                            }
                            else {
                                // path = path + '?ref=' + encodeURIComponent(parentPath)
                            }
                        }
                    }
                }
                $el.attr('data-path', selfPath || 'index.html');
            }
        });
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
    function activeMenuItem($el) {
        var $item = $el;
        if ($el.length > 1) {
            var path_1 = $el.attr('data-path');
            $el.each(function (i, el) {
                if (!$(el).closest('ul').prev('[data-path="' + path_1 + '"]').length) {
                    $item = $(el);
                    return;
                }
            });
        }
        var li = $item.parent();
        $tree.find('.active').removeClass('active');
        $item.addClass('active');
        $tree.find('.open').addClass('closed').removeClass('open');
        if ($item.hasClass('has-children')) {
            li.toggleClass('closed open');
        }
        var parent = li.parent().closest('li');
        while (parent.length) {
            parent = parent.toggleClass('closed open').parent().closest('li');
        }
    }
    function showMenuItem($el) {
        var path = $el.attr('data-path');
        localStorage.setItem('path', path);
        activeMenuItem($el);
    }
})();

//# sourceMappingURL=tree.js.map
