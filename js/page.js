;(function(){

	creatEle("a",{
		href:"https://kscript.github.io/exam/Q/"+(page.id+1)+".html",
		style:{
			cssText:"position:fixed;top:20px;left:auto;"
		},
		innerHTML:"下一题"
	},document.body)
	creatEle("a",{
		href:page.id==1?"javascript:void(0);":"https://kscript.github.io/exam/Q/"+(page.id-1)+".html",
		style:{
			cssText:"position:fixed;top:20px;left:auto;"
		},
		innerHTML:page.id==1?"没有啦":"上一题"
	},document.body)
	function creatEle(tagname,conf,parentNode){
		var el=document.createElement(tagname);
		for(var i in conf){
			el[i]=conf[i];
		}
		parentNode=parentNode||document.body;
		parentNode.appendChild(el);
	}
})()