"use strict";var __extends=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(exports,"__esModule",{value:!0});var zcnetchart_1=require("../../../vis/netchart/impls/zc/zcnetchart"),relation_1=require("./relation"),common_1=require("../../../common/common"),netchart_1=require("../helper/zc/netchart"),PdSDKZcRelation=function(t){function e(e){return t.call(this,zcnetchart_1.PdVisZcNetChart,e)||this}return __extends(e,t),e.prototype.initSettings=function(e){return e=t.prototype.initSettings.call(this,e),this.initNetChartSettings(e)},e}(relation_1.PdSDKRelation);exports.PdSDKZcRelation=PdSDKZcRelation,common_1.PdCommonUtils.applyMixins(PdSDKZcRelation,[netchart_1.PdSDKZcNetChartHelper]);