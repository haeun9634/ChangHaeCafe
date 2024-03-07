

document.write('<script src="../js/시그니처메뉴.js"> </script>');
document.write('<script src="../js/커피메뉴.js"> </script>');
document.write('<script src="../js/라떼,스무디메뉴.js"> </script>');
document.write('<script src="../js/프라페,에이드메뉴.js"> </script>');
document.write('<script src="../js/티메뉴.js"> </script>');
document.write('<script src="../js/디저트메뉴.js"> </script>');
// document.write('<script src="../js/결제화면.js"> </script>');

checkscripts("시그니처");
checkscripts("커피");
checkscripts("라떼,스무디");
checkscripts("프라페,에이드");
checkscripts("티");
checkscripts("디저트");

function checkscripts(scriptname) {
    var scripts = document.querySelectorAll(`script[src="../js/${scriptname}메뉴.js"]`);
    if (scripts.length > 1) {
        scripts[1].parentNode.removeChild(scripts[1]);
    }
}

var select = document.querySelector(".select");
var selectmenu = document.querySelector(".selectmenu");
var price = document.querySelector("#price");

var n = 0, row = 0; //총개수, 행개수

var s1 = 0, s2 = 0;//시그니처 메뉴 개수
var set1 = 0, set2 = 0, set3 = 0;//시그니처 메뉴 개수
var s1row = 0, s2row = 0, set1row = 0, set2row = 0, set3row = 0;

var a = 0, e = 0, cc = 0, cl = 0, cm = 0, cf = 0;//각 개수
var ca = 0, ce = 0, ccc = 0, ccl = 0, ccm = 0; //cold 아메리카노(I), 에스프레소(I) etc 
var arow = 0, erow = 0, ccrow = 0, clrow = 0, cmrow = 0, cfrow = 0; //각 열번호
var carow = 0, cerow = 0, cccrow = 0, cclrow = 0, ccmrow = 0;

var clatte = 0, ml = 0, ol = 0, ss = 0, bs = 0, ps = 0;//각 개수
var cclatte = 0, cml = 0, col = 0;//chocolatte iclatte, 각 iclatte 개수
var clatterow = 0, mlrow = 0, olrow = 0, ssrow = 0, bsrow = 0, psrow = 0; //각 열번호
var cclatterow = 0, cmlrow = 0, colrow = 0;

var cham = 0, gl = 0, gf = 0, pm = 0, bmt = 0, eg = 0;//각 개수
var chamrow = 0, glrow = 0, gfrow = 0, pmrow = 0, bmtrow = 0, egrow = 0; //각 열번호

var mf = 0, bf = 0, pf = 0, la = 0, gfa = 0;//각 개수
var mfrow = 0, bfrow = 0, pfrow = 0, larow = 0, gfarow = 0; //각 열번호

var gc = 0, spc = 0, wm = 0, wsc = 0, snw = 0, bnw = 0;//각 개수
var gcrow = 0, spcrow = 0, wmrow = 0, wscrow = 0, snwrow = 0, bnwrow = 0; //각 열번호

var menuclassname = ["Golgoreng", "mtl", "CoffeeDessert", "Coffee2", "Set2", "Americano", "AmericanoI", "Espresso"
    , "EspressoI", "Cappuccino", "CappuccinoI", "CafeLatte", "CafeLatteI", "CafeMocha", "CafeMochaI"
    , "CF", "Chocolatte", "Matchalatte", "Oceanlatte", "ChocolatteI", "MatchalatteI", "OceanlatteI"
    , "StrawberrySmoothie", "BlueberrySmoothie", "PeachSmoothie"
    , "MangoFrappe", "BlueberryFrappe", "PeachFrappe", "LemonAde", "GraoeFruitAde"
    , "Chamomile", "GingerLemon", "GrapeFruit", "PepperMint", "BlackMilkTea", "EarlGray"
    , "GorengCookie", "SeaPearlChocolate", "WhaleMacaron", "WhaleSculptureCake", "StrawberrywhippedcreamNutellaWaffle"
    , "BananaNutellaWaffle"]

var objectlist = [{ "node": "s1", "count": 0, "row": 0 }, { "node": "s2", "count": 0, "row": 0 }, { "node": "set1", "count": 0, "row": 0 },
{ "node": "set2", "count": 0, "row": 0 }, { "node": "set3", "count": 0, "row": 0 },
{ "node": "a", "count": 0, "row": 0 }, { "node": "e", "count": 0, "row": 0 }, { "node": "cc", "count": 0, "row": 0 }
    , { "node": "cl", "count": 0, "row": 0 }, { "node": "cm", "count": 0, "row": 0 }, { "node": "cf", "count": 0, "row": 0 }
    , { "node": "ca", "count": 0, "row": 0 }, { "node": "ce", "count": 0, "row": 0 }, { "node": "ccc", "count": 0, "row": 0 }
    , { "node": "ccl", "count": 0, "row": 0 }, { "node": "ccm", "count": 0, "row": 0 }

    , { "node": "clatte", "count": 0, "row": 0 }, { "node": "ml", "count": 0, "row": 0 }, { "node": "ol", "count": 0, "row": 0 }
    , { "node": "ss", "count": 0, "row": 0 }, { "node": "bs", "count": 0, "row": 0 }, { "node": "ps", "count": 0, "row": 0 }
    , { "node": "cclatte", "count": 0, "row": 0 }, { "node": "cml", "count": 0, "row": 0 }, { "node": "col", "count": 0, "row": 0 }

    , { "node": "mf", "count": 0, "row": 0 }, { "node": "bf", "count": 0, "row": 0 }, { "node": "pf", "count": 0, "row": 0 }
    , { "node": "la", "count": 0, "row": 0 }, { "node": "gfa", "count": 0, "row": 0 }

    , { "node": "cham", "count": 0, "row": 0 }, { "node": "gf", "count": 0, "row": 0 }, { "node": "pm", "count": 0, "row": 0 }
    , { "node": "bmt", "count": 0, "row": 0 }, { "node": "eg", "count": 0, "row": 0 }, { "node": "gl", "count": 0, "row": 0 }

    , { "node": "gc", "count": 0, "row": 0 }, { "node": "spc", "count": 0, "row": 0 }, { "node": "wm", "count": 0, "row": 0 }
    , { "node": "wsc", "count": 0, "row": 0 }, { "node": "snw", "count": 0, "row": 0 }, { "node": "bnw", "count": 0, "row": 0 }
];


function sortByRow(a, b) {
    return a.row - b.row;
}

function addLoadEvent(callback) {
    window.addEventListener('load', callback);
}

function SelectClick(classs, num) {//클래스 이름, 개수변수, 행번호 가져옴
    // var nowclass = document.querySelector(`.${classs}`);
    switch (num) {
        case "s1":
            s1--;
            break;
        case "s2":
            s2--;
            break;
        case "set1":
            set1--;
            break;
        case "set2":
            set2--;
            break;
        case "set3":
            set3--;
            break;
        case "a":
            a--;
            break;
        case "ca":
            ca--;
            break;
        case "e":
            e--;
            break;
        case "ce":
            ce--;
            break;
        case "cc":
            cc--;
            break;
        case "ccc":
            ccc--;
            break;
        case "cl":
            cl--;
            break;
        case "ccl":
            ccl--;
            break;
        case "cm":
            cm--;
            break;
        case "ccm":
            ccm--;
            break;
        case "cf":
            cf--;
            break;
        case "clatte":
            clatte--;
            break;
        case "ml":
            ml--;
            break;
        case "ol":
            ol--;
            break;
        case "cclatte":
            cclatte--;
            break;
        case "cml":
            cml--;
            break;
        case "col":
            col--;
            break;
        case "ss":
            ss--;
            break;
        case "bs":
            bs--;
            break;
        case "ps":
            ps--;
            break;
        case "mf":
            mf--;
            break;
        case "bf":
            bf--;
            break;
        case "pf":
            pf--;
            break;
        case "la":
            la--;
            break;
        case "gfa":
            gfa--;
            break;
        case "cham":
            cham--;
            break;
        case "gl":
            gl--;
            break;
        case "gf":
            gf--;
            break;
        case "pm":
            pm--;
            break;
        case "bmt":
            bmt--;
            break;
        case "eg":
            eg--;
            break;
        case "gc":
            gc--;
            break;
        case "spc":
            spc--;
            break;
        case "wm":
            wm--;
            break;
        case "wsc":
            wsc--;
            break;
        case "snw":
            snw--;
            break;
        case "bnw":
            bnw--;
            break;
    }
    n--;

    if (s1 <= 0 && s1row != 0) rowremove("Golgoreng", "s1", s1row);
    if (s2 <= 0 && s2row != 0) rowremove("mtl", "s2", s2row);
    if (set1 <= 0 && set1row != 0) rowremove("CoffeeDessert", "set1", set1row)
    if (set2 <= 0 && set2row != 0) rowremove("Coffee2", "set2", set2row)
    if (set3 <= 0 && set3row != 0) rowremove("Set2", "set3", set3row);
    if (a <= 0 && arow != 0) {//각 개수가 존재하는 경우에만 제거
        rowremove("Americano", "a", arow);
    }
    if (ca <= 0 && carow != 0) {//각 개수가 존재하는 경우에만 제거
        rowremove("AmericanoI", "ca", carow);
    }
    if (e <= 0 && erow != 0) {
        rowremove("Espresso", "e", erow);
    }
    if (ce <= 0 && cerow != 0) {
        rowremove("EspressoI", "ce", cerow);
    }
    if (cc <= 0 && ccrow != 0) {
        rowremove("Cappuccino", "cc", ccrow);
    }
    if (ccc <= 0 && cccrow != 0) {
        rowremove("CappuccinoI", "ccc", cccrow);
    }
    if (cl <= 0 && clrow != 0) {
        rowremove("CafeLatte", "cl", clrow);
    }
    if (ccl <= 0 && cclrow != 0) {
        rowremove("CafeLatteI", "ccl", cclrow);
    }
    if (cm <= 0 && cmrow != 0) {
        rowremove("CafeMocha", "cm", cmrow)
    }
    if (ccm <= 0 && ccmrow != 0) {
        rowremove("CafeMochaI", "ccm", ccmrow)
    }
    if (cf <= 0 && cfrow != 0) {
        rowremove("CF", "cf", cfrow)
    }

    if (clatte <= 0 && clatterow != 0) rowremove("Chocolatte", "clatte", clatterow);
    if (ml <= 0 && mlrow != 0) rowremove("Matchalatte", "ml", mlrow);
    if (ol <= 0 && olrow != 0) rowremove("Oceanlatte", "ol", olrow);
    if (cclatte <= 0 && cclatterow != 0) rowremove("ChocolatteI", "cclatte", cclatterow);
    if (cml <= 0 && cmlrow != 0) rowremove("MatchalatteI", "cml", cmlrow);
    if (col <= 0 && colrow != 0) rowremove("OceanlatteI", "col", colrow);
    if (ss <= 0 && ssrow != 0) rowremove("StrawberrySmoothie", "ss", ssrow);
    if (bs <= 0 && bsrow != 0) rowremove("BlueberrySmoothie", "bs", bsrow);
    if (ps <= 0 && psrow != 0) rowremove("PeachSmoothie", "ps", psrow);

    if (mf <= 0 && mfrow != 0) rowremove("MangoFrappe", "mf", mfrow);
    if (bf <= 0 && bfrow != 0) rowremove("BlueberryFrappe", "bf", bfrow);
    if (pf <= 0 && pfrow != 0) rowremove("PeachFrappe", "pf", pfrow);
    if (la <= 0 && larow != 0) rowremove("LemonAde", "la", larow);
    if (gfa <= 0 && gfarow != 0) rowremove("GraoeFruitAde", "gfa", gfarow);


    if (cham <= 0 && chamrow != 0) rowremove("Chamomile", "cham", chamrow);
    if (gl <= 0 && glrow != 0) rowremove("GingerLemon", "gl", glrow);
    if (gf <= 0 && gfrow != 0) rowremove("GrapeFruit", "gf", gfrow);
    if (pm <= 0 && pmrow != 0) rowremove("PepperMint", "pm", pmrow);
    if (bmt <= 0 && bmtrow != 0) rowremove("BlackMilkTea", "bmt", bmtrow);
    if (eg <= 0 && egrow != 0) rowremove("EarlGray", "eg", egrow);

    if (gc <= 0 && gcrow != 0) rowremove("GorengCookie", "gc", gcrow);
    if (spc <= 0 && spcrow != 0) rowremove("SeaPearlChocolate", "spc", spcrow);
    if (wm <= 0 && wmrow != 0) rowremove("WhaleMacaron", "wm", wmrow);
    if (wsc <= 0 && wscrow != 0) rowremove("WhaleSculptureCake", "wsc", wscrow);
    if (snw <= 0 && snwrow != 0) rowremove("StrawberrywhippedcreamNutellaWaffle", "snw", snwrow);
    if (bnw <= 0 && bnwrow != 0) rowremove("BananaNutellaWaffle", "bnw", bnwrow);


    totalprint();

}



function rowremove(classs, num, rownum) {//클래스 이름, 개수, 행번호 가져옴\
    var nowclass = document.querySelector(`.${classs}`);
    switch (num) {
        case "s1":
            n -= Number(s1);
            s1 = 0; s1row = 0;
            break;
        case "s2":
            n -= Number(s2);
            s2 = 0; s2row = 0;
            break;
        case "set1":
            n -= Number(set1);
            set1 = 0; set1row = 0;
            break;
        case "set2":
            n -= Number(set2);
            set2 = 0; set2row = 0;
            break;
        case "set3":
            n -= Number(set3);
            set3 = 0; set3row = 0;
            break;
        case "a":
            n -= Number(a);
            a = 0; arow = 0;
            break;
        case "ca":
            n -= Number(ca);
            ca = 0; carow = 0;
            break;
        case "e":
            n -= Number(e);
            e = 0; erow = 0;
            break;
        case "ce":
            n -= Number(ce);
            ce = 0; cerow = 0;
            break;
        case "cc":
            n -= Number(cc);
            cc = 0; ccrow = 0;
            break;
        case "ccc":
            n -= Number(ccc);
            ccc = 0; cccrow = 0;
            break;
        case "cl":
            n -= Number(cl);
            cl = 0; clrow = 0;
            break;
        case "ccl":
            n -= Number(ccl);
            ccl = 0; cclrow = 0;
            break;
        case "cm":
            n -= Number(cm);
            cm = 0; cmrow = 0;
            break;
        case "ccm":
            n -= Number(ccm);
            ccm = 0; ccmrow = 0;
            break;
        case "cf":
            n -= Number(cf);
            cf = 0; cfrow = 0;
            break;
        case "clatte":
            n -= Number(clatte);
            clatte = 0; clatterow = 0;
            break;
        case "ml":
            n -= Number(ml);
            ml = 0; mlrow = 0;
            break;
        case "ol":
            n -= Number(ol);
            ol = 0; olrow = 0;
            break;
        case "cclatte":
            n -= Number(cclatte);
            cclatte = 0; cclatterow = 0;
            break;
        case "cml":
            n -= Number(cml);
            cml = 0; cmlrow = 0;
            break;
        case "col":
            n -= Number(col);
            col = 0; colrow = 0;
            break;
        case "ss":
            n -= Number(ss);
            ss = 0; ssrow = 0;
            break;
        case "bs":
            n -= Number(bs);
            bs = 0; bsrow = 0;
            break;
        case "ps":
            n -= Number(ps);
            ps = 0; psrow = 0;
            break;
        case "mf":
            n -= Number(mf);
            mf = 0; mfrow = 0;
            break;
        case "bf":
            n -= Number(bf);
            bf = 0; bfrow = 0;
            break;
        case "pf":
            n -= Number(pf);
            pf = 0; pfrow = 0;
            break;
        case "la":
            n -= Number(la);
            la = 0; larow = 0;
            break;
        case "gfa":
            n -= Number(gfa);
            gfa = 0; gfarow = 0;
            break;
        case "cham":
            n -= Number(cham);
            cham = 0; chamrow = 0;
            break;
        case "gl":
            n -= Number(gl);
            gl = 0; glrow = 0;
            break;
        case "gf":
            n -= Number(gf);
            gf = 0; gfrow = 0;
            break;
        case "pm":
            n -= Number(pm);
            pm = 0; pmrow = 0;
            break;
        case "bmt":
            n -= Number(bmt);
            bmt = 0; bmtrow = 0;
            break;
        case "eg":
            n -= Number(eg);
            eg = 0; egrow = 0;
            break;
        case "gc":
            n -= Number(gc);
            gc = 0; gcrow = 0;
            break;
        case "spc":
            n -= Number(spc);
            spc = 0; spcrow = 0;
            break;
        case "wm":
            n -= Number(wm);
            wm = 0; wmrow = 0;
            break;
        case "wsc":
            n -= Number(wsc);
            wsc = 0; wscrow = 0;
            break;
        case "snw":
            n -= Number(snw);
            snw = 0; snwrow = 0;
            break;
        case "bnw":
            n -= Number(bnw);
            bnw = 0; bnwrow = 0;
            break;
    }

    /*현재 열보다 숫자가 더 크면 하나씩 줄이기*/
    if (s1row > rownum) s1row--;
    if (s2row > rownum) s2row--;
    if (set1row > rownum) set1row--;
    if (set2row > rownum) set2row--;
    if (set3row > rownum) set3row--;

    /*현재 열보다 숫자가 더 크면 하나씩 줄이기*/
    if (arow > rownum) arow--;
    if (erow > rownum) erow--;
    if (ccrow > rownum) ccrow--;
    if (clrow > rownum) clrow--;
    if (cmrow > rownum) cmrow--;
    if (cfrow > rownum) cfrow--;
    if (carow > rownum) carow--;
    if (cerow > rownum) cerow--;
    if (cccrow > rownum) cccrow--;
    if (cclrow > rownum) cclrow--;
    if (ccmrow > rownum) ccmrow--;

    if (clatterow > rownum) clatterow--;
    if (mlrow > rownum) mlrow--;
    if (olrow > rownum) olrow--;
    if (cclatterow > rownum) cclatterow--;
    if (cmlrow > rownum) cmlrow--;
    if (colrow > rownum) colrow--;
    if (ssrow > rownum) ssrow--;
    if (bsrow > rownum) bsrow--;
    if (psrow > rownum) psrow--;

    if (mfrow > rownum) mfrow--;
    if (bfrow > rownum) bfrow--;
    if (pfrow > rownum) pfrow--;
    if (larow > rownum) larow--;
    if (gfarow > rownum) gfarow--;

    if (chamrow > rownum) chamrow--;
    if (glrow > rownum) glrow--;
    if (gfrow > rownum) gfrow--;
    if (pmrow > rownum) pmrow--;
    if (bmtrow > rownum) bmtrow--;
    if (egrow > rownum) egrow--;

    if (gcrow > rownum) gcrow--;
    if (spcrow > rownum) spcrow--;
    if (wmrow > rownum) wmrow--;
    if (wscrow > rownum) wscrow--;
    if (snwrow > rownum) snwrow--;
    if (bnwrow > rownum) bnwrow--;

    var blank = document.querySelector(".blank");
    if (blank !== undefined && blank !== null && row === 5) {/*row가 5일경우 blank삭제*/
        selectmenu.removeChild(blank);
        noww = 5
    }

    row--;//전체 열 하나 줄이기
    selectmenu.removeChild(nowclass);
    totalprint();

    selectlist = objectlist.map(obj => {
        return obj.node === num ? { ...obj, count: obj.count = 0, obj, row: obj.row = 0 } : obj
    });

    selectlist.sort(sortByRow);
    localStorage.setItem("Menu", JSON.stringify(selectlist));

    /*cancleBubble을 이용해 이벤트 버블링 방지*/
    if (window.event) {
        window.event.cancelBubble = true;
    } else {
        event.stopPropagation();
    }

}

function totalprint() {//전체출력
    //출력
    printGolgoreng();
    printmtl();
    printcd();
    print2Coffee();
    print2Set();

    //출력
    // window.onload = function () {

    printAmericano();
    printColdAmericano();
    printEspresso();
    printColdEspresso();
    printCappuccino();
    printColdCappuccino();
    printCafeLatte();
    printColdCafeLatte();
    printCafeMocha();
    printColdCafeMocha();
    printCF();
    //};
    printChocolatte();
    printMatchalatte();
    printOceanlatte();
    printColdChocolatte();
    printColdMatchalatte();
    printColdOceanlatte();
    printStrawberrySmoothie();
    printBlueberrySmoothie();
    printPeachSmoothie();

    printMangoFrappe();
    printBlueberryFrappe();
    printPeachFrappe();
    printLemonAde();
    printGraoeFruitAde();

    printChamomile();
    printGingerLemon();
    printGrapeFruit();
    printPepperMint();
    printBlackMilkTea();
    printEarlGray();

    printGorengCookie();
    printSeaPearlChocolate();
    printWhaleMacaron();
    printWhaleSculptureCake();
    printStrawberrywhippedcreamNutellaWaffle();
    printBananaNutellaWaffle();

    savemenu();
    makePrice();
    totalnum();
}

function makePrice() {//가격 정하기
    console.log("에렐렐레레");
    price2 = 5500 * Number(s1) + 6000 * Number(s2) + 13500 * Number(set1) + 10500 * Number(set2) + 16500 * Number(set3)
        + 3000 * Number(a) + 3500 * Number(ca) + 1500 * Number(e) + 2000 * Number(ce) + 4500 * Number(cc) + 5000 * Number(ccc)
        + 4500 * Number(cl) + 5000 * Number(ccl) + 5000 * Number(cm) + 5500 * Number(ccm) + 6000 * Number(cf)
        + 5000 * Number(clatte) + 5000 * Number(ml) + 5000 * Number(ol) + 5000 * Number(ss) + 5000 * Number(bs) + 5000 * Number(ps)
        + 5500 * Number(cclatte) + 5500 * Number(cml) + 5500 * (col)
        + 5000 * Number(mf) + 5000 * Number(bf) + 5000 * Number(pf) + 5000 * Number(la) + 5000 * Number(gfa)
        + 4000 * Number(cham) + 4500 * Number(gl) + 5000 * Number(gf)
        + 4000 * Number(pm) + 4500 * Number(bmt) + 4000 * Number(eg)
        + 4000 * Number(gc) + 1000 * Number(spc) + 3000 * Number(wm)
        + 4500 * Number(wsc) + 4500 * Number(snw) + 4500 * Number(bnw);
    price.innerHTML = `${price2}원`;
    localStorage.setItem("price", price2);
}

var noww = 5;
function blank(neww) {
    var blank = document.querySelector(".blank");
    if (blank !== undefined && blank !== null) {
        selectmenu.removeChild(blank);
    }
    var text = document.createElement("div");
    text.innerHTML = `<br>`
    text.setAttribute("class", "blank");
    selectmenu.appendChild(text);
}

var tn = document.querySelector(".totalnum");
tn.style.top = '180px';
function totalnum() {
    n = s1 + s2 + set1 + set2 + set3
        + a + ca + e + ce + cc + ccc + cl + ccl + cm + ccm + cf
        + clatte + cclatte + ml + cml + ol + col + ss + bs + ps
        + mf + bf + pf + la + gfa
        + cham + gl + gf + pm + bmt + eg
        + gc + spc + wm + wsc + snw + bnw;

    localStorage.setItem("totalnum", n);
    tn.innerHTML = `<br>총개수 <b>${n}</b>개`;
    // 총개수가 5의 배수일 때, totalnum을 마지막 요소의 아래로 이동
    var blank = document.querySelector(".blank");
    if (blank !== undefined && blank !== null) {
        var blankElements = document.querySelectorAll(".blank");
        var lastBlank = blankElements[blankElements.length - 1];
        if(Number(lastBlank.offsetTop + lastBlank.offsetHeight) > 180)
            tn.style.top = lastBlank.offsetTop + lastBlank.offsetHeight + 'px'; // 10은 여백
        localStorage.setItem("totalnumheight", lastBlank.offsetTop + lastBlank.offsetHeight + 'px');
    }
    else
        tn.style.top = '180px';

}


function totalcancel() {//전체 취소 버튼을 누른 경우

    for (let i = 0; i < menuclassname.length; i++) {
        classremove(menuclassname[i]);
    }

    function classremove(classname) {
        var classs = document.querySelector(`.${classname}`);
        if (classs !== null && classs !== undefined)
            selectmenu.removeChild(classs);
    }

    a = 0, e = 0, cc = 0, cl = 0, cm = 0, cf = 0;//각 개수
    ca = 0, ce = 0, ccc = 0, ccl = 0, ccm = 0; //cold 아메리카노(H), 에스프레소(H) etc 
    n = 0, row = 0; //총개수, 행개수
    arow = 0, erow = 0, ccrow = 0, clrow = 0, cmrow = 0, cfrow = 0; //각 열번호
    carow = 0, cerow = 0, cccrow = 0, cclrow = 0, ccmrow = 0;
    //전체 초기화
    s1 = 0, s2 = 0, set1 = 0, set2 = 0, set3 = 0;
    s1row = 0, s2row = 0, set1row = 0, set2row = 0, set3row = 0;//초기화

    clatte = 0, ml = 0, ol = 0, ss = 0, bs = 0, ps = 0;//각 개수
    cclatte = 0, cml = 0, col = 0;//chocolatte iclatte, 각 iclatte 개수
    clatterow = 0, mlrow = 0, olrow = 0, ssrow = 0, bsrow = 0, psrow = 0; //각 열번호
    cclatterow = 0, cmlrow = 0, colrow = 0;

    mf = 0, bf = 0, pf = 0, la = 0, gfa = 0;//각 개수
    mfrow = 0, bfrow = 0, pfrow = 0, larow = 0, gfarow = 0; //각 열번호

    cham = 0, gl = 0, gf = 0, pm = 0, bmt = 0, eg = 0;//각 개수
    chamrow = 0, glrow = 0, gfrow = 0, pmrow = 0, bmtrow = 0, egrow = 0; //각 열번호

    gc = 0, spc = 0, wm = 0, wsc = 0, snw = 0, bnw = 0;//각 개수
    gcrow = 0, spcrow = 0, wmrow = 0, wscrow = 0, snwrow = 0, bnwrow = 0; //각 열번호

    selectlist = objectlist.map(obj => {
        return { ...obj, count: obj.count = 0, row: obj.row = 0 }
    });
    selectlist.sort(sortByRow);
    localStorage.setItem("Menu", JSON.stringify(selectlist));
    localStorage.setItem("totalnum", "180px");

    makePrice();
    totalnum();
}

function savemenu() {
    var selectmenu2 = document.querySelector(".selectmenu");
    var children = selectmenu2.childNodes;
    //var child = Array.from(children)
    var node, count, rrow;
    // console.log(selectlist);
    for (var i = 0; i < children.length; i++) {
        // console.log(children[i].className)
        switch (children[i].className) {
            case "Golgoreng":
                node = "s1";
                count = s1;
                rrow = s1row;
                break;
            case "mtl":
                node = "s2";
                count = s2;
                rrow = s2row;
                break;
            case "CoffeeDessert":
                node = "set1";
                count = set1;
                rrow = set1row;
                break;
            case "Coffee2":
                node = "set2";
                count = set2;
                rrow = set2row;
                break;
            case "Set2":
                node = "set3";
                count = set3;
                rrow = set3row;
                break;
            case "Americano":
                node = "a";
                count = a;
                rrow = arow;
                break;
            case "AmericanoI":
                node = "ca";
                count = ca;
                rrow = carow;
                break;
            case "Espresso":
                node = "e";
                count = e;
                rrow = erow;
                break;
            case "EspressoI":
                node = "ce";
                count = ce;
                rrow = cerow;
                break;
            case "Cappuccino":
                node = "cc";
                count = cc;
                rrow = ccrow;
                break;
            case "CappuccinoI":
                node = "ccc";
                count = ccc;
                rrow = cccrow;
                break;
            case "CafeLatte":
                node = "cl";
                count = cl;
                rrow = clrow;
                break;
            case "CafeLatteI":
                node = "ccl";
                count = ccl;
                rrow = cclrow;
                break;
            case "CafeMocha":
                node = "cm";
                count = cm;
                rrow = cmrow;
                break;
            case "CafeMochaI":
                node = "ccm";
                count = ccm;
                rrow = ccmrow;
                break;
            case "CF":
                node = "cf";
                count = cf;
                rrow = cfrow;
                break;
            case "Chocolatte":
                node = "clatte";
                count = clatte;
                rrow = clatterow;
                break;
            case "Matchalatte":
                node = "ml";
                count = ml;
                rrow = mlrow;
                break;
            case "Oceanlatte":
                node = "ol";
                count = ol;
                rrow = olrow;
                break;
            case "ChocolatteI":
                node = "cclatte";
                count = cclatte;
                rrow = cclatterow;
                break;
            case "MatchalatteI":
                node = "cml";
                count = cml;
                rrow = cmlrow;
                break;
            case "OceanlatteI":
                node = "col";
                count = col;
                rrow = colrow;
                break;
            case "StrawberrySmoothie":
                node = "ss";
                count = ss;
                rrow = ssrow;
                break;
            case "BlueberrySmoothie":
                node = "bs";
                count = bs;
                rrow = bsrow;
                break;
            case "PeachSmoothie":
                node = "ps";
                count = ps;
                rrow = psrow;
                break;
            case "MangoFrappe":
                node = "mf";
                count = mf;
                rrow = mfrow;
                break;
            case "BlueberryFrappe":
                node = "bf";
                count = bf;
                rrow = bfrow;
                break;
            case "PeachFrappe":
                node = "pf";
                count = pf;
                rrow = pfrow;
                break;
            case "LemonAde":
                node = "la";
                count = la;
                rrow = larow;
                break;
            case "GraoeFruitAde":
                node = "gfa";
                count = gfa;
                rrow = gfarow;
                break;
            case "Chamomile":
                node = "cham";
                count = cham;
                rrow = chamrow;
                break;
            case "GingerLemon":
                node = "gl";
                count = gl;
                rrow = glrow;
                break;
            case "GrapeFruit":
                node = "gf";
                count = gf;
                rrow = gfrow;
                break;
            case "PepperMint":
                node = "pm";
                count = pm;
                rrow = pmrow;
                break;
            case "BlackMilkTea":
                node = "bmt";
                count = bmt;
                rrow = bmtrow;
                break;
            case "EarlGray":
                node = "eg";
                count = eg;
                rrow = egrow;
                break;
            case "GorengCookie":
                node = "gc";
                count = gc;
                rrow = gcrow;
                break;
            case "SeaPearlChocolate":
                node = "spc";
                count = spc;
                rrow = spcrow;
                break;
            case "WhaleMacaron":
                node = "wm";
                count = wm;
                rrow = wmrow;
                break;
            case "WhaleSculptureCake":
                node = "wsc";
                count = wsc;
                rrow = wscrow;
                break;
            case "StrawberrywhippedcreamNutellaWaffle":
                node = "snw";
                count = snw;
                rrow = snwrow;
                break;
            case "BananaNutellaWaffle":
                node = "bnw";
                count = bnw;
                rrow = bnwrow;
                break;
        }
        selectlist = objectlist.map(obj => {
            return obj.node === node ? { ...obj, count: obj.count = count, row: obj.row = rrow } : obj
        });
    }
    selectlist.sort(sortByRow);
    localStorage.setItem("Menu", JSON.stringify(selectlist));


}

var s1boo = false, s2boo = false, set1boo = false, set2boo = false, set3boo = false;

var aboo = false, caboo = false, eboo = false, ceboo = false, ccboo = false, cccboo = false, clboo = false, cclboo = false, cmboo = false, ccmboo = false, cfboo = false;

var clatteboo = false, mlboo = false, olboo = false, ssboo = false, bsboo = false, psboo = false,
    cclatteboo = false, cmlboo = false, colboo = false;

var mfboo = false, bfboo = false, pfboo = false, laboo = false, gfaboo = false;

var chamboo = false, glboo = false, gfboo = false, pmboo = false, bmtboo = false, egboo = false;

var gcboo = false, spcboo = false, wmboo = false, wscboo = false, snwboo = false, bnwboo = false;

const saveedMenu = localStorage.getItem("Menu");
const totalHeight = localStorage.getItem("totalnumheight");

if (saveedMenu != null) {
    const menus = JSON.parse(saveedMenu);
    selectlist = menus; //이게 비어있으면 새로운 값만 저장하므로 기존 값 저장
    selectlist.sort(sortByRow);
    for (const item of selectlist) {
        // console.log(item.node, item.count, item.row);
        if (row < item.row) row = item.row;
        switch (item.node) {
            case "s1":
                s1 = item.count;
                s1row = item.row;
                if (s1 != 0) s1boo = true;
                addLoadEvent(function () {
                    printGolgoreng();
                });
                break;
            case "s2":
                s2 = item.count;
                s2row = item.row;
                if (s2 != 0) s2boo = true;
                addLoadEvent(function () {
                    printmtl();
                });
                break;
            case "set1":
                set1 = item.count;
                set1row = item.row;
                if (set1 != 0) set1boo = true;
                addLoadEvent(function () {
                    printcd();
                });
                break;
            case "set2":
                set2 = item.count;
                set2row = item.row;
                if (set2 != 0) set2boo = true;
                addLoadEvent(function () {
                    print2Coffee();
                });
                break;
            case "set3":
                set3 = item.count;
                set3row = item.row;
                if (set3 != 0) set3boo = true;
                addLoadEvent(function () {
                    print2Set();
                });
                break;
            case "a":
                a = item.count;
                arow = item.row;
                if (a != 0) aboo = true;
                addLoadEvent(function () {
                    printAmericano();
                })
                break;
            case "ca":
                ca = item.count;
                carow = item.row;
                if (ca != 0) caboo = true;
                addLoadEvent(function () {
                    printColdAmericano();
                })
                break;
            case "e":
                e = item.count;
                erow = item.row;
                if (e != 0) eboo = true;
                addLoadEvent(function () {
                    printEspresso();
                })
                break;
            case "ce":
                ce = item.count;
                cerow = item.row;
                if (ce != 0) ceboo = true;
                addLoadEvent(function () {
                    printColdEspresso();
                })
                break;
            case "cc":
                cc = item.count;
                ccrow = item.row;
                if (cc != 0) ccboo = true;
                addLoadEvent(function () {
                    printCappuccino();
                });
                break;
            case "ccc":
                ccc = item.count;
                cccrow = item.row;
                if (ccc != 0) cccboo = true;
                addLoadEvent(function () {
                    printColdCappuccino();
                });
                break;
            case "cl":
                cl = item.count;
                clrow = item.row;
                if (cl != 0) {
                    clboo = true;
                }
                addLoadEvent(function () {
                    printCafeLatte();
                });
                break;
            case "ccl":
                ccl = item.count;
                cclrow = item.row;
                if (ccl != 0) cclboo = true;
                addLoadEvent(function () {
                    printColdCafeLatte();
                });
                break;
            case "cm":
                cm = item.count;
                cmrow = item.row;
                if (cm != 0) cmboo = true;
                addLoadEvent(function () {
                    printCafeMocha();
                });
                break;
            case "ccm":
                ccm = item.count;
                ccmrow = item.row;
                if (ccm != 0) ccmboo = true;
                addLoadEvent(function () {
                    printColdCafeMocha()
                });
                break;
            case "cf":
                cf = item.count;
                cfrow = item.row;
                if (cf != 0) cfboo = true;
                addLoadEvent(function () {
                    printCF()
                });
                break;
            case "clatte":
                clatte = item.count;
                clatterow = item.row;
                if (clatte != 0) clatteboo = true;
                addLoadEvent(function () {
                    printChocolatte();
                });
                break;
            case "ml":
                ml = item.count;
                mlrow = item.row;
                if (ml != 0) mlboo = true;
                addLoadEvent(function () {
                    printMatchalatte();
                });
                break;
            case "ol":
                ol = item.count;
                olrow = item.row;
                if (ol != 0) olboo = true;
                addLoadEvent(function () {
                    printOceanlatte();
                });
                break;
            case "cclatte":
                cclatte = item.count;
                cclatterow = item.row;
                if (cclatte != 0) cclatteboo = true;
                addLoadEvent(function () {
                    printColdChocolatte();
                });
                break;
            case "cml":
                cml = item.count;
                cmlrow = item.row;
                if (cml != 0) cmlboo = true;
                addLoadEvent(function () {
                    printColdMatchalatte();
                });
                break;
            case "col":
                col = item.count;
                colrow = item.row;
                if (col != 0) colboo = true;
                addLoadEvent(function () {
                    printColdOceanlatte();
                });
                break;
            case "ss":
                ss = item.count;
                ssrow = item.row;
                if (ss != 0) ssboo = true;
                addLoadEvent(function () {
                    printStrawberrySmoothie();
                });
                break;
            case "bs":
                bs = item.count;
                bsrow = item.row;
                if (bs != 0) bsboo = true;
                addLoadEvent(function () {
                    printBlueberrySmoothie();
                });
                break;
            case "ps":
                ps = item.count;
                psrow = item.row;
                if (ps != 0) psboo = true;
                addLoadEvent(function () {
                    printPeachSmoothie();
                });
                break;
            case "mf":
                mf = item.count;
                mfrow = item.row;
                if (mf != 0) mfboo = true;
                addLoadEvent(function () {
                    printMangoFrappe();
                });
                break;
            case "bf":
                bf = item.count;
                bfrow = item.row;
                if (bf != 0) bfboo = true;
                addLoadEvent(function () {
                    printBlueberryFrappe();
                });
                break;
            case "pf":
                pf = item.count;
                pfrow = item.row;
                if (pf != 0) pfboo = true;
                addLoadEvent(function () {
                    printPeachFrappe();
                });
                break;
            case "la":
                la = item.count;
                larow = item.row;
                if (la != 0) laboo = true;
                addLoadEvent(function () {
                    printLemonAde();
                });
                break;
            case "gfa":
                gfa = item.count;
                gfarow = item.row;
                if (gfa != 0) gfaboo = true;
                addLoadEvent(function () {
                    printGraoeFruitAde();
                });
                break;
            case "cham":
                cham = item.count;
                chamrow = item.row;
                if (cham != 0) chamboo = true;
                addLoadEvent(function () {
                    printChamomile();
                });
                break;
            case "gl":
                gl = item.count;
                glrow = item.row;
                if (gl != 0) glboo = true;
                addLoadEvent(function () {
                    printGingerLemon();
                });
                break;
            case "gf":
                gf = item.count;
                gfrow = item.row;
                if (gf != 0) gfboo = true;
                addLoadEvent(function () {
                    printGrapeFruit();
                });
                break;
            case "pm":
                pm = item.count;
                pmrow = item.row;
                if (pm != 0) pmboo = true;
                addLoadEvent(function () {
                    printPepperMint();
                });
                break;
            case "bmt":
                bmt = item.count;
                bmtrow = item.row;
                if (bmt != 0) bmtboo = true;
                addLoadEvent(function () {
                    printBlackMilkTea();
                });
                break;
            case "eg":
                eg = item.count;
                egrow = item.row;
                if (eg != 0) egboo = true;
                addLoadEvent(function () {
                    printEarlGray();
                });
                break;
            case "gc":
                gc = item.count;
                gcrow = item.row;
                if (gc != 0) gcboo = true;
                addLoadEvent(function () {
                    printGorengCookie();
                });
                break;
            case "spc":
                spc = item.count;
                spcrow = item.row;
                if (spc != 0) spcboo = true;
                addLoadEvent(function () {
                    printSeaPearlChocolate();
                });
                break;
            case "wm":
                wm = item.count;
                wmrow = item.row;
                if (wm != 0) wmboo = true;
                addLoadEvent(function () {
                    printWhaleMacaron();
                });
                break;
            case "wsc":
                wsc = item.count;
                wscrow = item.row;
                if (wsc != 0) wscboo = true;
                addLoadEvent(function () {
                    printWhaleSculptureCake();
                });
                break;
            case "snw":
                snw = item.count;
                snwrow = item.row;
                if (snw != 0) snwboo = true;
                addLoadEvent(function () {
                    printStrawberrywhippedcreamNutellaWaffle();
                });
                break;
            case "bnw":
                bnw = item.count;
                bnwrow = item.row;
                if (bnw != 0) bnwboo = true;
                addLoadEvent(function () {
                    printBananaNutellaWaffle();
                });
                break;
        }
    }
    if (row >= 5) blank(row);
    makePrice();
    if (totalHeight !== undefined && totalHeight !== null) {
        // var tn = document.querySelector(".totalnum");
        n = s1 + s2 + set1 + set2 + set3
            + a + ca + e + ce + cc + ccc + cl + ccl + cm + ccm + cf
            + clatte + cclatte + ml + cml + ol + col + ss + bs + ps
            + mf + bf + pf + la + gfa
            + cham + gl + gf + pm + bmt + eg
            + gc + spc + wm + wsc + snw + bnw;
        localStorage.setItem("totalnum", n);
        tn.innerHTML = `<br>총개수 <b>${n}</b>개`;
        if (row < 5) totalnum();
        else
            tn.style.top = totalHeight;
    }

}

function payclick(){
    let money = localStorage.getItem("price");
    if(money !== "0")
        window.location.href = "../html/결제화면.html";
    else
        alert("현재 선택된 메뉴가 없습니다. 메뉴를 선택해주세요.");
}
