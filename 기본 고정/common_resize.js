window.addEventListener("DOMContentLoaded", () => {
    if (document.body.offsetWidth < 1360) {
      document.body.classList.add("ver_mob");
    } else {
      document.body.classList.add("ver_pc");
    }
  
    window.itsdcode_onresize = (x, y, w, h) => {
      _dcode_resize();
      scroll_function(x, y, w, h);
    }
  })
  
  