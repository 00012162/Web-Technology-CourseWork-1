const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const number = document.getElementById('number');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    checkInputs();
});

function checkInputs() {
    // trim to remove the whitespaces
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const numberValue = number.value.trim();
    
    if(nameValue === '') {
        setErrorFor(name, 'Username cannot be blank');
    } else {
        setSuccessFor(name);
    }
    
    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
    }

    if (numberValue === '') {
        setErrorFor(number, 'Number cannot be blank');
    }else{
        setSuccessFor(number)
    }

    function setErrorFor(input, message) {
        const inputBox = input.parentElement;
        const small = inputBox.querySelector('small');
        inputBox.className = 'inputBox error';
        small.innerText = message;
    }

    function setSuccessFor(input) {
        const inputBox = input.parentElement;
        const small = inputBox.querySelector('small');
        inputBox.className = 'inputBox success';
        small.innerText = "";
    }
        
    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
}