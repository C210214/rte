$("#newUser").click(function(){
    $("h1").text("Registration");
    $(".logo").css({
      "width":"120px",
      "height":"120px",
      "top":"10px"
    });
    $("#login-form").fadeOut(200);
    $("#registration-form").delay(200).fadeIn(500);
    $(".other-options").fadeOut(200);
  });
  
  $("#signup-btn,#getpass-btn").click(function(){
    $("h1").text("Log in");
    $(".logo").css({
      "width":"150px",
      "height":"150px",
      "top":"30px"
    });
  
    $("#registration-form,#fpass-form").fadeOut(200);
    $("#login-form").delay(200).fadeIn(500);
    $(".other-options").fadeIn(300);
  });
  
  $("#fPass").click(function(){
    $("h1").text("Forgot password");
    $(".logo").css({
      "width":"190px",
      "height":"190px",
      "top":"40px"
    });
  
    $("#login-form").fadeOut(200);
    $("#fpass-form").delay(200).fadeIn(500);
    $(".other-options").fadeOut(200);
  });


  
const isValidEmail = (email) => {
    const re = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return re.test(String(email).toLowerCase());
};

const form = document.querySelector("#login-form");
const thankyou = document.querySelector(".thank-you");
const nameInput = document.querySelector(
    'input[name="name"]'
);
const emaillInput = document.querySelector(
    'input[name="emaill"]'
);

const inputs = [nameInput, emaillInput];

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

    if (!isValidEmail(emaillInput.value)){
        isFormValid = false;
        invalidateElm(emaillInput);
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


