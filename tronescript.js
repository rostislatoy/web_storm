const signInBtn = document.querySelector('.signin-btn');
const signUpBtn = document.querySelector('.signup-btn');
const formBox = document.querySelector('.form-box');
const username = document.getElementById('username');
const password = document.getElementById('password');
const regUsername = document.getElementById('r-username');
const regPassword = document.getElementById('r-password');
const join = document.getElementById('join');
const email = document.getElementById('email');
const confirm = document.getElementById('confirm');
const register = document.getElementById('register');
// const container = document.querySelector('.container');


// форма регистрации
signUpBtn.addEventListener('click', function() {
    formBox.classList.add('active');

});
signInBtn.addEventListener('click', function() {
    formBox.classList.remove('active');
});



//эмуляция процесса регистрации
const regBtn = register.addEventListener('click', function() {
  if((regUsername.value.length && email.value.length && (regPassword.value == confirm.value)) > 0){
    alert('Register is successful')
    const myObj = {
        mainUsername: regUsername.value,
        email: email.value,
        mainPassword: regPassword.value
    }
   console.log(myObj)
  }else if((regUsername.value.length && email.value.length && (regPassword.value != confirm.value)) > 0)
   alert('Passwords is incorrect')
})

const btn = join.addEventListener('click', function() {
    if(((username.value == regUsername.value)&&(password.value == regPassword.value))){
        const container = document.querySelector('.container')
        container.classList.add('active')
        alert('Join is successful')
    }
    
     else{
       alert('Incorrect username or password')
    }

})
