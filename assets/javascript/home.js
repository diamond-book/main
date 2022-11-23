console.log("home.js running");
var divContainer = document.getElementsByClassName("div-container");
setTimeout(forloop, 1);
// only div_no 0 is display , all other are hide
function forloop(){
    console.log("forloop Called");
    for (let i = 0; i < divContainer.length; ++i){
        if (i != 0) {
            divContainer[i].classList.add("hide");
        }
    }
}
// when I pressed 
// ->  arrowUp or arrowRight div_no++
// ->  arrowDown or arrowLeft div_no--
document.addEventListener("keydown", keyPress);
var div_no = 0;
function keyPress(event) {
    const keys = event.key;
    divContainer[div_no].classList.add("hide");
    if (keys == "ArrowUp" || keys == "ArrowRight") {
        div_no++;
    }
    else {
        if (keys == "ArrowDown" || keys == "ArrowLeft") {
            div_no--;
        }
    }
    if (div_no >= divContainer.length) {
        div_no = 0;
    }
    if (div_no < 0) {
        div_no = divContainer.length - 1;
    }
    divContainer[div_no].classList.remove("hide");
}

