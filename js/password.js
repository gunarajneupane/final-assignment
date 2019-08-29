// Password Show / Hide
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