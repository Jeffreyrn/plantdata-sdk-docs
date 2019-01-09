"use strict";var __extends=this&&this.__extends||function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}();Object.defineProperty(exports,"__esModule",{value:!0});var $=require("jquery"),lodash_1=require("lodash"),common_1=require("../../../../common/common"),editor_tool_1=require("./editor-tool"),input_1=require("../../../../ui/components/input/input"),form_1=require("../../../../ui/components/form/form"),message_1=require("../../../../ui/components/message/message"),utils_1=require("../../../utils/utils"),delete_1=require("../../../../icon/delete"),PdSDKEditorDelete=function(t){function e(e){return t.call(this,e)||this}return __extends(e,t),e.prototype.updateStatusBySelection=function(t,e,i){if(this.link=null,this.node=null,this.nodes=null,this.updateStatus(!1),this.updateVisibility(!1),1===t.length&&0===e.length)this.node=t[0],this.link=null,this.settings.updateStatus?this.updateVisibility(this.settings.updateVisibility(t,e)):this.updateVisibility(!0),this.settings.updateStatus?this.updateStatus(this.settings.updateStatus(t,e)):this.updateStatus("0"!==t[0].id.toString());else if(0===t.length&&1===e.length)this.link=e[0],this.node=null,this.settings.updateStatus?this.updateStatus(this.settings.updateStatus(t,e)):e[0].attId>=0&&this.updateStatus(!0),this.settings.updateVisibility?this.updateVisibility(this.settings.updateVisibility(t,e)):e[0].attId>=0&&this.updateVisibility(!0);else if(t.length>1){var n=lodash_1.find(t,["type",0]);n||(this.updateStatus(!0),this.updateVisibility(!0),this.nodes=t)}},e.prototype.createEditDialogSettings=function(){var t=this,e='<div class="pdsdk-editor-delete-dialog-content"></div>';return{cls:"pdsdk-editor-delete-dialog pdsdk-editor-common-dialog",title:this.settings.title+'<span class="pdsdk-editor-delete-type"></span>',body:e,positiveClick:function(){if(t.node){if(0===t.node.type){var e=form_1.PdUIForm.getFormData(t.editDialog.$el).name;return e?e===t.node.name?t.deleteConcept().then(function(e){return t.deleteNode(t.settings.netChart,t.node),Promise.resolve(e)}):(common_1.PdCommonUtils.error("请输入正确的概念名"),Promise.reject(new Error("请输入正确的概念名"))):(common_1.PdCommonUtils.error("请输入概念名"),Promise.reject(new Error("请输入概念名")))}return t.deleteInstance(t.node).then(function(e){return t.deleteNode(t.settings.netChart,t.node),Promise.resolve(e)})}if(t.nodes){var i=lodash_1.map(t.nodes,function(e){return t.deleteInstance(e).then(function(i){return t.deleteNode(t.settings.netChart,e),Promise.resolve(i)})});return Promise.all(i)}if(t.link){if(t.link.attId>=0)return t.deleteRelation().then(function(e){return t.deleteLink(t.settings.netChart,t.link),Promise.resolve(e)});var n,s=void 0;if(t.linkData.from.type===t.linkData.to.type){var a=lodash_1.find(t.settings.schema.types,function(e){return e.k.toString()===t.linkData.from.id.toString()}),d=lodash_1.find(t.settings.schema.types,function(e){return e.k.toString()===t.linkData.to.id.toString()});if(a.parentId.toString()===t.linkData.to.id.toString())n=t.linkData.to,s=t.linkData.from;else{if(d.parentId.toString()!==t.linkData.from.id.toString())return common_1.PdCommonUtils.error("不能确定父子关系"),Promise.reject(new Error("不能确定父子关系"));n=t.linkData.from,s=t.linkData.to}return t.deleteConceptParent(s,n).then(function(e){return t.deleteLink(t.settings.netChart,t.link),Promise.resolve(e)})}return 0===t.linkData.from.type?(n=t.linkData.from,s=t.linkData.to):(n=t.linkData.to,s=t.linkData.from),t.deleteInstanceParent(s,n).then(function(e){return t.deleteLink(t.settings.netChart,t.link),Promise.resolve(e)})}}}},e.prototype.deleteConcept=function(){var t=this.settings.ajaxSettings,e=t.queryData||{},i=t.formData||{};e.kgName=this.settings.kgName,i.conceptId=this.node.id;var n={url:t.baseUrl+"concept/delete",type:"POST",data:i};return n=$.extend(!0,{},n,t,this.settings.deleteConceptSetting),n.url=utils_1.PdSDKUtils.buildUrl(n.url,e),utils_1.PdSDKUtils.ajax(n)},e.prototype.deleteConceptParent=function(t,e){var i=this.settings.ajaxSettings,n=i.queryData||{},s=i.formData||{};n.kgName=this.settings.kgName,s.conceptId=t.id,s.parentId=e.id;var a={url:i.baseUrl+"concept/delete/parent",type:"POST",data:s};return a=$.extend(!0,{},a,i,this.settings.deleteConceptParentSetting),a.url=utils_1.PdSDKUtils.buildUrl(a.url,n),utils_1.PdSDKUtils.ajax(a)},e.prototype.deleteInstance=function(t){var e=this.settings.ajaxSettings,i=e.queryData||{},n=e.formData||{};i.kgName=this.settings.kgName,n.instanceId=t.id;var s={url:e.baseUrl+"instance/delete",type:"POST",data:n};return s=$.extend(!0,{},s,e,this.settings.deleteInstanceSetting),s.url=utils_1.PdSDKUtils.buildUrl(s.url,i),utils_1.PdSDKUtils.ajax(s)},e.prototype.deleteInstanceParent=function(t,e){var i=this.settings.ajaxSettings,n=i.queryData||{},s=i.formData||{};n.kgName=this.settings.kgName,s.instanceId=t.id,s.parentId=e.id;var a={url:i.baseUrl+"instance/delete/parent",type:"POST",data:s};return a=$.extend(!0,{},a,i,this.settings.deleteInstanceParentSetting),a.url=utils_1.PdSDKUtils.buildUrl(a.url,n),utils_1.PdSDKUtils.ajax(a)},e.prototype.deleteRelation=function(){var t=this.settings.ajaxSettings,e=t.queryData||{},i=t.formData||{};e.kgName=this.settings.kgName,i.instanceId=this.linkData.from.id,i.attDefId=this.link.attId,i.attId=this.link.id,i.attType=1;var n={url:t.baseUrl+"attribute/delete/attribute",type:"POST",data:i};return n=$.extend(!0,{},n,t,this.settings.deleteRelationSetting),n.url=utils_1.PdSDKUtils.buildUrl(n.url,e),utils_1.PdSDKUtils.ajax(n)},e.prototype.initSettings=function(i){var n=$.extend(!0,{},e.defaultSettings);return $.extend(!0,{},t.prototype.initSettings.call(this,n),i)},e.prototype.mounted=function(){t.prototype.mounted.call(this)},e.prototype.onClick=function(t){var e=this,i=this.editDialog.$el.find(".pdsdk-editor-delete-dialog-content");if(this.node)if(0===this.node.type){var n=input_1.PdUIInput.create({cls:"pdui-dynamic",size:"md",atts:{name:"name"}});i.html('\n                    <div class="pdsdk-editor-delete-title">\n                        确定删除<span class="pdsdk-editor-delete-type"></span>"<span class="pdsdk-editor-delete-name"></span>"吗？\n                    </div>\n                    <div class="pdsdk-editor-delete-content">\n                        <span>请输入<span class="pdsdk-editor-delete-type"></span>名称，已确定删除</span>\n                        '+n+"\n                    </div>\n                "),this.editDialog.$el.find(".pdsdk-editor-delete-type").text("概念"),this.editDialog.$el.find(".pdsdk-editor-delete-name").text(this.node.name)}else i.html('\n                <div class="pdsdk-editor-delete-title center">\n                    确定删除<span class="pdsdk-editor-delete-type"></span>"<span class="pdsdk-editor-delete-name"></span>"吗？\n                </div>'),this.editDialog.$el.find(".pdsdk-editor-delete-name").text(this.node.name),this.editDialog.$el.find(".pdsdk-editor-delete-type").text("实体");else if(this.nodes){var s=lodash_1.map(this.nodes,"name").join("、");i.html('\n                <div class="pdsdk-editor-delete-title center">\n                    确定删除<span class="pdsdk-editor-delete-type"></span><span class="pdsdk-editor-delete-name"></span>吗？\n                </div>'),this.editDialog.$el.find(".pdsdk-editor-delete-name").text(s),this.editDialog.$el.find(".pdsdk-editor-delete-type").text("实体")}else if(this.link){var a=this.settings.netChart.getData();this.linkData={},this.linkData.to=lodash_1.find(a.nodes,function(t){return t.id.toString()===e.link.to.toString()}),this.linkData.from=lodash_1.find(a.nodes,function(t){return t.id.toString()===e.link.from.toString()});var d="";d=this.link.attId<0?"父子":"0"===this.link.attId.toString()?this.link.attName:lodash_1.find(this.settings.schema.atts,function(t){return t.k.toString()===e.link.attId.toString()}).v,i.html('\n                <div class="pdsdk-editor-delete-title center">\n                    确定删除"<span class="pdsdk-editor-delete-primary">'+this.linkData.from.name+'</span>"\n                    、"<span class="pdsdk-editor-delete-primary">'+this.linkData.to.name+'</span>"\n                    之间的"<span class="pdsdk-editor-delete-primary">'+d+'</span>"关系吗？\n                </div>'),this.editDialog.$el.find(".pdsdk-editor-delete-type").text("关系")}this.showEdit({parent:this.node?this.node.name:""},t)},e.prototype.validate=function(e){var i=!0;return this.editDialog&&(i=t.prototype.validate.call(this,e),this.updateValidateStatus("parent",!!this.node),this.node||(message_1.PdUIMessage.error("所属实体不能为空"),i=!1)),i},e.defaultSettings={cls:["pd-btn-float"],name:"delete",title:"删除",disabled:!0,visible:!1,icon:delete_1["default"](20)},e}(editor_tool_1.PdSDKEditorTool);exports.PdSDKEditorDelete=PdSDKEditorDelete;