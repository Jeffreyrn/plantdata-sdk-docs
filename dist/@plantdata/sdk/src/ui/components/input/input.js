"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var $=require("jquery"),prefix_1=require("../prefix"),elecreator_1=require("../../../core/elecreator"),PdUIInput=function(){function e(){}return e.create=function(r){void 0===r&&(r={}),r=$.extend(!0,{},e.defaultSettings,r);var t=e.clsName;return r.size&&(t+=" "+e.clsName+"-"+r.size),r.cls&&(t+=" "+r.cls),r.cls=t,elecreator_1.PdEleCreator.createEle("input",r,!0)},e.defaultSettings={},e.clsName=prefix_1["default"].cls+"input",e.cls="."+e.clsName,e}();exports.PdUIInput=PdUIInput;