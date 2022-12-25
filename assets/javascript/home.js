console.log("home.js running");


let btn = document.getElementById("profile");
let spans = document.getElementsByClassName("info");

btn.onmouseenter = function () {
    for (span of spans) {
        span.classList.remove("profile-anim-reverse");
        span.classList.add("profile-anim");
    }
}
btn.onmouseleave = function () {
    for (span of spans) {
        span.classList.add("profile-anim-reverse");
        span.classList.remove("profile-anim");

    }
};
$(document).ready(function () {

    $(".profile").slideDown(3000);

    $(".profile").mouseover(function () {
        $(".ex").slideDown();
    })
    $(".profile").mouseout(function () {
        $(".ex").slideUp();
    })

});
