"use strict";var __extends=this&&this.__extends||function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function s(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(s.prototype=i.prototype,new s)}}();Object.defineProperty(exports,"__esModule",{value:!0});var $=require("jquery"),lodash_1=require("lodash"),page_1=require("../../../vis/netchart/plugins/page/page"),netchart_1=require("../netchart"),stats_chart_1=require("../plugins/stats/stats-chart/stats-chart"),custom_1=require("../plugins/model/custom"),stats_1=require("../plugins/stats"),filter_1=require("../plugins/filter/filter"),PdSDKCustom=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.defaultType="custom",e}return __extends(e,t),e.prototype.loadParamsUpdate=function(e){t.prototype.loadParamsUpdate.call(this,e);var i=this.netChart.fixedNodes;i&&i.length&&this.infobox.load(i[0])},e.prototype.buildFilter=function(e){var i=t.prototype.buildFilter.call(this,[{key:"distance",label:"设定分析步长",selected:2,options:[1,2,3,4],customEnable:!0,index:0}]);return filter_1.PdSDKPluginFilter.mergeFilterSettings(i,e)},e.prototype.buildLoaderParams=function(e){var i=t.prototype.buildLoaderParams.call(this,e);e.$type="custom";var s=[];e.nodes?s=lodash_1.map(e.nodes,"id"):e.id&&(s=[e.id],e.nodes=[{id:e.id}]);var a=this.settings.loaderSettings.ajaxSettings,n=$.extend({kgName:this.settings.loaderSettings.kgName},a.queryData),r=$.extend({isRelationMerge:!1,isInherit:!this.settings.showAllSchemaOptions,hyponymyDistance:6},a.formData);if(this.filter){var o=this.filter.getFilterOptions();$.extend(r,o),"merge"===e.$source&&(r.distance=1),"dblClick"===e.$source&&("0"!==o["distance-expend"]&&(r.distance=o["distance-expend"]),delete r["distance-expend"])}if(this.timeChart){var l=lodash_1.cloneDeep(this.timeChart.getSettings());delete l.nodesShowType,$.extend(!0,r,l)}var p={};return 1===e.nodes.length?(r.id=s[0],r.isTop=!this.settings.showAllSchemaOptions,this.page&&(n.pageNo=this.page.pageNo,n.pageSize=this.page.pageSize),p={queryData:n,formData:r,url:a.url||a.baseUrl+this.settings.urlList.graph}):2===e.nodes.length?(r.start=s[0],r.end=s[1],r.isTop=!this.settings.showAllSchemaOptions,this.page&&(n.pageNo=this.page.pageNo,n.pageSize=this.page.pageSize),p={queryData:n,formData:r,url:a.url||a.baseUrl+this.settings.urlList.path}):(r.ids=s,r.isTop=!this.settings.showAllSchemaOptions,p={queryData:n,formData:r,url:a.url||a.baseUrl+this.settings.urlList.relation}),$.extend(!0,i,p)},e.prototype.destroyPlugins=function(){t.prototype.destroyPlugins.call(this),this.prompt&&this.prompt.destroy(),this.page&&this.page.destroy(),this.statsChart&&this.statsChart.destroy(),this.timeChart&&this.timeChart.destroy()},e.prototype.graphInitSuccess=function(e){t.prototype.graphInitSuccess.call(this,e),e=e.entities,e&&e.length&&this.load(this.transferNode2Param(e[0]),"init-custom")},e.prototype.initNetChart=function(){t.prototype.initNetChart.call(this),this.netChart.$el.addClass("pdsdk-custom")},e.prototype.initPlugins=function(){var e=this,i=this.settings;if(i.prompt&&i.prompt.enable){var s={promptSettings:{schema:this.schema,promptSettings:this.settings.promptSettings}},a=this.createSDKPluginSettings(i.prompt,s);this.prompt=new custom_1.PdSDKPluginCustom(a)}if(i.page&&i.page.enable){var a=this.createPluginSettings(i.page);this.page=new page_1.PdVisPluginPage(a)}if(i.contextmenu&&i.contextmenu.enable){var n=this.createSDKPluginSettings({settings:{max:10,positiveBtn:{onclick:function(t){var i=t.getTagData();e.load({id:"",nodes:i},"merge"),t.closeDialog()}}}});i.contextmenu.settings=$.extend(!0,{menu:{"sub-graph":{settings:{advancedPromptDialogSettings:n}}}},i.contextmenu.settings)}if(t.prototype.initPlugins.call(this),i.statsChart&&i.statsChart.enable){var s={schema:this.schema,kgName:i.kgName,ajaxSettings:i.ajaxSettings},a=this.createSDKPluginSettings(i.statsChart,s);this.statsChart=new stats_chart_1.PdSDKPluginStatsChart(a)}if(i.timeChart&&i.timeChart.enable){var a=this.createSDKPluginSettings(i.timeChart);this.timeChart=new stats_1.PdSDKPluginTimeChart(a)}},e.prototype.initSettings=function(i){return i=$.extend(!0,{},e.defaultSettings,i),t.prototype.initSettings.call(this,i)},e.prototype.updateFixedNodes=function(){var t=this.netChart,e=t.loadParams,i=t.data;if(e&&i.nodes&&i.nodes.length){var s=void 0;if(this.isExtend(e)){if(e.nodes)for(var a=0,n=0,r=e.nodes;n<r.length;n++){var o=r[n];s=o.id?"id":"name",e.nodes[a]=lodash_1.find(i.nodes,[s,o[s].toString()])||i.nodes[a],"merge"===e.$source&&t.fixedNodes.push(e.nodes[a]),a++}}else{if(t.fixedNodes=[],e.nodes)for(var a=0,l=0,p=e.nodes;l<p.length;l++){var o=p[l];s=o.id?"id":"name",e.nodes[a]=lodash_1.find(i.nodes,[s,o[s].toString()])||i.nodes[a],t.fixedNodes.push(e.nodes[a]),a++}t.fixedNodes=lodash_1.compact(t.fixedNodes)}}},e.defaultSettings={urlList:{graph:"app/graph/timing",path:"network/path/timing",relation:"network/relation/timing"},prompt:{enable:!0,settings:{cls:"pdvis-prompt-static"}},timeChart:{enable:!0,settings:{style:{left:"100px",right:"-40px"}}},page:{enable:!0,settings:{pageSize:20,side:"top"}},infobox:{settings:{cacheable:!1,active:!0}},infoboxSettings:{mode:"mixins",mixinsId:"right",settings:{ajaxSettings:{formData:{isRelationAtts:!1}}}},history:{enable:!0},find:{enable:!0},filter:{enable:!0},resetLayout:{enable:!0},statsChart:{enable:!1,mixinsId:"right"},mixinsSettings:{},netChartSettings:{rightPanel:{mode:"fixed",active:!0}}},e}(netchart_1.PdSDKNetChart);exports.PdSDKCustom=PdSDKCustom;