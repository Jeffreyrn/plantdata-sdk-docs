"use strict";var __extends=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(exports,"__esModule",{value:!0});var $=require("jquery"),lodash_1=require("lodash"),common_1=require("../../../common/common"),component_1=require("../../../core/component"),close_1=require("../../../icon/close"),PdSDKNodeList=function(t){function e(e){var o=t.call(this,e)||this;return o.nodes=[],o}return __extends(e,t),e.prototype.addNode=function(t){return this.inNodes(t)?void common_1.PdCommonUtils.error("该对象已添加"):(this.nodes.push(t),this.dispatch("dataChange",{nodes:this.nodes}),void this.drawNodes())},e.prototype.emptyNodes=function(){this.nodes=[],this.dispatch("dataChange",{nodes:this.nodes}),this.drawNodes()},e.prototype.getNodes=function(){return this.nodes},e.prototype.inNodes=function(t){return!!lodash_1.find(this.nodes,["id",t.id])},e.prototype.removeNode=function(t){this.nodes.splice(t,1),this.dispatch("dataChange",{nodes:this.nodes}),this.drawNodes()},e.prototype.bindEvent=function(){var e=this;t.prototype.bindEvent.call(this),this.$el.on("click","li svg",function(t){var o=$(t.target).closest("li").index();e.removeNode(o)}),this.$el.on("mouseenter","li",function(t){var o=$(t.target).closest("li").index();e.dispatch("mouseenter",{node:e.nodes[o]})}),this.$el.on("mouseleave","li",function(t){var o=$(t.target).closest("li").index();e.dispatch("mouseleave",{node:e.nodes[o]})})},e.prototype.drawNodes=function(){if(this.$el.empty(),this.nodes)for(var t=0,e=this.nodes;t<e.length;t++){var o=e[t];if(o.name){var n=o.name;o.meaningTag&&(n+="["+o.meaningTag+"]");var i=close_1["default"](20),s=$('<li title="'+n+'">'+n+i+"</li>");this.$el.append(s)}}},e.prototype.initSettings=function(o){return $.extend(!0,{},t.prototype.initSettings.call(this,e.defaultSettings),o)},e.prototype.initTemplate=function(){return $('<ul class="pdsdk-node-list"></ul>')},e.prototype.mounted=function(){t.prototype.mounted.call(this),this.bindEvent()},e.prototype.unbindEvent=function(){t.prototype.unbindEvent.call(this),this.$el.off("click","li svg"),this.$el.off("mouseenter","li"),this.$el.off("mouseleave","li")},e}(component_1.PdComponent);exports.PdSDKNodeList=PdSDKNodeList;