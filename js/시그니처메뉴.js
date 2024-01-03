document.write('<script src="../js/메뉴데이터저장.js"> </script>');
var scripts = document.querySelectorAll('script[src="../js/메뉴데이터저장.js"]');
if (scripts.length > 1) {
    scripts[1].parentNode.removeChild(scripts[1]);
}

function SignatureClick(a) {
    if (a == 1) {
        s1++;
        printGolgoreng();
    }
    else {
        s2++;
        printmtl();
    }

    makePrice();
    totalnum();
    savemenu();
}


function setClick(a) {
    if (a == 1) {
        set1++;
        printcd();
    }
    else if (a == 2) {
        set2++;
        print2Coffee();
    }
    else {
        set3++;
        print2Set();
    }
    makePrice();
    totalnum();
    savemenu();
}

/*각 메뉴 innerHTML하는 곳*/
function printGolgoreng() {
    if (s1 == 1 && s1row == 0 || s1boo === true) {
        if (s1row == 0) {
            row++;
            s1row = row;
        }
        var Golgoreng = document.querySelector(".Golgoreng");
        if (Golgoreng !== undefined && Golgoreng !== null) {
            selectmenu.removeChild(Golgoreng);
        }
        s1boo = false;
        var text = document.createElement("div");
        text.innerHTML = `${s1row}. 골고랭　　　　　 5.5　　${s1}개　
        <button onclick=rowremove("Golgoreng","s1",${s1row})><img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        text.setAttribute("class", "Golgoreng");
        text.setAttribute("onclick", `SelectClick("Golgoreng","s1")`)
        selectmenu.appendChild(text);

        if (row >= 5) blank(row);
        //alignment(n,"Golgoreng")
    }
    else if (s1 != 0) {
        var Golgoreng = document.querySelector(".Golgoreng");
        if (Golgoreng !== undefined && Golgoreng !== null) {
            if (s1 < 10) {
                Golgoreng.innerHTML = `${s1row}. 골고랭　　　　　 5.5　　${s1}개　
            <button onclick=rowremove("Golgoreng","s1",${s1row})><img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
            }
            else {
                Golgoreng.innerHTML = `${s1row}. 골고랭　　　　　 5.5 　${s1}개　
            <button onclick=rowremove("Golgoreng","s1",${s1row})><img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
            }
        }
    }
}

function printmtl() {
    if (s2 == 1 && s2row == 0 || s2boo === true) {
        if (s2row == 0) {
            row++;
            s2row = row;
        }
        var mtl = document.querySelector(".mtl");
        if (mtl !== undefined && mtl !== null) {
            selectmenu.removeChild(mtl);
        }
        s2boo=false;
        var text = document.createElement("div");
        text.innerHTML = `${s2row}. 인어의눈물라떼 　6.0　　${s2}개　
        <button onclick=rowremove("mtl","s2",${s2row})><img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        text.setAttribute("class", "mtl");
        text.setAttribute("onclick", `SelectClick("mtl","s2")`)
        selectmenu.appendChild(text);

        if (row >= 5) blank(row);
    }
    else if (s2 != 0) {

        var mtl = document.querySelector(".mtl");
        if (mtl !== undefined && mtl !== null) {
            if (s2 < 10) {
                mtl.innerHTML = `${s2row}. 인어의눈물라떼 　6.0　　${s2}개　
            <button onclick=rowremove("mtl","s2",${s2row})><img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
            }
            else {
                mtl.innerHTML = `${s2row}. 인어의눈물라떼 　6.0 　${s2}개　
            <button onclick=rowremove("mtl","s2",${s2row})><img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
            }
        }
    }
}

function printcd() {
    if (set1 == 1 && set1row == 0 || set1boo === true) {
        if (set1row == 0) {
            row++;
            set1row = row;
        }
        var CoffeeDessert = document.querySelector(".CoffeeDessert");
        if (CoffeeDessert !== undefined && CoffeeDessert !== null) {
            selectmenu.removeChild(CoffeeDessert);
        }
        set1boo = false;
        var text = document.createElement("div");
        text.innerHTML = `${set1row}. 커피디저트세트　13.5 　 ${set1}개　
        <button onclick=rowremove("CoffeeDessert","set1",${set1row})><img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        text.setAttribute("class", "CoffeeDessert");
        text.setAttribute("onclick", `SelectClick("CoffeeDessert","set1")`)
        selectmenu.appendChild(text);

        if (row >= 5) blank(row);
    }
    else if (set1 != 0) {

        var CoffeeDessert = document.querySelector(".CoffeeDessert");
        if (CoffeeDessert !== undefined && CoffeeDessert !== null) {
            if (set1 < 10) {
                CoffeeDessert.innerHTML = `${set1row}. 커피디저트세트　13.5 　 ${set1}개　
            <button onclick=rowremove("CoffeeDessert","set1",${set1row})><img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
            }
            else {
                CoffeeDessert.innerHTML = `${set1row}. 커피디저트세트　13.5  　${set1}개　
            <button onclick=rowremove("CoffeeDessert","set1",${set1row})><img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
            }
        }
    }
}

function print2Coffee() {
    if (set2 == 1 && set2row == 0 || set2boo === true) {
        var Coffee2 = document.querySelector(".Coffee2");
        if (Coffee2 !== undefined && Coffee2 !== null) {
            selectmenu.removeChild(Coffee2);//중복일 경우 삭제
        }
        if (set2row == 0) {
            row++;
            set2row = row;
        }
        set2boo = false;
        var text = document.createElement("div");
        text.innerHTML = `${set2row}. 커피커피세트　　10.5 　  ${set2}개　
        <button onclick=rowremove("Coffee2","set2",${set2row})><img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        text.setAttribute("class", "Coffee2");
        text.setAttribute("onclick", `SelectClick("Coffee2","set2")`)
        selectmenu.appendChild(text);

        if (row >= 5) blank(row);
    }
    else if (set2 != 0) {

        var Coffee2 = document.querySelector(".Coffee2");
        if (Coffee2 !== undefined && Coffee2 !== null) {
            if (set2 < 10) {
                Coffee2.innerHTML = `${set2row}. 커피커피세트　　10.5 　 ${set2}개　
            <button onclick=rowremove("Coffee2","set2",${set2row})><img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
            }
            else {
                Coffee2.innerHTML = `${set2row}. 커피커피세트　　10.5  　${set2}개　
            <button onclick=rowremove("Coffee2","set2",${set2row})><img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
            }
        }
    }
}

function print2Set() {
    if (set3 == 1 && set3row == 0 || set3boo === true) {
        if (set3row == 0) {
            row++;
            set3row = row;
        }
        var Set2 = document.querySelector(".Set2");
        if (Set2 !== undefined && Set2 !== null) {
            selectmenu.removeChild(Set2);
        }
        set3boo = false;
        var text = document.createElement("div");
        text.innerHTML = `${set3row}. 2인세트　　　　 16.5　　${set3}개　
        <button onclick=rowremove("Set2","set3",${set3row})><img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        text.setAttribute("class", "Set2");
        text.setAttribute("onclick", `SelectClick("Set2","set3")`);
        selectmenu.appendChild(text);

        if (row >= 5) blank(row);
    }
    else if (set3 != 0) {

        var Set2 = document.querySelector(".Set2");
        if (Set2 !== undefined && Set2 !== null) {
            if (set3 < 10) {
                Set2.innerHTML = `${set3row}. 2인세트　　　　 16.5　　${set3}개　
        <button onclick=rowremove("Set2","set3",${set3row})><img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
            }
            else {
                Set2.innerHTML = `${set3row}. 2인세트　　　　 16.5　 ${set3}개　
        <button onclick=rowremove("Set2","set3",${set3row})><img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
            }
        }
    }
}
