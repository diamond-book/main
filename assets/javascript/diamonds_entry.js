//add employee



var addemplyeeofselecteddiamondbutton = document.getElementsByClassName("add-emplyee-of-selected-diamond-button")[0];
var closeaddemployeforselecteddiamondtype = document.getElementsByClassName("close-addemploye-for-selected-diamond-type")[0];
var addEntryofemployeforselecteddimondtype = document.getElementById("add-Entry-of-employe-for-selected-dimond-type");
var addempolyeforselecteddiondtypesubmitbutton = document.getElementById("addempolye-for-selected-diond-type-submit-button");

addemplyeeofselecteddiamondbutton.addEventListener("click", function () {

    addEntryofemployeforselecteddimondtype.style.display = "block";
    document.getElementById("body").style.filter = "blur(3px)"

})

addempolyeforselecteddiondtypesubmitbutton.onclick = function () {
    addEntryofemployeforselecteddimondtype.style.display = "none";
    document.getElementById("body").style.filter = "blur(0px)"
}

closeaddemployeforselecteddiamondtype.addEventListener("click", function () {
    addEntryofemployeforselecteddimondtype.style.display = "none";
    document.getElementById("body").style.filter = "blur(0px)"
})


//edit diamond-name, diamond-price


var PencileIconforDiamond = document.getElementsByClassName("pencile-icon-for-diamond")[0];


var x = document.getElementsByClassName("diamond-type-heading")[0];

x.addEventListener("mouseenter", function () {
    PencileIconforDiamond.style.display = "block";
})

x.addEventListener("mouseleave", function () {
    PencileIconforDiamond.style.display = "none";

})

PencileIconforDiamond.addEventListener("mouseenter", function () {
    PencileIconforDiamond.style.display = "block";
})

var editDiamondPopUpClose = document.getElementsByClassName("edit-diamond-pop-up-close")[0];
var editDimondTypePrice = document.getElementById("edit-dimond-type-price");
var editDiamondTypePriceButtonPopUpSubmitButton = document.getElementById("edit-diamond-type-price-button-pop-up-submit-button");

PencileIconforDiamond.addEventListener("click", function () {

    editDimondTypePrice.style.display = "block";
    document.getElementById("body").style.filter = "blur(3px)"

})

editDiamondTypePriceButtonPopUpSubmitButton.onclick = function () {
    editDimondTypePrice.style.display = "none";
    document.getElementById("body").style.filter = "blur(0px)"
}

editDiamondPopUpClose.addEventListener("click", function () {
    editDimondTypePrice.style.display = "none";
    document.getElementById("body").style.filter = "blur(0px)"
})




//heading

// var headingbox=document.getElementsByClassName('.diamond-type-heading-box')[0];

// var headingbox1=document.getElementsByClassName('.diamond-type-heading-box1')[0];

// var headingbox2=document.getElementsByClassName('.diamond-type-heading-box2')[0];


{

    var saveBtn = document.getElementsByClassName("save-btn");


    for (let j = 0; j < saveBtn.length; j++) {
        saveBtn[j].addEventListener
            ("click", function () {
                document.getElementsByClassName("select")[j].disabled = true;
                document.getElementsByClassName("select")[j].style.color = "black";
                document.getElementsByClassName("pencil-icon-btn")[j].disabled = false;
                document.getElementsByClassName("pencil-icon-btn")[j].style.color = "#f62c04";

            });
    }
}

//edit pop-up


{


    // var pencilIconBtn = document.getElementsByClassName("pencil-icon-btn");
    var editPopUpSubmitButton = document.getElementById("edit-pop-up-submit-button1");
    var selectedId = document.getElementsByClassName("entryId");

    var closeaddemployeforselecteddiamondtype = document.getElementsByClassName("close-addemploye-for-selected-diamond-type")[1];


    var popUpEdit = document.getElementById("pop-up-edit");

    var ourId;

    function setId(id, noOfDiamond, status){
        console.log(id);
        document.getElementById('pop-up-edit-input-debated-diamonds').value = noOfDiamond;
        document.getElementById('selected-entry-status').selectedIndex = status;
        document.getElementById('selected-entry-status').querySelectorAll('option')[status].selected=true;
        var status1 = document.getElementById('selected-entry-status');

        popUpEdit.style.display = "block";
        document.getElementById("body").style.filter = "blur(3px)";

        editPopUpSubmitButton.onclick = function () {
            popUpEdit.style.display = "none";
            var url  = '/entry/update/?id='+id;
            console.log(url);
            document.getElementById('entry-update-form').action = url;
            document.getElementById("body").style.filter = "blur(0px)"
        }

        closeaddemployeforselecteddiamondtype.addEventListener("click", function () {
            popUpEdit.style.display = "none";
            document.getElementById("body").style.filter = "blur(0px)"
        })
    }




    function saveFunction() {
        var selectElement = document.getElementsByClassName('select-options');


        for (var i = 0; i < selectElement.length; i++) {
            var select = selectElement[i].getElementsByClassName("select")[0].value;
            if (select == "1") {
                document.getElementsByClassName("save-btn")[i].disabled = false;
                document.getElementsByClassName("save-btn")[i].classList.add("save-btn1");

            }

            else {
                document.getElementsByClassName("save-btn")[i].disabled = true;
                document.getElementsByClassName("save-btn")[i].classList.remove("save-btn1");

            }

            console.log(select);

            select = "";
        }

    }
}
