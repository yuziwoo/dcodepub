window.addEventListener("DOMContentLoaded", () => {
    if (document.body.offsetWidth < 1360) {
      document.body.classList.add("ver_mob");
    } else {
      document.body.classList.add("ver_pc");
    }
  
    let scroll_effect = document.getElementsByClassName("scroll_effect");
    for (let i=0; i < scroll_effect.length; i++) {
      scroll_effect[i].classList.add("scroll_effect_off");
    }
  
    let scroll_function = (x, y, w, h) => {
      try {
        if (document.getElementsByClassName("scroll_effect_off")) {
          for (let i=0; i < document.getElementsByClassName("scroll_effect_off").length; i++) {
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
  
    window.itsdcode_onscroll = (x, y, w, h) => {
      scroll_function(x, y, w, h);
    }
  })

  window.addEventListener("resize", () => {
    _dcode_resize();
  })
  
  