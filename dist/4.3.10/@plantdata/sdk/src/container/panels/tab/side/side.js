"use strict";var __extends=this&&this.__extends||function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}();Object.defineProperty(exports,"__esModule",{value:!0});var $=require("jquery"),tab_1=require("../tab"),utils_1=require("../../../utils"),PdSidePanel=function(t){function e(e){return t.call(this,e)||this}return __extends(e,t),e.prototype.addChild=function(e,i){var n="left"===this.settings.side?"right":"left";i.tooltipPosition="overlay"===this.settings.mode?n:"bottom";var o=t.prototype.addChild.call(this,e,i);if("fixed"===this.settings.mode){var s=this.$tabsContainer.children(),r=100/s.length+"%";s.width(r),this.$tabsContainer.attr("data-tab-num",s.length)}return o},e.prototype.destroy=function(){t.prototype.destroy.call(this),this.removeDOM()},e.prototype.bindEvent=function(){var e=this;t.prototype.bindEvent.call(this),this.$el.on("click",".pdvis-panels-control",function(){e.togglePanel()})},e.prototype.createTabsContainer=function(){t.prototype.createTabsContainer.call(this);var e="left"===this.settings.side?"right":"left";this.$el.append('<div class="pdvis-panels-control" data-pdui-tooltip="hover" data-pdui-tooltip-position="'+e+'" title="收起/展开"><div class="pdvis-panels-control-line"></div><div class="pdvis-panels-control-line"></div><div class="pdvis-panels-control-line"></div></div>')},e.prototype.initSettings=function(i){var n=$.extend(!0,{},t.prototype.initSettings.call(this,e.defaultSettings),i);return utils_1.PdContainerUtils.isLargeScreen()||(n.mode="overlay",n.active=!1),n},e.prototype.initTemplate=function(){var e=t.prototype.initTemplate.call(this),i=["pdvis-panels-"+this.settings.side,"pdvis-panels-"+this.settings.mode];return this.settings.active&&i.push("active"),e.addClass(i.join(" ")),e},e.prototype.mounted=function(){t.prototype.mounted.call(this),this.bindEvent()},e.prototype.unbindEvent=function(){t.prototype.unbindEvent.call(this),this.$el.off("click",".pdvis-panels-control")},e.defaultSettings={active:!1,mode:"overlay"},e}(tab_1.PdTabPanel);exports.PdSidePanel=PdSidePanel;