window.addEventListener("DOMContentLoaded", () => {
    let content = document.getElementsByClassName("content")[0];
    window.scrollTo(0,content.offsetTop);
    console.log(content.offsetTop)
})