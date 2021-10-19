function printError(Id,Msg) {
    document.getElementById(ID).innerHTML =Msg;
}
function validateForm(){
    let name = document.forms.name.value;
    let age = document.forms.age.value;
    let email = document.forms.email.value;
    let password = document.forms.password .value;
    let gender = document.forms. gender .value;
    let subject = document.forms.subject.value;
    let country = document.forms.country.value;
    let mobile = document.forms.mobile.value;
    let condition = document.forms.condition.value;
    let nameError = emailError = countryError =genderError = true;
    if(name ==""){
        printError("nameError","Please enter your name")
        let elem = document.getElementById("name")
        elem.classList.add("input-2")
        ele.classList.remove("input-1")
    }else{
        let regex = /^ [a-ZA-Z\s]+$/;
        if(regex.test(name)===false){
            printError("nameError","please enter a valid name")
            let elem = document.getElementById("name")
            elem.classList.add("input-2")
            ele.classList.remove("input-1")
        }else{ 
            printError("nameError","")
            nameError=false;
            let elem = document.getElementById("name")
            elem.classList.add("input-2")
            ele.classList.remove("input-1")

        }

    }
    if(email ==""){
        printError("nameError","Please enter your email address")
        let elem = document.getElementById("email")
        elem.classList.add("input-2")
        ele.classList.remove("input-1")
    }else{
        let regex = /^\S+@\S+\.\S+$ /;
        if(regex.test(email)===false){
            printError("emailError","please enter a valid email address")
            let elem = document.getElementById("email")
            elem.classList.add("input-2")
            ele.classList.remove("input-1")
        }else{ 
            printError("emailError","")
            emailError=false;
            let elem = document.getElementById("email")
            elem.classList.add("input-2")
            ele.classList.remove("input-1")

        }
        
    }
    if(mobile ==""){
        printError("mobileError","Please enter your  mobile number")
        let elem = document.getElementById("mobile")
        elem.classList.add("input-2")
        ele.classList.remove("input-1")
    }else{
        let regex = /^[0-9]\d{9}$ /;
        if(regex.test(mobile)===false){
            printError("mobileError","please enter a valid 10 digit mobile number")
            let elem = document.getElementById("mobile")
            elem.classList.add("input-2")
            ele.classList.remove("input-1")
        }else{ 
            printError("mobileError","")
            emailError=false;
            let elem = document.getElementById("mobile")
            elem.classList.add("input-2")
            ele.classList.remove("input-1")

        }
        
    }


    if(country =="Choose"){
        printError("countyError","Please choose your state")
        let elem = document.getElementById("country ")
        elem.classList.add("input-4")
        ele.classList.remove("input-3")
    }else{
        printError("countryError","Please ")
        countryError=false;
        let elem = document.getElementById("country ")
        elem.classList.add("input-3")
        ele.classList.remove("input-4")
        
    }
    
    if(gender ==""){
        printError("genderError","Please select your gender")
        let elem = document.getElementById("gender")
        elem.classList.add("input-4")
        ele.classList.remove("input-3")
    }else{
        printError("genderError","Please ")
        genderError=false;
        let elem = document.getElementById("gender")
        elem.classList.add("input-3")
        ele.classList.remove("input-4")
        
    }
if((nameError|| emailError || mobileError || genderError|| countryError)== true){
    return false;
}
    


}