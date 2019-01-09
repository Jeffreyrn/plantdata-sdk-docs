"use strict";var __extends=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(exports,"__esModule",{value:!0});var $=require("jquery"),lodash_1=require("lodash"),utils_1=require("../../../../utils/utils"),stats_netchart_bar_tool_1=require("./stats-netchart-bar-tool"),PdSDKPluginStatsEntityConcept=function(t){function e(e){return t.call(this,e)||this}return __extends(e,t),e.prototype.activeBar=function(t){var e=this.settings.netChart.getAvailableData();if(e){var n=lodash_1.map(e.links,"id");this.settings.netChart.setReducedLink(n);var r=this.data[t].ids;if(r.length){for(var s=[],i=0,a=r;i<a.length;i++){var o=a[i];s.push(o.toString())}this.settings.netChart.setEmphasisNode(s)}else{var u=lodash_1.map(e.nodes,"id");this.settings.netChart.setReducedNode(u)}}},e.prototype.bindEvent=function(){var e=this;t.prototype.bindEvent.call(this),this.addEvent("beforedraw",function(){Object.keys(e.settings.rule).length&&(e.inactiveBar(),e.rendererData())},this.settings.netChart)},e.prototype.buildRequest=function(){var t=this.settings.ajaxSettings,e=$.extend(!0,{size:6},t.formData);e.kgName=this.settings.kgName;var n=$.extend(!0,{},t.formData,{entityIds:this.getRelatedNodeIds(),returnType:1}),r={url:t.baseUrl+"graph/stat/entity/count/group/by/concept",type:"POST",el:this.$el[0],data:n};return r=$.extend(!0,{},r,t),r.url=utils_1.PdSDKUtils.buildUrl(r.url,e),r},e.prototype.createEditForm=function(){return t.prototype.createEditForm.call(this).addClass("pdsdk-stats-entity-concept")},e.prototype.getRelatedNodeIds=function(){for(var t=this.settings.netChart.getData(),e=t?t.nodes:[],n=[],r=0,s=e;r<s.length;r++){var i=s[r];i.classId&&n.push(i.id)}return n},e.prototype.initSettings=function(n){var r=$.extend(!0,{},t.prototype.initSettings.call(this,e.defaultSettings),n);return r.rule&&(r.rule.xAxis||(r.rule.xAxis=r.xAxisOptions[0].value),r.rule.yAxis||(r.rule.yAxis=r.yAxisOptions[0].value)),r},e.defaultSettings={xAxisOptions:[{value:"concept",label:"所有概念的实体"}]},e.type="statsEntityConcept",e.typeName="计算节点类型",e}(stats_netchart_bar_tool_1.PdSDKPluginStatsNetChartBarTool);exports.PdSDKPluginStatsEntityConcept=PdSDKPluginStatsEntityConcept;