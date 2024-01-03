
document.write('<script src="../js/메뉴데이터저장.js"> </script>');
var scripts = document.querySelectorAll('script[src="../js/메뉴데이터저장.js"]');
if (scripts.length > 1) {
    scripts[1].parentNode.removeChild(scripts[1]);
}


function MenuClick(idd){
    let now=document.querySelector(`#${idd}`);
    switch(idd){
        case "Chocolatte":
            t=confirm(` <${idd}> \n 아이스는 확인을 핫은 취소를 눌러주세요.\n Press OK for Ice or Cancel for Hot.`)
            if (t){ 
                cclatte++;
                printColdChocolatte();}
            else{
                clatte++; //각개수, 총개수 늘리기
                printChocolatte();}
            break;
        case "Matchalatte":
            t=confirm(` <${idd}> \n 아이스는 확인을 핫은 취소를 눌러주세요.\n Press OK for Ice or Cancel for Hot.`)
            if (t){ 
                cml++;
                printColdMatchalatte();}
            else{
                ml++//각개수, 총개수 늘리기
                printMatchalatte();}
            break;
        case "Oceanlatte":
            t=confirm(` <${idd}> \n 아이스는 확인을 핫은 취소를 눌러주세요.\n Press OK for Ice or Cancel for Hot.`)
            if (t){ 
                col++;
                printColdOceanlatte();}
            else{
                ol++//각개수, 총개수 늘리기
                printOceanlatte();}
            break;
        case "StrawberrySmoothie":
            ss++; 
            printStrawberrySmoothie();
            break;
        case "BlueberrySmoothie":
            bs++;
            printBlueberrySmoothie();
            break;
        case "PeachSmoothie":
            ps++;
            printPeachSmoothie();
            break;
    }

    makePrice();
    totalnum();
    savemenu();
}

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
