"use strict";var __extends=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(exports,"__esModule",{value:!0});var $=require("jquery"),netchart_1=require("../netchart"),PdSDKNetChartHelper=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.initNetChartSettings=function(t){return $.extend(!0,{},e.defaultSettings,t)},e.defaultSettings={toolbar:{enable:!0}},e}(netchart_1.PdSDKNetChart);exports.PdSDKNetChartHelper=PdSDKNetChartHelper;