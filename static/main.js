function validateName() {
    // validate name on contact page
    var name = document.forms["myForm"]["name"].value;
    var spacepos = name.indexOf(" ")
    if (name.length > 3 && name.length < 30 && spacepos > 1) {
        document.getElementById("name").style.borderColor = "#000"
        return true
    } 
    else{
        document.getElementById("name").style.borderColor = "#ff0000"
        } 
}
function validateEmail() {
    //Validate email on contact page
    var email = document.forms["myForm"]["email"].value;
    var atpos = email.indexOf("@");
    if (atpos>1 && (email.endsWith(".com") || email.endsWith(".pl"))) {
        document.getElementById("email").style.borderColor = "#000"
        return true
    }
    else{
        document.getElementById("email").style.borderColor = "#ff0000"
        } 
}
function validateMessage(){
    // validate message on contact page
    var message = document.forms["myForm"]["message"].value;
    if (message.length > 20 && message.length < 500){
        document.getElementById("message").style.borderColor = "#000"
        return true
    }
    else{
        document.getElementById("message").style.borderColor = "#ff0000"
        } 
}
function validateForm() {
    // enable or disalbe button to send message
    if (validateName() && validateEmail() && validateMessage()){
        document.getElementById("send").disabled = false; 
    }
    else{
        document.getElementById("send").disabled = true;
    }
    
    }

function sendMessage(){
    // alert user after sent message
    var message = document.forms["myForm"]["message"].value;
    var email = document.forms["myForm"]["email"].value;
    var name = document.forms["myForm"]["name"].value;
    alert("Your message was sent!")
}
