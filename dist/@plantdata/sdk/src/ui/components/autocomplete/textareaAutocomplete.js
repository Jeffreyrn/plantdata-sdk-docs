"use strict";var __extends=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function o(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}();Object.defineProperty(exports,"__esModule",{value:!0});var $=require("jquery"),prefix_1=require("../prefix"),elecreator_1=require("../../../core/elecreator"),autofill_1=require("./autofill"),PdUITextareaAutocomplete=function(t){function e(e){return t.call(this,e)||this}return __extends(e,t),e.prototype.initSettings=function(r){return $.extend(!0,{},t.prototype.initSettings.call(this,e.defaultSettings),r)},e.prototype.initTemplate=function(){var t=$(this.settings.selector);t.append(elecreator_1.PdEleCreator.createEle(e.tagName,{atts:{placeholder:this.settings.placeholder,name:this.settings.name?this.settings.name:"autocomplete"},cls:autofill_1.PdUIAutofill.clsInputName},!0));var r=this.settings.promptContainerCls+" ";return t.addClass(e.clsName+" "+r),this.createOptionEl(e.clsPromptName+" "+r,t),t},e.defaultSettings={},e.tagName="textarea",e.clsName=prefix_1["default"].cls+"textarea-autocomplete",e.cls="."+e.clsName,e.clsPromptName=e.clsName+"-prompt",e}(autofill_1.PdUIAutofill);exports.PdUITextareaAutocomplete=PdUITextareaAutocomplete;