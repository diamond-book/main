var phoneValidation = document.getElementsByClassName("phone-validation");


var adharValidation = document.getElementsByClassName("adhar-validation");


var nameValidation = document.getElementsByClassName("name-validation");
phoneValidation.addEventListener("focusout", phoneValidationFun); 

function ValidationFun() {
    if ((phoneValidation.value.length) != 10) {
        document.getElementById('submit-validetion').action = '/';
        alert("Phone no. contain only 10 digit");

    }
    if ((adharValidation.value.length) != 12) {
        alert("adhar no. contain only 12 digit");
        document.getElementById('submit-validetion').action = '/';
    }
    var s = nameValidation.value;
    for (var i = 0; i < s.length; ++i) {
        if ('0' < s[i] && s[i] < '9') {
            alert("name contain only alphabats");
            document.getElementById('submit-validetion').action = '/';
        }
    }
}