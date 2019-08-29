function showPass(){
    var passType = document.getElementById("pass");
    var conPassType = document.getElementById("passConfirm");
    var eye = document.getElementById("see");

        if(passType.type === 'password' && conPassType.type === 'password'){
            passType.type = 'text';
            conPassType.type = 'text';
            eye.className = 'far fa-eye-slash';
            }
        
            else{
            passType.type = 'password';
            conPassType.type = 'password';
            eye.className = 'far fa-eye';
        }

}


// to add innerhtml
function addHtml(idName, string){
    document.getElementById(idName).innerHTML = "<i style='color: red;' class='fas fa-exclamation-circle'></i> " + string;
}

function emptyHtml(idName, string){
    document.getElementById(idName).innerHTML = string;
}

function errBorder(idName){
    document.getElementById(idName).className = 'after-border';
}

function originalBorder(idName){
    document.getElementById(idName).className = 'original-border';
}


// Form Validation
function validateForm()
{
    
    // Validations

    var firstName = document.getElementById("firstName").value;
    var familyName = document.getElementById("familyName").value;
    var pass = document.getElementById("pass").value;
    var passConf = document.getElementById("passConfirm").value;
    var email = document.getElementById("email").value;
    var day = document.getElementById("dobDay").value;
    var year = document.getElementById("dobYear").value;
    var sex = document.form.sex.value;
    var terms = document.form.terms.checked;


    // patterns 
    var letters = /^[A-Za-z]+$/;
    var passPattern = /(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)[0-9a-zA-Z!@#$%^&*()]*$/;


    if(firstName=="" || !(firstName.match(letters)) ){
        errBorder("firstBorder");
        addHtml("firstErr", "Please enter correct name");
        firstIsError = true;
    }else{
        emptyHtml("firstErr", "");
        originalBorder("firstBorder");
        firstIsError = false;
    }

    if(familyName=="" || !familyName.match(letters)){
        errBorder("lastBorder");
        addHtml("lastErr", "Please enter correct lastname");
        familyIsError = true;
    }else{
        emptyHtml("lastErr", "");
        originalBorder("lastBorder");
        familyIsError = false;
    }

    if(pass=="" || !pass.match(passPattern)){
        errBorder("passBorder");
        addHtml("passErr", "Please check the password");       
        passIsError = true;
    }else{
        emptyHtml("passErr", "");
        originalBorder("passBorder");
        passIsError = false;
    }

    if(pass!=passConf){
        errBorder("passBorder");
        addHtml("passMatch", "Password doesn't match");
        passNotConfirmed = true;        
    }else{
        emptyHtml("passMatch", "");
        originalBorder("passBorder");
        passNotConfirmed = false;
    }

    if(email=="" || !(/(.+)@(.+){2,}\.(.+){2,}/.test(email))){
        errBorder("emailBorder");
        addHtml("emailErr", "Please check the email limitations")
        emailIsError = true;
    }else{
        emptyHtml("emailErr", "");
        originalBorder("emailBorder");
        emailIsError = false;
    }

    if(day=="" || day > 31 || day < 1 ){
        errBorder("dayBorder");
        addHtml("dayErr", "Please enter correct day");
        dayIsError = true;
    }else{
        emptyHtml("dayErr", "");
        originalBorder("dayBorder");
        dayIsError = false;
    }

    if(year=="" || year > 2015){
        errBorder("yearBorder");
        addHtml("yearErr", "Please enter year");
        yearIsError = true;
    }else{
        emptyHtml("yearErr", "");
        originalBorder("yearBorder");
        yearIsError = false;
    }

    if(sex==""){
        addHtml("sexErr", "Please select your sex");
        sexIsError = true;
    }else{
        emptyHtml("genderErr", "");
        sexIsError = false;
    }

    if(terms==false){
        addHtml("termsErr", "Please check terms and conditions");
        termsIsError = true;
    }else{
        emptyHtml("termsErr", "");
        termsIsError = false;
    }

    if((firstIsError || familyIsError || emailIsError || passIsError || passNotConfirmed || dayIsError || yearIsError || sexIsError || termsIsError) == true){
        return false;
    }
    else{
        return true;
    } 
}
