let form = document.querySelector("form")
form.addEventListener('submit', function(event) {
    event.preventDefault();
    let name = retrievename (event.target)
    let surname = retrievesurname (event.target)
    let pinus = retrievepinus (event.target)
    let email = retrieveemail (event.target)
    let password = retrievepassword (event.target)
alert (name +" "+ surname+" "+ pinus+" "+ email+" "+ password)
    alert("вы зарегистрированы, готовьте попку")
});
function retrievename (form) {
    return form.nameReg.value
}
function retrievesurname (form){
    return form.surnameReg.value
}
function retrievepinus (form){
    return form.pinusReg.value
}
function retrieveemail (form){
    return form.emailReg.value
}
function retrievepassword (form){
    return form.passwordReg.value
}
console.log()