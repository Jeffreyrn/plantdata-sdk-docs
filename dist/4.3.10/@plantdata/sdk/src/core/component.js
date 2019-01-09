"use strict";var __extends=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(exports,"__esModule",{value:!0});var $=require("jquery"),event_1=require("./event"),spin_1=require("../ui/components/spin/spin"),elecreator_1=require("./elecreator"),PdComponent=function(t){function e(e){var n=t.call(this)||this;return n.settings=n.initSettings(e),n.created(),n.$el=n.initTemplate(),n.mounted(),n}return __extends(e,t),e.gentLoadingHTML=function(t,e,n){void 0===t&&(t=""),void 0===e&&(e="lg"),void 0===n&&(n="div");var o=spin_1.PdUISpin.create({size:e});return elecreator_1.PdEleCreator.createEle(n,{cls:t,html:o})},e.prototype.destroy=function(){this.unbindEvent(),this.clearDOM()},e.prototype.select=function(t,e){return void 0===e&&(e=this.$el),e.find(t)},e.prototype.bindEvent=function(){},e.prototype.created=function(){},e.prototype.initSettings=function(t){return $.extend(!0,{},e.defaultSettings,t)},e.prototype.mounted=function(){},e.prototype.removeDOM=function(){this.$el.remove()},e.prototype.clearDOM=function(){this.$el.empty(),this.$el[0].className=this.originClass||""},e.prototype.saveOriginClass=function(t){t.length?this.originClass=t[0].className||"":console.error("save origin class failed!")},e.prototype.unbindEvent=function(){this.clearEvent()},e.defaultSettings={},e}(event_1.PdEvent);exports.PdComponent=PdComponent;