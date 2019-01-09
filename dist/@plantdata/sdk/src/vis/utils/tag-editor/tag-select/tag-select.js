"use strict";var __extends=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(exports,"__esModule",{value:!0});var $=require("jquery"),lodash_1=require("lodash"),select_1=require("../../../../ui/components/select/select"),button_1=require("../../../../ui/components/button/button"),common_1=require("../../../../common/common"),tag_complex_editor_1=require("../tag-complex-editor"),PdVisTagSelect=function(t){function e(e){return t.call(this,e)||this}return __extends(e,t),e.prototype.valueToData=function(t){var e;if(t){var o=common_1.PdCommonUtils.transferOption(this.settings.selectSettings.options),n=lodash_1.find(o,function(e){return e.value.toString()===t.toString()});return e={},e[this.settings.labelKey]=n?n.label:t,e[this.settings.valueKey]=t,e}return null},e.prototype.bindEvent=function(){var e=this;t.prototype.bindEvent.call(this),this.$editor.on("click",".pdvis-tag-control",function(){var t=e.$editor.find(".pdvis-tag-select-input"),o=select_1.PdUISelect.getValue(t);o?e.addData(o).then(function(){select_1.PdUISelect.clearValue(t)},function(t){common_1.PdCommonUtils.error(t)}):common_1.PdCommonUtils.error("请选择一个项目后再进行添加操作")})},e.prototype.createEditor=function(){var t=$.extend(!0,{size:this.settings.size},this.settings.selectSettings);t.cls=(t.cls||"")+" pdvis-tag-select-input";var e=select_1.PdUISelect.create(t);return e+=button_1.PdUIButton.create({html:"添加",size:this.settings.size,type:"primary",cls:"pdvis-tag-control"}),$('<div class="pdvis-tag-editor-editor pdvis-tag-select-editor">'+e+"</div>")},e.prototype.initSettings=function(o){return $.extend(!0,{},t.prototype.initSettings.call(this,e.defaultSettings),o)},e.prototype.initTemplate=function(){var e=t.prototype.initTemplate.call(this);return e.addClass("pdvis-tag-select"),e},e.prototype.unbindEvent=function(){t.prototype.unbindEvent.call(this),this.$editor.off("click",".pdvis-tag-control")},e.defaultSettings={selectSettings:{atts:{placeholder:"请选择..."}}},e}(tag_complex_editor_1.PdVisTagComplexEditor);exports.PdVisTagSelect=PdVisTagSelect;