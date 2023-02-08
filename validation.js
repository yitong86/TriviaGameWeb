//get elements from dom
const fullName = document.getElementById("userName");
const phone = document.getElementById("phone");
const zipcode = document.getElementById("zipcode");
const email= document.getElementById("email");
const password = document.getElementById("password");
console.log(fullName,phone,zipcode,email,password);
//add event listeners

fullName.addEventListener("blur",validateFullName);
phone.addEventListener("blur",validatePhone);
zipcode.addEventListener("blur",validateZipCode);
email.addEventListener("blur",validateEmail);
password.addEventListener("blur",validatePass);
//create validation functions
function validateFullName(){
    const regEx_FullName = /^[a-zA-Z]{2,20}( )[a-zA-Z]{2,20}(()[a-zA-Z]{2,20})?$/;
    if(!regEx_FullName.test(fullName.value)){
    notValid(fullName);
        //console.log("not Valid")
    }else{
        //console.log("valid")
        valid(fullName);
    }
}
function validatePhone(){
    const regEx_phone = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    if(!regEx_phone.test(phone.value)){
        notValid(phone);
    }else{
       valid(phone);
    }
}
function validatePass(){
    const regEx_pass = /^([a-zA-Z0-9]){10}$/;
    if(!regEx_pass.test(password.value)){
        notValid(password);
    }else{
       valid(password);
    }
}
function validateEmail(){
    const regEx_email = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if(!regEx_email.test(email.value)){
        notValid(email);
    }else{
       valid(email);
    }
}


function validateZipCode(){
    const regEx_ZipCode =/^[0-9]{5}(-[0-9]{4})?$/;

    if(!regEx_ZipCode.test(zipcode.value)){
        notValid(zipcode);
            //console.log("not Valid")
        }else{
            //console.log("valid")
            valid(zipcode);
        }
}
function notValid(input){
    input.classList.add("notValid");
    input.classList.remove("Valid");
}
function valid(input){
    input.classList.remove("notValid");
    input.classList.add("Valid");
}
const form = document.forms[0];
let text = "";
for (let i = 0; i < form.length; i++) {
  text += form.elements[i].value + "<br>";
  console.log(text);
}

//document.getElementById("demo").innerHTML = text;