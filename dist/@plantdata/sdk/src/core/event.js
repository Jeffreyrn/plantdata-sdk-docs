"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var PdEvent=function(){function e(){this.events={},this.eventData={self:this}}return e.prototype.dispatch=function(e,t){var n=!1,r=this.events[e];if(r&&r.length){var i={};for(var s in this.eventData)this.eventData.hasOwnProperty(s)&&(i[s]=this.eventData[s]);if(t)for(var s in t)t.hasOwnProperty(s)&&(i[s]=t[s]);for(var v=0,a=r;v<a.length;v++){var o=a[v];!0===o(i)&&(n=!0)}}return n},e.prototype.on=function(e,t){this.events[e]||(this.events[e]=[]),this.events[e].push(t)},e.prototype.off=function(e,t){if(t&&this.events[e])for(var n=0,r=0,i=this.events[e];r<i.length;r++){var s=i[r];s===t&&this.events[e].splice(n,1),n++}else this.events[e]=[]},e.prototype.addEvent=function(e,t,n,r){void 0===n&&(n=this),void 0===r&&(r="default"),this.eventHandler||(this.eventHandler={});for(var i=e.split(","),s=0,v=i;s<v.length;s++){var a=v[s],o=this.eventHandler[a]||{};this.removeEvent(a,r),o[r]={scope:n,handler:t},this.eventHandler[a]=o,n.on(a,t)}},e.prototype.clearEvent=function(){if(this.eventHandler)for(var e in this.eventHandler)if(this.eventHandler.hasOwnProperty(e)){var t=this.eventHandler[e];if(t)for(var n in t)if(t.hasOwnProperty(n)){var r=t[n];r.scope.off(e,r.handler)}}},e.prototype.removeEvent=function(e,t){if(void 0===t&&(t="default"),this.eventHandler){var n=this.eventHandler[e];if(n){var r=n[t];r&&r.scope.off(e,r.handler)}}},e}();exports.PdEvent=PdEvent;