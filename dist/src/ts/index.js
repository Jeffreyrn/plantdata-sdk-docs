var Index = /** @class */ (function () {
    function Index() {
        this.editType = 'codeMirror';
        this.pageReady = false;
        this.init();
    }
    Index.vsSupport = function () {
        var userAgent = navigator.userAgent;
        return !(userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 && userAgent.indexOf('Opera') < 0);
    };
    Index.updateTabPos = function () {
        if (location.hash) {
            var $a = $('a[href="' + location.hash + '"]');
            $a.parent().trigger('click');
            var $p = $a.closest('.pdui-tab-page-item');
            if ($p.length) {
                var id = $p.attr('id');
                $('a[href="#' + id + '"]').parent().trigger('click');
            }
        }
    };
    Index.prototype.showApi = function () {
        var path = localStorage.getItem('path');
        if (path) {
            $('.api-frame iframe').attr('src', 'api/' + path);
        }
    };
    Index.prototype.init = function () {
        var _this = this;
        // this.sw();
        Index.updateTabPos();
        if (Index.vsSupport()) {
            this.editType = 'vs';
            require.config({ paths: { 'vs': 'assets/vs' } });
            $(window).on('resize', function () {
                _this.layout();
            });
        }
        else {
            $('#editor-change').addClass('hide');
        }
        setTimeout(function () {
            PdUISelect.setValue($('#editor-change'), _this.editType);
        }, 0);
        $('[data-gallery]').each(function (i, v) {
            var $v = $(v);
            var path = $v.attr('data-gallery');
            _this.buildGallery($v, path);
        });
        this.bindEvent();
        this.showApi();
    };
    Index.prototype.bindEvent = function () {
        var _this = this;
        var api = $('#api-frame');
        if (api.length) {
            api.on('load', function () {
                var link = $('#api-frame')[0].contentWindow.location.href;
                localStorage.setItem('path', link.split('/api/')[1]);
            });
            api[0].contentWindow.addEventListener('hashchange', function () {
                var link = api[0].contentWindow.location.href;
                localStorage.setItem('path', link.split('/api/')[1]);
            });
            window.addEventListener('storage', function (e) {
                if (e.key === 'path') {
                    _this.showApi();
                }
            }, false);
        }
        $('.demo-control').on('click', function (event) {
            $(event.currentTarget).parent().toggleClass('on');
            _this.resetEditor($(event.currentTarget).closest('.demo-code'));
        });
        $('.demo-btn-reset').on('click', function (event) {
            $(event.currentTarget).closest('.demo-code').find('[demo-tab]').each(function (i, v) {
                var coder = $(v).data('coder');
                var code = _.unescape($(v).find('.demo-default').html().trim());
                if (_this.editType === 'vs') {
                    coder.setValue(code);
                }
                else {
                    coder.doc.setValue(code);
                }
            });
        });
        $('.demo-btn-run').on('click', function (event) {
            var message = {};
            if (document.body.clientWidth < 1680) {
                $(event.currentTarget).closest('.demo-code').parent().addClass('on');
            }
            $(event.currentTarget).closest('.demo-code').find('[demo-tab]').each(function (i, v) {
                var coder = $(v).data('coder');
                var language = $(v).attr('demo-tab');
                if (_this.editType === 'vs') {
                    message[language] = coder.getValue().trim();
                }
                else {
                    message[language] = coder.doc.getValue().trim();
                }
            });
            var iframe = $(event.currentTarget).closest('.demo-item').find('iframe')[0];
            iframe.contentWindow.postMessage(JSON.stringify(message), '*');
        });
        $('.demo-btn-fullscreen').on('click', function (event) {
            $(event.currentTarget).closest('.demo-code').toggleClass('on');
            _this.resetEditor($(event.currentTarget).closest('.demo-code'));
        });
        $('.demo-tabs a[href]').on('click', function () {
            setTimeout(function () {
                _this.buildCoder();
            }, 30);
        });
    };
    Index.prototype.resetEditor = function ($code) {
        var _this = this;
        $code.find('[demo-tab]').each(function (i, v) {
            var code = _.unescape($(v).find('.demo-default').html());
            var coder = $(v).data('coder');
            coder = coder.doc || coder;
            if (coder) {
                code = coder.getValue().trim();
            }
            $(v).find('.CodeMirror').remove();
            $(v).find('.monaco-editor').remove();
            _this.updateCoder($(v), code);
        });
    };
    Index.prototype.onCoderChange = function (coder) {
        this['indexService'].editType = coder;
        this['indexService'].buildCoder();
    };
    Index.prototype.buildCoder = function () {
        var _this = this;
        var $container = $('.pdui-tab-page-item.active .active.demo-item');
        PdUIAjax.toggleLoadingStatus($container[0], false);
        PdUIAjax.toggleLoadingStatus($container[0], true);
        this.pageReady = true;
        var inLoading = 0;
        var $iframe = $container.find('iframe');
        if (!$iframe.attr('src')) {
            $iframe.attr('src', $iframe.attr('page-src'));
            this.pageReady = false;
        }
        clearInterval(this.interval);
        this.interval = setInterval(function () {
            if (_this.pageReady && inLoading === 0) {
                PdUIAjax.toggleLoadingStatus($container[0], false);
                clearInterval(_this.interval);
            }
        }, 150);
        $container.find('[demo-tab]').each(function (i, v) {
            var $v = $(v);
            var $default = $v.find('.demo-default');
            var url = $default.attr('href');
            if (url) {
                inLoading++;
                var self_1 = _this;
                var id = PdCommonUtils.createId('demo-tab');
                var language = $v.attr('demo-tab');
                var cls = $v.hasClass('active') ? 'active' : '';
                var $nav = $v.attr('id', id).closest('.pdui-card').find('.pdui-tab-nav');
                if (!$nav.find('li[data-language="' + language + '"]').length) {
                    $nav.append('<li class="' + cls + '" data-language="' + language + '"><a href="#' + id + '">' + language + '</a></li>');
                }
                $.ajax(url, {
                    data: { id: id },
                    dataType: 'text',
                    success: function (data) {
                        var id1 = this.url.split('?id=')[1];
                        var $v1 = $('#' + id1);
                        $v1.find('.demo-default').html(data).attr('href', '');
                        self_1.updateCoder($v1, data);
                    },
                    complete: function (xhr, textStatus) {
                        inLoading--;
                        if (xhr.status > 400) {
                            var id2 = this.url.split('?id=')[1];
                            var $v2 = $('#' + id2);
                            self_1.updateCoder($v2);
                        }
                    }
                });
            }
            else {
                var code = _.unescape($v.find('.demo-default').html());
                var coder = $(v).data('coder');
                coder = coder.doc || coder;
                if (coder) {
                    code = coder.getValue().trim();
                }
                _this.updateCoder($v, code);
            }
        });
    };
    Index.prototype.updateCoder = function ($v, data) {
        if (data === void 0) { data = ''; }
        var language = $v.attr('demo-tab');
        if (this.editType === 'vs' && !$v.find('.monaco-editor').length) {
            $v.find('.CodeMirror').remove();
            require(['vs/editor/editor.main'], function () {
                var coder = monaco.editor.create($v[0], {
                    value: data,
                    language: language,
                    theme: 'vs-dark'
                });
                $v.data('coder', coder);
            });
        }
        else if (this.editType === 'codeMirror' && !$v.find('.CodeMirror').length) {
            $v.find('.monaco-editor').remove();
            var coder = CodeMirror($v[0], {
                mode: 'text/' + language,
                indentWithTabs: true,
                smartIndent: true,
                lineNumbers: true,
                matchBrackets: true,
                autofocus: true,
                theme: 'railscasts',
                extraKeys: { 'Alt-/': 'autocomplete' },
                hintOptions: {
                    completeSingle: false
                },
                value: data
            });
            coder.on('keyup', function (cm, event) {
                var k = event.keyCode;
                if (k >= 65 && k <= 90) {
                    cm.showHint();
                }
            });
            $v.data('coder', coder);
        }
    };
    Index.prototype.layout = function () {
        $('.monaco-editor').each(function (i, v) {
            var $container = $(v).parent();
            var coder = $container.data('coder');
            if (coder) {
                coder.layout({
                    width: $container.width(),
                    height: $container.height()
                });
            }
        });
    };
    Index.prototype.buildGallery = function ($container, path) {
        var $page = $container.children('.pdui-tab').children('.pdui-tab-page');
        $container.find('.demo-tabs>li>a').each(function (i, v) {
            var $a = $(v);
            var type = $a.attr('demo-type');
            var cls = $a.parent().hasClass('active') ? 'active' : '';
            $a.attr('href', '#tab-' + path + '-' + type);
            var html = "\n                <div class=\"pdui-tab-page-item " + cls + " demo-item\" id=\"tab-" + path + "-" + type + "\">\n                    <div class=\"\">\n                        <div class=\"demo-code\">\n                            <div class=\"demo-run\">\n                                <button class=\"pdui-btn pdui-btn-sm pdui-btn-primary demo-btn-fullscreen\">\n                                    <span class=\"fullscreen\">\u5168\u5C4F</span>\n                                    <span class=\"auto\">\u53D6\u6D88\u5168\u5C4F</span>\n                                </button>\n                                <button class=\"pdui-btn pdui-btn-sm pdui-btn-primary-outline demo-btn-reset\">\n                                    \u91CD\u7F6E\n                                </button>\n                                <button class=\"pdui-btn pdui-btn-sm pdui-btn-primary demo-btn-run\">\n                                    \u8FD0\u884C\n                                </button>\n                            </div>\n                            <div class=\"pdui-card\">\n                                <div class=\"pdui-card-head\">\n                                    <ul class=\"pdui-tab-nav pdui-tab-nav-primary\">\n\n                                    </ul>\n                                </div>\n                                <div class=\"pdui-card-body\">\n                                    <div class=\"pdui-tab-page\">\n                                        <div class=\"pdui-tab-page-item active\" demo-tab=\"javascript\">\n                                            <code class=\"demo-default\" href=\"./gallery/" + path + "/js/" + type + ".js\">\n                                            </code>\n                                        </div>\n                                        <div class=\"pdui-tab-page-item\" demo-tab=\"html\">\n                                            <code class=\"demo-default\" href=\"./gallery/" + path + "/html/" + type + ".html\">\n                                            </code>\n                                        </div>\n                                        <div class=\"pdui-tab-page-item\" demo-tab=\"css\">\n                                            <code class=\"demo-default\" href=\"./gallery/" + path + "/css/" + type + ".css\">\n                                            </code>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"demo-control\"><i class=\"icon pdui-font ic-chevron-left\"></i></div>\n                        <div class=\"demo-result\">\n                            <iframe page-src=\"./gallery/" + path + "/" + type + ".html?init=1\" frameborder=\"0\"></iframe>\n                        </div>\n                    </div>\n                </div>";
            $page.append(html);
        });
    };
    Index.prototype.sw = function () {
        if ('serviceWorker' in navigator && location.protocol === 'https:') {
            navigator.serviceWorker.register('/plantdata-sdk/sw.js?t=' + new Date().getTime(), { scope: '/plantdata-sdk/' }).then(function (reg) {
                if (reg.installing) {
                    console.log('Service worker installing');
                }
                else if (reg.waiting) {
                    console.log('Service worker installed');
                }
                else if (reg.active) {
                    console.log('Service worker active');
                }
            }).catch(function (error) {
                // registration failed
                console.log('Registration failed with ' + error);
            });
        }
    };
    return Index;
}());
$(function () {
    window['indexService'] = new Index();
});

//# sourceMappingURL=index.js.map
