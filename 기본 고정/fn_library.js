class Dcode_script_library {
    constructor() {
        // 스크롤 이벤트를 실행시킨적 있는가?
        this.scroll_isstart = false;
    }
    // 스크롤 이벤트를 실행시킨적 있는지에 따라 다르게 동작하는 메소드
    scroll(x, y, w, h) {
        if (!this.scroll_isstart) {
            async function scroll_starter() {
                let scroll_effect = document.getElementsByClassName("scroll_effect");
                for (let i=0; i < scroll_effect.length; i++) {
                    scroll_effect[i].classList.add("scroll_effect_off");
                }
                dsl.scroll_isstart = true;
            }
            scroll_starter().then(function(){
                dsl.scroll_fn(x, y, w, h);
            })
        } else {
            this.scroll_fn(x, y, w, h);
        }
    }
    // dsl.scroll()의 하위 메소드 : 실제 이벤트를 발생시키는 역할
    scroll_fn(x, y, w, h) {
        try {
            if (document.getElementsByClassName("scroll_effect_off")) {
                for (let i=0; i<document.getElementsByClassName("scroll_effect_off").length; i++) {
                    if (document.getElementsByClassName("scroll_effect_off")[i].getBoundingClientRect().top < h / 5 * 3 + y && !document.getElementsByClassName("scroll_effect_off")[i].classList.contains("scroll_effect_on")) {
                        document.getElementsByClassName("scroll_effect_off")[i].classList.add("scroll_effect_on");
                        document.getElementsByClassName("scroll_effect_off")[i].classList.remove("scroll_effect_off");
                    }
                }
            }
        } catch (exception) {
            for (let i=0; i < document.getElementsByClassName("scroll_effect_off").length; i++) {
                if (!document.getElementsByClassName("scroll_effect_off")[i].classList.contains("scroll_effect_on")) {
                    document.getElementsByClassName("scroll_effect_off")[i].classList.add("scroll_effect_on");
                    document.getElementsByClassName("scroll_effect_off")[i].classList.remove("scroll_effect_off");
                }
            }
        }
    }
    // _dcode_resize()가 아직 정의되지 않은채로 실행될 경우를 대비한 resize 메소드
    resize() {
        try {
            _dcode_resize();
        } catch (exception) {
            setTimeout(() => {
                dsl.resize()
            }, 1000);
        }
        
    }
    // 현재 x, y, w, h를 파악하고, 스크롤 이벤트를 실행시켜줍니다.
    set_position(env) {
        this.position = itsdcode_script_handleEvent("getCurrentScroll");
        try {
            this.position.w = env.w;
            this.position.h = env.h;
        } catch (exception) {
            this.position.w = 0;
            this.position.h = 0;
        }
        this.scroll(this.position.x, this.position.y, this.position.w, this.position.h);
    }
    // 스크롤 이벤트를 동작시키기위해 실제 컨텐츠에 넣을 메소드 *itsdcode_onscroll 과 itsdcode_onresize의 값을 정합니다.
    scroll_basic() {
        window.itsdcode_onscroll = (x, y, w, h) => {
            dsl.scroll(x, y, w, h);
        }
        window.itsdcode_onresize = (x, y, w, h) => {
            dsl.resize();
            dsl.scroll(x, y, w, h);
        }
    }
    // alert 기능입니다. title 값을 입력하면 더 다양한 설정을 할 수 있습니다.
    alert(message, title = " ", button, showCloseButton) {
        itsdcode_script_handleEvent("alert", {
            message: message,
            title: title,
            button: button,
            showCloseButton: showCloseButton
        })
    }
    // route를 탑재한 alert 기능입니다.
    alert2(message, button = "이동하기", target, title = " ", showCloseButton = true) {
        this.alert2_message = message;
        this.alert2_title = title;
        this.alert2_button = button;
        this.alert2_target = target;
        this.alert2_showCloseButton = showCloseButton;
        async function alert2_fn() {
            itsdcode_script_handleEvent("alert", {
                message: this.alert2_message,
                title: this.alert2_title,
                button: this.alert2_button,
                showCloseButton: this.alert2_showCloseButton,
            }).then (res => {
                if(res && res.confirm) dsl.route(this,alert2_target);
            }) 
        }
    }
    // confirm 기능입니다. return 값으로 true, false를 반환합니다.
    confirm(message, title, confirmButton, cancelButton) {
        this.confirm_return = itsdcode_script_handleEvent("confirm", {
            message: message,
            title: title,
            confirmButton: confirmButton,
            cancelButton: cancelButton
        })
        return this.confirm_return;
    }
    // 디코드 header의 높이값을 return하는 메소드입니다.
    header_height() {
        async function header_heights() {
            let header = await itsdcode_script_handleEvent("querySelector", {
                query: ".headerWrap"
            });
            let banner = await itsdcode_script_handleEvent("querySelector", {
                query: ".banner_swiper_wrap"
            });
            let header_height_result = header.offsetHeight;
            if (banner) {
                header_height_result = header.offsetHeight + banner.offsetHeight;
            }
            return header_height_result;
        }
        this.header_height_result = header_heights();
        return this.header_height_result;
    }
    // querySelector의 역할을 수행하여 리턴하는 메소드입니다.
    querySelector(query) {
        return itsdcode_script_handleEvent("querySelector", {
            query: query,
        });
    }
    querySelectorAll(query) {
        return itsdcode_script_handleEvent("querySelectorAll", {
            query: query,
        });
    }
    // 현재 top window의 스크롤 값을 리턴하는 메소드입니다.
    getCurrentScroll() {
        return itsdcode_script_handleEvent("getCurrentScroll");
    }
    // top window의 스크롤을 이동시키는 메소드입니다. 보통 y값만 넣으면 됩니다.
    scrollTo(y, behavior = "auto", x = 0) {
        itsdcode_script_handleEvent("scrollTo", {
            x: x,
            y: y,
            behavior: behavior
        })
    }
    // route 기능을 하는 메소드입니다.
    route(target, external = true) {
        itsdcode_script_handleEvent("route", {
            target: target,
            external: external
        })
    }
    // coupon
    coupon(num, message = "쿠폰이 발급되었습니다.") {
        this.coupon_num = num;
        this.coupon_message = message;
        async function coupon_fn() {
            itsdcode_script_handleEvent('downloadCoupon', { couponId: dsl.coupon_num})
            .then(({success, message}) => {
                if(!success) {
                    _dcode_alert(message);
                } else {
                    _dcode_alert(message || dsl.coupon_message)
                }
            })
        }
        coupon_fn();
    }
    // push 알림을 설정하는 방법을 알려주는 메소드입니다.
    push() {
        itsdcode_script_handleEvent("pushAlarmGuide")
    }
    // 응모하기 기능의 메소드입니다.
    apply(id, choiceNum = 1) {
        this.apply_id = id;
        this.apply_num = choiceNum;
        async function apply_fn() {
            itsdcode_script_handleEvent("joinlottery", { eventId: this.apply_id, choiceNum: this.apply_num })
                .then(({success, message}) => {
                    if(!success) {
                        _dcode_alert(message);
                    } else {
                        _dcode_alert("응모되었습니다.")
                    }
                })
        }
        apply_fn();
    }
    // 랜딩되는 응모하기
    apply2(id, choiceNum = 1, message, button_message, target) {
        this.apply2_id = id;
        this.apply2_num = choiceNum;
        this.apply2_message = message;
        this.apply2_button_message = button_message;
        this.apply2_target = target;
        async function apply2_fn() {
            itsdcode_script_handleEvent("joinlottery", { eventId: this.apply2_id, choiceNum: this.apply2_num })
                .then(({success, message}) => {
                    if(success) {
                        dsl.alert2(this.apply2_message, this.apply2_button_message, this.apply2_target);
                    } else {
                        dsl.alert2(message, this.apply2_button_message, this.apply2_target);
                    }
                })
        }
    }
    // 드롭다운 기능의 메소드입니다.
    dropdown(num = 0, element_list = "dropdown_list" ) {
        document.getElementsByClassName("dropdown_list")[num].classList.toggle("dropdown_on");
        dsl.resize();
    }
}

const dsl = new Dcode_script_library();