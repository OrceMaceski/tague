mybutton = document.getElementById("toTop");

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

function toTop() {

    (window.pageYOffset = 0) || (document.documentElement.scrollTop = 0) || (document.body.scrollTop = 0) ||
    0
};