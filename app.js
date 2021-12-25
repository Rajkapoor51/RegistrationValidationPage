function printError(Id,Msg){
    document.getElementById(Id).innerHTML=Msg;
}

function validateForm(){
    var name=document.Form.name.value;
    var email=document.Form.email.value;
    var mobile=document.Form.mobile.value;
    var city=document.Form.city.value;
    var password=document.Form.password.value;
    var cfpassword=document.Form.cfpassword.value;

    var nameErr=emailErr=mobileErr=cityErr=passwordErr=cfpasswordErr=true;

    if(name==""){
        printError("nameErr","please Enter your name");
            var elem=document.getElementById("name");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    }else{
        var regex=/^[a-zA-Z\s]+$/;
        if(regex.test(name)===false){
            printError("nameErr", "Please enter valid name");
            var elem=document.getElementById("name");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        }else{
            printError("nameErr","");
            nameErr=false;
            var elem=document.getElementById("name");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
        }
    }

    if(email==""){
        printError("emailErr","please Enter your email address");
            var elem=document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    }else{
        var regex=/^\S+@\S+\.\S+$/;
        if(regex.test(email)===false){
            printError("emailErr", "Please enter valid email address (example-xyz99@gmail.com");
            var elem=document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        }else{
            printError("emailErr","");
            emailErr=false;
            var elem=document.getElementById("email");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
        }
    }

    if(mobile==""){
        printError("mobileErr","please Enter your mobile number");
            var elem=document.getElementById("mobile");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    }else{
        var regex=/^[1-9]\d{9}$/;
        if(regex.test(mobile)===false){
            printError("mobileErr", "Please enter valid 10 digit number only");
            var elem=document.getElementById("mobile");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        }else{
            printError("mobileErr","");
            mobileErr=false;
            var elem=document.getElementById("mobile");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
        }
    }

    if(city=="Select"){
        printError("cityErr","please select your  city");
            var elem=document.getElementById("city");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
    }else{
        printError("cityErr","");
        cityErr=false;
        var elem=document.getElementById("city");
        elem.classList.add("input-3");
        elem.classList.remove("input-4");
    }

    if(password==""){
        printError("passwordErr","please Enter your password");
            var elem=document.getElementById("password");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    }else{
        var regex=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        if(regex.test(password)===false){
            printError("passwordErr", "Please enter at least one number, one lowercase, one uppercase letter and six characters");
            var elem=document.getElementById("password");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        }else{
            printError("passwordErr","");
            passwordErr=false;
            var elem=document.getElementById("password");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
        }
    }if(cfpassword==""){
        printError("cfpasswordErr","please confirm your password");
            var elem=document.getElementById("cfpassword");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    }else if(password!=cfpassword){
        printError("cfpasswordErr", "Password did not match: Please try again...");
        var elem=document.getElementById("cfpassword");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    }else{
        printError("cfpasswordErr","");
        passwordErr=false;
        var elem=document.getElementById("cfpassword");
        elem.classList.add("input-1");
        elem.classList.remove("input-2");
    }

    if((nameErr|| emailErr||mobileErr||cityErr||passwordErr||cfpassword)==true){
        return false;
    }

};


