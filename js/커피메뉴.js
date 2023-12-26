
document.write('<script src="../js/시그니처.js"> </script>');
var scripts = document.querySelectorAll('script[src="../js/시그니처.js"]');
if (scripts.length > 1) {
    scripts[1].parentNode.removeChild(scripts[1]);
}



function CoffeeClick(idd) {
    let now = document.querySelector(`#${idd}`);
    switch (idd) {
        case "Americano":
            t = confirm(` <${idd}> \n 아이스는 확인을 핫은 취소를 눌러주세요.\n Press OK for Ice or Cancel for Hot.`)
            if (t) {
                ca++, n++;;
                printColdAmericano();
            }
            else {
                a++, n++;//각개수, 총개수 늘리기
                printAmericano();
            }
            break;
        case "Espresso":
            t = confirm(` <${idd}> \n 아이스는 확인을 핫은 취소를 눌러주세요.\n Press OK for Ice or Cancel for Hot.`)
            if (t) {
                ce++, n++;;
                printColdEspresso();
            }
            else {
                e++, n++;//각개수, 총개수 늘리기
                printEspresso();
            }
            break;
        case "Cappuccino":
            t = confirm(` <${idd}> \n 아이스는 확인을 핫은 취소를 눌러주세요.\n Press OK for Ice or Cancel for Hot.`)
            if (t) {
                ccc++, n++;;
                printColdCappuccino();
            }
            else {
                cc++, n++;//각개수, 총개수 늘리기
                printCappuccino();
            }
            break;
        case "CafeLatte":
            t = confirm(` <${idd}> \n 아이스는 확인을 핫은 취소를 눌러주세요.\n Press OK for Ice or Cancel for Hot.`)
            if (t) {
                ccl++, n++;;
                printColdCafeLatte();
            }
            else {
                cl++, n++;//각개수, 총개수 늘리기
                printCafeLatte();
            }
            break;
        case "CafeMocha":
            t = confirm(` <${idd}> \n 아이스는 확인을 핫은 취소를 눌러주세요.\n Press OK for Ice or Cancel for Hot.`)
            if (t) {
                ccm++, n++;;
                printColdCafeMocha();
            }
            else {
                cm++, n++;//각개수, 총개수 늘리기
                printCafeMocha();
            }
            break;
        case "CF":
            cf++, n++;
            printCF();
            break;
    }
    makePrice();
    totalnum();
    savemenu();
}

// function SelectClick(classs, num) {//클래스 이름, 개수변수, 행번호 가져옴
//     let nowclass = document.querySelector(`.${classs}`);
//     switch (num) {
//         case "a":
//             a--;
//             break;
//         case "ca":
//             ca--;
//             break;
//         case "e":
//             e--;
//             break;
//         case "ce":
//             ce--;
//             break;
//         case "cc":
//             cc--;
//             break;
//         case "ccc":
//             ccc--;
//             break;
//         case "cl":
//             cl--;
//             break;
//         case "ccl":
//             ccl--;
//             break;
//         case "cm":
//             cm--;
//             break;
//         case "ccm":
//             ccm--;
//             break;
//         case "cf":
//             cf--;
//             break;
//     }

//     n--;

//     if (a <= 0 && arow != 0) {//각 개수가 존재하는 경우에만 제거
//         rowremove("Americano", "a", arow);
//     }
//     if (ca <= 0 && carow != 0) {//각 개수가 존재하는 경우에만 제거
//         rowremove("AmericanoI", "ca", carow);
//     }
//     if (e <= 0 && erow != 0) {
//         rowremove("Espresso", "e", erow);
//     }
//     if (ce <= 0 && cerow != 0) {
//         rowremove("EspressoI", "ce", cerow);
//     }
//     if (cc <= 0 && ccrow != 0) {
//         rowremove("Cappuccino", "cc", ccrow);
//     }
//     if (ccc <= 0 && cccrow != 0) {
//         rowremove("CappuccinoI", "ccc", cccrow);
//     }
//     if (cl <= 0 && clrow != 0) {
//         rowremove("CafeLatte", "cl", clrow);
//     }
//     if (ccl <= 0 && cclrow != 0) {
//         rowremove("CafeLatteI", "ccl", cclrow);
//     }
//     if (cm <= 0 && cmrow != 0) {
//         rowremove("CafeMocha", "cm", cmrow)
//     }
//     if (ccm <= 0 && ccmrow != 0) {
//         rowremove("CafeMochaI", "ccm", ccmrow)
//     }
//     if (cf <= 0 && cfrow != 0) {
//         rowremove("CF", "cf", cfrow)
//     }

//     totalprint();

// }

// function rowremove(classs, num, rownum) {//클래스 이름, 개수, 행번호 가져옴\
//     let nowclass = document.querySelector(`.${classs}`);
//     switch (num) {
//         case "a":
//             n -= Number(a);
//             a = 0; arow = 0;
//             break;
//         case "ca":
//             n -= Number(ca);
//             ca = 0; carow = 0;
//             break;
//         case "e":
//             n -= Number(e);
//             e = 0; erow = 0;
//             break;
//         case "ce":
//             n -= Number(ce);
//             ce = 0; cerow = 0;
//             break;
//         case "cc":
//             n -= Number(cc);
//             cc = 0; ccrow = 0;
//             break;
//         case "ccc":
//             n -= Number(ccc);
//             ccc = 0; cccrow = 0;
//             break;
//         case "cl":
//             n -= Number(cl);
//             cl = 0; clrow = 0;
//             break;
//         case "ccl":
//             n -= Number(ccl);
//             ccl = 0; cclrow = 0;
//             break;
//         case "cm":
//             n -= Number(cm);
//             cm = 0; cmrow = 0;
//             break;
//         case "ccm":
//             n -= Number(ccm);
//             ccm = 0; ccmrow = 0;
//             break;
//         case "cf":
//             n -= Number(cf);
//             cf = 0; cfrow = 0;
//             break;
//     }

//     /*현재 열보다 숫자가 더 크면 하나씩 줄이기*/
//     if (arow > rownum) arow--;
//     if (erow > rownum) erow--;
//     if (ccrow > rownum) ccrow--;
//     if (clrow > rownum) clrow--;
//     if (cmrow > rownum) cmrow--;
//     if (cfrow > rownum) cfrow--;

//     if (carow > rownum) carow--;
//     if (cerow > rownum) cerow--;
//     if (cccrow > rownum) cccrow--;
//     if (cclrow > rownum) cclrow--;
//     if (ccmrow > rownum) ccmrow--;


//     if (row == 5) {/*row가 5일경우 blank삭제*/
//         let blank = document.querySelector(".blank");
//         selectmenu.removeChild(blank);
//         noww = 5
//     }

//     row--;//전체 열 하나 줄이기
//     selectmenu.removeChild(nowclass);

//     totalprint();
//     /*cancleBubble을 이용해 이벤트 버블링 방지*/
//     if (window.event) {
//         window.event.cancelBubble = true;
//     } else {
//         event.stopPropagation();
//     }

// }


// function totalcancel() {//전체 취소 버튼을 누른 경우
//     if (a != 0) {//각 개수가 존재하는 경우에만 제거
//         let Americano = document.querySelector(".Americano");
//         selectmenu.removeChild(Americano);
//     }
//     if (ca != 0) {//각 개수가 존재하는 경우에만 제거
//         let AmericanoI = document.querySelector(".AmericanoI");
//         selectmenu.removeChild(AmericanoI);
//     }
//     if (e != 0) {
//         let Espresso = document.querySelector(".Espresso");
//         selectmenu.removeChild(Espresso);
//     }
//     if (ce != 0) {
//         let EspressoI = document.querySelector(".EspressoI");
//         selectmenu.removeChild(EspressoI);
//     }
//     if (cc != 0) {
//         let Cappuccino = document.querySelector(".Cappuccino");
//         selectmenu.removeChild(Cappuccino);
//     }
//     if (ccc != 0) {
//         let CappuccinoI = document.querySelector(".CappuccinoI");
//         selectmenu.removeChild(CappuccinoI);
//     }
//     if (cl != 0) {
//         let CafeLatte = document.querySelector(".CafeLatte");
//         selectmenu.removeChild(CafeLatte);
//     }
//     if (ccl != 0) {
//         let CafeLatteI = document.querySelector(".CafeLatteI");
//         selectmenu.removeChild(CafeLatteI);
//     }
//     if (cm != 0) {
//         let CafeMocha = document.querySelector(".CafeMocha");
//         selectmenu.removeChild(CafeMocha);
//     }
//     if (ccm != 0) {
//         let CafeMochaI = document.querySelector(".CafeMochaI");
//         selectmenu.removeChild(CafeMochaI);
//     }
//     if (cf != 0) {
//         let CF = document.querySelector(".CF");
//         selectmenu.removeChild(CF);
//     }

//     if (row >= 5) {
//         let blank = document.querySelector(".blank");
//         selectmenu.removeChild(blank);
//     }
//     a = 0, e = 0, cc = 0, cl = 0, cm = 0, cf = 0;//각 개수
//     ca = 0, ce = 0, ccc = 0, ccl = 0, ccm = 0; //cold 아메리카노(H), 에스프레소(H) etc 
//     n = 0, row = 0; //총개수, 행개수
//     arow = 0, erow = 0, ccrow = 0, clrow = 0, cmrow = 0, cfrow = 0; //각 열번호
//     carow = 0, cerow = 0, cccrow = 0, cclrow = 0, ccmrow = 0;
//     //전체 초기화

//     makePrice();
//     totalnum();
// }





function printAmericano() {
    if (a == 1 && arow == 0 || aboo === true) {
        if (arow == 0) {
            row++;
            arow = row;
        }
        var Americano = document.querySelector(".Americano");
        if (Americano !== undefined && Americano !== null) {
            selectmenu.removeChild(Americano);
        }
        aboo = false;
        let text = document.createElement("div");
        text.innerHTML = `${arow}. 아메리카노(H)　 　　　3.0　　${a}개　
            <button onclick=rowremove("Americano","a",${arow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        text.setAttribute("class", "Americano");
        text.setAttribute("onclick", `SelectClick("Americano","a")`)
        selectmenu.appendChild(text);
        if (row >= 5) blank(row);
        //alignment(n,"Americano")
    }
    else if (a != 0) {
        let Americano = document.querySelector(".Americano");
        if (Americano !== undefined && Americano !== null) {
            if (a < 10) {
                Americano.innerHTML = `${arow}. 아메리카노(H)　 　　　3.0　　${a}개　
                <button onclick=rowremove("Americano","a",${arow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
            }
            else {
                Americano.innerHTML = `${arow}. 아메리카노(H)　 　　　3.0 　${a}개　
                <button onclick=rowremove("Americano","a",${arow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
            }
        }
    }

}

function printColdAmericano() {
    if (ca == 1 && carow == 0 || caboo === true) {
        if (carow == 0) {
            row++;
            carow = row;
        }
        var AmericanoI = document.querySelector(".AmericanoI");
        if (AmericanoI !== undefined && AmericanoI !== null) {
            selectmenu.removeChild(AmericanoI);
        }
        caboo = false;
        let text = document.createElement("div");
        text.innerHTML = `${carow}. 아메리카노(I)　 　　　 3.5　　${ca}개　
        <button onclick=rowremove("AmericanoI","ca",${carow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        text.setAttribute("class", "AmericanoI");
        text.setAttribute("onclick", `SelectClick("AmericanoI","ca")`)
        selectmenu.appendChild(text);
        if (row >= 5) blank(row);
        //alignment(n,"Americano")
    }
    else if (ca != 0) {
        let Americano = document.querySelector(".AmericanoI");
        if (Americano !== undefined && Americano !== null) {
            if (ca < 10) {
                Americano.innerHTML = `${carow}. 아메리카노(I)　 　　　 3.5　　${ca}개　
            <button onclick=rowremove("AmericanoI","ca",${carow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
            }
            else {
                Americano.innerHTML = `${carow}. 아메리카노(I)　 　　　 3.5 　${ca}개　
            <button onclick=rowremove("AmericanoI","ca",${carow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
            }
        }
    }
}

function printEspresso() {
    if (e == 1 && erow == 0 || eboo === true) {//에스프레소(H) ${}개 
        if (erow == 0) {
            row++;
            erow = row;
        }
        var Espresso = document.querySelector(".Espresso");
        if (Espresso !== undefined && Espresso !== null) {
            selectmenu.removeChild(Espresso);
        }
        eboo = false;
        let text = document.createElement("div");
        text.innerHTML = `${erow}. 에스프레소(H)　　　　 1.5　　${e}개　
            <button onclick=rowremove("Espresso","e",${erow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        text.setAttribute("class", "Espresso");
        text.setAttribute("onclick", `SelectClick("Espresso","e")`)
        selectmenu.appendChild(text);
        if (row >= 5) blank(row);
        //alignment(n,"Espresso")
    }
    else if (e != 0) {
        let Espresso = document.querySelector(".Espresso");
        if (Espresso !== undefined && Espresso !== null) {
            if (e < 10) {
                Espresso.innerHTML = `${erow}. 에스프레소(H)　　　　 1.5　　${e}개　
                <button onclick=rowremove("Espresso","e",${erow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
            }
            else {
                Espresso.innerHTML = `${erow}. 에스프레소(H)　　　　 1.5 　${e}개　
                <button onclick=rowremove("Espresso","e",${erow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
            }
        }
    }
}

function printColdEspresso() {
    if (ce == 1 && cerow == 0 || ceboo === true) {
        if (cerow == 0) {
            row++;
            cerow = row;
        }
        var EspressoI = document.querySelector(".EspressoI");
        if (EspressoI !== undefined && EspressoI !== null) {
            selectmenu.removeChild(EspressoI);
        }
        ceboo = false;
        let text = document.createElement("div");
        text.innerHTML = `${cerow}. 에스프레소(I)　　 　　 2.0　　${ce}개　
        <button onclick=rowremove("EspressoI","ce",${cerow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        text.setAttribute("class", "EspressoI");
        text.setAttribute("onclick", `SelectClick("EspressoI","ce")`)
        selectmenu.appendChild(text);
        if (row >= 5) blank(row);
    }
    else if (ce != 0) {
        let Espresso = document.querySelector(".EspressoI");
        if (Espresso !== undefined && Espresso !== null) {
            if (ce < 10) {
                Espresso.innerHTML = `${cerow}. 에스프레소(I)　　 　　 2.0　　${ce}개　
            <button onclick=rowremove("EspressoI","ce",${cerow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
            }
            else {
                Espresso.innerHTML = `${cerow}. 에스프레소(I)　　 　　 2.0 　${ce}개　
            <button onclick=rowremove("EspressoI","ce",${cerow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
            }
        }
    }
}

function printCappuccino() {
    if (cc == 1 && ccrow == 0 || ccboo === true) {
        if (ccrow == 0) {
            row++;
            ccrow = row;
        }
        var Cappuccino = document.querySelector(".Cappuccino");
        if (Cappuccino !== undefined && Cappuccino !== null) {
            selectmenu.removeChild(Cappuccino);
        }
        ccboo = false;
        let text = document.createElement("div");
        text.innerHTML = `${ccrow}. 카푸치노(H)　　　　　4.5　　${cc}개　
            <button onclick=rowremove("Cappuccino","cc",${ccrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        text.setAttribute("class", "Cappuccino");
        text.setAttribute("onclick", `SelectClick("Cappuccino","cc")`)
        selectmenu.appendChild(text);
        if (row >= 5) blank(row);
    }
    else if (cc != 0) {
        let Cappuccino = document.querySelector(".Cappuccino");
        if (Cappuccino !== undefined && Cappuccino !== null) {
            if (cc < 10) {
                Cappuccino.innerHTML = `${ccrow}. 카푸치노(H)　　　　　4.5　　${cc}개　
                <button onclick=rowremove("Cappuccino","cc",${ccrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
            }
            else {
                Cappuccino.innerHTML = `${ccrow}. 카푸치노(H)　　　　　4.5 　${cc}개　
                <button onclick=rowremove("Cappuccino","cc",${ccrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
            }
        }
    }
}

function printColdCappuccino() {
    if (ccc == 1 && cccrow == 0 || cccboo === true) {
        if (cccrow == 0) {
            row++;
            cccrow = row;
        }
        var CappuccinoI = document.querySelector(".CappuccinoI");
        if (CappuccinoI !== undefined && CappuccinoI !== null) {
            selectmenu.removeChild(CappuccinoI);
        }
        cccboo = false;
        let text = document.createElement("div");
        text.innerHTML = `${cccrow}. 카푸치노(I)　　 　　　 4.5　　${ccc}개　
        <button onclick=rowremove("CappuccinoI","ccc",${cccrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        text.setAttribute("class", "CappuccinoI");
        text.setAttribute("onclick", `SelectClick("CappuccinoI","ccc")`)
        selectmenu.appendChild(text);
        if (row >= 5) blank(row);
    }
    else if (ccc != 0) {
        let Cappuccino = document.querySelector(".CappuccinoI");
        if (Cappuccino !== undefined && Cappuccino !== null) {
            if (ccc < 10) {
                Cappuccino.innerHTML = `${cccrow}. 카푸치노(I)　　 　　　 4.5　　${ccc}개　
            <button onclick=rowremove("CappuccinoI","ccc",${cccrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
            }
            else {
                Cappuccino.innerHTML = `${cccrow}. 카푸치노(I)　　 　　　 4.5 　${ccc}개　
            <button onclick=rowremove("CappuccinoI","ccc",${cccrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
            }
        }
    }
}

function printCafeLatte() {
    if (cl == 1 && clrow == 0 || clboo === true) {
        if (clrow == 0) {
            row++;
            clrow = row;
        }
        var CafeLatte = document.querySelector(".CafeLatte");
        if (CafeLatte !== undefined && CafeLatte !== null) {
            selectmenu.removeChild(CafeLatte);
        }
        clboo = false;
        let text = document.createElement("div");
        text.innerHTML = `${clrow}. 카페라떼(H)　　　　　 4.5　　${cl}개　
            <button onclick=rowremove("CafeLatte","cl",${clrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        text.setAttribute("class", "CafeLatte");
        text.setAttribute("onclick", `SelectClick("CafeLatte","cl")`)
        selectmenu.appendChild(text);
        if (row >= 5) blank(row);
    }
    else if (cl != 0) {
        let CafeLatte = document.querySelector(".CafeLatte");
        if (CafeLatte !== undefined && CafeLatte !== null) {
            if (cl < 10) {
                CafeLatte.innerHTML = `${clrow}. 카페라떼(H)　　　　　 4.5　　${cl}개　
                <button onclick=rowremove("CafeLatte","cl",${clrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
            }
            else {
                CafeLatte.innerHTML = `${clrow}. 카페라떼(H)　　　　　 4.5 　${cl}개　
                <button onclick=rowremove("CafeLatte","cl",${clrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
            }
        }
    }
}

function printColdCafeLatte() {
    if (ccl == 1 && cclrow == 0 || cclboo === true) {
        if (cclrow == 0) {
            row++;
            cclrow = row;
        }
        var CafeLatteI = document.querySelector(".CafeLatteI");
        if (CafeLatteI !== undefined && CafeLatteI !== null) {
            selectmenu.removeChild(CafeLatteI);
        }
        cclboo = false;
        let text = document.createElement("div");
        text.innerHTML = `${cclrow}. 카페라떼(I)　　　 　　 5.0　　${ccl}개　
        <button onclick=rowremove("CafeLatteI","ccl",${cclrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        text.setAttribute("class", "CafeLatteI");
        text.setAttribute("onclick", `SelectClick("CafeLatteI","ccl")`)
        selectmenu.appendChild(text);
        if (row >= 5) blank(row);
    }
    else if (ccl != 0) {
        let CafeLatte = document.querySelector(".CafeLatteI");
        if (CafeLatte !== undefined && CafeLatte !== null) {
            if (ccl < 10) {
                CafeLatte.innerHTML = `${cclrow}. 카페라떼(I)　　　 　　 5.0　　${ccl}개　
            <button onclick=rowremove("CafeLatteI","ccl",${cclrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
            }
            else {
                CafeLatte.innerHTML = `${cclrow}. 카페라떼(I)　　　 　　 5.0 　${ccl}개　
            <button onclick=rowremove("CafeLatteI","ccl",${cclrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
            }
        }
    }
}

function printCafeMocha() {
    if (cm == 1 && cmrow == 0 || cmboo === true) {
        if (cmrow == 0) {
            row++;
            cmrow = row;
        }
        var CafeMocha = document.querySelector(".CafeMocha");
        if (CafeMocha !== undefined && CafeMocha !== null) {
            selectmenu.removeChild(CafeMocha);
        }
        cmboo = false;
        let text = document.createElement("div");
        text.innerHTML = `${cmrow}. 카페모카(H)　 　 　　 5.0 　 ${cm}개　
            <button onclick=rowremove("CafeMocha","cm",${cmrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        text.setAttribute("class", "CafeMocha");
        text.setAttribute("onclick", `SelectClick("CafeMocha","cm")`)
        selectmenu.appendChild(text);
        if (row >= 5) blank(row);
    }
    else if (cm != 0) {
        let CafeMocha = document.querySelector(".CafeMocha");
        if (CafeMocha !== undefined && CafeMocha !== null) {
            if (cm < 10) {
                CafeMocha.innerHTML = `${cmrow}. 카페모카(H)　 　 　　 5.0 　 ${cm}개　
                <button onclick=rowremove("CafeMocha","cm",${cmrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
            }
            else {
                CafeMocha.innerHTML = `${cmrow}. 카페모카(H)　 　 　　 5.0 　${cm}개　
                <button onclick=rowremove("CafeMocha","cm",${cmrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
            }
        }
    }
}

function printColdCafeMocha() {
    if (ccm == 1 && ccmrow == 0 || ccmboo === true) {
        if (ccmrow == 0) {
            row++;
            ccmrow = row;
        }
        var CafeMochaI = document.querySelector(".CafeMochaI");
        if (CafeMochaI !== undefined && CafeMochaI !== null) {
            selectmenu.removeChild(CafeMochaI);
        }
        ccmboo = false;
        let text = document.createElement("div");
        text.innerHTML = `${ccmrow}. 카페모카(I)　　 　　　 5.5 　 ${ccm}개　
        <button onclick=rowremove("CafeMochaI","ccm",${ccmrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        text.setAttribute("class", "CafeMochaI");
        text.setAttribute("onclick", `SelectClick("CafeMochaI","ccm")`)
        selectmenu.appendChild(text);
        if (row >= 5) blank(row);
    }
    else if (ccm != 0) {
        let CafeMocha = document.querySelector(".CafeMochaI");
        if (CafeMochaI !== undefined && CafeMochaI !== null) {
            if (ccm < 10) {
                CafeMocha.innerHTML = `${ccmrow}. 카페모카(I)　　 　　　 5.5 　 ${ccm}개　
            <button onclick=rowremove("CafeMochaI","ccm",${ccmrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
            }
            else {
                CafeMocha.innerHTML = `${ccmrow}. 카페모카(I)　　 　　　 5.5  　${ccm}개　
            <button onclick=rowremove("CafeMochaI","ccm",${ccmrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
            }
        }
    }
}

function printCF() {
    if (cf == 1 && cfrow == 0 || cfboo === true) {
        if (cfrow == 0) {
            row++;
            cfrow = row;
        }
        var CF = document.querySelector(".CF");
        if (CF !== undefined && CF !== null) {
            selectmenu.removeChild(CF);
        }
        cfboo = false;
        let text = document.createElement("div");
        text.innerHTML = `${cfrow}. 초콜릿 프라푸치노　　6.0 　 ${cf}개　
        <button onclick=rowremove("CF","cf",${cfrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
        text.setAttribute("class", "CF");
        text.setAttribute("onclick", `SelectClick("CF","cf")`)
        selectmenu.appendChild(text);
        if (row >= 5) blank(row);
    }
    else if (cf != 0) {
        let CF = document.querySelector(".CF");
        if (CF !== undefined && CF !== null) {
            if (cf < 10) {
                CF.innerHTML = `${cfrow}. 초콜릿 프라푸치노　　6.0 　 ${cf}개　
            <button onclick=rowremove("CF","cf",${cfrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
            }
            else {
                CF.innerHTML = `${cfrow}. 초콜릿 프라푸치노　　6.0 　 ${cf}개　
            <button onclick=rowremove("CF","cf",${cfrow})> <img src="../img/고래그림1.png" width="30px" hegiht="65px"> </button>`;
            }
        }
    }
}
