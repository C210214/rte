const isValidEmail = (email) => {
    const re = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return re.test(String(email).toLowerCase());
};

const form = document.querySelector('form');
const thankyou = document.querySelector(".thank-you");
const nameInput = document.querySelector(
    'input[name="name"]'
);
const emailInput = document.querySelector(
    'input[name="email"]'
);
const numberInput = document.querySelector(
    'input[name="number"]'
);
const messageInput = document.querySelector(
    'textarea[name="message"]'
);

const inputs = [nameInput, emailInput, numberInput, messageInput];

let isFormValid = false;
let isValidationOn = false;

const resetElm = (elm) =>{
    elm.classList.remove("invalid");
};

const invalidateElm = (elm) => {
    elm.classList.add("invalid");
};

const validateInputs = () => {
    if(!isValidationOn) return;

    isFormValid = true;
    inputs.forEach(resetElm)

    if (!nameInput.value){
        isFormValid = false;
        invalidateElm(nameInput);
    }

    if (!isValidEmail(emailInput.value)){
        isFormValid = false;
        invalidateElm(emailInput);
    }

    if (!numberInput.value){
        isFormValid = false;
        invalidateElm(numberInput);
    }

    if (!messageInput.value){
        isFormValid = false;
        invalidateElm(messageInput);
    }
};

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    isValidationOn = true;
    validateInputs();
    if(isFormValid) {
        
        thankyou.classList.remove("hidden");
    }
});

inputs.forEach((input) => {
    input.addEventListener("input", () => {
        validateInputs();
    });
});


