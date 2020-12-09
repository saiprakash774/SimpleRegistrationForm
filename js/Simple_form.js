const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input', function () {
    let namRegex = new RegExp(/^[A-Z][a-z]{2,}$/);
    if (namRegex.test(text.value))
        textError.textContent = "";
    else
        textError.textContent = "Name is incorrect";
});

const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.oninput = function () {
    let emailRegex = new RegExp(/^[a-zA-Z]+([\\d\\.\\+\\-][0-9a-zA-z]+)*@[\\da-zA-Z]+.[a-zA-Z]{2,4}(.[a-zA-Z]{2,3})*$/);
    if (emailRegex.test(email.value))
        emailError.textContent = "";
    else
        emailError.textContent = "Email is invalid";
};
const pwd = document.querySelector('#pwd');
const pwdError = document.querySelector('.pwd-error');
pwd.oninput = function () {
    let pwdRegex = new RegExp(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?!(?:.*[!@#$%^&*]){2})[a-zA-Z0-9!@#$%^&*]{8,}$/);
    if (pwdRegex.test(pwd.value))
        pwdError.textContent = "";
    else
        pwdError.textContent = "Password is invalid";
};
const number = document.querySelector('#number');
const numberError = document.querySelector('.number-error');
number.oninput = function () {
    let numRegex = new RegExp(/^(\\d{2}( )?)?[6-9]{1}\\d{9}$/);
    if (numRegex.test(number.value))
        numberError.textContent = "";
    else
        numberError.textContent = "number is incorrect";
};
const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function () {
    output.textContent = salary.value;
});