"use strict";var __extends=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(exports,"__esModule",{value:!0});var $=require("jquery"),lodash_1=require("lodash"),editor_tool_1=require("./editor-tool"),common_1=require("../../../../common/common"),utils_1=require("../../../utils/utils"),tag_prompt_1=require("../../../utils/tag-prompt/tag-prompt"),PdSDKEditorEditEntity=function(t){function e(e){return t.call(this,e)||this}return __extends(e,t),e.prototype.destroy=function(){this.parsPromptTag.destroy(),t.prototype.destroy.call(this)},e.prototype.bindDialogEvent=function(){var t=this;this.editDialog.$el.find(".pdvis-edit-item").on("blur",'input[name="meaningTag"]',function(e){if($(e.currentTarget).hasClass("pdsdk-editor-change")){var n=$(e.currentTarget).val(),i=t.editDialog.$el.find(".pdvis-edit-item").find('input[name="name"]').val();t.updateNameAndMeaningTag({meaningTag:n,name:i}).then(function(t){common_1.PdCommonUtils.success("消歧标识修改成功"),$(e.currentTarget).removeClass("pdsdk-editor-change")})}}).on("blur",'textarea[name="abs"]',function(e){if($(e.currentTarget).hasClass("pdsdk-editor-change")){var n=$(e.currentTarget).val();t.updateAbstract({abs:n}).then(function(t){common_1.PdCommonUtils.success("描述修改成功"),$(e.currentTarget).removeClass("pdsdk-editor-change")})}}).on("blur",'input[name="imageUrl"]',function(e){if($(e.currentTarget).hasClass("pdsdk-editor-change")){var n=$(e.currentTarget).val();t.updateImage({imageUrl:n}).then(function(i){t.data.img=n,t.updateNode(t.settings.netChart,t.data),common_1.PdCommonUtils.success("图片修改成功"),$(e.currentTarget).removeClass("pdsdk-editor-change")})}}).on("change","input, textarea",function(t){$(t.currentTarget).addClass("pdsdk-editor-change")})},e.prototype.initPrompts=function(){var t=this,e=this.editDialog.$el.find(".pdsdk-editor-edit-entity-pars-prompt"),n=$.extend(!0,{},{kgName:this.settings.kgName,ajaxSettings:this.settings.ajaxSettings},this.settings.parentPromptSettings);this.parsPromptTag=new tag_prompt_1.PdSDKTagPrompt({size:"sm",data:this.pars,labelKey:"name",valueKey:"id",selector:e,beforeAdd:function(e){return t.addParent(e).then(function(n){var i=lodash_1.find(t.settings.netChart.getData().nodes,function(t){return t.id.toString()===e.id.toString()});if(i){var r={id:common_1.PdCommonUtils.createId(),to:e.id.toString(),from:t.data.id.toString()};t.addLink(t.settings.netChart,r)}return common_1.PdCommonUtils.success("父概念添加成功"),Promise.resolve(e)})},beforeDelete:function(e){return t.deleteParent(e).then(function(n){common_1.PdCommonUtils.success("父概念删除成功");var i=lodash_1.find(t.settings.netChart.getData().links,function(n){return n.from.toString()===e.id.toString()&&n.to.toString()===t.data.id.toString()||n.to.toString()===e.id.toString()&&n.from.toString()===t.data.id.toString()});return i&&t.deleteLink(t.settings.netChart,i),Promise.resolve(n)})},promptSettings:n})},e.prototype.mounted=function(){t.prototype.mounted.call(this),this.bindDialogEvent()},e.prototype.updateImage=function(t){var e=this.settings.ajaxSettings,n=e.queryData||{},i=e.formData||{};n.kgName=this.settings.kgName,n.id=this.data.id,i=$.extend(!0,{},t);var r={url:e.baseUrl+"general/add/imageUrl",type:"POST",data:i};return r=$.extend(!0,{},r,e,this.settings.updateImageUrlSettings),r.url=utils_1.PdSDKUtils.buildUrl(r.url,n),utils_1.PdSDKUtils.ajax(r)},e.prototype.validate=function(e){var n=!0;return this.editDialog&&(n=t.prototype.validate.call(this,e),this.updateValidateStatus("parent",!!this.data),this.data||(common_1.PdCommonUtils.error("所属概念不能为空"),n=!1)),n},e.prototype.unbindEvent=function(){t.prototype.unbindEvent.call(this),this.editDialog.$el.find(".pdvis-edit-item").off("blur",'input[name="name"]').off("blur",'input[name="meaningTag"]').off("blur",'textarea[name="abs"]').off("blur",'input[name="imageUrl"]').off("change","input, textarea")},e.defaultPromptSettings={promptType:"100"},e}(editor_tool_1.PdSDKEditorTool);exports.PdSDKEditorEditEntity=PdSDKEditorEditEntity;