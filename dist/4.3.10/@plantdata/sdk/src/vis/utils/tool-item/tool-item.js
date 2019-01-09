"use strict";var __extends=this&&this.__extends||function(){var t=function(i,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var e in i)i.hasOwnProperty(e)&&(t[e]=i[e])})(i,e)};return function(i,e){function o(){this.constructor=i}t(i,e),i.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}();Object.defineProperty(exports,"__esModule",{value:!0});var $=require("jquery"),lodash_1=require("lodash"),component_1=require("../../../core/component"),tooltip_1=require("../../../ui/components/tooltip/tooltip"),common_1=require("../../../common/common"),arrow_right_1=require("../../../icon/arrow-right"),PdVisToolItem=function(t){function i(i){return t.call(this,i)||this}return __extends(i,t),i.prototype.getToolType=function(){return this.settings.name||common_1.PdCommonUtils.createId("tool-item-")},i.prototype.getStatus=function(){return!this.settings.disabled},i.prototype.getVisibility=function(){return this.settings.visible},i.prototype.updateStatus=function(t){this.settings.disabled=!t,this.$el.prop("disabled",!t)},i.prototype.updateVisibility=function(t){this.settings.visible=t,this.$el.toggleClass("hide",!t)},i.prototype.bindEvent=function(){var i=this;t.prototype.bindEvent.call(this);var e=this.settings.events||{},o=e.click||this.settings.click;e.click=function(t){o&&o(t),i.settings.afterClick&&i.settings.afterClick(t)};var n=function(t){var i=$(t.currentTarget);if(i.hasClass("pdvis-tool-item-group")){for(var e=i.children(".pdvis-tool-children"),o=0,n=i.parent().closest(".pdvis-tool-item-group");n.length;)o++,n=n.parent().closest(".pdvis-tool-item-group");var s=i.outerWidth(),r=i.offset(),p=r.left+s,l=r.top,a=common_1.PdCommonUtils.getViewport(),c="100%",h="0px",d=e.height();p+s>a.left+a.width&&(c="-100%"),l+d>a.top+a.height&&(h=a.top+a.height-l-d+"px"),e.css({left:c,top:h})}};this.$el.on("mouseenter",n).on("mouseenter",".pdvis-tool-item-group",n);var s=function(t){e.hasOwnProperty(t)&&r.$el.on(t,function(i){e[t](i)})},r=this;for(var p in e)s(p)},i.prototype.createEventData=function(t){},i.prototype.initSettings=function(e){var o=this;return $.extend(!0,{click:function(t){o.onClick(t)}},t.prototype.initSettings.call(this,i.defaultSettings),e)},i.prototype.initTemplate=function(){var t=lodash_1.concat(["pd-btn-float","pdui-btn","pdvis-tool-item"],this.settings.cls);this.settings.name&&t.push("pdvis-tool-item-"+this.settings.name),this.settings.visible===!1&&t.push("hide");var i=$(this.settings.selector?this.settings.selector:'<button class="'+t.join(" ")+'" title="'+this.settings.title+'" '+(this.settings.disabled?"disabled":"")+">"+(this.settings.icon?'<span class="pdvis-tool-item-icon">'+this.settings.icon+"</span>":"")+'<span class="pdvis-tool-item-text">'+this.settings.title+"</span></button>"),e=$('<div class="pdvis-tools-container pdvis-tool-children"></div>'),o=this.settings.children;if(this.children=[],o&&o.length){for(var n=0,s=o;n<s.length;n++){var r=s[n];r&&(e.append(r.$el),this.children.push(r))}i.prepend('<span class="pdvis-tool-item-more">'+arrow_right_1["default"](20)+"</span>").append(e),i.addClass("pdvis-tool-item-group")}return this.settings.tooltip.enable&&i.attr(tooltip_1.PdUITooltip.attrName,this.settings.tooltip.mode).attr(tooltip_1.PdUITooltip.attrPosition,this.settings.tooltip.position),i},i.prototype.mounted=function(){t.prototype.mounted.call(this),this.bindEvent()},i.prototype.onClick=function(t){},i.prototype.unbindEvent=function(){t.prototype.unbindEvent.call(this);var i=this.settings.events||{};for(var e in i)i.hasOwnProperty(e)&&this.$el.off(e)},i.defaultSettings={tooltip:{enable:!1,mode:"hover"}},i}(component_1.PdComponent);exports.PdVisToolItem=PdVisToolItem;