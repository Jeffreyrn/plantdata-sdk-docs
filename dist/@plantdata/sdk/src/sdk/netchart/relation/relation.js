"use strict";var __extends=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function s(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(s.prototype=n.prototype,new s)}}();Object.defineProperty(exports,"__esModule",{value:!0});var $=require("jquery"),lodash_1=require("lodash"),netchart_1=require("../netchart"),connects_1=require("../plugins/connects/connects"),stats_1=require("../plugins/stats/stats"),relation_1=require("../plugins/model/relation"),common_1=require("../../../common/common"),filter_1=require("../plugins/filter/filter"),PdSDKRelation=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.defaultType="relation",e}return __extends(e,t),e.prototype.buildFilter=function(e){var n=t.prototype.buildFilter.call(this,[{key:"distance",label:"设定分析步长",selected:3,options:[3,4,5,6],customEnable:!0,index:0}]);return filter_1.PdSDKPluginFilter.mergeFilterSettings(n,e)},e.prototype.buildLoaderParams=function(e){var n=t.prototype.buildLoaderParams.call(this,e);if("dblClick"===e.$source){var s=t.prototype.buildGraphLoaderParams.call(this,e);return $.extend(!0,n,s)}e.$type="relation";var i=lodash_1.map(e.nodes,"id"),o=this.settings.loaderSettings.ajaxSettings,r=$.extend({kgName:this.settings.loaderSettings.kgName},o.queryData),a=$.extend({isInherit:!this.settings.showAllSchemaOptions},o.formData);if(a.ids=i,a.connectsCompute=this.settings.connects.enable!==!1,a.statsCompute=this.settings.stats.enable!==!1,this.filter){var l=this.filter.getFilterOptions();$.extend(a,l)}this.stats&&(a.statsConfig=this.stats.getStatsConfig());var d={queryData:r,formData:a,url:o.url||o.baseUrl+"network/relation"};return $.extend(!0,n,d)},e.prototype.destroyPlugins=function(){t.prototype.destroyPlugins.call(this),this.stats&&this.stats.destroy(),this.connects&&this.connects.destroy(),this.relation&&this.relation.destroy()},e.prototype.graphInitSuccess=function(e){if(t.prototype.graphInitSuccess.call(this,e),e=e.entities,e&&e.length&&e.length>1){for(var n=common_1.PdCommonUtils.createId("relation-"),s=e.splice(0,3),i=0,o=s;i<o.length;i++){var r=o[i];r=this.transferNode2Param(r)}this.load({id:n,nodes:s},"init-relation")}},e.prototype.initNetChart=function(){t.prototype.initNetChart.call(this),this.netChart.$el.addClass("pdsdk-relation")},e.prototype.initPlugins=function(){var e=this;this.settings.advancedPrompt=$.extend(!0,{},{settings:{positiveBtn:{onclick:function(t){var n=t.getTagData();if(n&&n.length>=2){for(var s=[],i=0,o=n;i<o.length;i++){var r=o[i];s.push({id:r.id})}e.load({id:"",nodes:s},"user-relation"),t.closeDialog()}else common_1.PdCommonUtils.error("关联分析至少需要两个节点")}}}},this.settings.advancedPrompt),t.prototype.initPlugins.call(this);var n=this.settings;if(n.relation&&n.relation.enable){var s={promptSettings:{schema:this.schema,promptSettings:this.settings.promptSettings}},i=this.createSDKPluginSettings(n.relation,s);this.relation=new relation_1.PdSDKPluginRelation(i)}if(n.stats&&n.stats.enable){var s={schema:this.schema},i=this.createSDKPluginSettings(n.stats,s);this.stats=new stats_1.PdSDKPluginStats(i)}if(n.connects&&n.connects.enable){var i=this.createSDKPluginSettings(n.connects);this.connects=new connects_1.PdSDKPluginConnects(i)}},e.prototype.initSettings=function(n){return $.extend(!0,{},t.prototype.initSettings.call(this,e.defaultSettings),n)},e.prototype.updateFixedNodes=function(){var t=this.netChart,e=t.loadParams,n=t.data;if(e)if("dblClick"===e.$source)this.updateGraphLoadParams();else if(n.nodes&&n.nodes.length){if(t.fixedNodes=[],e.nodes)for(var s=0,i=0,o=e.nodes;i<o.length;i++){var r=o[i],a=r.id?"id":"name";e.nodes[s]=lodash_1.find(n.nodes,[a,r[a].toString()])||n.nodes[s],t.fixedNodes.push(e.nodes[s]),s++}t.fixedNodes=lodash_1.compact(t.fixedNodes)}},e.defaultSettings={stats:{enable:!0},connects:{enable:!0,settings:{mode:"click"}},relation:{enable:!0,settings:{active:!0}},netChartSettings:{leftPanel:{active:!0,mode:"fixed"}},contextmenu:{enable:!0,settings:{menu:{"sub-graph":{enable:!1},"node-focus-to":{enable:!1}}}},filter:{settings:{editItemSettings:[{key:"hyponymyDistance",disabled:!0}]}}},e}(netchart_1.PdSDKNetChart);exports.PdSDKRelation=PdSDKRelation;