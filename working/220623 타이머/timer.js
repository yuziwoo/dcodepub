// 태그 변수에 할당
let raffle = document.getElementsByClassName("raffle")[0];
let timer = document.getElementsByClassName("timer");

// 변수 선언
let now = new Date().getTime(); // 현재 시간
let date_list = []; // 타이머 작동할 시간들 리스트
let date_target = [0, 0]; // 타이머 작동할 목적 시간
let date_result = {
    value: 0,
    day: 0,
    hour: 0,
    min: 0,
    sec: 0
} // 목적 시간 - 현재 시간
let date_text = ["00", "00", "00", "00"];
let date_text_new = ["xx", "xx", "xx", "xx"];

let moving = false;


// 시간 할당
for (let i=0; i<10; i++) {
    date_list[i] = new Date();
    date_list[i].setFullYear(2022);
    date_list[i].setMonth(6);
    date_list[i].setHours(11);
    date_list[i].setMinutes(0);
    date_list[i].setSeconds(0);
}

date_list[0].setDate(1);
date_list[1].setDate(5);
date_list[2].setDate(8);
date_list[3].setDate(12);
date_list[4].setDate(15);
date_list[5].setDate(19);
date_list[6].setDate(22);
date_list[7].setDate(26);
date_list[8].setDate(29);
date_list[9].setDate(31);
date_list[9].setHours(23);
date_list[9].setMinutes(59);
date_list[9].setSeconds(59);

for (let i=0; i<10; i++) {
    date_list[i] = date_list[i].getTime();
}

if (now < date_list[0]) {
    // 오픈 전
    date_target[0] = 0;
    date_target[1] = date_list[0];
} else if (now < date_list[1]) {
    // 1회 오픈 ~ 마감까지
    date_target[0] = 1;
    date_target[1] = date_list[1];
} else if (now < date_list[2]) {
    date_target[0] = 2;
    date_target[1] = date_list[2];
} else if (now < date_list[3]) {
    date_target[0] = 3;
    date_target[1] = date_list[3];
} else if (now < date_list[4]) {
    date_target[0] = 4;
    date_target[1] = date_list[4];
} else if (now < date_list[5]) {
    date_target[0] = 5;
    date_target[1] = date_list[5];
} else if (now < date_list[6]) {
    date_target[0] = 6;
    date_target[1] = date_list[6];
} else if (now < date_list[7]) {
    date_target[0] = 7;
    date_target[1] = date_list[7];
} else if (now < date_list[8]) {
    date_target[0] = 8;
    date_target[1] = date_list[8];
} else if (now < date_list[9]) {
    // 9회 오픈 ~ 마감까지
    date_target[0] = 9;
    date_target[1] = date_list[9];
} else {
    // 이벤트 마감
    date_target[0] = 10;
    date_target[1] = now;
}

// CSS 적용을 위해 클래스 부여
raffle.classList.add(`event${date_target[0]}`);

// 애니메이션 반복을 위한 클래스 초기화
for (let i=0; i<timer.length; i++) {
    timer[i].addEventListener("aniamtionend", () => {
        timer[i].classList.remove("animation");
    })
}

timer[0].addEventListener("animationend", () => {
    timer[0].classList.remove("animation");
    timer[2].classList.remove("animation");
})

timer[4].addEventListener("animationend", () => {
    timer[4].classList.remove("animation");  
    timer[6].classList.remove("animation");    
})

timer[8].addEventListener("animationend", () => {
    timer[8].classList.remove("animation");
    timer[10].classList.remove("animation");
})

timer[12].addEventListener("animationend", () => {
    timer[12].classList.remove("animation");  
    timer[14].classList.remove("animation");    
})

timer[16].addEventListener("animationend", () => {
    timer[16].classList.remove("animation");
    timer[18].classList.remove("animation");
})

timer[20].addEventListener("animationend", () => {
    timer[20].classList.remove("animation");  
    timer[22].classList.remove("animation");    
})

timer[24].addEventListener("animationend", () => {
    timer[24].classList.remove("animation");
    timer[26].classList.remove("animation");
})

timer[28].addEventListener("animationend", () => {
    timer[28].classList.remove("animation");
    timer[30].classList.remove("animation");
    moving = false;
})




// 남은 시간을 반환하는 반복 함수 생성
let counter = setInterval(() => {
    let realNow = new Date().getTime();
    let count = 0;

    if (realNow - now > 1000 || count < 1 && !moving) {
        moving = true;
        now = new Date().getTime();
        date_result.value = date_target[1] - now;
    
        date_result.sec = Math.floor(date_result.value / 1000);
        date_result.min = Math.floor(date_result.sec / 60);
        date_result.hour = Math.floor(date_result.min / 60);
        date_result.day = Math.floor(date_result.hour / 24);

        date_result.day < 10 ? date_text[0] = `0${date_result.day}` : date_text[0] = String(date_result.day);
        date_result.hour % 24 < 10 ? date_text[1] = `0${date_result.hour % 24}` : date_text[1] = String(date_result.hour % 24);
        date_result.min % 60 < 10 ? date_text[2] = `0${date_result.min % 60}` : date_text[2] = String(date_result.min % 60);
        date_result.sec % 60 < 10 ? date_text[3] = `0${date_result.sec % 60}` : date_text[3] = String(date_result.sec % 60);

        if (date_text[0].charAt(0) != date_text_new[0].charAt(0)) {
            timer[1].innerText = date_text[0].charAt(0);
            timer[2].innerText = date_text[0].charAt(0);
            timer[0].classList.add("animation");
            timer[2].classList.add("animation");
            setTimeout(() => {
                timer[0].innerText = date_text[0].charAt(0);
                timer[3].innerText = date_text[0].charAt(0);
            },850);
        }

        if (date_text[0].charAt(1) != date_text_new[0].charAt(1)) {
            timer[5].innerText = date_text[0].charAt(1);
            timer[6].innerText = date_text[0].charAt(1);
            timer[4].classList.add("animation");
            timer[6].classList.add("animation");
            setTimeout(() => {
                timer[4].innerText = date_text[0].charAt(1);
                timer[7].innerText = date_text[0].charAt(1);
                date_text_new[0] = date_text[0];
            },850);
        }

        if (date_text[1].charAt(0) != date_text_new[1].charAt(0)) {
            timer[9].innerText = date_text[1].charAt(0);
            timer[10].innerText = date_text[1].charAt(0);
            timer[8].classList.add("animation");
            timer[10].classList.add("animation");
            setTimeout(() => {
                timer[8].innerText = date_text[1].charAt(0);
                timer[11].innerText = date_text[1].charAt(0);
            },850);
        }

        if (date_text[1].charAt(1) != date_text_new[1].charAt(1)) {
            timer[13].innerText = date_text[1].charAt(1);
            timer[14].innerText = date_text[1].charAt(1);
            timer[12].classList.add("animation");
            timer[14].classList.add("animation");
            setTimeout(() => {
                timer[12].innerText = date_text[1].charAt(1);
                timer[15].innerText = date_text[1].charAt(1);
                date_text_new[1] = date_text[1];
            },850);
        }

        if (date_text[2].charAt(0) != date_text_new[2].charAt(0)) {
            timer[17].innerText = date_text[2].charAt(0);
            timer[18].innerText = date_text[2].charAt(0);
            timer[16].classList.add("animation");
            timer[18].classList.add("animation");
            setTimeout(() => {
                timer[16].innerText = date_text[2].charAt(0);
                timer[19].innerText = date_text[2].charAt(0);
            },850);
        }

        if (date_text[2].charAt(1) != date_text_new[2].charAt(1)) {
            timer[21].innerText = date_text[2].charAt(1);
            timer[22].innerText = date_text[2].charAt(1);
            timer[20].classList.add("animation");
            timer[22].classList.add("animation");
            setTimeout(() => {
                timer[20].innerText = date_text[2].charAt(1);
                timer[23].innerText = date_text[2].charAt(1);
                date_text_new[2] = date_text[2];
            },850);
        }

        if (date_text[3].charAt(0) != date_text_new[3].charAt(0)) {
            timer[25].innerText = date_text[3].charAt(0);
            timer[26].innerText = date_text[3].charAt(0);
            timer[24].classList.add("animation");
            timer[26].classList.add("animation");
            setTimeout(() => {
                timer[24].innerText = date_text[3].charAt(0);
                timer[27].innerText = date_text[3].charAt(0);
            },850);
        }

        if (date_text[3].charAt(1) !== date_text_new[3].charAt(1)) {
            timer[29].innerText = date_text[3].charAt(1);
            timer[30].innerText = date_text[3].charAt(1);
            timer[28].classList.add("animation");
            timer[30].classList.add("animation");
            setTimeout(() => {
                timer[28].innerText = date_text[3].charAt(1);
                timer[31].innerText = date_text[3].charAt(1);
                date_text_new[3] = date_text[3];
            },850);
        }

        if (date_result.value < 0) {
            date_result.value = 0;
            for (let j=0; j<timer.length; j++) {
                timer[j].innerText = 0;
            }
            clearInterval(counter);
        }
    }
},200);