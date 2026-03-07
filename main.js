const myForm = document.querySelector("#myform");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm");
const succesForm = document.querySelector(".succesMEssage");

let iusernameValid;
let isEmailValid;
let ispassowrValid;
let isConfirmPasswordValid;
// validate all inputs in one function// named : validateInputs//
const validateInputs = () => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;  
  const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/;
  const usernameValue = document.querySelector("#username").value.trim();
  const emailValue = document.querySelector("#email").value.trim();
  const passwordValue = document.querySelector("#password").value.trim();
  const confirmPasswordValue = document.querySelector("#confirm").value.trim();
   

//   check each inputs ? if you get error call setError function || if there is no error call setSuccess function//
   //    start validating username//
   if(usernameValue === ""){
     setError(username, "username is required.");
     iusernameValid = false;
   }else{
     setSuccess(username);
     iusernameValid = true;
   };


//    start validating email//
   if(emailValue === ""){;
      setError(email, "email is required");
      isEmailValid = false;
   }else if(!emailValue.match(emailPattern)){
     setError(email, "please, enter valid input as provided.");
     isEmailValid= false;
   }else{
      setSuccess(email);
      isEmailValid = true;
   };
   //    start validating password//
   if(passwordValue === ""){
     setError(password, "password is required.");
     ispassowrValid = false;
   }else if(!passwordValue.match(strongPassword)){
     setError(password, "Password must be at least 6 characters and include an uppercase letter, a lowercase letter, a number, and a special character.");
     ispassowrValid = false;
   }else{
        setSuccess(password);
        ispassowrValid = true;
   }

      //    start validating confirm password//
      if(confirmPasswordValue === ""){
        setError(confirmPassword, "Confirm your password.");
        isConfirmPasswordValid = false;
        return;
      }else if (confirmPasswordValue !== passwordValue){
        setError(confirmPassword, "Password did not match. try again.");
        isConfirmPasswordValid = false;
        return;
      }else{
        setSuccess(confirmPassword);
        isConfirmPasswordValid = true;
      };

   succesForm.textContent = `Form Submited Successfully.`;
};

// create both functions error and success// 1. error function
const setError = (element, message) => {
    let inputParent = element.parentElement;
    inputParent.classList.remove("success");
    inputParent.classList.add("error");
    let error = inputParent.querySelector(".error");
    error.textContent = message;
    let errorIconContainer = inputParent.querySelector(".error-container");
    errorIconContainer.classList.remove("hide");
    if(!iusernameValid){
        username.focus();
    }else if (!isEmailValid){
        username.focus();
    }
    // and put focus on the error input area//
    
}
// 2. success function.

const setSuccess = (element) => {
    let inputParent = element.parentElement;
    let error = inputParent.querySelector(".error");
    error.textContent = "";
    // addd success class and remove error class//
    inputParent.classList.remove("error");
    inputParent.classList.add("success");
    let errorIconContainer = inputParent.querySelector(".error-container");
    errorIconContainer.classList.add("hide");
}

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
  if(!iusernameValid){
    username.focus();
  }else if (!isEmailValid){
    email.focus();
  }else if (!ispassowrValid){
    password.focus();
  }else if(!isConfirmPasswordValid){
    password.focus();
  }
});
