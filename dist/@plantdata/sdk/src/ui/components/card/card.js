"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var prefix_1=require("../prefix"),elecreator_1=require("../../../core/elecreator"),PdUICard=function(){function e(){}return e.create=function(l){if(l){if(!l.html){var c="";l.head&&("string"==typeof l.head?c+='<div class="'+e.clsHeadName+'">'+l.head+"</div>":(l.head.cls=l.head.cls||"",l.head.cls=l.head.cls+" "+e.clsHeadName,c+=elecreator_1.PdEleCreator.createEle("div",l.head))),l.body&&("string"==typeof l.body?c+='<div class="'+e.clsBodyName+'">'+l.body+"</div>":(l.body.cls=l.body.cls||"",l.body.cls=l.body.cls+" "+e.clsBodyName,c+=elecreator_1.PdEleCreator.createEle("div",l.body))),l.foot&&("string"==typeof l.foot?c+='<div class="'+e.clsFootName+'">'+l.foot+"</div>":(l.foot.cls=l.foot.cls||"",l.foot.cls=l.foot.cls+" "+e.clsFootName,c+=elecreator_1.PdEleCreator.createEle("div",l.foot))),l.html=c}return l.cls=l.cls||"",l.cls=l.cls+" "+e.clsName,elecreator_1.PdEleCreator.createEle("div",l)}return'<div class="'+e.clsName+'"></div>'},e.clsName=prefix_1["default"].cls+"card",e.cls="."+e.clsName,e.clsHeadName=prefix_1["default"].cls+"card-head",e.clsBodyName=prefix_1["default"].cls+"card-body",e.clsFootName=prefix_1["default"].cls+"card-foot",e}();exports.PdUICard=PdUICard;