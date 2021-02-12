const btnLogginToogle = document.getElementById("login-toggle");
const btnSignupToogle = document.getElementById("signup-toggle");
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");

function enableBtnToggles() {
  toggleLogin();
  toggleSignup();
}

function toggleLogin(){
  btnLogginToogle.addEventListener('click', () => {
    btnLogginToogle.classList.add('btn-primary')
    btnLogginToogle.classList.remove('btn-light')
      
    btnSignupToogle.classList.remove('btn-primary')
    btnSignupToogle.classList.add('btn-light')
      
    signupForm.style.display="none";
    loginForm.style.display="block";
  }); 
}

function toggleSignup(){
  btnSignupToogle.addEventListener('click', () => {
    btnLogginToogle.classList.remove('btn-primary')
    btnLogginToogle.classList.add('btn-light')

    btnSignupToogle.classList.remove('btn-light')
    btnSignupToogle.classList.add('btn-primary')

    loginForm.style.display="none";
    signupForm.style.display="block";
  })
}

enableBtnToggles();