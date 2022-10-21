const form = document.querySelector("#seller-signup");

const firstName = document.querySelector("#fname");
const lastName = document.querySelector("#lname");
const userPassword = document.querySelector("#password");
const userID = document.querySelector("#id-num");
const phoneNumber = document.querySelector("#phone-number");
const email = document.querySelector("#email");
const transaction = document.querySelector("#transactionType");

const sellers =[
    {
        name:"Justin",
        lname:"Diaz",
        password:"pa$sw0Rd12",
        ID:"12345671",
    },
    {
        name:"Paul",
        lname:"Fireblade",
        password:"pa$sw0Rd12",
        ID:"12345672",
    },
    {
        name:"Destiny",
        lname:"Icestorm",
        password:"pa$sw0Rd12",
        ID:"12345673",
    },
    {
        name:"Penny",
        lname:"Lifebringer",
        password:"pa$sw0Rd12",
        ID:"12345674",
    },
    {
        name:"Leo",
        lname:"Dragonflame",
        password:"pa$sw0Rd12",
        ID:"12345675",
    },
    {
        name:"Scarlet",
        lname:"Manabloom",
        password:"pa$sw0Rd12",
        ID:"12345676",
    },
    {
        name:"Astra",
        lname:"Gemknight",
        password:"pa$sw0Rd12",
        ID:"12345677",
    },
    {
        name:"Skye",
        lname:"Starcaster",
        password:"pa$sw0Rd12",
        ID:"12345678",
    }
]

form.addEventListener("submit", function(e){
    e.preventDefault();
    validate();
});

function validate(){
    let hasEmptyField = false;
    let passwordReg = /(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;
    let idReg = /^[0-9]{8}$/;
    let phoneReg = /^[0-9]{3}\s?-?[0-9]{3}\s?-?[0-9]{4}$/;
    let emailReg = /\S+@[a-zA-Z]{2,5}[.][a-zA-Z]+/;

    for(let i = 0; i < 5; i++){
        if(form[i].value === ''){
            hasEmptyField = true;
        }
    }

    if(hasEmptyField){
        alert("Please fill in all the required fields.");
    }
    else if(userPassword.value.length > 10){
        alert("Password cannot exceed 10 characters");
        form[2].focus();
    }
    else if(!passwordReg.test(userPassword.value)){
        alert("Password must have at least 1 uppercase letter, 1 special character and 1 numeric character");
        form[2].focus();
    }
    else if(!idReg.test(userID.value)){
        alert("ID should only contain exactly an 8-digit number");
        form[3].focus();
    }
    else if(!phoneReg.test(phoneNumber.value)){
        alert("phone number should consist of 10 digits which can be delineated either by spaces or dashes");
        form[4].focus();
    }
    else if(document.querySelector("#emailConfirmation").checked){
        if(!emailReg.test(email.value)){
            alert("Please input a valid email address. Email must contain an @ followed by a period and an" +
                "email domain that consists of 2 to 5 characters.");
            form[5].focus();
        }
        else{
            verify();
        }
    }
    else{
        verify();
    }
}

function verify(){
    let matchFound = false;

    sellers.forEach(function(seller){
        if(firstName.value === seller.name && lastName.value === seller.lname
        && userPassword.value === seller.password && userID.value === seller.ID){
            matchFound = true;
        }
    });

    if(matchFound){
        alert(`Welcome ${firstName.value} ${lastName.value}! \n 
        Transaction: ${transaction.options[transaction.selectedIndex].text}`);
    }
    else {
        alert("No matching records found.");
    }
}

function clearForm(){
    form.reset();
}