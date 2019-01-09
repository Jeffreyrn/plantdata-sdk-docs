"use strict";var __extends=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(exports,"__esModule",{value:!0});var $=require("jquery"),lodash_1=require("lodash"),plugin_1=require("../plugin"),clear_all_1=require("../../../../icon/clear-all"),PdSDKPluginEvent=function(t){function e(e){var n=t.call(this,e)||this;return n.eventList=[],n}return __extends(e,t),e.drawDetail=function(t){var e="";if(0===Object.keys(t.detail).length){var n="未知事件";e+='<tr><td class="pdsdk-event-detail-key" title="'+n+'"><div>'+n+'</div></td><td class="pdsdk-event-detail-value"></td></tr>'}else for(var n in t.detail)t.detail.hasOwnProperty(n)&&(e+='<tr><td class="pdsdk-event-detail-key" title="'+n+'"><div>'+n+'</div></td><td class="pdsdk-event-detail-value">'+t.detail[n]+"</td></tr>");return'<table class="event-detail">'+e+"</table>"},e.prototype.getPluginType=function(){return"event"},e.prototype.bindEvent=function(){var e=this;t.prototype.bindEvent.call(this),this.updateEventDetail(),this.rendererEvents(),this.addEvent("beforedraw",function(){e.rendererEvents(),e.updateEventDetail()}),this.addEvent("dataupdate",function(){e.updateEventDetail(),e.rendererEvents()}),this.$el.on("mouseenter",".pdsdk-event-item",function(t){var n=$(t.currentTarget).attr("data-id"),i=lodash_1.find(e.eventList,["id",n]);e.container.setEmphasisLink(i.ids||[i.id]);var a=[];a=i.fromIds&&i.toIds?lodash_1.union(i.fromIds,i.toIds):[i.from,i.to],e.container.setEmphasisNode(a),e.container.updateStyle()}).on("mouseleave",".pdsdk-event-item",function(){e.container.clearEmphasisLink(),e.container.clearEmphasisNode(),e.container.updateStyle()})},e.prototype.getVisibleEvents=function(){var t=this,e=[],n=this.container.getData().links;return n=lodash_1.filter(n,function(e){return"reduce"!==t.container.linkStatus(e)}),lodash_1.flatMap(n,function(t){t.nRInfo&&t.nRInfo.length&&lodash_1.flatMap(t.nRInfo,function(t){t.id&&e.push(t.id)})}),lodash_1.filter(this.eventList,function(t){return lodash_1.indexOf(e,t.id)>=0})},e.prototype.initSettings=function(n){return $.extend(!0,{},t.prototype.initSettings.call(this,e.defaultSettings),n)},e.prototype.initTemplate=function(){var t='<div class="pdsdk-event-title"><div class="pdsdk-event-title-container"><div><span class="pdsdk-event-time-range">-</span></div><div>发生事件总数：<span class="pdsdk-event-item-count">0</span></div></div></div>';"short"===this.settings.titleType&&(t="事件");var e=clear_all_1["default"](20),n='<div class="pdsdk-event-content"><div class="pdsdk-event-content-container"><div class="pdsdk-event-content-line"></div></div></div>';return this.buildPluginTemplate(n,e,t,"事件列表")},e.prototype.mounted=function(){t.prototype.mounted.call(this),this.bindEvent()},e.prototype.rendererEvents=function(){if(this.container.getData()){var t=this.getVisibleEvents(),e="",n=null,i=this.select(".pdsdk-event-content-container");t=lodash_1.orderBy(t,["timestamp"],["desc"]),i.find(".pdsdk-event-year-item-container").remove();var a="",d=0;for(var s in t)if(t.hasOwnProperty(s)){var o=t[s];d++,e!==o.year+""&&(e=o.year+"",n&&(n.html(a),i.append(n)),n=$('<div class="pdsdk-event-year-item-container"></div>'),a="");var r=o.date?'<div class="pdsdk-event-day">'+o.date+"</div>":"";a+='<div class="pdsdk-event-item" data-id="'+o.id+'"><div class="pdsdk-event-time"><div class="pdsdk-event-year">'+o.year+"</div>"+r+'</div><div class="pdsdk-event-pointer"><div class="pdsdk-event-pointer"></div></div>'+this.settings.drawDetail(o)+"</div>"}n&&(n.html(a),i.append(n));var l="";if(t.length){var v=lodash_1.filter(t,function(t){return!!t.date});if(v.length){var p=v[v.length-1].year+"-"+v[v.length-1].date,f=v[0].year+"-"+v[0].date;l=p+" 至 "+f}}this.select(".pdsdk-event-time-range").text(l),this.select(".pdsdk-event-item-count").text(d)}},e.prototype.updateEventDetail=function(){var t=this.container.getAvailableData();if(t){for(var e=[],n=0,i=t.links;n<i.length;n++){var a=i[n];if(a.startTime&&a.startTime.length)for(var d=0,s=0,o=a.startTime;s<o.length;s++){var r=o[s],l=$.extend(!0,{},a);l.nRInfo&&l.nRInfo[d]&&l.nRInfo[d].id&&(l.id=l.nRInfo[d].id);var v=new Date(r);l.timestamp=v.getTime(),l.year=v.getFullYear()+"",l.date=lodash_1.padStart(v.getMonth()+1+"",2,"0")+"-"+lodash_1.padStart(v.getDate()+"",2,"0"),l.oRInfo&&l.oRInfo.length&&(l.oRInfo=[l.oRInfo[d]]),l.nRInfo&&l.nRInfo.length&&(l.nRInfo=[l.nRInfo[d]]),e.push(l),d++}else{var p=$.extend(!0,{},a);p.timestamp=0,p.year="未知",p.oRInfo&&p.oRInfo.length&&(p.oRInfo=[p.oRInfo[0]]),p.nRInfo&&p.nRInfo.length&&(p.nRInfo=[p.nRInfo[0]]),e.push(p)}}for(var f=0,u=e;f<u.length;f++){var c=u[f];if(c.detail={},c.oRInfo&&c.oRInfo.length&&c.oRInfo[0].kvs)for(var h=0,m=c.oRInfo[0].kvs;h<m.length;h++){var g=m[h];c.detail[g.k]=g.v}if(c.nRInfo&&c.nRInfo.length&&c.nRInfo[0].kvs)for(var y=0,k=c.nRInfo[0].kvs;y<k.length;y++){var g=k[y];c.detail[g.k]=g.v}}for(var I=[],_=function(t){if(t.fromIds=[t.from],t.toIds=[t.to],t.ids=[t.id],lodash_1.isEmpty(t.detail))I.push(t);else{var e=lodash_1.find(I,function(e){return lodash_1.isEqual(e.detail,t.detail)&&lodash_1.isEqual(e.timestamp,t.timestamp)});e?(e.fromIds.push(t.from),e.toIds.push(t.to),e.ids.push(t.id)):I.push(t)}},R=0,E=e;R<E.length;R++){var D=E[R];_(D)}this.eventList=I}},e.prototype.unbindEvent=function(){t.prototype.unbindEvent.call(this),this.$el.off("mouseenter",".pdsdk-event-item").off("mouseleave",".pdsdk-event-item")},e.defaultSettings={side:"left",drawDetail:e.drawDetail},e}(plugin_1.PdSDKPlugin);exports.PdSDKPluginEvent=PdSDKPluginEvent;