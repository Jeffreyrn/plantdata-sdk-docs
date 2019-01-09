"use strict";var __extends=this&&this.__extends||function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function o(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(o.prototype=i.prototype,new o)}}();Object.defineProperty(exports,"__esModule",{value:!0});var $=require("jquery"),lodash_1=require("lodash"),tool_item_1=require("../../../../vis/utils/tool-item/tool-item"),common_1=require("../../../../common/common"),form_1=require("../../../../ui/components/form/form"),edit_item_1=require("../../../../vis/utils/edit-item/edit-item"),dialog_1=require("../../../../vis/utils/modal/dialog/dialog"),message_1=require("../../../../ui/components/message/message"),PdSDKEditorTool=function(t){function e(e){return t.call(this,e)||this}return __extends(e,t),e.prototype.addNode=function(t,e,i){void 0===i&&(i="");var o=t.getData();o.nodes.push(e);var n=lodash_1.find(o.nodes,function(t){return t.id.toString()===i.toString()});n&&o.links.push({id:common_1.PdCommonUtils.createId(),from:i.toString(),to:e.id.toString()});var r=t.getLoadParams();r.$source="editorAdd";var a=o;a.entityList=o.nodes,a.relationList=o.links,t.addData(o,r)},e.prototype.addLink=function(t,e){var i=t.getData(),o=lodash_1.find(i.nodes,function(t){return t.id.toString()===e.from.toString()}),n=lodash_1.find(i.nodes,function(t){return t.id.toString()===e.to.toString()});if(o&&n){i.links.push(e);var r=t.getLoadParams();r.$source="editorAdd";var a=i;a.entityList=i.nodes,a.relationList=i.links,t.addData(i,r)}},e.prototype.deleteNode=function(t,e){var i=t.getData();lodash_1.remove(i.nodes,function(t){return t.id.toString()===e.id.toString()}),lodash_1.remove(i.links,function(t){return t.from.toString()===e.id.toString()||t.to.toString()===e.id.toString()});var o=t.getLoadParams();o.$source="editorDelete";var n=i;n.entityList=i.nodes,n.relationList=i.links,t.addData(i,o)},e.prototype.deleteLink=function(t,e){var i=t.getData();lodash_1.remove(i.links,function(t){return t.id.toString()===e.id.toString()});var o=t.getLoadParams();o.$source="editorDelete";var n=i;n.entityList=i.nodes,n.relationList=i.links,t.addData(i,o)},e.prototype.updateNode=function(t,e){for(var i=t.getData(),o=0;o<i.nodes.length;o++)i.nodes[o].id.toString()===e.id.toString()&&(i.nodes[o]=e);var n=t.getLoadParams();n.$source="editorUpdate";var r=i;r.entityList=i.nodes,r.relationList=i.links,t.addData(i,n)},e.prototype.updateLink=function(t,e){for(var i=t.getData(),o=0;o<i.links.length;o++)i.links[o].id.toString()===e.id.toString()&&(i.links[o]=e);var n=t.getLoadParams();n.$source="editorUpdate";var r=i;r.entityList=i.nodes,r.relationList=i.links,t.addData(i,n)},e.prototype.showEdit=function(t,e){this.editDialog&&(form_1.PdUIForm.setFormData(this.editDialog.$el,t),this.editDialog.open({event:e}))},e.prototype.updateSchema=function(t){this.settings.schema=t},e.prototype.bindEvent=function(){var e=this;t.prototype.bindEvent.call(this),this.addEvent("selectionChange",function(t){e.updateStatusBySelection(t.nodes,t.links,e.settings.netChart.getData())},this.settings.netChart),this.addEvent("schemaUpdate",function(t){e.updateSchema(t.schema)},this.settings.sdkNetChart)},e.prototype.bindValidateEvent=function(t){if(this.editDialog)for(var e=0,i=t;e<i.length;e++){var o=i[e];o.required&&"input"===o.type&&this.editDialog.$el.on("input",'.pdvis-edit-item[data-path="'+o.key+'"]',function(t){edit_item_1.PdVisEditItem.checkValueItemRequired($(t.currentTarget))})}},e.prototype.createEditDialogSettings=function(){return null},e.prototype.initSettings=function(i){return $.extend(!0,{},t.prototype.initSettings.call(this,e.defaultSettings),i)},e.prototype.initTemplate=function(){return t.prototype.initTemplate.call(this).addClass("pd-btn-float")},e.prototype.mounted=function(){t.prototype.mounted.call(this);var e=this.createEditDialogSettings();e&&(this.editDialog=new dialog_1.PdVisDialog(e))},e.prototype.validate=function(t){var e=!0;if(this.editDialog)for(var i=0,o=t;i<o.length;i++){var n=o[i];if(n.required&&"input"===n.type){var r=this.editDialog.$el.find('.pdvis-edit-item[data-path="'+n.key+'"]');edit_item_1.PdVisEditItem.checkValueItemRequired(r)||(message_1.PdUIMessage.error(n.label+"不能为空"),e=!1)}}return e},e.prototype.updateValidateStatus=function(t,e){var i=this.editDialog.$el.find('.pdvis-edit-item[data-path="'+t+'"]');i.toggleClass("error",!e),i.toggleClass("success",e)},e.defaultSettings={tooltip:{position:"left"}},e}(tool_item_1.PdVisToolItem);exports.PdSDKEditorTool=PdSDKEditorTool;