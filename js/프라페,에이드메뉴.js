
document.write('<script src="../js/시그니처.js"> </script>');
var scripts = document.querySelectorAll('script[src="../js/시그니처.js"]');
if (scripts.length > 1) {
    scripts[1].parentNode.removeChild(scripts[1]);
}


function FrappeClick(idd){
    let now=document.querySelector(`#${idd}`);
    switch(idd){
        case "MangoFrappe":
            mf++,n++;//각개수, 총개수 늘리기
            printMangoFrappe();
            break;
        case "BlueberryFrappe":
            bf++,n++;//각개수, 총개수 늘리기
            printBlueberryFrappe();
            break;
        case "PeachFrappe":
            pf++; n++;
            printPeachFrappe();
            break;
        case "LemonAde":
            la++; n++;
            printLemonAde();
            break;
        case "GraoeFruitAde":
            gfa++; n++;
            printGraoeFruitAde();
            break;
    }

    makePrice();
    totalnum();
    savemenu();
}

// function makePrice(){//가격 정하기
//     Price2=5000*Number(mf)+5000*Number(bf)+5000*Number(pf)+5000*Number(la)+5000*Number(gfa);
//     Price.innerHTML=`${Price2}원`;
// }

// function totalnum(){
//     let tn=document.querySelector(".totalnum");
//     tn.innerHTML=`<br>총개수 <b>${n}</b>개`;
//     tn.style.top='180px';
//        //totalnum을 마지막 요소의 아래로 이동
//     if (row >= 5) {
//         let blankElements = document.querySelectorAll(".blank");
//         let lastBlank = blankElements[blankElements.length - 1];
//         tn.style.top = lastBlank.offsetTop + lastBlank.offsetHeight + 'px';; // 10은 여백
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
//     let nowcalpf=document.querySelector(`.${classs}`);
//     switch(num){
//         case "mf":
//             mf--;
//             break;
//         case "bf":
//             bf--;
//             break;
//         case "pf":
//             pf--;
//             break;
//         case "la":
//             la--;
//             break;
//         case "gfa":
//             gfa--;
//             break;
//     }

//     n--;//총개수 삭제

//     if(mf<=0 && mfrow!=0) rowremove("MangoFrappe","mf",mfrow);
//     if(bf<=0 && bfrow!=0) rowremove("BlueberryFrappe","bf",bfrow);
//     if(pf<=0 && pfrow!=0) rowremove("PeachFrappe","pf",pfrow);
//     if(la<=0 && larow!=0) rowremove("LemonAde","la",larow);
//     if(gfa<=0 && gfarow!=0) rowremove("GraoeFruitAde","gfa",gfarow);

//     totalprint();
// }

// function rowremove(classs,num,rownum){
//     let nowclass=document.querySelector(`.${classs}`);
//     switch(num){
//         case "mf":
//             n-=Number(mf);
//             mf=0; mfrow=0; 
//             break;
//         case "bf":
//             n-=Number(bf);
//             bf=0; bfrow=0; 
//             break;
//         case "pf":
//             n-=Number(pf);
//             pf=0; pfrow=0; 
//             break;
//         case "la":
//             n-=Number(la);
//             la=0; larow=0; 
//             break;
//         case "gfa":
//             n-=Number(gfa);
//             gfa=0; gfarow=0; 
//             break;
//     }

//      /*현재 열보다 숫자가 더 크면 하나씩 줄이기*/
//     if(mfrow>rownum) mfrow--;
//     if(bfrow>rownum) bfrow--;
//     if(pfrow>rownum) pfrow--;
//     if(larow>rownum) larow--;
//     if(gfarow>rownum) gfarow--;

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
//     printMangoFrappe();
//     printBlueberryFrappe();
//     printPeachFrappe();
//     printLemonAde();
//     printGraoeFruitAde();

//     makePrice();
//     totalnum();

// }

// function totalcancel(){
//     if(mf!=0) selectmenu.removeChild(document.querySelector(".MangoFrappe"));
//     if(bf!=0) selectmenu.removeChild(document.querySelector(".BlueberryFrappe"));
//     if(pf!=0) selectmenu.removeChild(document.querySelector(".PeachFrappe"));
//     if(la!=0) selectmenu.removeChild(document.querySelector(".LemonAde"));
//     if(gfa!=0) selectmenu.removeChild(document.querySelector(".GraoeFruitAde"));

//     if(row>=5){
//         let blank=document.querySelector(".blank");
//         selectmenu.removeChild(blank);
//     }

//     mf=0,bf=0,pf=0,la=0,gfa=0;//각 개수
//     n=0, row=0; //총개수, 행개수
//     mfrow=0,bfrow=0,pfrow=0,larow=0,gfarow=0; //각 열번호
    

//     makePrice();
//     totalnum();
// }






function printMangoFrappe(){
    if(mf==1 && mfrow==0 || mfboo===true){//망고프라페 1개 
        var MangoFrappe = document.querySelector(".MangoFrappe");
        if (MangoFrappe !== undefined && MangoFrappe !== null) {
            selectmenu.removeChild(MangoFrappe);//중복일 경우 삭제
        }
        if (mfrow == 0) {
            row++;
            mfrow = row;
        }
        mfboo=false;
        let text=document.createElement("div");
        text.innerHTML=`${mfrow}. 망고프라페　　　　　5.0　　${mf}개　
        <button onclick=rowremove("MangoFrappe","mf",${mfrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        text.setAttribute("class","MangoFrappe");
        text.setAttribute("onclick",`SelectClick("MangoFrappe","mf")`)
        selectmenu.appendChild(text);
        console.log(selectmenu);
        if(row>=5) blank(row);
    }
    else if(mf !=0){
        let MangoFrappe=document.querySelector(".MangoFrappe");
        if(mf<10){
            MangoFrappe.innerHTML=`${mfrow}. 망고프라페　　　　　5.0　　${mf}개　
            <button onclick=rowremove("MangoFrappe","mf",${mfrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        }
        else{
            MangoFrappe.innerHTML=`${mfrow}. 망고프라페　　　　　5.0 　${mf}개　
            <button onclick=rowremove("MangoFrappe","mf",${mfrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        }
    }
}


function printBlueberryFrappe(){
    if(bf==1 && bfrow==0 || bfboo===true){
        var BlueberryFrappe = document.querySelector(".BlueberryFrappe");
        if (BlueberryFrappe !== undefined && BlueberryFrappe !== null) {
            selectmenu.removeChild(BlueberryFrappe);//중복일 경우 삭제
        }
        if (bfrow == 0) {
            row++;
            bfrow = row;
        }
        bfboo=false;
        let text=document.createElement("div");
        text.innerHTML=`${bfrow}. 블루베리프라페　　　5.0　　${bf}개　
        <button onclick=rowremove("BlueberryFrappe","bf",${bfrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        text.setAttribute("class","BlueberryFrappe");
        text.setAttribute("onclick",`SelectClick("BlueberryFrappe","bf")`)
        selectmenu.appendChild(text);
        if(row>=5) blank(row);
    }
    else if(bf !=0){
        let BlueberryFrappe=document.querySelector(".BlueberryFrappe");
        if(bf<10){
            BlueberryFrappe.innerHTML=`${bfrow}. 블루베리프라페　　　5.0　　${bf}개　
            <button onclick=rowremove("BlueberryFrappe","bf",${bfrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        }
        else{
            BlueberryFrappe.innerHTML=`${bfrow}. 블루베리프라페　　　5.0 　${bf}개　
            <button onclick=rowremove("BlueberryFrappe","bf",${bfrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        }
    }
}


function printPeachFrappe(){
    if(pf==1 && pfrow==0 || pfboo===true){
        var PeachFrappe = document.querySelector(".PeachFrappe");
        if (PeachFrappe !== undefined && PeachFrappe !== null) {
            selectmenu.removeChild(PeachFrappe);//중복일 경우 삭제
        }
        if (pfrow == 0) {
            row++;
            pfrow = row;
        }
        pfboo=false;
        let text=document.createElement("div");
        text.innerHTML=`${pfrow}. 복숭아프라페　　　　5.0　　${pf}개　
        <button onclick=rowremove("PeachFrappe","pf",${pfrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        text.setAttribute("class","PeachFrappe");
        text.setAttribute("onclick",`SelectClick("PeachFrappe","pf")`)
        selectmenu.appendChild(text);
        if(row>=5) blank(row);
    }
    else if(pf !=0){
        let PeachFrappe=document.querySelector(".PeachFrappe");
        if(pf<10){
            PeachFrappe.innerHTML=`${pfrow}. 복숭아프라페　　　　5.0　　${pf}개　
            <button onclick=rowremove("PeachFrappe","pf",${pfrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        }
        else{
            PeachFrappe.innerHTML=`${pfrow}. 복숭아프라페　　　　5.0 　${pf}개　
            <button onclick=rowremove("PeachFrappe","pf",${pfrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        }
    }
}

function printLemonAde(){
    if(la==1 && larow==0 || laboo===true){
        if (larow == 0) {
            row++;
            larow = row;
        }
        var LemonAde = document.querySelector(".LemonAde");
        if (LemonAde !== undefined && LemonAde !== null) {
            selectmenu.removeChild(LemonAde);
        }
        laboo=false;
        let text=document.createElement("div");
        text.innerHTML=`${larow}. 레몬에이드　　　　　5.0　　${la}개　
        <button onclick=rowremove("LemonAde","la",${larow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        text.setAttribute("class","LemonAde");
        text.setAttribute("onclick",`SelectClick("LemonAde","la")`)
        selectmenu.appendChild(text);
        if(row>=5) blank(row);
    }
    else if(la !=0){
        let LemonAde=document.querySelector(".LemonAde");
        if(la<10){
            LemonAde.innerHTML=`${larow}. 레몬에이드　　　　　5.0　　${la}개　
            <button onclick=rowremove("LemonAde","la",${larow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        }
        else{
            LemonAde.innerHTML=`${larow}. 레몬에이드　　　　　5.0 　${la}개　
            <button onclick=rowremove("LemonAde","la",${larow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        }
    }
}

function printGraoeFruitAde(){
    if(gfa==1 && gfarow==0 || gfaboo===true){
        if (gfarow == 0) {
            row++;
            gfarow = row;
        }
        var GraoeFruitAde = document.querySelector(".GraoeFruitAde");
        if (GraoeFruitAde !== undefined && GraoeFruitAde !== null) {
            selectmenu.removeChild(GraoeFruitAde);
        }
        gfaboo=false;
        let text=document.createElement("div");
        text.innerHTML=`${gfarow}. 자몽에이드　　　　　5.0　　${gfa}개　
        <button onclick=rowremove("GraoeFruitAde","gfa",${gfarow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        text.setAttribute("class","GraoeFruitAde");
        text.setAttribute("onclick",`SelectClick("GraoeFruitAde","gfa")`)
        selectmenu.appendChild(text);
        if(row>=5) blank(row);
    }
    else if(gfa !=0){
        let GraoeFruitAde=document.querySelector(".GraoeFruitAde");
        if(gfa<10){
            GraoeFruitAde.innerHTML=`${gfarow}. 자몽에이드　　　　　5.0　　${gfa}개　
            <button onclick=rowremove("GraoeFruitAde","gfa",${gfarow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        }
        else{
            GraoeFruitAde.innerHTML=`${gfarow}. 자몽에이드　　　　　5.0 　${gfa}개　
            <button onclick=rowremove("GraoeFruitAde","gfa",${gfarow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        }
    }
}