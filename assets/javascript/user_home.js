var buttonAddDimondType = document.getElementsByClassName("plusbutton");
var closeDimondType = document.getElementsByClassName("close-dimondtype")[0];
var adddimondtype = document.getElementById("add-dimondtype");
var adddimondtypesubmitbutton = document.getElementById("add-dimond-submit-button");
buttonAddDimondType[0].addEventListener("click", function(){

    adddimondtype.style.display="block";
    document.getElementById("body").style.filter="blur(3px)"

})

adddimondtypesubmitbutton.onclick=function(){
    adddimondtype.style.display="none";
    document.getElementById("body").style.filter="blur(0px)"
}

closeDimondType.addEventListener("click", function(){
    adddimondtype.style.display="none";
    document.getElementById("body").style.filter="blur(0px)"
})

window.onclick=function(event){
    if(event.target==adddimondtype)
    {
        adddimondtype.style.display="none";
         document.getElementById("body").style.filter="blur(0px)"
    }
}


//add employee

var addemployeebutton=document.getElementsByClassName("add-emplyee-button")[0];
var closeaddemplyee = document.getElementsByClassName("close-addemploye")[0];
var addemployee = document.getElementById("add-Employe");
var addemployesubmitbutton = document.getElementById("addempolye-submit-button");

addemployeebutton.addEventListener("click", function(){

    addemployee.style.display="block";
    document.getElementById("body").style.filter="blur(3px)"

})

addemployesubmitbutton.onclick=function(){
    addemployee.style.display="none";
    document.getElementById("body").style.filter="blur(0px)"
}

closeaddemplyee.addEventListener("click", function(){
    addemployee.style.display="none";
    document.getElementById("body").style.filter="blur(0px)"
})
