"use strict";var __extends=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(exports,"__esModule",{value:!0});var lodash_1=require("lodash"),index_1=require("../index"),PdVisPluginLinkLegend=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.legendIds=[],e}return __extends(e,t),e.prototype.getPluginType=function(){return"linkLegend"},e.prototype.bindEvent=function(){var e=this;this.addEvent("linklegendupdate",function(t){lodash_1.isEqual(t.legends,e.settings.data)||e.replaceData(t.legends)}),this.addEvent("beforedraw",function(){e.container.getData()&&(e.linkData=e.container.getData().links)},this.container,"link"),t.prototype.bindEvent.call(this)},e.prototype.buildLegendItem=function(e){var n=t.prototype.buildLegendItem.call(this,e);return n.addClass("pdvis-legend-link-item"),e.dashed&&n.addClass("pdvis-legend-item-dashed"),n},e.prototype.filter=function(t){return!!this.settings.showAllLegend||lodash_1.indexOf(this.legendIds,t.key)>=0},e.prototype.initTemplate=function(){return t.prototype.initTemplate.call(this).addClass("pdvis-link-legend")},e.prototype.legendDraw=function(){if(this.linkData){var e=lodash_1.map(this.linkData,"attId");this.legendIds=lodash_1.uniq(e),t.prototype.legendDraw.call(this)}},e.prototype.legendUpdate=function(){this.container.updateLinkLegend(this.settings.data),this.container.updateChart()},e.prototype.mounted=function(){this.container.getData()&&(this.linkData=this.container.getData().links),t.prototype.mounted.call(this)},e}(index_1.PdVisPluginLegend);exports.PdVisPluginLinkLegend=PdVisPluginLinkLegend;