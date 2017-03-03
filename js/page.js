;(function(){

	creatEle("a",{
		href:page.id==1?"javascript:void(0);":"https://kscript.github.io/exam/Q/"+(page.id-1)+".html",
		style:{
			cssText:"position:fixed;top:20px;left:auto;"
		},
		innerHTML:page.id==1?"没有啦":"上一题"
	})
	creatEle("a",{
		href:"https://kscript.github.io/exam/Q/"+(page.id+1)+".html",
		style:{
			cssText:"position:fixed;top:20px;left:auto;margin-left:52px;"
		},
		innerHTML:"下一题"
	})
	function creatEle(tagname,conf,parentNode){
		var el=document.createElement(tagname);
		for(var i in conf){
			if(i==="style"){
				for(var k in conf[i]){
					el[i][k]=conf[i][k];
				}
			}else{
				el[i]=conf[i];			
			}

		}
		document.body.appendChild(el);
	}
})()