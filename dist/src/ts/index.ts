declare const PdUISelect: any;
declare const PdUIAjax: any;
declare const PdCommonUtils: any;
declare const PdUITab: any;
declare const CodeMirror: any;
declare const monaco: any;
declare const _: any;
// declare const $: any;
// declare const require: any;
type EditorType = 'codeMirror' | 'vs';

class Index {
    private editType: EditorType = 'codeMirror';
    private interval: any;
    pageReady = false;

    private static vsSupport() {
        const userAgent = navigator.userAgent;
        return !(userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 && userAgent.indexOf('Opera') < 0);
    }

    private static updateTabPos() {
        if (location.hash) {
            const $a = $('a[href="' + location.hash + '"]');
            $a.parent().trigger('click');
            const $p = $a.closest('.pdui-tab-page-item');
            if ($p.length) {
                const id = $p.attr('id');
                $('a[href="#' + id + '"]').parent().trigger('click');
            }
        }
    }

    constructor() {
        this.init();
    }

    showApi() {
        const path = localStorage.getItem('path');
        if (path) {
            $('.api-frame iframe').attr('src', 'api/' + path);
        }
    }

    private init() {
        // this.sw();
        Index.updateTabPos();
        if (Index.vsSupport()) {
            this.editType = 'vs';
            (require as any).config({paths: {'vs': 'assets/vs'}});
            $(window).on('resize', () => {
                this.layout();
            });
        } else {
            $('#editor-change').addClass('hide')
        }
        setTimeout(() => {
            PdUISelect.setValue($('#editor-change'), this.editType);
        }, 0);
        $('[data-gallery]').each((i: number, v: HTMLElement) => {
            const $v = $(v);
            const path = $v.attr('data-gallery');
            this.buildGallery($v, path);
        });
        this.bindEvent();
        this.showApi();
    }

    private bindEvent() {
        let api = $('#api-frame');
        if (api.length) {
            api.on('load', () => {
                let link = (<HTMLFrameElement>$('#api-frame')[0]).contentWindow.location.href;
                localStorage.setItem('path', link.split('/api/')[1]);
            });

            (<HTMLFrameElement>api[0]).contentWindow.addEventListener('hashchange', () => {
                let link = (<HTMLFrameElement>api[0]).contentWindow.location.href;
                localStorage.setItem('path', link.split('/api/')[1]);
            });

            window.addEventListener('storage', (e: any) => {
                if (e.key === 'path') {
                    this.showApi();
                }
            }, false);
        }
        $('.demo-control').on('click', (event) => {
            $(event.currentTarget).parent().toggleClass('on');
            this.resetEditor($(event.currentTarget).closest('.demo-code'));
        });
        $('.demo-btn-reset').on('click', (event) => {
            $(event.currentTarget).closest('.demo-code').find('[demo-tab]').each((i: number, v: HTMLElement) => {
                const coder = $(v).data('coder');
                const code = _.unescape($(v).find('.demo-default').html().trim());
                if (this.editType === 'vs') {
                    coder.setValue(code);
                } else {
                    coder.doc.setValue(code);
                }
            });
        });
        $('.demo-btn-run').on('click', (event) => {
            let message = {};
            if (document.body.clientWidth < 1680) {
                $(event.currentTarget).closest('.demo-code').parent().addClass('on');
            }
            $(event.currentTarget).closest('.demo-code').find('[demo-tab]').each((i: number, v: HTMLElement) => {
                const coder = $(v).data('coder');
                const language = $(v).attr('demo-tab');
                if (this.editType === 'vs') {
                    message[language] = coder.getValue().trim();
                } else {
                    message[language] = coder.doc.getValue().trim();
                }
            });
            const iframe = <HTMLIFrameElement>$(event.currentTarget).closest('.demo-item').find('iframe')[0];
            iframe.contentWindow.postMessage(JSON.stringify(message), '*');
        });

        $('.demo-btn-fullscreen').on('click', (event) => {
            $(event.currentTarget).closest('.demo-code').toggleClass('on');
            this.resetEditor($(event.currentTarget).closest('.demo-code'));
        });

        $('.demo-tabs a[href]').on('click', () => {
            setTimeout(() => {
                this.buildCoder();
            }, 30);
        });
    }

    resetEditor($code: JQuery) {
        $code.find('[demo-tab]').each((i: number, v: HTMLElement) => {
            let code = _.unescape($(v).find('.demo-default').html());
            let coder = $(v).data('coder');
            coder = coder.doc || coder;
            if (coder) {
                code = coder.getValue().trim();
            }
            $(v).find('.CodeMirror').remove();
            $(v).find('.monaco-editor').remove();
            this.updateCoder($(v), code);
        });
    }

    onCoderChange(coder: string) {
        this['indexService'].editType = coder;
        this['indexService'].buildCoder();
    }

    private buildCoder() {
        const $container = $('.pdui-tab-page-item.active .active.demo-item');
        PdUIAjax.toggleLoadingStatus($container[0], false);
        PdUIAjax.toggleLoadingStatus($container[0], true);
        this.pageReady = true;
        let inLoading = 0;
        const $iframe = $container.find('iframe');
        if (!$iframe.attr('src')) {
            $iframe.attr('src', $iframe.attr('page-src'));
            this.pageReady = false;
        }
        clearInterval(this.interval);
        this.interval = setInterval(() => {
            if (this.pageReady && inLoading === 0) {
                PdUIAjax.toggleLoadingStatus($container[0], false);
                clearInterval(this.interval);
            }
        }, 150);
        $container.find('[demo-tab]').each((i: number, v: HTMLElement) => {
            const $v = $(v);
            const $default = $v.find('.demo-default');
            const url = $default.attr('href');
            if (url) {
                inLoading++;
                const self = this;
                const id = PdCommonUtils.createId('demo-tab');
                const language = $v.attr('demo-tab');
                const cls = $v.hasClass('active') ? 'active' : '';
                const $nav = $v.attr('id', id).closest('.pdui-card').find('.pdui-tab-nav');
                if (!$nav.find('li[data-language="' + language + '"]').length) {
                    $nav.append('<li class="' + cls + '" data-language="' + language + '"><a href="#' + id + '">' + language + '</a></li>');
                }
                $.ajax(url, {
                    data: {id: id},
                    dataType: 'text',
                    success: function (data: any) {
                        const id1 = this.url.split('?id=')[1];
                        const $v1 = $('#' + id1);
                        $v1.find('.demo-default').html(data).attr('href', '');
                        self.updateCoder($v1, data);
                    },
                    complete: function (xhr, textStatus) {
                        inLoading--;
                        if (xhr.status > 400) {
                            const id2 = this.url.split('?id=')[1];
                            const $v2 = $('#' + id2);
                            self.updateCoder($v2);
                        }
                    }
                });
            } else {
                let code = _.unescape($v.find('.demo-default').html());
                let coder = $(v).data('coder');
                coder = coder.doc || coder;
                if (coder) {
                    code = coder.getValue().trim();
                }
                this.updateCoder($v, code);
            }
        });
    }

    private updateCoder($v: any, data = '') {
        const language = $v.attr('demo-tab');
        if (this.editType === 'vs' && !$v.find('.monaco-editor').length) {
            $v.find('.CodeMirror').remove();
            (<any>require)(['vs/editor/editor.main'], function () {
                const coder = monaco.editor.create($v[0], {
                    value: data,
                    language: language,
                    theme: 'vs-dark'
                });
                $v.data('coder', coder);
            });
        } else if (this.editType === 'codeMirror' && !$v.find('.CodeMirror').length) {
            $v.find('.monaco-editor').remove();
            const coder = CodeMirror($v[0], {
                mode: 'text/' + language,
                indentWithTabs: true,
                smartIndent: true,
                lineNumbers: true,
                matchBrackets: true,
                autofocus: true,
                theme: 'railscasts',
                extraKeys: {'Alt-/': 'autocomplete'},
                hintOptions: {
                    completeSingle: false
                },
                value: data
            });
            coder.on('keyup', function (cm: any, event: KeyboardEvent) {
                const k = event.keyCode;
                if (k >= 65 && k <= 90) {
                    cm.showHint();
                }
            });
            $v.data('coder', coder);
        }
    }

    private layout() {
        $('.monaco-editor').each((i: number, v: HTMLElement) => {
            const $container = $(v).parent();
            const coder = $container.data('coder');
            if (coder) {
                coder.layout({
                    width: $container.width(),
                    height: $container.height()
                });
            }
        });
    }

    private buildGallery($container: JQuery, path: string) {
        let $page = $container.children('.pdui-tab').children('.pdui-tab-page');
        $container.find('.demo-tabs>li>a').each((i: number, v: HTMLElement) => {
            const $a = $(v);
            const type = $a.attr('demo-type');
            const cls = $a.parent().hasClass('active') ? 'active' : '';
            $a.attr('href', '#tab-' + path + '-' + type);
            const html = `
                <div class="pdui-tab-page-item ${cls} demo-item" id="tab-${path}-${type}">
                    <div class="">
                        <div class="demo-code">
                            <div class="demo-run">
                                <button class="pdui-btn pdui-btn-sm pdui-btn-primary demo-btn-fullscreen">
                                    <span class="fullscreen">全屏</span>
                                    <span class="auto">取消全屏</span>
                                </button>
                                <button class="pdui-btn pdui-btn-sm pdui-btn-primary-outline demo-btn-reset">
                                    重置
                                </button>
                                <button class="pdui-btn pdui-btn-sm pdui-btn-primary demo-btn-run">
                                    运行
                                </button>
                            </div>
                            <div class="pdui-card">
                                <div class="pdui-card-head">
                                    <ul class="pdui-tab-nav pdui-tab-nav-primary">

                                    </ul>
                                </div>
                                <div class="pdui-card-body">
                                    <div class="pdui-tab-page">
                                        <div class="pdui-tab-page-item active" demo-tab="javascript">
                                            <code class="demo-default" href="./gallery/${path}/js/${type}.js">
                                            </code>
                                        </div>
                                        <div class="pdui-tab-page-item" demo-tab="html">
                                            <code class="demo-default" href="./gallery/${path}/html/${type}.html">
                                            </code>
                                        </div>
                                        <div class="pdui-tab-page-item" demo-tab="css">
                                            <code class="demo-default" href="./gallery/${path}/css/${type}.css">
                                            </code>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="demo-control"><i class="icon pdui-font ic-chevron-left"></i></div>
                        <div class="demo-result">
                            <iframe page-src="./gallery/${path}/${type}.html?init=1" frameborder="0"></iframe>
                        </div>
                    </div>
                </div>`;
            $page.append(html);
        });
    }

    private sw() {
        if ('serviceWorker' in navigator && location.protocol === 'https:') {
            navigator.serviceWorker.register('/plantdata-sdk/sw.js?t=' + new Date().getTime(),
                {scope: '/plantdata-sdk/'}).then(function (reg) {

                if (reg.installing) {
                    console.log('Service worker installing');
                } else if (reg.waiting) {
                    console.log('Service worker installed');
                } else if (reg.active) {
                    console.log('Service worker active');
                }

            }).catch(function (error) {
                // registration failed
                console.log('Registration failed with ' + error);
            });
        }
    }
}

$(() => {
    window['indexService'] = new Index();
});
