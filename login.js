function loginValidate(){

    var mailId = document.forms.logInForm.mailId.value ;
    var passWord = document.forms.logInForm.passWord.value ;
    var prompt = false ;
    console.log(passWord) ;
    if (passWord.search(/[a-z]/g)==-1){
            window.alert("password should contain lowercase") ;
        prompt = true ;
    }
    if (passWord.search(/[A-Z]/g)==-1 && prompt ==false){
            window.alert("password should contain uppercase") ;
        prompt = true ;
    }if (passWord.search(/[0-9]/g)==-1 && prompt == false){
        prompt = true ;
            window.alert("password should contain number") ;
    }if (passWord.search(/"[^A-Za-z0-9]"/)!=-1 && prompt == false){
        prompt = true ;
            window.alert("password should contain special character") ;
    }if (mailId=="" || mailId.search('@')==-1){
         prompt = true ;
            window.alert("Invalid Username") ;
    }
//    if (prompt==false){
//        document.getElementById("loginSubmit").href = ;
//    }
    
 
} 