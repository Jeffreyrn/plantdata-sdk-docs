"use strict";var __extends=this&&this.__extends||function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}();Object.defineProperty(exports,"__esModule",{value:!0});var $=require("jquery"),lodash_1=require("lodash"),editor_define_attribute_1=require("./editor-define-attribute"),utils_1=require("../../../utils"),format_list_bulleted_1=require("../../../../icon/format-list-bulleted"),PdSDKEditorDefineAttributeEdge=function(t){function e(e){return t.call(this,e)||this}return __extends(e,t),e.prototype.openAddDialog=function(t){this.attributeListData=[],this.data=t,this.addDialog.open()},e.prototype.updateStatusBySelection=function(t,e,i){if(0===t.length&&1===e.length){i=this.settings.netChart.getData();var r=lodash_1.find(i.nodes,function(t){return t.id.toString()===e[0].from.toString()}),a=lodash_1.find(i.nodes,function(t){return t.id.toString()===e[0].to.toString()});"1"===r.type.toString()&&"1"===a.type.toString()&&"0"!==e[0].attId.toString()?(this.data=e[0],this.updateStatus(!0),this.updateVisibility(!0)):(this.updateStatus(!1),this.updateVisibility(!1))}else this.updateStatus(!1),this.updateVisibility(!1)},e.prototype.addAttribute=function(t){var e=this.settings.ajaxSettings,i=e.queryData||{},r=e.formData||{};i.kgName=this.settings.kgName;var a={},n=t;return n.type=this.settings.attributeType,r.relationAttDefJson=JSON.stringify(n),r.attDefId=this.data.attId,a={url:e.baseUrl+"attribute/addOrUpdate/edge/definition",type:"POST",data:r},a=$.extend(!0,{},a,e,this.settings.addAttributeSettings),a.url=utils_1.PdSDKUtils.buildUrl(a.url,i),utils_1.PdSDKUtils.ajax(a)},e.prototype.deleteAttribute=function(t){var e=this.settings.ajaxSettings,i=e.queryData||{},r=e.formData||{};i.kgName=this.settings.kgName,r.relationAttDefId=t,r.attDefId=this.data.attId;var a={url:e.baseUrl+"attribute/delete/edge/definition",type:"POST",data:r};return a=$.extend(!0,{},a,e,this.settings.deleteAttributeSettings),a.url=utils_1.PdSDKUtils.buildUrl(a.url,i),utils_1.PdSDKUtils.ajax(a)},e.prototype.getAttributeList=function(){var t=this,e=this.settings.ajaxSettings,i=e.queryData||{};i.kgName=this.settings.kgName,i.id=0,i.type="0";var r={url:e.baseUrl+"attribute/get/definition",type:"GET"};return r=$.extend(!0,{},r,e,this.settings.attributeListSettings),r.url=utils_1.PdSDKUtils.buildUrl(r.url,i),utils_1.PdSDKUtils.ajax(r).then(function(e){var i=lodash_1.find(e.rsData,function(e){return e.id.toString()===t.data.attId.toString()});return i&&i.extraInfoList?Promise.resolve(i.extraInfoList):Promise.resolve([])})},e.prototype.updateAttribute=function(t){var e=this.settings.ajaxSettings,i=e.queryData||{},r=e.formData||{};i.kgName=this.settings.kgName,r.attDefId=this.data.attId,r.relationAttDefJson=JSON.stringify(t);var a={url:e.baseUrl+"attribute/addOrUpdate/edge/definition",type:"POST",data:r};return a=$.extend(!0,{},a,e,this.settings.updateAttributeSettings),a.url=utils_1.PdSDKUtils.buildUrl(a.url,i),utils_1.PdSDKUtils.ajax(a)},e.prototype.initSettings=function(i){var r=$.extend(!0,{},e.defaultSettings);return $.extend(!0,{},t.prototype.initSettings.call(this,r),i)},e.prototype.getEditFormSettings=function(){return[{type:"input",key:"name",label:"名称",mode:"label",required:!0},{type:"custom",key:"dataType",label:"数据类型",mode:"label",html:'<div class="pdsdk-editor-define-attribute-modify-select"></div>'},{type:"input",key:"dataUnit",label:"单位",mode:"label",disabled:!0}]},e.prototype.onClick=function(t){var e=this;this.getAttributeList().then(function(t){var i=lodash_1.filter(t,function(t){return t.type.toString()===e.settings.attributeType.toString()});e.attributeListData=i,e.drawAttributeList(i)}),this.$attributeList.find(".pdsdk-editor-define-attribute-name").text(this.data.attName).attr("title",this.data.attName),this.$attributeList.removeClass("hide")},e.defaultSettings={attributeType:"0",key:"seqNo",cls:["pd-btn-float"],name:"defineEdgeAttribute",title:"数值属性",disabled:!0,visible:!1,icon:format_list_bulleted_1["default"](20),localization:{tableTitle1:"数值属性名称",tableTitle2:"数据类型",tableTitle3:"单位",listType:"边数值属性",listTitle:"边数值属性"}},e}(editor_define_attribute_1.PdSDKEditorDefineAttribute);exports.PdSDKEditorDefineAttributeEdge=PdSDKEditorDefineAttributeEdge;