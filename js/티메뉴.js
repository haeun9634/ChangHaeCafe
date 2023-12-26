
document.write('<script src="../js/시그니처.js"> </script>');
var scripts = document.querySelectorAll('script[src="../js/시그니처.js"]');
if (scripts.length > 1) {
    scripts[1].parentNode.removeChild(scripts[1]);
}


function TeaClick(idd){
    let now=document.querySelector(`#${idd}`);
    switch(idd){
        case "Chamomile":
            cham++,n++;//각개수, 총개수 늘리기
            printChamomile();
            break;
        case "GingerLemon":
            gl++,n++;//각개수, 총개수 늘리기
            printGingerLemon();
            break;
        case "GrapeFruit":
            gf++; n++;
            printGrapeFruit();
            break;
        case "PepperMint":
            pm++; n++;
            printPepperMint();
            break;
        case "BlackMilkTea":
            bmt++; n++;
            printBlackMilkTea();
            break;
        case "EarlGray":
            eg++; n++;
            printEarlGray();
            break;
    }
    makePrice();
    totalnum();
    savemenu();
}

// function makePrice(){//가격 정하기
//     Price2=4000*Number(cham)+4500*Number(gl)+5000*Number(gf)
//     +4000*Number(pm)+4500*Number(bmt)+4000*Number(eg);
//     Price.innerHTML=`${Price2}원`;
// }

// function totalnum(){
//     let tn=document.querySelector(".totalnum");
//     tn.innerHTML=`<br>총개수 <b>${n}</b>개`;
//     tn.style.top='180px';
//        //totalnum을 마지막 요소의 아래로 이동
//     if (row >= 5) {
//         let blankElements = document.querySelectorAll(".blank");
//         let pmstblank = blankElements[blankElements.length - 1];
//         tn.style.top = pmstblank.offsetTop + pmstblank.offsetHeight + 'px';; // 10은 여백
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
//     let nowcalgf=document.querySelector(`.${classs}`);
//     switch(num){
//         case "cham":
//             cham--;
//             break;
//         case "gl":
//             gl--;
//             break;
//         case "gf":
//             gf--;
//             break;
//         case "pm":
//             pm--;
//             break;
//         case "bmt":
//             bmt--;
//             break;
//         case "eg":
//             eg--;
//             break;
//     }

//     n--;//총개수 삭제

//     if(cham<=0 && chamrow!=0) rowremove("Chamomile","cham",chamrow);
//     if(gl<=0 && glrow!=0) rowremove("GingerLemon","gl",glrow);
//     if(gf<=0 && gfrow!=0) rowremove("GrapeFruit","gf",gfrow);
//     if(pm<=0 && pmrow!=0) rowremove("PepperMint","pm",pmrow);
//     if(bmt<=0 && bmtrow!=0) rowremove("BlackMilkTea","bmt",bmtrow);
//     if(eg<=0 && egrow!=0) rowremove("EarlGray","eg",egrow);

//     totalprint();
// }

// function rowremove(classs,num,rownum){
//     let nowclass=document.querySelector(`.${classs}`);
//     switch(num){
//         case "cham":
//             n-=Number(cham);
//             cham=0; chamrow=0; 
//             break;
//         case "gl":
//             n-=Number(gl);
//             gl=0; glrow=0; 
//             break;
//         case "gf":
//             n-=Number(gf);
//             gf=0; gfrow=0; 
//             break;
//         case "pm":
//             n-=Number(pm);
//             pm=0; pmrow=0; 
//             break;
//         case "bmt":
//             n-=Number(bmt);
//             bmt=0; bmtrow=0; 
//             break;
//         case "eg":
//             n-=Number(eg);
//             eg=0; egrow=0;
//             break;
//     }

//      /*현재 열보다 숫자가 더 크면 하나씩 줄이기*/
//     if(chamrow>rownum) chamrow--;
//     if(glrow>rownum) glrow--;
//     if(gfrow>rownum) gfrow--;
//     if(pmrow>rownum) pmrow--;
//     if(bmtrow>rownum) bmtrow--;
//     if(egrow>rownum) egrow--;

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
//     printChamomile();
//     printGingerLemon();
//     printGrapeFruit();
//     printPepperMint();
//     printBlackMilkTea();
//     printEarlGray();

//     makePrice();
//     totalnum();

// }

// function totalcancel(){
//     if(cham!=0) selectmenu.removeChild(document.querySelector(".Chamomile"));
//     if(gl!=0) selectmenu.removeChild(document.querySelector(".GingerLemon"));
//     if(gf!=0) selectmenu.removeChild(document.querySelector(".GrapeFruit"));
//     if(pm!=0) selectmenu.removeChild(document.querySelector(".PepperMint"));
//     if(bmt!=0) selectmenu.removeChild(document.querySelector(".BlackMilkTea"));
//     if(eg!=0) selectmenu.removeChild(document.querySelector(".EarlGray"));
//     if(row>=5){
//         let blank=document.querySelector(".blank");
//         selectmenu.removeChild(blank);
//     }

//     cham=0,gl=0,gf=0,pm=0,bmt=0,eg=0;//각 개수
//     n=0, row=0; //총개수, 행개수
//     chamrow=0,glrow=0,gfrow=0,pmrow=0,bmtrow=0,egrow=0; //각 열번호
    

//     makePrice();
//     totalnum();
// }






function printChamomile(){
    if(cham==1 && chamrow==0 || chamboo===true){ 
        var Chamomile = document.querySelector(".Chamomile");
        if (Chamomile !== undefined && Chamomile !== null) {
            selectmenu.removeChild(Chamomile);//중복일 경우 삭제
        }
        if (chamrow == 0) {
            row++;
            chamrow = row;
        }
        chamboo=false;
        let text=document.createElement("div");
        text.innerHTML=`${chamrow}. 캐모마일　　　　　　4.0　　${cham}개　
        <button onclick=rowremove("Chamomile","cham",${chamrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        text.setAttribute("class","Chamomile");
        text.setAttribute("onclick",`SelectClick("Chamomile","cham")`)
        selectmenu.appendChild(text);
        console.log(selectmenu);
        if(row>=5) blank(row);
    }
    else if(cham !=0){
        let Chamomile=document.querySelector(".Chamomile");
        if(cham<10){
            Chamomile.innerHTML=`${chamrow}. 캐모마일　　　　　　4.0　　${cham}개　
            <button onclick=rowremove("Chamomile","cham",${chamrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        }
        else{
            Chamomile.innerHTML=`${chamrow}. 캐모마일　　　　　　4.0 　${cham}개　
            <button onclick=rowremove("Chamomile","cham",${chamrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        }
    }
}


function printGingerLemon(){
    if(gl==1 && glrow==0 || glboo===true){
        var GingerLemon = document.querySelector(".GingerLemon");
        if (GingerLemon !== undefined && GingerLemon !== null) {
            selectmenu.removeChild(GingerLemon);//중복일 경우 삭제
        }
        if (glrow == 0) {
            row++;
            glrow = row;
        }
        glboo=false;
        let text=document.createElement("div");
        text.innerHTML=`${glrow}. 진저레몬　　　　　　4.5　　${gl}개　
        <button onclick=rowremove("GingerLemon","gl",${glrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        text.setAttribute("class","GingerLemon");
        text.setAttribute("onclick",`SelectClick("GingerLemon","gl")`)
        selectmenu.appendChild(text);
        if(row>=5) blank(row);
    }
    else if(gl !=0){
        let GingerLemon=document.querySelector(".GingerLemon");
        if(gl<10){
            GingerLemon.innerHTML=`${glrow}. 진저레몬　　　　　　4.5　　${gl}개　
            <button onclick=rowremove("GingerLemon","gl",${glrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        }
        else{
            GingerLemon.innerHTML=`${glrow}. 진저레몬　　　　　　4.5 　${gl}개　
            <button onclick=rowremove("GingerLemon","gl",${glrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        }
    }
}


function printGrapeFruit(){
    if(gf==1 && gfrow==0 || gfboo===true){
        var GrapeFruit = document.querySelector(".GrapeFruit");
        if (GrapeFruit !== undefined && GrapeFruit !== null) {
            selectmenu.removeChild(GrapeFruit);//중복일 경우 삭제
        }
        if (gfrow == 0) {
            row++;
            gfrow = row;
        }
        gfboo=false;
        let text=document.createElement("div");
        text.innerHTML=`${gfrow}. 자몽　　　　　　　　5.0　　${gf}개　
        <button onclick=rowremove("GrapeFruit","gf",${gfrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        text.setAttribute("class","GrapeFruit");
        text.setAttribute("onclick",`SelectClick("GrapeFruit","gf")`)
        selectmenu.appendChild(text);
        if(row>=5) blank(row);
    }
    else if(gf !=0){
        let GrapeFruit=document.querySelector(".GrapeFruit");
        if(gf<10){
            GrapeFruit.innerHTML=`${gfrow}. 자몽　　　　　　　　5.0　　${gf}개　
            <button onclick=rowremove("GrapeFruit","gf",${gfrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        }
        else{
            GrapeFruit.innerHTML=`${gfrow}. 자몽　　　　　　　　5.0 　${gf}개　
            <button onclick=rowremove("GrapeFruit","gf",${gfrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        }
    }
}

function printPepperMint(){
    if(pm==1 && pmrow==0 || pmboo===true){
        var PepperMint = document.querySelector(".PepperMint");
        if (PepperMint !== undefined && PepperMint !== null) {
            selectmenu.removeChild(PepperMint);//중복일 경우 삭제
        }
        if (pmrow == 0) {
            row++;
            pmrow = row;
        }
        pmboo=false;
        let text=document.createElement("div");
        text.innerHTML=`${pmrow}. 페퍼민트　　　　　　4.0　　${pm}개　
        <button onclick=rowremove("PepperMint","pm",${pmrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        text.setAttribute("class","PepperMint");
        text.setAttribute("onclick",`SelectClick("PepperMint","pm")`)
        selectmenu.appendChild(text);
        if(row>=5) blank(row);
    }
    else if(pm !=0){
        let PepperMint=document.querySelector(".PepperMint");
        if(pm<10){
            PepperMint.innerHTML=`${pmrow}. 페퍼민트　　　　　　4.0　　${pm}개　
            <button onclick=rowremove("PepperMint","pm",${pmrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        }
        else{
            PepperMint.innerHTML=`${pmrow}. 페퍼민트　　　　　　4.0 　${pm}개　
            <button onclick=rowremove("PepperMint","pm",${pmrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        }
    }
}

function printBlackMilkTea(){
    if(bmt==1 && bmtrow==0 || bmtboo===true){
        var BlackMilkTea = document.querySelector(".BlackMilkTea");
        if (BlackMilkTea !== undefined && BlackMilkTea !== null) {
            selectmenu.removeChild(BlackMilkTea);//중복일 경우 삭제
        }
        if (bmtrow == 0) {
            row++;
            bmtrow = row;
        }
        bmtboo=false;
        let text=document.createElement("div");
        text.innerHTML=`${bmtrow}. 블랙밀크티　　　　　4.5　　${bmt}개　
        <button onclick=rowremove("BlackMilkTea","bmt",${bmtrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        text.setAttribute("class","BlackMilkTea");
        text.setAttribute("onclick",`SelectClick("BlackMilkTea","bmt")`)
        selectmenu.appendChild(text);
        if(row>=5) blank(row);
    }
    else if(bmt !=0){
        let BlackMilkTea=document.querySelector(".BlackMilkTea");
        if(bmt<10){
            BlackMilkTea.innerHTML=`${bmtrow}. 블랙밀크티　　　　　4.5　　${bmt}개　
            <button onclick=rowremove("BlackMilkTea","bmt",${bmtrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        }
        else{
            BlackMilkTea.innerHTML=`${bmtrow}. 블랙밀크티　　　　　4.5 　${bmt}개　
            <button onclick=rowremove("BlackMilkTea","bmt",${bmtrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        }
    }
}

function printEarlGray(){
    if(eg==1 && egrow==0 || egboo===true){
        var EarlGray = document.querySelector(".EarlGray");
        if (EarlGray !== undefined && EarlGray !== null) {
            selectmenu.removeChild(EarlGray);//중복일 경우 삭제
        }
        if (egrow == 0) {
            row++;
            egrow = row;
        }
        egboo=false;
        let text=document.createElement("div");
        text.innerHTML=`${egrow}. 얼그레이　　　　　　4.0　　${eg}개　
        <button onclick=rowremove("EarlGray","eg",${egrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        text.setAttribute("class","EarlGray");
        text.setAttribute("onclick",`SelectClick("EarlGray","eg")`)
        selectmenu.appendChild(text);
        if(row>=5) blank(row);
    }
    else if(eg !=0){
        let EarlGray=document.querySelector(".EarlGray");
        if(eg<10){
            EarlGray.innerHTML=`${egrow}. 얼그레이　　　　　　4.0　　${eg}개　
            <button onclick=rowremove("EarlGray","eg",${egrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        }
        else{
            EarlGray.innerHTML=`${egrow}. 얼그레이　　　　　　4.0 　${eg}개　
            <button onclick=rowremove("EarlGray","eg",${egrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        }
    }
}