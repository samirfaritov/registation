let patterns = {
    name: /^[a-z ,.'-]+$/i,
    surname: /^[a-z ,.'-]+$/i,
    password: /^[a-z ,.'-]+$/i,
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ig
}



const btn = document.querySelector('.btn')
const pochta = document.querySelector('.pochta')
const parol = document.querySelector('.parol')
const form = document.forms.login

let namee = ''
let password = ''

let user;

function getDate() {
    user = JSON.parse(localStorage.getItem('user') || "{}")
}

pochta.addEventListener('keyup', (e) => {
    namee = e.target.value
})
parol.addEventListener('keyup', (e) => {
    password = e.target.value
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (user.email === namee && user.password === password) {
        location.href = '/html/about.html'
    } else {
        alert('hatto')
    }
})
const inps = document.querySelectorAll('input')

inps.forEach(inp => {
    inp.onkeyup = () => {
        console.log(
            patterns[inp.name].test(inp.value)
            );
            if (patterns[inp.name].test(inp.value)) {
                inp.parentElement.classList.remove('errorField')
            } else {
                inp.parentElement.classList.add('errorField')
            }
        }
    })
    
    getDate()