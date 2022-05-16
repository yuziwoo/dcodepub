let scroll_height_box = document.createElement("div");
let scroll_height = 0;

scroll_height_box.classList.add("scroll_height");
document.body.appendChild(scroll_height_box);

scroll_height = parent.innerHeight;

window.addEventListener("resize", () => {
    scroll_height = scroll_height_box.offsetHeight;
})

let scroll_effect = document.getElementsByClassName("scroll_effect");

let scroll_function = () => {
    for (let i=0; i<scroll_effect.length; i++) {
        if (scroll_effect[i].offsetTop < scroll_height / 5 * 4 + parent.scrollY) {
            scroll_effect[i].classList.add("scroll_effect_on");
        }

        
    }
}

scroll_function();

window.addEventListener("scroll", (e) => {
    scroll_function();
    console.log(scroll_height,  parent.scrollY, scroll_effect[2].offsetTop)
})

