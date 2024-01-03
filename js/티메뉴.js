

document.write('<script src="../js/메뉴데이터저장.js"> </script>');
var scripts = document.querySelectorAll('script[src="../js/메뉴데이터저장.js"]');
if (scripts.length > 1) {
    scripts[1].parentNode.removeChild(scripts[1]);
}


function TeaClick(idd){
    let now=document.querySelector(`#${idd}`);
    switch(idd){
        case "Chamomile":
            cham++;
            printChamomile();
            break;
        case "GingerLemon":
            gl++;
            printGingerLemon();
            break;
        case "GrapeFruit":
            gf++;
            printGrapeFruit();
            break;
        case "PepperMint":
            pm++;
            printPepperMint();
            break;
        case "BlackMilkTea":
            bmt++;
            printBlackMilkTea();
            break;
        case "EarlGray":
            eg++;
            printEarlGray();
            break;
    }
    makePrice();
    totalnum();
    savemenu();
}






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
