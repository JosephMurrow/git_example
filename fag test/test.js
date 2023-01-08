let form = document.querySelector('form')
form.addEventListener('submit', function(event) {
    event.preventDefault();
    let name = retrieveName(event.target)
    while (!confirm(name + " Ты пидОр?")) {
        alert ("пидора ответ попробуй еще раз")
    }
    alert ("хорошо что сознался  " + name)
});
function retrieveName (form) {
    return form.penis.value
}
