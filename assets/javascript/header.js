let home = document.getElementById("nav-links-home");
let spansHome = document.getElementsByClassName("link-home");
var span;

console.log('header js running');
home.onmouseover = function () {
    for (span of spansHome) {
        span.classList.add("bouncer");
    }
    setTimeout(function () {
        for (span of spansHome) {
            span.classList.remove("bouncer");
        }
    }, 500);
}

let aboutUs = document.getElementById("nav-links-aboutus");
let spansAboutUs = document.getElementsByClassName("link-aboutus");
var span;
aboutUs.onmouseover = function () {
    for (span of spansAboutUs) {
        span.classList.add("bouncer");
    }
    setTimeout(function () {
        for (span of spansAboutUs) {
            span.classList.remove("bouncer");
        }
    }, 500);
}

let news = document.getElementById("nav-links-news");
let spansNews = document.getElementsByClassName("link-news");
var span;
news.onmouseover = function () {
    for (span of spansNews) {
        span.classList.add("bouncer");
    }
    setTimeout(function () {
        for (span of spansNews) {
            span.classList.remove("bouncer");
        }
    }, 500);
}

let extra = document.getElementById("nav-links-extra");
let spansExtra = document.getElementsByClassName("link-extra");
var span;
extra.onmouseover = function () {
    for (span of spansExtra) {
        span.classList.add("bouncer");
    }
    setTimeout(function () {
        for (span of spansExtra) {
            span.classList.remove("bouncer");
        }
    }, 500);
}

let btn = document.getElementById("signup-btn");
let spans = document.getElementsByTagName("span");

btn.onclick = function () {
    for (span of spans) {
        span.classList.add("signup-btn-anim");
    }
    setTimeout(function () {
        for (span of spans) {
            span.classList.remove("signup-btn-anim");
        }
    }, 1000);

    location.href = '/user/sign-up';
}
