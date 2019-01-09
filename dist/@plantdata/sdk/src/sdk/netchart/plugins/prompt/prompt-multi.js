"use strict";var __extends=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(exports,"__esModule",{value:!0});var $=require("jquery"),lodash_1=require("lodash"),prompt_1=require("./prompt"),node_list_1=require("../../../utils/node-list/node-list"),common_1=require("../../../../common/common"),index_1=require("../../../../ui/components/button/index"),PdSDKPluginPromptMulti=function(t){function e(e){return t.call(this,e)||this}return __extends(e,t),e.prototype.analysis=function(t){var e=lodash_1.map(t,function(t){return t.id});this.container.load({id:e.join(","),nodes:t},"user-explore")},e.prototype.setAnalysisStatus=function(t){this.$analysisBtn.prop("disabled",!t)},e.prototype.bindEvent=function(){var e=this;t.prototype.bindEvent.call(this),this.setNodeInfo(),this.addEvent("beforedraw",function(){var t=e.container.loadParams.$source;"dblClick"!==t&&"merge"!==t&&e.setNodeInfo()}),this.$el.on("click",".pdsdk-prompt-preview",function(){var t=e.nodeList.getNodes();t.length?e.analysis(t):common_1.PdCommonUtils.error("请先指定分析对象")})},e.prototype.created=function(){var e=this,n={promptSettings:{autocompleteSettings:{onSearch:function(t){t&&e.nodeList.addNode(t)}}}};this.settings=$.extend(!0,{},n,this.settings),t.prototype.created.call(this)},e.prototype.initSettings=function(n){return $.extend(!0,{},t.prototype.initSettings.call(this,e.defaultSettings),n)},e.prototype.initTemplate=function(){var t="分析目标",e="";this.nodeList=new node_list_1.PdSDKNodeList(this.settings.nodeListSettings);var n=index_1.PdUIButton.create({cls:"pdsdk-prompt-preview",type:"primary",html:"分析",atts:{disabled:!0}});this.$analysisBtn=$(n);var o='<div class="pdsdk-prompt-multi">\n                            <div class="pdsdk-prompt"></div>\n                            <div class="pdsdk-prompt-list"></div>\n                        </div>',i=$(o);return i.find(".pdsdk-prompt-list").append(this.nodeList.$el).append(this.$analysisBtn),this.settings.promptSettings.selector=i.children(".pdsdk-prompt"),this.buildPluginTemplate(i,e,t)},e.prototype.setNodeInfo=function(){this.nodeList.emptyNodes();var t=this.container.loadParams;if(t){for(var e=t.nodes||[],n=0,o=e;n<o.length;n++){var i=o[n];this.nodeList.addNode(i)}t.id=t.id||common_1.PdCommonUtils.createId("explore-")}},e.prototype.unbindEvent=function(){t.prototype.unbindEvent.call(this),this.$el.off("click",".pdsdk-prompt-preview")},e.defaultSettings={side:"left"},e}(prompt_1.PdSDKPluginPrompt);exports.PdSDKPluginPromptMulti=PdSDKPluginPromptMulti;