"use strict";var __extends=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(exports,"__esModule",{value:!0});var $=require("jquery"),prefix_1=require("../prefix"),common_1=require("../../../common/common"),component_1=require("../../../core/component"),elecreator_1=require("../../../core/elecreator"),PdUIAutofill=function(t){function e(e){var o=t.call(this,e)||this;return o.cacheList=[],o.loading=!1,o.nameKey="name",o}return __extends(e,t),e.resetPromptPosition=function(t,e){void 0===e&&(e=!1);var o=t.offsetParent(),n=o.scrollTop(),i=o.height(),s=t.height(),r=t.position().top;(r+s>i||r<0)&&(e?o.scrollTop(n+r-i+s):o.scrollTop(n+r))},e.prototype.clear=function(){this.$optionEl.empty(),this.$el.removeClass("has-value"),this.$el.find(e.clsInput).val(""),this.onSelectedItemChange(),this.settings.onSearchTextChange&&this.settings.onSearchTextChange("",this.$el,this)},e.prototype.drawPromptItems=function(t,e){var o=this.$optionEl;if(o.empty(),t&&t.length||this.settings.keyword){t&&t.length&&this.setCacheData(e,t);var n=t;this.settings.keyword&&(n=[e].concat(t)),o.append(this.createPromptItems(n,e)),o.children("li").eq(0).addClass("on")}else if(this.settings.noData.enable&&e&&!this.loading){var i=this.settings.noData.content;i||(i=this.settings.noData.contentFunction(e));var s=$(elecreator_1.PdEleCreator.createEle("li",{cls:"no-data",html:i}));o.append(s)}this.loading&&this.settings.showLoading&&this.showLoading(),this.onSelectedItemChange()},e.prototype.getSearchText=function(){return this.$el.find(e.clsInput).val()},e.prototype.getSelectedItem=function(){return this.selectedItem||this.getSearchText()},e.prototype.search=function(){var t=this.getSelectedItem();"string"!=typeof t&&this.setSearchText(this.getName(t)),this.settings.beforeSearch&&this.settings.beforeSearch(t,this.$el),this.settings.onSearch&&this.settings.onSearch(t,this.$el,this)},e.prototype.setSearchText=function(t){this.$el.find(e.clsInput).val(t)},e.prototype.setSelectedItem=function(t){this.selectedItem=t},e.prototype.beforePrompt=function(t){var e=this;this.promptText=t,this.hidePromptTo&&clearTimeout(this.hidePromptTo),this.hidePromptTo=setTimeout(function(){e.settings.beforePrompt&&e.settings.beforePrompt(t,e);var o=e.getCacheData(t);o.length?e.drawPromptItems(o,t):e.prompt(t)},this.settings.interval)},e.prototype.bindEvent=function(){var o=this;t.prototype.bindEvent.call(this),this.$optionEl.on("click","li",function(t){$(t.currentTarget).addClass("on").siblings(".on").removeClass("on"),o.onSelectedItemChange(),o.search()}),this.$el.on("input focus keyup",e.clsInput,function(t){var n=o.select(e.clsInput),i=n.val();if(o.$optionEl.removeClass("hide"),o.hidePromptTo&&clearTimeout(o.hidePromptTo),"keyup"===t.type||"focusin"===t.type||"focus"===t.type)if(o.$el.toggleClass("has-value",!!i),"keyup"===t.type){var s=o.$optionEl.children().length;if(s>0){var r=window.event?t.keyCode:t.which,a=o.$optionEl.find("li.on"),l=a.index(),p=!0;if(13===r)o.$optionEl.addClass("hide"),o.search();else if(38===r){var c=0===l?s-1:l-1;a=o.$optionEl.children(":eq("+c+")"),a.addClass("on").siblings("li").removeClass("on"),o.onSelectedItemChange(),e.resetPromptPosition(a)}else if(40===r){var h=l===s-1?0:l+1;a=o.$optionEl.children(":eq("+h+")"),a.addClass("on").siblings("li").removeClass("on"),o.onSelectedItemChange(),e.resetPromptPosition(a,!0)}else p=!1;if(p)return}}else"focusin"!==t.type&&"focus"!==t.type||o.$el.addClass("active");if(o.settings.prompt)(i||o.settings.empty)&&o.beforePrompt(i);else if("keyup"===t.type){var r=window.event?t.keyCode:t.which;13===r&&o.search()}"input"===t.type&&i!==n.data("data")&&(o.settings.onSearchTextChange&&o.settings.onSearchTextChange(i,o.$el,o),o.settings.prompt&&(o.drawPromptItems([],i),i&&o.settings.showLoading&&o.showLoading()),n.data("data",i))}).on("blur",e.clsInput,function(){setTimeout(function(){o.$el.removeClass("active"),o.$optionEl.addClass("hide")},300)}).on("keydown",e.clsInput,function(t){var e=window.event?t.keyCode:t.which;38!==e&&40!==e||t.preventDefault()})},e.prototype.createItemTitle=function(t){return this.settings.createItemTitle?this.settings.createItemTitle(t):this.getName(t)},e.prototype.createOptionEl=function(t,o){this.$optionEl=$(elecreator_1.PdEleCreator.createEle("ul",{cls:e.clsPromptName+" "+t+" hide"}));var n=o.offset().left;if(this.settings.promptContainerParent){$(this.settings.promptContainerParent).append(this.$optionEl);var i=o.offset().top;if("bottom"!==this.settings.position)return void common_1.PdCommonUtils.logger("error","promptContainerParent && position = top is not support yet");this.$optionEl.css({left:n,top:i+o.height()+1})}else if(o.append(this.$optionEl),"top"===this.settings.position){var s=o.height();this.$optionEl.css({left:n,top:"auto",bottom:s})}},e.prototype.createPromptItem=function(t,e){return this.settings.createPromptItem?this.settings.createPromptItem(t,e):this.getName(t).replace(new RegExp("("+e+")","gi"),'<span class="highlight">$1</span>')},e.prototype.createPromptItems=function(t,e){var o=this;if(this.settings.createPromptItems)return this.settings.createPromptItems(t,e);var n=$(elecreator_1.PdEleCreator.createEle("div"));return t.forEach(function(t){var i=o.createPromptItem(t,e),s=o.createItemTitle(t),r=$(elecreator_1.PdEleCreator.createEle("li",{html:i,atts:{title:s}})).data("data",t);n.append(r)}),n.children()},e.prototype.getCacheData=function(t){if(this.settings.cache.enable)for(var e=this.cacheList||[],o=0,n=e;o<n.length;o++){var i=n[o];if(i.key===t)return i.value}return[]},e.prototype.getName=function(t){return t[this.nameKey]},e.prototype.initSettings=function(o){return $.extend(!0,{},t.prototype.initSettings.call(this,e.defaultSettings),o)},e.prototype.mounted=function(){t.prototype.mounted.call(this);var e=this.settings.defaultData;e&&e instanceof Object&&(this.setSelectedItem(e),this.setSearchText(this.getName(e))),this.bindEvent()},e.prototype.onSelectedItemChange=function(){var t=null,e=this.$optionEl.find("li.on");e.length&&(t=e.data("data")),this.setSelectedItem(t),this.settings.onSelectItemChange&&this.settings.onSelectItemChange(t,this.$el,this)},e.prototype.prompt=function(t){var e=this;this.settings.onPrompt?(this.loading=!0,this.settings.onPrompt(t).then(function(o){e.promptText===t&&(e.loading=!1,e.drawPromptItems(o,t))},function(){e.loading=!1,common_1.PdCommonUtils.logger("error","Prompt Fail！")})):common_1.PdCommonUtils.logger("error","onPrompt is undefined！")},e.prototype.setCacheData=function(t,e){if(this.settings.cache.enable){var o=this.cacheList||[];o.length>=this.settings.cache.maxNum&&o.shift(),o.push({key:t,value:e})}},e.prototype.showLoading=function(){var t=this.$optionEl;if(t.find(".no-data").remove(),!t.find(".data-loading").length){var e=$(elecreator_1.PdEleCreator.createEle("li",{cls:"data-loading",html:"数据加载中..."}));t.append(e)}},e.prototype.unbindEvent=function(){t.prototype.unbindEvent.call(this),this.$optionEl.off("click","li"),this.$el.off("input focus keyup",e.clsInput).off("blur",e.clsInput).off("keydown",e.clsInput)},e.defaultSettings={cache:{enable:!0,maxNum:50},empty:!1,interval:300,noData:{enable:!0,content:"抱歉,暂无数据"},position:"bottom",placeholder:"请输入关键词...",prompt:!0,promptContainerCls:"",showLoading:!0},e.clsName=prefix_1["default"].cls+"autofill",e.cls="."+e.clsName,e.clsInputName=e.clsName+"-input",e.clsInput="."+e.clsInputName,e.clsPromptName=e.clsName+"-prompt",e}(component_1.PdComponent);exports.PdUIAutofill=PdUIAutofill;