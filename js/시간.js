// Date정보출력 JS소스 - 빈 부분을 완성한다.
let week=['일','월','화','수','목','금','토'];
let timed=document.querySelector("input[type=time]");
let dated=document.querySelector("input[type=date]");

setInterval( ()=> Day2(),1);

function Day2(){
    let day=new Date();//현재 날짜 정보 얻어옴
  
      let year=day.getFullYear();//년
      let month=day.getMonth();//월, 0부터 시작
      let date=day.getDate();//일
      let arr=day.getDay();//0요일 - 일요일
  
      let hours=day.getHours();
      let minutes=day.getMinutes();
      let secounds=day.getSeconds();
  
  
      month+=1; //0부터 시작하느로 하나 증가
  
      let a="오전"
      if(month<10) month='0'+month;
      if(date<10) date='0'+date;
    //   if(hours>12){
    //     hours=hours-'12'; 
    //     a="오후";
    //   }
    if (hours<10) hours='0'+hours;
    if (minutes<10) minutes='0'+minutes;
    if (secounds<10) secounds='0'+secounds;
  
    //   time.innerHTML=`${year}년 ${month}월 ${date}일 ${week[arr]}요일
    //                   <br>
    //                   ${a} ${hours}:${minutes}:${secounds}`;
    
    dated.value=`${year}-${month}-${date}`
      timed.value=`${hours}:${minutes}:${secounds}`;
      
  
  }