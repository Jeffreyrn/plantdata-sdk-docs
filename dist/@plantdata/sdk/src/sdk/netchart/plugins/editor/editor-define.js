"use strict";var __extends=this&&this.__extends||function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}();Object.defineProperty(exports,"__esModule",{value:!0});var $=require("jquery"),lodash_1=require("lodash"),common_1=require("../../../../common/common"),editor_tool_1=require("./editor-tool"),form_1=require("../../../../ui/components/form/form"),edit_item_1=require("../../../../vis/utils/edit-item/edit-item"),close_1=require("../../../../icon/close"),inbox_1=require("../../../../icon/inbox"),PdSDKEditorDefine=function(t){function e(e){return t.call(this,e)||this}return __extends(e,t),e.prototype.destroy=function(){t.prototype.destroy.call(this)},e.prototype.drawAddAttributeForm=function(){this.addDialog.$el.find(".add-dialog-content").html('\n         <table class="pdui-table pdsdk-editor-define-attribute-table pdsdk-editor-define-attribute-table" width="100%">\n            <thead>\n            <tr>\n                <th>\n                    '+this.settings.localization.tableTitle1+'\n                </th>\n                <th class="">\n                     '+this.settings.localization.tableTitle2+"\n                </th>\n                <th>\n                    "+this.settings.localization.tableTitle3+'\n                </th>\n                <th class="pdsdk-editor-define-attribute-table-operation center">\n                    操作\n                </th>\n            </tr>\n            </thead>\n            <tbody>\n            '+this.addAttributeTrHTML+"\n            "+this.addAttributeTrHTML+'\n            </tbody>\n        </table>\n        <br>\n        <button class=" pdui-btn pdui-btn-primary pdui-btn-sm pdvis-modal-positive\n        pdsdk-editor-define-attribute-add-more">继续添加</button>\n        ')},e.prototype.drawAttributeList=function(t){var e="";if(this.$attributeList.find(".pdsdk-editor-define-attribute-num").text(t.length),t.length)for(var i=0,n=t;i<n.length;i++){var d=n[i];e+=this.getAttributeTr(d)}else{var a=inbox_1["default"](40);e='<tr class="no-data"><td colspan="3" rowspan="3" class="no-data-content">'+a+"<br/>暂无数据</td></tr>"}this.$attributeList.find(".pdsdk-editor-define-attribute-list").html('\n            <table class="pdui-table" width="100%">\n                <thead>\n                <tr>\n                    <th>\n                        '+this.settings.localization.tableTitle1+"\n                    </th>\n                    <th>\n                        "+this.settings.localization.tableTitle2+'\n                    </th>\n                    <th class="center pdsdk-editor-define-attribute-operation">\n                        操作\n                    </th>\n                </tr>\n                </thead>\n                <tbody>\n                '+e+"\n                </tbody>\n            </table>\n        ")},e.prototype.updateStatusBySelection=function(t,e,i){},e.prototype.bindEvent=function(){var e=this;t.prototype.bindEvent.call(this),this.$attributeList.on("click",function(){e.$attributeList.addClass("hide")}).on("click",".pdsdk-editor-define-attribute-list-container",function(t){return t.stopPropagation(),t.preventDefault(),!1}).on("click",".pdsdk-editor-define-container-header .pdsdk-editor-define-close",function(){e.$attributeList.addClass("hide")}).on("click",".pdsdk-editor-define-container-abs .pdsdk-editor-define-add-attribute",function(t){return e.drawAddAttributeForm(),form_1.PdUIForm.setFormData(e.addDialog.$el,{name:"",dataType:"5",dataUnit:"",isFunctional:"0"}),e.addDialog.$el.find('input[name="dataUnit"]').prop("disabled",!0),e.addDialog.open({}),t.stopPropagation(),t.preventDefault(),!1}).on("click",".pdsdk-editor-define-attribute-list-delete",function(t){var i=$(t.currentTarget).closest("tr"),n=i.attr("data-id");e.deleteAttribute(n).then(function(t){if(i.remove(),lodash_1.remove(e.attributeListData,function(t){return t[e.settings.key].toString()===n.toString()}),e.$attributeList.find(".pdsdk-editor-define-attribute-num").text(e.attributeListData.length),common_1.PdCommonUtils.success("删除成功"),!e.$attributeList.find("tbody tr").length){var d=inbox_1["default"](40);e.$attributeList.find("tbody").html('<tr class="no-data"><td colspan="3" rowspan="3" class="no-data-content">\n                                                    '+d+"<br/>暂无数据</td></tr>")}})}).on("click",".pdsdk-editor-define-attribute-list-edit",function(t){var i=$(t.currentTarget).closest("tr").attr("data-id");e.editData=lodash_1.find(e.attributeListData,function(t){return t[e.settings.key].toString()===i.toString()});var n=e.getDomainSelectHTML();e.editDialog.$el.find(".pdsdk-editor-define-attribute-modify-domain-select").html(n),form_1.PdUIForm.setFormData(e.editDialog.$el,e.editData),!e.editData.dataType||"1"!==e.editData.dataType.toString()&&"2"!==e.editData.dataType.toString()?e.editDialog.$el.find('input[name="dataUnit"]').prop("disabled",!0):e.editDialog.$el.find('input[name="dataUnit"]').prop("disabled",!1),e.editDialog.open()}),this.addDialog.$el.on("click",".pdsdk-editor-define-attribute-table-delete",function(t){var i=$(t.currentTarget).closest("tr"),n=$(t.currentTarget).attr("data-id");e.deleteAttribute(n).then(function(t){if(i.remove(),e.$attributeList.find(".pdsdk-editor-define-attribute-list tbody").find("tr[data-id="+n+"]").remove(),lodash_1.remove(e.attributeListData,function(t){return t[e.settings.key].toString()===n.toString()}),e.$attributeList.find(".pdsdk-editor-define-attribute-num").text(e.attributeListData.length),!e.$attributeList.find("tbody tr").length){var d=inbox_1["default"](40);e.$attributeList.find("tbody").html('<tr class="no-data"><td colspan="3" rowspan="3" class="no-data-content">\n                                                    '+d+"<br/>暂无数据</td></tr>")}common_1.PdCommonUtils.success("删除成功")})}).on("click",".pdsdk-editor-define-attribute-add-more",function(){e.addDialog.$el.find("tbody").append(e.addAttributeTrHTML)})},e.prototype.createEditDialogSettings=function(){for(var t=this,i="",n=0,d=e.editFormSettings;n<d.length;n++){var a=d[n];i+=edit_item_1.PdVisEditItem.gentEditItem(a)}return{cls:"pdsdk-editor-define-attribute-edit-dialog pdsdk-editor-common-dialog",title:this.settings.title,body:i,positiveClick:function(){var e=form_1.PdUIForm.getFormData(t.editDialog.$el);return e=$.extend(!0,{},t.editData,e),t.updateAttribute(e).then(function(i){for(var n=0;n<t.attributeListData.length;n++)t.attributeListData[n].id.toString()===e.id.toString()&&(t.attributeListData[n]=e);t.$attributeList.find("tr[data-id="+e.id+"]").empty().append($(t.getAttributeTr(e)).find("td"))})}}},e.prototype.drawAttributeListContainer=function(t){var e=close_1["default"](20,{"class":"pdsdk-editor-define-close"});this.$attributeList=$('\n            <div class="pdsdk-editor-define-attribute-list-mark pdvis-namespace hide">\n                <div class="pdsdk-editor-define-attribute-list-container">\n                    <div class="pdsdk-editor-define-container-header">\n                       <span class="pdsdk-editor-define-title">'+this.settings.localization.listTitle+"定义</span>"+e+'\n                    </div>\n                    <div class="pdsdk-editor-define-container-abs">\n                        <div>\n                            <span class="pdsdk-editor-define-attribute-name color">-</span>\n                            '+this.settings.localization.listType+'属性共\n                            <span class="pdsdk-editor-define-attribute-num color">0</span>\n                            条\n                        </div>\n                        <button class="pdui-btn pdui-btn-primary pdui-btn-xs pdsdk-editor-define-add-attribute">添加</button>\n                    </div>\n                    <div class="pdsdk-editor-define-attribute-list"></div>\n                </div>\n            </div>\n        '),this.$attributeList.appendTo(t)},e.prototype.getDomainList=function(t,e){var i=lodash_1.find(this.settings.sdkNetChart.schema.types,function(e){return e.k.toString()===t});return i&&(e.push(i),"0"!==i.parentId&&this.getDomainList(i.parentId.toString(),e)),e},e.prototype.getDomainSelectHTML=function(){var t=[],e="";return t=this.getDomainList(this.editData.domain,t),lodash_1.map(t,function(t){e+='<option value ="'+t.k+'">'+t.v+"</option>"}),'<select class="pdsdk-editor-define-domain-select" name="domain">'+e+"</select>"},e.prototype.initSettings=function(i){var n=$.extend(!0,{},e.defaultSettings);return $.extend(!0,{},t.prototype.initSettings.call(this,n),i)},e.prototype.mounted=function(){},e.prototype.unbindEvent=function(){t.prototype.unbindEvent.call(this),this.$attributeList.off("click").off("click",".pdsdk-editor-define-attribute-list-container").off("click",".pdsdk-editor-define-container-header .pdsdk-editor-define-close").off("click",".pdsdk-editor-define-container-abs .pdsdk-editor-define-add-attribute").off("click",".pdsdk-editor-define-attribute-list-delete").off("click",".pdsdk-editor-define-attribute-list-edit"),this.addDialog.$el.off("change",".pdsdk-editor-define-attribute-table-select").off("click",".pdsdk-editor-define-attribute-table-operation .pdsdk-editor-define-attribute-table-add").off("click",".pdsdk-editor-define-attribute-table-delete").off("click",".pdsdk-editor-define-attribute-add-more"),this.editDialog.$el.off("change",".pdsdk-editor-define-attribute-table-select")},e.defaultSettings={attributeType:"0",key:"id"},e.editFormSettings=[],e}(editor_tool_1.PdSDKEditorTool);exports.PdSDKEditorDefine=PdSDKEditorDefine;