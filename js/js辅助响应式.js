function xys(){
	var html=document.querySelector("html")
	html.className=""
	var useragent=navigator.userAgent
	if(useragent.indexOf("iPhone")!=-1){
		html.classList.add("iphone")
	}else if(useragent.indexOf("Android")!=-1){
		html.classList.add("android")
	}else if(useragent.indexOf("iPad")!=-1){
		html.classList.add("ipad")
	}else{
		html.classList.add("pc")
	}
	// window.innerWidth 可以获取窗口的宽度
	var winWidth=window.innerWidth
	if(winWidth<=640){
		html.classList.add("lt640")
		html.classList.add("lt960")
		html.classList.add("lt1200")
	}else if(winWidth<=960){
		html.classList.add("gt640")
		html.classList.add("lt960")
		html.classList.add("lt1200")
	}else if(winWidth<=1200) {
		html.classList.add("gt640")
		html.classList.add("gt960")
		html.classList.add("lt1200")
	}else{
		html.classList.add("gt640")
		html.classList.add("gt960")
		html.classList.add("gt1200")
		}
		// rem布局
		var screenWidth=window.innerWidth;
		var danwei=screenWidth/3.75;//屏幕的宽度/设计稿占满全屏的宽度为多少rem
		var html=document.querySelector("html");
		html.style.fontSize=danwei+"px";
		
	
	
	

}
xys()
window.onresize=function(){
	xys()
}


