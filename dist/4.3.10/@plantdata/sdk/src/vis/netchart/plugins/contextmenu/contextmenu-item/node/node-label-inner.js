"use strict";var __extends=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(exports,"__esModule",{value:!0});var $=require("jquery"),contextmenu_item_1=require("../contextmenu-item"),PdVisContextmenuItemNodeLabelInner=function(t){function e(e){return t.call(this,e)||this}return __extends(e,t),e.prototype.initSettings=function(n){return $.extend(!0,{},t.prototype.initSettings.call(this,e.defaultSettings),n)},e.prototype.isEnable=function(t){for(var e=0,n=this.selectNodes;e<n.length;e++){var o=n[e];if("inner"!==this.settings.netChart.nodeLabelPosition(o))return!0}return!1},e.prototype.onClick=function(e){t.prototype.onClick.call(this,e);for(var n=0,o=this.selectNodes;n<o.length;n++){var r=o[n];$.extend(!0,r,{labelStyle:{position:"inner"}})}this.settings.netChart.updateStyle()},e.defaultSettings={title:"标签内嵌",name:"node-label-inner",icon:""},e}(contextmenu_item_1.PdVisContextmenuItem);exports.PdVisContextmenuItemNodeLabelInner=PdVisContextmenuItemNodeLabelInner;