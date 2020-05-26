var miniGame=document.querySelector(".miniGame")
var startBtn=document.querySelector(".startBtn")
var startPage=document.querySelector(".page .startBtn")
var gamingPage=document.querySelector(".gaming")
var scoreNum=document.querySelector(".score .num")
var endPage=document.querySelector(".page.endGame")
var endGameScore=document.querySelector(".page.endGame .num")
var restartBtnDom=document.querySelector(".page.endGame .reStartBtn")
var pauseBtn=document.querySelector(".pauseBtn")
var snake=[]
var setId
var  count=0

var score=0 //初始化得分
var food={x:10,y:10}
// 定义蛇运动的方向
var direction={x:-1,y:0}
// 从右向左{x:-1,y:0}
// 从左往右{x:1;y:0}
// 从上往下{x:0,y:1}
// 从下往上{x:0,y:-1}

startBtn.onclick=function(){
	startPage.style.display="none";
	gamingPage.style.display="block";
	gameIng()
}

function renderGezi(){
	for(var i=0;i<20;i++){
		for (var j=0;j<15;j++){
			var gezi=document.createElement("div")
			gezi.className="gezi"
			gezi.id='x'+j+'y'+i;
			miniGame.appendChild(gezi)
		}
	}
}
// pause
pauseBtn.onclick=function(){
		if(count%2==0){
			clearInterval(setId)
			pauseBtn.innerHTML="继续"
		}else{
			gameIng()
			pauseBtn.innerHTML="暂停"
		}
		count++
}
// 创建蛇
function createSnake(){
	var randomX=parseInt(Math.random()*13);
	var randomY=parseInt(Math.random()*20);
	snake=[];
	for(var i=0;i<3;i++){
		snake.push({x:randomX+i,y:randomY})
	}
}


// 渲染蛇 
function renderSnake(){
	snake.forEach(function(item,i){
		var snakeBody =document.querySelector("#x"+item.x+"y"+item.y);
		snakeBody.className="gezi snake";
	})
}
// 渲染食物
function renderFood(){
	var randomX=parseInt(Math.random()*15);
	var randomY=parseInt(Math.random()*20);
	var foodDiv=document.querySelector("#x"+randomX+"y"+randomY);
	if(foodDiv.className=="gezi snake"){
		renderFood()
	}else{
		foodDiv.className="gezi food"
	}
}
renderGezi()
createSnake()
renderSnake()
renderFood()
function gameIng(){
	
		 setId= setInterval(function(){
			var headerX=snake[0].x+direction.x;
			var headerY=snake[0].y+direction.y;
			if(headerX<0){
				headerX=14
			}else if(headerX>14){
				headerX=0
			}
			if(headerY<0){
				headerY=19
			}else if(headerY>19){
				headerY=0
			}
			var snakeHeader = {x:headerX,y:headerY}
			isSnake(snakeHeader)
			if(!isFood(snakeHeader)){
				// 将删除的蛇，找到相对应格子，修改它的类为正常的gezi
				var snakeFooter=snake.pop()
				var snakeFooterDiv=document.querySelector("#x"+ snakeFooter.x+"y"+ snakeFooter.y)
				snakeFooterDiv.className="gezi"
			}
			snake.unshift(snakeHeader)
			
			
			renderSnake()
		},300)
	
	
}

// 判断是不是蛇
function isSnake(snakeHeader){
	var newHeader=document.querySelector("#x"+snakeHeader.x+"y"+snakeHeader.y);
	if(newHeader.className=="gezi snake"){
		clearInterval(setId)
		gamingPage.style.display="none"
		endPage.style.display="flex"
		endGameScore.innerHTML=score
		
		return true;
	}else{
		return false;
	}
}
// 判断是不是食物
function isFood(snakeHeader){
	var newHeader=document.querySelector("#x"+snakeHeader.x+"y"+snakeHeader.y);
	if(newHeader.className=="gezi food"){
		score++;
		scoreNum.innerHTML=score
		renderFood();
		return true;
	}else{
		return false;
	}
}
var body=document.body
body.addEventListener("keydown",function(e){
	if(e.key =="ArrowUp"&&direction.y!=1){
		direction={x:0,y:-1}
	}
	if(e.key =="ArrowDown"&&direction.y!=-1){
		direction={x:0,y:1}
	}
	if(e.key =="ArrowLeft"&&direction.x!=1){
		direction={x:-1,y:0}
	}
	if(e.key =="ArrowRight"&&direction.x!=-1){
		direction={x:1,y:0}
	}
})
NimoEvent.init(body);
body.addEvent("swiperLeft",function(){
	if(direction.x!=1){
		direction={x:-1,y:0}
	}
})
body.addEvent("swiperRight",function(){
	if(direction.x!=-1){
		direction={x:1,y:0}
	}
})
body.addEvent("swiperTop",function(){
	if(direction.y!=-1){
		direction={x:0,y:-1}
	}
})
body.addEvent("swiperBottom",function(){
	if(direction.y!=1){
		direction={x:0,y:1}
	}
})
restartBtnDom.onclick=function(){
	location.reload();
	console.log(1)
}