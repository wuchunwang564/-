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