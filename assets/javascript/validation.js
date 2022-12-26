var phoneValidation = document.getElementsByClassName("phone-validation");
phoneValidation.addEventListener("focusout", phoneValidationFun);


var adharValidation = document.getElementsByClassName("adhar-validation");
adharValidation.addEventListener("focusout", adharValidationFun);


var nameValidation = document.getElementsByClassName("name-validation");
nameValidation.addEventListener("focusout", nameValidationFun);

function ValidationFun() {
    if ((phoneValidation.value.length) != 10) {
        alert("Phone no. contain only 10 digit");

    }
    if ((adharValidation.value.length) != 12) {
        alert("adhar no. contain only 12 digit");
    }
    var s = nameValidation.value;
    for (var i = 0; i < s.length; ++i) {
        if ('0' < s[i] && s[i] < '9') {
            alert("name contain only alphabats");
        }
    }
}