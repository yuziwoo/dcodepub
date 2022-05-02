
  window.addEventListener("DOMContentLoaded", (e) => {
    //
    let button = document.getElementsByClassName("btnbtn")[0];
    let anchor;

    let anchor_reset = () => {
      setTimeout(() => {

        if (document.getElementById("fp-nav")) {
          anchor = document.getElementById("fp-nav").children[0].children[1].children[0];
          button.addEventListener("click", (e) => {
            $(anchor).trigger("click");
          })
        } else {
          anchor_reset();
        }
      }, 10)
    }

    anchor_reset();

  });
  