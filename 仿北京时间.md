# 仿北京时间

> 做着玩玩,北京时间

HTML结构



<div class="wrap">
        <div class="clock">
            <img src="images/clock.png" width="65" height="65" alt="clock">
            <p class="timer"></p>
            <p class="week">
                <span></span>
                <span></span>
            </p>
        </div>
    </div><div class="wrap">
        <div class="clock">
            <img src="images/clock.png" width="65" height="65" alt="clock">
            <p class="timer"></p>
            <p class="week">
                <span></span>
                <span></span>
            </p>
        </div>
    </div>


scss结构

	html,body{
	    display: flex;
	    justify-content: center;
	    align-items: center;
	    min-width: 540px;
	}
	.wrap{
	    position: absolute;
	    top: 0;
	    bottom: 0;
	    left: 0;
	    right: 0;
	    width: 540px;
	    height: 100px;
	    margin: auto;
	    background-image: linear-gradient(#0168bf,#6ca9e1);
	    img{
	        float: left;
	        margin: 18px 24px 0 50px;
	    }
	    .timer{
	        float: left;
	        font-size: 40px;
	        line-height: 100px;
	        font-family: Verdana, Geneva, Tahoma, sans-serif;
	        color: aliceblue;
	        span{
	            margin-left: 14px; 
	            font-size: 24px;
	        }
	    }
	    .week{
	        float: left;
	        height: 42px;
	        margin-left: 40px;
	        margin-top: 19px;
	        span{
	            display: block;
	            color: aliceblue;
	        }
	        span:nth-child(1){
	            height: 30px;
	            font-size: 20px;
	            line-height: 30px;
	        }
	        span:nth-child(2){
	            height: 23px;
	            font-size: 15px;
	            line-height: 23px;
	        }
	    }
	}


JS结构

	(function(){
    var oTimer=document.querySelector('.timer'),//获取时分秒
        oWeek=document.querySelectorAll('.week span'),//获取星期集合
        timer=null;//定义时间空对象


    start();//初始化
    function start(){//时间函数
        timer = new Date();//实例化对象
        var weeker=['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],//星期数组
            year=timer.getFullYear(),//年
            mouth=addZero(timer.getMonth()+1),//月
            date=addZero(timer.getDate()),//日
            hours=addZero(timer.getHours()),//小时
            minutes=addZero(timer.getMinutes()),//分
            seconds=addZero(timer.getSeconds()),//秒
            week=timer.getDay();//星期几
            oTimer.innerHTML=hours+':'+minutes+'<span>'+seconds+'</span>';//写入时分秒
            oWeek[0].innerHTML=weeker[week];//写入星期几
            oWeek[1].innerHTML=year+'年'+mouth+'月'+date+'日';//写入年月日
    };
    //小于10补0
    function addZero(n){
        return n<10?'0'+n:n;
    }
    setInterval(start,1000);//定时器1s
	})();

