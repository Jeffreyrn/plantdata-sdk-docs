"use strict";var __extends=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(exports,"__esModule",{value:!0});var $=require("jquery"),prompt_multi_1=require("../prompt/prompt-multi"),PdSDKPluginExplore=function(t){function e(e){return t.call(this,e)||this}return __extends(e,t),e.prototype.bindEvent=function(){var e=this;t.prototype.bindEvent.call(this),this.addEvent("dataChange",function(t){switch(t.nodes.length){case 0:e.setAnalysisStatus(!1);break;case 1:e.setAnalysisStatus(!0),e.$analysisBtn.text("图探索");break;default:e.setAnalysisStatus(!0),e.$analysisBtn.text("关联分析")}},this.nodeList)},e.prototype.initSettings=function(e){return $.extend(!0,{},t.prototype.initSettings.call(this,prompt_multi_1.PdSDKPluginPromptMulti.defaultSettings),e)},e.defaultSettings={},e}(prompt_multi_1.PdSDKPluginPromptMulti);exports.PdSDKPluginExplore=PdSDKPluginExplore;