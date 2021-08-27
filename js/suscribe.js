// The newsletter validation message script

function suscribe(){
    var validation = document.getElementById('validation');
    var email = document.getElementById('email-field');

    if(email.checkValidity()){
        validation.innerHTML = "Merci, vous allez recevoir un e-mail de confirmation";
    }else{
        validation.innerHTML = "E-mail invalide";
    } 
}