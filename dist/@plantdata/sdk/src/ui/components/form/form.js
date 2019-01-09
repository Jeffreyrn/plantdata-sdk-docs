"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var $=require("jquery"),prefix_1=require("../prefix"),common_1=require("../../../common/common"),PdUIForm=function(){function t(){}return t.getFormData=function(e,r){void 0===r&&(r={});var a=$.extend(!0,{},t.getSettings,r);$.extend(!0,a,r);var o=a.attr,i="fieldset["+o+"]:not(["+t.attrModel+"]),."+t.clsFieldsetName+"["+o+"]:not(["+t.attrModel+"])",n=e.find(i),m={};return $.each(n,function(r,n){var s=$(n),l=s.attr(o);if(l){var c=s.parent().closest(i);c.length&&c.attr(o)!==e.attr(o)||(t.isArrayItem(s)?(m[l]||(m[l]=[]),m[l].push(t.getFormData(s,a))):m[l]=t.getFormData(s,a))}}),$.extend(m,t.getFormGroupData(e,a)),m},t.setFormData=function(e,r,a){void 0===a&&(a={});var o=$.extend(!0,{},t.setSettings,a);$.extend(!0,o,a);var i=o.attr,n="fieldset["+i+"],."+t.clsFieldsetName+"["+i+"]";t.setFormGroupData(e,r,o);var m=e.find(n);$.each(m,function(a,m){var s=$(m),l=s.attr(i);if(l){var c=s.parent().closest(n);if(!c.length||c.attr(i)===e.attr(i))if(t.isArrayItem(s)){var d=s.parent(),f=d.children("["+t.attrModel+"]");f.length?d.children("["+i+'="'+l+'"]:not(['+t.attrModel+"])").remove():d.children("["+i+'="'+l+'"]:gt(0)').remove();for(var u=0,v=0,p=r[l];v<p.length;v++){var g=p[v],h=t.cloneFormItem(s,f,d,u);t.setFormData(h,g,o),u++}}else t.setFormData(s,r[l],o)}})},t.changeNullData=function(t){return 0!==t&&t!==!1?t||"":t},t.clearNullData=function(e){if(Array.isArray(e)||$.isPlainObject(e))for(var r in e)e.hasOwnProperty(r)&&(e[r]=t.clearNullData(e[r]));else e=t.changeNullData(e);return e},t.cloneFormItem=function(e,r,a,o){return(0!==o||r.length)&&(e=e.clone(),r.length&&e.removeAttr(t.attrModel),e.appendTo(a),e.find("[id]").each(function(r,a){t.updateFormItemId($(a),e,o)}),e.attr("id")&&t.updateFormItemId(e,a,o)),e},t.getFormGroupData=function(e,r){void 0===r&&(r={});var a=$.extend(!0,{},t.getSettings,r),o=a.attr,i="fieldset["+o+"],."+t.clsFieldsetName+"["+o+"],["+t.attrModel+"]",n={},m=e.find("["+o+"]");return $.each(m,function(r,m){var s=$(m);if(!s.is(i)){var l=s.closest(i);if(!l.length||l.attr(o)===e.attr(o)){var c=s.attr(o);s.is('input[type="checkbox"]')?s.is("["+t.attrSwitch+"]")?n[c]=t.getFormItemData(s,a):(n[c]||(n[c]=[]),m.checked&&n[c].push(t.getFormItemData(s,a))):s.is('input[type="radio"]')&&!m.checked?$.noop():t.isArrayItem(s)?(n[c]||(n[c]=[]),n[c].push(t.getFormItemData(s,a))):n[c]=t.getFormItemData(s,a)}}}),n},t.getFormItemData=function(e,r){void 0===r&&(r={});var a=$.extend(!0,{},t.getSettings,r),o="",i=e.attr(t.attrBeforeGet);if(i&&(o=common_1.PdCommonUtils.eval(i)(o,e)),e.is("IMG"))o=e.attr("src");else if(e.is('input[type="checkbox"],input[type="radio"]')){var n=e[0];e.is("["+t.attrSwitch+"]")?o=n.checked:n.checked&&(o=e.val())}else if(e.is("input,select,textarea"))o=e.val();else if(e.is("["+t.attrGetter+"],["+t.attrKey+"]")){var m=e.attr(t.attrGetter)||e.attr(t.attrKey),s=a.getter?a.getter[m]:null;s?o=s(e):common_1.PdCommonUtils.error("找不到"+m+"获取器")}else o=e.is("["+t.attrGet+"]")?common_1.PdCommonUtils.eval(e.attr(t.attrGet))(e):e.is("["+t.attrContainer+"]")?e.is("["+t.attrHTML+"]")?e.find("["+t.attrItem+"]").html():e.find("["+t.attrItem+"]").text():e.is("["+t.attrHTML+"]")?e.html():e.text();var l=e.attr(t.attrAfterGet);return l&&(o=common_1.PdCommonUtils.eval(l)(o,e)),o},t.getFormItemValue=function(e,r,a){void 0===r&&(r={}),void 0===a&&(a={});var o=$.extend(!0,{},t.getSettings,a),i=o.attr,n="",m=e.attr(i);return m&&(n=r[m]),n},t.isArrayItem=function(e){return e.is("["+t.attrArray+"]")},t.setFormGroupData=function(e,r,a){void 0===a&&(a={});var o=$.extend(!0,{},t.setSettings,a),i=o.attr,n="fieldset["+i+"],."+t.clsFieldsetName+"["+i+"]",m=e.find("input["+i+"][type=checkbox],input["+i+"][type=radio]");m.prop("checked",!1);var s=e.find("["+i+"]");$.each(s,function(a,m){var s=$(m),l=s.closest(n).attr(i),c=e.attr(i);l!==c||s.is(n)||t.setSubFormGroupData(s,t.getFormItemValue(s,r,o),o)})},t.setSubFormGroupData=function(e,r,a){void 0===a&&(a={});var o=$.extend(!0,{},t.setSettings,a),i=o.attr;if(e.is('input[type="checkbox"]'))if(Array.isArray(r)){e.prop("checked",!1);for(var n=0,m=r;n<m.length;n++){var s=m[n];s+""===e.val()&&t.setFormItemData(e,!0,o)}}else t.setFormItemData(e,r===!0||r+""===e.val(),o);else if(e.is('input[type="radio"]'))t.setFormItemData(e,r+""===e.val(),o);else if(Array.isArray(r)){var l=e.parent(),c=e.attr(i),d=l.children("["+t.attrModel+"]");d.length?l.children("["+i+'="'+c+'"]:not(['+t.attrModel+"])").remove():l.children("["+i+'="'+c+'"]:gt(0)').remove();for(var f=0,u=0,v=r;u<v.length;u++){var p=v[u],g=t.cloneFormItem(e,d,l,f);t.setFormItemData(g,p,o),f++}}else t.setFormItemData(e,r,o)},t.setFormItemData=function(e,r,a){void 0===a&&(a={});var o=$.extend(!0,{},t.setSettings,a);r=o.clearNull?t.clearNullData(r):r;var i=e.attr(t.attrBeforeUpdate);if(i&&(r=common_1.PdCommonUtils.eval(i)(r,e)),e.is("IMG"))e.attr("src",r);else if(e.is('input[type="checkbox"],input[type="radio"]'))e.prop("checked",r);else if(e.is("input,select,textarea"))e.val(r);else if(e.is("["+t.attrSetter+"],["+t.attrKey+"]")){var n=e.attr(t.attrSetter)||e.attr(t.attrKey),m=o.setter?o.setter[n]:null;m?m(e,r):common_1.PdCommonUtils.error("找不到"+n+"设置器")}else e.is("["+t.attrSet+"]")?common_1.PdCommonUtils.eval(e.attr(t.attrSet))(e,r):e.is("["+t.attrContainer+"]")?e.is("["+t.attrHTML+"]")?e.find("["+t.attrItem+"]").html(r):e.find("["+t.attrItem+"]").text(r):e.is("["+t.attrHTML+"]")?e.html(r):e.text(r);var s=e.attr(t.attrAfterUpdate);s&&common_1.PdCommonUtils.eval(s)(r,e)},t.updateFormItemId=function(t,e,r){var a=t.attr("id"),o=common_1.PdCommonUtils.createId(a,"","-"+r);t.attr("id",o),e.find('[for="'+a+'"]').attr("for",o)},t.attrName=prefix_1["default"].attr+"form",t.attrArray=t.attrName+"-array",t.attrAfterGet=t.attrName+"-afterget",t.attrAfterUpdate=t.attrName+"-afterupdate",t.attrBeforeGet=t.attrName+"-beforeget",t.attrBeforeUpdate=t.attrName+"-beforeupdate",t.attrContainer=t.attrName+"-container",t.attrGet=t.attrName+"-get",t.attrGetter=t.attrName+"-getter",t.attrHTML=t.attrName+"-html",t.attrItem=t.attrName+"-item",t.attrKey=t.attrName+"-key",t.attrModel=t.attrName+"-model",t.attrSet=t.attrName+"-set",t.attrSetter=t.attrName+"-setter",t.attrSwitch=t.attrName+"-switch",t.clsName=prefix_1["default"].cls+"form",t.cls="."+t.clsName,t.clsFieldsetName=t.clsName+"-fieldset",t.getSettings={attr:"name",getter:{}},t.setSettings={attr:"name",clearNull:!0,setter:{}},t}();exports.PdUIForm=PdUIForm;