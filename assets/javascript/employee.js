//add employee

var adddiamondlistofemployeebutton = document.getElementsByClassName("add-diamond-list-of-employee-button")[0];
var closeaddEntryofdiamondtype = document.getElementsByClassName("close-add-Entry-of-diamond-type")[0];
var addEntryofdiamondtype = document.getElementsByClassName("add-Entry-of-diamond-type")[0];
var adddimondofemplyeetypesubmitbutton = document.getElementById("add-dimond-of-emplyee-type-submit-button");
var employeefullinfo = document.getElementsByClassName("employee-full-info")[0];
var employeediamondinfo = document.getElementsByClassName("employee-diamond-info")[0];


adddiamondlistofemployeebutton.addEventListener("click", function () {

    addEntryofdiamondtype.style.display = "block";
    document.getElementsByClassName("body")[0].style.filter = "blur(3px)"
    employeefullinfo.style.zIndex = '-5';

})

adddimondofemplyeetypesubmitbutton.onclick = function () {
    addEntryofdiamondtype.style.display = "none";
    document.getElementsByClassName("body")[0].style.filter = "blur(0px)"
    employeefullinfo.style.zIndex = '0';
}

closeaddEntryofdiamondtype.addEventListener("click", function () {
    addEntryofdiamondtype.style.display = "none";
    document.getElementsByClassName("body")[0].style.filter = "blur(0px)"
    employeefullinfo.style.zIndex = '0';
})

employeediamondinfo.addEventListener("mouseenter", function () {
    employeefullinfo.style.filter = 'blur(1px)';
    employeefullinfo.style.opacity = '0.999';
});

employeediamondinfo.addEventListener("mouseleave", function () {
    employeefullinfo.style.filter = 'blur(0px)';
    employeefullinfo.style.opacity = '1'
})
