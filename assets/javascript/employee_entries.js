//edit employee info


{


    var pencilIconForEditEmployeeInfo = document.getElementsByClassName("pencil-icon-for-edit-employee-info")[0];
    var editEmpolyeInfoSubmitButton = document.getElementById("edit-empolye-info-submit-button");

    var closeEditEmploye = document.getElementsByClassName("close-edit-employe")[0];


    var editEmployeInfo = document.getElementById("edit-Employe-info");



    pencilIconForEditEmployeeInfo.addEventListener("click", function () {



        editEmployeInfo.style.display = "block";
        document.getElementById("body").style.filter = "blur(3px)"

    })

    editEmpolyeInfoSubmitButton.addEventListener("click",function () {
        editEmployeInfo.style.display = "none";
        document.getElementById("body").style.filter = "blur(0px)"
    });

    closeEditEmploye.addEventListener("click", function () {
        editEmployeInfo.style.display = "none";
        document.getElementById("body").style.filter = "blur(0px)"
    })




    //add employee

    var adddiamondlistofemployeebutton = document.getElementsByClassName("add-diamond-list-of-employee-button")[0];
    var closeaddEntryofdiamondtype = document.getElementsByClassName("close-add-Entry-of-diamond-type")[0];
    var addEntryofdiamondtype = document.getElementsByClassName("add-Entry-of-diamond-type")[0];
    var adddimondofemplyeetypesubmitbutton = document.getElementById("add-dimond-of-emplyee-type-submit-button");



    adddiamondlistofemployeebutton.addEventListener("click", function () {

        addEntryofdiamondtype.style.display = "block";
        document.getElementById("body").style.filter = "blur(1px)"

    })

    adddimondofemplyeetypesubmitbutton.onclick = function () {
        addEntryofdiamondtype.style.display = "none";
        document.getElementById("body").style.filter = "blur(0px)"
    }

    closeaddEntryofdiamondtype.addEventListener("click", function () {
        addEntryofdiamondtype.style.display = "none";
        document.getElementById("body").style.filter = "blur(0px)"
    })



    {

        var saveBtnEmployee = document.getElementsByClassName("save-btn-employee");


        for (let j = 0; j < saveBtnEmployee.length; j++) {
            saveBtnEmployee[j].addEventListener
                ("click", function () {
                    document.getElementsByClassName("select-status-employee")[j].disabled = true;
                    document.getElementsByClassName("select-status-employee")[j].style.color = "black";


                });
        }
    }


    //edit pop-up


    {


        var pencilIconBtnEmployee = document.getElementsByClassName("pencil-icon-btn-employee");
        var editEmployeePopUpSubmitButton = document.getElementById("edit-employee-pop-up-submit-button");

        var editEmployeePopUpClose = document.getElementsByClassName("edit-employee-pop-up-close")[0];


        var editPopUpEmployee = document.getElementById("edit-pop-up-employee");


        for (let j = 0; j < pencilIconBtnEmployee.length; j++) {

            console.log(j);
            pencilIconBtnEmployee[j].addEventListener("click", function () {


                console.log(pencilIconBtnEmployee + "" + editEmployeePopUpSubmitButton + "" + editEmployeePopUpClose + "" + editPopUpEmployee);

                editPopUpEmployee.style.display = "block";
                document.getElementById("body").style.filter = "blur(3px)"

            })

            editEmployeePopUpSubmitButton.onclick = function () {
                editPopUpEmployee.style.display = "none";
                document.getElementById("body").style.filter = "blur(0px)"
            }

            editEmployeePopUpClose.addEventListener("click", function () {
                editPopUpEmployee.style.display = "none";
                document.getElementById("body").style.filter = "blur(0px)"
            })

        }



        //save 


        function setId(id, noOfDiamond, status) {


            document.getElementById('add-no-of-diamond-edit').value = noOfDiamond;
            document.getElementById('selected-entry-status').selectedIndex = status;
            document.getElementById('selected-entry-status').querySelectorAll('option')[status].selected=true;
            var status1 = document.getElementById('selected-entry-status');


            editPopUpEmployee.style.display = "block";
            document.getElementById("body").style.filter = "blur(3px)"

            editEmployeePopUpSubmitButton.onclick = function () {
                editPopUpEmployee.style.display = "none";
                var url  = '/entry/update/?id='+id;

                document.getElementById('entry-update-form').action = url;
                document.getElementById("body").style.filter = "blur(0px)"
            }

            editEmployeePopUpClose.addEventListener("click", function () {
                editPopUpEmployee.style.display = "none";
                document.getElementById("body").style.filter = "blur(0px)"
            })


        }


        function saveFunction2() {
            var selectElement = document.getElementsByClassName('select-options-status-employee');


            for (var i = 0; i < selectElement.length; i++) {
                var select = selectElement[i].getElementsByClassName("select-status-employee")[0].value;
                if (select == "completed") {
                    document.getElementsByClassName("save-btn-employee")[i].disabled = false;
                    document.getElementsByClassName("save-btn-employee")[i].classList.add("save-btn1");

                }

                else {
                    document.getElementsByClassName("save-btn-employee")[i].disabled = true;
                    document.getElementsByClassName("save-btn-employee")[i].style.color = '#f60c04';
                    document.getElementsByClassName("save-btn-employee")[i].classList.remove("save-btn1");

                }

                console.log(select);

                select = "";
            }

        }
    }

}