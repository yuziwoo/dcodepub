let button = document.getElementsByClassName("roulette_btn")[0];
let circle = document.getElementsByClassName("circle")[0];

button.addEventListener("click", (e) => {
    // roulette 스크립트를 실행한 결과 받아오기
    itsdcode_script_handleEvent("roulette")
    .then(result => {
        let value = 0;

        if(!result.success /*&& result.prize == 0 이부분 여쭤보기*/) {
            value = 100;
        } else if (result.prize == 1) {
            value = 7;
        } else if (result.prize == 2) {
            value = 10;
        } else if (result.prize == 3) {
            value = 15;
        } else if (result.prize == 4) {
            value = 20;
        } else if (result.prize == 5) {
            value = 50;
        } else if (result.prize == 6) {
            value = 99;
        }

        if (value == 7){
            circle.style.transform= "rotate(1545deg)"
            setTimeout(()=>{
                _dcode_alert(`축하합니다! 7% 할인 쿠폰에 당첨되었습니다 :)
50,000원 이상 구매 시 최대 20,000원 할인`)
            }, 3000);
        } else if (value == 10){
            circle.style.transform= "rotate(1605deg)"
            setTimeout(()=>{
                _dcode_alert(`축하합니다! 10% 할인 쿠폰에 당첨되었습니다 :)
50,000원 이상 구매 시 최대 20,000원 할인`)
            }, 3000);
        } else if (value == 15){
            circle.style.transform= "rotate(1665deg)"
            setTimeout(()=>{
                _dcode_alert(`축하합니다! 15% 할인 쿠폰에 당첨되었습니다 :)
50,000원 이상 구매 시 최대 30,000원 할인`)
            }, 3000);
        } else if (value == 20){
            circle.style.transform= "rotate(1725deg)"
            setTimeout(()=>{
                _dcode_alert(`축하합니다! 20% 할인 쿠폰에 당첨되었습니다 :)
50,000원 이상 구매 시 최대 100,000원 할인`)
            }, 3000);
        } else if (value == 50){
            circle.style.transform= "rotate(1785deg)"
            setTimeout(()=>{
                _dcode_alert(`축하합니다! 50% 할인 쿠폰에 당첨되었습니다 :)
50,000원 이상 구매 시 최대 200,000원 할인`)
            }, 3000);
        } else if (value == 99){
            circle.style.transform= "rotate(1845deg)"
            setTimeout(()=>{
                _dcode_alert(`축하합니다! 99% 할인 쿠폰에 당첨되었습니다 :)
50,000원 이상 구매 시 최대 500,000원 할인`)
            }, 3000);
        } else if (value == 100){
            _dcode_alert(`이미 응모에 참여하셨습니다.`)
        }
    })
})


// select box

let select_box = document.getElementsByClassName("select_box");
let select_radio = document.getElementsByClassName("select_radio");
let select_button = document.getElementsByClassName("select_button")[0];

let select_value = 0;

for(let i=0; i<select_box.length; i++) {
    select_box[i].addEventListener("click", () => {
        try {
            select_box[0].classList.remove("selected");
            select_box[1].classList.remove("selected");
            select_box[2].classList.remove("selected");
            select_box[3].classList.remove("selected");
            select_box[4].classList.remove("selected");
            select_box[5].classList.remove("selected");
        } catch () {_dcode_alert("오류입니다. 페이지를 새로고침해보세요.")}

        select_box[i].classList.add("selected");
    })
}

select_button.addEventListener("click", () => {
    for(let i=0; i<select_radio.length; i++) {
        if (select_radio[i].checked) {
            itsdcode_script_handleEvent("prizeselect", {prize: i})
            .then(result => _dcode_alert(result.message))
        }
    }
})