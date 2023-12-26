document.write('<script src="../js/시그니처.js"> </script>');
var scripts = document.querySelectorAll('script[src="../js/시그니처.js"]');
if (scripts.length > 1) {
    scripts[1].parentNode.removeChild(scripts[1]);
}


function DessertClick(idd){
    let now=document.querySelector(`#${idd}`);
    switch(idd){
        case "GorengCookie":
            gc++,n++;//각개수, 총개수 늘리기
            printGorengCookie();
            break;
        case "SeaPearlChocolate":
            spc++,n++;//각개수, 총개수 늘리기
            printSeaPearlChocolate();
            break;
        case "WhaleMacaron":
            wm++; n++;
            printWhaleMacaron();
            break;
        case "WhaleSculptureCake":
            wsc++; n++;
            printWhaleSculptureCake();
            break;
        case "StrawberrywhippedcreamNutellaWaffle":
            snw++; n++;
            printStrawberrywhippedcreamNutellaWaffle();
            break;
        case "BananaNutellaWaffle":
            bnw++; n++;
            printBananaNutellaWaffle();
            break;
    }

    makePrice();
    totalnum();
    savemenu();
}

// function makePrice(){//가격 정하기
//     Price2=4000*Number(gc)+1000*Number(spc)+3000*Number(wm)
//     +4500*Number(wsc)+4500*Number(snw)+4500*Number(bnw);
//     Price.innerHTML=`${Price2}원`;
// }

// function totalnum(){
//     let tn=document.querySelector(".totalnum");
//     tn.innerHTML=`<br>총개수 <b>${n}</b>개`;
//     tn.style.top='180px';
//        //totalnum을 마지막 요소의 아래로 이동
//     if (row >= 5) {
//         let blankElements = document.querySelectorAll(".blank");
//         let wscstblank = blankElements[blankElements.length - 1];
//         tn.style.top = wscstblank.offsetTop + wscstblank.offsetHeight + 'px';; // 10은 여백
//     }
// }

// let now=5;
// function blank(neww){
//     if(now<neww){//이전값보다 크다면 blank삭제
//         now=neww;
//         let blank=document.querySelector(".blank");
//         selectmenu.removeChild(blank);
//     }
//     let text=document.createElement("div");
//     text.innerHTML=`<br>`
//     text.setAttribute("class","blank");
//     selectmenu.appendChild(text);
// }

// function SelectClick(classs,num){
//     let nowclass=document.querySelector(`.${classs}`);
//     switch(num){
//         case "gc":
//             gc--;
//             break;
//         case "spc":
//             spc--;
//             break;
//         case "wm":
//             wm--;
//             break;
//         case "wsc":
//             wsc--;
//             break;
//         case "snw":
//             snw--;
//             break;
//         case "bnw":
//             bnw--;
//             break;
//     }

//     n--;//총개수 삭제

//     if(gc<=0 && gcrow!=0) rowremove("GorengCookie","gc",gcrow);
//     if(spc<=0 && spcrow!=0) rowremove("SeaPearlChocolate","spc",spcrow);
//     if(wm<=0 && wmrow!=0) rowremove("WhaleMacaron","wm",wmrow);
//     if(wsc<=0 && wscrow!=0) rowremove("WhaleSculptureCake","wsc",wscrow);
//     if(snw<=0 && snwrow!=0) rowremove("StrawberrywhippedcreamNutellaWaffle","snw",snwrow);
//     if(bnw<=0 && bnwrow!=0) rowremove("BananaNutellaWaffle","bnw",bnwrow);

//     totalprint();
// }

// function rowremove(classs,num,rownum){
//     let nowclass=document.querySelector(`.${classs}`);
//     switch(num){
//         case "gc":
//             n-=Number(gc);
//             gc=0; gcrow=0; 
//             break;
//         case "spc":
//             n-=Number(spc);
//             spc=0; spcrow=0; 
//             break;
//         case "wm":
//             n-=Number(wm);
//             wm=0; wmrow=0; 
//             break;
//         case "wsc":
//             n-=Number(wsc);
//             wsc=0; wscrow=0; 
//             break;
//         case "snw":
//             n-=Number(snw);
//             snw=0; snwrow=0; 
//             break;
//         case "bnw":
//             n-=Number(bnw);
//             bnw=0; bnwrow=0;
//             break;
//     }

//      /*현재 열보다 숫자가 더 크면 하나씩 줄이기*/
//     if(gcrow>rownum) gcrow--;
//     if(spcrow>rownum) spcrow--;
//     if(wmrow>rownum) wmrow--;
//     if(wscrow>rownum) wscrow--;
//     if(snwrow>rownum) snwrow--;
//     if(bnwrow>rownum) bnwrow--;

//     if(row==5){/*row가 5일경우 blank삭제*/
//         let blank=document.querySelector(".blank");
//         selectmenu.removeChild(blank);
//         now=5
//     }
    
//     row--;//전체 열 하나 줄이기
//     selectmenu.removeChild(nowclass);

//     totalprint();
//     /*cancleBubble을 이용해 이벤트 버블링 방지*/
//     if (window.event) {
//         window.event.cancelBubble = true;
//       } else {
//         event.stopPropagation();
//       }

// }

// function totalprint(){
//     printGorengCookie();
//     printSeaPearlChocolate();
//     printWhaleMacaron();
//     printWhaleSculptureCake();
//     printStrawberrywhippedcreamNutellaWaffle();
//     printBananaNutellaWaffle();

//     makePrice();
//     totalnum();

// }

// function totalcancel(){
//     if(gc!=0) selectmenu.removeChild(document.querySelector(".GorengCookie"));
//     if(spc!=0) selectmenu.removeChild(document.querySelector(".SeaPearlChocolate"));
//     if(wm!=0) selectmenu.removeChild(document.querySelector(".WhaleMacaron"));
//     if(wsc!=0) selectmenu.removeChild(document.querySelector(".WhaleSculptureCake"));
//     if(snw!=0) selectmenu.removeChild(document.querySelector(".StrawberrywhippedcreamNutellaWaffle"));
//     if(bnw!=0) selectmenu.removeChild(document.querySelector(".BananaNutellaWaffle"));
//     if(row>=5){
//         let blank=document.querySelector(".blank");
//         selectmenu.removeChild(blank);
//     }

//     gc=0,spc=0,wm=0,wsc=0,snw=0,bnw=0;//각 개수
//     n=0, row=0; //총개수, 행개수
//     gcrow=0,spcrow=0,wmrow=0,wscrow=0,snwrow=0,bnwrow=0; //각 열번호
    

//     makePrice();
//     totalnum();
// }






function printGorengCookie(){
    if(gc==1 && gcrow==0 || gcboo===true){ 
        var GorengCookie = document.querySelector(".GorengCookie");
        if (GorengCookie !== undefined && GorengCookie !== null) {
            selectmenu.removeChild(GorengCookie);//중복일 경우 삭제
        }
        if (gcrow == 0) {
            row++;
            gcrow = row;
        }
        gcboo=false;
        let text=document.createElement("div");
        text.innerHTML=`${gcrow}. 골고랭쿠키　　　　　4.0　　${gc}개　
        <button onclick=rowremove("GorengCookie","gc",${gcrow})> <img src="../img/고래그림1.png" width="30px" hbnwiht="65px"> </button>`;
        text.setAttribute("class","GorengCookie");
        text.setAttribute("onclick",`SelectClick("GorengCookie","gc")`)
        selectmenu.appendChild(text);
        // console.log(selectmenu);
        if(row>=5) blank(row);
    }
    else if(gc !=0){
        let GorengCookie=document.querySelector(".GorengCookie");
        if(gc<10){
            GorengCookie.innerHTML=`${gcrow}. 골고랭쿠키　　　　　4.0　　${gc}개　
            <button onclick=rowremove("GorengCookie","gc",${gcrow})> <img src="../img/고래그림1.png" width="30px" hbnwiht="65px"> </button>`;
        }
        else{
            GorengCookie.innerHTML=`${gcrow}. 골고랭쿠키　　　　　4.0 　${gc}개　
            <button onclick=rowremove("GorengCookie","gc",${gcrow})> <img src="../img/고래그림1.png" width="30px" hbnwiht="65px"> </button>`;
        }
    }
}


function printSeaPearlChocolate(){
    if(spc==1 && spcrow==0 || spcboo===true){
        var SeaPearlChocolate = document.querySelector(".SeaPearlChocolate");
        if (SeaPearlChocolate !== undefined && SeaPearlChocolate !== null) {
            selectmenu.removeChild(SeaPearlChocolate);//중복일 경우 삭제
        }
        if (spcrow == 0) {
            row++;
            spcrow = row;
        }
        spcboo=false;
        let text=document.createElement("div");
        text.innerHTML=`${spcrow}. 바다진주초콜릿　　　1.0　　${spc}개　
        <button onclick=rowremove("SeaPearlChocolate","spc",${spcrow})> <img src="../img/고래그림1.png" width="30px" hbnwiht="65px"> </button>`;
        text.setAttribute("class","SeaPearlChocolate");
        text.setAttribute("onclick",`SelectClick("SeaPearlChocolate","spc")`)
        selectmenu.appendChild(text);
        if(row>=5) blank(row);
    }
    else if(spc !=0){
        let SeaPearlChocolate=document.querySelector(".SeaPearlChocolate");
        if(spc<10){
            SeaPearlChocolate.innerHTML=`${spcrow}. 바다진주초콜릿　　　1.0　　${spc}개　
            <button onclick=rowremove("SeaPearlChocolate","spc",${spcrow})> <img src="../img/고래그림1.png" width="30px" hbnwiht="65px"> </button>`;
        }
        else{
            SeaPearlChocolate.innerHTML=`${spcrow}. 바다진주초콜릿　　　1.0 　${spc}개　
            <button onclick=rowremove("SeaPearlChocolate","spc",${spcrow})> <img src="../img/고래그림1.png" width="30px" hbnwiht="65px"> </button>`;
        }
    }
}


function printWhaleMacaron(){
    if(wm==1 && wmrow==0 || wmboo===true){
        var WhaleMacaron = document.querySelector(".WhaleMacaron");
        if (WhaleMacaron !== undefined && WhaleMacaron !== null) {
            selectmenu.removeChild(WhaleMacaron);//중복일 경우 삭제
        }
        if (wmrow == 0) {
            row++;
            wmrow = row;
        }
        wmboo=false;
        let text=document.createElement("div");
        text.innerHTML=`${wmrow}. 고래마카롱　　　　　5.0　　${wm}개　
        <button onclick=rowremove("WhaleMacaron","wm",${wmrow})> <img src="../img/고래그림1.png" width="30px" hbnwiht="65px"> </button>`;
        text.setAttribute("class","WhaleMacaron");
        text.setAttribute("onclick",`SelectClick("WhaleMacaron","wm")`)
        selectmenu.appendChild(text);
        if(row>=5) blank(row);
    }
    else if(wm !=0){
        let WhaleMacaron=document.querySelector(".WhaleMacaron");
        if(wm<10){
            WhaleMacaron.innerHTML=`${wmrow}. 고래마카롱　　　　　5.0　　${wm}개　
            <button onclick=rowremove("WhaleMacaron","wm",${wmrow})> <img src="../img/고래그림1.png" width="30px" hbnwiht="65px"> </button>`;
        }
        else{
            WhaleMacaron.innerHTML=`${wmrow}. 고래마카롱　　　　　5.0 　${wm}개　
            <button onclick=rowremove("WhaleMacaron","wm",${wmrow})> <img src="../img/고래그림1.png" width="30px" hbnwiht="65px"> </button>`;
        }
    }
}

function printWhaleSculptureCake(){
    if(wsc==1 && wscrow==0 || wscboo===true){
        var WhaleSculptureCake = document.querySelector(".WhaleSculptureCake");
        if (WhaleSculptureCake !== undefined && WhaleSculptureCake !== null) {
            selectmenu.removeChild(WhaleSculptureCake);//중복일 경우 삭제
        }
        if (wscrow == 0) {
            row++;
            wscrow = row;
        }
        wscboo=false;
        let text=document.createElement("div");
        text.innerHTML=`${wscrow}. 고래조각케이크　　　4.5　　${wsc}개　
        <button onclick=rowremove("WhaleSculptureCake","wsc",${wscrow})> <img src="../img/고래그림1.png" width="30px" hbnwiht="65px"> </button>`;
        text.setAttribute("class","WhaleSculptureCake");
        text.setAttribute("onclick",`SelectClick("WhaleSculptureCake","wsc")`)
        selectmenu.appendChild(text);
        if(row>=5) blank(row);
    }
    else if(wsc !=0){
        let WhaleSculptureCake=document.querySelector(".WhaleSculptureCake");
        if(wsc<10){
            WhaleSculptureCake.innerHTML=`${wscrow}. 고래조각케이크　　　4.5　　${wsc}개　
            <button onclick=rowremove("WhaleSculptureCake","wsc",${wscrow})> <img src="../img/고래그림1.png" width="30px" hbnwiht="65px"> </button>`;
        }
        else{
            WhaleSculptureCake.innerHTML=`${wscrow}. 고래조각케이크　　　4.5 　${wsc}개　
            <button onclick=rowremove("WhaleSculptureCake","wsc",${wscrow})> <img src="../img/고래그림1.png" width="30px" hbnwiht="65px"> </button>`;
        }
    }
}

function printStrawberrywhippedcreamNutellaWaffle(){
    if(snw==1 && snwrow==0 || snwboo===true){
        var StrawberrywhippedcreamNutellaWaffle = document.querySelector(".StrawberrywhippedcreamNutellaWaffle");
        if (StrawberrywhippedcreamNutellaWaffle !== undefined && StrawberrywhippedcreamNutellaWaffle !== null) {
            selectmenu.removeChild(StrawberrywhippedcreamNutellaWaffle);//중복일 경우 삭제
        }
        if (snwrow == 0) {
            row++;
            snwrow = row;
        }
        snwboo=false;
        let text=document.createElement("div");
        text.innerHTML=`${snwrow}. 딸기생크림누텔라와플　4.5　${snw}개　
        <button onclick=rowremove("StrawberrywhippedcreamNutellaWaffle","snw",${snwrow})> <img src="../img/고래그림1.png" width="30px" hbnwiht="65px"> </button>`;
        text.setAttribute("class","StrawberrywhippedcreamNutellaWaffle");
        text.setAttribute("onclick",`SelectClick("StrawberrywhippedcreamNutellaWaffle","snw")`)
        selectmenu.appendChild(text);
        if(row>=5) blank(row);
    }
    else if(snw !=0){
        let StrawberrywhippedcreamNutellaWaffle=document.querySelector(".StrawberrywhippedcreamNutellaWaffle");
        if(snw<10){
            StrawberrywhippedcreamNutellaWaffle.innerHTML=`${snwrow}. 딸기생크림누텔라와플　4.5　${snw}개　
            <button onclick=rowremove("StrawberrywhippedcreamNutellaWaffle","snw",${snwrow})> <img src="../img/고래그림1.png" width="30px" hbnwiht="65px"> </button>`;
        }
        else{
            StrawberrywhippedcreamNutellaWaffle.innerHTML=`${snwrow}. 딸기생크림누텔라와플　4.5　${snw}개　
            <button onclick=rowremove("StrawberrywhippedcreamNutellaWaffle","snw",${snwrow})> <img src="../img/고래그림1.png" width="30px" hbnwiht="65px"> </button>`;
        }
    }
}

function printBananaNutellaWaffle(){
    if(bnw==1 && bnwrow==0 || bnwboo===true){
        var BananaNutellaWaffle = document.querySelector(".BananaNutellaWaffle");
        if (BananaNutellaWaffle !== undefined && BananaNutellaWaffle !== null) {
            selectmenu.removeChild(BananaNutellaWaffle);//중복일 경우 삭제
        }
        if (bnwrow == 0) {
            row++;
            bnwrow = row;
        }
        bnwboo=false;
        let text=document.createElement("div");
        text.innerHTML=`${bnwrow}. 바나나누텔라와플　　　4.5　${bnw}개　
        <button onclick=rowremove("BananaNutellaWaffle","bnw",${bnwrow})> <img src="../img/고래그림1.png" width="30px" hbnwiht="65px"> </button>`;
        text.setAttribute("class","BananaNutellaWaffle");
        text.setAttribute("onclick",`SelectClick("BananaNutellaWaffle","bnw")`)
        selectmenu.appendChild(text);
        if(row>=5) blank(row);
    }
    else if(bnw !=0){
        let BananaNutellaWaffle=document.querySelector(".BananaNutellaWaffle");
        if(bnw<10){
            BananaNutellaWaffle.innerHTML=`${bnwrow}. 바나나누텔라와플　　　4.5　${bnw}개　
            <button onclick=rowremove("BananaNutellaWaffle","bnw",${bnwrow})> <img src="../img/고래그림1.png" width="30px" hbnwiht="65px"> </button>`;
        }
        else{
            BananaNutellaWaffle.innerHTML=`${bnwrow}. 바나나누텔라와플　　　4.5　${bnw}개　
            <button onclick=rowremove("BananaNutellaWaffle","bnw",${bnwrow})> <img src="../img/고래그림1.png" width="30px" hbnwiht="65px"> </button>`;
        }
    }
}