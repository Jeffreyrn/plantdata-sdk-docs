"use strict";var __extends=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(exports,"__esModule",{value:!0});var $=require("jquery"),contextmenu_item_1=require("../contextmenu-item"),zoom_in_1=require("../../../../../../icon/zoom-in"),PdVisContextmenuItemNodeFocusTo=function(t){function e(e){return t.call(this,e)||this}return __extends(e,t),e.prototype.initSettings=function(o){return $.extend(!0,{},t.prototype.initSettings.call(this,e.defaultSettings),o)},e.prototype.isEnable=function(t){return this.clickNode&&!this.settings.netChart.isFixedNode(this.clickNode.id)},e.prototype.onClick=function(e){t.prototype.onClick.call(this,e),this.settings.netChart.load(this.clickNode,"user-contextmenu")},e.defaultSettings={title:"切换焦点",name:"node-focus-to",icon:zoom_in_1["default"](24)},e}(contextmenu_item_1.PdVisContextmenuItem);exports.PdVisContextmenuItemNodeFocusTo=PdVisContextmenuItemNodeFocusTo;