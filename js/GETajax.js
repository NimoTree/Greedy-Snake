function getAjax(httpUrl,fn){
	//1.新建请求
	var xhr=new XMLHttpRequest()
	// 2.设置请求的方法和路径，"GET" "POST"
	xhr.open("GET",httpUrl)
	// xhr.open("POST","http://127.0.0.1:8848/15Ajax/abc.txt?")
	// 3.发送数据
	xhr.send()
	//4.监听后台是否返回数据
	xhr.onreadystatechange=function(){
		if(xhr.status==200&&xhr.readyState==4){
			// 5.处理数据
			fn(xhr)
		}
	}
	
	
}