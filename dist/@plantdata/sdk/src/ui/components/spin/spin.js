"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var prefix_1=require("../prefix"),$=require("jquery"),elecreator_1=require("../../../core/elecreator"),PdUISpin=function(){function e(){}return e.create=function(r){r=$.extend(!0,{},e.defaultSettings,r);var t=e.clsContainerName;return r.cls&&(t+=" "+r.cls),r.size&&(t+=" "+e.clsName+"-"+r.size),r.cls=t,r.html=elecreator_1.PdEleCreator.createEle("div",{cls:e.clsName}),elecreator_1.PdEleCreator.createEle("div",r)},e.defaultSettings={},e.clsName=prefix_1["default"].cls+"spin",e.cls="."+e.clsName,e.clsContainerName=prefix_1["default"].cls+"spin-container",e}();exports.PdUISpin=PdUISpin;