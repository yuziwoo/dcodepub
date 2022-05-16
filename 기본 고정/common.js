window.addEventListener("resize", () => {
  // Resize Error Solution
  _dcode_resize();
})

window.addEventListener("DOMContentLoaded", () => {
  // pc로 켜진 html은 1360px 아래로 떨어지지 않는다.
  if (document.body.offsetWidth < 1360) {
    document.body.classList.add("ver_mob");
  } else {
    document.body.classList.add("ver_pc");
  }
})