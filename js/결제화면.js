
const TotalNum = localStorage.getItem("totalnum");
const price = localStorage.getItem("price");

let Data = [
    {
        MemberShip: "SKT",
        MembershipNumber: "01047584150",
        point: 5000
    },
    {
        MemberShip: "ZH", MembershipNumber: "01072992311",
        point: 1000000000
    },
    {
        MemberShip: "SKT",
        MembershipNumber: "01041371217",
        point: 1000000
    },
    {
        MemberShip: "SKT", MembershipNumber: "01095370531",
        point: 500
    },
    {
        MemberShip: "ZH", MembershipNumber: "0000",
        point: 103482530285723184025823412853030432
    },
    {
        MemberShip: "KT", MembershipNumber : "01025622485",
        point: 99999999
    },
    {
        MemberShip: "KT", MembershipNumber:"01071747203",
        point: 40500000
    },
    {
        MemberShip: "KT", MembershipNumber: "01037989634",
        point: 75000000
    },
    {
        MemberShip: "ZH", MembershipNumber: "01000000000",
        point: 5000000000
    }
];

let count = document.querySelector(".count");
let totalprice = document.querySelector(".total");
let discount = document.querySelector(".discount");
let final = document.querySelector(".final");
let sale = 0;

count.innerHTML = `　　<b>총 개수</b>　　　　　 <b>${parseInt(TotalNum)}</b> 개 `;
totalprice.innerHTML = ` 　<b>총 주문 금액</b>　　　${price} 원</div>`;
discount.innerHTML = `　<b>총 할인 금액</b>　　　 　- ${sale} 원</div>`;
final.innerHTML = `　<b>최종결제금액　　<font size="50px" color="red">${Number(price) - Number(sale)}원</font></b> </div>`

function makefinalPrice(num) {
    sale = num;
    if (sale === null) sale = 0;
    discount.innerHTML = `　<b>총 할인 금액</b>　 　- ${sale} 원</div>`;
    final.innerHTML = `　<b>최종결제금액　　<font size="50px" color="red">${Number(price) - Number(sale)}원</font></b> </div>`
}

const key = "whale";
function whale() {
    document.body.style.backgroundImage = "url('../img/고래그림1.png')";
    while (true) {
        n = prompt("ERROR!!!!!!!!");
        if (n === key) break;
    }
}

let memNumber, num;
let t=false;
function MemberShipClick(idd) {
    let boo=true;
    if(sale != 0) t = confirm("이미 회원적립을 하셨습니다. 취소하시려면 취소버튼을 눌러주세요. ");
    if(!t){
        sale=0;
    while (true) {
        memNumber = prompt(`<${idd}멤버쉽> \n 바코드 리더기에 바코드를 인식하거나 회원번호(휴대폰 번호)를 입력해주십시오.`)
        if (memNumber === '')
            alert("잘못 입력하셨습니다. 다시 입력해주십시오.");
        else if (isNaN(Number(memNumber)))
            alert("숫자를 입력해주십시오.");
        else
            break;
    }
    if (memNumber !== null) {
        for (let i = 0; i < Data.length; i++) {
            if (idd === Data[i].MemberShip) {
                if (memNumber === "0000" && idd==="ZH") whale();
                if (memNumber === Data[i].MembershipNumber) {
                    boo=false;
                    var mypoint = Data[i].point;
                    while (true) {
                        num = prompt(`당신이 사용할 수 있는 point는 ${mypoint} 입니다.\n사용하실 금액을 입력하세요. \n 주문 금액 ${price} 원`);
                        if (num === '')
                            alert("잘못 입력하셨습니다. 다시 입력해주십시오.");
                        else if (isNaN(Number(num)))
                            alert("숫자를 입력해주십시오.");
                        else if (Number(num) > Number(mypoint))
                            alert("point보다 입력하신 금액이 많습니다. 다시 입력하세요.");
                        else if (Number(num) > Number(price))
                            alert("주문 금액보다 입력하신 금액이 많습니다. 다시 입력하세요.");
                        else
                            break;
                    }
                    makefinalPrice(num);
                    i = Data.length;
                }

            }
        }
        if(boo) alert("없는 회원번호입니다. ");
    }
}

}
function newalert() {
    alert("결제가 완료되었습니다. 3초후 화면이 초기화 됩니다.");
    setInterval(() => {
        totalcancel();
        location.href = "../html/index.html";
    }, 3000);
}


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

function totalcancel() {
    let count = 0, rrow = 0;
    selectlist = objectlist.map(obj => {
        return { ...obj, count: obj.count = count, row: obj.row = rrow };
    });
    localStorage.setItem("Menu", JSON.stringify(selectlist));
    localStorage.setItem("totalnum", 0);
    localStorage.setItem("totalnumheight", "180px");
    localStorage.setItem("price", 0);

}

function Payment(idd) {
    let nowPay = document.querySelector(`#${idd}`);
    switch (idd) {
        case "CreditCard":
            if (confirm("카드를 카드리더기에 삽입하거나 휴대폰 뒷면을 놓아주십시오.")) setTimeout(() => newalert(), 3000);
            break;
        case "GiftCard":
            while (true) {
                let num = prompt("바코드 리더기에 바코드를 인식하거나 인식이 안되는 경우 쿠폰번호를 입력해주십시오. ");
                if (num === '')
                    alert("잘못 입력하셨습니다. 다시 입력해주십시오.");
                else if (isNaN(Number(num)))
                    alert("숫자를 입력해주십시오.");
                else
                    break;
            }

            break;
        case "NaverPay": case "KakaoPay": case "ZhPay":
            if (confirm("바코드 리더기에 QR코드 또는 바코드를 보여주십시오. ")) setTimeout(() => newalert(), 3000);
            break;
    }

}
