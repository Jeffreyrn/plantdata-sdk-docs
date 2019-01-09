"use strict";var __extends=this&&this.__extends||function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function d(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(d.prototype=i.prototype,new d)}}();Object.defineProperty(exports,"__esModule",{value:!0});var $=require("jquery"),common_1=require("../../../../common/common"),form_1=require("../../../../ui/components/form/form"),editor_define_1=require("./editor-define"),edit_item_1=require("../../../../vis/utils/edit-item/edit-item"),dialog_1=require("../../../../vis/utils/modal/dialog/dialog"),close_circle_1=require("../../../../icon/close-circle"),mode_edit_1=require("../../../../icon/mode-edit"),PdSDKEditorDefineAttribute=function(t){function e(e){return t.call(this,e)||this}return __extends(e,t),e.prototype.destroy=function(){t.prototype.destroy.call(this)},e.prototype.getAttributeTr=function(t){var i=close_circle_1["default"](20,{"class":"pdsdk-editor-define-attribute-list-delete"}),d=mode_edit_1["default"](20,{"class":"pdsdk-editor-define-attribute-list-edit"});return'<tr data-id="'+t[this.settings.key]+'">\n                        <td class="pdsdk-editor-define-attribute-table-text pdsdk-editor-define-attribute-attr-name">\n                            '+t.name+'\n                        </td>\n                        <td class="pdsdk-editor-define-attribute-table-text pdsdk-editor-define-attribute-type">\n                            '+e.typeList[t.dataType]+'\n                        </td>\n                        <td class="pdsdk-editor-define-attribute-operation center">\n                            '+d+"\n                            "+i+"\n                        </td>\n                    </tr>"},e.prototype.updateStatusBySelection=function(t,e,i){},e.prototype.bindEvent=function(){var e=this;t.prototype.bindEvent.call(this),this.addDialog.$el.on("change",".pdsdk-editor-define-attribute-table-select",function(t){var i=$(t.currentTarget).val().toString();"1"===i||"2"===i?e.addDialog.$el.find('input[name="dataUnit"]').prop("disabled",!1):e.addDialog.$el.find('input[name="dataUnit"]').val("").prop("disabled",!0)}),this.editDialog.$el.on("change",".pdsdk-editor-define-attribute-table-select",function(t){var i=$(t.currentTarget).val().toString();"1"===i||"2"===i?e.editDialog.$el.find('input[name="dataUnit"]').prop("disabled",!1):e.editDialog.$el.find('input[name="dataUnit"]').val("").prop("disabled",!0)})},e.prototype.createEditDialogSettings=function(){for(var t=this,e="",i=this.getEditFormSettings(),d=0,r=i;d<r.length;d++){var n=r[d];e+=edit_item_1.PdVisEditItem.gentEditItem(n)}return{cls:"pdsdk-editor-define-attribute-edit-dialog pdsdk-editor-common-dialog",title:this.settings.title,body:e,positiveClick:function(){var e=form_1.PdUIForm.getFormData(t.editDialog.$el);return e&&e.name?(e=$.extend(!0,{},t.editData,e),t.updateAttribute(e).then(function(i){common_1.PdCommonUtils.success("修改成功");for(var d=0;d<t.attributeListData.length;d++)t.attributeListData[d][t.settings.key].toString()===e[t.settings.key].toString()&&(t.attributeListData[d]=e);t.$attributeList.find("tr[data-id="+e[t.settings.key]+"]").empty().append($(t.getAttributeTr(e)).find("td"))})):(common_1.PdCommonUtils.error("名称必填"),Promise.reject(new Error("名称必填")))}}},e.prototype.mounted=function(){var t=this;this.drawAttributeListContainer(this.settings.sdkNetChart.settings.selector);var i="";for(var d in e.typeList)e.typeList.hasOwnProperty(d)&&(i+="5"===d?'<option value ="'+d+'" selected="selected">\n                                               '+e.typeList[d]+"\n                                           </option>":'<option value ="'+d+'">'+e.typeList[d]+"</option>");i='<select class="pdsdk-editor-define-attribute-table-select" name="dataType">'+i+"</select>";var r=this.createEditDialogSettings();if(r){this.editDialog=new dialog_1.PdVisDialog(r),r.buttons=[{settings:{type:"primary",size:"sm",cls:"pdvis-modal-add-more",html:"继续添加"},events:{click:function(e){var i=form_1.PdUIForm.getFormData(t.addDialog.$el);return i&&i.name?t.addAttribute(i).then(function(e){return common_1.PdCommonUtils.success("添加成功"),i[t.settings.key]=e,t.attributeListData.push(i),t.$attributeList.find(".pdsdk-editor-define-attribute-num").text(t.attributeListData.length),1===t.attributeListData.length?t.$attributeList.find(".pdsdk-editor-define-attribute-list tbody").html(t.getAttributeTr(i)):t.$attributeList.find(".pdsdk-editor-define-attribute-list tbody").append(t.getAttributeTr(i)),form_1.PdUIForm.setFormData(t.addDialog.$el,{name:"",dataType:"5",dataUnit:""}),t.addDialog.$el.find('input[name="dataUnit"]').prop("disabled",!0),Promise.resolve(i)}):(common_1.PdCommonUtils.error("名称必填"),Promise.reject(new Error("名称必填")))}}}],r.positiveClick=function(){var e=form_1.PdUIForm.getFormData(t.addDialog.$el);return e&&e.name?t.addAttribute(e).then(function(i){return common_1.PdCommonUtils.success("添加成功"),e[t.settings.key]=i,t.attributeListData.push(e),t.$attributeList.find(".pdsdk-editor-define-attribute-num").text(t.attributeListData.length),1===t.attributeListData.length?t.$attributeList.find(".pdsdk-editor-define-attribute-list tbody").html(t.getAttributeTr(e)):t.$attributeList.find(".pdsdk-editor-define-attribute-list tbody").append(t.getAttributeTr(e)),Promise.resolve(e)}):(common_1.PdCommonUtils.error("名称必填"),Promise.reject(new Error("名称必填")))},this.addDialog=new dialog_1.PdVisDialog(r),this.editDialog.$el.find(".pdsdk-editor-define-attribute-modify-select").html(i),this.addDialog.$el.find(".pdsdk-editor-define-attribute-modify-select").html(i);var n=this.addDialog.$el.find(".pdvis-edit-item").eq(0);"定义域"===n.find(".pdvis-edit-item-label").text()&&n.addClass("hide")}this.bindEvent()},e.prototype.unbindEvent=function(){t.prototype.unbindEvent.call(this),this.addDialog.$el.off("change",".pdsdk-editor-define-attribute-table-select"),this.editDialog.$el.off("change",".pdsdk-editor-define-attribute-table-select")},e.defaultSettings={},e.typeList={1:"整数值",2:"浮点值",4:"日期时间",41:"日期",42:"时间",5:"字符串",6:"计算属性",8:"Map型",10:"文本型",51:"超链接"},e}(editor_define_1.PdSDKEditorDefine);exports.PdSDKEditorDefineAttribute=PdSDKEditorDefineAttribute;