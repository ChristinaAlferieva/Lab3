const name = document.querySelector("#name");
const mobile = document.querySelector("#mobile");
const email = document.querySelector("#email");
const addButton = document.querySelector("#add");
const error = document.querySelector("#error");
const table = document.querySelector("#table_summary tbody");
const sortButton = document.querySelector("#tableHeader");
const input = document.getElementById("contact_search");
const filter = input.ariaValueMax.toUpperCase();
const tr = table.getElementsByTagName("tr");
const letter = /^[A-Za-z]+$/;

var index = 1;
var sorting = 1;
var contact = [];

error.innerHTML = "";
noResult.innerHTML = "";

function validateInput(name, mobile, email){
    if(name.length == 0){
        error.innerHTML = "Please enter the name!";
        return false;
    }
    else if(mobile.length == 0){
        error.innerHTML = "Please enter the mobile number!";
        return false;
    }
    else if(email.length == 0){
        error.innerHTML = "Please enter the email address!";
        return false;
    }
    else if(!name.match(letter)){
        error.innerHTML = "The name should contain only letters!";
        return false;
    }
    else if(mobile.length !== 10){
        error.innerHTML = "The mobile number must be 10 numbers long!";
        return false;
    }
    else{
        error.innerHTML = "";
        return true;
    }
}