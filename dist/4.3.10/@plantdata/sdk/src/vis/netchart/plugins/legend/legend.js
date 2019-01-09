"use strict";var __extends=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(exports,"__esModule",{value:!0});var $=require("jquery"),lodash_1=require("lodash"),plugin_1=require("../plugin"),common_1=require("../../../../common/common"),PdVisPluginLegend=function(t){function e(e){var n=t.call(this,e)||this;return n.colorMap={},n}return __extends(e,t),e.assignColor=function(t,n,i){void 0===n&&(n={}),void 0===i&&(i=e.defaultSettings.color);for(var s=lodash_1.cloneDeep(t),o=lodash_1.remove(s,"color"),a=0,r=o;a<r.length;a++){var d=r[a];n[d.key]=d.color}var l=lodash_1.flatMap(o,"color"),c=lodash_1.difference(i,l);c=lodash_1.concat(c,l);for(var u=0,g=s;u<g.length;u++){var d=g[u],h=Object.keys(n).length%c.length,p=n[d.key]||c[h];n[d.key]=p,d.color=p}return lodash_1.concat(o,s)},e.prototype.getAvailableData=function(){var t=this;return lodash_1.filter(this.settings.data,function(e){return t.filter(e)})},e.prototype.getData=function(){return this.settings.data},e.prototype.replaceData=function(t){this.updateData(t),this.legendDraw()},e.prototype.updateData=function(t){this.settings.data=t,this.initData()},e.prototype.bindEvent=function(){var e=this;t.prototype.bindEvent.call(this),this.addEvent("beforedraw",function(){e.legendDraw()});var n=function(t){i.settings.events.hasOwnProperty(t)&&i.$el.on(t,".pdvis-legend-item",function(n){e.settings.events[t](n),e.legendUpdate()})},i=this;for(var s in this.settings.events)n(s)},e.prototype.buildLegend=function(t,e){e.html("");for(var n=0,i=t;n<i.length;n++){var s=i[n];e.append(this.buildLegendItem(s))}},e.prototype.buildLegendItem=function(t){var e="reduce"!==t.status?"active":"inactive";0===lodash_1.filter(this.settings.data,["status","reduce"]).length&&(e="");var n=t.hidden?"off":"on";lodash_1.find(this.settings.data,function(t){return t.hidden})||(n="");var i=this.filter(t)?"":"disabled",s=["pdvis-legend-item","pdvis-legend-item-"+t.key,e,n,i,"reduce"===t.status?"vague":""],o=$('<div class="'+s.join(" ")+'"></div>'),a=t.color;return o.html('<i style="background: '+a+";border-color: "+a+'"></i><span>'+t.value+"</span>")},e.prototype.created=function(){var e=this,n={buildLegend:function(t,n){e.buildLegend(t,n)},events:{click:function(t){var n=$(t.currentTarget),i=n.index();e.settings.data[i].hidden=!e.settings.data[i].hidden,n.toggleClass("off")},dblclick:function(t){var n=$(t.currentTarget),i=n.index();e.settings.data=lodash_1.flatMap(e.settings.data,function(t,e){return t.hidden=e!==i,t}),n.removeClass("off").siblings().addClass("off")},mouseenter:function(t){var n=$(t.currentTarget),i=n.index();e.settings.data=lodash_1.flatMap(e.settings.data,function(t,e){return t.status=e===i?"normal":"reduce",t}),n.addClass("active").siblings().addClass("inactive")},mouseleave:function(t){var n=$(t.currentTarget);e.settings.data=lodash_1.flatMap(e.settings.data,function(t,e){return t.status="",t}),n.removeClass("active inactive").siblings().removeClass("active inactive")}}};this.settings=$.extend(!0,{},n,this.settings),t.prototype.created.call(this)},e.prototype.initData=function(){for(var t=0,n=this.settings.data;t<n.length;t++){var i=n[t];i.hidden=i.hidden||!1}this.settings.auto&&(this.colorMap||(this.colorMap={}),this.settings.data=e.assignColor(this.settings.data,this.colorMap,this.settings.color))},e.prototype.initSettings=function(n){return $.extend(!0,{},t.prototype.initSettings.call(this,e.defaultSettings),n)},e.prototype.initTemplate=function(){var t="图例",e="",n="pdvis-legend-column-"+this.settings.columns,i=100*this.settings.columns+17+"px",s=$('<div class="pdvis-legend '+n+' " style="width:'+i+'"></div>');return this.buildPluginTemplate(s,e,t)},e.prototype.legendDraw=function(){this.settings.buildLegend(this.settings.data,this.$el),this.legendUpdate()},e.prototype.mounted=function(){t.prototype.mounted.call(this),this.initData(),this.legendDraw(),this.bindEvent()},e.prototype.unbindEvent=function(){t.prototype.unbindEvent.call(this);for(var e in this.settings.events)this.settings.events.hasOwnProperty(e)&&this.$el.off(e,".pdvis-legend-item")},e.defaultSettings={side:"bottom",isFloat:!0,auto:!0,columns:1,color:common_1.PdCommonUtils.colorBase.concat(common_1.PdCommonUtils.colorEx),data:[],showAllLegend:!1},e}(plugin_1.PdVisPlugin);exports.PdVisPluginLegend=PdVisPluginLegend;