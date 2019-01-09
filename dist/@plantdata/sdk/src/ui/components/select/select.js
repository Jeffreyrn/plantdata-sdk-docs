"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var $=require("jquery"),prefix_1=require("../prefix"),common_1=require("../../../common/common"),elecreator_1=require("../../../core/elecreator"),form_1=require("../form"),PdUISelect=function(){function t(){}return t.clearValue=function(e){var a=e.attr(t.attrId),r=e.children(t.clsItems);a&&(r=$(t.clsItems+"["+t.attrId+'="'+a+'"]'));var l=e.children("span["+t.attrValue+"]");r.children("["+t.attrValue+"]").removeClass("active"),l.text("").attr(t.attrValue,"");var s=e.attr(t.attrChange);s&&common_1.PdCommonUtils.eval(s)("",e)},t.create=function(e){void 0===e&&(e={});var a,r;e=$.extend(!0,{},t.defaultSettings,e),e.atts=e.atts||{},e.atts.id=e.atts.id||common_1.PdCommonUtils.createId(t.clsName);var l=t.clsName;e.size&&(l+=" "+t.clsName+"-"+e.size),e.cls&&(l+=" "+e.cls),e.cls=l;for(var s=common_1.PdCommonUtils.transferOption(e.options),c="",i=e.selected,n=i,o=0,d=s;o<d.length;o++){var m=d[o],u={cls:"",atts:(a={},a[t.attrValue]=m.value,a)};m.disabled&&(u.cls+=" disabled"),!i&&m.checked&&(i=m.value),i===m.value&&(u.cls+=" active",n=$("<div>"+m.label+"</div>").text()),u.html=elecreator_1.PdEleCreator.createEle("label",{html:m.label,atts:{"for":e.atts.id}}),c+=elecreator_1.PdEleCreator.createEle("li",u)}var v=elecreator_1.PdEleCreator.createEle("ul",{html:c,cls:prefix_1["default"].cls+"select-dropdown"});i||(i=s.length?s[0].value:"");var f=elecreator_1.PdEleCreator.createEle("span",{html:n||"",atts:(r={},r[t.attrValue]=i,r)});return e.html=f+v,e.atts=e.atts||{},e.atts[form_1.PdUIForm.attrKey]=t.clsName,elecreator_1.PdEleCreator.createEle("div",e)},t.getItemsContainer=function(e){var a=e.children(t.clsItems);if(!a.length){var r=e.attr(t.attrId);a=$("["+t.attrRole+'="select"]['+t.attrId+'="'+r+'"]'+t.clsItems)}return a},t.getValue=function(e){var a=e.children("["+t.attrValue+"]");return a.attr(t.attrValue)},t.init=function(){t.bindEvent()},t.setValue=function(e,a){var r=e.attr(t.attrId),l=e.children(t.clsItems);r&&(l=$(t.clsItems+"["+t.attrId+'="'+r+'"]'));var s=l.children("["+t.attrValue+'="'+a+'"]'),c=e.children("span["+t.attrValue+"]");if(s.length){var i=s.text();s.addClass("active").siblings(".active").removeClass("active"),c.text(i).attr(t.attrValue,a)}else l.children("["+t.attrValue+"]").removeClass("active"),c.text(a).attr(t.attrValue,a);var n=e.attr(t.attrChange);n&&common_1.PdCommonUtils.eval(n)(a,e)},t.updateOptions=function(e,a,r){var l,s=t.getItemsContainer(e);s.empty();for(var c=0,i=a;c<i.length;c++){var n=i[c],o="";n.value===r&&(o="active");var d=elecreator_1.PdEleCreator.createEle("li",{cls:o,html:n.label,atts:(l={},l[t.attrValue]=n.value,l.title=n.label,l)});s.append(d)}r&&t.setValue(e,r)},t.bindEvent=function(){var e=t.cls+":not(.disabled)>span["+t.attrValue+"]";$("body").on("click",e,function(e){var a=$(e.currentTarget),r=a.closest(t.cls),l=r.attr(t.attrId);if(!l){l=common_1.PdCommonUtils.createId(t.clsName),r.attr(t.attrId,l);var s="inactive ";r.hasClass(t.clsName+"-xs")?s+=t.clsName+"-xs":r.hasClass(t.clsName+"-sm")?s+=t.clsName+"-sm":r.hasClass(t.clsName+"-md")?s+=t.clsName+"-md":r.hasClass(t.clsName+"-lg")&&(s+=t.clsName+"-lg");var c=a.siblings(t.clsItems);c.children().each(function(t,e){var a=$(e);a.attr("title")||a.attr("title",a.text())}),c.attr(t.attrId,l).attr(t.attrRole,"select").addClass(s).appendTo("body")}var i=a.offset(),n=i.left,o=i.top+a.outerHeight()+4;$(t.clsItems+"["+t.attrId+'="'+l+'"]').css({top:o,left:n,width:a.outerWidth()}).toggleClass("active inactive")}).on("click",t.clsItems+">li:not(.disabled)",function(e){var a=$(e.currentTarget),r=a.parent().attr(t.attrId),l=a.attr(t.attrValue),s=$(t.cls+"["+t.attrId+'="'+r+'"]');t.setValue(s,l)}).on("click",function(e){$(e.target).closest(t.cls).length||$(".active["+t.attrRole+'="select"]'+t.clsItems).removeClass("active").addClass("inactive")})},t.defaultSettings={},t.attrChange=prefix_1["default"].attr+"change",t.attrId=prefix_1["default"].attr+"id",t.attrRole=prefix_1["default"].attr+"role",t.attrValue=prefix_1["default"].attr+"value",t.clsName=prefix_1["default"].cls+"select",t.cls="."+t.clsName,t.clsItems="."+prefix_1["default"].cls+"select-dropdown",t}();exports.PdUISelect=PdUISelect,$(function(){PdUISelect.init(),form_1.PdUIForm.getSettings.getter[PdUISelect.clsName]=PdUISelect.getValue,form_1.PdUIForm.setSettings.setter[PdUISelect.clsName]=PdUISelect.setValue});