"use strict";var __extends=this&&this.__extends||function(){var t=function(s,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,s){t.__proto__=s}||function(t,s){for(var e in s)s.hasOwnProperty(e)&&(t[e]=s[e])})(s,e)};return function(s,e){function n(){this.constructor=s}t(s,e),s.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}();Object.defineProperty(exports,"__esModule",{value:!0});var $=require("jquery"),lodash_1=require("lodash"),common_1=require("../../../../common/common"),utils_1=require("../../../../vis/utils/utils"),plugin_1=require("../plugin"),delete_1=require("../../../../icon/delete"),add_1=require("../../../../icon/add"),settings_1=require("../../../../icon/settings"),format_list_numbered_1=require("../../../../icon/format-list-numbered"),cascader_1=require("../../../../vis/utils/cascader"),PdSDKPluginStats=function(t){function s(s){return t.call(this,s)||this}return __extends(s,t),s.createOptionItem=function(t,s,e){void 0===e&&(e=!1);for(var n='<ul class="clearfix pdvis-cr-box" data-name="'+s+'">',i=common_1.PdCommonUtils.createId(s+"-"),a=0,d=t;a<d.length;a++){var o=d[a],l=i+"-"+o.k,r=o.v,p=o.k,c=e?"checkbox":"radio";n+="<li>"+utils_1.PdVisUtils.buildCRHTML({id:l,name:i,type:c,label:r,value:p})+"</li>"}return n+="</ul>"},s.prototype.destroy=function(){this.typeSelector&&this.typeSelector.destroy(),t.prototype.destroy.call(this)},s.prototype.getPluginType=function(){return"stats"},s.prototype.getStatsConfig=function(){return this.statsConfig},s.prototype.bindEvent=function(){var s=this;t.prototype.bindEvent.call(this),this.rendererData(),this.addEvent("schemaUpdate",function(t){s.settings.schema=t.schema,s.$settingsPanel&&s.updateOptions()},this.settings.sdkNetChart),this.addEvent("beforedraw",function(){s.rendererData()}),this.$el.on("mouseenter",".pdsdk-stats-ul>li",function(t){var e=[$(t.currentTarget).data("node")];s.container.setEmphasisNode(e),s.container.updateStyle()}),this.$el.on("mouseleave",".pdsdk-stats-ul>li",function(){s.container.clearEmphasisNode(),s.container.updateStyle()})},s.prototype.clearSettings=function(){this.$settingsPanel.find('[name="id"]').val(""),this.$settingsPanel.find('[name="key"]').val(""),this.typeSelector.setValue(null),this.$settingsPanel.find('[data-name="atts"] input[type="checkbox"]').prop("checked",!1)},s.prototype.createSettingsPanel=function(){if(this.settings.editable&&this.settings.schema){this.namePrefix=common_1.PdCommonUtils.createId("pdvisSettingsModal-"),this.$settingsPanel=$('<div class="pdsdk-settings-panel pdsdk-settings-stats hide">\n                    <div class="pdsdk-panel-body">\n                          <div class="pdsdk-settings-title">\n                            <label>统计名称</label>\n                          </div>\n                          <div>\n                            <input class="hide" type="input" id="'+this.namePrefix+'-id" name="id">\n                            <input type="text" class="pdui-input pdui-input-sm" id="'+this.namePrefix+'-key" name="key">\n                          </div>\n                          <div class="pdsdk-settings-title">\n                            <label>统计目标</label>\n                          </div>\n                          <div>\n                            <div class="pdsdk-settings-stats-types"></div>\n                          </div>\n                          <div class="pdsdk-settings-title">\n                            <label>统计包含关系</label>\n                          </div>\n                          <div class="pdsdk-settings-content">\n                            <div class="pdsdk-settings-stats-atts"></div>\n                          </div>\n                    </div>\n                    <div class="pdsdk-panel-foot">\n                      <button class="pdui-btn pdui-btn-sm pdui-btn-primary-outline pdsdk-btn-settings-close">\n                        取消\n                      </button>\n                      <button class="pdui-btn pdui-btn-sm pdui-btn-primary pdsdk-btn-settings">\n                        确定\n                      </button>\n                    </div>\n                </div>');var t=this.settings.$parent||this.select("#"+this.panelId);t.append(this.$settingsPanel),this.updateOptions(),this.initEditEvent()}},s.prototype.getSettings=function(){var t=this.$settingsPanel.find('[name="id"]').val(),s=this.$settingsPanel.find('[name="key"]').val(),e=this.typeSelector.getValue(),n=[];return this.$settingsPanel.find('[data-name="atts"] input[type="checkbox"]:checked').each(function(t,s){n.push($(s).val()+"")}),{id:t,key:s,type:e,atts:n}},s.prototype.initEditEvent=function(){var t=this;this.$el.on("click",".pdsdk-stats-config",function(s){var e=$(s.target).closest(".pdsdk-stats-content").data("data");t.setSettings(e),t.$settingsPanel.removeClass("hide")}),this.$el.on("click",".pdsdk-stats-delete",function(s){var e=$(s.target).closest(".pdsdk-stats-content"),n=e.data("data");if(e.remove(),n.id)lodash_1.remove(t.statsConfig,["id",n.id]);else{var i=e.index();t.statsConfig.splice(i,1)}}),this.$el.on("click",".pdsdk-stats-add",function(){t.clearSettings(),t.$settingsPanel.removeClass("hide")}),this.$settingsPanel.find(".pdsdk-btn-settings-close").on("click",function(){t.$settingsPanel.addClass("hide")}),this.$settingsPanel.find(".pdsdk-btn-settings").on("click",function(){t.updateSettings()&&(t.container.reload(),t.$settingsPanel.addClass("hide"))})},s.prototype.initSettings=function(e){return $.extend(!0,{},t.prototype.initSettings.call(this,s.defaultSettings),e)},s.prototype.initTemplate=function(){var t="图统计",s=format_list_numbered_1["default"](20),e='<div class="pdsdk-stats pdsdk-stats-edit-'+this.settings.editable+'"></div>';return this.buildPluginTemplate(e,s,t)},s.prototype.mounted=function(){t.prototype.mounted.call(this),this.createSettingsPanel(),this.bindEvent()},s.prototype.rendererData=function(){var t=this.container.getAvailableData();if(t){var s=t.stats;this.select(".pdsdk-stats").empty();var e=settings_1["default"](20),n=delete_1["default"](20);if(s&&s.length){this.statsConfig=[];for(var i=function(s){s.id=common_1.PdCommonUtils.createId("stat-");var i=$('<div class="pdsdk-stats-content"><div class="pdsdk-stats-subtitle"><span>'+s.key+'</span><div class="pdsdk-stats-delete">'+n+'</div><div class="pdsdk-stats-config">'+e+'</div></div><ul class="pdsdk-stats-ul"></ul></div>').data("data",s);s.rs&&s.rs.length?(s.rs=lodash_1.orderBy(s.rs,["count"],["desc"]),s.rs.forEach(function(s,e){var n=s.id.toString(),a=lodash_1.find(t.nodes,["id",n]),d=$('<li><i class="pdsdk-stats-no pdsdk-stats-no-'+(e+1)+'">'+(e+1)+'</i><span class="name">'+a.name+'</span><span class="num">'+s.count+"</span></li>");d.data("node",n),i.find(".pdsdk-stats-ul").append(d)})):i.find(".pdsdk-stats-ul").append('<div class="pdsdk-stats-no-data">没有统计数据</div>'),a.select(".pdsdk-stats").append(i),delete s.rs,a.statsConfig.push(s)},a=this,d=0,o=s;d<o.length;d++){var l=o[d];i(l)}}else this.select(".pdsdk-stats").append('<div class="pdsdk-stats-no-stats">暂无数据</div>');if(this.settings.editable&&this.settings.schema){var r=add_1["default"](24);this.select(".pdsdk-stats").append('<div class="pdsdk-stats-add"><button class="pdui-btn pdui-btn-primary-outline">'+r+"添加统计分析</button></div>")}}},s.prototype.setSettings=function(t){this.clearSettings(),this.$settingsPanel.find('[name="id"]').val(t.id),this.$settingsPanel.find('[name="key"]').val(t.key),this.typeSelector.setValue(t.type.toString());for(var s=0,e=t.atts;s<e.length;s++){var n=e[s];this.$settingsPanel.find('[data-name="atts"] input[type="checkbox"][value="'+n+'"]').prop("checked",!0)}},s.prototype.updateSettings=function(){var t=this.getSettings();if(!t.key)return common_1.PdCommonUtils.error("请输入统计名称"),!1;if(!t.type)return common_1.PdCommonUtils.error("请选择统计目标"),!1;if(!t.atts||!t.atts.length)return common_1.PdCommonUtils.error("请选择统计包含关系"),!1;if(t.id){var s=lodash_1.findIndex(this.statsConfig,["id",t.id]);this.statsConfig[s]=t}else this.statsConfig||(this.statsConfig=[]),this.statsConfig.push(t);return!0},s.prototype.unbindEvent=function(){t.prototype.unbindEvent.call(this),this.$el.off("mouseenter",".pdsdk-stats-ul>li"),this.$el.off("mouseleave",".pdsdk-stats-ul>li")},s.prototype.updateAttsOptions=function(t){var e=[];if(t)for(var n=0,i=this.settings.schema.atts;n<i.length;n++){var a=i[n];if(t.toString()===a.domain.toString())e.push(a);else for(var d=0,o=a.range;d<o.length;d++){var l=o[d];if(t.toString()===l.toString()){e.push(a);break}}}else e=this.settings.schema.atts;if(e.length){var r=s.createOptionItem(e,"atts",!0);this.$settingsPanel.find(".pdsdk-settings-stats-atts").html(r)}else this.$settingsPanel.find(".pdsdk-settings-stats-atts").html('<div class="pdvis-edit-no-option">不存在可以配置的项目</div>')},s.prototype.updateOptions=function(){var t=this,s=common_1.PdCommonUtils.listToTree(this.settings.schema.types,"0","k","v","parentId"),e=this.$settingsPanel.find(".pdsdk-settings-stats-types"),n={selector:e,data:s,size:"sm",change:function(s){t.updateAttsOptions(s)},changeOnSelect:!0};this.typeSelector&&this.typeSelector.destroy(),this.typeSelector=new cascader_1.PdVisCascader(n),this.updateAttsOptions()},s.defaultSettings={side:"left",editable:!0},s}(plugin_1.PdSDKPlugin);exports.PdSDKPluginStats=PdSDKPluginStats;