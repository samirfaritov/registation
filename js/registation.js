let patterns = {
    name: /^[a-z ,.'-]+$/i,
    surname: /^[a-z ,.'-]+$/i,
    password: /^[a-z ,.'-]+$/i,
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ig
}


const inps = document.querySelectorAll('input')
const btn = document.querySelector('.btn')
const form = document.forms.login

let txt = ''


for (let i = 0; i < inps.length; i++) {
    inps[i].addEventListener('keyup', (e) => {
        txt = e.target.value
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let user = {}

    let fm = new FormData(form)

    fm.forEach((value, key) =>{
        user[key] = value
    })

    localStorage.setItem('user', JSON.stringify(user))

    location.href = '/html/login.html'

    
})

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
