"use strict";var __extends=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(exports,"__esModule",{value:!0});var $=require("jquery"),tag_editor_1=require("../tag-editor"),input_1=require("../../../../ui/components/input/input"),common_1=require("../../../../common/common"),PdVisTagInput=function(t){function e(e){return t.call(this,e)||this}return __extends(e,t),e.prototype.bindEvent=function(){var e=this;t.prototype.bindEvent.call(this),this.$editor.on("keyup",function(t){var n=t.keyCode?t.keyCode:t.which;if(13===n){var i=e.$editor.val().toString();e.addData(i).then(function(){e.$editor.val("")},function(t){common_1.PdCommonUtils.error(t)})}})},e.prototype.createEditor=function(){var t=$.extend(!0,{size:this.settings.size},this.settings.inputSettings);t.cls=(t.cls||"")+" pdvis-tag-editor-editor pdvis-tag-input-editor";var e=input_1.PdUIInput.create(t);return $(e)},e.prototype.initSettings=function(n){return $.extend(!0,{},t.prototype.initSettings.call(this,e.defaultSettings),n)},e.prototype.initTemplate=function(){var e=t.prototype.initTemplate.call(this);return e.addClass("pdvis-tag-input"),e},e.prototype.unbindEvent=function(){t.prototype.unbindEvent.call(this),this.$editor.off("keyup")},e.defaultSettings={inputSettings:{atts:{placeholder:"请输入..."}}},e}(tag_editor_1.PdVisTagEditor);exports.PdVisTagInput=PdVisTagInput;