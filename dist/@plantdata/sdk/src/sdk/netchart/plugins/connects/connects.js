"use strict";var __extends=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function s(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(s.prototype=n.prototype,new s)}}();Object.defineProperty(exports,"__esModule",{value:!0});var $=require("jquery"),lodash_1=require("lodash"),common_1=require("../../../../common/common"),utils_1=require("../../../../vis/utils/utils"),index_1=require("../../../../ui/components/pagination/index"),plugin_1=require("../plugin"),comment_1=require("../../../../icon/comment"),keyboard_arrow_right_1=require("../../../../icon/keyboard-arrow-right"),PdSDKPluginConnects=function(e){function t(t){var n=e.call(this,t)||this;return n.hoverLinks=[],n.hoverNodes=[],n.showAll=!1,n}return __extends(t,e),t.prototype.getPluginType=function(){return"connects"},t.prototype.bindEvent=function(){var t=this;switch(e.prototype.bindEvent.call(this),this.rendererData(),this.addEvent("beforedraw",function(){t.rendererData()}),this.$el.on("mouseenter",".pdsdk-connects-content",function(e){var n=$(e.currentTarget).data("data"),s=n.nodes,o=n.edges;t.container.setEmphasisNode(s),t.container.setEmphasisLink(o),t.container.updateStyle()}),this.$el.on("click",".pdsdk-connects-content",function(e){var n=$(e.currentTarget);n.toggleClass("active"),t.showAll||n.siblings(".active").removeClass("active")}),this.$el.on("click",".pdsdk-connects-options input",function(e){t.showAll=e.currentTarget.checked,t.select(".pdsdk-connects-content").toggleClass("active",t.showAll)}),this.settings.mode){case"hover":this.$el.on("mouseleave",".pdsdk-connects-content",function(){t.container.clearEmphasisNode(),t.container.clearEmphasisLink(),t.container.updateStyle()});break;case"click":this.$el.on("mouseleave",".pdsdk-connects-content",function(){t.container.setEmphasisNode(t.hoverNodes),t.container.setEmphasisLink(t.hoverLinks),t.container.updateStyle()}),this.$el.on("click",".pdsdk-connects-content",function(e){var n=$(e.currentTarget);if(t.hoverNodes=[],t.hoverLinks=[],n.hasClass("active")){var s=n.data("data");t.hoverNodes=s.nodes,t.hoverLinks=s.edges}t.container.setEmphasisNode(t.hoverNodes),t.container.setEmphasisLink(t.hoverLinks),t.container.updateStyle()})}},t.prototype.initSettings=function(n){return $.extend(!0,{},e.prototype.initSettings.call(this,t.defaultSettings),n)},t.prototype.initTemplate=function(){var e="图解读",t=comment_1["default"](20),n='<div class="pdsdk-connects pdsdk-connects-'+this.settings.mode+'"></div>';return this.buildPluginTemplate(n,t,e)},t.prototype.mounted=function(){e.prototype.mounted.call(this),this.bindEvent()},t.prototype.buildPage=function(e,t,n){var s=this,o={selector:this.select(".pdsdk-connects-page-container"),totalItem:n,totalItemShow:!1,pageSize:t,showNum:0,current:e,prevNext:!0,startEnd:!1,jump:!1,callback:function(e,t,n){s.rendererData(t)}};this.page=new index_1.PdUIPagination(o)},t.prototype.rendererData=function(e){void 0===e&&(e=1);var t=this.container.getAvailableData();if(t){if(t.connects)for(var n=0,s=t.connects;n<s.length;n++){var o=s[n];o.start=o.start.toString(),o.end=o.end.toString(),o.nodes=lodash_1.map(o.nodes,function(e){return e.toString()})}var c=this.settings.max||10;this.rendererDataHTML(t,e,c),this.select(".pdsdk-connects-container").scroll("scroll",function(e){var t=$(e.currentTarget),n=t.scrollTop();t.prev().toggleClass("pdsdk-up-shadow",n>0)}),t.connects&&t.connects.length&&this.buildPage(e,c,t.connects?t.connects.length:0)}},t.prototype.rendererDataHTML=function(e,t,n){void 0===t&&(t=1),void 0===n&&(n=10);var s=e.connects;if(this.select(".pdsdk-connects").empty(),s&&s.length){var o="",c=s.length;if(c>n){var i=n*(t-1),d=i+n>c?c-i:n;s=lodash_1.cloneDeep(s).splice(i,d),o="，展示"+(i+1+"-")+(i+d)+"条"}var a=common_1.PdCommonUtils.createId("pdsdk-connects-");this.select(".pdsdk-connects").append('<div class="pdsdk-connects-options pdvis-cr-box clearfix"><span>共有<span class="pdsdk-connects-all">'+c+"</span>条路径"+o+"</span>"+utils_1.PdVisUtils.buildCRHTML({id:a,type:"checkbox",label:"展开全部"})+'</div><div class="pdsdk-connects-container"></div><div class="pdsdk-connects-page-container"></div>');var r=function(t){if(s.hasOwnProperty(t)){var n=s[t],o=keyboard_arrow_right_1["default"](24),c=$('<div class="pdsdk-connects-content pdsdk-connects-content-vertical"><div class="pdsdk-connects-title"><span class="pdsdk-connects-subtitle">路径'+(parseInt(t,10)+1)+'</span><span class="pdsdk-connects-stat">'+(n.edges.length-1)+"站"+o+'</span></div><div class="pdsdk-connects-detail"></div></div>');n.edges&&n.edges.length&&(n.edges.forEach(function(t,s){var o=lodash_1.find(e.nodes,["id",n.nodes[s]]),i=lodash_1.find(e.nodes,["id",n.nodes[s+1]]),d=o.name,a=i.name,r=o.id===n.start,l=i.id===n.end,p="未知",u="pdsdk-connects-arrow-to",h="";if(t){var v=lodash_1.find(e.links,["id",t]);p=v.attName||"",u=v.from===o.id?"pdsdk-connects-arrow-to":"pdsdk-connects-arrow-from";for(var f=lodash_1.concat(v.nRInfo||[],v.oRInfo||[]),k=0,g=f;k<g.length;k++)for(var m=g[k],_=m.kvs,y=0,b=_;y<b.length;y++){var w=b[y];h+="<li>"+w.v+"</li>"}}var P=$('<div class="pdsdk-connects-li"><div class="'+(r?"pdsdk-connects-start":"")+'"><i></i>'+d+'</div><div class="pdsdk-connects-arrow pdsdk-connects-arrow '+u+'"><i></i><div>'+p+'</div><ul class="pdsdk-connects-li-sub">'+h+"</ul></div>"+(l?'<div class="pdsdk-connects-end"><i></i>'+a+"</div>":"")+"</div>");c.find(".pdsdk-connects-detail").append(P)}),c.data("data",n),l.select(".pdsdk-connects-container").append(c))}},l=this;for(var p in s)r(p)}else this.select(".pdsdk-connects").append('<div class="pdsdk-connects-no-data">暂无数据</div>')},t.prototype.unbindEvent=function(){switch(e.prototype.unbindEvent.call(this),this.$el.off("mouseenter",".pdsdk-connects-content"),this.$el.off("click",".pdsdk-connects-content"),this.$el.off("click",".pdsdk-connects-options input"),this.settings.mode){case"hover":this.$el.off("mouseleave",".pdsdk-connects-content");break;case"click":this.$el.off("mouseleave",".pdsdk-connects-content"),this.$el.off("click",".pdsdk-connects-content")}},t.defaultSettings={side:"left",mode:"hover",max:10},t}(plugin_1.PdSDKPlugin);exports.PdSDKPluginConnects=PdSDKPluginConnects;