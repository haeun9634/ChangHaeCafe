
document.write('<script src="../js/시그니처.js"> </script>');
document.write('<script src="../js/커피메뉴.js"> </script>');
var scripts = document.querySelectorAll('script[src="../js/시그니처.js"]');
if (scripts.length > 1) {
    scripts[1].parentNode.removeChild(scripts[1]);
}


function MenuClick(idd){
    let now=document.querySelector(`#${idd}`);
    switch(idd){
        case "Chocolatte":
            t=confirm(` <${idd}> \n 아이스는 확인을 핫은 취소를 눌러주세요.\n Press OK for Ice or Cancel for Hot.`)
            if (t){ 
                cclatte++,n++;;
                printColdChocolatte();}
            else{
                clatte++,n++;//각개수, 총개수 늘리기
                printChocolatte();}
            break;
        case "Matchalatte":
            t=confirm(` <${idd}> \n 아이스는 확인을 핫은 취소를 눌러주세요.\n Press OK for Ice or Cancel for Hot.`)
            if (t){ 
                cml++,n++;;
                printColdMatchalatte();}
            else{
                ml++,n++;//각개수, 총개수 늘리기
                printMatchalatte();}
            break;
        case "Oceanlatte":
            t=confirm(` <${idd}> \n 아이스는 확인을 핫은 취소를 눌러주세요.\n Press OK for Ice or Cancel for Hot.`)
            if (t){ 
                col++,n++;;
                printColdOceanlatte();}
            else{
                ol++,n++;//각개수, 총개수 늘리기
                printOceanlatte();}
            break;
        case "StrawberrySmoothie":
            ss++; n++;
            printStrawberrySmoothie();
            break;
        case "BlueberrySmoothie":
            bs++; n++;
            printBlueberrySmoothie();
            break;
        case "PeachSmoothie":
            ps++; n++;
            printPeachSmoothie();
            break;
    }

    makePrice();
    totalnum();
    savemenu();
}

// function makePrice(){//가격 정하기
//     Price2=5000*Number(clatte) + 5000*Number(ml)+5000*Number(ol)+5000*Number(ss)+5000*Number(bs)+5000*Number(ps)
//     +5500*Number(cclatte)+5500*Number(cml)+5500*(col);
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
//     let nowcalss=document.querySelector(`.${classs}`);
//     switch(num){
//         case "clatte":
//             clatte--;
//             break;
//         case "ml":
//             ml--;
//             break;
//         case "ol":
//             ol--;
//             break;
//         case "cclatte":
//             cclatte--;
//             break;
//         case "cml":
//             cml--;
//             break;
//         case "col":
//             col--;
//             break;
//         case "ss":
//             ss--;
//             break;
//         case "bs":
//             bs--;
//             break;
//         case "ps":
//             ps--;
//             break;
//     }

//     n--;//총개수 삭제

//     if(clatte<=0 && clatterow!=0) rowremove("Chocolatte","clatte",clatterow);
//     if(ml<=0 && mlrow!=0) rowremove("Matchalatte","ml",mlrow);
//     if(ol<=0 && olrow!=0) rowremove("Oceanlatte","ol",olrow);
//     if(cclatte<=0 && cclatterow!=0) rowremove("ChocolatteI","cclatte",cclatterow);
//     if(cml<=0 && cmlrow!=0) rowremove("MatchalatteI","cml",cmlrow);
//     if(col<=0 && colrow!=0) rowremove("OceanlatteI","col",colrow);
//     if(ss<=0 && ssrow!=0) rowremove("StrawberrySmoothie","ss",ssrow);
//     if(bs<=0 && bsrow!=0) rowremove("BlueberrySmoothie","bs",bsrow);
//     if(ps<=0 && psrow!=0) rowremove("PeachSmoothie","ps",psrow);

//     totalprint();
// // }

// function rowremove(classs,num,rownum){
//     let nowclass=document.querySelector(`.${classs}`);
//     switch(num){
//         case "clatte":
//             n-=Number(clatte);//총개수에서 삭제
//             clatte=0; clatterow=0;//열삭제
//             break;
//         case "ml":
//             n-=Number(ml);
//             ml=0; mlrow=0; 
//             break;
//         case "ol":
//             n-=Number(ol);
//             ol=0; olrow=0; 
//             break;
//         case "cclatte":
//             n-=Number(cclatte);//총개수에서 삭제
//             cclatte=0; cclatterow=0;//열삭제
//             break;
//         case "cml":
//             n-=Number(cml);
//             cml=0; cmlrow=0; 
//             break;
//         case "col":
//             n-=Number(col);
//             col=0; colrow=0; 
//             break;
//         case "ss":
//             n-=Number(ss);
//             ss=0; ssrow=0; 
//             break;
//         case "bs":
//             n-=Number(bs);
//             bs=0; bsrow=0; 
//             break;
//         case "ps":
//             n-=Number(ps);
//             ps=0; psrow=0; 
//             break;
//     }

//      /*현재 열보다 숫자가 더 크면 하나씩 줄이기*/
//     if(clatterow>rownum) clatterow--;
//     if(mlrow>rownum) mlrow--;
//     if(olrow>rownum) olrow--;
//     if(cclatterow>rownum) cclatterow--;
//     if(cmlrow>rownum) cmlrow--;
//     if(colrow>rownum) colrow--;
//     if(ssrow>rownum) ssrow--;
//     if(bsrow>rownum) bsrow--;
//     if(psrow>rownum) psrow--;

//     console.log(rownum);
//     console.log("바다라떼")
//     console.log(colrow);

//     if(row==5){/*row가 5일경우 blank삭제*/
//         let blank=document.querySelector(".blank");
//         selectmenu.removeChild(blank);
//         now=5
//     }
    
//     row--;//전체 열 하나 줄이기
//     selectmenu.removeChild(nowclass);

//     totalprint();
//     /*canclatteeBubble을 이용해 이벤트 버블링 방지*/
//     if (window.event) {
//         window.event.cancelBubble = true;
//       } else {
//         event.stopPropagation();
//       }

// }

// function totalprint(){
//     printChocolatte();
//     printMatchalatte();
//     printOceanlatte();
//     printColdChocolatte();
//     printColdMatchalatte();
//     printColdOceanlatte();
//     printStrawberrySmoothie();
//     printBlueberrySmoothie();
//     printPeachSmoothie();

//     makePrice();
//     totalnum();

// }

// function totalcancel(){
//     if(clatte!=0) selectmenu.removeChild(document.querySelector(".Chocolatte"));
//     if(ml!=0) selectmenu.removeChild(document.querySelector(".Matchalatte"));
//     if(ol!=0) selectmenu.removeChild(document.querySelector(".Oceanlatte"));
//     if(cclatte!=0) selectmenu.removeChild(document.querySelector(".ChocolatteI"));
//     if(cml!=0) selectmenu.removeChild(document.querySelector(".MatchalatteI"));
//     if(col!=0) selectmenu.removeChild(document.querySelector(".OceanlatteI"));
//     if(ss!=0) selectmenu.removeChild(document.querySelector(".StrawberrySmoothie"));
//     if(bs!=0) selectmenu.removeChild(document.querySelector(".BlueberrySmoothie"));
//     if(ps!=0) selectmenu.removeChild(document.querySelector(".PeachSmoothie"));

//     if(row>=5){
//         let blank=document.querySelector(".blank");
//         selectmenu.removeChild(blank);
//     }

//     clatte=0,ml=0,ol=0,ss=0,bs=0,ps=0;//각 개수
//     cclatte=0,cml=0, col=0;//chocolatte iclatte, 각 iclatte 개수
//     n=0, row=0; //총개수, 행개수
//     clatterow=0,mlrow=0,olrow=0,ssrow=0,bsrow=0,psrow=0; //각 열번호
//     cclatterow=0,cmlrow=0,colrow=0;

//     makePrice();
//     totalnum();
// }



function printChocolatte(){
    if(clatte==1 && clatterow==0 || clatteboo===true){
        var Chocolatte = document.querySelector(".Chocolatte");
        if (Chocolatte !== undefined && Chocolatte !== null) {
            selectmenu.removeChild(Chocolatte);//중복일 경우 삭제
        }
        if (clatterow == 0) {
            row++;
            clatterow = row;
        }
        clatteboo=false;
        let text=document.createElement("div");
        text.innerHTML=`${clatterow}. 초코라떼(H)　 　 　 5.0　　${clatte}개　
        <button onclick=rowremove("Chocolatte","clatte",${clatterow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        text.setAttribute("class","Chocolatte");
        text.setAttribute("onclick",`SelectClick("Chocolatte","clatte")`)
        selectmenu.appendChild(text);
        if(row>=5) blank(row);
    }
    else if(clatte !=0){
        let Chocolatte=document.querySelector(".Chocolatte");
        if(clatte<10){
            Chocolatte.innerHTML=`${clatterow}. 초코라떼(H)　 　 　 5.0　　${clatte}개　
            <button onclick=rowremove("Chocolatte","clatte",${clatterow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        }
        else{
            Chocolatte.innerHTML=`${clatterow}. 초코라떼(H)　 　 　 5.0 　${clatte}개　
            <button onclick=rowremove("Chocolatte","clatte",${clatterow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        }
    }
}


function printColdChocolatte(){
    if(cclatte==1 && cclatterow==0 || cclatteboo===true){
        var ChocolatteI = document.querySelector(".ChocolatteI");
        if (ChocolatteI !== undefined && ChocolatteI !== null) {
            selectmenu.removeChild(ChocolatteI);//중복일 경우 삭제
        }
        if (cclatterow == 0) {
            row++;
            cclatterow = row;
        }
        cclatteboo=false;
        let text=document.createElement("div");
        text.innerHTML=`${cclatterow}. 초코라떼(I)　　 　　5.5　　${cclatte}개　
        <button onclick=rowremove("ChocolatteI","cclatte",${cclatterow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        text.setAttribute("class","ChocolatteI");
        text.setAttribute("onclick",`SelectClick("ChocolatteI","cclatte")`)
        selectmenu.appendChild(text);
        if(row>=5) blank(row);
        //alignment(n,"Chocolatte")
    }
    else if(cclatte !=0){
        let Chocolatte=document.querySelector(".ChocolatteI");
        if(cclatte<10){
            Chocolatte.innerHTML=`${cclatterow}. 초코라떼(I)　　 　　5.5　　${cclatte}개　
            <button onclick=rowremove("ChocolatteI","cclatte",${cclatterow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        }
        else{
            Chocolatte.innerHTML=`${cclatterow}. 초코라떼(I)　　 　　5.5 　${cclatte}개　
            <button onclick=rowremove("ChocolatteI","cclatte",${cclatterow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        }
    }
}


function printMatchalatte(){
    if(ml==1 && mlrow==0 || mlboo===true){//말차라떼(H) 1개 
        var Matchalatte = document.querySelector(".Matchalatte");
        if (Matchalatte !== undefined && Matchalatte !== null) {
            selectmenu.removeChild(Matchalatte);//중복일 경우 삭제
        }
        if (mlrow == 0) {
            row++;
            mlrow = row;
        }
        mlboo=false;
        let text=document.createElement("div");
        text.innerHTML=`${mlrow}. 말차라떼(H)　 　 　 5.0　　${ml}개　
        <button onclick=rowremove("Matchalatte","ml",${mlrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        text.setAttribute("class","Matchalatte");
        text.setAttribute("onclick",`SelectClick("Matchalatte","ml")`)
        selectmenu.appendChild(text);
        if(row>=5) blank(row);
    }
    else if(ml !=0){
        let Matchalatte=document.querySelector(".Matchalatte");
        if(ml<10){
            Matchalatte.innerHTML=`${mlrow}. 말차라떼(H)　 　 　 5.0　　${ml}개　
            <button onclick=rowremove("Matchalatte","ml",${mlrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        }
        else{
            Matchalatte.innerHTML=`${mlrow}. 말차라떼(H)　 　 　 5.0 　${ml}개　
            <button onclick=rowremove("Matchalatte","ml",${mlrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        }
    }
}

function printColdMatchalatte(){
    if(cml==1 && cmlrow==0 || cmlboo===true){
        var Matchalatte = document.querySelector(".MatchalatteI");
        if (Matchalatte !== undefined && Matchalatte !== null) {
            selectmenu.removeChild(Matchalatte);//중복일 경우 삭제
        }
        if (cmlrow == 0) {
            row++;
            cmlrow = row;
        }
        cmlboo=false;
        let text=document.createElement("div");
        text.innerHTML=`${cmlrow}. 말차라떼(I)　　 　　5.5　　${cml}개　
        <button onclick=rowremove("MatchalatteI","cml",${cmlrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        text.setAttribute("class","MatchalatteI");
        text.setAttribute("onclick",`SelectClick("MatchalatteI","cml")`)
        selectmenu.appendChild(text);
        if(row>=5) blank(row);
    }
    else if(cml !=0){
        let Matchalatte=document.querySelector(".MatchalatteI");
        if(cml<10){
            Matchalatte.innerHTML=`${cmlrow}. 말차라떼(I)　　 　　5.5　　${cml}개　
            <button onclick=rowremove("MatchalatteI","cml",${cmlrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        }
        else{
            Matchalatte.innerHTML=`${cmlrow}. 말차라떼(I)　　 　　5.5 　${cml}개　
            <button onclick=rowremove("MatchalatteI","cml",${cmlrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        }
    }
}

function printOceanlatte(){
    if(ol==1 && olrow==0 || olboo===true){
        var Oceanlatte = document.querySelector(".Oceanlatte");
        if (Oceanlatte !== undefined && Oceanlatte !== null) {
            selectmenu.removeChild(Oceanlatte);//중복일 경우 삭제
        }
        if (olrow == 0) {
            row++;
            olrow = row;
        }
        olboo=false;
        let text=document.createElement("div");
        text.innerHTML=`${olrow}. 바다라떼(H)　 　 　 5.0　　${ol}개　
        <button onclick=rowremove("Oceanlatte","ol",${olrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        text.setAttribute("class","Oceanlatte");
        text.setAttribute("onclick",`SelectClick("Oceanlatte","ol")`)
        selectmenu.appendChild(text);
        if(row>=5) blank(row);
    }
    else if(ol !=0){
        let Oceanlatte=document.querySelector(".Oceanlatte");
        if(ol<10){
            Oceanlatte.innerHTML=`${olrow}. 바다라떼(H)　 　 　 5.0　　${ol}개　
            <button onclick=rowremove("Oceanlatte","ol",${olrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        }
        else{
            Oceanlatte.innerHTML=`${olrow}. 바다라떼(H)　 　 　 5.0 　${ol}개　
            <button onclick=rowremove("Oceanlatte","ol",${olrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        }
    }
}

function printColdOceanlatte(){
    if(col==1 && colrow==0 || colboo===true){
        var Oceanlatte = document.querySelector(".OceanlatteI");
        if (Oceanlatte !== undefined && Oceanlatte !== null) {
            selectmenu.removeChild(Oceanlatte);//중복일 경우 삭제
        }
        if (colrow == 0) {
            row++;
            colrow = row;
        }
        colboo=false;
        let text=document.createElement("div");
        text.innerHTML=`${colrow}. 바다라떼(I)　　 　　5.5　　${col}개　
        <button onclick=rowremove("OceanlatteI","col",${colrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        text.setAttribute("class","OceanlatteI");
        text.setAttribute("onclick",`SelectClick("OceanlatteI","col")`)
        selectmenu.appendChild(text);
        if(row>=5) blank(row);
    }
    else if(col !=0){
        let Oceanlatte=document.querySelector(".OceanlatteI");
        if(col<10){
            Oceanlatte.innerHTML=`${colrow}. 바다라떼(I)　　 　　5.5　　${col}개　
            <button onclick=rowremove("OceanlatteI","col",${colrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        }
        else{
            Oceanlatte.innerHTML=`${colrow}. 바다라떼(I)　　 　　5.5 　${col}개　
            <button onclick=rowremove("OceanlatteI","col",${colrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        }
    }
}

function printStrawberrySmoothie(){
    if(ss==1 && ssrow==0 || ssboo === true){
        var StrawberrySmoothie = document.querySelector(".StrawberrySmoothie");
        if (StrawberrySmoothie !== undefined && StrawberrySmoothie !== null) {
            selectmenu.removeChild(StrawberrySmoothie);//중복일 경우 삭제
        }
        if (ssrow == 0) {
            row++;
            ssrow = row;
        }
        ssboo=false;
        let text=document.createElement("div");
        text.innerHTML=`${ssrow}. 딸기 스무디　　　　5.0　　${ss}개　
        <button onclick=rowremove("StrawberrySmoothie","ss",${ssrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        text.setAttribute("class","StrawberrySmoothie");
        text.setAttribute("onclick",`SelectClick("StrawberrySmoothie","ss")`)
        selectmenu.appendChild(text);
        if(row>=5) blank(row);
    }
    else if(ss !=0){
        let StrawberrySmoothie=document.querySelector(".StrawberrySmoothie");
        if(ss<10){
            StrawberrySmoothie.innerHTML=`${ssrow}. 딸기 스무디　　　　5.0　　${ss}개　
            <button onclick=rowremove("StrawberrySmoothie","ss",${ssrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        }
        else{
            StrawberrySmoothie.innerHTML=`${ssrow}. 딸기 스무디　　　　5.0 　${ss}개　
            <button onclick=rowremove("StrawberrySmoothie","ss",${ssrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        }
    }
}

function printBlueberrySmoothie(){
    if(bs==1 && bsrow==0 || bsboo===true){
        var BlueberrySmoothie = document.querySelector(".BlueberrySmoothie");
        if (BlueberrySmoothie !== undefined && BlueberrySmoothie !== null) {
            selectmenu.removeChild(BlueberrySmoothie);//중복일 경우 삭제
        }
        if (bsrow == 0) {
            row++;
            bsrow = row;
        }
        bsboo=false;
        let text=document.createElement("div");
        text.innerHTML=`${bsrow}. 블루베리스무디　 　5.0　　${bs}개　
        <button onclick=rowremove("BlueberrySmoothie","bs",${bsrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        text.setAttribute("class","BlueberrySmoothie");
        text.setAttribute("onclick",`SelectClick("BlueberrySmoothie","bs")`)
        selectmenu.appendChild(text);
        if(row>=5) blank(row);
    }
    else if(bs !=0){
        let BlueberrySmoothie=document.querySelector(".BlueberrySmoothie");
        if(bs<10){
            BlueberrySmoothie.innerHTML=`${bsrow}. 블루베리스무디　 　5.0　　${bs}개　
            <button onclick=rowremove("BlueberrySmoothie","bs",${bsrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        }
        else{
            BlueberrySmoothie.innerHTML=`${bsrow}. 블루베리스무디　 　5.0 　${bs}개　
            <button onclick=rowremove("BlueberrySmoothie","bs",${bsrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        }
    }
}

function printPeachSmoothie(){
    if(ps==1 && psrow==0 || psboo===true){
        var PeachSmoothie = document.querySelector(".PeachSmoothie");
        if (PeachSmoothie !== undefined && PeachSmoothie !== null) {
            selectmenu.removeChild(PeachSmoothie);//중복일 경우 삭제
        }
        if (psrow == 0) {
            row++;
            psrow = row;
        }
        psboo=false;
        let text=document.createElement("div");
        text.innerHTML=`${psrow}. 복숭아 스무디　　　5.0　　${ps}개　
        <button onclick=rowremove("PeachSmoothie","ps",${psrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        text.setAttribute("class","PeachSmoothie");
        text.setAttribute("onclick",`SelectClick("PeachSmoothie","ps")`)
        selectmenu.appendChild(text);
        if(row>=5) blank(row);
    }
    else if(ps !=0){
        let PeachSmoothie=document.querySelector(".PeachSmoothie");
        if(ps<10){
            PeachSmoothie.innerHTML=`${psrow}. 복숭아 스무디　　　5.0　　${ps}개　
            <button onclick=rowremove("PeachSmoothie","ps",${psrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        }
        else{
            PeachSmoothie.innerHTML=`${psrow}. 복숭아 스무디　　　5.0 　${ps}개　
            <button onclick=rowremove("PeachSmoothie","ps",${psrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        }
    }
}