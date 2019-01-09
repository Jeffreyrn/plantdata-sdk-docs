"use strict";var __extends=this&&this.__extends||function(){var t=function(i,a){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var a in i)i.hasOwnProperty(a)&&(t[a]=i[a])})(i,a)};return function(i,a){function s(){this.constructor=i}t(i,a),i.prototype=null===a?Object.create(a):(s.prototype=a.prototype,new s)}}();Object.defineProperty(exports,"__esModule",{value:!0});var $=require("jquery"),lodash_1=require("lodash"),container_1=require("../container/container"),PdVisChart=function(t){function i(){var i=null!==t&&t.apply(this,arguments)||this;return i.historyCursor=-1,i.inLoading=!1,i.toolbarEnable=!1,i}return __extends(i,t),i.prototype.addData=function(t,i){this.drawNewData(t,i)},i.prototype.addViewPanel=function(t,i,a){$.extend(!0,a,{data:{type:i}});var s=this.addMainPanel(t,a);this.view=this.view||{},this.view[i]=s,this.$el.toggleClass("pdvis-view-multi",this.mainPanel.getChildLength()>1)},i.prototype.back=function(){this.historyCursor>0&&this.goHistory(this.historyCursor-1)},i.prototype.clearData=function(){this.setData(null)},i.prototype.fullscreen=function(){this.$el.toggleClass("fullscreen"),this.dispatch("fullscreen",this.eventData)},i.prototype.getHistoryData=function(){this.historyList||(this.historyList=[]),this.historyCursor||(this.historyCursor=0);var t=[];for(var i in this.historyList)parseInt(i,10)<=this.historyCursor&&t.push(this.historyList[i]);return t},i.prototype.getHistory=function(t){return void 0===t&&(t=this.historyCursor),this.historyList[t]},i.prototype.getLoadParams=function(){return this.loadParams},i.prototype.goHistory=function(t){this.historyCursor=t;var i=this.historyList[this.historyCursor];this.drawCacheData(i)},i.prototype.showView=function(t){this.mainPanel.activeChild(this.view[t])},i.prototype.showViewPage=function(t){this.mainPanel.activeChildPage(this.view[t])},i.prototype.updateChart=function(){this.updateData(),this.updateStyle(),this.dispatch("chartupdate",this.eventData)},i.prototype.ajaxLoad=function(t,i){var a=this;return this.inLoading?Promise.reject(new Error("数据正在加载中")):this.dispatch("beforeload",{loadParams:i})?(this.dispatch("cancelload",{status:"cancel"}),Promise.reject(new Error("请求被终止"))):(this.inLoading=!0,t(this,i).then(function(t){return a.inLoading=!1,a.dispatch("loadsuccess",{status:"success"}),a.drawNewData(t,i),t},function(t){return a.inLoading=!1,a.dispatch("loadfailed",{status:"failed"}),t}))},i.prototype.bindEvent=function(){var i=this;t.prototype.bindEvent.call(this),this.on("resize",function(){i.resize()})},i.prototype.buildHistoryData=function(){return{loadParams:this.loadParams,data:lodash_1.cloneDeep(this.data)}},i.prototype.cacheData=function(){this.cacheList||(this.cacheList=[]);var t=this.buildHistoryData();this.cacheList.push(t);var i=this.getHistoryData();i.push(t),this.historyList=i,this.historyCursor++},i.prototype.draw=function(){this.dispatch("beforedraw",{data:this.data}),this.updateChart()},i.prototype.drawCacheData=function(t){this.clearData(),this.setData(lodash_1.cloneDeep(t.data)),this.loadParams=t.loadParams,this.dispatch("loadParamsUpdate",{loadParams:this.loadParams}),this.draw()},i.prototype.drawNewData=function(t,i){this.settings.beforeAddNewData&&(t=this.settings.beforeAddNewData(t,i)),this.loadParams=i,this.setData(t),this.preprocessData(),this.cacheData(),this.dispatch("loadParamsUpdate",{loadParams:this.loadParams}),this.draw()},i.prototype.mounted=function(){t.prototype.mounted.call(this),this.initChart(),this.bindEvent()},i.prototype.preprocessData=function(){},i.prototype.setData=function(t){this.data=t},i}(container_1.PdContainer);exports.PdVisChart=PdVisChart;