!function(e,t){"use strict";e.indexServer=function(){let e={treeData:[],zTreeObj:null};function n(n,r,a){n.preventDefault(),t("#iframe").attr("src",a.url),e.zTreeObj.expandNode(a)}return t(function(){e.getJSONData()}),e.getJSONData=function(){t.ajax("menu.json").done(t=>{e.treeData=t}).done(()=>{e.initTree()})},e.initTree=function(){const r={view:{dblClickExpand:!1,nameIsHTML:!0},data:{key:{title:"title",children:"childs"}},callback:{onClick:n}},a=e.treeData;e.zTreeObj=t.fn.zTree.init(t("#tree"),r,a);var i=e.zTreeObj.getNodes();if(i.length>0)for(var l=0;l<i.length;l++)e.zTreeObj.expandNode(i[l],!0,!1,!1)},e}()}(window,jQuery);