"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var prefix_1=require("../prefix"),elecreator_1=require("../../../core/elecreator"),PdUIIcon=function(){function e(){}return e.create=function(r){void 0===r&&(r={});var c="icon ic-"+r.icon+" "+e.clsName+" ";return r.cls=r.cls?c+r.cls:c,elecreator_1.PdEleCreator.createEle("i",r)},e.clsName=prefix_1["default"].cls+"font",e.cls="."+e.clsName,e}();exports.PdUIIcon=PdUIIcon;