"use strict";var __extends=this&&this.__extends||function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function a(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(a.prototype=i.prototype,new a)}}();Object.defineProperty(exports,"__esModule",{value:!0});var $=require("jquery"),lodash_1=require("lodash"),utils_1=require("../../../utils/utils"),editor_define_relation_1=require("./editor-define-relation"),format_list_bulleted_1=require("../../../../icon/format-list-bulleted"),PdSDKEditorDefineRelationEdge=function(t){function e(e){return t.call(this,e)||this}return __extends(e,t),e.prototype.openAddDialog=function(t){this.attributeListData=[],this.data=t,this.addDialog.open()},e.prototype.updateStatusBySelection=function(t,e,i){if(0===t.length&&1===e.length){i=this.settings.netChart.getData();var a=lodash_1.find(i.nodes,function(t){return t.id.toString()===e[0].from.toString()}),r=lodash_1.find(i.nodes,function(t){return t.id.toString()===e[0].to.toString()});"1"===a.type.toString()&&"1"===r.type.toString()&&"0"!==e[0].attId.toString()?(this.data=e[0],this.updateStatus(!0),this.updateVisibility(!0)):(this.updateStatus(!1),this.updateVisibility(!1))}else this.updateStatus(!1),this.updateVisibility(!1)},e.prototype.addAttribute=function(t){var e=this.settings.ajaxSettings,i=e.queryData||{},a=e.formData||{};i.kgName=this.settings.kgName;var r={},n=t;return n.type=this.settings.attributeType,a.relationAttDefJson=JSON.stringify(n),a.attDefId=this.data.attId,r={url:e.baseUrl+"attribute/addOrUpdate/edge/definition",type:"POST",data:a},r=$.extend(!0,{},r,e,this.settings.addAttributeSettings),r.url=utils_1.PdSDKUtils.buildUrl(r.url,i),utils_1.PdSDKUtils.ajax(r)},e.prototype.deleteAttribute=function(t){var e=this.settings.ajaxSettings,i=e.queryData||{},a=e.formData||{};i.kgName=this.settings.kgName,a.relationAttDefId=t,a.attDefId=this.data.attId;var r={url:e.baseUrl+"attribute/delete/edge/definition",type:"POST",data:a};return r=$.extend(!0,{},r,e,this.settings.deleteAttributeSettings),r.url=utils_1.PdSDKUtils.buildUrl(r.url,i),utils_1.PdSDKUtils.ajax(r)},e.prototype.getAttributeList=function(){var t=this,e=this.settings.ajaxSettings,i=e.queryData||{};i.kgName=this.settings.kgName,i.id=0,i.type="0";var a={url:e.baseUrl+"attribute/get/definition",type:"GET"};return a=$.extend(!0,{},a,e,this.settings.attributeListSettings),a.url=utils_1.PdSDKUtils.buildUrl(a.url,i),utils_1.PdSDKUtils.ajax(a).then(function(e){var i=lodash_1.find(e.rsData,function(e){return e.id.toString()===t.data.attId.toString()});return i&&i.extraInfoList?Promise.resolve(i.extraInfoList):Promise.resolve([])})},e.prototype.updateAttribute=function(t){var e=this.settings.ajaxSettings,i=e.queryData||{},a=e.formData||{};i.kgName=this.settings.kgName,a.attDefId=this.data.attId,a.relationAttDefJson=JSON.stringify(t);var r={url:e.baseUrl+"attribute/addOrUpdate/edge/definition",type:"POST",data:a};return r=$.extend(!0,{},r,e,this.settings.updateAttributeSettings),r.url=utils_1.PdSDKUtils.buildUrl(r.url,i),utils_1.PdSDKUtils.ajax(r)},e.prototype.getEditFormSettings=function(){return[{type:"input",key:"name",label:"名称",mode:"label",required:!0},{type:"custom",key:"range",label:"值域",mode:"label",html:'<div class="pdsdk-editor-define-relation-prompt"></div>',required:!0,"class":"pdsdk-editor-define-relation-range"},{type:"custom",key:"isFunctional",label:"类型",mode:"label",html:'<div class="pdsdk-editor-define-attribute-modify-select">\n                        <select class="pdsdk-editor-define-attribute-table-select" name="isFunctional">\n                            <option value="0">非单值型</option>\n                            <option value="1">单值型</option>\n                        </select>\n                    </div>'}]},e.prototype.initSettings=function(i){var a=$.extend(!0,{},e.defaultSettings);return $.extend(!0,{},t.prototype.initSettings.call(this,a),i)},e.prototype.onClick=function(t){var e=this;this.getAttributeList().then(function(t){var i=lodash_1.filter(t,function(t){return t.type.toString()===e.settings.attributeType.toString()});e.attributeListData=i,e.drawAttributeList(i)}),this.$attributeList.find(".pdsdk-editor-define-attribute-name").text(this.data.attName).attr("title",this.data.attName),this.$attributeList.removeClass("hide")},e.defaultPromptSettings={promptType:"100"},e.defaultSettings={attributeType:"1",key:"seqNo",rangeKey:"objRange",cls:["pd-btn-float","pdsdk-editor-button-border"],name:"defineEdgeRelation",title:"对象属性",disabled:!0,visible:!1,icon:format_list_bulleted_1["default"](20),addPromptSettings:e.defaultPromptSettings,editPromptSettings:e.defaultPromptSettings,localization:{tableTitle1:"关系名称",tableTitle2:"值域",tableTitle3:"属性类型",listType:"边对象属性",listTitle:"边对象属性"}},e}(editor_define_relation_1.PdSDKEditorDefineRelation);exports.PdSDKEditorDefineRelationEdge=PdSDKEditorDefineRelationEdge;