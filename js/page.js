;(function(){

	creatEle.apply(null,["a",{
		href:"https://kscript.github.io/exam/Q/"+(page.id+1)+".html",
		style:{
			cssText:"position:fixed;top:20px;left:auto;"
		},
		innerHTML:"下一题"
	},{
		href:page.id==1?"javascript:void(0);":"https://kscript.github.io/exam/Q/"+(page.id-1)+".html",
		style:{
			cssText:"position:fixed;top:20px;left:auto;"
		},
		innerHTML:page.id==1?"没有啦":"上一题"
	}])

	function creatEle(tagname,conf,parent){
		var el=document.createElement(tagname);
		for(var i in conf){
			el[i]=conf[i];
		}
		(parent||document.body).appendChild(el);
	}
})()