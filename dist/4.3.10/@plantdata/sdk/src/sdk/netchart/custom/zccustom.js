"use strict";var __extends=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(exports,"__esModule",{value:!0});var zcnetchart_1=require("../../../vis/netchart/impls/zc/zcnetchart"),custom_1=require("./custom"),common_1=require("../../../common/common"),netchart_1=require("../helper/zc/netchart"),PdSDKZcCustom=function(t){function e(e){return t.call(this,zcnetchart_1.PdVisZcNetChart,e)||this}return __extends(e,t),e.prototype.initSettings=function(e){return e=t.prototype.initSettings.call(this,e),this.initNetChartSettings(e)},e}(custom_1.PdSDKCustom);exports.PdSDKZcCustom=PdSDKZcCustom,common_1.PdCommonUtils.applyMixins(PdSDKZcCustom,[netchart_1.PdSDKZcNetChartHelper]);