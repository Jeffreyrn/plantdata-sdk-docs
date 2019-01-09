"use strict";var __extends=this&&this.__extends||function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}();Object.defineProperty(exports,"__esModule",{value:!0});var $=require("jquery"),utils_1=require("../../../utils/utils"),editor_add_entity_1=require("./editor-add-entity"),add_circle_1=require("../../../../icon/add-circle"),PdSDKEditorAddSubConcept=function(t){function e(e){return t.call(this,e)||this}return __extends(e,t),e.prototype.addEntity=function(t){var e=this.settings.ajaxSettings,i=e.queryData||{},n=e.formData||{};i.kgName=this.settings.kgName,n=$.extend(!0,{},n,t),n.parentIds="["+n.parentId+"]",delete n.parentId,delete n.parent;var d={url:e.baseUrl+"concept/add",type:"POST",data:n};return d=$.extend(!0,{},d,e,this.settings.addConceptSettings),d.url=utils_1.PdSDKUtils.buildUrl(d.url,i),utils_1.PdSDKUtils.ajax(d)},e.prototype.afterAddEntity=function(t,e){var i={id:e.toString(),name:t.name,classId:"0",meaningTag:t.meaningTag,type:0},n=this.settings.schema;n.types.push({k:e.toString(),v:t.name,parentId:parseInt(this.data.id,10)}),this.settings.sdkNetChart.updateSchema(n),this.addNode(this.settings.netChart,i,t.parentId)},e.prototype.updateStatusBySelection=function(t,e,i){if(1===t.length&&0===e.length){var n=t[0];1===n.type?(this.updateStatus(!1),this.updateVisibility(!1)):0===n.type&&(this.data=n,this.isWhole=!1,this.prompt.$el.find("input").prop("disabled",!0),this.updateVisibility(!0),this.updateStatus(!0))}else 0===t.length&&0===e.length?(this.data=null,this.isWhole=!0,this.prompt.$el.find("input").prop("disabled",!1),this.updateVisibility(!0),this.updateStatus(!0)):(this.updateStatus(!1),this.updateVisibility(!1))},e.prototype.editFormSettingsGet=function(){return[{type:"custom",key:"parent",label:"所属概念",mode:"label",html:'<div class="pdsdk-editor-entity-prompt"></div>',required:!0,disabled:!0},{type:"input",key:"name",label:"概念名称",mode:"label",required:!0,placeholder:"概念名称，批量请用 , 隔开"},{type:"input",key:"meaningTag",label:"消歧标识",mode:"label",placeholder:"消歧标识，批量请用 , 隔开"}]},e.prototype.initSettings=function(i){var n=$.extend(!0,{},e.defaultSettings);return $.extend(!0,{},t.prototype.initSettings.call(this,n),i)},e.defaultSettings={cls:["pd-btn-float"],name:"addSubConcept",title:"子概念",disabled:!1,visible:!0,icon:add_circle_1["default"](20),promptSettings:e.defaultPromptSettings},e}(editor_add_entity_1.PdSDKEditorAddEntity);exports.PdSDKEditorAddSubConcept=PdSDKEditorAddSubConcept;