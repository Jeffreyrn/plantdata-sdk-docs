"use strict";var __extends=this&&this.__extends||function(){var t=function(r,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var o in r)r.hasOwnProperty(o)&&(t[o]=r[o])})(r,o)};return function(r,o){function n(){this.constructor=r}t(r,o),r.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(exports,"__esModule",{value:!0});var graph_1=require("./graph"),toolbar_1=require("../../../vis/netchart/plugins/toolbox/toolbar/toolbar"),PdSDKDcEcGraph=function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return __extends(r,t),r.prototype.initPlugins=function(){t.prototype.initPlugins.call(this);var r=this.settings;if(r.toolbar&&r.toolbar.enable){var o=this.createPluginSettings(r.toolbar);this.toolbar=new toolbar_1.PdVisPluginToolbar(o)}},r.prototype.initSettings=function(r){return r=t.prototype.initSettings.call(this,r),this.initNetChartSettings(r)},r}(graph_1.PdSDKGraph);exports.PdSDKDcEcGraph=PdSDKDcEcGraph;