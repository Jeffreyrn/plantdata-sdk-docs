"use strict";var __extends=this&&this.__extends||function(){var t=function(i,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var e in i)i.hasOwnProperty(e)&&(t[e]=i[e])})(i,e)};return function(i,e){function n(){this.constructor=i}t(i,e),i.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}();Object.defineProperty(exports,"__esModule",{value:!0});var $=require("jquery"),dialog_1=require("../dialog/dialog"),PdVisConfirm=function(t){function i(i){return t.call(this,i)||this}return __extends(i,t),i.prototype.initTemplate=function(){return this.settings.cls=(this.settings.cls||"")+"pdvis-confirm",this.settings.body&&(this.settings.body='<div class="pdvis-confirm-content">'+this.settings.body+"</div>"),t.prototype.initTemplate.call(this)},i.prototype.initSettings=function(e){return $.extend(!0,{},t.prototype.initSettings.call(this,i.defaultSettings),e)},i.defaultSettings={},i}(dialog_1.PdVisDialog);exports.PdVisConfirm=PdVisConfirm;