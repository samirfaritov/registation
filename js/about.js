
let user;

function getDate() {
    user = JSON.parse(localStorage.getItem('user') || "{}")
}
getDate()
const hello = document.querySelector('.hello')

hello.innerHTML = user.name 