

document.write('<script src="../js/메뉴데이터저장.js"> </script>');
var scripts = document.querySelectorAll('script[src="../js/메뉴데이터저장.js"]');
if (scripts.length > 1) {
    scripts[1].parentNode.removeChild(scripts[1]);
}

function FrappeClick(idd){
    let now=document.querySelector(`#${idd}`);
    switch(idd){
        case "MangoFrappe":
            mf++;
            printMangoFrappe();
            break;
        case "BlueberryFrappe":
            bf++;
            printBlueberryFrappe();
            break;
        case "PeachFrappe":
            pf++; 
            printPeachFrappe();
            break;
        case "LemonAde":
            la++; 
            printLemonAde();
            break;
        case "GraoeFruitAde":
            gfa++; 
            printGraoeFruitAde();
            break;
    }

    makePrice();
    totalnum();
    savemenu();
}



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
